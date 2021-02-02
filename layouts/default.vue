<template>
  <div>
    <header>
      <b-navbar toggleable type="dark" variant="dark">
    <b-navbar-brand href="/">RCU</b-navbar-brand>

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
        <b-nav-item href="/galeriePhotos">Galerie photos</b-nav-item>
        <b-nav-item href="/partenaires">Les partenaires</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
    </header>
    <nuxt/>
  </div>
</template>

<style>
@media only screen and (min-width: 768px)
  {
    body {
      font-size: 1.1em;
    }
  }
</style>
