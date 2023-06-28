import React, { useEffect } from "react";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

import "./index.less";

import {
  MDBContainer,
  MDBInput,
  MDBBtn,
  MDBTabs,
  MDBTabsContent,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsPane,
  MDBFile,
} from "mdb-react-ui-kit";
import _ from "lodash";
import { handleLoginUser, handleSignUpUser } from "src/api/auth";
// import { userInfoState } from "src/recoil/auth/atom";
// import { useRecoilState } from "recoil";
import Cookies from "universal-cookie";
import { CookiesEnum } from "src/types/auth";

interface IDataResgister {
  userName: string;
  email: string;
  phoneNumber: string;
  confirmPassword: string;
  birthday: string;
  address: string;
  avatar: any;
  sex: any;
}

interface IDataLogin {
  email: string;
  password: string;
}

const LoginPage = () => {
  const navigate = useNavigate();
  const cookies = new Cookies();
  // const [_userInfo, setUserInfo] = useRecoilState(userInfoState);
  const [justifyActive, setJustifyActive] = useState("tab1");
  const [dataRegiser, setDataRegiser] = useState<IDataResgister>({
    userName: "",
    email: "",
    phoneNumber: "",
    confirmPassword: "",
    birthday: "",
    address: "",
    avatar: null,
    sex: false,
  });
  const [dataLogin, setDataLogin] = useState<IDataLogin>({
    email: "",
    password: "",
  });
  const [passWord, setPassword] = useState<string>("");
  const [rePassWord, setRePassword] = useState<string>("");
  const [errorPW, setErrorPW] = useState<string>("");
  const [errorEmpty, setErrorEmpty] = useState<string>("");

  const handleJustifyClick = (value: string) => {
    if (value === justifyActive) {
      return;
    }
    setJustifyActive(value);
  };

  useEffect(() => {
    if (passWord && rePassWord) {
      if (passWord === rePassWord) {
        setDataRegiser({ ...dataRegiser, confirmPassword: rePassWord });
        setErrorPW("");
      } else {
        setErrorPW("Mât khẩu không khớp nhau, vui lòng thử lại");
      }
    }
  }, [passWord, rePassWord]);

  const handleSignUp = async () => {
    if (
      dataRegiser.userName !== "" &&
      dataRegiser.email !== "" &&
      dataRegiser.phoneNumber !== "" &&
      dataRegiser.confirmPassword !== "" &&
      dataRegiser.birthday !== ""
    ) {
      setErrorEmpty("");
      const res = await handleSignUpUser(dataRegiser);

      console.log("res", res);

      if (res.code === 200 && res.status) {
        alert("Đăng ký thành công");
        setJustifyActive("tab1");
      } else {
        alert("Đăng ký thất bại");
      }
    } else {
      setErrorEmpty("Xin vui lòng nhập đủ thông tin");
    }
  };

  const handleLogin = async () => {
    if (dataLogin.email !== "" && dataLogin.password !== "") {
      const res = await handleLoginUser(dataLogin);

      console.log("res haha", res);

      if (res.statusCode === 200) {
        alert("Đăng nhập thành công");
        cookies.set(CookiesEnum.USER_INFO, res.data);
        navigate("/homePage");
      } else {
        alert("Đăng nhập thất bại");
      }
    } else {
      setErrorEmpty("Xin vui lòng nhập đủ thông tin");
    }
  };

  const handleChooseAvatarImage = (e: any) => {
    const selectedFile = e.target.files[0];

    const reader = new FileReader();

    reader.readAsArrayBuffer(selectedFile);

    reader.onload = () => {
      // const binaryStr = reader.result;
      const binaryStr = new Uint8Array(
        reader?.result ? reader?.result : ("" as any)
      );

      // const binaryString = String.fromCharCode.apply(null, binaryStr);

      console.log(binaryStr);
      // Gửi binaryStr lên cho backend để xử lý
      // setDataRegiser({
      //   ...dataRegiser,
      //   avatar: binaryStr || "",
      // });
    };
  };

  return (
    <>
      <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
        <MDBTabs
          pills
          justify
          className="mb-3 d-flex flex-row justify-content-between"
        >
          <MDBTabsItem>
            <MDBTabsLink
              onClick={() => handleJustifyClick("tab1")}
              active={justifyActive === "tab1"}
            >
              Login
            </MDBTabsLink>
          </MDBTabsItem>
          <MDBTabsItem>
            <MDBTabsLink
              onClick={() => handleJustifyClick("tab2")}
              active={justifyActive === "tab2"}
            >
              Register
            </MDBTabsLink>
          </MDBTabsItem>
        </MDBTabs>

        <MDBTabsContent>
          <MDBTabsPane show={justifyActive === "tab1"}>
            <MDBInput
              wrapperClass="mb-4"
              label="Email address"
              id="form1"
              type="email"
              onChange={(e) =>
                setDataLogin({ ...dataLogin, email: e.target.value })
              }
            />
            <MDBInput
              wrapperClass="mb-4"
              label="Password"
              id="form2"
              type="password"
              onChange={(e) =>
                setDataLogin({ ...dataLogin, password: e.target.value })
              }
            />

            {/* <div className="d-flex justify-content-between mx-4 mb-4">
              <MDBCheckbox
                name="flexCheck"
                value=""
                id="flexCheckDefault"
                label="Remember me"
              />
            </div> */}

            <MDBBtn className="mb-4 w-100" onClick={handleLogin}>
              Đăng nhập
            </MDBBtn>
          </MDBTabsPane>

          <MDBTabsPane show={justifyActive === "tab2"}>
            <MDBInput
              wrapperClass="mb-4"
              label="* Username"
              id="form1"
              type="text"
              required
              onChange={(e) =>
                setDataRegiser({ ...dataRegiser, userName: e.target.value })
              }
            />
            <MDBInput
              wrapperClass="mb-4"
              label="* Email"
              id="form1"
              type="email"
              required
              onChange={(e) =>
                setDataRegiser({ ...dataRegiser, email: e.target.value })
              }
            />
            <MDBInput
              wrapperClass="mb-4"
              label="* Phone Number"
              id="form1"
              type="text"
              required
              onChange={(e) =>
                setDataRegiser({ ...dataRegiser, phoneNumber: e.target.value })
              }
            />
            <MDBInput
              wrapperClass="mb-4"
              label="Địa chỉ <option>"
              id="form1"
              type="text"
              onChange={(e) =>
                setDataRegiser({ ...dataRegiser, address: e.target.value })
              }
            />
            <div className="mb-4">
              <p style={{ color: "blue" }}>
                Chọn ảnh đại diện của bạn (option){" "}
              </p>
              <MDBFile
                label=""
                id="avatarImage"
                onChange={handleChooseAvatarImage}
              />
            </div>
            <MDBInput
              wrapperClass="mb-4"
              label="* Password"
              id="form1"
              type="password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <MDBInput
              wrapperClass="mb-4"
              label="* Re-Password"
              id="form1"
              type="password"
              required
              onChange={(e) => setRePassword(e.target.value)}
            />
            {/* <p>hahahah</p> */}
            {errorPW ? <p style={{ color: "red" }}>{errorPW}</p> : null}
            <MDBInput
              wrapperClass="mb-4"
              label="* Birthday"
              id="form1"
              type="date"
              onChange={(e) =>
                setDataRegiser({ ...dataRegiser, birthday: e.target.value })
              }
            />
            <Form.Select
              aria-label="Default select example"
              onChange={(e) =>
                setDataRegiser({
                  ...dataRegiser,
                  sex: e.target.value === "1" ? true : false,
                })
              }
            >
              <option>* Giới tính</option>
              <option value="1">Nam</option>
              <option value="2">Nữ</option>
            </Form.Select>

            <div
              className="d-flex justify-content-center mb-4"
              style={{ flexDirection: "column" }}
            >
              {/* <MDBCheckbox
                name="flexCheck"
                id="flexCheckDefault"
                label="Tôi đã đọc, hiểu và đồng ý với các điều khoản"
              /> */}
              {/* <MDBCheckbox
                name="flexCheck"
                id="flexCheckDefault"
                label="Nhận thông tin chương trình khuyến mãi"
              /> */}
            </div>

            {errorEmpty ? <p style={{ color: "red" }}>{errorEmpty}</p> : null}

            <MDBBtn className="mb-4 w-100" onClick={handleSignUp}>
              Đăng kí
            </MDBBtn>
          </MDBTabsPane>
        </MDBTabsContent>
      </MDBContainer>
    </>
  );
};

export default LoginPage;
