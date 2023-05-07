import React, { useState } from "react";
import "./index.css";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBCardTitle,
  MDBCol,
  MDBContainer,
  MDBRow,
} from "mdb-react-ui-kit";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useNavigate } from "react-router-dom";

const listShowTime = [
  {
    id: 1,
    time: "09:30",
  },
  {
    id: 2,
    time: "19:30",
  },
  {
    id: 3,
    time: "21:30",
  },
  {
    id: 4,
    time: "18:00",
  },
  {
    id: 5,
    time: "15:45",
  },
];

const DetailFilm = () => {
  const [date, setDate] = useState(new Date());
  const navigate = useNavigate();

  console.log("date", date);
  const handleChangeDate = (e: any) => {
    setDate(e);
  };

  const handleOpenLocation = () => {
    const apiKeyMap = "AIzaSyAL2YAO5OEaj7qg75QnyYWX3-MTPlQbm7c";
    const googleMapsUrl = `https://www.google.com/maps/embed/v1/place?key=${apiKeyMap}&q=ADDRESS`;
    const address =
      "Trường Đại Học Xây Dựng Hà Nội - HUCE, Nhà G3, Giải Phóng, Đồng Tâm, Hai Bà Trưng, Hà Nội";
    const encodedAddress = encodeURIComponent(address);
    const iframeUrl = `${googleMapsUrl.replace("ADDRESS", encodedAddress)}`;

    window.open(iframeUrl);
  };

  const handleChooseSeat = () => {
    // navigate("/pick-seat", { state: { idShowTime: "123456" } });
    navigate("/pick-seat/1221");
  };

  return (
    <div>
      <MDBContainer style={{ paddingTop: "16px" }}>
        <MDBRow className="mb-4">
          <MDBCol md="4">
            <img
              src="https://booking.bhdstar.vn/CDN/media/entity/get/FilmPosterGraphic/HO00002659?referenceScheme=HeadOffice&allowPlaceHolder=true&height=500"
              className="img-fluid"
              alt=""
            />
          </MDBCol>
          <MDBCol>
            <p
              className="font-weight-bold text-uppercase"
              style={{ fontWeight: "bold", fontSize: "24px", color: "red" }}
            >
              Anh thợ code may mắn
            </p>
            <p className="text-left">
              Chú mèo nhỏ Vincent và chú chuột Maurice thoát khỏi trận lụt nhờ
              trốn trong piano cũ, được các thủy thủ cứu và gửi vào bảo tàng. Ở
              đó, chúng gặp một đội mèo ưu tú đã bảo vệ các tác phẩm nghệ thuật
              khỏi chuột và các loài gây hại khác trong nhiều thế kỷ...
            </p>
            <div style={{ display: "flex" }}>
              <p className="text-left">Phan loai: &nbsp;</p>
              <p className="text-left">P - PHIM PHỔ BIẾN CHO MỌI LỨA TUỔI</p>
            </div>
            <div style={{ display: "flex" }}>
              <p className="text-left">Đạo diễn: &nbsp;</p>
              <p className="text-left">Trinh Minh Duck</p>
            </div>
            <div style={{ display: "flex" }}>
              <p className="text-left">Diễn Viên: &nbsp;</p>
              <p className="text-left">Nguyễn Trọng Nhất, yua Mikami</p>
            </div>
            <div style={{ display: "flex" }}>
              <p className="text-left">Thể loại: &nbsp;</p>
              <p className="text-left">Hành động, BDSM</p>
            </div>
            <div style={{ display: "flex" }}>
              <p className="text-left">Khởi chiếu: &nbsp;</p>
              <p className="text-left">01-05-2023</p>
            </div>
            <div style={{ display: "flex" }}>
              <p className="text-left">Thời lượng: &nbsp;</p>
              <p className="text-left">1h30p</p>
            </div>
          </MDBCol>
        </MDBRow>
        <div
          style={{
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
          }}
        >
          <h2>VUI LÒNG CHỌN THÔNG TIN VÉ</h2>
        </div>
        <div
          style={{
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
          }}
        >
          <Calendar
            onChange={handleChangeDate}
            value={date}
            defaultView="month"
          />
        </div>
        <MDBRow
          className="mb-4"
          style={{
            marginTop: "32px",
            width: "60%",
            alignSelf: "center",
            display: "flex",
          }}
        >
          <MDBCol md="4">
            <MDBCard alignment="center">
              <MDBCardBody>
                <MDBCardTitle>BHD 55 giải phóng</MDBCardTitle>
                <MDBCardText>
                  BHD Star Giải Phóng Tầng B1&B2, TTTM Vincom, số 55 Giải Phóng,
                  Hai Bà Trưng, Tp.HN
                </MDBCardText>
                <MDBBtn onClick={handleOpenLocation}>Xem Đường đi</MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol md="4">2d sub, C16</MDBCol>
          <MDBCol
            md="4"
            style={{
              justifyContent: "space-around",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {listShowTime.map((showTime) => {
              return (
                <div
                  style={{
                    marginRight: "16px",
                  }}
                >
                  <MDBBtn color="info" onClick={handleChooseSeat}>
                    {showTime.time}
                  </MDBBtn>
                </div>
              );
            })}
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default DetailFilm;
