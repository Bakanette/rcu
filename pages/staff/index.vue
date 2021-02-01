<template>
    <div class="container">
      <main>
        <h1>{{page.title}}</h1>
        <div class="content">
            <div v-html="page.html">{{ page.html}}</div>
        </div>
      </main>
    </div>
</template>

<script>
import { getPage } from '~/api/posts';

export default {
  async asyncData () 
  {
    const page = await getPage('le-staff');  
    return { page: page }
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

    h1 {
      margin-top: 2em;
      text-transform: uppercase;
      font-size: 1.6em;
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

    main li {
      display: grid;
      grid-template-columns: 200px auto;
      grid-column-gap: 1em;
    }
  }
</style>
