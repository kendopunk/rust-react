/**
 * src/lib/constants.ts
 */
export type HeaderMenuItem = {
  id: number
  label: string
  route: string
}

export const headerMenuItems: HeaderMenuItem[] = [
  {
    id: 1,
    label: 'Home',
    route: '/'
  },
  {
    id: 2,
    label: 'Polars',
    route: '/polars'
  },
  {
    id: 3,
    label: 'Serde',
    route: '/serde'
  }
]
