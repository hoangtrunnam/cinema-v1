// import { useNavigate } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
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
import { getDetailUserInfo, postUpdateProfile } from "src/api/auth";
import { IUserInfoDetails } from "src/types/auth";

const UserProfile = () => {
  // const navigate = useNavigate();

  const [editable, setEditable] = useState<boolean>(true);

  const [userInfo, setUserInfo] = useState<IUserInfoDetails>({
    id: -1,
    name: "",
    image: "",
    address: "",
    phone: "",
    doB: "",
    sex: false,
    email: "",
  });

  const handleUpdateProfile = async () => {
    if (editable === false) {
      const res = await postUpdateProfile(userInfo);

      if (res.code === 200 && res.status) {
        alert("updated thông tin thành công");
        const { id, name, image, address, phone, doB, sex, email } = res;

        setUserInfo({
          id,
          name,
          image,
          address,
          phone,
          doB,
          sex,
          email,
        });
        setEditable(true);
        // navigate("/homePage", { replace: true });
      } else {
        alert(`Có lỗi xảy ra, vui lòng thử lại! ${res.message}`);
      }
    } else {
      alert("Vui lòng nhập thông tin muốn thay đổi");
    }
  };

  const handleGetDetailUserInfo = useCallback(async () => {
    const res = await getDetailUserInfo();

    if (res.code === 200 && res.status) {
      setUserInfo(res.data);
    } else {
      setUserInfo({
        id: -1,
        name: "",
        image: "",
        address: "",
        phone: "",
        doB: "",
        sex: false,
        email: "",
      });
    }
  }, []);

  useEffect(() => {
    handleGetDetailUserInfo();
  }, []);

  return (
    <section style={{ backgroundColor: "#eee" }}>
      <MDBContainer className="py-5">
        <MDBRow>
          <MDBCol lg="4">
            <MDBCard className="mb-4">
              <MDBCardBody className="text-center">
                <MDBCardImage
                  src={
                    userInfo.image === ""
                      ? "https://res.cloudinary.com/vitcamo/image/upload/v1681832133/51402136-39f0-4e56-9083-37c90653fdcb.jpg"
                      : userInfo.image
                  }
                  alt="avatar"
                  className="rounded-circle"
                  style={{ width: "150px" }}
                  fluid
                />
                <p className="text-muted mb-1">{userInfo.name}</p>
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
                      value={userInfo.name}
                      onChange={(e) =>
                        setUserInfo({ ...userInfo, name: e.target.value })
                      }
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
                      disabled
                      onChange={(e) =>
                        setUserInfo({ ...userInfo, email: e.target.value })
                      }
                      value={userInfo.email}
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
                      onChange={(e) =>
                        setUserInfo({ ...userInfo, phone: e.target.value })
                      }
                      value={userInfo.phone}
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
                      disabled
                      label="Birthday"
                      id="form1"
                      type="date"
                      value={userInfo?.doB?.slice(0, 10) || ""}
                      onChange={(e) =>
                        setUserInfo({ ...userInfo, doB: e.target.value })
                      }
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
                      value={userInfo.address}
                      onChange={(e) =>
                        setUserInfo({ ...userInfo, address: e.target.value })
                      }
                    />
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
              <MDBBtn disabled={editable} onClick={handleUpdateProfile}>
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
