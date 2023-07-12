let CLASS10 = [
    {
        "query": "Невский проспект",
        "athor": "Н.В. Гоголь",
        "pages": "3-4 листа А4",
        "age": "12+",
        "classn": "10 класс",
        "images": "js/images/76.jpg"
    },

    {
        "query": "Нос",
        "athor": "Н.В. Гоголь",
        "pages": "10-12 листов А4",
        "age": "16+",
        "classn": "10 класс",
        "images": "js/images/77.jpg"
    },

    {
        "query": "Обломов",
        "athor": "И.А. Гончаров",
        "pages": "250-300 листов А4",
        "age": "16+",
        "classn": "10 класс",
        "images": "js/images/78.jpg"
    },

    {
        "query": "Записки охотника",
        "athor": "И.С. Тургенев",
        "pages": "20-30 листов А4",
        "age": "16+",
        "classn": "10 класс",
        "images": "js/images/79.jpg"
    },

    {
        "query": "Отцы и дети",
        "athor": "И.С. Тургенев",
        "pages": "120-150 листов А4",
        "age": "16+",
        "classn": "10 класс",
        "images": "js/images/80.jpg"
    },

    {
        "query": "Что делать?",
        "athor": "Н.Г. Чернышевский",
        "pages": "120-150 листов А4",
        "age": "16+",
        "classn": "10 класс",
        "images": "js/images/81.jpg"
    },

    {
        "query": "Очарованный странник",
        "athor": "Н.С. Лесков",
        "pages": "15-20 листов А4",
        "age": "16+",
        "classn": "10 класс",
        "images": "js/images/82.jpg"
    },

    {
        "query": "Медведь на воеводстве",
        "athor": "М.Е. Салтыков-Щедрин",
        "pages": "10-15 листов А4",
        "age": "14+",
        "classn": "10 класс",
        "images": "js/images/83.jpg"
    },

    {
        "query": "Богатырь",
        "athor": "М.Е. Салтыков-Щедрин",
        "pages": "20-30 листов А4",
        "age": "16+",
        "classn": "10 класс",
        "images": "js/images/84.jpg"
    },

    {
        "query": "Война и мир",
        "athor": "Л.Н. Толстой",
        "pages": "1500-2000 листов А4",
        "age": "16+",
        "classn": "10 класс",
        "images": "js/images/85.jpg"
    },

    {
        "query": "Преступление и наказание",
        "athor": "Ф.М. Достоевский",
        "pages": "500-600 листов А4",
        "age": "16+",
        "classn": "10 класс",
        "images": "js/images/86.jpg"
    },

    {
        "query": "Дама с собачькой",
        "athor": "А.П. Чехов",
        "pages": "10-12 листов А4",
        "age": "16+",
        "classn": "10 класс",
        "images": "js/images/87.jpg"
    },

    {
        "query": "Большие надежды",
        "athor": "Ч. Диккенс",
        "pages": "300-400 листов А4",
        "age": "16+",
        "classn": "10 класс",
        "images": "js/images/88.jpg"
    },

    {
        "query": "Собор Парижской богоматери",
        "athor": "В. Гюго",
        "pages": "400-500 листов А4",
        "age": "16+",
        "classn": "10 класс",
        "images": "js/images/89.jpg"
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

        CLASS10.forEach(({ images, query, athor, classn, age, pages }) => {
            
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