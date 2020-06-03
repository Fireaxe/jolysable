import { HTTP } from "./http-common";

export default {
  authAdmin() {
    return HTTP.post("user/login?_format=json", {
      name: "jolysable",
      pass: "Jolysable%9"
    });
  }
};
