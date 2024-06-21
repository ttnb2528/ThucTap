import axios from "axios";
import { URL_CAREER_EDIT } from "../constant.js";

export function API_EDIT_CAREER(token, data, id) {
  return axios({
    method: "put",
    url: URL_CAREER_EDIT,
    data,
    params: {
      _id: id
    },
    headers: {
        auth: token
    }
  });
}