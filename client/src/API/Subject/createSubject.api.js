import axios from "axios";
import { URL_SUBJECT_CREATE } from "../constant.js";

export function API_CREATE_SUBJECT(token, data) {
  return axios({
    method: "post",
    url: URL_SUBJECT_CREATE,
    data,
    headers: {
        auth: token
    }
  });
}
