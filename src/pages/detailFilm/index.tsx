import React from "react";
import "./index.css";
import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
const DetailFilm = () => {
  return (
    <div className="bg">
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
      </MDBContainer>
    </div>
  );
};

export default DetailFilm;
