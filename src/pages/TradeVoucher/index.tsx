import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/esm/Button";
import { getListGiftForTrade, tradeGift } from "src/api/film";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { useRecoilValue } from "recoil";
import { userInfoProfileState } from "src/recoil/userProfile/atom";
interface IGift {
  id: number;
  changeGiftCode: any;
  phoneCus: string;
  giftName: string;
  giftId: number;
  giftPoint: number;
  cusId: number;
  usedStatus: boolean;
}

const TradeVoucher = () => {
  const userProfileState = useRecoilValue(userInfoProfileState);

  console.log("hahaha", userProfileState);
  const [itemGiftPicked, setItemGiftPicked] = useState<IGift>({
    id: -1,
    changeGiftCode: null,
    phoneCus: "",
    giftName: "",
    giftId: -1,
    giftPoint: -1,
    cusId: -1,
    usedStatus: false,
  });
  const [listGift, setListGift] = useState<IGift[]>([]);

  const handleTradeGift = async (giftPicked: IGift) => {
    const { id } = userProfileState;

    if (id !== -1) {
      const { giftId, giftPoint } = giftPicked;
      const res = await tradeGift(giftId, id, giftPoint);

      console.log(res);
    } else {
      alert("có lỗi xảy ra, vui lòng đăng nhập lại");
      console.log("khong tim thay id cua nguoi dung");
    }
  };

  console.log("listGift la:", listGift);
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

  const handleGetGift = async () => {
    const { id } = userProfileState;

    if (id !== -1) {
      const res = await getListGiftForTrade("", id);

      if (
        res.status === 200 &&
        Array.isArray(res.data) &&
        res.data.length > 0
      ) {
        console.log("run here");
        setListGift(res.data);
      } else {
        setListGift([]);
      }
    } else {
      alert("có lỗi xảy ra, vui lòng đăng nhập lại");
      console.log("khong tim thay id cua nguoi dung");
    }
  };

  useEffect(() => {
    handleGetGift();
  }, []);

  return (
    <div>
      <h3>Quà tặng của bạn</h3>
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
                    "https://www.bhdstar.vn/wp-content/uploads/2018/03/U22-web-1.png"
                  }
                />
                <Card.Body>
                  <Card.Title>{item?.giftName}</Card.Title>
                  {/* <Card.Text>{item?.description}</Card.Text> */}
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

export default TradeVoucher;
