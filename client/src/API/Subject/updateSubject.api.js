import axios from "axios";
import { URL_SUBJECT_UPDATE } from "../constant.js";

export function API_UPDATE_SUBJECT(token, data, id) {
  //   console.log(data);
  return axios({
    method: "put",
    url: URL_SUBJECT_UPDATE,
    params: {
      _id: id,
    },
    data,
    headers: {
      auth: token,
    },
  });
}
