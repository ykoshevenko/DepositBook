class Products {

    render() {
        let htmlCatalog = '';

        CLASS5.forEach(({ images, query }) => {
            
            htmlCatalog += `
                <li>
                    <img src="${images}">
                    <span>${query}</span>
                </li>
            `;
        });

        const html = `
            <ul>
                ${htmlCatalog}
            </ul>
        `;

        ROOT_PRODUCTS.innerHTML = html;
    }
}

const ProductsPage = new Products();
ProductsPage.render();