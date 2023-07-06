let CLASS8 = [
    {
        "query": "Недоросль",
        "athor": "Д.И. Фонвизин",
        "pages": "16-18 листов А4",
        "age": "12+",
        "classn": "8 класс",
        "images": "js/images/44.jpg"
    },

    {
        "query": "Капитанская дочка",
        "athor": "А.С. Пушкин",
        "pages": "80-90 листов А4",
        "age": "12+",
        "classn": "8 класс",
        "images": "js/images/45.jpg"
    },

    {
        "query": "Мцыри",
        "athor": "М.Ю Лермонтов",
        "pages": "8-9 листов А4",
        "age": "12+",
        "classn": "8 класс",
        "images": "js/images/46.jpg"
    },

    {
        "query": "Ревезор",
        "athor": "Н.В. Гоголь",
        "pages": "45-50 листов А4",
        "age": "16+",
        "classn": "8 класс",
        "images": "js/images/47.jpg"
    },

    {
        "query": "Ася",
        "athor": "И.С. Тургенев",
        "pages": "40-45 листов А4",
        "age": "12+",
        "classn": "8 класс",
        "images": "js/images/48.jpg"
    },

    {
        "query": "Старый гений",
        "athor": "Н.С. Лесков",
        "pages": "16-18 листов А4",
        "age": "16+",
        "classn": "8 класс",
        "images": "js/images/49.jpg"
    },

    {
        "query": "После бала",
        "athor": "Л.Н. Толстой",
        "pages": "10-20 листов А4",
        "age": "12+",
        "classn": "8 класс",
        "images": "js/images/50.jpg"
    },

    {
        "query": "О любви",
        "athor": "А.П. Чехов",
        "pages": "10-12 листов А4",
        "age": "12+",
        "classn": "8 класс",
        "images": "js/images/51.jpg"
    },

    {
        "query": "Куст сирени",
        "athor": "А.И. Куприн",
        "pages": "14-16 листов А4",
        "age": "12+",
        "classn": "8 класс",
        "images": "js/images/52.jpg"
    },

    {
        "query": "Как я стал писателеми",
        "athor": "И.С. Шмелев",
        "pages": "11-13 листов А4",
        "age": "16+",
        "classn": "8 класс",
        "images": "js/images/53.jpg"
    },

    {
        "query": "История болезни",
        "athor": "М. Зощенко",
        "pages": "9-10 листов А4",
        "age": "18+",
        "classn": "8 класс",
        "images": "js/images/54.jpg"
    },

    {
        "query": "Возвращение",
        "athor": "А.П. Платонов",
        "pages": "4-5 листов А4",
        "age": "12+",
        "classn": "8 класс",
        "images": "js/images/55.jpg"
    },

    {
        "query": "Фотография, на которой меня нет",
        "athor": "В.П. Астафьев",
        "pages": "10-20 листов А4",
        "age": "12+",
        "classn": "8 класс",
        "images": "js/images/56.jpg"
    },

    {
        "query": "Ромео и Джульетта",
        "athor": "У. Шекспир",
        "pages": "67-75 листов А4",
        "age": "18+",
        "classn": "8 класс",
        "images": "js/images/57.jpg"
    },

    {
        "query": "Путешествия Гулливера",
        "athor": "Д.Свифт",
        "pages": "333-375 листов А4",
        "age": "16+",
        "classn": "8 класс",
        "images": "js/images/58.jpg"
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

        CLASS8.forEach(({ images, query, athor, classn, age, pages }) => {
            
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