import { useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

import api from "../utils/baseApi";
import { ICard } from "../interface/cards";

export const useCards = (limit: number) => {
  const {
    data,
    isLoading: isLoadingCards,
    isError: isCardsError,
  } = useQuery<AxiosResponse<ICard>>(["cards", limit], () =>
    api.get("", { params: { num: limit, offset: 0 } })
  );
  const cards = data?.data?.data;
  return { cards, isLoadingCards, isCardsError };
};

export const useArchetypeCards = () => {
  const {
    data,
    isLoading: isLoadingCards,
    isError: isCardsError,
  } = useQuery<AxiosResponse<ICard>>(["cards-by-date"], () =>
    api.get("", { params: { archetype: "Dark Magician" } })
  );
  const cards = data?.data?.data;
  return { cards, isLoadingCards, isCardsError };
};
