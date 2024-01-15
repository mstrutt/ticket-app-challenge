import { type EntityId } from '@reduxjs/toolkit';

export type Performance = {
  description: string | null,
  endDate: string | null,
  endTime: string | null,
  eventId: number,
  id: number,
  pricing: [Pricing['id']],
  startDate: string,
  startTime: string,
  tags: [],
  timeZone: string,
  totalCapacity: number,
  totalCapacityRemaining: number,
  venuePlanId: number,
}

export type Pricing = {
  capacity: number,
  capacityRemaining: number,
  id: number,
  priceBand: {
    color: string,
    description: string,
    icon: string,
    id: number,
    name: string,
    // Manually declaring this type as 'string'.
    // @TODO: Have this be the result of the compound ID creation
    variants: [string],
  },
}

export type Variant = {
  adjusters: [Adjuster],
  coupons: [],
  description: string | null,
  discount: string | null,
  id: number,
  name: string,
  price: Price,
}

export type Adjuster = {
  description: string | null,
  external: boolean,
  id: number,
  name: string,
  price: Price,
  rate: number,
  rateType: string,
}

export type Price = {
  id: number,
  value: number,
}

export type EntitiesPayload = {
  performances: Record<EntityId, Performance>,
  variants: Record<EntityId, Variant>,
  pricing: Record<EntityId, Pricing>,
}