import { createPost } from "../api/posts/index.mjs";

export function setCreatePostListener() {
  const form = document.querySelector("#createPost");

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const form = e.target;
      const formData = new FormData(form);
      const makePosts = Object.fromEntries(formData.entries());

      // Send it to the API
      createPost(makePosts);
    });
  }
}
