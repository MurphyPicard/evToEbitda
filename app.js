var avApikey = config.avApikey;
// var mykey = config.MY_KEY;
// var secretkey = config.SECRET_KEY;
var alphaVantageUrl = "https://www.alphavantage.co/query?";
var daily = "function=TIME_SERIES_DAILY";
var intraday = "function=TIME_SERIES_INTRADAY";

function testApi(){

  $.ajax({
    url: alphaVantageUrl + intraday + "&symbol=MSFT&interval=1min&apikey=" + avApikey,
    success: function(data){
      var recentDate = data[ 'Meta Data' ][ "3. Last Refreshed" ];

      $('.divChange').text('Success! Working 100%!!!');
      $('.divChange').append('<br>' + "Symbol: " + data[ 'Meta Data' ][ '2. Symbol' ]);
      console.log(data);
      console.log(data[ 'Meta Data' ]);
      console.log(data[ 'Meta Data' ][ '2. Symbol' ]);
      console.log(data[ 'Meta Data' ][ "3. Last Refreshed" ]);
      console.log(data[ 'Time Series (1min)' ][recentDate][ '3. low' ]);
      console.log(data[ 'Time Series (1min)' ][recentDate][ '4. close' ]);


    }
  });//ajax

}//testApi
//////////////////////////////////////////////
function testApiPrice(){

  $.ajax({
    url: alphaVantageUrl + intraday + "&symbol=MSFT&interval=1min&apikey=" + avApikey,
    success: function(data){
      var recentDate = data[ 'Meta Data' ][ "3. Last Refreshed" ];
      $('.divPrice').text('Success! Working 100%!!!');
      $('.divPrice').append('<br>' + '$' + parseFloat(data[ 'Time Series (1min)' ][recentDate][ '4. close' ]) );
      console.log(data);
      console.log(data[ 'Meta Data' ]);
      console.log(data[ 'Meta Data' ][ '2. Symbol' ]);
      console.log(data[ 'Meta Data' ][ "3. Last Refreshed" ]);
      console.log(data[ 'Time Series (1min)' ][recentDate][ '3. low' ]);
      console.log(data[ 'Time Series (1min)' ][recentDate][ '4. close' ]);


    }//success
  });//ajax
}//testApiPrice


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// var https = require('https');
var intrinioUsername = config.intrinioUsername;
var intrinioPassword = config.intrinioPassword;
var auth = "Basic " + btoa(intrinioUsername + ":" + intrinioPassword);
//https://api.intrinio.com/fundamentals/standardized?identifier={symbol}&statement={statement}

var intrinioUrl = 'https://api.intrinio.com/fundamentals/standardized?identifier=FB&statement=income_statement';

function shareCount(){
  $.ajax({
    beforeSend: function (xhr) {
        xhr.setRequestHeader ("Authorization", auth);
    },
    url: intrinioUrl,
    success: (data)=>{
      console.log("data below");
      console.log(data);
    }//success
  });//ajax
}//shareCount




//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var quandlApiKey = config.quandlApiKey;
var quandlUrl = "";
var quandlSample = "https://www.quandl.com/api/v3/datatables/ZACKS/MKTV.csv?api_key=SdCMPKwy6KCWooiBUaxq";






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

// trying to get shares * price = market cap
function testGPRO(){
  $.ajax({
    url: "https://www.quandl.com/api/v3/datatables/ZACKS/SHRS.json?ticker=GPRO&per_end_date=2017-08-30&qopts.columns=shares_out&api_key=SdCMPKwy6KCWooiBUaxq",
    success: function(data){
      console.log(data);
    }
  });
}
///////////////////////////////////////////
