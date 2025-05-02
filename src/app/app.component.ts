import { Component } from '@angular/core';
import { BiographyComponent } from '@components/content/biography/biography.component';
import { ContactComponent } from '@components/content/contact/contact.component';
import { NameComponent } from '@components/content/name/name.component';
import { LayoutContentComponent } from '@components/layout/layout-content/layout-content.component';
import { LayoutGlobalComponent } from '@components/layout/layout-global/layout-global.component';

@Component({
	selector: 'app-root',
	imports: [LayoutGlobalComponent, LayoutContentComponent, NameComponent, BiographyComponent, ContactComponent],
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss',
})
export class AppComponent {}
