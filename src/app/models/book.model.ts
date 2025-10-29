export type BookStatus = 'wishlist' | 'unread' | 'reading' | 'read';

export interface Book {
  id: number;
  title: string;
  author: string;
  status: BookStatus;
}