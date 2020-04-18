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

  function register() {
    const newUser = userDatabase.push()
    newUser.set(
      {
        username: "khanhdo1027",
        password: "khanhdo",
        fullname: "Khanh Do",
        address: "Hanoi"
      }
    )

    console.log("Done")
  }

  function addNewData() {
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