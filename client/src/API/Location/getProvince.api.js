import axios from "axios";

export function API_GET_PROVINCE() {
  return axios({
    method: "get",
    url: "http://localhost:3333/api/v1/location/province",
    headers: {
      "Content-Type": "application/json",
    },
  });
}
