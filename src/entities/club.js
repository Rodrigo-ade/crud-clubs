export default class Club {
  area = {};

  constructor(
    areaName,
    name,
    shortName,
    tla,
    crestUrl,
    address,
    phone,
    website,
    email,
    founded,
    clubColors,
    venue,
    lastUpdated,
    id = null,
    areaId = null,
    activeCompetitions = [],
    squad = [],
  ) {
    this.area.name = areaName;
    this.name = name;
    this.shortName = shortName;
    this.tla = tla;
    this.crestUrl = crestUrl;
    this.address = address;
    this.phone = phone;
    this.website = website;
    this.email = email;
    this.founded = founded;
    this.clubColors = clubColors;
    this.venue = venue;
    this.lastUpdated = lastUpdated;
    this.id = id;
    this.area.id = areaId;
    this.activeCompetitions = activeCompetitions;
    this.squad = squad;
  }
}
