import { HTTP } from "./http-common";

export default {
  findAll() {
    return HTTP.get("jsonapi/node/rooms?sort=field_price");
  },
  findOne(id) {
    return HTTP.get("jsonapi/node/rooms/" + id + "?include=field_images");
  }
};
