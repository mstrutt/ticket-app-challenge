'use client'

import {
  useDispatch,
  useSelector,
  selectPricingById,
  selectQuantityById,
  selectVariantById,
  basketSlice,
} from '@/lib/redux'
import styles from './price-variant.module.css'

export const PriceVariant = ({ id, bandId }: {id: string, bandId: number}) => {
  const dispatch = useDispatch();

  // Fetching both pricing and variant level data here for the text we need to display
  const variant = useSelector(state => selectVariantById(state, id));
  const pricing = useSelector(state => selectPricingById(state, bandId));
  // @TODO: quantity would likely be handled as a separate component.
  // With the level of logic we have for this demo, it didn't seem worthwhile.
  const quantity = useSelector(state => selectQuantityById(state, id));

  // Handling rendering of prices
  const GBP = new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
  });

  const updateQuantity = (adjustment: number) => {
    dispatch(basketSlice.actions.adjustQuantity({ adjustment, id }));
  };

  return <tr>
    <th scope="row">
      <span>{pricing?.priceBand.name} - {variant?.name}</span>
      <span>{pricing?.priceBand.description}</span>
      <span>{variant?.description}</span>
    </th>
    <td>
      <span>{variant && GBP.format(variant.price.value)}</span>
      {/* I'm making the assumption here that all adjusters should be shown, and they're all some sort of fee */}
      {variant?.adjusters.map(adjuster => <span key={adjuster.id}>(+ {GBP.format(adjuster.price.value)} {adjuster.name})</span>)}
    </td>
    <td>
      <button
        onClick={() => updateQuantity(-1)}
        className={styles.button}
        // Quick / simple way of handling the disabled state
        disabled={!quantity || quantity<1}
        aria-label="Decrease quantity"
      >-</button>
      {/* @TODO: I would look at making this an input for greater user affordance. Would work with a designer on this. */}
      <span className={styles.quantity}>{quantity || 0}</span>
      <button
        onClick={() => updateQuantity(+1)}
        className={styles.button}
        aria-label="Increase quantity"
      >+</button>
    </td>
  </tr>
};
