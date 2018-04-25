import * as path  from 'path';

export default class Workspace{
    constructor(public rootRelative:string){
    }

    get root():string{
        return path.join(__dirname,'..',this.rootRelative);
    }
}