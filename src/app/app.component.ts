import { Component } from '@angular/core';
import { LayoutGlobalComponent } from '@components/layout/layout-global/layout-global.component';

@Component({
	selector: 'app-root',
	imports: [LayoutGlobalComponent],
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss',
})
export class AppComponent {}
