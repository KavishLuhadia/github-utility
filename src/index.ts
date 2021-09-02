import {githubApiService} from './githubApiService';
import { Repo } from './Repo';
import { User } from './User';
import * as _ from 'lodash' 


if(process.argv.length!=3){
    console.log("Correct usage is npm start <username>")
}
else {
 let userName =  process.argv[2];
let svc = new githubApiService();

svc.getUserInfo(userName, (user:User) =>{
    svc.getRepos(userName, (repos:Repo[]) =>{
        let sortedRepos = _.sortBy(repos,[(repo:Repo)=> repo.forkCount*-1]);
        let filteredRepos = _.take(sortedRepos,5);
        user.repos =  filteredRepos;
        console.log(user);
    });
});
}
/* svc.getRepos('kavishluhadia', (repos:Repo[]) =>{
    console.log(repos);
}); */