import axios from "axios";
import { URL_CAREER_LIST } from "../constant.js";

export function API_LIST_CAREER(token) {
  return axios({
    method: "get",
    url: URL_CAREER_LIST,
    headers: {
        auth: token
    }
  });
}