import ClubSummary from '../entities/clubSummary.js';

export function mapClubs(clubsSummaryData) {
  const clubsSummary = [];
  clubsSummaryData.forEach((clubSummary) => {
    clubsSummary.push(new ClubSummary(
      clubSummary.id,
      clubSummary.area.id,
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
    ));
  });

  return clubsSummary;
}
