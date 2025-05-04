import { Component, InputSignal, input } from '@angular/core';
import { FontAwesomeModule, IconDefinition } from '@fortawesome/angular-fontawesome';

@Component({
	selector: 'app-info-item',
	imports: [FontAwesomeModule],
	templateUrl: './info-item.component.html',
	styleUrl: './info-item.component.scss',
})
export class InfoItemComponent {
	public icon: InputSignal<IconDefinition | undefined> = input<IconDefinition | undefined>();
	public link: InputSignal<string> = input<string>('');
	public label: InputSignal<string> = input.required<string>();
}
