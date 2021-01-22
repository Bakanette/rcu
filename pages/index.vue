<template>
    <div class="container">
      <main>
        <h2>Latest thoughts</h2>
        <ul>
          <li v-for="(post, index) in posts" :key="index">
            <img :src="post.feature_image">
            <div class="content">
              <span>{{ post.dateFormatted }}</span> 
              <nuxt-link :to="{ path: post.slug }">{{ post.title }}</nuxt-link>
              <p>{{ post.excerpt }}</p>
            </div>
          </li>
        </ul>
      </main>
    </div>
</template>

<script>
import { getPosts } from '~/api/posts';

export default {
  async asyncData () 
  {
    const posts = await getPosts();

    posts.map(post => 
    {
      const options = 
      {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric'
      };
      post.dateFormatted = new Intl.DateTimeFormat(options).format(new Date(post.published_at));
    });
    
    return { posts: posts }
  }
}
</script>

<style lang="scss">

  .container ul {
    list-style-type: none;
    padding: 0;
  }

  body{
    background-color: #181a1b;
    color: lightgray;
  }

  main {

    li {
      background: white;
      border-radius: 1em;
      padding: .8em;
      margin: 1em 0;
      box-shadow: 15px 21px 40px 0px rgba(0,0,0,0.04);
    }

    img {
      width: 100%;
      border-radius: .5em;
    }

    .content{
      padding: .5em;
    }

    a {
      font-size: 1.5em;
      text-decoration: none;
      color: black;
      font-weight: bold;
      display: block;
      margin: -.1em 0 .2em;
    }

    h2 {
      margin-top: 3em;
      text-transform: uppercase;
      font-size: .8em;
    }

    span {
      color: #E72727;
      
    }

    p {
      color: black;
    }
  }

  @media only screen and (min-width: 768px)
  {
    body {
      font-size: 1.1em;
    }
  }
</style>
