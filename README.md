# Description
This project is a mini library of react hooks components. The library consists of a search bar, language translator, nav bar, drop down menu, and an accordian modal.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### Styles 
No additonal css needed, only add classes to the HTML markup - add classes via Sematic UI DOCs
Created styles using Sematic UI. Use CDN: https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css
You can run a search for other Sematic UI CDNs here: https://cdnjs.com/libraries/semantic-ui and read documentations here: https://semantic-ui.com/


### About This Project:
This is a fun mini app of 4 widgets, an accordian, search bar, translator, and drop down menu. None of these widgets are related. The reason all the widgets are in the same app is so we don't have to generate CRA template over and over again for each widget

### API CALL
API call for search wiki is made with axios. Install via CLI:
``` npm install axios ```
Read wiki docs for more info: https://www.mediawiki.org/wiki/API:Main_page
Orignal url with root end point and parameters: https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&origin=*&srsearch=programming

API THROTTING: use a setTimeOut function - see example in the search and translator widegets.

### Navagation widget
React Router library is the standered for implementing navagation, but it is not used with this wideget, This widget is more about learning to build navagation ideas and theory from scratch.
React Router has freqent breaking changes... it is always changing and being updated, so you will have to re-learn it over and over again...so far now, I left React Router out, and will create another project just for it on it's own.

Use window.location in the console to locate the pathname.
- Edit the URL with a pathname
- Then in the console use window.location to locate the pathname

### Navagation issues & fixes:
Make sure pages making API calls is not reloading an entire index.html 
file each time you click a link, check the network tab in your console.
Each time a link is clicked we completely reload the index.html file which is not ideal in a react application (its fine for static html sites). There is no reason for a react app to do a hard reload of all the assets.

The ideal fix would be to, be able to click on a link, update the URL. but NOT do a full page reload. A full page reload causes a lot of network traffic that is not required to make small changes on the screen.
User clicks on link:
- change the URL, but don't do a full page refresh
- each route could detect the URL has changed
- route could update piece of state tracking the current pathname
- each route rerenders, showing/hiding components approriately
*** When ever we click on a react app link, we just DO NOT want to upload an entire page...
*** See Header.js file for more on the fix

Additonal notes:
- Create a link component to be used inside the header component - replaces all <a> tags
- Changing the URL - with ```window.history.pushState({}, '', href)```, test in console
- Detecting Navagation - see Link and Route notes
- Update Route - introducing a pc of state to render the matching URL & Route
- Handing Common Clicks
