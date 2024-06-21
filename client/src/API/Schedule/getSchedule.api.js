import axios from "axios";
import { URL_SCHEDULE_GET } from "../constant.js";

export function API_GET_SCHEDULE(token) {
  return axios({
    method: "get",
    url: URL_SCHEDULE_GET,
    headers: {
      auth: token,
    },
  });
}
