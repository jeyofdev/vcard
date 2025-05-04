import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Data } from 'app/models/data.model';
import { HardSkills } from 'app/models/hard-skills.model';
import { Observable, map } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class JsonDataService {
	private _httpClient = inject(HttpClient);

	public findAllHardSkills(): Observable<HardSkills[]> {
		return this._httpClient.get<Data>('/assets/data/data.json').pipe(map((datas: Data) => datas.hardSkills));
	}
}
