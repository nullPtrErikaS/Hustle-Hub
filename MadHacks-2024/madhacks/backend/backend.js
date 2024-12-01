const readline = require("readline");
const Profile = require('./profile');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// class Profile {
//     constructor(username, password, name) {
//         this.username = username;
//         this.password = password;
//         this.name = name;
//     }

//     getPassword() {
//         return this.password;
//     }
// }

const allUsers = new Map();
let person;


function main() {
    console.log("test");

    function prompt() {
        rl.question("Enter login, signup, or stop: ", (option) => {
            if (option === "login") {
                login();
            } else if (option === "stop") {
                rl.close();
            } else if (option === "signup") {
                createAccount();
            } else {
                console.log("Invalid option, please enter login, signup, or stop.");
                prompt();
            }
        });
    }

    prompt();
}

// UPDATE when login page
function getCorrectUsername() {
    let username;
    
    do {
      // Prompt user for a username
      username = prompt('Enter a username:'); // UPDATE when login page
      
      // Check if the username already exists
      if (!allUsers.has(username)) {
        // If username exists, notify the user and prompt again
        alert('That username does not exist, please try again.');
      }
    } while (!allUsers.has(username));  // Keep asking until username is correct
  
    // Return the correct username
    return username;
  }

// UPDATE when login page
function login() {
    username = getCorrectUsername();
    if(allUsers.get(username).getPassword() === password){
        console.log("Login successful");
        person = allUsers.get(username);
    }
    else{
        console.log("error");
    }

    //rl.question("Enter username: ", (username) => {
        rl.question("Enter password: ", (password) => {
            if (allUsers.has(username) && allUsers.get(username).getPassword() === password) {
                console.log("success");
            } else {
                console.log("error");
            }
            console.log("logged in");
        

            main();  // Go back to main prompt
        });
   // });
}

function isUsernameTaken(username) {
    return allUsersMap.has(username);
  }

// UPDATE when login page
function getUniqueUsername() {
    let username;
    
    do {
      // Prompt user for a username
      username = prompt('Enter a username:'); // UPDATE when login page
      
      // Check if the username already exists
      if (isUsernameTaken(username)) {
        // If username exists, notify the user and prompt again
        alert('Username is already taken, please choose another.');
      }
    } while (isUsernameTaken(username));  // Keep asking until username is available
  
    // Return the unique username
    return username;
  }

  // UPDATE when login page
function createAccount() {
    username = getUniqueUsername();
    password = prompt('Enter a password:');
    name = prompt('Enter your name: ')
    person = new Profile(username, password, name)
    allUsers.set(username, person);
    console.log("Account created successfully");
    
   // rl.question("Enter username: ", (username) => {

     //   rl.question("Enter password: ", (password) => {
       //     rl.question("Enter your name: ", (name) => {
        //       allUsers.set(username, new Profile(username, password, name));
    //            console.log("Account created successfully");
      //          main();  // Go back to main prompt
           // });
    //    });
  //  });
}

main();

