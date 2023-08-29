import ClubSummary from '../entities/clubSummary.js';
import Club from '../entities/club.js';
import { getClubColors } from '../utilities/utilities.js';

export function mapClubs(clubsSummaryData) {
  const clubsSummary = [];
  clubsSummaryData.forEach((clubSummary) => {
    clubsSummary.push(new ClubSummary(
      clubSummary.area.name,
      clubSummary.name,
      clubSummary.shortName,
      clubSummary.tla,
      clubSummary.crestUrl,
      clubSummary.address,
      clubSummary.phone,
      clubSummary.website,
      clubSummary.email,
      clubSummary.founded,
      clubSummary.clubColors,
      clubSummary.venue,
      clubSummary.lastUpdated,
      clubSummary.id,
      clubSummary.area.id,
    ));
  });

  return clubsSummary;
}

export function mapClubSummary(clubData) {
  return new ClubSummary(
    clubData.country,
    clubData.name,
    clubData.shortName,
    clubData.tla,
    clubData.crestUrl,
    clubData.address,
    clubData.phone,
    `https://${clubData.newWebsite}`,
    clubData.email,
    Number(clubData.founded),
    getClubColors(clubData.color1, clubData.color2),
    clubData.venue,
    new Date().toISOString(),
  );
}

export function mapClub(clubData) {
  return new Club(
    clubData.country,
    clubData.name,
    clubData.shortName,
    clubData.tla,
    clubData.crestUrl,
    clubData.address,
    clubData.phone,
    clubData.website || `https://${clubData.newWebsite}`,
    clubData.email,
    Number(clubData.founded),
    clubData.clubColors || getClubColors(clubData.color1, clubData.color2),
    clubData.venue,
    clubData.lastUpdated || new Date().toISOString(),
    clubData.activeCompetitions,
    clubData.squad,
  );
}

export function mapAddress(address) {
  let mappedAddress = address;
  if (!mappedAddress.includes('stadium') || !mapAddress.includes('Stadium')) {
    mappedAddress = mappedAddress.concat(' stadium');
  }
  return mappedAddress.replaceAll(' ', '%20');
}
