import Workspace from './src/Workspace';
import GitHub from './src/accounts/GitHub';

export default {

    workspace: new Workspace('../'),//todo dirname
    accounts: [
        new GitHub('hejny')
    ],
    ignore:[
        //'projects.git'//todo
    ]

}