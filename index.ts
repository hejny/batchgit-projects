import Workspace  from './src/Workspace';
import config  from './config.sample';

async function main(){



    const repositories = await config.accounts[0].repositories(config.workspace);
    //console.log();

    repositories[0].pull();
    repositories[0].pull();


    /*const workspace = await Workspace.fromConfig(config);

    for(const project of workspace.projects){
        await project.pull();
        console.log(`${project} pulled`);//todo stdio
    }*/

}

main();

//todo 
//todo prettier