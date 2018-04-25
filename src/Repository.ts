import * as shell  from 'shelljs';
import * as path  from 'path';
import * as fs  from 'fs';
import * as glob  from 'glob';
import Workspace from './Workspace'
import { resolve } from 'dns';
import { isNull } from 'util';

function globPromise(pattern: string, options: glob.IOptions):Promise<string[]>{
    return new Promise((resolve,reject)=>{
        glob(pattern, options, function (error, files) {
            if(isNull(error)){
                resolve(files)
            }else{
                reject(error);
            }
        });

    });
}

export default class Repository{


    //todo does it make sence private protected ?
    //todo _private convention

    //public name:string;

    constructor(public name:string, public origin:string,private _workspace:Workspace){
        //this.name = _workspace.nameOrganizer(name);
    }

    async root():Promise<string>{
        const folders = await globPromise(path.join(this._workspace.root,'**/.git'), {});
        for(const folder of folders){
            const repositoryRoot = path.join(folder,'..');
            shell.cd(repositoryRoot);

            const { stdout, stderr } = shell.exec('git config --get remote.origin.url', { silent: true });

            if(this.origin === stdout.toString().trim()){
                return repositoryRoot;
            }
        }
        return path.join(this._workspace.root,this.name);
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

        if (!shell.which('git')) {
            throw new Error('This script requires git.');
            //shell.echo('Sorry, this script requires git');
            //shell.exit(1);
        }

        const repositoryRoot = await this.root();
        console.log(`Root: ${repositoryRoot}`);

        if(!fs.existsSync(path.join(repositoryRoot,'.git'))){
            console.log(`clonning...`);
            shell.cd(path.join(repositoryRoot,'..'));
            shell.exec(`git clone ${this.origin} ${path.basename(repositoryRoot)}`);
        }else{
            console.log(`already clonned...`);
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