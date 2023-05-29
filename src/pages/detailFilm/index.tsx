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
import { useNavigate, useParams } from "react-router-dom";
import { IAllFilm } from "src/recoil/film/atom";
import { getListFilm, getListShowTimeByDate } from "src/api/film";
import { IShowTime } from "./type";
import { convertDayFromString } from "src/hooks/time";

const DetailFilm = () => {
  const [date, setDate] = useState(new Date());
  const [listFilm, setListFilm] = useState<IAllFilm[]>([]);
  const [listShowTime, setListShowTime] = useState<IShowTime[]>([]);
  const navigate = useNavigate();
  const { idFilm } = useParams();

  const film = listFilm.find((film) => {
    if (idFilm !== undefined) {
      return film.id.toString() === idFilm;
    }
    return [];
  });

  const handleGetListfilm = async () => {
    const res = await getListFilm();

    if (res.statusCode === 200 && Array.isArray(res.data)) {
      setListFilm(res.data);
    } else {
      setListFilm([]);
    }
  };

  React.useEffect(() => {
    handleGetListfilm();
  }, []);

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

  const handleGetShowTimeByDate = React.useCallback(async () => {
    const filmName = film && film?.name !== undefined ? film.name : "";
    const res = await getListShowTimeByDate(
      convertDayFromString(date, "YYYY-MM-DD"),
      filmName
    );

    if (res.statusCode === 200 && Array.isArray(res.data)) {
      setListShowTime(res.data);
    } else {
      setListShowTime([]);
    }
  }, [film?.id, date]);

  React.useEffect(() => {
    handleGetShowTimeByDate();
  }, [handleGetShowTimeByDate]);

  const handleChooseSeat = (id: number) => {
    // navigate("/pick-seat", { state: { idShowTime: "123456" } });
    navigate(`/pick-seat/${id}`);
  };

  return (
    <div>
      <MDBContainer style={{ paddingTop: "16px" }}>
        <MDBRow className="mb-4">
          <MDBCol md="4">
            <img
              src={
                film?.image ||
                "https://booking.bhdstar.vn/CDN/media/entity/get/FilmPosterGraphic/HO00002659?referenceScheme=HeadOffice&allowPlaceHolder=true&height=500"
              }
              className="img-fluid"
              alt=""
            />
          </MDBCol>
          <MDBCol>
            <p
              className="font-weight-bold text-uppercase"
              style={{ fontWeight: "bold", fontSize: "24px", color: "red" }}
            >
              {film?.name}
            </p>
            <p className="text-left">{film?.description}</p>
            <div style={{ display: "flex" }}>
              <p className="text-left">Phan loai: &nbsp;</p>
              <p className="text-left">P - PHIM PHỔ BIẾN CHO MỌI LỨA TUỔI</p>
            </div>
            <div style={{ display: "flex" }}>
              <p className="text-left">Đạo diễn: &nbsp;</p>
              <p className="text-left">{film?.director}</p>
            </div>
            <div style={{ display: "flex" }}>
              <p className="text-left">Diễn Viên: &nbsp;</p>
              <p className="text-left">{film?.actor}</p>
            </div>
            <div style={{ display: "flex" }}>
              <p className="text-left">Thể loại: &nbsp;</p>
              <p className="text-left">Hành động, phiêu lưu</p>
            </div>
            <div style={{ display: "flex" }}>
              <p className="text-left">Khởi chiếu: &nbsp;</p>
              <p className="text-left">{film?.publishDate}</p>
            </div>
            <div style={{ display: "flex" }}>
              <p className="text-left">Thời lượng: &nbsp;</p>
              <p className="text-left">{film?.time}</p>
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
                  <MDBBtn
                    color="info"
                    onClick={() => handleChooseSeat(showTime.id)}
                  >
                    {convertDayFromString(showTime.startTime)}
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
