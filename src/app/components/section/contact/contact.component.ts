import { Component } from '@angular/core';
import { ContentTitleComponent } from '@components/content/content-title/content-title.component';
import { InfoItemComponent } from '@components/content/info-item/info-item.component';
import { FontAwesomeModule, IconDefinition } from '@fortawesome/angular-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEarthEurope } from '@fortawesome/free-solid-svg-icons';
import { ArrobasePipe } from '@pipes/arrobase.pipe';

@Component({
	selector: 'app-contact',
	imports: [FontAwesomeModule, ContentTitleComponent, InfoItemComponent, ArrobasePipe],
	templateUrl: './contact.component.html',
})
export class ContactComponent {
	githubIcon: IconDefinition = faGithub;
	linkedinIcon: IconDefinition = faLinkedin;
	earthEuropeIcon: IconDefinition = faEarthEurope;
}
