import {
  apiBuyFood,
  apiBuyTickets,
  apiCancelBookingTickets,
  apiCheckSeatPicked,
  apiCreateTransaction,
  apiGetAllFilm,
  apiGetAllSeatByShowTimeId,
  apiGetAllShowTimeByDate,
  apiGetGift,
  apiGetGiftTrade,
  apiGetListFood,
  apiPostGiftTrade,
  apiUpdateGiftTrade,
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
  money: number,
  magiaodich: number,
  listticket: number[]
): Promise<ApiResponse<any>> => {
  try {
    const body = {
      listticket,
    };

    const res = await request().post(
      `${apiBuyTickets}?money=${money}&magiaodich=${magiaodich}`,
      body
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

export const cancelBookingTicket = async (
  listticket: number[]
): Promise<ApiResponse<any>> => {
  try {
    const body = {
      listticket,
    };

    const res = await request().post(`${apiCancelBookingTickets}`, body);

    console.log("res", res);

    // res dựa trên api response để define
    const { status, data, code, message, statusCode } = res.data;

    return {
      status,
      data,
      code,
      message,
      statusCode,
    };
  } catch (error) {
    return handleError(error);
  }
};

export const getListGift = async (): Promise<ApiResponse<any>> => {
  try {
    const res = await request().get(apiGetGift);
    const { data } = res;
    const code = -1;

    return {
      data,
      code,
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
    const { status, data } = res;

    const code = -1;

    return {
      status,
      data,
      code,
    };
  } catch (error) {
    return handleError(error);
  }
};

export const updateGiftCode = async (
  ChangeGiftCode: string
): Promise<ApiResponse<any>> => {
  try {
    const res = await request().post(
      `${apiUpdateGiftTrade}?ChangeGiftCode=${ChangeGiftCode}`
    );

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

export const getListFood = async (): Promise<ApiResponse<any>> => {
  try {
    const res = await request().get(apiGetListFood);
    const { data } = res;
    const code = -1;

    return {
      data,
      code,
    };
  } catch (error) {
    return handleError(error);
  }
};

export const createTransaction = async (
  cusId: string
): Promise<ApiResponse<any>> => {
  try {
    const res = await request().post(`${apiCreateTransaction}?cusId=${cusId}`);

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

interface IFoodPost {
  foodId: number;
  quantity: number;
}

export const buyFood = async (
  totalfoodmoney: number,
  magiaodich: number,
  listfood: IFoodPost[]
): Promise<ApiResponse<any>> => {
  try {
    const body = {
      listfood,
    };

    const res = await request().post(
      `${apiBuyFood}?totalfoodmoney=${totalfoodmoney}&magiaodich=${magiaodich}`,
      body
    );

    console.log("res in api", res);
    const { data, status, statusCode } = res.data;

    const code = -1;

    return {
      data,
      code,
      status,
      statusCode,
    };
  } catch (error) {
    return handleError(error);
  }
};
