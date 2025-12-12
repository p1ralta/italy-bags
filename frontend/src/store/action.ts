import { createAction, props } from '@ngrx/store';

export const LoadProducts = createAction('[Bugs] Load products');

export const LoadProductsSuccess = createAction(
    '[Bugs] Load products success',
    props<{
        products: { id: number; title: string }[];
    }>(),
);
