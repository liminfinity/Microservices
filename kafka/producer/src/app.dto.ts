export class HelloDto {
  constructor(public text: string) {}
  toString() {
    return JSON.stringify({
      text: this.text,
    });
  }
}
