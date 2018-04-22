import Workspace from './Workspace'

export default class Project{


    //todo does it make sence private protected ?
    //todo _private convention
    constructor(public protected gitUrl:string,private protected _workspace:Workspace){
    }

    toString():string{
        return();
    }

    get root():string{
        //todo
        //use fs path
    }


    async pull(){
        if(!fs.exists(this.root)){//todo later better testing
            //todo shell git clone
        }
        //todo fetch
        //todo pull
        //todo npm install
    }

    async develop(){
        //todo develop
    }


    async push(){
        //todo test
        //todo prettier
        //todo push
    }






}