import { Component } from '@angular/core';
import { ContentTitleComponent } from '@components/content/content-title/content-title.component';

@Component({
	selector: 'app-biography',
	imports: [ContentTitleComponent],
	templateUrl: './biography.component.html',
	styleUrl: './biography.component.scss',
})
export class BiographyComponent {}
