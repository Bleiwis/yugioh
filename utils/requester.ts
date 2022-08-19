import api from "./baseApi";

export function requestApiParams(param: string, term: string) {
  return api.get("", {
    params: {
      [param]: term,
    },
  });
}
