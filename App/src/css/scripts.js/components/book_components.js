import { LitElement, css, html } from 'https://cdn.jsdelivr.net/npm/lit@3.3.2/+esm';

export class Book extends LitElement {
    static properties = {
        image: {},
        name: {},
        author: {},
        rating: { type: Number },
    };

    static styles = css`
        :host {
            display: inline-block;
        }

        .book {
            width: 100%;
            border: 1px solid #e0e0e0;
            border-radius: 12px;
            overflow: hidden;
            font-family: sans-serif;
            background: #fff;
        }

        .cover {
            width: 100%;
            height: 200px;
            object-fit: cover;
            display: block;
            background: #f5f5f5;
        }

        .info {
            padding: 12px;
        }

        .name {
            margin: 0 0 4px;
            font-size: 14px;
            font-weight: 600;
            color: #1a1a1a;
            line-height: 1.3;
        }

        .author {
            margin: 0 0 8px;
            font-size: 12px;
            color: #888;
            font-weight: 400;
        }

        .stars {
            display: flex;
            align-items: center;
            gap: 2px;
            font-size: 14px;
        }

        .star-filled { color: #f5a623; }
        .star-empty  { color: #ddd; }

        .rating-label {
            font-size: 11px;
            color: #aaa;
            margin-left: 4px;
        }
    `;

    constructor() {
        super();
        this.name = "sample_book_name";
        this.author = "sample_author_name";
        this.rating = 4;
        this.image = "App/bible-images/book1.jpg";
    }

    get stars() {
        return Array.from({ length: 5 }, (_, i) =>
            html`<span class="${i < this.rating ? 'star-filled' : 'star-empty'}">★</span>`
        );
    }

    render() {
        return html`
        <div class="book">
            <img class="cover" src="${this.image}" alt="${this.name}">
            <div class="info">
                <p class="name">${this.name}</p>
                <p class="author">${this.author}</p>
                <div class="stars">
                    ${this.stars}
                    <span class="rating-label">${this.rating}/5</span>
                </div>
            </div>
        </div>
        `;
    }
}

customElements.define('book-card', Book);