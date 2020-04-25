let user = {
  username : "",
  password : ""
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

  const usersData = JSON.parse(localStorage.getItem('users'))
  
  userDatabase.on('value', data => {
    localStorage.setItem('users', JSON.stringify(Object.values(data.val()))) // Lưu dữ liệu đã lấy về ở trên máy tính => Dữ liệu trả về sẽ được lưu ở dạng string (1)
  })
  

  // find() cua Javascript
  function onChangeUsername (value) {
    user.username = value
  }
  function onChangePassword (value) {
    user.password = value
  }
  function Submit () {
    let findUser = usersData.find(item => item.username === user.username)
      if (findUser !== undefined) {
        if (user.password) {
          user.password === password
        } 
      }
      else {
        alert('Wrong Password')
      }
    }

  console.log(user)
