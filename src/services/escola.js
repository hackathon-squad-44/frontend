import { http } from "./config";

export default {
  listar: () => {
    return http.get("school");
  },
  listarNome: (nome) => {
    return http.get("school/seach?name=" + nome);
  },
  listarCidade: (cidade) => {
    return http.get("school/seach/city?city=" + cidade);
  },
};
