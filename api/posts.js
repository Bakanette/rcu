import GhostContentAPI from "@tryghost/content-api";

const api = new GhostContentAPI({
    url: 'https://bakanne.fr',
    key: 'e77cc90315096b672fdb747c5a',
    version: "v3"
  });

  export async function getPosts() {
    return await api.posts
    .browse({
      include: "tags,authors",
      filter: "tag:-Photos",
    })
    .catch(err => {
      console.error(err);
    })
  }

  export async function getSinglePost(postSlug) {
    return await api.posts
    .read({
      slug: postSlug
    })
    .catch(err => {
      console.error(err);
    })
  }

  export async function getPage(pageSlug) {
    return await api.pages
      .read({
        slug: pageSlug
      })
      .catch(err => {
        console.error(err);
      })
  }

  export async function getPostsPhotos() {
    return await api.posts
    .browse({
      include: "tags,authors",
      filter: "tag:Photos",
    })
    .catch(err => {
      console.error(err);
    })
  }