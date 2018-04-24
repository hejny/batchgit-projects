import * as path  from 'path';

export default class Workspace{
    constructor(public rootRelative:string,public nameOrganizer:(name:string)=>string){
    }

    get root():string{
        return path.join(__dirname,'..',this.rootRelative);
    }
}