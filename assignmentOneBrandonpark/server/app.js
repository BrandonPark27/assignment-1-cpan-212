const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 8000;

app.use(cors());

app.get('/getOverview', (req, res) => {
  res.json("please hire me");
});

app.get('/getEdu', (req, res) => {
  const education = [
    { degree: "Computer Science", institution: "Humber College" },
    { degree: "Watching Television", institution: "From My Couch" }
  ];
  res.json(education);
});

app.get('/getExp', (req, res) => {
  const experience = [
    { role: "Software Engineer" },
    { role: "Frontend Developer" },
    { role: "Database Manager" },
  ];
  res.json(experience);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
