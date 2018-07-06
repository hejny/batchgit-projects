import Workspace  from './src/Workspace';
import Repository  from './src/Repository';
import config  from './config';

async function main(){

    console.log('\x1Bc');
    console.log(`Getting repositories from workspace.`);

    




    console.log('\x1Bc');
    //let ignored = 0;
    const repositories:Repository[] = [];
    const repositoriesIgnored:Repository[] = [];
    for(const account of config.accounts){
        console.log(`Getting repositories from ${account}.`);
        for(const repository of await account.repositories(config.workspace)){
            if(config.ignore.some((ignore)=>ignore.test(repository.fullName))===false){
                repositories.push(repository);
            }else{
                repositoriesIgnored.push(repository);
            }
        }
    }


    console.log('Theese repositories will be downloaded:');
    console.log(repositories.join('\n'));
    console.log('---------------------Ignored:');
    console.log(repositoriesIgnored.join('\n'));
    //process.exit();



    let i = 0;
    for(const repository of repositories){
        i++;

        console.log('\x1Bc');
        console.log(`Downloading ${i} / ${repositories.length} (${repositoriesIgnored.length} ignored)`);

        await repository.download();
        //throw new Error('x');

    };

    console.log('\x1Bc');
    console.log(`Downloaded ${repositories.length} repositories.`);

}

main();

//todo 
//todo prettier