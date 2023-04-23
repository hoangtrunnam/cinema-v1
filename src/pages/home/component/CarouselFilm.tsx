import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

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

interface IListFilm {
  id: number;
  src: string;
  alt: string;
  title: string;
}
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
const CarouselFilm = () => {
  const navigate = useNavigate();
  const handleOrderTicket = () => {
    navigate("/detailFilm");
  };

  return (
    <div style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
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
                  <Button variant="primary" onClick={() => handleOrderTicket()}>
                    Đặt vé
                  </Button>
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default CarouselFilm;
