import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const LS_KEY_FAV = "fkr";

interface GitHubState {
  favourites: string[];
}

const initialState: GitHubState = {
  favourites: JSON.parse(localStorage.getItem(LS_KEY_FAV) ?? "[]"),
};

export const githubSlice = createSlice({
  name: "github",
  initialState,
  reducers: {
    addFavourite(state, action: PayloadAction<string>) {
      state.favourites.push(action.payload);
      localStorage.setItem(LS_KEY_FAV, JSON.stringify(state.favourites));
    },
    removeFavourite(state, action: PayloadAction<string>) {
      state.favourites = state.favourites.filter(
        (item) => item !== action.payload
      );
      localStorage.setItem(LS_KEY_FAV, JSON.stringify(state.favourites));
    },
  },
});

export const githubActions = githubSlice.actions;
export const githubReducer = githubSlice.reducer;
