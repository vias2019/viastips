// const product = { ‘date’ : ‘10/02/2018’ , ‘currencyRate’:’300’ , ’description’: ‘White T-shirt’ }
// I have to define the product I want to store
1. const productToBeSaved = { 'item' : this.state.productDescription , 'currencyRate' : this.state.currencyRate , 'date' : this.state.date }
// 2. Then check for the existing products
const existingProducts = await AsyncStorage.getItem('products');

// 3. Then I have to check if there are products in local storage if there are no products I have initialize the new product as an empty array.
// Notice that I am using JSON.parse method to parse this string into an object, I am doing this because I have to perform a push operation over this array.
let newProduct = JSON.parse(existingProducts);
if( !newProduct ){
 newProduct = [];
 } 
 // 4. Then push productToBeSaved to the new product array
newProduct.push( productToBeSaved );
// 5. Finally, I have to save my product again, but notice that I have to convert this to a string before I save it using AsyncStorage.setItem, to do that I am going to use JSON.stringify method like this:
await AsyncStorage.setItem('products', JSON.stringify(newProduct) )
 .then( ()=>{
 console.log('It was saved successfully');
 } )
 .catch( ()=>{
 console.log('There was an error saving the product');
 } );