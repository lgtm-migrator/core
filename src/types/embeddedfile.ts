import { PdfObject } from '../base/pdfobject';
import { PdfObjectType } from '../base/pdfobjecttype.enum';

/**
 *
 *
 * @export
 * @class EmbeddedFile
 * @extends {PdfObject}
 */
export class EmbeddedFile extends PdfObject {
  constructor(
    public Id: number,
    public Generation: number,
    private _fileName: string,
    private _fileContent: string
  ) {
    super();

    this.Type = PdfObjectType.EmbeddedFile;
  }

  /**
   *
   *
   * @returns
   * @memberof EmbeddedFile
   */
  compileUnprocessed() {
    // ToDo: uhm... ya... you know
    return [
      '/Type /EmbeddedFile',
      `/Length ${this._fileContent.length}`,
      `/Params <</ModDate (D:${'20121110104707'})>>` // ToDo insert actual Date
    ];
  }

  /**
   *
   *
   * @returns
   * @memberof EmbeddedFile
   */
  endObject() {
    return ['>>', 'stream', this._fileContent, 'endstream', 'endobj'];
  }

  /**
   *
   *
   * @returns {string[]}
   * @memberof EmbeddedFile
   */
  compile(): string[] {
    return [
      ...this.startObject(),
      ...this.compileUnprocessed(),
      ...this.endObject()
    ];
  }
}
