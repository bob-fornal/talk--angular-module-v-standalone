export interface Panel {
  image: string;
  text: string;
  url: string;
}

export interface Block {
  type: string;
  title: string;

  text?: string;
  textSide?: string;

  media?: string;
  mediaType?: string;

  panels?: Array<Panel>;

  href?: string;
}

export interface Page {
  title: string;
  blocks: Array<Block>;
}