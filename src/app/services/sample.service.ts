import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions } from '@angular/http';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class SampleService {
	constructor ( private _http: Http ) { }

	get(): Observable<any> {
    return this._http.get('/api/sampleData')
        .map((res: Response) => res.json())
        .catch((error: any) => Observable.throw('Server error'));
    }
}
