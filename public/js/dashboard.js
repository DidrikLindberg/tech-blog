const formHandler = async(event) =>{
    event.preventDefault();

    const title = document.querySelector('#post-title').value.trim()
    const contents = document.querySelector('#body').value.trim()

    if(title && contents){
        const response = await fetch('/api/posts/',{
            method: 'POST',
            body: JSON.stringify({title,contents}),
            headers:{'Content-Type': 'application/json'}
        })
        if(response.ok){
            document.location.replace('/dashboard')
        }else{
            alert('Failed to post')
        }
    }
}

document.querySelector('.new-post').addEventListener('submit',formHandler)