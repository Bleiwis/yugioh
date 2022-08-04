import React, { FC } from "react";
import PropTypes, { InferProps, InferType } from "prop-types";
import parse from "autosuggest-highlight/parse";
import match from "autosuggest-highlight/match";
import { Controller } from "react-hook-form";
import { Autocomplete, TextField } from "@mui/material";

import { Archetype } from "../../../interface/cards";

interface SearchArchetypeInputProps {
  archetypeOptions: Archetype[];
  control: any;
  findArchetype: Function;
}

const SearchArchetypeInput: FC<SearchArchetypeInputProps> = ({
  control,
  archetypeOptions,
  findArchetype,
}) => {
  return (
    <Controller
      render={({ field }) => (
        <Autocomplete
          {...field}
          autoHighlight
          options={archetypeOptions}
          getOptionLabel={(option: Archetype) => option.archetype_name}
          renderInput={(params) => (
            <TextField
              {...params}
              placeholder="Search Archetype"
              variant="outlined"
            />
          )}
          onChange={(_, data) => {
            field.onChange(data);
            if (data) {
              findArchetype(data.archetype_name);
            }
          }}
          renderOption={(props, option, { inputValue }) => {
            const matches = match(option.archetype_name, inputValue);
            const parts = parse(option.archetype_name, matches);

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
      )}
      name="archetype"
      control={control}
    />
  );
};

SearchArchetypeInput.propTypes = {
  control: PropTypes.any.isRequired,
  archetypeOptions: PropTypes.array.isRequired,
};

export default SearchArchetypeInput;
