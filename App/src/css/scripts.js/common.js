import { html, render } from "https://cdn.jsdelivr.net/npm/lit-html@3.3.2/+esm";

const container = document.getElementById("book-app");

function bookTemplate(book) {
    return html`
        <div class="book">
            <img src="${book.image_path}" width="200" height="300">
            <h2>${book.name}</h2>
            <p>${book.author}</p>
            <h3>${book.price}</h3>
        </div>
    `;
}

function mainTemplate(books) {
    return html`
        ${books.map(book => bookTemplate(book))}
    `;
}


fetch("books.json")
    .then(res => res.json())
    .then(data => {


        const books = data.books.map(book => ({
            name: book.name,
            author: "by " + book.author,
            image_path: "/home/ubuntu/book-app/bible images", // set your image
            price: book.price
        }));

        render(mainTemplate(books), container);
    })
    .catch(err => console.log(err));