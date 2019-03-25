
export class Quotes {
  public showDetails: boolean;
  constructor(
    public name: string,
    public author: string,
    public wise:string,
    public details: string,
    public completeDate: Date
  ) {this.showDetails=false}
}
