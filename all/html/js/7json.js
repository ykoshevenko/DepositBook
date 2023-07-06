let CLASS7 = [
    {
        "query": "Борис Годунов",
        "athor": "А.С. Пушкин",
        "pages": "30-40 листов А4",
        "age": "12+",
        "classn": "7 класс",
        "images": "js/images/32.jpg"
    },

    {
        "query": "Тарас Бульба",
        "athor": "Н.В. Гоголь",
        "pages": "20-30 листов А4",
        "age": "16+",
        "classn": "7 класс",
        "images": "js/images/33.jpg"
    },

    {
        "query": "Русские женщины",
        "athor": "Н.А. Некрасов",
        "pages": "20-30 листов А4",
        "age": "12+",
        "classn": "7 класс",
        "images": "js/images/34.jpg"
    },

    {
        "query": "Детство",
        "athor": "Л.Н. Толстой",
        "pages": "суммарно 210-270 листов А4",
        "age": "12+",
        "classn": "7 класс",
        "images": "js/images/35.jpg"
    },

    {
        "query": "Хамелеон",
        "athor": "А.П. Чехов",
        "pages": "5-7 листов А4",
        "age": "12+",
        "classn": "7 класс",
        "images": "js/images/36.jpg"
    },

    {
        "query": "Цифры",
        "athor": "И.А. Бунин",
        "pages": "3-4 листов А4",
        "age": "6+",
        "classn": "7 класс",
        "images": "js/images/37.jpg"
    },

    {
        "query": "Кусака",
        "athor": "Л. Андреев",
        "pages": "10-15 листов А4",
        "age": "6+",
        "classn": "7 класс",
        "images": "js/images/38.jpg"
    },

    {
        "query": "Юшка",
        "athor": "А. Платонов",
        "pages": "2-3 листа А4",
        "age": "12+",
        "classn": "7 класс",
        "images": "js/images/39.jpg"
    },

    {
        "query": "О чем плачут лошади",
        "athor": "Ф. Абрамов",
        "pages": "5-7 листов А4",
        "age": "12+",
        "classn": "7 класс",
        "images": "js/images/40.jpg"
    },

    {
        "query": "Тихое утро",
        "athor": "Ю. Казаков",
        "pages": "1-2 листов А4",
        "age": "12+",
        "classn": "7 класс",
        "images": "js/images/41.jpg"
    },

    {
        "query": "Каникулы",
        "athor": "Брэдбери",
        "pages": "4-6 листов А4",
        "age": "12+",
        "classn": "7 класс",
        "images": "js/images/42.jpg"
    },

    {
        "query": "Дары волхвов",
        "athor": "О. Генри",
        "pages": "1-2 листов А4",
        "age": "12+",
        "classn": "7 класс",
        "images": "js/images/43.jpg"
    },
]

//ROOT
const ROOT_HEADER = document.getElementById("header")
const ROOT_PRODUCTS = document.getElementById("products")
const ROOT_MENU = document.getElementById("js-menu")

//Script for watch books
class Products {

    render() {
        let htmlCatalog = '';

        CLASS7.forEach(({ images, query, athor, classn, age, pages }) => {
            
            htmlCatalog += `
                <li class="book-element">    
                    <img class="book-element__image" src="${images}">
                    <span class="book-element__name">${query}</span>

                    <details class="book-element__all"><summary>Подробнее</summary>
                        <option>${athor}</option>
                        <option>${pages}</option>
                        <option>${age}</option>
                        <option>${classn}</option>
                    </details>
                </li>
            `;
        });

        const html = `
            <ul class="booksConteiner">
                ${htmlCatalog}
            </ul>
        `;

        ROOT_PRODUCTS.innerHTML = html;
    }
}

const ProductsPage = new Products();
ProductsPage.render();