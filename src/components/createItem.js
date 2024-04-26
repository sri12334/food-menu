const createItem = (item) => {
    const article = document.createElement('article');
    article.classList.add('menu-item', item.category);

    const img = document.createElement('img');
    img.classList.add('photo');
    img.src = item.src;
    img.alt = item.title;

    const itemInfo = document.createElement('div');
    itemInfo.classList.add('item-info');

    article.append(img, itemInfo);

    const header = document.createElement('header');

    const title = document.createElement('h4');
    title.innerText = item.title.charAt(0).toUpperCase() + item.title.slice(1);

    const price = document.createElement('h4');
    price.innerText = `$${item.price}`;
    price.classList.add('price');

    header.append(title, price);

    const description = document.createElement('p');
    description.innerText = item.desc;
    description.classList.add('item-text');

    itemInfo.append(header, description);

    return article;
}

export default createItem;