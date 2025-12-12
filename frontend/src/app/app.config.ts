import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { bugsReducer } from '../store/reducer';
import { BugsEffects } from '../store/effects';

export const appConfig: ApplicationConfig = {
    providers: [
        provideRouter(routes),
        provideHttpClient(),
        provideStore({ bugs: bugsReducer }), // register root reducer
        provideEffects([BugsEffects]),
    ],
};
