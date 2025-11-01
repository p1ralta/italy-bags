import { AsyncPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Observable, of } from 'rxjs';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, AsyncPipe],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
    private readonly http = inject(HttpClient);
    public bags$: Observable<{ id: number; title: string }[]> = of([]);
    public ngOnInit(): void {
        console.log('AAAAA');
        this.bags$ = this.http.get<{ id: number; title: string }[]>('http://localhost:8000/api/bags');
    }
}
