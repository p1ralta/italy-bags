import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IBugsState } from "./state.model";

export const selectEntityState = createFeatureSelector<IBugsState>('bugs');


export const addProducts = createSelector(
    selectEntityState,
    (state: IBugsState) => state.products,
);
