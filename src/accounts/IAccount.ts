import Repository from "../Repository";

export default interface IAccount{
    repositories: ()=>Promise<Repository[]>
}