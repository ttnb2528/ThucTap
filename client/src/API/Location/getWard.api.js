import axios from "axios";

export function API_GET_WARD(id) {
  return axios({
    method: "get",
    url: "http://localhost:3333/api/v1/location/ward",
    params: {
      district_id: id,
    },
    headers: {
      "Content-Type": "application/json",
    },
  });
}
