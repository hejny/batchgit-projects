import Project from './Project'
import * as superagent from 'superagent'

interface IWorkspaceConfig{
    root: string,
    accounts: {
        type: 'GITHUB',
        username: string
    }[]
}

export default class Workspace{

    constructor(public root:string,public projects:Project[]){


    }



    static async fromConfig(config:IWorkspaceConfig):Promise<Workspace>{


        const projects:Project[] = [];

        for(const account of config.accounts){


            loadRe

            const accountData = await superagent.get(``);


            for(const repository of accountData.xxxxxx){
                projects.push(new Project(repository.url));            
            }



        }
        


        return new Workspace(config.root,projects);
    }    





}