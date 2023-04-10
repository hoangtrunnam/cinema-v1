import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import { IMAGES } from "src/assets/header";

const HeaderComponent = () => {
  const navigate = useNavigate();

  const handleNavigateLogin = () => {
    navigate("/login");
  };

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Cinema Team</Navbar.Brand>
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
      <Navbar.Collapse className="justify-content-end">
        <img
          style={{ marginRight: "10px" }}
          src={IMAGES.iconIns}
          alt="my instagram"
        />
        <img
          style={{ marginRight: "10px" }}
          src={IMAGES.iconTk}
          alt="my tiktok"
        />
        <img style={{ marginRight: "10px" }} src={IMAGES.iconYt} alt="my yt" />
        <img style={{ marginRight: "10px" }} src={IMAGES.iconFb} alt="my fb" />
        <Button
          style={{ width: "120px", marginRight: "10px" }}
          variant="primary"
          onClick={handleNavigateLogin}
        >
          Đăng nhập
        </Button>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default HeaderComponent;
