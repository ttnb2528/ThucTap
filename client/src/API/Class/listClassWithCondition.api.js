import axios from "axios";
import { URL_CLASS_LIST_CONDITION } from "../constant.js";

export function API_LIST_CLASS_CONDITION(token, condition) {
  return axios({
    method: "get",
    url: URL_CLASS_LIST_CONDITION,
    params: {
      career: condition.career,
      // course: condition.course,
    },
    headers: {
      auth: token,
    },
  });
}
