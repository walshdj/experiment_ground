var DealList = require('./deals/DealList')

$(document).ready(function () {

    
    console.log('document.ready');
    
    // 1. fetch data from backend api
    
    var dealsList = new DealList({
        selector: '#app',
        url: 'http://localhost:3000/deals'
    });
    dealsList.mount();
    
    
//    fetchDealJSONIntoSelector(url, divNewDeals, 10);
//    fetchDealJSONIntoSelector(url, divHotDeals, 10);
//
//    wireUpHtmlElements();
//    materializeIndex();
});

var fetchDealJSONIntoSelector = function(url, selector, amount) {
    
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    
    fetch(url)
        .then((resp) => resp.json())
        .then(function (data) {
            var productArray = data;
            console.log(productArray);
        

//            productArray = shuffle(productArray);
//            productArray = productArray.slice(0, amount);
//            return productArray.map(function (deal) {
//                createDeal(deal, selector);
//            })
        })
        .catch(function (error) {
            console.log(error);
        });
}