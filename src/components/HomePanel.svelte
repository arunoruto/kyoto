<script>
  import {fade, fly} from 'svelte/transition';
  // import '../app.postcss';
  import HomePage from './HomePage.svelte';
  import About from './About.svelte';
  import Experience from './Experience.svelte';
  import Research from './Research.svelte';
  import Credits from './Credits.svelte';
  import Modal,{getModal} from './Modal.svelte'
  // import { fade } from 'svelte/types/runtime/transition';

  let url = 'https://gist.githubusercontent.com/arunoruto/9d8bdf6e325077cff45b79e5f574e6e3/raw/resume.json';
  const promise = fetch(url).then(response => response.json(), error => {
    console.log("Something happened tho..")
    console.log(error)
  });

  let activetab = 1;
  let show_credits = false;

  function change_active_tab(new_tab) {
    activetab = new_tab;
  }

  let name = 'mirza'
  let selection	
	function setSelection(res){
		selection=res
	}

  let darkMode = false;
  function toggle() {
    darkMode = !darkMode;
    window.document.body.classList.toggle('dark');
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
          <i class="fa-solid fa-user svg"></i>
          <span class="menu_content">About</span>
        </button>

        <!-- <button on:click={() => change_active_tab(3)} class={activetab === 3 ? 'active' : '' }>
          <i class="fa-solid fa-house svg"></i>
          <span class="menu_content">Research</span>
        </button> -->

        <button on:click={() => change_active_tab(4)} class={activetab === 4 ? 'active' : '' }>
          <i class="fa-solid fa-building-columns svg"></i>
          <span class="menu_content">Experience</span>
        </button>

        <button on:click={() => change_active_tab(5)} class={activetab === 5 ? 'active' : '' }>
          <i class="fa-solid fa-atom svg"></i>
          <span class="menu_content">Research</span>
        </button>
        
      </div>
      <!-- <div class="panel_footer">
        <p on:click="{() => show_credits = !show_credits}">
          <a href="https://github.com/SoulEater45/kyoto">&copy; { new Date().getFullYear() } Kyoto</a>
        </p>
      </div> -->
      <div class="panel_footer">
        <button on:click="{()=>getModal().open()}">
          <!-- <a href="https://github.com/SoulEater45/kyoto">&copy; { new Date().getFullYear() } Kyoto</a> -->
          <!-- <i class="fa-solid fa-copyright svg"></i> -->
          <p>Impressum</p>
          <p>&copy; { new Date().getFullYear() } Kyoto</p>
        </button>
        <br>
        <br>
        <button on:click={toggle}>
          {darkMode ? 'Light' : 'Dark'} mode
        </button>
        <Modal>
          <Credits/>
        </Modal>
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
          <!-- <div class="tabcontent" transition:fade> -->
          <div class="tabcontent" in:fly="{{ x: 200, duration: 500, delay: 500}}" out:fly>
            <HomePage basics={resume.basics}/>
          </div>

          {:else if activetab === 2}
          <div class="tabcontent" in:fly="{{ x: 200, duration: 500, delay:500}}" out:fly>
            <About basics={resume.basics} />
          </div>

          <!-- <div v-if="activetab === 2" class="tabcontent">
            <AboutPage v-if="resume" :basics="resume.basics"/>
          </div> -->
        
          {:else if activetab === 4}
          <div class="tabcontent" in:fly="{{ x: 200, duration: 500, delay:500}}" out:fly>
            <Experience education={resume.education} work={resume.work} />
          </div>

          {:else if activetab === 5}
          <div class="tabcontent" in:fly="{{ x: 200, duration: 500, delay:500}}" out:fly>
            <Research publications={resume.publications} projects={resume.projects} />
          </div>

          
          <!-- <div v-if="activetab === 4" class="tabcontent">
            <News />
          </div> -->
          <!-- End News tabcontent -->
          <!-- <div v-if="activetab === 5" class="tabcontent">
            <Contact />
          </div> -->
          <!-- End Contact tabcontent -->

          <!-- {#if activetab === 2}
          <div class="tabcontent">
            <Credits/>
          </div>
          {/if} -->
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

  .leftpart {
    @apply bg-ctp-mantle;
  }

  .rightpart {
    @apply bg-ctp-base;
  }

  .panel_footer {
    @apply text-ctp-teal;
  }

  button {
    height: 30px;

    span {
      font-size: 1rem;
      // height: 18px;
    }
    text-align: left;
  }
  
  // .leftpart::before {
  //   content: '';
  //   display: block;
  //   position: absolute;
  //   left: 0;
  //   top: 0;
  //   width: 100%;
  //   height: 100%;
  //   opacity: 0.2;
  //   // box-shadow: inset 0 0 0 1000px rgba(var(--ctp-latte-base), .2);
  //   background-color: var(--ctp-latte-base);
  //   background-image: url(http://www.christian-woehler.de/IC1318_20220628a.jpg);
  //   // background-image: url(http://www.christian-woehler.de/IC1318_20220628b.jpg);
  //   filter: invert(100%);
  //   background-position: 50% 0;
  //   background-size: cover;
  //   z-index: -1;
  // }
  </style>
