const URLAPI = "http://localhost:3000";

export function getDataProducts() {
  return fetch(`${URLAPI}/products`, { method: "GET" }).then((res) =>
    res.json()
  );
}
