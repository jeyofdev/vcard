import { HardSkills } from '@models/hard-skills.model';
import { SoftSkills } from '@models/soft-skills.model';

export class Data {
	constructor(
		public hardSkills: HardSkills[],
		public softSkills: SoftSkills[],
	) {}
}
