class ApiClient {

  request(method, url, body = null) {
    return cy.request({
      method,
      url,
      body,
      headers: {
        accept: "application/json",
        "Content-Type": "application/json"
      }
    });
  }

  get(url) {
    return this.request("GET", url);
  }

  post(url, body) {
    return this.request("POST", url, body);
  }
}

export default new ApiClient();