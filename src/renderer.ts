import Workspace from "./classes/Workspace";

const workspace = new Workspace('../../');



async function main(){

    console.log(workspace);
    const repositories = await workspace.unassignedRepositoriesRoot();

    console.log(repositories);
}

main();