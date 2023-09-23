import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
// RootState is equivalent to useSelector()
import { RootState, AppThunk } from '../store';
import { languageOptions, dictionaryList } from '../lib/languages';
import Dictionary from "../lib/languages/interface";
import {isEmpty, isNil} from "lodash";
import {ReactNode} from "react";


export type ThemeMode = "light" | "dark" | "evening" | "midnight"
/* Begin State Definition   */
//  State Interface
export interface LayoutState {
    appState: string;
    appQueryString: string;
    value: number;
    theme_mode: ThemeMode;
  // theme_background_color: "light" | "dark" | "evening" | "midnight";
  // theme_color: "light" | "dark" | "evening" | "midnight";
    screen_size: "xl" | "lg" | "md" | "sm" | "sx";
    direction: "ltr" | "rtl";
    language: "fa" | "en";
    dictionary: Dictionary;
    status: "close" | "open";
    is_open: boolean;
    is_sidebar_open: boolean;
    is_sidebar_minimized: boolean;
}

//  State Initialize
const initialState: LayoutState = {
    appState: "",
    appQueryString: "",
    value: 0,
    theme_mode: 'light',
    screen_size: "lg",
    direction: "ltr",
    language: (
        !isNil(localStorage.getItem("lang")) && !isEmpty(localStorage.getItem("lang"))
        && (localStorage.getItem("lang")==="en" || localStorage.getItem("lang")==="fa")
        //&& ["en","fa"].includes(<string>localStorage.getItem("lang"))
    )
        ? <"en"|"fa">localStorage.getItem("lang"): "en",
    dictionary: dictionaryList.en,
    status: 'open',
    is_open: true,
    is_sidebar_open: true,
    is_sidebar_minimized: false,
};
/*  *** End --- End --- End --- End --- End --- End *** */


/*  Begin Slice (contains Actions & Reducer)  */
/**
 * @What Actions & Reducers
 */
export const layoutSlice = createSlice({
  name: 'layout',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
      setAppState: (state, action: PayloadAction<string>) => {
          state.appState = action.payload;
      },
      setAppQueryString: (state, action: PayloadAction<string>) => {
          state.appQueryString = action.payload;
      },
    toggle: (state) => {
        state.is_open?
      state.is_open = false
           :
      state.is_open = true
    },
      toggleSidebar: (state, action: PayloadAction<boolean>) => {
        /*
          action ?
              (state.is_sidebar_open?
                  state.is_sidebar_open = false
                 :
                  state.is_sidebar_open = true)
             :

         */
            state.is_sidebar_open = action.payload
    },
      toggleSidebarOpen: (state) => {
      state.is_sidebar_open = !Boolean(state.is_sidebar_open)
    },   toggleSidebarMinimize: (state) => {
      state.is_sidebar_minimized = !Boolean(state.is_sidebar_minimized)
    },toggleSidebarFullyOpen: (state) => {
          state.is_sidebar_open = !Boolean(state.is_sidebar_open)
          state.is_sidebar_minimized = !Boolean(state.is_sidebar_open)
      },
      changeTheme: (state, action: PayloadAction<ThemeMode>) => {
          state.theme_mode = action.payload
      },

      changeLocale: (state, action:  PayloadAction<LayoutState["language"]>) => {
        localStorage.setItem("lang", action.payload);
          state.language = action.payload;
          state.dictionary = dictionaryList[action.payload];
    },


      increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
      //state.status = "loading"
    },
      incrementIfEven: (state, action: PayloadAction<number>) => {
        if ( Math.abs(state.value) % 2 ===0 ){
            state.value += action.payload;
        }
    },
  },
    /*
    *   Begin ExtraReducers to handle actions made by thunk(async/await)
    *   to set updating-state or updated-state for the components
    */
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
    /*
  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(incrementAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.value += action.payload;
      });
  },
     */
    /*  *** End --- End --- End --- End --- End --- End *** */
});

/*  Begin export Actions from slice */
export const {
    setAppState, setAppQueryString,
    toggle, toggleSidebar, toggleSidebarOpen, toggleSidebarMinimize, toggleSidebarFullyOpen,
        changeTheme, changeLocale,
    increment, decrement, incrementByAmount, incrementIfEven
} = layoutSlice.actions;
/*  *** End --- End --- End --- End --- End --- End *** */

/*  Begin separating values from the state to access just by importing  */
// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectAppState = (state: RootState): LayoutState["appState"] => state.layout.appState;
export const language = (state: RootState): LayoutState["language"] => state.layout.language;
export const dictionary = (state: RootState): LayoutState["dictionary"] => state.layout.dictionary;
export const selectLayoutTheme = (state: RootState) => state.layout.theme_mode;
/*  *** End --- End --- End --- End --- End --- End *** */





export default layoutSlice.reducer;