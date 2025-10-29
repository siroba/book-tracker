import { Injectable, signal, computed, WritableSignal, Signal } from '@angular/core';
import { Book, BookStatus } from '../models/book.model';

@Injectable({
  providedIn: 'root',
})
export class BookService {

  private books: WritableSignal<Book[]> = signal([
    // Datos iniciales de prueba
    { id: 1, title: 'Dune', author: 'Frank Herbert', status: 'read' },
    { id: 2, title: 'El problema de los tres cuerpos', author: 'Cixin Liu', status: 'reading' },
    { id: 3, title: 'Hyperion', author: 'Dan Simmons', status: 'unread' },
    { id: 4, title: 'Fundación', author: 'Isaac Asimov', status: 'wishlist' },
    { id: 5, title: 'El Nombre del Viento', author: 'Patrick Rothfuss', status: 'wishlist' },
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