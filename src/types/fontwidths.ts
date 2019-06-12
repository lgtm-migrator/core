import { PdfObject } from '../base/pdfobject';
import { PdfObjectType } from '../base/pdfobjecttype.enum';

export class FontWidths extends PdfObject {
  constructor(
    public Id: number,
    public Generation: number,
    private FontName: string
  ) {
    super();

    this.Type = PdfObjectType.FontWidths;
  }

  startObject(): string[] {
    return [`${this.Id} ${this.Generation} obj`];
  }

  endObject(): string[] {
    return ['endobj'];
  }

  compileWidths(): string[] {
    return [
      '[',
      '255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255',
      '255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255',
      '255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255',
      '255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255',
      '255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255',
      '255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255',
      '255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255',
      '255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255',
      '255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255',
      '255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255',
      '255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255',
      '255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255 255',
      '255 255 255',
      ']'
    ];
  }

  compile(): string[] {
    return [
      ...this.startObject(),
      ...this.compileWidths(),
      ...this.endObject()
    ];
  }
}