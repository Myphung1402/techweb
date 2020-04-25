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
const usersData = JSON.parse(localStorage.getItem('users'))

let user = {
  username: "",
  password: ""
}

function onChangeUsername(value) {
  user.username = value
}

function onChangePassword (value) {
  console.log(value)
  user.password = value
}
// find() cua Javascript

function submit () {
  let findUser = usersData.find(item => item.username = user.username)
  if (findUser) {
    if (findUser.password === user.password) {
      alert("Login Success")
    } else {
      alert("Wrong Username or Password")
    }
  }
}

console.log(usersData)
