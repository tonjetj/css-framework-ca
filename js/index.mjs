import { setRegisterFormListener } from "./handlers/register.mjs";
import { setLoginFormListener } from "./handlers/login.mjs";
import * as post from "./api/posts/index.mjs";

const path = location.pathname;

if (path === "/profile/login/") {
  setLoginFormListener();
} else if (path === "/profile/register/") {
  setRegisterFormListener();
}

post.createPost();
post.updatePost();
post.removePost();
post.getPost();
post.getPosts();

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
