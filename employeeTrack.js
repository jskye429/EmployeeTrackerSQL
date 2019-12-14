var mysql = require("mysql");
var inquirer = require("inquirer");
var connection = mysql.createConnection({
  
  host: "localhost",

  port: 3306,
  user: "root",
  password: "Lena1006",
  database: "employeeTrack_db"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
  prompts();
});

questions = [
  {
    type: "list",
    message: "Choose from the list:",
    name: "list",
    choices: ["Add Department", "Add Role", "Add Employee", "View Department", "View Role", "View Employee", "Update Employee Role"]
  }
]

function prompts(){
  //console.log("in prompts")
  inquirer.prompt(questions).then(function(response){
    //Add Department
    switch (response.list) {
      case "Add Department":
        addDepartment();
        break;
      case "Add Role":
        
        break;
      case "View Department":
        viewDepartment();
        break;
    
      default:
        break;
    }
  })
}
async function addDepartment(){
  var results = await inquirer.prompt({
    type:"input",
    message: "What department to add?",
    name: "department"
  })
  connection.query("INSERT INTO departments SET ?", 
  {
    name: results.department
  }, function(err, res){
    viewDepartment();
  })
}
function viewDepartment(){
  connection.query("SELECT * FROM departments", function(err, res){
    console.table(res);
    prompts();
  })
}
// inquirer.prompt({
//   name: "whatever",
//   choices:[
//     {name: "HR",
//     value: 1},
//     {name: "RND",
//     value: 2},
//   ]
// })


