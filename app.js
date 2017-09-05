var avApikey = "FJTIVZL1XTSG7F2E";
var alphaVantageUrl = "https://www.alphavantage.co/query?";

var quandlApiKey = "SdCMPKwy6KCWooiBUaxq";
var quandlUrl = "";
var quandlSample = "https://www.quandl.com/api/v3/datatables/ZACKS/MKTV.csv?api_key=SdCMPKwy6KCWooiBUaxq";

var daily = "function=TIME_SERIES_DAILY";

// trying to get shares * price = market cap
function testGPRO(){
  $.ajax({
    url: "https://www.quandl.com/api/v3/datatables/ZACKS/SHRS.json?ticker=FB&per_end_date=2015-09-30&qopts.columns=shares_out&api_key=SdCMPKwy6KCWooiBUaxq",
    success: function(data){
      console.log(data);
    }
  });
}
///////////////////////////////////////////

function testApi(){

  $.ajax({
    url: alphaVantageUrl + daily + "&symbol=MSFT&interval=1min&apikey=" + avApikey,
    success: function(data){
      $('.divChange').text('Success');
      $('.divChange').append('<br>' + data[ 'Meta Data' ][ '2. Symbol' ]);
      console.log(data[ 'Meta Data' ][ '2. Symbol' ]);
    }
  });//ajax

}//testApi
//////////////////////////////////////////////
function testApiPrice(){

  $.ajax({
    url: alphaVantageUrl + daily + "&symbol=MSFT&interval=1min&apikey=" + avApikey,
    success: function(data){

      $('.divPrice').text('Success!');
      $('.divPrice').append('<br>' + '$' + parseFloat(data[ 'Time Series (Daily)' ][ '2017-09-01' ][ '4. close' ]) );
      console.log(data[ 'Time Series (Daily)' ][ '2017-09-01' ][ '4. close' ]);

    }//success
  });//ajax
}//testApiPrice

//////////////////////////////////////
function testQuandl(){
  $.ajax({
    url: "https://www.quandl.com/api/v3/datatables/ZACKS/FC.json?ticker=AAPL&per_type=Q&per_end_date.gte=2010-01-01&qopts.columns=per_end_date,tot_revnu&api_key=SdCMPKwy6KCWooiBUaxq",
    success: function(data){

      $('.divQ').text('Success!');
      // $('.divQ').append('<br>' + "Apple market cap in billions as of " + data.split(',')[13] + ": " + data.split(',')[15] );
      $('.divQ').append('<br>On ' + data.datatable.data[7][0] + ' Apple made ' + data.datatable.data[7][1] + ' (revenue in millions)' );
      console.log(data.datatable.data[7][0]);
      console.log(data.datatable.data[7][1]);

    }//success
  });//ajax
}//testEV
