import axios from "axios";
import { URL_CLASS_UPDATE } from "../constant.js";

export function API_UPDATE_CLASS(token, data, id) {
  return axios({
    method: "put",
    url: URL_CLASS_UPDATE,
    data,
    params: {
      _id: id,
    },
    headers: {
      auth: token,
    },
  });
}
