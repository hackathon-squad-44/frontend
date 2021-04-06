import { http } from "./config";

export default {
  doar: (donation) => {
    return http.post("item-order", donation);
  },
};