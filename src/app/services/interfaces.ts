export interface IResponce {
  books: IBook[];
  error: [];
  page: string;
  total: string;
}

export interface IBook {
  title: string;
  subtitle: string;
  isbn13: string;
  image: string;
  price: string;
  url: string;
}

export interface IdBook{
  authors:string;
  desc:string;
  error:string;
  image:string;
  isbn10:string;
  isbn13:string;
  language:string;
  pages:string;
  price:string;
  publisher:string;
  rating:string;
  subtitle:string;
  title:string;
  url:string;
  year:string;
}
