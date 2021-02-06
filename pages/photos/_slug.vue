<template>
    <div class="container">
        <main>
            <p>
      This page is rendered on the <strong>{{ rendering }}</strong>
    </p>
            <h1 class="test">{{ post.title }}</h1>
            <div class="content">
                <div v-html="post.html"/>
            </div>
        </main>
    </div>
</template>

<script>

import { getSinglePost } from '~/api/posts';

export default {
  async asyncData ({params}) {
    const post = await getSinglePost(params.slug);
    return { post: post,
    rendering: process.server ? 'server' : 'client'
     }
  }
}
</script>

<style lang="scss">
    
    .test {
        color: red;
    }

    header {
        height: 15em;
    }

    h1 {
        color: white;
        margin-bottom: 1em;
    }

    .content {
        background: white;
        border-radius: 1em;
        padding: 1em;
    }

    main {
        margin-top: -9em;
    }

    .content img {
        width: 100%;
    }

@media only screen and (min-width: 768px) {
    .content {
        padding: 2em;
    }
}

</style>
