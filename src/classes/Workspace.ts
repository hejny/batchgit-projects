import * as path  from 'path';
import globPromise  from '../tools/globPromise';
import { isNull } from 'util';
import Repository from './Repository';

export default class Workspace{
    constructor(public rootRelative:string){
    }

    get root():string{
        return path.join(__dirname,'..',this.rootRelative);
    }

    private _unassignedRepositoriesRoot:string[]|null = null;

    async unassignedRepositoriesRoot():Promise<string[]>{
        if(isNull(this._unassignedRepositoriesRoot)){
            const folders = await globPromise(path.join(this.root,'**/.git'), {});
            this._unassignedRepositoriesRoot = folders.map((folder)=>path.join(folder,'..'))
        }
        return this._unassignedRepositoriesRoot;
    }

    /* todo async repositories():Promise<Repository[]>{
        
    }*/
}