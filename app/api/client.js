import { create } from "apisauce";

const apiClient = create({
  baseURL: "http://192.168.178.98:8082/api",
});

export default apiClient;
