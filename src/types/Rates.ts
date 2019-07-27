interface IRates {
	timestamp: number | null;
	base: string;
	rates: { [base: string]: number };
}

export default IRates;
