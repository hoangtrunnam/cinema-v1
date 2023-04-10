import { useState } from "react";
// import { useNavigate } from 'react-router-dom';
import "./index.less";

import {
  MDBContainer,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBTabs,
  MDBTabsContent,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsPane,
} from "mdb-react-ui-kit";
const LoginPage = () => {
  // const navigate = useNavigate();

  const [justifyActive, setJustifyActive] = useState("tab1");

  const handleJustifyClick = (value: string) => {
    if (value === justifyActive) {
      return;
    }
    setJustifyActive(value);
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
            />
            <MDBInput
              wrapperClass="mb-4"
              label="Password"
              id="form2"
              type="password"
            />

            <div className="d-flex justify-content-between mx-4 mb-4">
              <MDBCheckbox
                name="flexCheck"
                value=""
                id="flexCheckDefault"
                label="Remember me"
              />
              <a href="!#">Forgot password?</a>
            </div>

            <MDBBtn className="mb-4 w-100">Sign in</MDBBtn>
          </MDBTabsPane>

          <MDBTabsPane show={justifyActive === "tab2"}>
            <MDBInput wrapperClass="mb-4" label="Name" id="form1" type="text" />
            <MDBInput
              wrapperClass="mb-4"
              label="Username"
              id="form1"
              type="text"
            />
            <MDBInput
              wrapperClass="mb-4"
              label="Email"
              id="form1"
              type="email"
            />
            <MDBInput
              wrapperClass="mb-4"
              label="Phone Number"
              id="form1"
              type="text"
            />
            <MDBInput
              wrapperClass="mb-4"
              label="Password"
              id="form1"
              type="password"
            />
            <MDBInput
              wrapperClass="mb-4"
              label="Re-Password"
              id="form1"
              type="password"
            />
            <MDBInput
              wrapperClass="mb-4"
              label="Birthday"
              id="form1"
              type="date"
            />

            <div
              className="d-flex justify-content-center mb-4"
              style={{ flexDirection: "column" }}
            >
              <MDBCheckbox
                name="flexCheck"
                id="flexCheckDefault"
                label="Tôi đã đọc, hiểu và đồng ý với các điều khoản"
              />
              <MDBCheckbox
                name="flexCheck"
                id="flexCheckDefault"
                label="Nhận thông tin chương trình khuyến mãi"
              />
            </div>

            <MDBBtn className="mb-4 w-100">Sign up</MDBBtn>
          </MDBTabsPane>
        </MDBTabsContent>
      </MDBContainer>
    </>
  );
};

export default LoginPage;
