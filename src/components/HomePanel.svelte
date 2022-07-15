<script>
  import HomePage from './HomePage.svelte';
  import Credits from './Credits.svelte';

  let url = 'https://gist.githubusercontent.com/SoulEater45/9d8bdf6e325077cff45b79e5f574e6e3/raw/resume.json';
  const promise = fetch(url).then(response => response.json(), error => {
    console.log("Something happened tho..")
    console.log(error)
  });

  let activetab = 1;
  let show_credits = false;

  function change_active_tab(new_tab) {
    activetab = new_tab;
    console.log(activetab)
  }
</script>

<div>
  <!-- Start leftpart -->
  <div class="leftpart">
    <div class="leftpart_inner">
      <!-- <div class="logo">
        <router-link to="/">
          <p>Home logo</p>
        </router-link>
      </div> -->

      <div class="menu">

        <button on:click={() => change_active_tab(1)} class={activetab === 1 ? 'active' : '' }>
          <i class="fa-solid fa-house svg"></i>
          <span class="menu_content">Home</span>
        </button>

        <button on:click={() => change_active_tab(2)} class={activetab === 2 ? 'active' : '' }>
          <i class="fa-solid fa-copyright svg"></i>
          <span class="menu_content {activetab === 2 ? 'active' : '' }">Credits</span>
        </button>
        
      </div>
      <div class="panel_footer">
        <p on:click="{() => show_credits = !show_credits}">
          <a href="https://github.com/SoulEater45/kyoto">&copy; { new Date().getFullYear() } Kyoto</a>
        </p>
      </div>
      <!-- End panel footer -->
    </div>
  </div>
  <!-- End leftpart -->

  <!-- Start rightpart -->
  <div class="rightpart">
    <div class="rightpart_in">
      <div class="kyoto_section">
        {#await promise then resume}            
        <div class="container">
          {#if activetab === 1}
          <div class="tabcontent">
            <HomePage basics={resume.basics}/>
          </div>
          {/if}

          <!-- <div v-if="activetab === 2" class="tabcontent">
            <AboutPage v-if="resume" :basics="resume.basics"/>
          </div>
          
          <div v-if="activetab === 3" class="tabcontent">
            <ExperiencePage v-if="resume" :education="resume.education" :work="resume.work" />
          </div> -->
          
          <!-- <div v-if="activetab === 4" class="tabcontent">
            <News />
          </div> -->
          <!-- End News tabcontent -->
          <!-- <div v-if="activetab === 5" class="tabcontent">
            <Contact />
          </div> -->
          <!-- End Contact tabcontent -->

          {#if activetab === 2}
          <div class="tabcontent">
            <Credits/>
          </div>
          {/if}
        </div>
        {/await}
      </div>
    </div>
  </div>
  <!-- End rightpart -->
</div>

<style lang="scss" scoped>
  // #app {
  //   font-family: Avenir, Helvetica, Arial, sans-serif;
  //   -webkit-font-smoothing: antialiased;
  //   -moz-osx-font-smoothing: grayscale;
  //   text-align: center;
  //   color: #2c3e50;
  //   margin-top: 60px;
  // }

  button {
    height: 30px;

    span {
      font-size: 1rem;
      // height: 18px;
    }
  }
  
  .leftpart::before {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0.2;
    background-image: url(http://www.christian-woehler.de/IC1318_20220628a.jpg);
    // background-image: url(http://www.christian-woehler.de/IC1318_20220628b.jpg);
    filter: invert(100%);
    background-position: 50% 0;
    background-size: cover;
    z-index: -1;
  }
  </style>