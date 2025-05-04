import { Component, InputSignal, input } from '@angular/core';
import { CapitalizeFirstLetterOnlyPipe } from '@pipes/capitalize-first-letter-only.pipe';

@Component({
	selector: 'app-content-title',
	imports: [CapitalizeFirstLetterOnlyPipe],
	templateUrl: './content-title.component.html',
	styleUrl: './content-title.component.scss',
})
export class ContentTitleComponent {
	public title: InputSignal<string> = input.required<string>();
}
