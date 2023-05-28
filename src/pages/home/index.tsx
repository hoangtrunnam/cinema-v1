// import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./index.less";
import CarouselFilm from "./component/CarouselFilm";
import CarouselKM from "./component/CarouselKM";
import { getListFilm } from "src/api/film";
import { useRecoilState } from "recoil";
import { listAllFilmState } from "src/recoil/film/atom";
// interface IListCarouselBanner {
//   id: number;
//   src: string;
//   alt: string;
// }

// const listCarouselBanner: IListCarouselBanner[] = [
//   {
//     id: 1,
//     src: "https://www.bhdstar.vn/wp-content/uploads/2018/03/1920x1080-1-10.jpg",
//     alt: "1 slide",
//   },
//   {
//     id: 2,
//     src: "https://www.bhdstar.vn/wp-content/uploads/2018/03/1920x1080-8.jpg",
//     alt: "2 slide",
//   },
//   {
//     id: 3,
//     src: "https://www.bhdstar.vn/wp-content/uploads/2018/03/1920x1080-1-9.jpg",
//     alt: "3 slide",
//   },
//   {
//     id: 4,
//     src: "https://www.bhdstar.vn/wp-content/uploads/2018/03/MUANHIEUTRUNGLON-WEB-1920X1080-1.jpeg",
//     alt: "4 slide",
//   },
//   {
//     id: 5,
//     src: "https://www.bhdstar.vn/wp-content/uploads/2018/03/Visa-x-BHD-WEB.jpg",
//     alt: "5 slide",
//   },
// ];

const HomePage = () => {
  // const navigate = useNavigate();

  // const handleClick = () => {
  //   navigate("/card");
  // };

  const [typeFile, setTypeFilm] = useState<string>("playing");
  const [typeKM, setTypeKM] = useState<string>("KM");

  const [listFilm, setListFilm] = useRecoilState(listAllFilmState);

  const handleGetListfilm = async () => {
    const res = await getListFilm();

    if (res.statusCode === 200 && Array.isArray(res.data)) {
      setListFilm(res.data);
    } else {
      setListFilm([]);
    }
  };

  useEffect(() => {
    handleGetListfilm();
  }, []);

  return (
    <div className="login-page">
      <img
        src="https://www.bhdstar.vn/wp-content/uploads/2018/03/1920x1080-1-10.jpg"
        className="img-fluid shadow-4"
        alt="..."
      />
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
        <CarouselFilm listFilm={listFilm} />
      ) : (
        <CarouselFilm listFilm={listFilm} />
      )}
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "32px",
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
          onClick={() => setTypeKM("KM")}
        >
          KHUYẾN MÃI
        </h3>
        <h3
          style={{ cursor: "pointer", color: "black", paddingRight: "16px" }}
          onMouseEnter={(e: React.MouseEvent<HTMLHeadingElement>) =>
            ((e.target as HTMLHeadingElement).style.color = "#d4dd29")
          }
          onMouseLeave={(e: React.MouseEvent<HTMLHeadingElement>) =>
            ((e.target as HTMLHeadingElement).style.color = "black")
          }
          onClick={() => setTypeKM("SK")}
        >
          SỰ KIỆN
        </h3>
      </div>
      {typeKM === "KM" ? <CarouselKM /> : <CarouselKM />}
    </div>
  );
};

export default HomePage;
