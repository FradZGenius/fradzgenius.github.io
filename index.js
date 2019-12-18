var db = firebase.database()

var usrname = prompt("Enter a username: ")

db.ref('msgs/').on('value',function(snapshot){
  msgDisplay = document.createElement("h1")
  msgDisplay.innerHtml = snapshot.value().msg
  
})

function postMessage(message){
  db.ref('msgs/' + Math.random().toString(36).substring(7) + usrname).set({
    "msg":message,
    "usr":usrname
  })
}
