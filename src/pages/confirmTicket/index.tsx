import React, { useMemo } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCol,
  MDBBtn,
} from "mdb-react-ui-kit";
import Table from "react-bootstrap/Table";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import {
  filmChooseState,
  foodPickedState,
  giftPickedState,
  listSeatPickedState,
} from "src/recoil/filmChoosed/atom";
import {
  buyFood,
  cancelBookingTicket,
  createTransaction,
  handleApiBuyTicket,
  updateGiftCode,
} from "src/api/film";
import { IFoodDuck, ISeat } from "../pickSeat";
import jwt from "jwt-decode";
import { getToken } from "src/api/core";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { showTimePickedState } from "src/recoil/film/atom";
import CountdownTimer from "src/hooks/CountDownTimer";

const ConfirmTicket = () => {
  const filmChoosed = useRecoilValue(filmChooseState);
  const listSeatPicked = useRecoilValue(listSeatPickedState);
  const giftPicked = useRecoilValue(giftPickedState);
  const listFoodPicked = useRecoilValue(foodPickedState);
  const showTimePicked = useRecoilValue(showTimePickedState);

  const navigate = useNavigate();

  console.log("filmChoosed:", filmChoosed);
  console.log("listSeatPicked:", listSeatPicked);
  console.log("giftPicked", giftPicked);

  const totalMoney = useMemo(() => {
    const totalFoodPrice = listFoodPicked.reduce(
      (acc, obj) => acc + obj.price * obj.quantity,
      0
    );
    const totalPriceTicket = listSeatPicked.reduce(
      (acc, obj) => acc + obj.price,
      0
    );

    return totalFoodPrice + totalPriceTicket;
  }, [listSeatPicked.length, listFoodPicked.length]);

  const handleUpdateGiftcode = async (): Promise<boolean> => {
    const res = await updateGiftCode(giftPicked?.changeGiftCode);

    if (res.status === 200) {
      return true;
    } else {
      return false;
    }
  };

  const handleCancelTicketApi = async () => {
    const listIdSeatPicked = listSeatPicked.map((item: ISeat) => item.id);
    const res = await cancelBookingTicket(listIdSeatPicked);

    if (res.data && res.statusCode === 200) {
      navigate(`/`);
    } else {
      // do nothing
    }
  };

  const handleCreateTransaction = async (): Promise<number> => {
    const user: any = jwt(await getToken());

    if (user && user?.nameid) {
      const res = await createTransaction(user?.nameid);

      if (res.data > 0) {
        return res.data;
      } else {
        return -1;
      }
    } else {
      alert("Không tìm thấy thông tin người dùng");
      return -1;
    }
  };

  const handleBuyFood = async (): Promise<boolean> => {
    const totalFoodPrice = listFoodPicked.reduce(
      (acc, obj) => acc + obj.price * obj.quantity,
      0
    );
    const transactionId = await handleCreateTransaction();

    const listFoodPickedTemp = listFoodPicked.map((food: IFoodDuck) => ({
      quantity: food.quantity,
      foodId: food.id,
    }));
    const res = await buyFood(
      totalFoodPrice,
      transactionId,
      listFoodPickedTemp
    );

    if (res.statusCode === 200 && res.data) {
      return true;
    } else {
      return false;
    }
  };

  const handleBuyTicket = async () => {
    const listIdSeatPicked = listSeatPicked.map((item: ISeat) => item.id);
    const totalPriceTicket = listSeatPicked.reduce(
      (acc, obj) => acc + obj.price,
      0
    );
    const user: any = jwt(await getToken());
    const transactionId = await handleCreateTransaction();
    const isBuyFood = await handleBuyFood();

    if (user && user?.nameid) {
      console.log("user:", user);
      const res = await handleApiBuyTicket(
        totalPriceTicket,
        transactionId,
        listIdSeatPicked
      );

      console.log("res sau khi click buy ticket", res);
      if (res.data) {
        const isUpdateGiftCodeSuccess = await handleUpdateGiftcode();

        if (isUpdateGiftCodeSuccess && isBuyFood) {
          alert("Đặt vé thành công");
        } else {
          alert("Có lỗi xảy ra, vui lòng thử lại");
        }
      }
    } else {
      alert("bạn chưa đăng nhập, vui lòng đăng nhập để tiếp tục");
      confirmAlert({
        title: "Xác nhận",
        message: "bạn chưa đăng nhập, vui lòng đăng nhập để tiếp tục",
        buttons: [
          {
            label: "Đồng ý",
            onClick: () => {
              // Xử lý khi người dùng nhấn nút "Đồng ý"
              // console.log("Người dùng đã đồng ý");
              navigate(`/login`);
            },
          },
          {
            label: "Hủy",
            onClick: () => {
              // Xử lý khi người dùng nhấn nút "Hủy"
              console.log("Người dùng đã hủy");
            },
          },
        ],
      });
    }

    // navigate(`/`);
  };

  const handleCancelTicket = () => {
    confirmAlert({
      title: "Xác nhận",
      message: "Bạn chắc chắn muốn huỷ vé chứ?",
      buttons: [
        {
          label: "Đồng ý",
          onClick: () => handleCancelTicketApi(),
        },
        {
          label: "Hủy",
          onClick: () => {
            // Xử lý khi người dùng nhấn nút "Hủy"
            console.log("Người dùng đã hủy");
          },
        },
      ],
    });
  };

  // const handleListSeatPicked = () => {
  //   listSeatPicked.map((item: ISeat) => {
  //     return [...item.location].join(", ");
  //   });
  // };

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MDBCol sm="6">
        <MDBCard>
          <MDBCardBody>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <MDBCardTitle>Giỏ hàng của bạn</MDBCardTitle>
              <CountdownTimer />
            </div>
            <MDBCardText>
              Quý khách vui lòng kiểm tra lại thông tin trước khi thanh toán
            </MDBCardText>
            <MDBCardText>Vé mua rồi sẽ không được đổi hoặc trả lại</MDBCardText>
            <div style={{ display: "flex" }}>
              <p className="text-left">Phim: &nbsp;</p>
              <p className="text-left">{filmChoosed?.name}</p>
            </div>
            <div style={{ display: "flex" }}>
              <p className="text-left">Ngày: &nbsp;</p>
              <p className="text-left">{filmChoosed?.publishDate}</p>
            </div>
            <div style={{ display: "flex" }}>
              <p className="text-left">Suất: &nbsp;</p>
              <p className="text-left">{showTimePicked.startTime}</p>
            </div>
            <div style={{ display: "flex" }}>
              <p className="text-left">Ghế: &nbsp;</p>
              {listSeatPicked.map((item: ISeat) => {
                return (
                  <p className="text-left" key={item.id}>
                    {item.location}
                  </p>
                );
              })}
            </div>
            <div style={{ display: "flex" }}>
              <p className="text-left">Thành tiền: &nbsp;</p>
              <p className="text-left">{totalMoney}</p>
            </div>
            <div>
              <Table striped bordered hover variant="light">
                <thead>
                  <tr>
                    <th>Mục</th>
                    <th>Giá</th>
                    <th>Số lượng</th>
                    <th>Cộng</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      {listSeatPicked.map((seat: ISeat) => {
                        return `${seat.location},`;
                      })}
                    </td>
                    <td>
                      {listSeatPicked.reduce((acc, obj) => acc + obj.price, 0)}
                    </td>
                    <td>{listSeatPicked.length}</td>
                    <td>
                      {listSeatPicked.reduce((acc, obj) => acc + obj.price, 0)}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {listFoodPicked.map((food: IFoodDuck) => {
                        return `${food.name},`;
                      })}
                    </td>
                    <td>
                      {listFoodPicked.reduce(
                        (acc, obj) => acc + obj.price * obj.quantity,
                        0
                      )}
                    </td>
                    <td>{listFoodPicked.length}</td>
                    <td>
                      {listFoodPicked.reduce(
                        (acc, obj) => acc + obj.price * obj.quantity,
                        0
                      )}
                    </td>
                  </tr>
                  {giftPicked.giftName ? (
                    <tr>
                      <td>{giftPicked.giftName}</td>
                      <td>0</td>
                      <td>1</td>
                      <td>0</td>
                    </tr>
                  ) : null}
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>{totalMoney}</td>
                  </tr>
                </tbody>
              </Table>
              {/* <div style={{ display: "flex" }}>
                <div style={{ flex: 1 }} />
                <div style={{ display: "flex" }}>
                  <p className="text-left">Tổng cộng: &nbsp;</p>
                  <p className="text-left">365,000</p>
                </div>
              </div> */}
            </div>
            <div style={{ display: "flex", flex: 1 }}>
              <div style={{ flex: 1 }}>
                <p></p>
              </div>
              <div>
                <MDBBtn color="danger" onClick={handleCancelTicket}>
                  Huỷ vé
                </MDBBtn>
                <MDBBtn
                  onClick={handleBuyTicket}
                  style={{ marginLeft: "16px" }}
                >
                  Đặt vé
                </MDBBtn>
              </div>
            </div>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </div>
  );
};

export default ConfirmTicket;
