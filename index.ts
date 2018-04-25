import Workspace  from './src/Workspace';
import Repository  from './src/Repository';
import config  from './config.sample';

async function main(){

    const repositories:Repository[] = [];
    for(const account of config.accounts){
        for(const repository of await account.repositories(config.workspace)){
            repositories.push(repository);
        }
    }

    let i = 0;
    for(const repository of repositories){
        i++;

        console.clear();
        console.log(`Downloadind ${i} / ${repositories.length}`);

        await repository.download();
        throw new Error('x');

    };

}

main();

//todo 
//todo prettier