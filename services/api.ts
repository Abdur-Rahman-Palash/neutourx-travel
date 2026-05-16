export async function fetchTravelOffers() {
  return fetch('/api/offers').then((res) => res.json());
}

export async function fetchDestinations() {
  return fetch('/api/destinations').then((res) => res.json());
}
