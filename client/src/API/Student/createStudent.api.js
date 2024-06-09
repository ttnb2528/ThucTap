import axios from "axios";
import { URL_STUDENT_CREATE } from "../constant.js";

export function API_CREATE_STUDENT(token, data) {
  return axios({
    method: "post",
    url: URL_STUDENT_CREATE,
    data,
    headers: {
        auth: token
    }
  });
}
