import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the UsersPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
import { User } from '../../models/user';

import {  GithubUsers } from '../../providers/github-users';

import { UserDetailsPage } from '../user-details/user-details';

@Component({
  selector: 'page-users',
  templateUrl: 'users.html',
})
export class UsersPage {
  users: User[];
  originalUsers: User[];
  constructor(public navCtrl: NavController, public navParams: NavParams, private githubUsers:GithubUsers) {
    /*githubUsers.load().subscribe(users => {
      this.users = users;
      this.originalUsers = users;
    }*/

   /* githubUsers.searchUsers("owenma").subscribe(users=>{
      this.users = users;
      console.log(users);
    })*/
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UsersPage');
  }

  goToDetails(login: string) {
    this.navCtrl.push(UserDetailsPage, {login});
  }

  search(searchEvent){
    let term = searchEvent.target.value
    if (term.trim() === '' || term.trim().length < 3) {
      // Load cached users
      this.users = this.originalUsers;
    } else {
      this.githubUsers.searchUsers(term).subscribe(users => {
        this.users = users;
        console.log(users);
      })
    }
  }

}
