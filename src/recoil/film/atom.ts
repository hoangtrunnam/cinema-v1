import { atom } from "recoil";
import { IShowTime } from "src/pages/detailFilm/type";

export interface IAllFilm {
  id: number;
  name: string;
  image: string;
  trailer: string;
  director: string;
  actor: string;
  publishDate: string;
  time: string;
  languages: string;
  rated: string;
  description: string;
}

export const listAllFilmState = atom<IAllFilm[]>({
  key: "listAllFilmState", // unique ID (with respect to other atoms/selectors)
  default: [] as IAllFilm[],
});

export const showTimePickedState = atom<IShowTime>({
  key: "showTimePickedState", // unique ID (with respect to other atoms/selectors)
  default: {
    startDate: "",
    startTime: "",
    time: null,
    movieName: "",
    roomName: "",
    id: -1,
  },
});
