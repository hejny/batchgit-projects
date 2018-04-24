import * as shell  from 'shelljs';
import * as path  from 'path';
import * as fs  from 'fs';
import Workspace from './Workspace'

export default class Repository{


    //todo does it make sence private protected ?
    //todo _private convention

    public name:string;

    constructor(name:string, public gitUrl:string,private _workspace:Workspace){
        this.name = _workspace.nameOrganizer(name);
    }

    get root():string{
        return path.join(this._workspace.root,this.name);
    }

    async download(){
        //if(!fs.exists(this.root)){//todo later better testing
            //todo shell git clone
        //}
        //todo fetch
        //todo pull
        //todo npm install

        console.log(`Downloading ${this.name}.`);


        if (!shell.which('git')) {
            shell.echo('Sorry, this script requires git');
            shell.exit(1);
        }

        shell.cd(this._workspace.root);

        if(!fs.existsSync(path.join(this.root,'.git'))){
            shell.exec(`git clone ${this.gitUrl} ${this.name}`);
        }
        
        shell.cd(this.root);

        shell.exec(`git fetch`);
        shell.exec(`git pull`);


        if(fs.existsSync(path.join(this.root,'package.json'))){
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