import { API_SOCIAL_URL } from "../constants.mjs";
import { authFetch } from "../authFetch.mjs";

const action = "/posts";

export async function getPosts() {
  const updatePostURL = `${API_SOCIAL_URL}${action}`;

  const response = await authFetch(updatePostURL);

  return await response.json();
}

export async function getPost(id) {
  if (!id) {
    throw new Error("GET requires a postID");
  }
  const getPostURL = `${API_SOCIAL_URL}${action}/${id}`;

  const response = await authFetch(getPostURL);

  return await response.json();
}
