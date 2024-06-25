import axios from "axios";
import { URL_SUBJECT_LIST_CONDITION } from "../constant.js";

export function API_LIST_SUBJECT_CONDITION(token, condition) {
  return axios({
    method: "get",
    url: URL_SUBJECT_LIST_CONDITION,
    params: {
      code: condition.code,
      name: condition.name,
      career: condition.career,
      type: condition.type,
    },
    headers: {
      auth: token,
    },
  });
}
