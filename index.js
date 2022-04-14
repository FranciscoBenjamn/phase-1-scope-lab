// Write your solution in this file!
window.customerName = 'bob';
function upperCaseCustomerName() {
    window.customerName = window.customerName.toUpperCase()
}
function setBestCustomer(){
    window.bestCustomer = 'not bob'
}
function overwriteBestCustomer(name){
    window.bestCustomer = name
}
function changeLeastFavoriteCustomer(){
    const leastFavorite = 'egg'
    leastFavorite = 'bob'
}
