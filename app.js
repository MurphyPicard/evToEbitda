

apikey = "FJTIVZL1XTSG7F2E";
alphaVantageUrl = "https://www.alphavantage.co/query?";
function testApi(){
  $.ajax({
    url: alphaVantageUrl + "function=TIME_SERIES_INTRADAY&symbol=MSFT&interval=1min&apikey="+apikey,
    success: function(data){
      $('.divChange').text('Success');
      $('.divChange').append(data[ 'Meta Data' ][ '2. Symbol' ]);
      console.log(data[ 'Meta Data' ][ '2. Symbol' ]);
    }
  });//ajax

}//testApi
