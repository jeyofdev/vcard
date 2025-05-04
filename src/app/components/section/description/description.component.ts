import { Component, Signal, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ContentTitleComponent } from '@components/content/content-title/content-title.component';
import { JsonDataService } from '@services/json-data.service';

@Component({
	selector: 'app-description',
	imports: [ContentTitleComponent],
	templateUrl: './description.component.html',
})
export class DescriptionComponent {
	private _dataService = inject(JsonDataService);

	public descriptionParagraphs: Signal<string[]> = this._getDescription();

	private _getDescription(): Signal<string[]> {
		return toSignal(this._dataService.findDescription(), { initialValue: [] });
	}
}
