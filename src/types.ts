export type Hits<T = Record<string, any>> = Array<Hit<T>>;
export type Hit<T = Record<string, any>> = T & {
  _formatted?: Partial<T>;
  _matchesPosition?: MatchesPosition<T>;
  _rankingScore?: number;
  _rankingScoreDetails?: RankingScoreDetails;
};

