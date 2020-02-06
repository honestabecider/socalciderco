var site = {};
var contentfulClient = contentful.createClient({
 accessToken: 'c67e29bb4ff2ec132288525927e627c732475d76feeb370d7639a02a86fcdf08',
 space: 'knga7azvfj27'
})

var PRODUCT_CONTENT_TYPE_ID = 'menu'

var ciderContainer = document.getElementById('cider-container');
var meadContainer = document.getElementById('mead-container');
var wineContainer = document.getElementById('wine-container');
var cocktailContainer = document.getElementById('cocktail-container');
var drinks = [];



site = {
  init: function(){
   contentfulClient.getEntries({
    content_type: PRODUCT_CONTENT_TYPE_ID
      })
     .then(function(entries) {
       site.sortEntries(entries);
      }).catch(function(error) {
        console.log(error);
      });
  },
  sortEntries: function(data){

      var cidersArray = [];
      var meadsArray = [];
      var winesArray = [];
      var cocktailArray = []

      for (var i = 0; i <= data.items[0].fields.drink.length-1; i++) {
        var thisDrink = data.items[0].fields.drink[i];
        switch  (thisDrink.fields.type) {
          case 'Mead':
            //put me into mead array
            meadsArray.push(thisDrink);
            break;
          case 'Cider':
            //put me into cider array
            cidersArray.push(thisDrink);
            break;
          case 'Wine':
            //put me into wine array
            winesArray.push(thisDrink);
            break;
          case 'Cocktail':
            //put me into cocktail array
            cocktailArray.push(thisDrink);
            break;
          default:
            console.warn(thisDrink.fields.name + ' did not have a "type" field. this is no good, fix it in contentful');
        }
      };

      this.creatHTML(cidersArray,meadsArray,winesArray,cocktailArray);
  },
  creatHTML: function(ciders,meads,wines,cocktail){
    var ciderMarkup = '';
    var meadMarkup = '';
    var wineMarkup = '';
    var cocktailMarkup = '';
    //loop through each ciders
    for (var i=0; i<= ciders.length-1; i++){

      var singleDrink='<tr> <td>' + ciders[i].fields.name + '</td> <td class="dynamictableRightColumn">' + ciders[i].fields.abv + '</td> </tr>';
      ciderMarkup = ciderMarkup+singleDrink;
    }
    ciderContainer.innerHTML = ciderMarkup;

    for (var i=0; i<= meads.length-1; i++){

      var singleDrink='<tr> <td>' + meads[i].fields.name + '</td> <td class="dynamictableRightColumn">' + meads[i].fields.abv + '</td> </tr>';
      meadMarkup = meadMarkup+singleDrink;
    }
    meadContainer.innerHTML = meadMarkup;

    for (var i=0; i<= wines.length-1; i++){

      var singleDrink='<tr> <td>' + wines[i].fields.name + '</td> <td class="dynamictableRightColumn">' + wines[i].fields.abv + '</td> </tr>';
      wineMarkup = wineMarkup+singleDrink;
    }
    wineContainer.innerHTML = wineMarkup;

    for (var i=0; i<= cocktail.length-1; i++){

      var singleDrink='<tr> <td>' + cocktail[i].fields.name + '</td> </tr>';
      cocktailMarkup = cocktailMarkup+singleDrink;
    }
    cocktailContainer.innerHTML = cocktailMarkup;

  }

}


site.init()
