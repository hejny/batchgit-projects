import * as shell  from 'shelljs';
export default class Workspace{
    constructor(public root:string){


    }

    cd(){
        shell.cd(this.root);
    }
}