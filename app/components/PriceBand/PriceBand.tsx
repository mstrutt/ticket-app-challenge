'use client'

import {
  useSelector,
  selectVariantsByPricingId,
} from '@/lib/redux'

import { PriceVariant } from '../PriceVariant/PriceVariant';

export const PriceBand = ({ id }: { id: number }) => {
  const variants = useSelector(state => selectVariantsByPricingId(state, id))

  // Ultimately this is a pretty thin component, it just sets up the next loop where <PriceVariant> does the heavy lifting.
  // Encapsulating this loop in a component limits the render were any price-band-related data to be updated though.
  // Note: multiple <tbody> is totally valid.
  return <tbody>
    {variants?.map((variantId: string) => <PriceVariant key={variantId} id={variantId} bandId={id}></PriceVariant>)}
  </tbody>
};
