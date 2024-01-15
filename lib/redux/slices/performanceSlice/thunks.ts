import { createAppAsyncThunk } from '@/lib/redux/createAppAsyncThunk'
import { normalize } from 'normalizr';
import { performanceEntity } from '../../schema';
import type { EntitiesPayload } from '../../types';

// @TODO: build this out using createApi from the Redux Toolkit.
// Since there was only one API call to make, and this doesn't impact the data structure, this felt like a poor return on time invested.
export const getPerformanceAsync = createAppAsyncThunk(
  'performance/fetchData',
  async (id: number): Promise<EntitiesPayload> => {
    // @TODO: error handling of any kind
    const response = await fetch(`https://api.line-up.tickets/api/performance/${id}/`, {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_AUTH_TOKEN}`,
      }
    });
    const { data } = await response.json();
    const { entities } = normalize(data, performanceEntity)
    return <EntitiesPayload>entities;
  }
)
