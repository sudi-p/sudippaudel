import { Topic } from "./types";
import { enterprise } from "./enterprise";
import { chat } from "./chat";
import { podcast } from "./podcast";
import { formfiller } from "./formfiller";
import { ticketing } from "./ticketing";
import { pipeline } from "./pipeline";

export type { Block, Topic } from "./types";
export const SD_TOPICS: Topic[] = [enterprise, chat, podcast, formfiller, ticketing, pipeline];
