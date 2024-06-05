import axios from "axios";
import { URL_LOGIN } from "../constant.js";

export function API_LOGIN (data) {
    console.log(data);
    return axios({
        method: "post",
        url: URL_LOGIN,
        data
    });
}