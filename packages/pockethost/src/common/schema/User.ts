import { type BaseFields } from './types'

export enum SubscriptionType {
  Legacy = 'legacy',
  Free = 'free',
  Premium = 'premium',
  Lifetime = 'lifetime',
  Flounder = 'flounder',
  BF24 = 'bf24',
}

export const PLAN_NAMES = {
  [SubscriptionType.Legacy]: 'Legacy',
  [SubscriptionType.Free]: 'Hacker',
  [SubscriptionType.Premium]: `Pro`,
  [SubscriptionType.Lifetime]: `Founder's Edition`,
  [SubscriptionType.Flounder]: `Flounder's Edition`,
  [SubscriptionType.BF24]: `Black Friday 2024 Edition`,
}

export type UserFields<TExtra = {}> = BaseFields & {
  email: string
  verified: boolean
  isLegacy: boolean
  isFounder: boolean
  subscription: SubscriptionType
  notifyMaintenanceMode: boolean
  isStatsRole: boolean
} & TExtra

export type WithCredentials = {
  tokenKey: string
  passwordHash: string
}

export type UserFields_WithCredentials = UserFields<WithCredentials>
