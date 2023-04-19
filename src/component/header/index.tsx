import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import { MDBTypography } from "mdb-react-ui-kit";
import { useState } from "react";

const HeaderComponent = () => {
  const navigate = useNavigate();
  const [isLoggedIn, _setIsLoggedIn] = useState<boolean>(true);

  const handleNavigateLogin = () => {
    navigate("/login");
  };

  const handleNavigateToHome = () => {
    navigate("/homePage");
  };

  const handleNavigateToUserProfile = () => {
    navigate("/userProfile");
  };

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand onClick={handleNavigateToHome}>Cinema Team</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#muave">Mua vé</Nav.Link>
            <NavDropdown title="Menu" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Lịch chiếu</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Hệ Thống Rạp
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Khuyến mãi | Sự kiện
              </NavDropdown.Item>
              {/* <NavDropdown.Divider /> */}
              <NavDropdown.Item href="#action/3.4">
                Dịch vụ quảng cáo
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.5">Tuyển dụng</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.6">
                Về chúng tôi
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <Navbar.Collapse
        className="justify-content-end"
        style={{ paddingRight: "16px" }}
      >
        {isLoggedIn ? (
          <MDBTypography style={{ width: "max-content" }}>
            Xin chào&nbsp;
            <a
              // href="http://localhost:3000/userProfile"
              onClick={handleNavigateToUserProfile}
              style={{ textDecoration: "underline" }}
            >
              Hoang Trung Nam1
            </a>
          </MDBTypography>
        ) : (
          <Button
            style={{ width: "120px", marginRight: "10px" }}
            variant="primary"
            onClick={handleNavigateLogin}
          >
            Đăng nhập
          </Button>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default HeaderComponent;
