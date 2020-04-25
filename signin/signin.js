
let user = {
  username: "",
  password: ""
}

var firebaseConfig = {
  apiKey: "AIzaSyBLehoen_3ECaH49R3otGCWLpxOujgR5uc",
  authDomain: "techweb-17c29.firebaseapp.com",
  databaseURL: "https://techweb-17c29.firebaseio.com",
  projectId: "techweb-17c29",
  storageBucket: "techweb-17c29.appspot.com",
  messagingSenderId: "607479175084",
  appId: "1:607479175084:web:163e9fadc2468bca908c09",
  measurementId: "G-FYX2ZYWJL7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

var userDatabase = firebase.database().ref('/users')

userDatabase.on('value', function (data) {
  localStorage.setItem('users', JSON.stringify(Object.values(data.val())))
})
var usersData = JSON.parse(localStorage.getItem('users'))

function onChangeUsername(value) {
  user.username = value
}

function onChangePassword(value) {
  user.password = value
}
// find() cua Javascript

function submit() {
  let findUser = usersData.filter(item => item.username === user.username)
  // if (findUser !== undefined) {
  if (findUser.length > 0) {
    findUser.find(item => {
      if (item.password === user.password) {
        window.location.href = "../homepageaboutus/index.html"
      } else {
        alert("Wrong Username or Password")
      }
    })
  } else {
    alert("Wrong Username or Password")
  }
}

console.log(usersData)
