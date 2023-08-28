import {
  getClubsSummary as getClubsSummaryFromApi,
  addClubSummary as addClubSummaryToApi,
  addClub as addClubToApi,
  getClub as getClubFromApi,
} from '../api/api.js';

import { mapClub, mapClubs, mapClubSummary } from '../mappers/mappers.js';

export async function getClubsSummary() {
  const clubs = mapClubs(await getClubsSummaryFromApi());
  return clubs;
}

export async function addClubSummaryToDatabase(clubData) {
  const clubSummary = mapClubSummary(clubData);
  addClubSummaryToApi(clubSummary);
}

export async function addClubToDatabase(clubData) {
  const club = mapClub(clubData);
  addClubToApi(club);
}

export async function getClub(clubTla) {
  const club = await getClubFromApi(clubTla);
  return club;
}
