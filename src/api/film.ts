import { apiGetAllFilm, apiGetAllShowTimeByDate } from "./config";
import { handleError } from "./handleError";
import request from "./request";
import type { ApiResponse } from "./types";

export const getListFilm = async (): Promise<ApiResponse<any>> => {
  try {
    const res = await request().get(apiGetAllFilm);

    const { statusCode, data, code, message } = res.data;

    return {
      statusCode,
      data,
      code,
      message,
    };
  } catch (error) {
    return handleError(error);
  }
};

export const getListShowTimeByDate = async (
  date: string,
  MovieName: string
): Promise<ApiResponse<any>> => {
  try {
    const res = await request().get(apiGetAllShowTimeByDate, {
      params: {
        date,
        MovieName,
      },
    });
    const { statusCode, data, code, message } = res.data;

    return {
      statusCode,
      data,
      code,
      message,
    };
  } catch (error) {
    return handleError(error);
  }
};
