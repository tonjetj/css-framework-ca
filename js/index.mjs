import { setRegisterFormListener } from "./handlers/register.mjs";
import { setLoginFormListener } from "./handlers/login.mjs";
import { createPost } from "./api/posts/create.mjs";
import { updatePost } from "./api/posts/update.mjs";

const path = location.pathname;

if (path === "/profile/login/") {
  setLoginFormListener();
} else if (path === "/profile/register/") {
  setRegisterFormListener();
}

createPost({
  title: "Hello there",
  body: "skhfskjdfhdsj",
});

updatePost({
  id: 938,
  title: "hælla",
  body: "this is a changed and updated post.",
});
