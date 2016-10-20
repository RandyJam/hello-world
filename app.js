

(function() {
    
var app = angular.module('gemStore', []);
    
    

// START New Flipping Code    
app.controller("flipperDemo", function($scope) {
$scope.flipped = false;
$scope.flip = function() {
$scope.flipped = !$scope.flipped;
};
});

app.directive("flipper", function() {
return {
restrict: "E",
template: "<div class='flipper' ng-transclude ng-class='{ flipped: flipped }'></div>",
transclude: true,
scope: {flipped: "="}
};
});

app.directive("front", function() {
return {
restrict: "E",
template: "<div class='front tile' ng-transclude></div>",
transclude: true
};
});

app.directive("back", function() {
return {
restrict: "E",
template: "<div class='back tile' ng-transclude></div>",
transclude: true
}
});   
// END New Flipping Code 
    
    
    
    
    
    
    
    
    
app.controller('StoreController', function() {
this.products = gems;
});
    
app.controller("PanelController", function() {
this.tab = 1;
    
this.selectTab = function(setTab){
this.tab = setTab;
};
this.isSelected = function(checkTab){
return this.tab === checkTab;
};

});
    
var gems = [

{
name: 'Azurite Gem', 
price: 2.95, 
description: '1-Here is the product you want. The only one you will ever need. Just buy it.',
images: [
    {full:'image-a-01.jpg', thumb:'image-a-01-t.jpg'},
    {full:'image-a-02.jpg', thumb:'image-a-02-t.jpg'},
    ],
canPurchase:true,
soldOut: false,
},

{
name: 'Pentagonal Gem', 
price: 5.95, 
description: '2-Here is the product you want. The only one you will ever need. Just buy it.',
images: [
    {full:'image-b-01.jpg', thumb:'image-b-01-t.jpg'},
    {full:'image-b-02.jpg', thumb:'image-b-02-t.jpg'},
    ],
canPurchase:true,
soldOut: false,
},

{
name: 'Pentagonal Gem', 
price: 5.95, 
description: '3-Here is the product you want. The only one you will ever need. Just buy it.',
images: [
    {full:'image-b-01.jpg', thumb:'image-b-01-t.jpg'},
    {full:'image-b-02.jpg', thumb:'image-b-02-t.jpg'},
    ],
canPurchase:true,
soldOut: false,
}

];    
    
}) ();


