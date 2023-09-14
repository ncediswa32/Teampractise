import { Component } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-viewbooks',
  templateUrl: './viewbooks.component.html',
  styleUrls: ['./viewbooks.component.css']
})
export class ViewbooksComponent {
  books:any[]=[]
  
  ngOnInit(): void {
    this.getBook()
  }

  constructor(private homeService: HomeService){}
  getBook():void{
    this.homeService.getBooks()
    .subscribe(book =>{
      this.books =book 
      console.log(this.books)
    })
  }

}
