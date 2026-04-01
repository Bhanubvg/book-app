
import { html, render } from 'https://cdn.jsdelivr.net/npm/lit-html@3.3.2/+esm';


async function loadBooks() {
    const response = await fetch('App/assets/books.json');
    const books = await response.json();
    return books.books;
}


const books = await loadBooks();


function render_book(book) {
    return html`
        <book-card 
            .name=${book.name}
            .rating=${book.rating}
            .author=${book.author}
            .image=${book.image}>
        </book-card>
    `;
}

function render_all_books(books) {
    return html`${books.map(book => render_book(book))}`;  // map returns array of templates
}

render(render_all_books(books), document.getElementById('books'));  // render needs (template, container)
