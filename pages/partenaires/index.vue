<template>
    <div class="container">
      <main>
        <h1>{{page.title}}</h1>
        <div class="content">
            <div v-html="page.html">{{ page.html}}</div>
        </div>
      </main>
      <div class="row">
      <!-- Gallery item -->
      <div class="col-xl-3 col-lg-4 col-md-6 mb-4">
        <div class="bg-white rounded shadow-sm"><img src="~/assets/img/partenaires/Atzana_1.png" alt="" class="img-fluid card-img-top">
          <div class="p-4">
            <h5 class="text-dark">Atzana</h5>
            <p class="small text-muted mb-0">Atzana magasin de décoration, mobilier et aménagement intérieur est situé 5 place Albert 1er à Uzès.</p>
            <a class="btn-savoir font-weight-bold " href="https://atzana.com" >En savoir plus</a>
          </div>
        </div>
      </div>
      <!-- End -->

      <!-- Gallery item -->
      <div class="col-xl-3 col-lg-4 col-md-6 mb-4">
        <div class="bg-white rounded shadow-sm"><img src="~/assets/img/partenaires/Fromagerie_1.png" alt="" class="img-fluid card-img-top">
          <div class="p-4">
            <h5 class="text-dark">Fromagerie Albert</h5>
            <p class="small text-muted mb-0">Accueillants, souriants, toujours de bons conseils, Valentine et Frédéric CHAIX
              vous reçoivent place Albert Ier dans un univers totalement dédié aux plaisirs de la table.</p>
            <a class="font-weight-bold btn-savoir" href="https://www.facebook.com/fromagerie.albert">En savoir plus</a>
          </div>
        </div>
      </div>
      <!-- End -->

      <!-- Gallery item -->
      <div class="col-xl-3 col-lg-4 col-md-6 mb-4">
        <div class="bg-white rounded shadow-sm"><img src="~/assets/img/partenaires/Mat_1.png" alt="" class="img-fluid card-img-top">
          <div class="p-4">
            <h5 class="text-dark">Bianucci</h5>
            <p class="small text-muted mb-0">Partenaire du Rugby Club Uzès, Bianucci Matériaux est située 22 Boulevard Charles Gide à Uzès. 
            L’agence a un espace dédié à l’aménagement intérieur (service dressing, placard, cuisine, menuiserie).</p>
            <a class="font-weight-bold btn-savoir" href="https://www.bianucci-materiaux.com">En savoir plus</a>
          </div>
        </div>
      </div>
      <!-- End -->

      <!-- Gallery item -->
      <div class="col-xl-3 col-lg-4 col-md-6 mb-4">
        <div class="bg-white rounded shadow-sm"><img src="~/assets/img/partenaires/Meduz_1.jpg" alt="" class="img-fluid card-img-top">
          <div class="p-4">
            <h5 class="text-dark">Meduz</h5>
            <p class="small text-muted mb-0">MEDUZ, brasserie artisanale située à Uzès direction Montaren est partenaire du Rugby Club d’Uzès depuis 2017. 
              C’est la bière idéale des 3èmes mi-temps et de la convivialité !</p>
              <a class="font-weight-bold btn-savoir" href="https://www.meduz.fr"> En savoir plus</a>
          </div>
        </div>
      </div>
      <!-- End -->

      <!-- Gallery item -->
      <div class="col-xl-3 col-lg-4 col-md-6 mb-4">
        <div class="bg-white rounded shadow-sm"><img src="~/assets/img/partenaires/Vin_1.jpg" alt="" class="img-fluid card-img-top">
          <div class="p-4">
            <h5 class="text-dark">La cave d'Uzes</h5>
            <p class="small text-muted mb-0">La cave d’Uzès située à Pont des Charrettes, propose des vins d’artisans vignerons du Duché d’Uzès, 
              du Languedoc mais aussi des autres terroirs français</p>
              <a class="font-weight-bold btn-savoir" href="https://www.lacaveduzes.fr"> En savoir plus</a>
          </div>
        </div>
      </div>
      <!-- End -->

      <!-- Gallery item -->
      <div class="col-xl-3 col-lg-4 col-md-6 mb-4">
        <div class="bg-white rounded shadow-sm"><img src="~/assets/img/partenaires/default_artenaire.png" alt="" class="img-fluid card-img-top">
          <div class="p-4">
            <h5 class="text-dark">Partenaire</h5>
            <p class="small text-muted mb-0">Ajouter un partenaire</p>
            <div class="d-flex align-items-center justify-content-between rounded-pill bg-light px-3 py-2 mt-4">
            </div>
          </div>
        </div>
      </div>
      <!-- End -->

      <!-- Gallery item -->
      <div class="col-xl-3 col-lg-4 col-md-6 mb-4">
        <div class="bg-white rounded shadow-sm"><img src="~/assets/img/partenaires/default_artenaire.png" alt="" class="img-fluid card-img-top">
          <div class="p-4">
            <h5 class="text-dark">Partenaire</h5>
            <p class="small text-muted mb-0">Ajouter un partenaire</p>
            <div class="d-flex align-items-center justify-content-between rounded-pill bg-light px-3 py-2 mt-4">
            </div>
          </div>
        </div>
      </div>
      <!-- End -->

      <!-- Gallery item -->
      <div class="col-xl-3 col-lg-4 col-md-6 mb-4">
        <div class="bg-white rounded shadow-sm"><img src="~/assets/img/partenaires/default_artenaire.png" alt="" class="img-fluid card-img-top">
          <div class="p-4">
            <h5 class="text-dark">Partenaire</h5>
            <p class="small text-muted mb-0">Ajouter un partenaire</p>
            <div class="d-flex align-items-center justify-content-between rounded-pill bg-light px-3 py-2 mt-4">
            </div>
          </div>
        </div>
      </div>
      <!-- End -->

      <!-- Gallery item -->
      <div class="col-xl-3 col-lg-4 col-md-6 mb-4">
        <div class="bg-white rounded shadow-sm"><img src="~/assets/img/partenaires/default_artenaire.png" alt="" class="img-fluid card-img-top">
          <div class="p-4">
            <h5 class="text-dark">Partenaire</h5>
            <p class="small text-muted mb-0">Ajouter un partenaire</p>
            <div class="d-flex align-items-center justify-content-between rounded-pill bg-light px-3 py-2 mt-4">
            </div>
          </div>
        </div>
      </div>
      <!-- End -->

      <!-- Gallery item -->
      <div class="col-xl-3 col-lg-4 col-md-6 mb-4">
        <div class="bg-white rounded shadow-sm"><img src="~/assets/img/partenaires/default_artenaire.png" alt="" class="img-fluid card-img-top">
          <div class="p-4">
            <h5 class="text-dark">Partenaire</h5>
            <p class="small text-muted mb-0">Ajouter un partenaire</p>
            <div class="d-flex align-items-center justify-content-between rounded-pill bg-light px-3 py-2 mt-4">
            </div>
          </div>
        </div>
      </div>
      <!-- End -->

      <!-- Gallery item -->
      <div class="col-xl-3 col-lg-4 col-md-6 mb-4">
        <div class="bg-white rounded shadow-sm"><img src="~/assets/img/partenaires/default_artenaire.png" alt="" class="img-fluid card-img-top">
          <div class="p-4">
            <h5 class="text-dark">Partenaire</h5>
            <p class="small text-muted mb-0">Ajouter un partenaire</p>
            <div class="d-flex align-items-center justify-content-between rounded-pill bg-light px-3 py-2 mt-4">
            </div>
          </div>
        </div>
      </div>
      <!-- End -->

      <!-- Gallery item -->
      <div class="col-xl-3 col-lg-4 col-md-6 mb-4">
        <div class="bg-white rounded shadow-sm"><img src="~/assets/img/partenaires/default_artenaire.png" alt="" class="img-fluid card-img-top">
          <div class="p-4">
            <h5 class="text-dark">Partenaire</h5>
            <p class="small text-muted mb-0">Ajouter un partenaire</p>
            <div class="d-flex align-items-center justify-content-between rounded-pill bg-light px-3 py-2 mt-4">
            </div>
          </div>
        </div>
      </div>
      <!-- End -->

    </div>
    <div class="py-5 text-right"><a href="#" class="btn btn-dark px-5 py-3 text-uppercase">Montre m'en plus </a></div>
  </div>
</template>



<script>
import { getPage } from '~/api/posts';

export default {
  async asyncData () 
  {
    const page = await getPage('partenaires');  
    return { page: page }
  }
}
</script>

<style lang="scss">

h1 {
      margin-top: 3em;
      text-transform: uppercase;
      font-size: 1.5em;
    }

.content{
      padding: .5em;
    }

.btn-savoir {
  font-size: 0.9em;
  background: #cf2121;
  padding: .5em 3em;
  margin: 1em 0;
  display: inline-block;
  border-radius: 10px;
  color: #FCD870;
  transition-duration: 0.3s;
}

.btn-savoir:hover{
  background-color: #fffc61;
  color: #bd1212;;
}

.btn-savoir:link {
  text-decoration: none;
}

body {
  background-color: lightgray;
}

.banner {
  background: #a770ef;
  background: -webkit-linear-gradient(to right, #a770ef, #cf8bf3, #fdb99b);
  background: linear-gradient(to right, #a770ef, #cf8bf3, #fdb99b);
}


  @media only screen and (min-width: 768px)
  {
    body {
      font-size: 1.1em;
    }
  }
</style>
