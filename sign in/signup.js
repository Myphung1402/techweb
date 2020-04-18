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
  
  
  var userData = JSON.parse(localStorage.getItem('users')) // Sử dụng JSON.parse để chuyển đổi dữ liệu đã lấy ở (1) từ string sang dạng JSON và lấy từ dưới localStorage (2)
  
  
  // Lay data tu phia Firebase Database ve
  userDatabase.on('value', data => {
    localStorage.setItem('users', JSON.stringify(Object.values(data.val()))) // Lưu dữ liệu đã lấy về ở trên máy tính => Dữ liệu trả về sẽ được lưu ở dạng string (1)
  })
  

  
 let userInfo = {
   username : "",
   password: "",
   email: "",
   fullname:"",
   repassword:"" 
 }

 function onChangeUsername (value) {
   userInfo.username = value
 }
 function onChangePassword (value) {
  userInfo.password = value
}
function onChangeEmail (value) {
  userInfo.email = value
}
function onChangeFullname (value) {
  userInfo.fullname = value
}
function onChangeRePassword (value) {
  userInfo.repassword = value
} 
 function signup(){
   const newUser = userDatabase.push()
   newUser.set(
     userInfo
   )
 }
 