import type { NextPage } from "next";
import { useMutation } from "@tanstack/react-query";
import {
  TextField,
  Typography,
  Autocomplete,
  Paper,
  Grid,
  Stack,
} from "@mui/material";
import parse from "autosuggest-highlight/parse";
import match from "autosuggest-highlight/match";

import { requestApiParams } from "../utils/requester";
import MainLayout from "../src/components/template/MainLayout";
import { CardData, Datum } from "../src/interface/cards";
import { useEffect, useState, SyntheticEvent } from "react";
import useDebounce from "../src/hooks/useDebounce";
import api from "../utils/baseApi";
import ShowCard from "../src/components/atoms/ShowCard";

const SearchPage: NextPage = () => {
  const [search, setSearch] = useState<string>("");
  const [result, setResult] = useState<Array<Datum>>([]);
  const [isSearching, setIsSearching] = useState<boolean>(false);

  const debouncedSearchTerm: string = useDebounce<string>(search, 500);

  const {
    data: dataSearch,
    isLoading: loadingSearch,
    isError: errorSearch,
    mutate: mutateSearch,
  } = useMutation((value: string) => requestApiParams("fname", value));

  useEffect(
    () => {
      if (debouncedSearchTerm) {
        setIsSearching(true);
        api
          .get("", {
            params: {
              fname: search,
            },
          })
          .then((response) => {
            setResult(response.data.data);
            setIsSearching(false);
          });
      } else {
        setResult([]);
      }
    },
    [debouncedSearchTerm] // Only call effect if debounced search term changes
  );
  console.log(result.length);

  return (
    <MainLayout>
      <Typography variant="h1" textAlign="center">
        Card finder
      </Typography>
      <Typography variant="h2" textAlign="center">
        The browser engine for Yu-Gi-Oh!
      </Typography>

      <Autocomplete
        autoComplete
        includeInputInList
        filterSelectedOptions
        freeSolo
        autoHighlight
        options={result}
        onInputChange={(event, newInputValue) => {
          setSearch(newInputValue);
        }}
        getOptionLabel={(option: any) =>
          typeof option === "string" ? option : option.name
        }
        renderInput={(params) => (
          <TextField {...params} margin="normal" />
        )}
        renderOption={(props, option, { inputValue }) => {
          const matches = match(option.name, inputValue);
          const parts = parse(option.name, matches);

          return (
            <li {...props}>
              <div>
                {parts.map((part, index) => (
                  <span
                    key={index}
                    style={{
                      fontWeight: part.highlight ? 700 : 400,
                    }}
                  >
                    {part.text}
                  </span>
                ))}
              </div>
            </li>
          );
        }}
      />

      {result.length !== 0 && (
        <Paper sx={{ m: 2 }}>
          <Grid container>
            <Grid item xs={12} sm={4}>
              <ShowCard
                alt={result[0]?.name}
                url={result[0]?.card_images[0].image_url}
              />
            </Grid>
            <Grid item xs={12} sm={8}>
              <Stack m={2}>
                <Typography textAlign="center" variant="h3">
                  {result[0]?.name}
                </Typography>
              </Stack>
              <Typography textAlign="justify" variant="body1">
                {result[0]?.desc}
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      )}
    </MainLayout>
  );
};

export default SearchPage;
