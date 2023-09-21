import { Component } from '@angular/core';
import { Book } from 'src/app/books';
import { HomeService } from 'src/app/services/home.service';
import { FormBuilder, FormGroup } from '@angular/forms';    

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent {
  successMessage = false
  books:any[]=[]

  constructor(     private _fb: FormBuilder, private homeService:  HomeService){}
  cmsForm: FormGroup = this._fb.group({
    bookName:"",
    sellingPrice:"",
    author :"",
    description:"",
    image:""
  })
  selectedFile?: any
  getSelectedFile(event: any): void {
    this.selectedFile = event.target.files[0];
    
  }

  selectedBook?:Book
  
  createBook(){
   

    const formData:any = {}
    formData.bookName = this.cmsForm.value.bookName;
    formData.author = this.cmsForm.value.author;
    formData.description= this.cmsForm.value.description;
    formData.sellingPice =this.cmsForm.value.sellingPrice;
    formData.file = this.selectedFile 
    // formData.append('file', this.selectedFile);
    
    
  
      this.homeService.createBook(formData).subscribe(book=>{ 
        console.log(book)
      })
      // .subscribe(book => { this.books.push(book)})
      // this.successMessage = true
      // console.log(this.books)
  }
  selectBook(book:Book):void{
    console.log(book)

  }
}
