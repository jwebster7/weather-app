# What's the Weather?
This is a weather app I made to get more experience with React, Express, third-party APIs and Heroku.

## Front End
For the client, I used React and styled components. I'm using the Context API and useReducer() hook to manage the data in the app.  

As for styling, I considered using a more popular library such as Material UI, but I wanted to gain more experience using styled components.  

I also attempted to make the application responsive for mobile devices. In the future, making apps mobile friendly / responsive will be a higher priority from the start.

## Back End
For the server, I'm using Express. I chose to add a server in case I wanted to normalize data from third-party API calls before 
working with it in the client. I also wanted to hide my API keys in a server environment.  

The application is deployed and hosted on [Heroku](https://dashboard.heroku.com/)  

## APIs
This application gets data by consumes various endpoints of 2 third party APIs:  
* [OpenWeather API](https://openweathermap.org/api)
* [Nominatim API](https://github.com/osm-search/Nominatim)

I'm also using the browser's [Geolocation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API) to initially gather latitude and longitude.  

## Workflow  
* Users are prompted by the browser to check if their location may be used.  
* If this is denied or location services are disabled, the user may alternatively enter in their zip code.
* Some ZIP codes or locations may only register the County and State. This is due to slight variations in coordinate granularity between API calls. For instance, an acceptable ZIP code for Boudler, Colorado is 80301. This may report as having a latitude of 40.0497 from one endpoint, while another may report a latitude of 40.015.

## What I Learned 
Overall, this has been a really great learning experience. Building this app solidified some of my understandings of the technologies involved (especially React and Express). I'm now more confident working with the Context API, useReducer(), writing custom hooks, and consuming API endpoints in React. 

I also learned so much about backend code from setting up my own Express server. I learned how to properly order endpoint definitions to avoid routing errors, how to use [got](https://www.npmjs.com/package/got) to make and parse API calls, and how to setup projects using a PaaS (Heroku). 

## What I'd Do Differently
If I were to start this project from scratch again, one thing I would do differently is to define my feature set ahead of time. Initially, I was just going to get the current weather data based on latitude and longitude, but I decided I wanted more of a challenge. So I added the forecast page in after I had already setup my API calls and it led to some refactoring in both my client and server code that I could've avoided if I'd properly defined my feature set from the start.  

Another thing I'd do differently, is to use TypeScript. I think TypeScript would've helped a lot with setting up API contracts (via interfaces) between my client and server so I could more reasily consume the API responses. Another benefit, would be that TypeScript would've allowed me to catch bugs earlier on via intellisense and when it compiles/transpiles into JS. 
