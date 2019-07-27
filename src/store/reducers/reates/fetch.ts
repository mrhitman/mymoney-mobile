import { pick } from 'lodash';
import { RATES_FETCHED } from '.';
import IRates from '../../../types/Rates';

export interface FetchRatesAction {
	type: typeof RATES_FETCHED;
	payload: IRates;
}

function fetch(state, action: FetchRatesAction) {
	return pick<IRates>(action.payload, [ 'timestamp', 'base', 'rates' ])!;
}

export default fetch;
