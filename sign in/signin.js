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

  const usersData = JSON.parse(localStorage.getItem('users'))
  
  // let username = "namnguyen"
  

  // // find() cua Javascript

  // let user = usersData.find(item => item.username === username)

  // console.log(user)


 
  

  