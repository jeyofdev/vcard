import { Component, Signal, WritableSignal, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ContentTitleComponent } from '@components/content/content-title/content-title.component';
import { HardSkills } from '@models/hard-skills.model';
import { JsonDataService } from '@services/json-data.service';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-hard-skills',
	imports: [ContentTitleComponent],
	templateUrl: './hard-skills.component.html',
	styleUrl: './hard-skills.component.scss',
})
export class HardSkillsComponent {
	private _dataService = inject(JsonDataService);

	public hardSkills: Signal<HardSkills[]> = this._getHardSkills();

	private _getHardSkills(): Signal<HardSkills[]> {
		return toSignal(this._dataService.findAllHardSkills(), { initialValue: [] });
	}
}
