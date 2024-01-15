'use client'

import {
  useSelector,
  useDispatch,
  selectPerformanceById,
  getPerformanceAsync,
  statusSelector,
} from '@/lib/redux'
import { useEffect } from 'react';

import { PriceBand } from '../PriceBand/PriceBand';

// @TODO: this should come from a route parameter
// Cut for time as it doesn't seem like the _most_ important part of the challenge
const performanceId = 21813;

export const Performance = () => {
  const dispatch = useDispatch();
  const performance = useSelector(state => selectPerformanceById(state, performanceId));
  const status = useSelector(statusSelector);

  // @TODO: consider better placement of this and potential caching
  useEffect(() => {
    const promise = dispatch(getPerformanceAsync(performanceId));
    return () => {
      // Handle the double dispatch of running in dev mode
      promise.abort();
    }
  }, []);

  if (status === 'loading') {
    // @TODO: a proper loading state
    return <div>Loading...</div>
  }

  return <div>
    {/* Yes, a table. See README.md for context */}
    <table>
      <thead>
        <tr>
          <th scope="col">Name and description</th>
          <th scope="col">Price and fees</th>
          <th scope="col">Purchase quantity</th>
        </tr>
      </thead>
      {performance?.pricing.map(id => <PriceBand key={id} id={id}></PriceBand>)}
    </table>
  </div>
}
