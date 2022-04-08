const ajax = () => {

    const call = new XMLHttpRequest()

    call.open("GET", "https://jsonplaceholder.typicode.com/posts", true)
    call.send(null)
    if(call.readyState == 4 && call.r) {
        const result = JSON.eval(call.responseText)
        
    }

}

const ajaxFetch = () => {

fetch('https://jsonplaceholder.typicode.com/posts')
.then(response => response.json())
.then(response => console.log(response))
.catch(() => 'Alert error')

}


