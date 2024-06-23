import axios from "axios";
import { URL_CLASS_DELETE } from "../constant.js";

export function API_DELETE_CLASS(token, id) {
  return axios({
    method: "delete",
    url: URL_CLASS_DELETE,
    params: {
      _id: id,
    },
    headers: {
      auth: token,
    },
  });
}
