<template>
      <main>
        <div class="container">
        <section class="actus">
          <div>
            <img class="logo-img" src="~/assets/img/logo_rcu_25.jpg" alt="">
            <p id="rcu" class="font-weight-bold">RUGBY CLUB UZÈS</p>
          </div>
            <div>
            <h2 class="red-title font-weight-bold">Dernières actualités</h2>
            <a class="font-weight-bold btn-actus" href="#">Toutes les actus</a>
            <ul >
              <li class="post-act" v-for="(post, index) in posts" :key="index">
                <img class="post-img" :src="post.feature_image">
                <div class="content">
                  <span>{{ post.dateFormatted }}</span> 
                  <a class="post-title" :href="post.slug">{{ post.title }}</a>
                  <p>{{ post.excerpt }}</p>
                </div>
              </li>
            </ul>
          </div>
        </section>
        <section class="equipe">
          <h2 class="red-title font-weight-bold">Les équipes</h2>
          <a class="font-weight-bold btn-actus" href="#">Toutes les équipes</a>
        </section>
        <section class="ecole">
          <h2 class="red-title font-weight-bold">L'école de rugby</h2>
          <a class="font-weight-bold btn-actus" href="#">Plus d'infos</a>
          <div class="row mt-4">
            <div class="col-md-6">
              <img class="w-100" src="~/assets/img/img_accueil_bis.jpg" alt="">
            </div>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse inventore sequi delectus praesentium nostrum corrupti unde, fugit atque incidunt officiis voluptatum quisquam voluptatibus voluptate quas! Optio consequuntur vero dolorem obcaecati.</p>
        </section>
        </div>
      </main>
    
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
        month: 'long',
        day: 'numeric'
      };
      post.dateFormatted = new Intl.DateTimeFormat('fr', options).format(new Date(post.published_at));
    });
    
    return { posts: posts}
  }
}
</script>

<style lang="scss">
/*
.ecole img {
  display: block;
  width: 50%;
  margin-left: 1.5%;
}*/

.equipe {
  background-color: #EFF0F3;
}

.container {
  padding-left: 0;
  padding-right: 0;
  padding-bottom: 2em;
  margin-top: 2em;
  margin-bottom: 2em;
  box-shadow: 0 0 20px 0 rgb(165, 12, 12);
}

.actus {
  background-color: white;
}

#rcu {
  font-size: 3em;
  text-align: center;
}

.red-title {
  background: #cf2121;
  color: #FCD870;
  display: inline-block;
  padding: .5em 1em;
  margin-left: 15px;
}

.btn-actus {
  font-size: 0.9em;
  background: #cf2121;
  padding: .5em 1em;
  border-radius: 10px;
  color: #FCD870;
  float: right;
  transition-duration: 0.3s;
  margin-right: 20px;
  margin-top: 41px;
}

.btn-actus:hover {
  background-color: #fffc61;
  color: #bd1212;
}

  .logo-img{
    padding-top: 1em;
    display: block;
    margin-left: auto;
    margin-right: auto;
    border-radius: 20%;
  }

  .post-title{
    font-size: 1.2em;
  }

  .container ul {
    list-style-type: none;
    padding: 0;
  }

  main {

    li {
      background: rgb(255, 255, 255);
      border-radius: 4px;
      padding: .7em;
      margin: 1em;
      border: 1px solid #000000;
      box-shadow: 15px 21px 40px 0px rgba(0,0,0,0.2);
    }

    .post-img {
      width: 100%;
      border-radius: 4px;
      margin-bottom: .5em;
    }

    a {
      font-size: 1.5em;
      text-decoration: none;
      color: black;
      font-weight: bold;
      display: block;
      margin: -.1em 0 .2em;
      transition-duration: 0.2s;
    }

    a:hover {
      text-decoration: none;
      color: #cf2121;
    }

    h2 {
      margin-top: 1.5em;
      margin-bottom: 1em;
      text-transform: uppercase;
      font-size: 1.3em;
    }

    span {
      color: #E72727;
      text-transform: capitalize;
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

    .post-act {
      margin: 1em;
      max-width: 350px;
    }

    ul {
      display: flex;
    }

    .btn-actus {
      font-size: 0.9em;
      background: #cf2121;
      padding: .5em 2em;
      border-radius: 10px;
      color: #FCD870;
      float: right;
      transition-duration: 0.3s;
      margin-right: 20px;
      margin-top: 65px;
    }
    
  }
</style>
