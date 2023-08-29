export function getClubColors(color1, color2) {
  return `${color1} / ${color2}`;
}

function getPlayerAge(dateOfBirth) {
  const today = new Date();
  const birthDate = new Date(dateOfBirth);
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDifference = today.getMonth() - birthDate.getMonth();

  if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
    age -= 1;
  }

  return age;
}

export function transformBirthdateToAge(club) {
  club.squad.forEach((member) => {
    member.age = getPlayerAge(member.dateOfBirth);
  });
  return club;
}
