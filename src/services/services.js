import {
  getClubsSummary as getClubsSummaryFromApi,
  addClubSummary as addClubSummaryToApi,
  addClub as addClubToApi,
  getClub as getClubFromApi,
  deleteClub as deleteClubFromApi,
  deleteClubSummary as deleteClubSummaryFromApi,
  getClubSummary as getClubSummaryFromApi,
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

export async function deleteClub(clubTla) {
  deleteClubFromApi(clubTla);
}

export async function deleteClubSummary(clubTla) {
  deleteClubSummaryFromApi(clubTla);
}

export async function updateClub(clubData) {
  const data = clubData;
  const oldClubSummary = await getClubSummaryFromApi(data.tla);

  if (data.crestUrl === undefined) {
    data.crestUrl = oldClubSummary.crestUrl;
  }

  const clubSummaryUpdated = mapClubSummary(data);
  deleteClubSummary(clubSummaryUpdated.tla);
  addClubSummaryToApi(clubSummaryUpdated);

  const oldClub = await getClubFromApi(data.tla);
  const newClub = mapClub(data);
  deleteClubFromApi(oldClub.tla);
  addClubToDatabase(newClub);
}
