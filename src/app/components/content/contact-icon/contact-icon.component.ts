import { Component, InputSignal, input } from '@angular/core';
import { FontAwesomeModule, IconDefinition } from '@fortawesome/angular-fontawesome';

@Component({
	selector: 'app-contact-icon',
	imports: [FontAwesomeModule],
	templateUrl: './contact-icon.component.html',
	styleUrl: './contact-icon.component.scss',
})
export class ContactIconComponent {
	public icon: InputSignal<IconDefinition> = input.required<IconDefinition>();
	public link: InputSignal<string> = input.required<string>();
	public label: InputSignal<string> = input.required<string>();
}
