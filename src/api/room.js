import { HTTP } from "./http-common";

export default {
  findAll() {
    return HTTP.get("rooms?_format=hal_json");
  }
};
