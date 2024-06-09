import axios from "axios";
import { URL_STUDENT_UPDATE } from "../constant.js";

export function API_UPDATE_STUDENT(token, id, data) {
  return axios({
    method: "put",
    url: URL_STUDENT_UPDATE,
    data,
    params: {
      _id: id,
    },
    headers: {
      auth: token,
    },
  });
}
