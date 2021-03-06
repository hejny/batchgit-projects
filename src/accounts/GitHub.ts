import IAccount from "./IAccount";
import Repository from "../Repository";
import Workspace from "../Workspace";
import * as superagent from 'superagent'

export default class GitHub implements IAccount{

    constructor(public username:string,private apiKey:string){

    }

    async repositories(workspace: Workspace){


        const result = await superagent.get(`https://api.github.com/user/repos?per_page=1000&access_token=${this.apiKey}`);
        
        //console.log('-----------------');
        //console.log(result.body);
        //console.log('-----------------');
        //console.log('\x1Bc');
        //console.log(result.body);
        //return;


        const repositories = (result.body).map((repo:any)=>new Repository(repo.name,repo.ssh_url,workspace));
        return repositories;
        //return [];
    }

    toString():string{
        return `${this.username}'s GitHub account`;
    }
}