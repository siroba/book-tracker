import { Injectable, signal, computed, WritableSignal, Signal } from '@angular/core';
import { Book, BookStatus } from '../models/book.model';

@Injectable({
  providedIn: 'root',
})
export class BookService {

  private books: WritableSignal<Book[]> = signal([
    // TODO: Cambiar por datos de un endpoint cuando este hecho
    { id: 1, title: 'Dune', author: 'Frank Herbert', status: 'read' },
    { id: 2, title: 'El problema de los tres cuerpos', author: 'Cixin Liu', status: 'reading' },
    { id: 3, title: 'Winter', author: 'Marissa Meyer', status: 'unread' },
    { id: 4, title: 'El susurro del fuego', author: 'Javier Castillo', status: 'wishlist' },
    { id: 5, title: 'El nombre del vento', author: 'Patrick Rothfuss', status: 'wishlist' },
  ]);

  public allBooks: Signal<Book[]> = this.books.asReadonly();

  public wishlist: Signal<Book[]> = computed(() =>
    this.books().filter((book) => book.status === 'wishlist')
  );

  public unread: Signal<Book[]> = computed(() =>
    this.books().filter((book) => book.status === 'unread')
  );

  public reading: Signal<Book[]> = computed(() =>
    this.books().filter((book) => book.status === 'reading')
  );

  public read: Signal<Book[]> = computed(() =>
    this.books().filter((book) => book.status === 'read')
  );

  public addBook(title: string, author: string, status: BookStatus): void {
    const newBook: Book = {
      id: Date.now(), 
      title,
      author,
      status,
    };

    this.books.update((currentBooks) => [...currentBooks, newBook]);
  }

  public updateBookStatus(id: number, newStatus: BookStatus): void {
    this.books.update((currentBooks) =>
      currentBooks.map((book) =>
        book.id === id ? { ...book, status: newStatus } : book
      )
    );
  }
}