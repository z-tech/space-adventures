# A 5-minute, browser-based, mystery space adventure

This is an [Express](http://expressjs.com/) web framework app for [Node.js](https://nodejs.org/) hosted on Heroku. (It only loosely uses Express as no data is actually stored. Everything is sent using URL parameters.)

![alt text](http://oi61.tinypic.com/2zrkldw.jpg "Film diversity awareness project screenshot")

## Who stars in the films we watch? 

What's the point of all this? Data collected openly on the web in this manner isn't neccessarily reliable and thus not suitable for any scientific study. Categorizing 1-3 films usually gets the point accross. 

> Visual media has a diversity problem. 

## Running the Site Locally

Running the site locally is simple. Clone this repo and run the following
commands:

```
$ bundle install
$ rake db:migrate
$ rake db:seed # this populates the DB via CSC text file
$ rails s
```

Then open up `localhost:3000`. 

## Contributions Welcome!

If you find a typo or you feel like you can improve the HTML, CSS, or
JavaScript, we welcome contributions. Feel free to open issues or pull
requests like any normal GitHub project, and I'll merge it in.


space-adventures
================

http://zitek-space-adventures.herokuapp.com/

######## ADVENTURE GUIDE #########

The adventure was designed to be stand alone, but if you find yourself lost at any point, you may refer to this list of actions (in chronological order). 

*brackets mean type the value of the text in the brackets(e.g. [Full name] for me = Andrew Zitek)
*quotes mean type exactly the text inside the quotes. Do not include the quotes. 
*close new window means use the mouse to close the new window that has opened (this happens when viewing transmissions)

1.) [Full name]
2.) 'inbox'
3.) 'read 1'
4.) 'play a'
5.) close new window
6.) 'back'
7.) 'read 2'
8.) 'back'
9.) 'read 3'
10.) 'play v'
11.) close new window
12.) 'back'
13.) 'exit'
14.) 'ls'
15.) 'inspect transmission_binary_file'
16.) 'view transmission_binary_file 23 73'
17.) close new window
18.) 'view transmission_binary_file 73 23'
19.) close new window
20.) 'broadcast new -msg response_transmission_file'
21.) 'play v'
22.) THE END

######## SUMMARY (SPOILERS) ##########

The user is immersed into the character of a professor at a deep space research laboratory. Andrew Zitek is a ship captain who encounters an impossibly intelligent form of life that has a shockingly intricate understanding of human comedy. The professor must reach out to this life form to save Andrew Zitek. What motivates the extraterrestrials to make contact with humans in the first place is up to the user to decide. 
