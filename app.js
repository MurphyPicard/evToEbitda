var apikey = "FJTIVZL1XTSG7F2E";
var alphaVantageUrl = "https://www.alphavantage.co/query?";
var daily = "function=TIME_SERIES_DAILY";
function testApi(){

  $.ajax({
    url: alphaVantageUrl + daily + "&symbol=MSFT&interval=1min&apikey=" + apikey,
    success: function(data){
      $('.divChange').text('Success');
      $('.divChange').append('<br>' + data[ 'Meta Data' ][ '2. Symbol' ]);
      console.log(data[ 'Meta Data' ][ '2. Symbol' ]);
    }
  });//ajax

}//testApi

function testApiPrice(){

  $.ajax({
    url: alphaVantageUrl + daily + "&symbol=MSFT&interval=1min&apikey=" + apikey,
    success: function(data){

      $('.divPrice').text('Success!');
      $('.divPrice').append('<br>' + '$' + parseFloat(data[ 'Time Series (Daily)' ][ '2017-09-01' ][ '4. close' ]) );
      console.log(data[ 'Time Series (Daily)' ][ '2017-09-01' ][ '4. close' ]);

    }//success
  });//ajax
}//testApiPrice

function testEV(){
  console.log("nothing yet");
}
