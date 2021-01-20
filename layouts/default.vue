<template>
  <div>
    <header>
      <!--
      <div class="container">
        <div class="navbar">
          <nuxt-link to="/" class="logo"><img src="../assets/img/logo_rcu_small.png" alt="Logo RCU"> </nuxt-link>
          <nav>
            <ul>
              <li><nuxt-link to="/actualite">Actualité</nuxt-link></li>
              <li><nuxt-link to="/equipes">Les équipes</nuxt-link></li>
              <li><nuxt-link to="/ecole">L'école de rugby</nuxt-link></li>
              <li><nuxt-link to="/partenaires">Les partenaires</nuxt-link></li>
              <li><nuxt-link to="/contacts">Contacts</nuxt-link></li>
            </ul>
          </nav>
        </div>
      </div>
      -->

      <b-navbar toggleable type="dark" variant="dark">
    <b-navbar-brand href="#">NavBar</b-navbar-brand>

    <b-navbar-toggle target="navbar-toggle-collapse">
      <template #default="{ expanded }">
        <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
        <b-icon v-else icon="chevron-bar-down"></b-icon>
      </template>
    </b-navbar-toggle>

    <b-collapse id="navbar-toggle-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item href="/actualite">Actualité</b-nav-item>
        <b-nav-item href="/equipes">Les équipes</b-nav-item>
        <b-nav-item href="/ecole">L'école de rugby</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
    </header>
    <nuxt/>
  </div>
</template>

<style>
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
