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

const ConfirmTicket = () => {
  return (
    <div>
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
              <p className="text-left">Lat mat 6</p>
            </div>
            <div style={{ display: "flex" }}>
              <p className="text-left">Ngày: &nbsp;</p>
              <p className="text-left">26-jun</p>
            </div>
            <div style={{ display: "flex" }}>
              <p className="text-left">Suất: &nbsp;</p>
              <p className="text-left">15:40 - Rạp số 5</p>
            </div>
            <div style={{ display: "flex" }}>
              <p className="text-left">Ghế: &nbsp;</p>
              <p className="text-left">B11, B12</p>
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
            <MDBBtn href="#">Đặt vé</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </div>
  );
};

export default ConfirmTicket;
