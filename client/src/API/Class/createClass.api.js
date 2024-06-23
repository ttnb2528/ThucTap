import axios from "axios";
import { URL_CLASS_CREATE } from "../constant.js";

export function API_CREATE_CLASS(token, data) {
  return axios({
    method: "post",
    url: URL_CLASS_CREATE,
    data,
    headers: {
      auth: token,
    },
  });
}
