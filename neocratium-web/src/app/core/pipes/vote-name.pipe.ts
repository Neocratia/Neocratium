import { Pipe, PipeTransform } from '@angular/core';
import { VoteService } from './../../shared/services/vote.service';
import { map } from 'rxjs/operators';

@Pipe({
	name: 'voteName'
})
export class VoteNamePipe implements PipeTransform {
	name;
	constructor(private voteService: VoteService) {}
	transform(value: any, args?: any): any {
		return this.voteService.getUserName(value).map(arr => {
			this.name = arr.map((v: any) => v.displayName);
			return this.name;
		});
	}
}
