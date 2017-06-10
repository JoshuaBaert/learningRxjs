/// <reference path="../typings/tsd.d.ts" />

import {Component} from 'angular2/core';
import {Observable} from 'rxjs/Rx';

@Component({
    selector: 'my-app',
    template: `
        <input id="search" type="text" class="form-control">
    `
})
export class AppComponent {
    constructor(){
        var keyups = Observable.fromEvent($('#search'), 'keyup')
            .map(e => e.target.value)
            .filter(text => text.length >=3)
            .debounceTime(400)
            .distinctUntilChanged();

        keyups.subscribe(data => console.log(data))
    }
}