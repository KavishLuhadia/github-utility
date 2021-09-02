export class Repo {
    name!: string;
    url!: string;
    forkCount!: number

    constructor(repo: any){

        this.name = repo.name;
        this.url = repo.html_url;
        this.forkCount= repo.forks;
    }
}