import axios from "axios";
import { URL_STUDENT_DELETE } from "../constant.js";

export function API_DELETE_STUDENT(token, id) {
  return axios({
    method: "delete",
    url: URL_STUDENT_DELETE,
    params: {
      _id: id,
    },
    headers: {
      auth: token,
    },
  });
}
