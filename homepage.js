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

var contentDatabase = firebase.database().ref('/data')


var userData

function register() {
  const newUser = userDatabase.push()
  newUser.set(
    {
      username: "c4t-b01",
      password: "admin",
      fullname: "c4t-b01",
      address: "Ha Noi"
    }
  )

  console.log("Done")
}

function addNewData() {
  const newData = contentDatabase.push()
  newData.set(
    {
      title: "Javascript",
      content: "javascript",

    }
  )
}


function getAllData () {
  return userDatabase.on('value', function (snapshot) {
    console.log(snapshot.val())
    userData = snapshot.val()
    return snapshot.val()
  })
}

console.log(getAllData())

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

  var contentDatabase = firebase.database().ref('/data')

  function addNewData() {

    let newData = {
      id: Math.floor(Math.random()),
      title: "",
      content: "",
      image: "",
      created_at: Date.now()
    }

    const newData = contentDatabase.push()
    newData.set(
      {
        title:"abcxyz",
        content:"Loremngjsdjh",
        image: "",
        thumbnail:"",
      }
    )
  }
