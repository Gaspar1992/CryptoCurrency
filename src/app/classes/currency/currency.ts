
export class Currency {
  public acronym: string;
  public id: number;
  public name: string;
  // tslint:disable-next-line:variable-name
  public links: object;
  constructor(acronysm?: string, id?: number, name?: string) {
    this.acronym  = acronysm;
    this.id = id;
    this.name = name;
  }
}
