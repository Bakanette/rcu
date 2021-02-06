<template>
  <div>
    <header>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand href="/"><img src="~/assets/img/logo_rcu.jpg" alt=""></b-navbar-brand>

      <b-navbar-toggle target="navbar-toggle-collapse">
        <template #default="{ expanded }">
          <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
          <b-icon v-else icon="chevron-bar-down"></b-icon>
        </template>
      </b-navbar-toggle>

      <b-collapse id="navbar-toggle-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="/">Accueil</b-nav-item>
          <b-nav-item href="/">Actualités</b-nav-item>
          <b-nav-item href="/">Équipes</b-nav-item>
          <b-nav-item href="/">École de rugby</b-nav-item>
          <b-nav-item href="/">Staff</b-nav-item>
          <b-nav-item href="/">Histoire</b-nav-item>
          <b-nav-item href="/galerie-photos">Galerie photos</b-nav-item>
          <b-nav-item href="/partenaires">Partenaires</b-nav-item>

        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="/">Boutique</b-nav-item>
          <b-nav-item href="/">Contact</b-nav-item>
          <b-nav-item href="https://www.facebook.com/rugby.uzes/"><img src="~/assets/img/facebook_icon.png" alt="" class="facebook-nav"></b-nav-item>
          <b-nav-item href="https://www.instagram.com/rugby_uzes/?hl=fr"><img src="~/assets/img/instagram_icon.png" alt="" class="instagram-nav"></b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    </header>
    <nuxt/>
    <footer>
      <div class="container footer-content">
        <div class="d-flex rs">
          <a href="https://www.facebook.com/rugby.uzes/" class="mb-3 mx-2 mt-2 rs-icon">
            <img src="~/assets/img/facebook_icon.png" alt="">
          </a>
          <a href="https://www.instagram.com/rugby_uzes/?hl=fr" class="mb-3 mx-2 mt-2">
            <img src="~/assets/img/instagram_icon.png" alt="">
          </a>
          <div class="d-flex flex-column mx-5 link-footer">
            <a href="#">Contact</a>
            <a href="#">Mentions légales</a>
          </div>
        </div>

      </div>
    </footer>
  </div>
</template>

<style scoped> 

.navbar.navbar-dark.bg-dark{
  padding: 0px 0px 0px 10px ;
  background-image: linear-gradient( 178.2deg,  rgb(99, 7, 7) 10.9%, rgb(197, 16, 16) 62.6% )!important;
}

.navbar-dark .navbar-nav .nav-link{
      color:white!important
    }

.link-footer a{
  text-decoration: none;
  color: white;
  transition-duration: 0.2s;
  font-size: 0.9em;
}

.link-footer a:hover{
  color: rgb(124, 124, 124);
}

footer .container {
  box-shadow: none;
}

.rs-icon, footer img {
  width: 35px;
  height: 35px;
}

.facebook-nav, .instagram-nav {
  widows: 30px;
  height: 30px;
}

.rs {
  padding-top: 2em;
  padding-left: 20em;
}

footer {
  background-image: linear-gradient( 178.2deg,  rgb(99, 7, 7) 10.9%, rgb(197, 16, 16) 62.6% );
  height: 130px;
}

.navbar img{
    border-radius: 20%;
}

@media only screen and (min-width: 768px)
  {
    body {
      font-size: 1.1em;
    }


  }
</style>
