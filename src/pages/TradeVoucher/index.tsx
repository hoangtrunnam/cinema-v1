import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/esm/Button";
import { getListGift, getListGiftForTrade, tradeGift } from "src/api/film";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { useRecoilValue } from "recoil";
import { userInfoProfileState } from "src/recoil/userProfile/atom";
import { baseUrl } from "src/api/config";
import { useNavigate } from "react-router-dom";
import { FaCopy } from "react-icons/fa6";
import ToastMessage from "src/hooks/ToastMessage";
import { toast } from "react-toastify";
export interface IGiftTraded {
  id: number;
  changeGiftCode: any;
  phoneCus: string;
  giftName: string;
  giftId: number;
  giftPoint: number;
  cusId: number;
  usedStatus: boolean;
}

export interface IGift {
  id: number;
  giftName: string;
  image: string;
  point: number;
  isStatus: boolean;
  fromDate: string;
  toDate: string;
  description: string;
}

enum activeTabs {
  myGift = "MY-GIFT",
  tradedGift = "TRADED-GIFT",
}

const TradeVoucher = () => {
  const navigate = useNavigate();
  const userProfileState = useRecoilValue(userInfoProfileState);
  const [listGift, setListGift] = useState<IGift[]>([]);
  const [itemGiftPicked, setItemGiftPicked] = useState<IGift>({
    id: -1,
    giftName: "",
    image: "",
    point: -1,
    isStatus: false,
    fromDate: "",
    toDate: "",
    description: "",
  });
  const [activeTab, setActiveTab] = useState<activeTabs>(activeTabs.myGift);
  const [listGiftTraded, setListGiftTraded] = useState<IGiftTraded[]>([]);

  const handleTradeGift = async (giftPicked: IGift) => {
    const idUser = userProfileState?.id;

    if (idUser !== -1) {
      const { id, point } = giftPicked;
      const res = await tradeGift(id, idUser, point);

      console.log(res);
      if (res.status === 200) {
        setActiveTab(activeTabs.tradedGift);
      } else {
        alert("co loi xay ra, vui long thu lai");
      }
    } else {
      alert("có lỗi xảy ra, vui lòng đăng nhập lại");
      console.log("khong tim thay id cua nguoi dung");
    }
  };

  const handleUseGift = (giftPicked: IGift) => {
    confirmAlert({
      title: "Xác nhận",
      message: `Bạn chắc chắn muốn đổi ${giftPicked.giftName} chứ?`,
      buttons: [
        {
          label: "Đồng ý",
          onClick: () => handleTradeGift(giftPicked),
        },
        {
          label: "Hủy",
          onClick: () => {
            // Xử lý khi người dùng nhấn nút "Hủy"
            // console.log("Người dùng đã hủy");
          },
        },
      ],
    });
    setItemGiftPicked(giftPicked);
  };

  const handleGetListGift = async () => {
    const res = await getListGift();

    if (Array.isArray(res.data && res.data.length > 0)) {
      setListGift(res.data);
    }

    console.log("res list gift", res);
  };

  const handleTradedGift = async () => {
    const idUser = userProfileState?.id;

    if (idUser !== -1) {
      const res = await getListGiftForTrade("", idUser); // list gift traded

      console.log("list gift traded", res);
      if (
        res.status === 200 &&
        Array.isArray(res.data) &&
        res.data.length > 0
      ) {
        setListGiftTraded(res.data);
      } else {
        setListGiftTraded([]);
      }
    }
  };

  const handleCopyGiftCode = (giftCode: string) => {
    navigator.clipboard.writeText(giftCode);
    toast(`Đã copy ${giftCode}`);
  };

  useEffect(() => {
    handleGetListGift();
    handleTradedGift();
  }, []);

  const TradedGift = () => {
    return (
      <div>
        <div style={{ display: "flex" }}>
          {listGiftTraded?.map((item: IGiftTraded) => {
            return (
              <div
                key={item.id}
                style={{ paddingLeft: "8px", paddingRight: "8px" }}
              >
                <Card style={{ width: "18rem" }}>
                  <Card.Img
                    variant="top"
                    src={
                      "https://www.bhdstar.vn/wp-content/uploads/2018/03/U22-web-1.png"
                    }
                  />
                  <Card.Body>
                    <Card.Title>{item?.giftName}</Card.Title>
                    <div style={{ display: "flex" }}>
                      <Card.Title style={{ paddingRight: "8px" }}>
                        {item?.changeGiftCode}
                      </Card.Title>
                      <FaCopy
                        onClick={() => handleCopyGiftCode(item?.changeGiftCode)}
                      />
                    </div>
                  </Card.Body>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  const MyGift = () => {
    return (
      <div>
        <div style={{ display: "flex" }}>
          {listGift.slice(-4)?.map((item: IGift) => {
            return (
              <div
                key={item.id}
                style={{ paddingLeft: "8px", paddingRight: "8px" }}
              >
                <Card style={{ width: "18rem" }}>
                  <Card.Img
                    variant="top"
                    src={
                      `${baseUrl}/${item.image}` ||
                      "https://www.bhdstar.vn/wp-content/uploads/2018/03/U22-web-1.png"
                    }
                  />
                  <Card.Body>
                    <Card.Title>{item?.giftName}</Card.Title>
                    <Card.Text>{item?.description}</Card.Text>
                    <Button
                      variant={
                        item?.id === itemGiftPicked.id ? "primary" : "dark"
                      }
                      onClick={() => handleUseGift(item)}
                    >
                      Đổi quà
                    </Button>
                  </Card.Body>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div>
      <ToastMessage />
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <Button
          style={{ fontSize: "24px" }}
          variant="link"
          onClick={() => setActiveTab(activeTabs.myGift)}
        >
          Quà tặng của bạn
        </Button>
        <Button
          style={{ fontSize: "24px" }}
          variant="link"
          onClick={() => setActiveTab(activeTabs.tradedGift)}
        >
          Quà tặng Đã đổi
        </Button>
      </div>
      {activeTab === activeTabs.myGift ? <MyGift /> : <TradedGift />}
    </div>
  );
};

export default TradeVoucher;
