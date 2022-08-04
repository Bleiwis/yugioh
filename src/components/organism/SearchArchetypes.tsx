import React from "react";
import { useArchetypeList } from "../../../hooks/useCards";

const SearchArchetypes = () => {
  const { archetypeListData, isLoadingArchetypeList, isErrorArchetypeList } =
    useArchetypeList();
  return <div>SearchArchetypes</div>;
};

export default SearchArchetypes;
