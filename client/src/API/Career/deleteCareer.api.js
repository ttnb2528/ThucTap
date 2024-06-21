import axios from "axios";
import { URL_CAREER_DELETE } from "../constant.js";

export function API_DELETE_CAREER(token, id) {
  return axios({
    method: "delete",
    url: URL_CAREER_DELETE,
    params: {
      _id: id,
    },
    headers: {
      auth: token,
    },
  });
}
