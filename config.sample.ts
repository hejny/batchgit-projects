import Workspace from './src/Workspace';
import GitHub from './src/accounts/GitHub';
import GitLab from './src/accounts/GitLab';

export default {

    workspace: new Workspace('../'),
    accounts: [
        new GitHub('hejny','<API_KEY>'),
        new GitLab('hejny','<API_KEY>')
    ],
    ignore:[
        'projects'
    ]
}