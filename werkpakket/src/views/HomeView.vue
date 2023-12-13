<template>
  <header>
    <div class="header-text">
      <h1>Booktopia</h1>
      <p>Where every page is a new adventure.</p>
      <a href="products.html"><button>Shop here</button></a>
    </div>

    <img src="@/assets/images/BoekenHome.png" alt="Boekenhand">
  </header>

  <main>
    <div class="main-div-1">
      <div>
        <h2>Who are we?</h2>
        <div class="div-p">
          <p>
            Welcome to Booktopia, your literary haven in the heart of Hasselt. We are more than just a
            store; we are a sanctuary for book lovers, a gateway to countless worlds, and a place where stories
            come to life.</p>
          <p>So, whether you're sipping a cup of coffee at home, waiting for your next meeting,
            or traveling to far-off destinations, your literary companions are just a few clicks away. Booktopia
            invites you to embark on a literary journey that knows no bounds. Immerse yourself
            in the stories, knowledge, and inspiration that our virtual bookstore has to offer. Start exploring
            the world of words with us today.</p>
        </div>
      </div>
      <img src="@/assets/images/BoekHome2.jpg" alt="BoekenHome2">
    </div>

    <div class="main-div-2">
      <h2>In the spotlight</h2>
      <div class="div2-boeken">
        <div>
          <img src="@/assets/covers/fourth-wing-1.jpg" alt="Fourth Wing">
          <p class="boek-info">Fourth Wing</p>
          <p>Rebecca Yarros</p>
        </div>
        <div>
          <img src="@/assets/covers/book-lovers-7.jpg" alt="Book Lovers">
          <p class="boek-info">Book Lovers</p>
          <p>Emily Henry</p>
        </div>
        <div>
          <img src="@/assets/covers/better-than-the-movies.jpg" alt="Better than the movies">
          <p class="boek-info">Better than the movies</p>
          <p>Lynn Painter</p>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import NavComponent from "@/components/NavComponent.vue";
export default {
  name: "Home",
  components: {NavComponent}
}
</script>

<style scoped>

</style>