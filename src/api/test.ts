import { apitest } from "./config";
import { handleError } from "./handleError";
import request from "./request";
import type { ApiResponse } from "./types";

export const CheckStatusPartner = async (
  statusTest: boolean
): Promise<ApiResponse<any>> => {
  try {
    // const token = await Keychain.getGenericPassword({ service: 'accessToken' }).then(res => {
    //   if (res) return res.password
    //   return ''
    // })

    const params = {
      status: statusTest,
    };

    const res = await request().get(apitest, { params });

    // res dựa trên api response để define
    const { status, data, code, message, result } = res.data;

    return {
      status,
      data,
      code,
      message,
      result,
    };
  } catch (error) {
    return handleError(error);
  }
};
