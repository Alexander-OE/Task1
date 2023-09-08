// Step 1: Import required modules and create an Express app
const express = require('express');
const app = express();

// Step 2: Define a route that handles GET requests with query parameters
app.get('/api', (req, res) => {

  const slackName = req.query.slack_name;
  const track = req.query.track;

  // Step 4: Get the current day of the week
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const currentDate = new Date();
  const currentDay = daysOfWeek[currentDate.getUTCDay()];

  // Step 5: Get the current UTC time within a +/-2 minute window
  const currentUTCDate = new Date();
  const formattedCurrentUTCTime = currentUTCDate.toISOString().slice(0, -5) + "Z";

  // Step 6: Define GitHub URLs for file and repository
  const githubFileURL = "https://github.com/Alexander-OE/Task1/blob/main/app.js";
  const githubRepoURL = "https://github.com/Alexander-OE/Task1";

  // Step 7: Create the JSON response object
  const jsonResponse = {
    slack_name: slackName,
    current_day: currentDay,
    utc_time: formattedCurrentUTCTime,
    track: track,
    github_file_url: githubFileURL,
    github_repo_url: githubRepoURL,
    status_code: 200,
  };

  // Step 8: Send the JSON response as the HTTP response
  res.json(jsonResponse);
});

// Step 9: Start the Express server and listen on a specified port
const port = process.env.PORT || 3000; // Use the environment variable PORT or default to 3000
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
