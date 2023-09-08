
const express = require('express');
const app = express();


app.get('/api', (req, res) => {

  const slackName = req.query.slack_name;
  const track = req.query.track;


  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const currentDate = new Date();
  const currentDay = daysOfWeek[currentDate.getUTCDay()]; 


  const currentUTCDate = new Date();
  currentUTCDate.setMinutes(currentUTCDate.getMinutes() + Math.floor(Math.random() * 5) - 2); // Simulate +/-2 minutes
  const currentUTCTime = currentUTCDate.toISOString().replace(/:\d+\.\d+Z$/, "Z"); // Format as "2023-09-08T03:23:42Z"



  const githubFileURL = "https://github.com/Alexander-OE/Task1/blob/main/app.js";
  const githubRepoURL = "https://github.com/Alexander-OE/Task1";


  const jsonResponse = {
    slack_name: slackName,
    current_day: currentDay,
    utc_time: currentUTCTime,
    track: track,
    github_file_url: githubFileURL,
    github_repo_url: githubRepoURL,
    status_code: 200,
  };


  res.json(jsonResponse);
});

const port = process.env.PORT || 3000; 
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
