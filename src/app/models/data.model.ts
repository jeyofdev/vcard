import { HardSkills } from '@models/hard-skills.model';
import { SoftSkills } from '@models/soft-skills.model';

export class Data {
	constructor(
		public description: string[],
		public hardSkills: HardSkills[],
		public softSkills: SoftSkills[],
	) {}
}
