import axios from "axios";
import { URL_SUBJECT_LIST } from "../constant.js";

export function API_LIST_SUBJECT(token) {
  return axios({
    method: "get",
    url: URL_SUBJECT_LIST,
    headers: {
      auth: token,
    },
  });
}
