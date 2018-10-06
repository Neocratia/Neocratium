export interface Vote {
	userId: string;
	decisionId: string;
	value: string;
	delegated: boolean;
	representative: string;
}
