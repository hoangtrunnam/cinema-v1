import React from "react";
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
  listSeatPickedState,
} from "src/recoil/filmChoosed/atom";
import { handleApiBuyTicket } from "src/api/film";
import { ISeat } from "../pickSeat";
import jwt from "jwt-decode";
import { getToken } from "src/api/core";

const ConfirmTicket = () => {
  const filmChoosed = useRecoilValue(filmChooseState);
  const listSeatPicked = useRecoilValue(listSeatPickedState);
  const navigate = useNavigate();

  console.log("filmChoosed:", filmChoosed);
  console.log("filmChoosed:", listSeatPicked);

  const handleBuyTicket = async () => {
    const listIdSeatPicked = listSeatPicked.map((item: ISeat) => item.id);
    const user: any = jwt(await getToken());

    if (user && user?.nameid) {
      console.log("user:", user);
      const res = await handleApiBuyTicket(user?.nameid, listIdSeatPicked);

      console.log("res sau khi click buy ticket", res);
      if (res.data) {
        alert("Đặt vé thành công");
      }
    } else {
      alert("bạn chưa đăng nhập, vui lòng đăng nhập để tiếp tục");
      navigate(`/login`);
    }

    // navigate(`/`);
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
            <MDBCardTitle>Giỏ hàng của bạn</MDBCardTitle>
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
              <p className="text-left">15:40 - Rạp số xxxx</p>
            </div>
            <div style={{ display: "flex" }}>
              <p className="text-left">Ghế: &nbsp;</p>
              <p className="text-left">c1 ,c2</p>
            </div>
            <div style={{ display: "flex" }}>
              <p className="text-left">Thành tiền: &nbsp;</p>
              <p className="text-left">365,000 VND</p>
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
                    <td>Adult-Stand-2D</td>
                    <td>65,000</td>
                    <td>1</td>
                    <td>65,000</td>
                  </tr>
                  <tr>
                    <td>Bỏng ngô</td>
                    <td>150000</td>
                    <td>2</td>
                    <td>300,000</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>365,000</td>
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
                <MDBBtn color="danger" onClick={handleBuyTicket}>
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
