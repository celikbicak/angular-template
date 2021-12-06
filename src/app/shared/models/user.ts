export class User {
  public readonly id: string;
  public readonly name: string;
  public readonly github: string;

  constructor(id: string, name: string, github: string) {
    this.id = id;
    this.name = name;
    this.github = github;
  }
}
