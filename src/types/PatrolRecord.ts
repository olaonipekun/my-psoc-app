// types/PatrolRecord.ts
export interface PatrolRecord {
  id: string
  team: string
  region: string
  shift: 'Day' | 'Night'
  vehicle: string
  pilot: string
  armedMen: string
  fuelLevel: string
  siteCode: string
}
