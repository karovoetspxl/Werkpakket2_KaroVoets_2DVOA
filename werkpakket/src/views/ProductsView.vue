<template>
  <header class="header-products">
    <div class="products-headertekst">
      <h1>Shop</h1>
      <p>Our virtual shelves are brimming with a diverse collection of books, covering every genre, topic, and age
        group. From timeless classics to the latest bestsellers, from gripping mysteries to heartwarming romances,
        and from insightful non-fiction to children's picture books, there's something for every reader within our
        pages.</p>
    </div>
    <div class="products-boekenrek">
      <img src="@/assets/images/Boekenrek.jpg" alt="Boekenrek">
    </div>
  </header>

  <main class="main-products">
    <div class="filter">
      <div class="category">
        <form method="post" action="" enctype="text/plain">
          <label>Category</label><br>

          <label for="thriller"><input type="checkbox" id="thriller" name="Laptop"
                                       value="In bezit">Thriller</label>

          <label for="fantasy"><input type="checkbox" id="fantasy" name="Tablet"
                                      value="In bezit">Fantasy</label>

          <label for="mystery"><input type="checkbox" id="mystery" name="Tablet"
                                      value="In bezit">Mystery</label>
        </form>
      </div>
      <div class="category">
        <form method="post" action="" enctype="text/plain">
          <label>Language</label><br>

          <label for="english"><input type="checkbox" id="english" name="Laptop" value="In bezit">English</label>

          <label for="dutch"><input type="checkbox" id="dutch" name="Tablet" value="In bezit">Dutch</label>

          <label for="french"><input type="checkbox" id="french" name="Tablet" value="In bezit">French</label>
        </form>
      </div>
    </div>


    <div class="page">
      <div class="book">
        <div class="afb"><img src="@/assets/images/fourth-wing-1.jpg" alt="Fourth Wing"></div>
        <div class="inhoud">
          <h2>Fourth Wing</h2>
          <h3>Rebecca Yarros</h3>
          <p>Twenty-year-old Violet Sorrengail was supposed to enter the Scribe Quadrant, living a quiet life
            among books and history. Now, the commanding general - also known as her tough-as-talons mother -
            has ordered Violet to join the hundreds of candidates striving to become the elite of Navarre:
            dragon riders.</p>
        </div>
        <div class="prijs">
          <h2>€14,85</h2>
          <a href="page_fourthwing.html">
            <button>View</button>
          </a>
        </div>
      </div>
      <div class="book">
        <div class="afb"><img src="@/assets/images/book-lovers-7.jpg" alt="Book lovers"></div>
        <div class="inhoud">
          <h2>Book Lovers</h2>
          <h3>Emily Henry</h3>
          <p>Nora has been through enough break-ups to know she's the woman men date before they find their
            happy-ever-after. That's why Nora's sister has persuaded her to swap her desk in the city for a
            month's holiday in Sunshine Falls, North Carolina. It's a small town straight out of a romance
            novel, but instead of meeting sexy lumberjacks, handsome doctors or cute bartenders, Nora keeps
            bumping into...Charlie.</p>
        </div>
        <div class="prijs">
          <h2>€14,85</h2>
          <a href="#">
            <button>View</button>
          </a>
        </div>
      </div>
      <div class="book">
        <div class="afb"><img src="@/assets/images/better-than-the-movies.jpg" alt="bttm"></div>
        <div class="inhoud">
          <h2>Better than the movies</h2>
          <h3>Lynn Painter</h3>
          <p>Perpetual daydreamer Liz Buxbaum gave her heart to Michael a long time ago. But her cool, aloof
            forever crush never really saw her before he moved away. Now that he's back in town, Liz will do
            whatever it takes to get on his radar--and maybe snag him as a prom date--even befriend Wes
            Bennet.</p>
        </div>
        <div class="prijs">
          <h2>€14,85</h2>
          <a href="#">
            <button>View</button>
          </a>
        </div>
      </div>
      <div class="book">
        <div class="afb"><img src="@/assets/images/tomorrow.jpg" alt="tomorrow"></div>
        <div class="inhoud">
          <h2>Tomorrow and tomorrow and tomorrow</h2>
          <h3>Gabrielle Zevin</h3>
          <p>Two kids meet in a hospital gaming room in 1987. One is visiting her sister, the other is recovering
            from a car crash. The days and months are long there. Their love of video games becomes a shared
            world -- of joy, escape and fierce competition. But all too soon that time is over, fades from
            view.</p>
        </div>
        <div class="prijs">
          <h2>€14,85</h2>
          <a href="#">
            <button>View</button>
          </a>
        </div>
      </div>


      <div class="pagination">
        <a href="#">&laquo;</a>
        <a class="active" href="#">1</a>
        <a href="#">2</a>
        <a href="#">3</a>
        <a href="#">4</a>
        <a href="#">5</a>
        <a href="#">6</a>
        <a href="#">&raquo;</a>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "ProductsView"
}
</script>

<style scoped>

</style>