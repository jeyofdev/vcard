import { Component } from '@angular/core';
import { LayoutGlobalComponent } from '@components/layout/layout-global/layout-global.component';
import { NameComponent } from '@components/name/name.component';

@Component({
	selector: 'app-root',
	imports: [LayoutGlobalComponent, NameComponent],
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss',
})
export class AppComponent {}
