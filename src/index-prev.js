import materializeIndex from "./materialize-index";
// Document Ready
$(document).ready(function () {
    fetchDealJSONIntoSelector(url, divNewDeals, 10);
    fetchDealJSONIntoSelector(url, divHotDeals, 10);

    wireUpHtmlElements();
    materializeIndex();
});

var divHotDeals = "#collectionHottest";
var divNewDeals = "#collectionNewest";
var url = "http://localhost:3000/deals"
// Utility Methods
function createDeal(deal, selector) {
    var html =
        '<div class="card sticky-action"><div class="card-image waves-effect waves-block waves-light">  <img class="activator responsive-img cardProductImg" src="' +
        deal.ImageURL +
        '"></div><div class="card-content">  <span class="card-title activator grey-text text-darken-4" >' + deal.ProductName +
        '<i class="material-icons right">more_vert</i></span>  <p><a href="#">Buy</a></p></div><div class="card-action"><a href="#">Price</a><a href="' +
        deal.Url + '+">&euro;' +
        deal.CurrentPrice +
        '</a>  </div><div class="card-reveal">  <span class="card-title grey-text text-darken-4">' + deal.ProductName +
        '<i class="material-icons right">close</i></span>  <p>Description</p>  <p id="">' + deal.CreatedDate +
        '</p>  <p><a id="Url" href="' + deal.Url + '">Buy</a></p></div>  </div></div>';
    $(selector).append(html);
}
var fetchDealJSONIntoSelector = function (url, selector, amount) {
    fetch(url)
        .then((resp) => resp.json())
        .then(function (data) {
            var productArray = data;

            productArray = shuffle(productArray);
            productArray = productArray.slice(0, amount);
            return productArray.map(function (deal) {
                createDeal(deal, selector);
            })
        })
        .catch(function (error) {
            console.log(error);
        });
}
var fetchDealJSONFromSearch = function (selector, searchTerm) {
    var url = "http://localhost:3000/deals?q=" + searchTerm;
    fetch(url)
        .then((resp) => resp.json())
        .then(function (data) {
            var productArray = data;

            productArray = shuffle(productArray);
            return productArray.map(function (deal) {
                createDeal(deal, selector);
            })
        })
        .catch(function (error) {
            console.log(error);
        });
}

function shuffle(array) {
    // https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
    var currentIndex = array.length,
        temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

var wireUpHtmlElements = function () {
    $(".btnDealsNewest").on("click", function () {
        fetchDealJSONIntoSelector(url, divNewDeals, 10);
    });


    $(".btnDealsHottest").on("click", function () {
        fetchDealJSONIntoSelector(url, divHotDeals, 10);
    });

    $(".btnDealsClose").on("click", function () {
        $('#searchDiv').hide();
        $('#searchDiv').addClass('hide');
    });


    $("#search").on('click focus blur', function () {
        if ($("#search").val() == null || $("#search").val() == '') {
            // Do nothing
        } else {
            var searchVal = $("#search").val();
            fetchDealJSONFromSearch('#collectionSearch', searchVal);
            $('#searchDiv').show();
            $('#searchDiv').removeClass('hide');
        }
    });
}