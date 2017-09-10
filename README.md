# The Problem I want to solve:

There are no free stock screeners that offer the best metric of all...
# EV / EBITDA


All the screeners that offer advanced info, like FASTgraphs and
GURUfocus, charge high fees.  Wonderful sites, but too pricey for the
average person.  Users don't want to spend all our investment profits
on website fees.  

Sites like the Motley Fool and Seeking Alpha are terrific for what they
are, but offer terrible stock screeners.  Fidelity offers a plethora of
information and an okay Stock screener but you have to have an account
there and their screener doesn't offer some more advanced metrics.  
The site GURUfocus offers a terrific screener that does offer the
EV/EBITDA ratio and many other related ratios but their site costs hundreds to
thousands of dollars per year.


# The Solution:
Users want a free site that is as good as a paid sites!  My team and
I can build a simple stock screener that offers a simple to use design
with both basic and advanced ratios.  This is easy to do and we can
offer it for free!  

Please see the GURUfocus site for an example of what I'd like to do eventually.
https://www.gurufocus.com/screener/#&tab=9&page=1&sort=&dir=&stab=-
Click on the valuation tab to see where they use EV and EBITDA in their screeners.





This will be a revolving project but to list a few -
# Initial user stories - Target 9/23/17
* First, users should be able to screen for stocks using the EV/EBITDA metric.

Then we will host the site on Heroku or AWS or Google and start letting users play with it.

# Future version user stories - Target October through December
* Users should be able to screen for stocks using common and not so
common metrics for evaluating stocks.  
  * A minimum of 30 common metrics like P/E and MarketCap.
  * A minimum of 10 uncommon metrics like EBITDA growth and net insider purchases.

# Way in the future user stories
* Users should be able to visualize common relevant data instantly.
  * Displaying a stocks price currently vs what it would be if it was
  trading at it's 5 year historical EV/EBITDA and P/E
  * Users should be able to instantly and visually see if a stock is perhaps
  over/undervalued.

# Waaaaaaay way in the future user stories:
* Users should have access to news.
* Users should have access to common sense (why did the stock pop/drop today?)

# Issues and Projects listed on respective tabs

# Helpful APIs:
https://www.quandl.com/databases/ZFB?filterSelection=all&keyword=balance%20sheet

https://www.alphavantage.co

# Notes
* Might need to enable/disable cors to play with the site while under construction.  
* I am hiding my intrinio apikey and future api keys in a config.js file.

# MVP
Very simply, we want one select dropdown (EV/EBITDA) to show on screen and display the results of that screen in a pleasant to look at format

# Friends, Team, Co-workers, Developers
1) You should know what EV and EBITDA and EV/EBITDA are.
2) You should know what a stock screener is (see link in Solution section).
3) Everyone should fork and clone their own version of this project.
4) Before you start for the day you should always run GIT PULL to make sure you have the most current version.
5) If you want to make changes you can submit pull requests and I will merge our versions.
* If you don't know one of these 5 things please ask and anyone will be happy to help you.
