import { Component } from '@angular/core';
import { HomeService } from '../services/home.service';
import { Book } from '../books';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

constructor(private homeService: HomeService) {}
 
 searchTitle(searchBox:string) {
  this.homeService.searchBook(searchBox).subscribe(data=>{
    //  const book = data.filter(data =>  searchBox == data.bookName)
     console.log(data)
  })
 }
}

