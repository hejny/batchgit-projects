import IAccount from "./IAccount";
import Repository from "../Repository";
import * as superagent from 'superagent'

export default class GitHub implements IAccount{

    constructor(public username:string){

    }

    async repositories(){


        const result = await superagent.get(`https://api.github.com/users/${this.username}/repos?per_page=200`);
        
        //console.log('-----------------');
        //console.log(result.body);
        //console.log('-----------------');
        //console.log(JSON.parse(result.body)[0]);

        const repositories = (result.body).map((repo:any)=>new Repository(repo.name,repo.ssh_url));
        return repositories;
        //return [];
    }
}