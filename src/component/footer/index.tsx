import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
const Footer = () => {
  return (
    <MDBFooter bgColor="light" className="text-center text-lg-start text-muted">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Liên hệ với chúng tôi qua các nền tảng mạng xã hội:</span>
        </div>

        <div>
          <a href="#test" className="me-4 text-reset">
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href="#test" className="me-4 text-reset">
            <MDBIcon fab icon="twitter" />
          </a>
          <a href="#test" className="me-4 text-reset">
            <MDBIcon fab icon="google" />
          </a>
          <a href="#test" className="me-4 text-reset">
            <MDBIcon fab icon="instagram" />
          </a>
          <a href="#test" className="me-4 text-reset">
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href="#test" className="me-4 text-reset">
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section>

      <section className="">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <MDBIcon icon="gem" className="me-3" />
                Cinema Team
              </h6>
              <p>
                Cinema Team được biết đến với cụm rạp đầu tiên với 3 phòng chiếu
                vào năm 2022, tại Maximark 3/2 (nay là Vincom 3/2). Từ 2013,
                Cinema Team là cụm rạp của doanh nghiệp Việt Nam duy nhất có sức
                phát triển mạnh mẽ, qua việc liên tục mở thêm các phòng chiếu
                mới.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Sản phẩm</h6>
              <p>
                <a href="#!" className="text-reset">
                  Đặt vé phim
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Siêu voucher hấp dẫn
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Dịch vụ quảng cáo
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Thường dùng</h6>
              <p>
                <a href="#!" className="text-reset">
                  Giá cả
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Cài đặt
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Đặt vé
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Trung tâm trợ giúp
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Liên hệ</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                55 Giải phóng, Hai Bà Trưng, TP Hà Nội
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                contactme@cinemateam.com.vn
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 84 234 567 887
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> + 84 234 567 896
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2023 Copyright:
        <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
          cinemateam.com
        </a>
      </div>
    </MDBFooter>
  );
};

export default Footer;
