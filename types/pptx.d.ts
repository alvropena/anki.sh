declare module "pptx" {
  export class Presentation {
    constructor(buffer: ArrayBuffer);
    slides: Slide[];
  }

  export class Slide {
    getText(): string;
  }
}
