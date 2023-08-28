import { getClubsSummary as getClubsSummaryFromApi } from '../api/api.js';
import { mapClubs } from '../mappers/mappers.js';

export async function getClubsSummary() {
  const clubs = mapClubs( await getClubsSummaryFromApi());
  return clubs;
}
