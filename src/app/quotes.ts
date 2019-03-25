
export class Quotes {
  public showDetails: boolean;
  constructor(
    public name: string,
    public author: string,
    public wise:string,
    public details: string
  ) {this.showDetails=false}
}
