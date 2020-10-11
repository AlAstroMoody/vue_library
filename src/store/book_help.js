export default class Book {
  constructor(
    name,
    author,
    genre,
    description,
    rating,
    publisher,
    origin,
    inStock,
    id = null
  ) {
    this.name = name;
    this.author = author;
    this.genre = genre;
    this.description = description;
    this.rating = rating;
    this.publisher = publisher;
    this.origin = origin;
    this.inStock = inStock;
    this.id = id;
  }
}
