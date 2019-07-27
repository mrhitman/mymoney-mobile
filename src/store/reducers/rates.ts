import { pick } from 'lodash';

interface IRates {
	timestamp: number | null;
	base: string;
	rates: { [base: string]: number };
}

const initialState = {
	timestamp: null,
	base: 'EUR',
	rates: {}
};

const RATES_FETCHED = 'RATES_FETCHED';

export default (state: IRates = initialState, action) => {
	switch (action.type) {
		case RATES_FETCHED:
			return pick<IRates>(action.payload, [ 'timestamp', 'base', 'rates' ])!;
		default:
			return state;
	}
};
