const URLAPI = "https://dypbackend2022.herokuapp.com";

export function getDataProducts() {
  return fetch(`${URLAPI}/products`, { method: "GET" }).then((res) =>
    res.json()
  );
}
