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
  function register() {
    const newUser = userDatabase.push()
    newUser.set(
      {
        username: "TA",
        password: "TA",
        fullname: "TA",
        address: "TA",
      }
    )
    console.log("Done")
  } 
  var contentDatabase = firebase.database().ref('/data')
  function addNewData () {
    const newData = contentDatabase.push()
    newData.set(
      {
       content: "dsada",
       image: "",
       thumbnail: "",
       title: ""
      }
    )
    console.log("Done")
  }
  
function getAllNewData () {
  return userDatabase.on('value', function(snapshot){
    console.log(snapshot.val())
    userData = snapshot.val()
    return snapshot.val()
  })
}
console.log(getAllNewData())