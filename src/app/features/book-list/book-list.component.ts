import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookService } from '../../core/book.service';
import { Book, BookStatus } from '../../models/book.model';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent {

  @Input() public title!: string;
  @Input() public books!: Book[];

  constructor(private bookService: BookService) {}

  public allStatus: BookStatus[] = ['wishlist', 'unread', 'reading', 'read'];

  public onStatusChange(event: Event, book: Book): void {
    const newStatus = (event.target as HTMLSelectElement).value as BookStatus;
    this.bookService.updateBookStatus(book.id, newStatus);
  }
}