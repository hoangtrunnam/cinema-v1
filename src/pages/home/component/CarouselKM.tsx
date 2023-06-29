import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "react-bootstrap/Card";
import { IGift } from "src/pages/TradeVoucher";
import { getListGift } from "src/api/film";

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

const CarouselKM = () => {
  const [listGift, setListGift] = useState<IGift[]>([]);
  const handleGetListGift = async () => {
    const res = await getListGift();

    if (Array.isArray(res.data) && res.data.length > 0) {
      setListGift(res.data);
    }

    console.log("res list gift", res);
  };

  useEffect(() => {
    handleGetListGift();
  }, []);

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
        {listGift.map((gift) => {
          return (
            <div
              style={{
                flex: 1,
                marginLeft: "23%",
              }}
              key={gift.id}
            >
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={gift.image} />
              </Card>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default CarouselKM;
