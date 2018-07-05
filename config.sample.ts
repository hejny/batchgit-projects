import Workspace from './src/Workspace';
import GitHub from './src/accounts/GitHub';

export default {

    workspace: new Workspace('../'),
    accounts: [
        new GitHub('hejny','<API_KEY>')
    ],
    ignore:[
        'projects'
    ]
}