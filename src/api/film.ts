import {
  apiBuyTickets,
  apiCheckSeatPicked,
  apiGetAllFilm,
  apiGetAllSeatByShowTimeId,
  apiGetAllShowTimeByDate,
  apiGetGift,
  apiGetGiftTrade,
  apiPostGiftTrade,
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

export const getListGift = async (): Promise<ApiResponse<any>> => {
  try {
    const res = await request().get(apiGetGift);
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

export const getListGiftForTrade = async (
  ChangeGiftCode?: string,
  CusId?: number
): Promise<ApiResponse<any>> => {
  try {
    const res = await request().get(apiGetGiftTrade, {
      params: {
        ChangeGiftCode,
        CusId,
      },
    });

    console.log("res in api", res);
    const { data, status } = res;

    const code = -1;

    return {
      data,
      code,
      status,
    };
  } catch (error) {
    return handleError(error);
  }
};

export const tradeGift = async (
  giftId: number,
  cusId: number,
  giftPoint: number
): Promise<ApiResponse<any>> => {
  try {
    const res = await request().post(
      `${apiPostGiftTrade}?giftId=${giftId}&cusId=${cusId}&giftPoint=${giftPoint}`
    );

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
