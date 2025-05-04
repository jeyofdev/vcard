import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Data } from '@models/data.model';
import { HardSkills } from '@models/hard-skills.model';
import { SoftSkills } from '@models/soft-skills.model';
import { Observable, map } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class JsonDataService {
	private _httpClient = inject(HttpClient);

	public findAllHardSkills(): Observable<HardSkills[]> {
		return this._httpClient.get<Data>('/assets/data/data.json').pipe(map((datas: Data) => datas.hardSkills));
	}

	public findAllSoftSkills(): Observable<SoftSkills[]> {
		return this._httpClient.get<Data>('/assets/data/data.json').pipe(map((datas: Data) => datas.softSkills));
	}

	public findDescription(): Observable<string[]> {
		return this._httpClient.get<Data>('/assets/data/data.json').pipe(map((datas: Data) => datas.description));
	}
}
