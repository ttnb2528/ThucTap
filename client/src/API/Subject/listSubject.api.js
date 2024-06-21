import axios from "axios";
import { URL_SUBJECT_LIST } from "../constant.js";

export function API_LIST_SUBJECT(token,data = "") {
  console.log(data);
  return axios({
    method: "get",
    url: URL_SUBJECT_LIST,
    params: {
      idCareer: data,
    },
    headers: {
      auth: token,
    },
  });
}
