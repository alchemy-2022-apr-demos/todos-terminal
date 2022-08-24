const fetch = require("cross-fetch");
const cookie = require("cookie");

async function fetchItems(userCookie) {
  const resp = await fetch(`${process.env.API_URL}/api/v1/items`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Cookie: cookie.serialize("session", userCookie.session),
    },
    credentials: "include",
  });

  const data = await resp.json();
  if (resp.ok) {
    return data;
  } else {
    throw new Error(data.message);
  }
}

module.exports = { fetchItems };
