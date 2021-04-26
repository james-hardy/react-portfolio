import React from 'react'

const cards = [
    //images are in public/assests = path is simply assets/filename
    {
      key: 1,
      image: "/assets/burger.png",
      title: "Burger App",
      description:
        "So many burgers, so little time! Add all of the burgers you would like to try, and keep track of all the burgers you have devoured.",
      gitHubRepo: "https://github.com/HectorDiazJr/Burger-Logger",
      liveLink: "https://evening-sands-49940.herokuapp.com/",
    },
  
    {
      key: 2,
      image: "/assets/graph.png",
      title: "Workout Tracker",
      description:
        "Stay on track with your fitness goals and health by tracking your workouts, your progress, and add new workouts to your routine",
      gitHubRepo: "https://github.com/HectorDiazJr/Workout-Tracker",
      liveLink:
        "https://hidden-tor-94821.herokuapp.com/?id=6071c4166c407900150ff327",
    },
  
    {
      key: 3,
      image: "/assets/Looking4Balance.png",
      title: "Looking 4 Balance",
      description:
        "Balance! With such a busy life, we all need balance to assure we never forget the important things in life. That is why this app allows you to select the 3 most important things you need to accomplish TODAY! 3 things to do with your family, work, and school. Start the day with an inspiring quote, and come back to your site when you need a laugh.",
      gitHubRepo: "https://github.com/HectorDiazJr/Looking-for-Balance",
      liveLink: "https://hectordiazjr.github.io/Looking-for-Balance/",
    },
  
    {
      key: 4,
      image: "/assets/Scheduler-screen-shot.png",
      title: "Work day scheduler",
      description: 
        "Stay organized by planning your day hour by hour and see at a glance where you are in the day",
      gitHubRepo: "https://github.com/HectorDiazJr/Work-Day-Scheduler",
      liveLink: "https://hectordiazjr.github.io/Work-Day-Scheduler/",
    },
  
    {
      key: 5,
      image: "assets/travel-logger.png",
      title: "Travel Logger",
      description: 
        "Do you like to travel? So do we, and so do all of your friends. Let's keep track of the places we travel, and blog about what we like at each place we visit for all of us to see and add our own comments. We may want to go visit the same places. Not sure where to go? Get in your car and drive, and use this app to find places to do based on your interest",
      gitHubRepo: "https://github.com/JJG1488/Travel-Logger",
      liveLink: "https://hidden-waters-17740.herokuapp.com/"
    },
  
    {
      key: 6,
      image: "/assets/WeatherApp.png",
      title: "Weather App",
      description: "Do have a trip planned? Wouldn't it be great to keep all of the places you will visit in one place, to quickly see and plan according to the weather? This is your app! See the weather for your selected cities, along with a 5 day forcast, and even a quick view of the current weather with a matching gif at the top of the page",
      gitHubRepo: "https://github.com/HectorDiazJr/Weather-App",
      liveLink: "https://hectordiazjr.github.io/Weather-App/",
    }
  ];

  function Cards() {
      return <Cards cards={cards} />
  }

  export default Cards;

