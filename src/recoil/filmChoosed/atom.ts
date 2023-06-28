import { atom } from "recoil";
import { IFood, ISeat } from "src/pages/pickSeat";

export interface IFilm {
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

export const filmChooseState = atom<IFilm>({
  key: "filmChooseState", // unique ID (with respect to other atoms/selectors)
  default: {
    id: -1,
    name: "",
    image: "",
    trailer: "",
    director: "",
    actor: "",
    publishDate: "",
    time: "",
    languages: "",
    rated: "",
    description: "",
  },
});

export const listSeatPickedState = atom<ISeat[]>({
  key: "listSeatPickedState", // unique ID (with respect to other atoms/selectors)
  default: [] as ISeat[],
});

export const giftPickedState = atom<IFood>({
  key: "giftPickedState", // unique ID (with respect to other atoms/selectors)
  default: {
    id: -1,
    giftName: "",
    image: "",
    point: -1,
    isStatus: false,
    fromDate: "",
    toDate: "",
    description: "",
  },
});
