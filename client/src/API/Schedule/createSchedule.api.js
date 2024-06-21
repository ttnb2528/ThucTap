import axios from "axios";
import { URL_SCHEDULE_CREATE } from "../constant.js";

export function API_CREATE_SCHEDULE(token, data) {
  return axios({
    method: "post",
    url: URL_SCHEDULE_CREATE,
    data,
    headers: {
        auth: token
    }
  });
}
