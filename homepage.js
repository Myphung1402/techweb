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

var userData = JSON.parse(localStorage.getItem('users')) // Sử dụng JSON.parse để chuyển đổi dữ liệu đã lấy ở (1) từ string sang dạng JSON và lấy từ dưới localStorage (2)

var contentData = JSON.parse(localStorage.getItem('contents')) // Sử dụng JSON.parse để chuyển đổi dữ liệu đã lấy ở (1) từ string sang dạng JSON và lấy từ dưới localStorage (2)

// Lay data tu phia Firebase Database ve
userDatabase.on('value', snapshot => {
  localStorage.setItem('users', JSON.stringify(Object.values(snapshot.val()))) // Lưu dữ liệu đã lấy về ở trên máy tính => Dữ liệu trả về sẽ được lưu ở dạng string (1)
  return Object.values(snapshot.val())
})

contentDatabase.on('value', function (snapshot) {
  localStorage.setItem('contents', JSON.stringify(Object.values(snapshot.val()))) //  Lưu dữ liệu đã lấy về ở trên máy tính => Dữ liệu trả về sẽ được lưu ở dạng string (1)
  return Object.values(snapshot.val())
})

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
  location.reload()
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

function getAllData() {
  contentData.map(item => {
    let html = `
    <p id="title">Title: <span>
      ${item.title}
    </span>
    </p>
    <p id="content">Content: 
      ${item.content}
    </p>
  `

    return document.getElementById('data').insertAdjacentHTML("beforeend", html)
    // return document.getElementById('data').innerHTML = html
  })

}

