export class User {
  public readonly id: number;
  public readonly name: string;
  public readonly github: string;

  constructor(id: number, name: string, github: string) {
    this.id = id;
    this.name = name;
    this.github = github;
  }
}
