import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export interface LoadoutState {
  body: string;
  points: Array<string>;
}

const initialState: LoadoutState = {
  body: "",
  points: [],
};

// Our slice!
export const loadoutSlice = createSlice({
  name: "loadout",
  initialState,
  reducers: {
    setLoadoutBody: (state, action: PayloadAction<string>) => {
      state.body = action.payload;
    },
    setLoadoutPoint: (state, action: PayloadAction<{ index: number; value: string }>) => {
      const { index, value } = action.payload;
      if (index >= 0 && index < state.points.length) {
        state.points[index] = value;
      }
    },
    setLoadoutPoints: (state, action: PayloadAction<Array<string>>) => {
      state.points = action.payload;
    },
    addLoadoutPoint: (state, action: PayloadAction<string>) => {
      state.points.push(action.payload);
    },
    removeLoadoutPoint: (state, action: PayloadAction<number>) => {
      state.points.splice(action.payload, 1);
    },
    resetLoadout: () => initialState,
  },
  // "Create slice will infer the state tupe from the initialState argument"
});

export const {
  setLoadoutBody,
  setLoadoutPoint,
  addLoadoutPoint,
  removeLoadoutPoint,
  setLoadoutPoints,
  resetLoadout,
} = loadoutSlice.actions;

export default loadoutSlice.reducer;
