import IAccount from "./IAccount";
import Repository from "../Repository";
import Workspace from "../Workspace";
import * as superagent from 'superagent'

export default class GitLab implements IAccount{

    constructor(public username:string,private apiKey:string){
    }

    async repositories(workspace: Workspace){
        const result = await superagent.get(`https://gitlab.com/api/v4/projects?membership=1&private_token=${this.apiKey}`);
        const repositories = (result.body).map((repo:any)=>new Repository(repo.name,repo.ssh_url_to_repo,workspace));
        return repositories;
    }

    toString():string{
        return `${this.username}'s GitLab account`;
    }
}