import type { NextPage } from "next";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { Box, Grid, Typography } from "@mui/material";

import { CardInfo } from "../interface/archetype";
import { useArchetypeList } from "../hooks/useCards";
import SearchArchetypeInput from "../components/atoms/SearchArchetypeInput";
import MainLayout from "../components/template/MainLayout";
import api from "../../utils/baseApi";
import ShowCard from "../components/atoms/ShowCard";

function searchArchetype(term: string) {
  return api.get("", {
    params: {
      archetype: term,
    },
  });
}

const Home: NextPage = () => {
  const { archetypeListData, isLoadingArchetypeList } = useArchetypeList();
  const {
    mutate: findArchetype,
    data: archetypeData,
    isLoading: loadingArchetypes,
    isError: errorArchetypes,
  } = useMutation((queryArchetype: string) => searchArchetype(queryArchetype));

  const { control } = useForm();

  return (
    <MainLayout>
      {!isLoadingArchetypeList && (
        <SearchArchetypeInput
          findArchetype={findArchetype}
          archetypeOptions={archetypeListData}
          control={control}
        />
      )}
      <Box>
        {loadingArchetypes && <p>Loading...</p>}
        {errorArchetypes && <p>Error...</p>}
        <Grid container>
          {archetypeData?.data.data.map((archetype: CardInfo) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={archetype.id}>
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                m={1}
              >
                <ShowCard
                  alt={archetype.name}
                  url={archetype.card_images[0].image_url}
                />

                <Typography>{archetype.name}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </MainLayout>
  );
};

export default Home;
