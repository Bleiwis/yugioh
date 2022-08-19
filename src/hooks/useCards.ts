import { useQuery } from "@tanstack/react-query";
import axios from "axios";

// export const useCards = (limit: number) => {
//   const {
//     data,
//     isLoading: isLoadingCards,
//     isError: isCardsError,
//   } = useQuery<AxiosResponse<ICard>>(["cards", limit], () =>
//     api.get("", { params: { num: limit, offset: 0 } })
//   );
//   const cards = data?.data?.data;
//   return { cards, isLoadingCards, isCardsError };
// };

export const useArchetypeList = () => {
  const {
    data,
    isLoading: isLoadingArchetypeList,
    isError: isErrorArchetypeList,
  } = useQuery(["archetypes"], () =>
    axios.get("https://db.ygoprodeck.com/api/v7/archetypes.php")
  );
  const archetypeListData = data?.data;
  return {
    archetypeListData,
    isLoadingArchetypeList,
    isErrorArchetypeList,
  };
};
