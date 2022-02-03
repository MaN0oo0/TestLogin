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
        for (let i = 1; i < UsersArr.length; i += 2) {
          if (
            LogArr[i].USER_INPUT != UsersArr[i].U_Name &&
            LogArr[i].PWD_INPUT != UsersArr[i].U_Pass
          ) {
            continue;
          } else {
            window.open("Users_Table.html", "_self");
          }
        }

        // document.getElementById(
        //   "alt"
        // ).textContent = `${LogArr[i].USER_INPUT} Not Found`;
        // // document.getElementById("lod").style.opacity = 1;
        // document.getElementById("user_input").value = "";
        // document.getElementById("pass_input").value = "";
        // document.getElementById("user_input").focus();
      } else {
        window.open("Users_Table.html", "_self");
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
    addUsers();
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
$(document).ready(function () {
  $("#reg").click(function () {
    window.open("Register.html", "_blank");
  });
});

let UsersArr;

//GET LOCAL STORAGE
if (localStorage.getItem("Users") == null) {
  UsersArr = [];
} else {
  UsersArr = JSON.parse(localStorage.getItem("Users"));
  show();
}
