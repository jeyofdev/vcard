import { Component, Signal, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ContentTitleComponent } from '@components/content/content-title/content-title.component';
import { InfoItemComponent } from '@components/content/info-item/info-item.component';
import { SoftSkills } from '@models/soft-skills.model';
import { JsonDataService } from '@services/json-data.service';

@Component({
	selector: 'app-soft-skills',
	imports: [ContentTitleComponent, InfoItemComponent],
	templateUrl: './soft-skills.component.html',
})
export class SoftSkillsComponent {
	private _dataService = inject(JsonDataService);

	public softSkills: Signal<SoftSkills[]> = this._getSoftSkills();

	private _getSoftSkills(): Signal<SoftSkills[]> {
		return toSignal(this._dataService.findAllSoftSkills(), { initialValue: [] });
	}
}
