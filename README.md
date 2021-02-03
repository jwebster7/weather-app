# What's the Weather?
This is a weather app I made to get more experience with React, Express, third-party APIs and Heroku.

## Front End
For the client, I used React and styled components. I'm using the Context API and useReducer() hook to manage the data in the app.  
As for styling, I considered using a more popular library such as Material UI, but I wanted to gain more experience using styled components.  

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
