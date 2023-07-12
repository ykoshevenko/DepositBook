let CLASS11 = [
    {
        "query": "На дне",
        "athor": "М. Горький",
        "pages": "7-9 листов А4",
        "age": "18+",
        "classn": "11 класс",
        "images": "js/images/90.jpg"
    },

    {
        "query": "Несвоевременные мысли",
        "athor": "М. Горький",
        "pages": "20-27 листов А4",
        "age": "18+",
        "classn": "11 класс",
        "images": "js/images/91.jpg"
    },

    {
        "query": "Старуха Изельгиль",
        "athor": "М. Горький",
        "pages": "20-25 листов А4",
        "age": "18+",
        "classn": "11 класс",
        "images": "js/images/92.jpg"
    },

    {
        "query": "Господин из Сан-Франциско",
        "athor": "И. Бунин",
        "pages": "26-32 листов А4",
        "age": "18+",
        "classn": "11 класс",
        "images": "js/images/93.jpg"
    },

    {
        "query": "Чистый понедельник",
        "athor": "И. Бунин",
        "pages": "26-32 листов А4",
        "age": "18+",
        "classn": "11 класс",
        "images": "js/images/94.jpg"
    },

    {
        "query": "Гранатовый браслет",
        "athor": "А.И. Куприн",
        "pages": "26-32 листов А4",
        "age": "16+",
        "classn": "11 класс",
        "images": "js/images/95.jpg"
    },

    {
        "query": "Олеся",
        "athor": "А.И. Куприн",
        "pages": "13-19 листов А4",
        "age": "16+",
        "classn": "11 класс",
        "images": "js/images/96.jpg"
    },

    {
        "query": "Иута Искариот",
        "athor": "Л. Андреев",
        "pages": "13-28 листов А4",
        "age": "16+",
        "classn": "11 класс",
        "images": "js/images/97.jpg"
    },

    {
        "query": "Мастер и Маргарита",
        "athor": "М.А. Булгаков",
        "pages": "300-343 листов А4",
        "age": "16+",
        "classn": "11 класс",
        "images": "js/images/98.jpg"
    },

    {
        "query": "Белая гвардия",
        "athor": "М.А. Булгаков",
        "pages": "20-30 листов А4",
        "age": "16+",
        "classn": "11 класс",
        "images": "js/images/99.jpg"
    },

    {
        "query": "Котлован",
        "athor": "А.П. Платонов",
        "pages": "10-15 листов А4",
        "age": "16+",
        "classn": "11 класс",
        "images": "js/images/100.jpg"
    },

    {
        "query": "Пётр Первый",
        "athor": "А.Н. Толстой",
        "pages": "15-20 листов А4",
        "age": "16+",
        "classn": "11 класс",
        "images": "js/images/101.jpg"
    },

    {
        "query": "Тихий Дон",
        "athor": "М.А. Шолохов",
        "pages": "400-500 листов А4",
        "age": "16+",
        "classn": "11 класс",
        "images": "js/images/102.jpg"
    },

    {
        "query": "Доктор Живаго",
        "athor": "Б.Л. Пастернак",
        "pages": "300-400 листов А4",
        "age": "16+",
        "classn": "11 класс",
        "images": "js/images/103.jpg"
    },

    {
        "query": "Один день Ивана Денисовича",
        "athor": "А.И. Солжиницын",
        "pages": "150-200 листов А4",
        "age": "16+",
        "classn": "11 класс",
        "images": "js/images/104.jpg"
    },

    {
        "query": "Архипилаг ГУЛАГ",
        "athor": "А.И. Солжиницын",
        "pages": "600-1000 листов А4",
        "age": "18+",
        "classn": "11 класс",
        "images": "js/images/105.jpg"
    },

    {
        "query": "На представку",
        "athor": "В.Т. Шарламов",
        "pages": "7-8 листов А4",
        "age": "16+",
        "classn": "11 класс",
        "images": "js/images/106.jpg"
    },

    {
        "query": "Старший сын",
        "athor": "А. Вампилов",
        "pages": "3-4 листов А4",
        "age": "16+",
        "classn": "11 класс",
        "images": "js/images/107.jpg"
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

        CLASS11.forEach(({ images, query, athor, classn, age, pages }) => {
            
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