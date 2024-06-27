import axios from "axios";
import { URL_CLASS_LIST_CAREER } from "../constant.js";

export function API_LIST_CLASS_CAREER(token, id) {
  return axios({
    method: "get",
    url: URL_CLASS_LIST_CAREER,
    params: {
      _id: id,
    },
    headers: {
      auth: token,
    },
  });
}
