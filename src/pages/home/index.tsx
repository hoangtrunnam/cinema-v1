// import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./index.less";
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
interface IListCarouselBanner {
  id: number;
  src: string;
  alt: string;
}

interface IListFilm {
  id: number;
  src: string;
  alt: string;
  title: string;
}

const listCarouselBanner: IListCarouselBanner[] = [
  {
    id: 1,
    src: "https://www.bhdstar.vn/wp-content/uploads/2018/03/1920x1080-1-10.jpg",
    alt: "1 slide",
  },
  {
    id: 2,
    src: "https://www.bhdstar.vn/wp-content/uploads/2018/03/1920x1080-8.jpg",
    alt: "2 slide",
  },
  {
    id: 3,
    src: "https://www.bhdstar.vn/wp-content/uploads/2018/03/1920x1080-1-9.jpg",
    alt: "3 slide",
  },
  {
    id: 4,
    src: "https://www.bhdstar.vn/wp-content/uploads/2018/03/MUANHIEUTRUNGLON-WEB-1920X1080-1.jpeg",
    alt: "4 slide",
  },
  {
    id: 5,
    src: "https://www.bhdstar.vn/wp-content/uploads/2018/03/Visa-x-BHD-WEB.jpg",
    alt: "5 slide",
  },
];

const listFilm: IListFilm[] = [
  {
    id: 1,
    src: "https://booking.bhdstar.vn/CDN/media/entity/get/FilmPosterGraphic/HO00002679?referenceScheme=HeadOffice&allowPlaceHolder=true&height=500",
    alt: "1 slide",
    title: "CATS IN THE MUSEUM",
  },
  {
    id: 2,
    src: "https://booking.bhdstar.vn/CDN/media/entity/get/FilmPosterGraphic/HO00002629?referenceScheme=HeadOffice&allowPlaceHolder=true&height=500",
    alt: "1 slide",
    title: "CATS IN THE MUSEUM",
  },
  {
    id: 3,
    src: "https://booking.bhdstar.vn/CDN/media/entity/get/FilmPosterGraphic/HO00002651?referenceScheme=HeadOffice&allowPlaceHolder=true&height=500",
    alt: "1 slide",
    title: "CATS IN THE MUSEUM",
  },
  {
    id: 4,
    src: "https://booking.bhdstar.vn/CDN/media/entity/get/FilmPosterGraphic/HO00002640?referenceScheme=HeadOffice&allowPlaceHolder=true&height=500",
    alt: "1 slide",
    title: "CATS IN THE MUSEUM",
  },
  {
    id: 5,
    src: "https://booking.bhdstar.vn/CDN/media/entity/get/FilmPosterGraphic/HO00002640?referenceScheme=HeadOffice&allowPlaceHolder=true&height=500",
    alt: "1 slide",
    title: "CATS IN THE MUSEUM",
  },
  {
    id: 6,
    src: "https://booking.bhdstar.vn/CDN/media/entity/get/FilmPosterGraphic/HO00002640?referenceScheme=HeadOffice&allowPlaceHolder=true&height=500",
    alt: "1 slide",
    title: "CATS IN THE MUSEUM",
  },

  {
    id: 7,
    src: "https://booking.bhdstar.vn/CDN/media/entity/get/FilmPosterGraphic/HO00002640?referenceScheme=HeadOffice&allowPlaceHolder=true&height=500",
    alt: "1 slide",
    title: "CATS IN THE MUSEUM",
  },
  {
    id: 8,
    src: "https://booking.bhdstar.vn/CDN/media/entity/get/FilmPosterGraphic/HO00002640?referenceScheme=HeadOffice&allowPlaceHolder=true&height=500",
    alt: "1 slide",
    title: "CATS IN THE MUSEUM",
  },
];

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const HomePage = () => {
  // const navigate = useNavigate();

  // const handleClick = () => {
  //   navigate("/card");
  // };

  const [typeFile, setTypeFilm] = useState<string>("playing");

  return (
    <div className="login-page">
      <MDBCarousel showIndicators showControls fade dealy={2000}>
        {listCarouselBanner.map((carousel: IListCarouselBanner) => {
          return (
            <div key={carousel.id}>
              <MDBCarouselItem
                className="w-100 d-block"
                itemId={carousel.id}
                src={carousel.src}
                alt={carousel.alt}
              />
            </div>
          );
        })}
      </MDBCarousel>
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "16px",
        }}
      >
        <h3
          style={{ cursor: "pointer", color: "black", paddingRight: "16px" }}
          onMouseEnter={(e: React.MouseEvent<HTMLHeadingElement>) =>
            ((e.target as HTMLHeadingElement).style.color = "#d4dd29")
          }
          onMouseLeave={(e: React.MouseEvent<HTMLHeadingElement>) =>
            ((e.target as HTMLHeadingElement).style.color = "black")
          }
          onClick={() => setTypeFilm("playing")}
        >
          PHIM ĐANG CHIẾU
        </h3>
        <h3
          style={{ cursor: "pointer", color: "black", paddingRight: "16px" }}
          onMouseEnter={(e: React.MouseEvent<HTMLHeadingElement>) =>
            ((e.target as HTMLHeadingElement).style.color = "#d4dd29")
          }
          onMouseLeave={(e: React.MouseEvent<HTMLHeadingElement>) =>
            ((e.target as HTMLHeadingElement).style.color = "black")
          }
          onClick={() => setTypeFilm("inComing")}
        >
          PHIM SẮP CHIẾU
        </h3>
      </div>
      {typeFile === "playing" ? (
        <div
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Carousel
            swipeable={false}
            draggable={false}
            showDots={true}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            {listFilm.map((film) => {
              return (
                <div
                  style={{
                    flex: 1,
                    marginLeft: "23%",
                  }}
                  key={film.id}
                >
                  <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={film.src} />
                    <Card.Body>
                      <Card.Title>{film.title}</Card.Title>
                      <Button variant="primary">Đặt vé</Button>
                    </Card.Body>
                  </Card>
                </div>
              );
            })}
          </Carousel>
        </div>
      ) : (
        <div>
          <p>phim sap chieu</p>
        </div>
      )}
    </div>
  );
};

export default HomePage;
