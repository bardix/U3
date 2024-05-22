import { Component } from '@angular/core';
import { iArticle } from './Models/article';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  apiUrl:string = '../../../giorno3/src/assets/db.json';

  userArr:iArticle[] = []

  ngOnInit(){

    this.getUsers()

    //commento questo perché il metodo async getUsers fa la stessa cosa
    // fetch(this.apiUrl)
    // .then(res => <Promise<iUser[]>> res.json())
    // .then(users => {
    //   this.userArr = users;
    // })

  }

  async getUsers():Promise<void>{

    let response = await fetch(this.apiUrl)
    let users = <iArticle[]> await response.json()
    //uso <iUser[]> per spiegare a ts che mi aspetto oggetti iUser

    setTimeout(()=>{
      this.userArr = users;
    }, 5000)

  }

}
