import { Component, inject } from '@angular/core';
import { BookService } from './core/book.service'; 
import { BookListComponent } from './features/book-list/book-list.component'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [BookListComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  private bookService = inject(BookService);

  public wishlist = this.bookService.wishlist;
  public unread = this.bookService.unread;
  public reading = this.bookService.reading;
  public read = this.bookService.read;
}