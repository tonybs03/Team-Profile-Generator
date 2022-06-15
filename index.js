const fs = require("fs");
const inquirer = require("inquirer");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

// ____________________________CREATING A FUNCTION TO INITIALIZE THE HTML FILE________________________
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
// ___________________________________________________________________________________________________






// ____________________________CREATING A FUNCTION TO GATHER INFORMATION_____________________________
function addProfile() {
    inquirer.prompt([
        {
        type: "list",
        message: "What type of employee would you like to add? (use keyboard)",
        choices: 
            [
            "Manager",
            "Engineer",
            "Intern"
            ],
        name: "type"
        },

        {
        message: "Enter the name of the employee",
        name: "name"
        },

        {
        message: "Enter team member's id",
        name: "id"
        },

        {
        message: "Enter team member's email address",
        name: "email"
        }
    ])
    .then(function({type, name, id, email}) {
        let contactInfo = "";
        if (type === "Manager") {
            contactInfo = "office number";
        } else if (type === "Engineer") {
            contactInfo = "Github username";
        } else if (type === "Intern") {
            contactInfo = "school name";
        }
        inquirer.prompt([
            {
            message: `Please enter the ${contactInfo} of the ${type}`,
            name: "contact"
            },

            {
            type: "list",
            message: "Would you like to create more profiles for your team?",
            choices: 
                [
                "yes",
                "no"
                ],
            name: "moreornot"
            }
        ])
        .then(function({contact, moreornot}) {
            let newProfile = "";
            // console.log(type);
            if (type === "Manager") {
                newProfile = new Manager(name, id, email, contact);
            } else if (type === "Engineer") {
                newProfile = new Engineer(name, id, email, contact);
            } else if (type === "Intern") {
                newProfile = new Intern(name, id, email, contact);
            }

            // console.log(newProfile);
            // console.log(contactInfo);

            renderProfile(newProfile, contactInfo);

            if (moreornot === "yes") {
                addProfile();
            } else if (moreornot === "no") {
                finiHtml();
            }
        });
    });
}
addProfile();
// ___________________________________________________________________________________________________






// ____________________________CREATING A FUNCTION TO RENDER PROFILES________________________________
function renderProfile(newProfile, contactInfo) {
    let words = contactInfo.split(" ");
    for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }
    let contactType = words.join("  ");
    // console.log(newProfile);
    // console.log(contactInfo);
    const name = newProfile.getName();
    const type = newProfile.getRole();
    const id = newProfile.getId();
    const email = newProfile.getEmail();
    let contact = (
      type === 'Manager' ?  newProfile.getNumber() : 
      type === 'Engineer' ? newProfile.getGithub() : 
      type === 'Intern' ?   newProfile.getSchool() :
      null
    );
    // console.log(contact)
    const MIcodes = `
            <div class="col-4 mb-5">
                <div class="card mx-auto mt-5 h-100">
                    <h5 class="card-header">${name}<br /><br />${type}</h5>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${id}</li>
                        <li class="list-group-item" style="min-height: 75px;">Email:<a href="mailto: ${email}"> ${email}</a></li>
                        <li class="list-group-item">${contactType}: ${contact}</li>
                    </ul>
                 </div>
            </div> 
    `;
    const Engcodes = `
            <div class="col-4 mb-5">
                <div class="card mx-auto mt-5 h-100">
                    <h5 class="card-header">${name}<br /><br />${type}</h5>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${id}</li>
                        <li class="list-group-item" style="min-height: 75px;">Email:<a href="mailto: ${email}"> ${email}</a></li>
                        <li class="list-group-item">${contactType}:<a href="https://github.com/${contact}" target="_blank"> ${contact} </a></li>
                    </ul>
                 </div>
            </div> 
    `;

    let codes = (
        type === 'Engineer' ?  Engcodes : 
        MIcodes
      );

    fs.appendFile("./dist/team-profiles.html", codes, (err) => {
        if (err) {console.log(err)}
    })   
}






