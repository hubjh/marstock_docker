import axios from "axios";
import { MARSTOCK_DOMAIN, Common, Interceptor } from "./Common";

const CommonAxios = {
  // RequestParam 방식
  getAxios: async (controller, path, variable, data) => {
    return await axios.get(
      MARSTOCK_DOMAIN + `/${controller}/${path}?${variable}=${data}`
    );
  },

  // RequestParam 방식
  getPageableAxios: async (controller, path, params) => {
    return await axios.get(MARSTOCK_DOMAIN + `/${controller}/${path}`, {
      params,
    });
  },

  // RequestBody 방식
  postAxios: async (controller, path, object) => {
    return await axios.post(MARSTOCK_DOMAIN + `/${controller}/${path}`, object);
  },

  // 인증 방식 추가
  getTokenAxios: async (controller, path, variable, data) => {
    const accessToken = Common.getAccessToken();
    return await Interceptor.get(
      MARSTOCK_DOMAIN + `/${controller}/${path}?${variable}=${data}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + accessToken,
        },
      }
    );
  },

  postTokenAxios: async (controller, path, object) => {
    const accessToken = Common.getAccessToken();
    return await Interceptor.post(
      MARSTOCK_DOMAIN + `/${controller}/${path}`,
      object,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + accessToken,
        },
      }
    );
  },
};

export default CommonAxios;
