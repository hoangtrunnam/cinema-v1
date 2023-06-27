import {
  apiBuyTickets,
  apiCheckSeatPicked,
  apiGetAllFilm,
  apiGetAllSeatByShowTimeId,
  apiGetAllShowTimeByDate,
} from "./config";
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

export const getListSeatByShowTimeId = async (
  IdShowTime: number
): Promise<ApiResponse<any>> => {
  try {
    const res = await request().get(apiGetAllSeatByShowTimeId, {
      params: {
        IdShowTime,
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

export const handleCheckSeatPicked = async (
  listticket: number[]
): Promise<ApiResponse<any>> => {
  try {
    const body = {
      listticket,
    };

    const res = await request().post(apiCheckSeatPicked, body);

    console.log("res", res);

    // res dựa trên api response để define
    const { status, data, code, message } = res.data;

    return {
      status,
      data,
      code,
      message,
    };
  } catch (error) {
    return handleError(error);
  }
};

export const handleApiBuyTicket = async (
  cusId: number,
  listticket: number[]
): Promise<ApiResponse<any>> => {
  try {
    const body = {
      listticket,
    };

    const res = await request().post(`${apiBuyTickets}?${cusId}`, body);

    console.log("res", res);

    // res dựa trên api response để define
    const { status, data, code, message } = res.data;

    return {
      status,
      data,
      code,
      message,
    };
  } catch (error) {
    return handleError(error);
  }
};
