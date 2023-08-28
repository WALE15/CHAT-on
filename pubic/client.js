const socket = ('io')

let name;
let textarea = document.querySelector("#textarea")
let messageArea = document.querySelector(".message_area")
do{
 name = prompt('please enter your name:')
} while(!name)

 textarea.addEventListener('keydown', (e) => {
   if(e.key ==="Enter"){
    sendMessage(e.target.value)
    if(e.preventDefault)
    return e.preventDefault();
    
   }
})



function sendMessage(msg){   

  msg ={
        user:name,
        message:msg
    }

    appendMessage(msg, 'outgoing')
}
function appendMessage(msg, type){
     let mainDiv = document.createElement('div')
     let className = type
     mainDiv.classList.add(className, 'message')

     let markup =`
     <h4>${msg.user}</h4>
     <p>${msg.message}</p>
     `

     mainDiv.innerHTML = markup

     messageArea.appendChild(mainDiv)
     
}