var LogArr = [];

function log() {
  let user = document.getElementById("user_input");
  let pwd = document.getElementById("pass_input");
  var Logs = {
    USER_INPUT: user.value,
    PWD_INPUT: pwd.value,
  };

  LogArr.push(Logs);

  if (user.value != "" && pwd.value != "") {
    for (let i = 0; i < UsersArr.length; i++) {
      if (
        LogArr[i].USER_INPUT != UsersArr[i].U_Name &&
        LogArr[i].PWD_INPUT != UsersArr[i].U_Pass
      ) {
        document.getElementById("user_input").value = "";
        document.getElementById("pass_input").value = "";
        document.getElementById("lod").style.opacity = 1;
        setInterval(() => {
          document.getElementById(
            "alt"
          ).innerHTML = `${LogArr[i].USER_INPUT} is not valid`;
        }, 1000);
        setInterval(() => {
          window.open("index.html", "_self");
        }, 5000);
        document.getElementById("user_input").focus();
      } else {
        document.getElementById("lod").style.opacity = 1;
        setInterval(() => {
          window.open("Users_Table.html", "_self");
        }, 3000);
      }
    }
  } else {
    alert("عبي بيانات ياصحبي 👌");
    window.open("index.html", "_self");
  }
}

function addUsers() {
  let username = document.getElementById("User_N");
  let userpassord = document.getElementById("User_P");
  if (username.value != "" && userpassord.value != "") {
    var Users = {
      U_Name: username.value,
      U_Pass: userpassord.value,
    };

    UsersArr.push(Users);
    localStorage.setItem("Users", JSON.stringify(UsersArr)); //SET LOCAL STORAGE
    show();
  }
}

function show() {
  let container = ``;
  for (let i = 0; i < UsersArr.length; i++) {
    container += `<tr><td>${i + 1}</td><td>${UsersArr[i].U_Name}</td><td>${
      UsersArr[i].U_Pass
    }</td><td><button class="btn btn-danger"onclick="Delete(${i})">Delete</button></td></tr>`;
  }

  document.getElementById("tbl").innerHTML = container;
  clear();
}

//delete
function Delete(index) {
  UsersArr.splice(index, 1);
  localStorage.setItem("Users", JSON.stringify(UsersArr));
  show();
}

function clear() {
  document.getElementById("User_N").value = "";
  document.getElementById("User_P").value = "";
  document.getElementById("User_N").focus();
}
// $(document).ready(function () {
//   $("#done").show();
// });
//insitliz array to save employee object
let UsersArr;
//GET LOCAL STORAGE
if (localStorage.getItem("Users") == null) {
  UsersArr = [];
} else {
  UsersArr = JSON.parse(localStorage.getItem("Users"));
  show();
}
function showTable() {
  document.getElementById("ss").style.opacity = 1;
  document.getElementById("ss").style.display = "block";
}
