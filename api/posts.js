import GhostContentAPI from "@tryghost/content-api";

const api = new GhostContentAPI({
    url: 'https://bakanne.fr',
    key: 'e77cc90315096b672fdb747c5a',
    version: "v3"
  });

  export async function getPosts() {
    return await api.posts
    .browse({
      limit: "all",
      include: "tags,authors",
    })
    .catch(err => {
      console.error(err);
    })
  }