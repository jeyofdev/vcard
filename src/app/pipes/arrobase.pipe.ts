import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'arrobase',
})
export class ArrobasePipe implements PipeTransform {
	transform(value: string, type: boolean = false): string {
		return type ? `@${value}` : value;
	}
}
