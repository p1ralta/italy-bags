import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { switchMap, map } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { LoadProducts, LoadProductsSuccess } from './action';

@Injectable({ providedIn: 'root' })
export class BugsEffects {
    private readonly http = inject(HttpClient);
    private readonly actions$ = inject(Actions);

    public readonly loadProducts$ = createEffect(() =>
        this.actions$.pipe(
            ofType(LoadProducts),
            switchMap(() =>
                this.http
                    .get<{ id: number; title: string }[]>('http://localhost:8000/api/bags')
                    .pipe(
                        map((products) => LoadProductsSuccess({ products })),
                    ),
            ),
        ),
    );
}
