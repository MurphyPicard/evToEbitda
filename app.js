$('.divChange').text('lsdjfalsdjf');


function testApi(){
  $.ajax({
    url: "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=MSFT&interval=1min&apikey=demo",
    success: function(data){
      console.log(data);
    }
  });//ajax

}//testApi
