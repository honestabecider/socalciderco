var site = {};
var contentfulClient = contentful.createClient({
 accessToken: 'aafa7a972a796dfbed82da799fb5ffd4957ccbe31f87f82ccb59b4c50eef5003',
 space: 'wo14bzs0r5j3'
})

var PRODUCT_CONTENT_TYPE_ID = 'menu'

var leftContainer = document.getElementById('left-container');
var rightContainer = document.getElementById('right-container');
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

      var leftArray = [];
      var rightArray = []

      for (var i = 0; i <= data.items[0].fields.drink.length-1; i++) {
        var thisDrink = data.items[0].fields.drink[i];
        switch  (thisDrink.fields.type) {
          case 'Right':
            //put me into right array
            rightArray.push(thisDrink);
            break;
          case 'Left':
            //put me into left array
            leftArray.push(thisDrink);
            break;
          default:
            console.warn(thisDrink.fields.name + ' did not have a "type" field. this is no good, fix it in contentful');
        }
      };

      this.creatHTML(leftArray,rightArray);
  },
  creatHTML: function(left,right){
    var leftMarkup = '';
    var rightMarkup = '';
    //loop through each ciders
    for (var i=0; i<= left.length-1; i++){

      var singleDrink='<tr> <td>' + left[i].fields.name + '</td> <td>' + left[i].fields.abv + '</td> </tr> <tr> <td colspan="2">' + left[i].fields.description + '</td> </tr>';
      leftMarkup = leftMarkup+singleDrink;
    }
    leftContainer.innerHTML = leftMarkup;

    for (var i=0; i<= right.length-1; i++){

      var singleDrink='<tr> <td>' + right[i].fields.name + '</td> <td>' + right[i].fields.abv + '</td> </tr> <tr> <td colspan="2">' + right[i].fields.description + '</td> </tr>';
      rightMarkup = rightMarkup+singleDrink;
    }
    rightContainer.innerHTML = rightMarkup;


  }

}


site.init()
