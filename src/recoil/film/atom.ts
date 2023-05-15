import { atom } from "recoil";

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
