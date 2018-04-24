import GitHub from './src/accounts/GitHub';

export default {

    root: '../',//todo dirname
    accounts: [
        new GitHub('hejny')
    ],
    ignore:[
        //'projects.git'//todo
    ]

}