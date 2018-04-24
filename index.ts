import Workspace  from './src/Workspace';
import config  from './config.sample';

async function main(){

    for(const account of config.accounts){
        for(const repository of await account.repositories(config.workspace)){
            repository.download();
            throw new Error('x');
        }
    }

    /*const workspace = await Workspace.fromConfig(config);

    for(const project of workspace.projects){
        await project.pull();
        console.log(`${project} pulled`);//todo stdio
    }*/

}

main();

//todo 
//todo prettier