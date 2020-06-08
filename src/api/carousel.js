import { HTTP } from "./http-common";

export default {
  async findHomepage() {
    let id = null;
    await HTTP.get("jsonapi/node/carousel?filter[article-title][path]=title&filter[article-title][value]=homepage&filter[article-title][operator]==", {
      headers: {
        Accept: "application/vnd.api+json"
      },
      withCredentials: true
    }).then(res => {
      id = res.data.data[0].id
    });

    return HTTP.get("jsonapi/node/carousel/" + id + "?include=field_images", {
      headers: {
        Accept: "application/vnd.api+json"
      },
      withCredentials: true
    })
  }
};
