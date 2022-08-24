const fetch = require("cross-fetch");
const cookie = require("cookie");

async function loadUser(email, password) {
  const resp = await fetch(`${process.env.API_URL}/api/v1/users/sessions`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
    credentials: "include",
  });
  // console.log(resp.headers.raw());
  const cookieInfo = cookie.parse(resp.headers.raw()["set-cookie"][0]);
  const data = await resp.json();
  return [cookieInfo, data];
}

module.exports = { loadUser };
