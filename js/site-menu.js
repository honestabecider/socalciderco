var site = {};
var contentfulClient = contentful.createClient({
 accessToken: 'aafa7a972a796dfbed82da799fb5ffd4957ccbe31f87f82ccb59b4c50eef5003',
 space: 'wo14bzs0r5j3'
})

var PRODUCT_CONTENT_TYPE_ID = 'menu'

var leftContainer = document.getElementById('left-container');
var rightContainer = document.getElementById('right-container');
var beer1Container = document.getElementById('beer1-container');
var beer2Container = document.getElementById('beer2-container');
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
      var rightArray = [];
      var beer1Array = [];
      var beer2Array = []

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
          case 'beer1':
            //put me into beer1 array
            beer1Array.push(thisDrink);
            break;
          case 'beer2':
            //put me into beer2 array
            beer2Array.push(thisDrink);
            break;
          default:
            console.warn(thisDrink.fields.name + ' did not have a "type" field. this is no good, fix it in contentful');
        }
      };

      this.creatHTML(leftArray,rightArray,beer1Array,beer2Array);
  },
  creatHTML: function(left,right,beer1,beer2){
    var leftMarkup = '';
    var rightMarkup = '';
    var beer1Markup = '';
    var beer2Markup = ''
    //loop through each ciders
    for (var i=0; i<= left.length-1; i++){

      var singleDrink='<tr> <td>' + left[i].fields.name + '</td> <td>' + left[i].fields.abv + '</td> </tr>';
      leftMarkup = leftMarkup+singleDrink;
    }
    leftContainer.innerHTML = leftMarkup;

    for (var i=0; i<= right.length-1; i++){

      var singleDrink='<tr> <td>' + right[i].fields.name + '</td> <td>' + right[i].fields.abv + '</td> </tr>';
      rightMarkup = rightMarkup+singleDrink;
    }
    rightContainer.innerHTML = rightMarkup;

    for (var i=0; i<= beer1.length-1; i++){

      var singleDrink='<tr> <td>' + beer1[i].fields.name + '</td> <td>' + beer1[i].fields.abv + '</td> </tr>';
      beer1Markup = beer1Markup+singleDrink;
    }
    beer1Container.innerHTML = beer1Markup;

    for (var i=0; i<= beer2.length-1; i++){

      var singleDrink='<tr> <td>' + beer2[i].fields.name + '</td> <td>' + beer2[i].fields.abv + '</td> </tr>';
      beer2Markup = beer2Markup+singleDrink;
    }
    beer2Container.innerHTML = beer2Markup;


  }

}


site.init()
