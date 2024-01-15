import { schema } from 'normalizr';

export const createCompoundId = ({ bandId, variantId }: { bandId: number, variantId: number }): string => `${bandId}/${variantId}`;

export const variantEntity = new schema.Entity('variants', {}, {
  // Creates a compoint ID for the unique variant price within a band.
  // This way the original server object is untouched and can be updated, but there is
  // now a unique reference to it that can be created easily and links the two in the store.
  idAttribute: (value, parent) => {
    return createCompoundId({ bandId: parent.id, variantId: value.id });
  }
});
export const pricingEntity = new schema.Entity('pricing', {
  priceBand: {
    variants: [variantEntity],
  },
});
export const performanceEntity = new schema.Entity('performances', {
  pricing: [pricingEntity],
});
