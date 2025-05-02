import { Component } from '@angular/core';
import { ContactIconComponent } from '@components/content/contact-icon/contact-icon.component';
import { ContentTitleComponent } from '@components/content/content-title/content-title.component';
import { FontAwesomeModule, IconDefinition } from '@fortawesome/angular-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEarthEurope } from '@fortawesome/free-solid-svg-icons';
import { ArrobasePipe } from '@pipes/arrobase.pipe';

@Component({
	selector: 'app-contact',
	imports: [FontAwesomeModule, ContentTitleComponent, ContactIconComponent, ArrobasePipe],
	templateUrl: './contact.component.html',
	styleUrl: './contact.component.scss',
})
export class ContactComponent {
	githubIcon: IconDefinition = faGithub;
	linkedinIcon: IconDefinition = faLinkedin;
	earthEuropeIcon: IconDefinition = faEarthEurope;
}
