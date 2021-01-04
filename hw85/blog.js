(function () {
    'use strict';

    function checkFetch(r) {
        if (!r.ok) {
            throw new Error(`${r.status} ${r.statusText}`);
        }
        return r.json();
    }

    const usersList = $('#usersList');
    const postList = $('#postsList');

    displayHomePage();
    function displayHomePage() {
        fetch(`https:jsonplaceholder.typicode.com/users`)
            .then(r => checkFetch(r))
            .then(userData => {
                usersList.append(`<h2>Choose a blog</h2>`);
                console.log(userData);
                userData.forEach(user => {

                    $(`<li id="${user.id}">
            <p>Name: ${user.name}<p>
                    <span>Website: ${user.website}<span>
                    <p>Company: ${user.company.name}<p>
                  </li>`).appendTo(usersList);

                    $(`#${user.id}`).click(() => {

                        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`)
                            .then(r => checkFetch(r))
                            .then(posts => {
                                usersList.empty();
                                postList.empty();
                                postList.append(`<h3>Posts</h3>`);
                                console.log('posts', posts);
                                posts.forEach(post => {
                                    let commentsText = false;
                                    $(`<li id="post${post.id}">${post.title} ${post.body}</li>
                                    <button id="button${post.id}">show comments</button>`)
                                        .appendTo(postList);

                                    $(`#button${post.id}`).click(() => {
                                        if (!commentsText) {
                                            fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.userId}`)
                                                .then(r => checkFetch(r))
                                                .then(comments => {
                                                    $(`#button${post.id}`).text('hide comments');  
                                                    $(`#post${post.id}`).append(`<h5 id="${post.id}comments">Comments</h5>`);
                                                    console.log(comments);
                                                    comments.forEach(comment => {
                                                        $(`#post${post.id}`).append(`<span id="commentBody${post.id}">${comment.body}</span>`);
                                                    });
                                                    commentsText = !commentsText;
                                                })
                                                .catch(err => console.err(err));
                                        } else {
                                            $(`#button${post.id}`).text('show comments');                                  
                                            $(`#${post.id}comments, #commentBody${post.id}`).hide();
                                            commentsText = !commentsText;
                                        }
                                    });
                                });
                                postList.append(`<h4 class="homePageLink">Back To Home Page</h4>`);
                                $('.homePageLink').click(() => {
                                    usersList.empty();
                                    postList.empty();
                                    displayHomePage();
                                });
                            })
                            .catch(err => console.err(err));
                        console.log(user.name, user.website, user.company.name);
                    });
                });
            })
            .catch(err => console.error(err));
    }



}());