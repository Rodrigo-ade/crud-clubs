import fs from 'fs';

export async function getClubsSummary() {
  const clubs = await JSON.parse(fs.readFileSync('src/data/teams.json'));
  return clubs;
}

const CLUBS_FILE_PATH = 'src/data/teams.json';

export function addClubSummary(clubSummary) {
  const actualClubsSummary = JSON.parse(fs.readFileSync(CLUBS_FILE_PATH));
  actualClubsSummary.push(clubSummary);
  fs.writeFileSync(CLUBS_FILE_PATH, JSON.stringify(actualClubsSummary));
}

export function addClub(club) {
  const teamFileName = `${club.tla}.json`;
  fs.appendFileSync(`src/data/teams/${teamFileName}`, JSON.stringify(club));
}

export async function getClub(clubTla) {
  const club = JSON.parse(fs.readFileSync(`src/data/teams/${clubTla}.json`));
  return club;
}

export function deleteClub(clubTla) {
  const clubFilePath = `src/data/teams/${clubTla}.json`;
  fs.unlinkSync(clubFilePath);
}

export function deleteClubSummary(clubTla) {
  const clubsSummary = JSON.parse(fs.readFileSync(CLUBS_FILE_PATH));
  const indexClub = clubsSummary.findIndex((club) => club.tla === clubTla);
  clubsSummary.splice(indexClub, 1);
  fs.writeFileSync(CLUBS_FILE_PATH, JSON.stringify(clubsSummary));
}
