export interface Block {
  type: string;
  title: string;

  text?: string;
  textSide?: string;

  media?: string;
  mediaType?: string;
}

export interface Page {
  title: string;
  blocks: Array<Block>;
}