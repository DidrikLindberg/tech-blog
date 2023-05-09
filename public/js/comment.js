const commentFormHandler = async(event) =>{
    event.preventDefault();

    const comment = document.querySelector('#text').value.trim()
    const post_id = window.location.pathname.split('/').pop()
    
    console.log(post_id)
    console.log(comment)
    if(comment && post_id){
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

const toggleCommentForm = async(event) =>{
    event.preventDefault();

    const comment = document.querySelector('#text').value.trim()
    const post_id = window.location.pathname.split('/').pop()
    
    console.log(post_id)
    console.log(comment)
    if(comment && post_id){
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




// const form = document.querySelector('form');
// form.addEventListener('submit', async (event) => {
//   event.preventDefault();
//   const commentInput = document.getElementById('comment');
//   const postId = window.location.pathname.split('/')[2];
//   const response = await fetch('/api/comments', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       post_id: postId,
//       comment: commentInput.value,
//     }),
//   });
//   if (response.ok) {
//     window.location.reload();
//   }
// });


function toggleCommentForm(postId) {
    const form = document.getElementById(`comment-form-${postId}`);
    form.style.display = form.style.display === 'none' ? 'block' : 'none';
  }
  
  document.querySelectorAll('.submit').addEventListener('click', toggleCommentForm);


document.querySelector('.new-comment-form').addEventListener('submit',commentFormHandler)