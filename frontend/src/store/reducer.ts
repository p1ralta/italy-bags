import { createReducer, on } from "@ngrx/store";

import * as BugsActions from './action';
import { BugsState } from "./state";


export const bugsReducer = createReducer(
    BugsState,
    on(BugsActions.LoadProductsSuccess, (state, { products }) => ({
        ...state,
        products,
    })),
);
