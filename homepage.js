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

  contentDatabase.on('value',function (data) {
  localStorage.setItem('content', JSON.stringify(data.val()))
  })

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
      newData
    )
  }
