const product = {
    id: 1,
    name: 'laptop',
    laptopModel: {
        brand: 'DCL',
        model: 'X4',
    },
    brandNew: true,
    Price: 32000,
    display: {
        displaySize: '14.6',
        IPS: true,
    }
}
// const products = { ...product }
// product.email = 'khalid@gmail.com';
// console.log(products);


// spread and  distructuring 
const { laptopModel, ...others } = product;
console.log(laptopModel, others);
const { brand } = laptopModel;
console.log(brand);

const { display: { displaySize } } = product
console.log(displaySize);