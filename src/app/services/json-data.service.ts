import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Data } from '@models/data.model';
import { HardSkills } from '@models/hard-skills.model';
import { SoftSkills } from '@models/soft-skills.model';
import { environment } from 'environments/environment';
import { Observable, map } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class JsonDataService {
	private _httpClient = inject(HttpClient);
	private URL_PATH = 'assets/data/data.json';

	public findAllHardSkills(): Observable<HardSkills[]> {
		return this._httpClient
			.get<Data>(environment.baseHref + this.URL_PATH)
			.pipe(map((datas: Data) => datas.hardSkills));
	}

	public findAllSoftSkills(): Observable<SoftSkills[]> {
		return this._httpClient
			.get<Data>(environment.baseHref + this.URL_PATH)
			.pipe(map((datas: Data) => datas.softSkills));
	}

	public findDescription(): Observable<string[]> {
		return this._httpClient
			.get<Data>(environment.baseHref + this.URL_PATH)
			.pipe(map((datas: Data) => datas.description));
	}
}
