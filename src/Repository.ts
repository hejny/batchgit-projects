import * as shell  from 'shelljs';
import * as path  from 'path';
import * as fs  from 'fs';
import Workspace from './Workspace'



export default class Repository{


    //todo does it make sence private protected ?
    //todo _private convention

    //public name:string;

    constructor(public name:string, public origin:string,private _workspace:Workspace){
        //this.name = _workspace.nameOrganizer(name);
    }

    async root():Promise<string>{
        const unassignedRepositoriesRoot = await this._workspace.unassignedRepositoriesRoot();
        for(const repositoryRoot of unassignedRepositoriesRoot){
            shell.cd(repositoryRoot);

            const { stdout, stderr } = shell.exec('git config --get remote.origin.url', { silent: true });

            if(this.origin === stdout.toString().trim()){
                //todo remove root from workspace after match
                return repositoryRoot;
            }
        }

        return path.join(this._workspace.root,this.owner,this.name);
    }

    get owner(){
        return (this.origin.match(/\:((\w|\-)+)\//)||[''])[1]||'unknown';
    }

    async download(){
        //if(!fs.exists(this.root)){//todo later better testing
            //todo shell git clone
        //}
        //todo fetch
        //todo pull
        //todo npm install

        console.log(`Name: ${this.name}.`);
        console.log(`Origin: ${this.origin}`);
        console.log(`Owner: ${this.owner}`);

        if (!shell.which('git')) {
            throw new Error('This script requires git.');
            //shell.echo('Sorry, this script requires git');
            //shell.exit(1);
        }

        const repositoryRoot = await this.root();
        console.log(`Root: ${repositoryRoot}`);

        if(!fs.existsSync(path.join(repositoryRoot,'.git'))){
            console.log(`cloning...`);
            //shell.cd(path.join(repositoryRoot,'..'));
            
            const command = `git clone ${this.origin} ${repositoryRoot}`;

            console.log(command);
            const result = shell.exec(command);

            /*
            todo
            if(result.stderr){
                console.log('STDERR='+result.stderr);
                throw new Error(result.stderr);
            }*/
        }else{
            console.log(`already cloned...`);
        }
        
        shell.cd(repositoryRoot);

        console.log(`pulling...`);
        shell.exec(`git fetch`);//todo is it needed?
        shell.exec(`git pull`);


        if(fs.existsSync(path.join(repositoryRoot,'package.json'))){
            console.log(`installing npm dependencies...`);
            shell.exec(`npm install`);
        }

    }

    /*

    async develop(){
        //todo develop
    }


    async upload(){
        //todo test
        //todo prettier
        //todo push
    }*/






}