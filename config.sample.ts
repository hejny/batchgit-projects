import Workspace from './src/Workspace';
import GitHub from './src/accounts/GitHub';

export default {

    workspace: new Workspace(
        '../',
        (name)=>{
            const parts = name.split('-');
            if(parts.length===1){
                return `other/${name}`;
            }else{
                return `${parts[0]}/${name}`;
            }
        }
    ),
    accounts: [
        new GitHub('hejny')
    ],
    ignore:[
        //'projects.git'//todo
    ]
}