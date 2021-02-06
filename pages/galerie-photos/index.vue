<template>
    <div class="container">
      <main>
        <h1 class="red-title font-weight-bold">Galerie Photos</h1>
        <ul>
          <li v-for="(post, index) in posts" :key="index">
            <img :src="post.feature_image">
            <figcaption class="content">
              <a :href="post.slug">{{ post.title }}</a>
            </figcaption>
          </li>
        </ul>
      </main>
    </div>
</template>

<script>
import { getPostsPhotos } from '~/api/posts';

export default {
  async asyncData () 
  {
    const posts = await getPostsPhotos();
    return { posts: posts }
  }
}
</script>

<style lang="scss">

.red-title {
  background: #cf2121;
  color: #FCD870;
  display: inline-block;
  padding: .5em 1em;
  margin-left: 15px;
  font-size: 1.3em;
  margin-top: 3em;
      text-transform: uppercase
}

main {
  margin-bottom: 700px;
}

  .container ul {
    list-style-type: none;
    padding: 0;
  }

  main {

    ul {
      display: flex;
    }

    li {
      padding: .8em;
      margin: 1em 0;
    }

    img {
      width: 250px;
      border-radius: .5em;
    }

    .content{
      padding: .1em;
      background-color: #181a1b;
    }

    a {
      font-size: 1.5em;
      text-decoration: none;
      color: lightgray;
      font-weight: bold;
      display: block;
      margin: -.1em 0 .2em;
    }

    h1 {
      margin-top: 2.5em;
      text-transform: uppercase;
      font-size: 1.5em;
    }
  }

  @media only screen and (min-width: 768px)
  {
    body {
      font-size: 1em;
    }
  }
</style>
