import { Component } from '@angular/core';
import { Book } from 'src/app/books';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent {
  successMessage = false
  books:any[]=[]
  book:any = {}
  selectedBook?:Book
  createBook(bookName:string, author:string, sellingPrice:string, description:string, image:string){
      this.book.bookName = bookName
      this.book.image = image
      this.book.author = author
      this.book.sellingPrice = sellingPrice
      this.book.description = description
      this.homeService.createBook(this.book as Book)
      .subscribe(book => { this.books.push(book)})
      this.successMessage = true
      console.log(this.books)
  }
  selectBook(book:Book):void{
    console.log(book)

  }
  constructor( private homeService:  HomeService){}
}
