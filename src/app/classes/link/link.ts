export class Link {
  public href: string;
  public rel: string;
  public templated: boolean;
  constructor(href?: string, rel?: string, templated?: boolean) {
    this.href = href;
    this.rel = rel;
    this.templated = templated;
  }
}
