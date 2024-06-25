import axios from "axios";
import { URL_SUBJECT_DELETE } from "../constant.js";

export function API_DELETE_SUBJECT(token, id) {
//   console.log(data);
  return axios({
    method: "delete",
    url: URL_SUBJECT_DELETE,
    params: {
      _id: id,
    },
    headers: {
      auth: token,
    },
  });
}
