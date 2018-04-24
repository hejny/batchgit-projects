import * as shell  from 'shelljs';
import Workspace  from './src/Workspace';
import config  from './config.sample';

if (!shell.which('git')) {
    shell.echo('Sorry, this script requires git');
    shell.exit(1);
}


async function main(){

    const repositories = await config.accounts[0].repositories();
    //console.log();


    shell.exec(`git clone ${repositories[0].gitUrl}`);


    /*const workspace = await Workspace.fromConfig(config);

    for(const project of workspace.projects){
        await project.pull();
        console.log(`${project} pulled`);//todo stdio
    }*/

}

main();

//todo 
//todo prettier