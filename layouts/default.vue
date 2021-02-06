<template>
  <div>
    <header>
    <b-navbar toggleable type="dark" variant="dark" class="navbar">
      <b-navbar-brand href="/"><img src="~/assets/img/logo_rcu.jpg" alt=""></b-navbar-brand>

      <b-navbar-toggle target="navbar-toggle-collapse">
        <template #default="{ expanded }">
          <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
          <b-icon v-else icon="chevron-bar-down"></b-icon>
        </template>
      </b-navbar-toggle>

      <b-collapse id="navbar-toggle-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="/">Accueil</b-nav-item>
          <b-nav-item href="/actualites">Les actualités</b-nav-item>
          <b-nav-item href="/equipes">Les équipes</b-nav-item>
          <b-nav-item href="/ecole">L'école de rugby</b-nav-item>
          <b-nav-item href="/staff">Le staff</b-nav-item>
          <b-nav-item href="/galerie-photos">Galerie photos</b-nav-item>
          <b-nav-item href="/partenaires">Les partenaires</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    </header>
    <nuxt/>
    <footer>
      <div>

      </div>
    </footer>
  </div>
</template>

<style>

b-icon

footer {
  background-image: linear-gradient( 178.2deg,  rgba(118,8,23,1) 10.9%, rgba(158,12,33,1) 62.6% );
}

.navbar{
  padding: 0px 0px 0px 10px ;
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
