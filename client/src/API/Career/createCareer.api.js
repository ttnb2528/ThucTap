import axios from "axios";
import { URL_CAREER_CREATE } from "../constant.js";

export function API_CREATE_CAREER(token, data) {
  return axios({
    method: "post",
    url: URL_CAREER_CREATE,
    data,
    headers: {
      auth: token,
    },
  });
}
