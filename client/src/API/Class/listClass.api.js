import axios from "axios";
import { URL_CLASS_LIST } from "../constant.js";

export function API_LIST_CLASS(token) {
  return axios({
    method: "get",
    url: URL_CLASS_LIST,
    headers: {
      auth: token,
    },
  });
}
