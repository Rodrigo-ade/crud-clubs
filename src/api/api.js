import fs from 'fs';

export async function getClubsSummary() {
  const clubs = await JSON.parse(fs.readFileSync('src/data/teams.json'));
  return clubs;
}
