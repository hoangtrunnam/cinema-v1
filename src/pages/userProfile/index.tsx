import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./index.less";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardText,
  MDBInput,
  MDBBtn,
} from "mdb-react-ui-kit";

const UserProfile = () => {
  const navigate = useNavigate();

  const [editable, setEditable] = useState<boolean>(true);
  const [bithDay, setBirthDay] = useState<string>("2021-04-29");
  const [fullName, setFullName] = useState<string>("Hoang Trung Nam");
  const [email, setEmail] = useState<string>("hoangtrungnam0000@gmail.com");
  const [phoneNumber, setPhoneNumber] = useState<string>("0123456789");
  const [address, setAddress] = useState<string>("Ha Noi - VietNam");

  const handleSaveInfoProfile = () => {
    setEditable(true);
    navigate("/homePage", { replace: true });
  };

  return (
    <section style={{ backgroundColor: "#eee" }}>
      <MDBContainer className="py-5">
        <MDBRow>
          <MDBCol lg="4">
            <MDBCard className="mb-4">
              <MDBCardBody className="text-center">
                <MDBCardImage
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                  alt="avatar"
                  className="rounded-circle"
                  style={{ width: "150px" }}
                  fluid
                />
                <p className="text-muted mb-1">{fullName}</p>
                <p className="text-muted mb-4">Thành viên hạng vàng</p>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol lg="8">
            <MDBCard className="mb-4">
              <MDBCardBody>
                <MDBRow style={{ marginBottom: "16px" }}>
                  <MDBCol sm="3">
                    <MDBCardText>Thông tin tài khoản</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBBtn onClick={() => setEditable(false)}>
                      Chỉnh sửa
                    </MDBBtn>
                  </MDBCol>
                </MDBRow>
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Họ và Tên</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBInput
                      disabled={editable}
                      label="Full Name"
                      id="form1"
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                    />
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Email</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBInput
                      disabled={editable}
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                      label="Email"
                      id="form1"
                      type="email"
                    />
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Số Điện Thoại</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBInput
                      disabled={editable}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      value={phoneNumber}
                      label="Phone Number"
                      id="form1"
                      type="text"
                    />
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Ngày Sinh</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBInput
                      disabled={editable}
                      label="Birthday"
                      id="form1"
                      type="date"
                      value={bithDay}
                      onChange={(e) => setBirthDay(e.target.value)}
                    />
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Địa Chỉ</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBInput
                      disabled={editable}
                      label="Address"
                      id="form1"
                      type="text"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
              <MDBBtn disabled={editable} onClick={handleSaveInfoProfile}>
                Lưu
              </MDBBtn>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
};

export default UserProfile;
