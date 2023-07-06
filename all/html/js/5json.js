//json API
var CLASS5 = [
     {
        "query": "Царевна-Лягушка",
        "athor": "-",
        "pages": "3-4 листа А4",
        "age": "3+",
        "classn": "5 класс",
        "images": "js/images/1.jpg",
    },

    {
        "query": "Журавль и цапля",
        "athor": "-",
        "pages": "2-3 листа А4",
        "age": "3+",
        "classn": "5 класс",
        "images": "js/images/2.jpg"
    },

    {
        "query": "Солдатская шинель",
        "athor": "-",
        "pages": "4-6 листа А4",
        "age": "3+",
        "classn": "5 класс",
        "images": "js/images/3.jpg"
    },

    {
        "query": "Иван - крестьянский сын и чудо - юдо",
        "athor": "-",
        "pages": "3-5 листа А4",
        "age": "3+",
        "classn": "5 класс",
        "images": "js/images/4.jpg"
    },

    {
        "query": "Няне",
        "athor": "А.С. Пушкин",
        "pages": ">1 листа А4",
        "age": "3+",
        "classn": "5 класс",
        "images": "js/images/5.jpg"
    },

    {
        "query": "Cказка о мертвой царевне и о семи богатырях",
        "athor": "А.С. Пушкин",
        "pages": "8-10 листов А4",
        "age": "3+",
        "classn": "5 класс",
        "images": "js/images/6.jpg"
    },

    {
        "query": "Спящая царевна",
        "athor": "В.А. Жуковский",
        "pages": "10-12 листов А4",
        "age": "3+",
        "classn": "5 класс",
        "images": "js/images/7.jpg"
    },

    {
        "query": "Кубок",
        "athor": "В.А. Жуковский",
        "pages": "3-4 листа А4",
        "age": "3+",
        "classn": "5 класс",
        "images": "js/images/8.jpg"
    },

    {
        "query": "Чёрная курица, или Подземные жители",
        "athor": "Антоний Погорельский",
        "pages": "3-4 листа А4",
        "age": "3+",
        "classn": "5 класс",
        "images": "js/images/9.jpg"
    },

    {
        "query": "Заколдованное место",
        "athor": "Н.В. Гоголь",
        "pages": "67-88 листа А4",
        "age": "6+",
        "classn": "5 класс",
        "images": "js/images/10.jpg"
    },

    {
        "query": "Муму",
        "athor": "И.С. Тургенев",
        "pages": "12-14 листов А4",
        "age": "6+",
        "classn": "5 класс",
        "images": "js/images/11.jpg"
    },

    {
        "query": "Бородино",
        "athor": "М.Ю. Лермонтов",
        "pages": "5-16 листов А4",
        "age": "6+",
        "classn": "5 класс",
        "images": "js/images/12.jpg"
    },

    {
        "query": "Кавказкий пленник",
        "athor": "Л.Н. Толстой",
        "pages": "15-25 листов А4",
        "age": "12+",
        "classn": "5 класс",
        "images": "js/images/13.jpg"
    },

    {
        "query": "Хирургия",
        "athor": "А.П. Чехов",
        "pages": "3-4 листов А4",
        "age": "6+",
        "classn": "5 класс",
        "images": "js/images/14.jpg"
    },

    {
        "query": "Двенадцать месяцев",
        "athor": "С.Я. Маршак",
        "pages": "2-3 листов А4",
        "age": "3+",
        "classn": "5 класс",
        "images": "js/images/15.jpg"
    },

    {
        "query": "Робинзон Крузо",
        "athor": "Д. Дефо",
        "pages": "10-12 листов А4",
        "age": "6+",
        "classn": "5 класс",
        "images": "js/images/16.jpg"
    },

    {
        "query": "Снежная королева",
        "athor": "Х.К. Андерсен",
        "pages": "13-15 листов А4",
        "age": "3+",
        "classn": "5 класс",
        "images": "js/images/17.jpg"
    },

    {
        "query": "О чем говорят цветы",
        "athor": "Ж. Санд",
        "pages": "1-2 листа А4",
        "age": "3+",
        "classn": "5 класс",
        "images": "js/images/18.jpg"
    },

    {
        "query": "Приключения Тома Сойера",
        "athor": "М. Твен",
        "pages": "6-8 листов А4",
        "age": "3+",
        "classn": "5 класс",
        "images": "js/images/19.jpg"
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

        CLASS5.forEach(({ images, query, athor, classn, age, pages }) => {
            
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