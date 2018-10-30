var $ = window.jQuery;

require('./DealList')

/* DealList Component */
module.exports = DealList;

function DealList(options) {
    this.options=options;
    this.options.listClass='dealslist';
    this.options.listSelector='.' + this.options.listClass;
    
    var instance = this;
    console.log('DealList contructor');
    console.log(instance);
}

/* use to mount the component onto the DOM*/
DealList.prototype.mount = function() {
    var instance=this;
    console.log('mount');
    
    // Two ways build up Html/DOM view
    // 1. programatically adding dom elements to screen
    // or 2. using a template engine like 'handlebars'
    
    // 1. Using jQuery to create DOM Fragments
    var sectionFrag = $('<section/>', {'class': 'section container'});
    
    var rowFrag = $('<div/>', {'class': 'row'});
    rowFrag.appendTo(sectionFrag);
    
    var col1Frag = $('<div/>', {'class': 'col s12 l3'});
    col1Frag.appendTo(rowFrag);
    
    var col2Frag = $('<div/>', {'class': 'col s12 l9'});
    col2Frag.appendTo(rowFrag);
    
    var dealslist = $('<div/>', {'class': instance.options.listClass});
    dealslist.appendTo(col2Frag);
    
    $(instance.options.selector).empty().append(sectionFrag);
    
    // after adding structure to dom
    instance.fetch();
}

DealList.prototype.fetch = function() {
    var instance=this;
    console.log('fetch data: ' + instance.options.url);
    
    fetch(instance.options.url).then((resp) => resp.json()).then(function (productArray) {
        
//            console.log(productArray);
        
            return productArray.map(function (deal) {
                appendDealItemTo(deal, instance.options.listSelector);
            })
    })
    .catch(function (error) {
        console.log(error);
    });
}

/*
private function cant be called from index.js only from within here and has no access to 'instance' data
*/
function appendDealItemTo(deal, selector) {
    
    var dealItemHtml =
        '<div class="card sticky-action"><div class="card-image waves-effect waves-block waves-light">  <img class="activator responsive-img cardProductImg" src="' +
        deal.ImageURL +
        '"></div><div class="card-content">  <span class="card-title activator grey-text text-darken-4" >' + deal.ProductName +
        '<i class="material-icons right">more_vert</i></span>  <p><a href="#">Buy</a></p></div><div class="card-action"><a href="#">Price</a><a href="' +
        deal.Url + '+">&euro;' +
        deal.CurrentPrice +
        '</a>  </div><div class="card-reveal">  <span class="card-title grey-text text-darken-4">' + deal.ProductName +
        '<i class="material-icons right">close</i></span>  <p>Description</p>  <p id="">' + deal.CreatedDate +
        '</p>  <p><a id="Url" href="' + deal.Url + '">Buy</a></p></div>  </div></div>';
    
    $(selector).append(dealItemHtml);
}