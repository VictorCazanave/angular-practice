import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { SearchService } from './search.service';

@Injectable()
export class SearchDetailResolve implements Resolve<any> {

	constructor(private _searchService: SearchService) { }

	resolve(route: ActivatedRouteSnapshot) {
		return this._searchService.getDetail(route.params['id']);
	}
}
