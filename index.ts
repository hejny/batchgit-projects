import Workspace  from './src/Workspace';
import config  from './config.sample';



async function main(){


    console.log(await config.accounts[0].repositories());

    /*const workspace = await Workspace.fromConfig(config);

    for(const project of workspace.projects){
        await project.pull();
        console.log(`${project} pulled`);//todo stdio
    }*/

}

main();

//todo 
//todo prettier