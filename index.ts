import Workspace  from './src/Workspace';
import Repository  from './src/Repository';
import config  from './config.sample';

async function main(){

    console.clear();
    const repositories:Repository[] = [];
    for(const account of config.accounts){
        console.log(`Getting repositories from ${account}.`);
        for(const repository of await account.repositories(config.workspace)){
            repositories.push(repository);
        }
    }

    let i = 0;
    for(const repository of repositories){
        i++;

        console.clear();
        console.log(`Downloading ${i} / ${repositories.length}`);

        await repository.download();
        //throw new Error('x');

    };

    console.clear();
    console.log(`Downloaded ${repositories.length} repositories.`);

}

main();

//todo 
//todo prettier