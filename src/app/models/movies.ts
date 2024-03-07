import {Movie} from "./movie";

export interface Movies {
  count: number;
  next: string;
  previous: string;
  results: Movie[];
}
