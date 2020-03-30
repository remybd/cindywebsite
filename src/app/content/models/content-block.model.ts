export class ContentBlockModel {
  legend: string = '';
  readonly blockName;

  constructor(blockName: string, legend: string = '') {
    this.blockName = blockName;
    this.legend = legend;
  }
}
