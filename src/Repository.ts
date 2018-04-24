import * as shell  from 'shelljs';
import * as path  from 'path';
import Workspace from './Workspace'

export default class Repository{


    //todo does it make sence private protected ?
    //todo _private convention
    constructor(public name:string, public gitUrl:string,private _workspace:Workspace){
    }

    toString():string{
        return(`REPOSITORY(${this.gitUrl})`);
    }



    async pull(){
        //if(!fs.exists(this.root)){//todo later better testing
            //todo shell git clone
        //}
        //todo fetch
        //todo pull
        //todo npm install


        if (!shell.which('git')) {
            shell.echo('Sorry, this script requires git');
            shell.exit(1);
        }

        shell.cd(path.join(__dirname,'..',this._workspace.root));
        shell.exec(`git clone ${this.gitUrl}`);

    }

    /*

    async develop(){
        //todo develop
    }


    async push(){
        //todo test
        //todo prettier
        //todo push
    }*/






}