import axios from "axios";
import { URL_STUDENT_LIST } from "../constant.js";

export function API_LIST_STUDENT(token) {
  return axios({
    method: "get",
    url: URL_STUDENT_LIST,
    headers: {
        auth: token
    }
  });
}
