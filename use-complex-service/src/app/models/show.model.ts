
    export interface Schedule {
      time: string;
      days: string[];
  }

  export interface Rating {
      average?: any;
  }

  export interface Country {
      name: string;
      code: string;
      timezone: string;
  }

  export interface Network {
      id: number;
      name: string;
      country: Country;
  }

  export interface Externals {
      tvrage?: any;
      thetvdb: number;
      imdb: string;
  }

  export interface Image {
      medium: string;
      original: string;
  }

  export interface Self {
      href: string;
  }

  export interface Previousepisode {
      href: string;
  }

  export interface Links {
      self: Self;
      previousepisode: Previousepisode;
  }

  export interface Show {
      id: number;
      url: string;
      name: string;
      type: string;
      language: string;
      genres: string[];
      status: string;
      runtime: number;
      averageRuntime: number;
      premiered: string;
      ended: string;
      officialSite?: any;
      schedule: Schedule;
      rating: Rating;
      weight: number;
      network: Network;
      webChannel?: any;
      dvdCountry?: any;
      externals: Externals;
      image: Image;
      summary: string;
      updated: number;
      _links: Links;
  }

  export interface ShowResult {
      score: number;
      show: Show;
  }
