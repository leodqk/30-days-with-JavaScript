let books = [];

function addBook(book) {
  let table = $("#bookTable tbody");
  table.append(`
  <tr id="${book.id}">
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.genre}</td>
    <td>${book.year}</td>
    <td>${book.quantity}</td>
    <td>
    <button class="btn btn-sm btn-warning editBtn" data-id="${book.id}">Edit</button>
    </td>
    <td>
    <button class="btn btn-sm btn-danger deleteBtn" data-id="${book.id}">Delete</button>
    </td>
  `);
}
