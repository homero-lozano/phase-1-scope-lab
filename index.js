var customerName = 'bob' 
function upperCaseCustomerName() {
    if (typeof customerName === 'string') {
        customerName = customerName.toUpperCase(); 
     } else { 
            throw new Error;
        }
    }
function setBestCustomer() {
    bestCustomer = 'not bob'
} 
function overwriteBestCustomer() {
    bestCustomer = 'maybe bob'
}
const leastFavoriteCustomer = 'anyone'
function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'larry' 
} 
changeLeastFavoriteCustomer();




