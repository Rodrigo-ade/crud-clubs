export default class ClubSummary {
  area = {};

  constructor(
    id,
    areaId,
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
  ) {
    this.id = id;
    this.area.id = areaId;
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
  }
}
