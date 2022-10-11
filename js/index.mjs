import * as post from "./api/posts/index.mjs";
import * as templates from "./templates/index.mjs";
import * as postMethods from "./api/posts/index.mjs";
import { setCreatePostListener } from "./handlers/createPost.mjs";
import { setUpdatePostListener } from "./handlers/updatePost.mjs";
import { setLoginFormListener } from "./handlers/login.mjs";
import { setRegisterFormListener } from "./handlers/register.mjs";

const path = location.pathname;

if (path === "/profile/login/") {
  setLoginFormListener();
} else if (path === "/profile/register/") {
  setRegisterFormListener();
} else if (path === "/post/create/") {
  setCreatePostListener;
} else if (path === "/post/edit/") {
  setUpdatePostListener;
}

/* async function testTemplate() {
  const posts = await postMethods.getPosts(); */
/*  const post = posts[65]; */
/*   const container = document.querySelector("#post");
  templates.renderPostTemplates(posts, container);
} */

/* testTemplate(); */
/* post.createPost();
post.updatePost();
post.removePost();
post.getPost();
post.getPosts(); */

/* createPost({
  title: "Hello there",
  body: "skhfskjdfhdsj",
});

updatePost({
  id: 938,
  title: "hælla",
  body: "this is a changed and updated post.",
});

removePost(938);
 */
