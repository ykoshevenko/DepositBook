let CLASS6 = [
    {
        "query": "Повести Белкина",
        "athor": "А.С. Пушкин",
        "pages": "суммарно 33-40 листов А4",
        "age": "12+",
        "classn": "6 класс",
        "images": "js/images/20.jpg"
   },

   {
        "query": "Дубровский",
        "athor": "А.С. Пушкин",
        "pages": "100-130 листов А4",
        "age": "12+",
        "classn": "6 класс",
        "images": "js/images/21.jpg"
    },

    {
        "query": "Левша",
        "athor": "Н.С. Лесков",
        "pages": "13-15 листов А4",
        "age": "12+",
        "classn": "6 класс",
        "images": "js/images/22.jpg"
    },

    {
        "query": "Толстый и тонкий",
        "athor": "А.П. Чехов",
        "pages": "4-7 листов А4",
        "age": "12+",
        "classn": "6 класс",
        "images": "js/images/23.jpg"
    },

    {
        "query": "Неизвестный цветок",
        "athor": "А.П. Платонов",
        "pages": "3-5 листа А4",
        "age": "6+",
        "classn": "6 класс",
        "images": "js/images/24.jpg"
    },

    {
        "query": "Алые паруса",
        "athor": "А.С. Грин",
        "pages": "10-15 листов А4",
        "age": "12+",
        "classn": "6 класс",
        "images": "js/images/25.jpg"
    },

    {
        "query": "Конь с розовой гривой",
        "athor": "В.П. Астафьев",
        "pages": "2-3 листа А4",
        "age": "12+",
        "classn": "6 класс",
        "images": "js/images/26.jpg"
    },

    {
        "query": "Уроки французкого",
        "athor": "В.Г. Распутин",
        "pages": "20-24 листа А4",
        "age": "12+",
        "classn": "6 класс",
        "images": "js/images/27.jpg"
    },

    {
        "query": "Тринадцатый подвиг Геракла",
        "athor": "Ф. Искандер",
        "pages": "10-15 листов А4",
        "age": "6+",
        "classn": "6 класс",
        "images": "js/images/28.jpg"
    },

    {
        "query": "Критики",
        "athor": "В.М. Шукшин",
        "pages": "10-15 листов А4",
        "age": "12+",
        "classn": "6 класс",
        "images": "js/images/29.jpg"
    },

    {
        "query": "Маттео Фальконе",
        "athor": "Проспер Мериме",
        "pages": "10-20 листов А4",
        "age": "12+",
        "classn": "6 класс",
        "images": "js/images/30.jpg"
    },

    {
        "query": "Маленький принц",
        "athor": "Антуан де Сент-Экзюпери",
        "pages": "50-60 листов А4",
        "age": "6+",
        "classn": "6 класс",
        "images": "js/images/31.jpg"
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

        CLASS6.forEach(({ images, query, athor, classn, age, pages }) => {
            
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