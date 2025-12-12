import { AsyncPipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { IBugsState } from '../store/state.model';
import { LoadProducts } from '../store/action';
import { addProducts } from '../store/selector';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [AsyncPipe],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
    private readonly store: Store<{ bugs: IBugsState }> = inject(Store);

    public bags$: Observable<{ id: number; title: string }[]> = of([]);
    public ngOnInit(): void {
        this.store.dispatch(LoadProducts());

        this.store.pipe(select(addProducts)).subscribe((state) => {
            console.log(state);
        });
    }
}
