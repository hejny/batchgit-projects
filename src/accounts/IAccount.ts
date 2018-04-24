import Repository from "../Repository";
import Workspace from "../Workspace";

export default interface IAccount{
    repositories: (workspace: Workspace)=>Promise<Repository[]>
}