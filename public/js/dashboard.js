const formHandler = async(event) =>{
    event.preventDefault();

    const title = document.querySelector('#title').value.trim()
    const body = document.querySelector('#body').value.trim()

    if(title && body){
        const response = await fetch('/api/posts',{
            method: 'POST',
            body: JSON.stringify({title,body}),
            headers:{'Content-Type': 'application/json'}
        })
        if(response.ok){
            document.location.replace('/dashboard')
        }else{
            alert('Failed to post')
        }
    }
}

 // Fetch the user's posts and add them to the post list
//  async function fetchMyPosts() {
//     try {
//       const response = await fetch('/api/posts/my-posts');
//       const postData = await response.json();

//       if (postData.length > 0) {
//         postList.innerHTML = '';
//         postData.forEach(post => {
//           const li = document.createElement('li');
//           li.innerHTML = `<a href="/post/${post.id}">${post.title}</a>`;
//           postList.appendChild(li);
//         });
//       } else {
//         postList.innerHTML = '<li>You have not created any posts yet.</li>';
//       }
//     } catch (err) {
//       console.error(err);
//     }
//   }

//   fetchMyPosts();







document.querySelector('.new-post').addEventListener('submit',formHandler)