import { Pipe, PipeTransform } from '@angular/core';

/*
 * Display rating value when available
 * Takes a max argument that defaults to 100.
 * Takes a defaultValue argument that defaults to 'No rating available'.
 *
 * Usage:
 *   value | rating:max:defaultValue
 *
 * Examples:
 *   {{ 95 |  rating }}
 *   formats to: 95/100
 *
 *   {{ 4.5 |  rating:5 }}
 *   formats to: 4.5/5
 *
 *   {{ null |  rating:5:'No data' }}
 *   formats to: 'No data'
*/
@Pipe({ name: 'rating' })
export class RatingPipe implements PipeTransform {

	transform(value: number, max: number = 100, defaultValue: string = 'No rating available'): string {
		return value ? value.toString() + '/' + max.toString() : defaultValue;
	}
}
