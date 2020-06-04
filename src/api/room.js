import { HTTP } from "./http-common";

export default {
  findAll() {
    return HTTP.get("jsonapi/node/rooms?sort=field_price", {
      headers: {
        Accept: "application/vnd.api+json"
      },
      withCredentials: true
    });
  },
  findOne(id) {
    return HTTP.get("jsonapi/node/rooms/" + id + "?include=field_images", {
      headers: {
        Accept: "application/vnd.api+json"
      },
      withCredentials: true
    });
  }
};
