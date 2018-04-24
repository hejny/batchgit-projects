import Workspace  from './src/Workspace';
import config  from './config';



async function main(){



    const workspace = await Workspace.fromConfig(config);

    for(const project of workspace.projects){
        await project.pull();
        console.log(`${project} pulled`);//todo stdio
    }

}

main();

//todo 
//todo prettier