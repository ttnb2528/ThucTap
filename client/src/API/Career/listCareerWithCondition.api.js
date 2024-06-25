import axios from "axios";
import { URL_CAREER_LIST_CONDITION } from "../constant.js";

export function API_LIST_CAREER_CONDITION(token, condition) {
  return axios({
    method: "get",
    url: URL_CAREER_LIST_CONDITION,
    params: {
      code: condition.code,
      name: condition.name,
      levelStraining: condition.levelStraining,
    },
    headers: {
      auth: token,
    },
  });
}
