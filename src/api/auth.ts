import { IUserInfoDetails } from "src/types/auth";
import {
  apiGetDetailUser,
  apiLoginUser,
  apiRegisterUser,
  apiUpdateUserInfo,
  baseUrl,
} from "./config";
import { getToken } from "./core";
import { handleError } from "./handleError";
import request from "./request";
import type { ApiResponse } from "./types";

interface IDataResgister {
  userName: string;
  email: string;
  phoneNumber: string;
  confirmPassword: string;
  birthday: string;
  address: string;
  avatar: string;
  sex: string;
}

export const handleSignUpUser = async (
  dataRegiser: IDataResgister
): Promise<ApiResponse<any>> => {
  try {
    const {
      userName,
      email,
      phoneNumber,
      confirmPassword,
      birthday,
      address,
      avatar = "",
      sex = "",
    } = dataRegiser;

    const formData = new FormData();

    formData.append("Email", email);
    formData.append("password", confirmPassword);
    formData.append("Name", userName);
    formData.append("Image", avatar);
    formData.append("Address", address);
    formData.append("Phone", phoneNumber);
    formData.append("DoB", birthday);
    formData.append("Sex", sex);

    const response = await fetch(`${baseUrl}${apiRegisterUser}`, {
      method: "POST",
      body: formData,
      headers: new Headers({
        // Authorization: `Bearer ${token}`,
      }),
    });
    const res = await response.json();

    // const body = {
    //   Email: email,
    //   password: confirmPassword,
    //   Name: userName,
    //   Image: avatar,
    //   Address: address,
    //   Phone: phoneNumber,
    //   DoB: birthday,
    //   Sex: sex,
    // };

    // const res = await request().post(apiRegisterUser, body);

    // res dựa trên api response để define
    const { status, data, code, message } = res;

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

interface IDataLogin {
  email: string;
  password: string;
}

export const handleLoginUser = async (
  dataLogin: IDataLogin
): Promise<ApiResponse<any>> => {
  try {
    const { email, password } = dataLogin;

    const body = {
      email,
      password,
    };

    const res = await request().post(apiLoginUser, body);

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

export const getDetailUserInfo = async (): Promise<ApiResponse<any>> => {
  try {
    const token = await getToken();
    const res = await request(token).get(apiGetDetailUser);

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

export const postUpdateProfile = async (
  dataUpdate: IUserInfoDetails
): Promise<ApiResponse<any>> => {
  try {
    const token = await getToken();

    const { name, phone, address, image } = dataUpdate;

    dataUpdate.image = "";

    const formData = new FormData();

    formData.append("name", name);
    formData.append("phone", phone);
    formData.append("address", address);
    formData.append("image", image);

    const response = await fetch(`${baseUrl}${apiUpdateUserInfo}`, {
      method: "POST",
      body: formData,
      headers: new Headers({
        Authorization: `Bearer ${token}`,
      }),
    });
    const res = await response.json();
    const { status, data, code, message } = res;

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
