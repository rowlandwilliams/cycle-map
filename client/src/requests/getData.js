import Axios from "axios";

export const getData = () => {
  return Axios({
    method: "GET",
    url: "/api/data",
  });
};
