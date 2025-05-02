import { Component, InputSignal, input } from '@angular/core';

@Component({
	selector: 'app-content-title',
	imports: [],
	templateUrl: './content-title.component.html',
	styleUrl: './content-title.component.scss',
})
export class ContentTitleComponent {
	public title: InputSignal<string> = input.required<string>();
}
