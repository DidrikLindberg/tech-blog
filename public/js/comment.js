const commentFormHandler = async(event) =>{
    event.preventDefault();

    const comment = document.querySelector('#comment').value.trim()
    const post_id = window.location.pathname.split('/').pop()
    
    console.log(post_id)
    console.log(comment)
    if(comment){
        const response = await fetch('/api/comments',{
            method: 'POST',
            body: JSON.stringify({comment, post_id}),
            headers:{'Content-Type': 'application/json'}
        })
        if(response.ok){
            document.location.replace(`/posts/${post_id}`)
        }else{
            alert('Failed to post')
        }
    }
}

document.querySelector('.new-comment-form').addEventListener('submit',commentFormHandler)