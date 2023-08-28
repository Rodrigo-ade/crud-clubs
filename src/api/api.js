import fs from 'fs';

export async function getClubsSummary() {
  const clubs = await JSON.parse(fs.readFileSync('src/data/teams.json'));
  return clubs;
}

export function addClubSummary(clubSummary) {
  const clubsFilePath = 'src/data/teams.json';
  const actualClubsSummary = JSON.parse(fs.readFileSync(clubsFilePath));
  actualClubsSummary.push(clubSummary);
  fs.writeFileSync(clubsFilePath, JSON.stringify(actualClubsSummary));
}

export function addClub(club) {
  const teamFileName = `${club.tla}.json`;
  fs.appendFileSync(`src/data/teams/${teamFileName}`, JSON.stringify(club));
}

export async function getClub(clubTla) {
  const club = JSON.parse(fs.readFileSync(`src/data/teams/${clubTla}.json`));
  return club;
}
