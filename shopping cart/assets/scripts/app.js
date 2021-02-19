class Product
 {
    // title = 'DEFAULT'; 
    // imageUrl;
    // description;
    // price;
    constructor(title,image,des,price){
    this.title = title;
        this.imageUrl = image;
        this.description = des;
        this.price = price;  
    } 
}
class ShoppingCart {
    items = [];
    addProduct(Product){
        this.items.push(Product);
        this.totalOutput = `<h2>total:\$${1}</h2> `;

    }
    render(){
        const cartEl = document.createElement('section');
        cartEl.innerHTML = `
        <h2>total:\$${0}</h2>
        <button>order now!</button>
        `;
        cartEl.className = 'cart';
        this.totalOutput = cartEl;
        return cartEl;
    }

}
class ProductItem{
constructor(Product){
    this.Product = Product;
}
addToCart(){
    console.log('add to cart.......');
    console.log(this.Product);
    ShoppingCart.addProduct();

}

render(){
    const prodEl = document.createElement('li');
    prodEl.className = 'product-item';
    prodEl.innerHTML = ` 
    <div>
    <img src= "${this.Product.imageUrl}" alt="${this.Product.title}">
    <div class="product-item__content">
    <h2>${this.Product.title}</h2>
    <h3>\$${this.Product.price}</h3>
    <p>${this.Product.description}</p>
    <button> add to cart</button>
    </div>
    </div>
    `;
    const addCartButton = prodEl.querySelector('button');
    addCartButton.addEventListener('click',this.addToCart.bind(this));


return prodEl;
}
}
class ProductList  {
 products = [
     new Product(
        'A Pillow',
        'https://images-na.ssl-images-amazon.com/images/I/51JptKupcHL._SL1500_.jpg ',
         19.99,
        'A soft pillow!'),
     new Product('A Carpet',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvipYHU6iI0BfbaArkoeptc44R0Rs0HSqUqQ&usqp=CAU ',
         89.99,
        'A soft carpet!'
)
    
];
render() {
const prodList = document.createElement('ul');
prodList.className = 'product-list';
for (const prod of this.products)
{ 
    const productItem = new ProductItem(prod);
    const prodEl= productItem.render();
    prodList.append(prodEl);
}
    return prodList;
}
}
class Shop{
    render(){
        const renderHook = document.getElementById('app');
        const cart =new ShoppingCart();
        const cartEl =cart.render();  
        const productList = new ProductList();
        const prodListEl= productList.render();
        renderHook.append(cartEl);
        renderHook.append(prodListEl);
}
}
const shop = new Shop();
shop.render();
