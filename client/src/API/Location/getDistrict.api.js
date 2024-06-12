import axios from "axios";

export function API_GET_DISTRICT(id) {
  return axios({
    method: "get",
    url: "http://localhost:3333/api/v1/location/district",
    params: {
      province_id: id,
    },
    headers: {
      "Content-Type": "application/json",
    },
  });
}
