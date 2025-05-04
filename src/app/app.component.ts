import { Component } from '@angular/core';
import { NameComponent } from '@components/content/name/name.component';
import { LayoutContentComponent } from '@components/layout/layout-content/layout-content.component';
import { LayoutGlobalComponent } from '@components/layout/layout-global/layout-global.component';
import { BiographyComponent } from '@components/section/biography/biography.component';
import { ContactComponent } from '@components/section/contact/contact.component';
import { HardSkillsComponent } from '@components/section/hard-skills/hard-skills.component';
import { SoftSkillsComponent } from '@components/section/soft-skills/soft-skills.component';

@Component({
	selector: 'app-root',
	imports: [
		LayoutGlobalComponent,
		LayoutContentComponent,
		NameComponent,
		BiographyComponent,
		ContactComponent,
		HardSkillsComponent,
		SoftSkillsComponent,
	],
	templateUrl: './app.component.html',
})
export class AppComponent {}
