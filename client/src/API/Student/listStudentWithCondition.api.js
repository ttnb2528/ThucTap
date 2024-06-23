import axios from "axios";
import { URL_STUDENT_LIST_CONDITION } from "../constant.js";

export function API_LIST_STUDENT_CONDITION(token, condition) {
  return axios({
    method: "get",
    url: URL_STUDENT_LIST_CONDITION,
    params: {
      classCourse: condition?.classCourse,
      course: condition?.course,
      career: condition?.career,
    },
    headers: {
      auth: token,
    },
  });
}
