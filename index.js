const fs = require("fs");
const inquirer = require("inquirer");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

// ____________________________CREATING A FUNCTION TO INITIALIZE THE HTML FILE____________________________
function initHtml() {
    const htmlCodes = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"/>
    <title>Team Profiles</title>
</head>
<body style="background-color: #fffae3;">
    <nav class="navbar navbar-light mb-5" style="background-color: #99e1d9;">
        <h2 class="w-100 text-center">My Team Profiles</h2>
    </nav>
    
    <div class="container">
        <div class="row">
    `;

    fs.writeFile("./dist/team-profiles.html", htmlCodes, function(err) {
        if (err) {
            console.log(err);
        }
    });
    console.log("HTML file initialized! Congrats!");
}
initHtml();
// ___________________________________________________________________________________________________



// ____________________________CREATING A FUNCTION TO FINISH THE HTML FILE____________________________
function finiHtml() {
    const htmlCodes = `
        </div>
    </div>
</body>
</html>
    `;

    fs.appendFile("./dist/team-profiles.html", htmlCodes, function(err) {
        if (err) {
            console.log(err);
        }
    });
    console.log("HTML file genereation finished! Congrats!");
}
finiHtml();
// ___________________________________________________________________________________________________






















