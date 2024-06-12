import { TitleResponse } from "./TitleResponse";
import { YoutubeResponse } from "./YoutubeResponse";

export type FeedResponse = YoutubeItem[] | TitleItem[];

interface YoutubeItem {
  youtube: YoutubeResponse;
}

interface TitleItem {
  title: TitleResponse;
}
