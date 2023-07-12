let CLASS9 = [
    {
        "query": "Бедная лиза",
        "athor": "Н.М. Карамзин",
        "pages": "2-4 листов А4",
        "age": "12+",
        "classn": "9 класс",
        "images": "js/images/59.jpg"
    },

    {
        "query": "Светлана",
        "athor": "В.А. Жуковский",
        "pages": "2-4 листов А4",
        "age": "12+",
        "classn": "9 класс",
        "images": "js/images/60.jpg"
    },

    {
        "query": "Горе от ума",
        "athor": "А.С. Грибоедов",
        "pages": "15-20 листов А4",
        "age": "12+",
        "classn": "9 класс",
        "images": "js/images/61.jpg"
    },

    {
        "query": "Мильон терзаний",
        "athor": "И.А. Гончаров",
        "pages": "8-10 листов А4",
        "age": "16+",
        "classn": "9 класс",
        "images": "js/images/62.jpg"
    },

    {
        "query": "Евгений Онегин",
        "athor": "А.С. Пушкин",
        "pages": "150-180 листов А4",
        "age": "12+",
        "classn": "9 класс",
        "images": "js/images/63.jpg"
    },

    {
        "query": "Цыганы",
        "athor": "А.С. Пушкин",
        "pages": "10-15 листов А4",
        "age": "15+",
        "classn": "9 класс",
        "images": "js/images/64.jpg"
    },

    {
        "query": "Моцарт и Сальери",
        "athor": "А.С. Пушкин",
        "pages": "7-8 листов А4",
        "age": "14+",
        "classn": "9 класс",
        "images": "js/images/65.jpg"
    },

    {
        "query": "Герой нашего времени",
        "athor": "М.Ю. Лермонтов",
        "pages": "30-40 листов А4",
        "age": "14+",
        "classn": "9 класс",
        "images": "js/images/66.jpg"
    },

    {
        "query": "Мёртвые души",
        "athor": "Н.В. Гоголь",
        "pages": "30-40 листов А4",
        "age": "18+",
        "classn": "9 класс",
        "images": "js/images/67.jpg"
    },

    {
        "query": "Бедность не порок",
        "athor": "А.Н. Островский",
        "pages": "10-15 листов А4",
        "age": "14+",
        "classn": "9 класс",
        "images": "js/images/68.jpg"
    },

    {
        "query": "Белые ночи",
        "athor": "Ф.М. Достоевский",
        "pages": "20-25 листов А4",
        "age": "16+",
        "classn": "9 класс",
        "images": "js/images/69.jpg"
    },

    {
        "query": "Смерть чиновника",
        "athor": "А.П. Чехов",
        "pages": "7-10 листов А4",
        "age": "16+",
        "classn": "9 класс",
        "images": "js/images/70.jpg"
    },

    {
        "query": "Собачье сердце",
        "athor": "М.И. Булгаков",
        "pages": "20-30 листов А4",
        "age": "16+",
        "classn": "9 класс",
        "images": "js/images/71.jpg"
    },

    {
        "query": "Судьба человека",
        "athor": "М.И. Шолохов",
        "pages": "15-20 листов А4",
        "age": "16+",
        "classn": "9 класс",
        "images": "js/images/72.jpg"
    },

    {
        "query": "Матрёнин двор",
        "athor": "А.И. Солжиницын",
        "pages": "10-15 листов А4",
        "age": "16+",
        "classn": "9 класс",
        "images": "js/images/73.jpg"
    },

    {
        "query": "Пелагея",
        "athor": "Ф. Абрамов",
        "pages": "15-20 листов А4",
        "age": "18+",
        "classn": "9 класс",
        "images": "js/images/74.jpg"
    },

    {
        "query": "Гамлет",
        "athor": "У. Шекспир",
        "pages": "100-150 листов А4",
        "age": "16+",
        "classn": "9 класс",
        "images": "js/images/75.jpg"
    }
]

//ROOT
const ROOT_HEADER = document.getElementById("header")
const ROOT_PRODUCTS = document.getElementById("products")
const ROOT_MENU = document.getElementById("js-menu")

//Script for watch books
class Products {

    render() {
        let htmlCatalog = '';

        CLASS9.forEach(({ images, query, athor, classn, age, pages }) => {
            
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