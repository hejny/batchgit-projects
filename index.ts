import Workspace  from './src/Workspace';
import Repository  from './src/Repository';
import config  from './config';

async function main(){

    console.log('\x1Bc');
    console.log(`Getting repositories from workspace.`);

    




    console.log('\x1Bc');
    let ignored = 0;
    const repositories:Repository[] = [];
    for(const account of config.accounts){
        console.log(`Getting repositories from ${account}.`);
        for(const repository of await account.repositories(config.workspace)){
            if(config.ignore.indexOf(repository.name)===-1){
                repositories.push(repository);
            }else{
                ignored++;
            }
        }
    }

    let i = 0;
    for(const repository of repositories){
        i++;

        console.log('\x1Bc');
        console.log(`Downloading ${i} / ${repositories.length} (${ignored} ignored)`);

        await repository.download();
        //throw new Error('x');

    };

    console.log('\x1Bc');
    console.log(`Downloaded ${repositories.length} repositories.`);

}

main();

//todo 
//todo prettier