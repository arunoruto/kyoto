<script>
  export let publications;
  export let projects;

  function resumeDate2String(date_string) {
    return date_string.split('-').slice(0, 2).reverse().join('.')
  }
</script>

<div class="research">
  <div class="publications">
    <h3>
      <!-- <i class="fa-solid fa-briefcase"></i>
      <span>Work</span> -->
      Publications
    </h3>
    <br>
    <ol type="1">
      {#each publications as item, i}
      <li class="">
        <a href={ item.url }> { item.name } </a>
        <span class="text-ctp-subtext0">
          ({ item.releaseDate ? resumeDate2String(item.releaseDate).slice(-4) : "" })
          at { item.publisher }
        </span>
        <br>
        <q class="text-ctp-subtext0">{ item.summary }</q>
      </li>
      {/each}
    </ol>
  </div>
  <div class="projects">
    <h3>
      <!-- <i class="fa-solid fa-graduation-cap"></i>
      <span>Education</span> -->
      Projects
    </h3>
    <br>
    <ul>
      {#each projects as item, i}
      <li class="item">
        <a href={ item.url }> { item.name } </a>
        <p class="time-period">
          <i class="fa-solid fa-clock"></i>
          { resumeDate2String(item.startDate) } - { item.endDate ? resumeDate2String(item.endDate) : "present" }
        </p>
        <p>{ item.description }</p>
      </li>
      {/each}
    </ul>
  </div>
</div>

<style lang="scss">

.research {
  // .resume-container {
  //   border-left: .1rem solid rgba(128,128,128,.25);
  //   padding-left: 2rem;
  // }
  padding: 100px 0 50px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: stretch;
  column-gap: 10%;
}

// // .resume-container {
// //   border-left: .1rem solid rgba(128,128,128,.25);
// //   padding-left: 1rem;
// // }

.publications, .projects {
  width: 100%;
  flex-grow: 1;
}

// ol {
//   list-style-type: decimal;
// }

a {
  @apply text-ctp-text;
  @apply underline underline-offset-2;
}

h3 {
  @apply text-ctp-text;
}

q {
  quotes: "„" "“" "‘" "’";
  font-style: italic;
}

ol {
  counter-reset: item;
  margin-left: 0;
  padding-left: 0;

  // li {
  //   display: block;
  //   margin-bottom: .5em;
  //   margin-left: 2em;

  //   :before {
  //     @apply text-ctp-teal;
  //     display: inline-block;
  //     content: "[" counter(item) "] ";
  //     counter-increment: item;
  //     width: 2em;
  //     margin-left: -2em;
  //   }
  // }
}
ol > li {
  display: block;
  margin-bottom: .5rem;
  margin-left: 2rem;
}
ol > li::before {
  @apply text-ctp-teal;
  display: inline-block;
  content: "[" counter(item) "] ";
  counter-increment: item;
  width: 2em;
  margin-left: -2em;
}

// // .resume-container > .item::after {
// //   content: "";
// //   position: absolute;
// //   left: -2rem;
// //   top: 2rem;
// //   z-index: 11;
// //   -webkit-transform: translate(-100%,-50%);
// //   -ms-transform: translate(-100%,-50%);
// //   transform: translate(-100%,-50%);
// //   width: 2px;
// //   height: 40px;
// //   background: #aaa;
// // }

// .resume-container > .item::after {
//   content: "•";
//   font-size: 2rem;
//   position: absolute;
//   left: -2rem;
//   // top: 2rem;
//   // z-index: 11;
//   color: #aaa;
// }

// // .resume-container > .item::before {
// //   content: "";
// //   position: absolute;
// //   left: 0;
// //   top: 20%;
// //   z-index: -1;
// //   -webkit-transform: translate(-50%,-50%) rotate(45deg);
// //   -ms-transform: translate(-50%,-50%) rotate(45deg);
// //   transform: translate(-50%,-50%) rotate(45deg);
// //   -webkit-transform-origin: center center;
// //   -ms-transform-origin: center center;
// //   transform-origin: center center;
// //   width: 3.6rem;
// //   height: 3.6rem;
// //   background: inherit;
// // }

// .resume-container > .item {
//   display: -webkit-box;
//   display: -ms-flexbox;
//   display: flex;
//   -ms-flex-wrap: wrap;
//   flex-wrap: wrap;
//   -webkit-box-orient: vertical;
//   -webkit-box-direction: normal;
//   -ms-flex-direction: column;
//   flex-direction: column;
//   // margin-left: 5rem;
//   position: relative;
//   // padding: 2rem 2rem;
//   // background: #181818;
  
//   margin-bottom: 4rem !important;
// }


// // p.small {
// //   font-size: 2.1rem;
// //   line-height: 1.48em;
// //   letter-spacing: 0;
// //   font-weight: 400;
// // }

// // .m-b-1-5 {
// //   margin-bottom: 1.5rem !important;
// // }

// // .m-b-1 {
// //   margin-bottom: 1rem !important;
// // }

// // .m-l-2 {
// //   margin-left: 2rem !important;
// // }

// // .color-white {
// //   color: #000;
// // }

// // .item > p {
// //   font-size: 1.5rem;
// //   line-height: 1.4em;
// //   letter-spacing: -.005em;
// //   font-weight: 300;
// //   margin-top: 0;
// //   margin-bottom: 0rem;
// //   color: #7c7c7c;
// //   font-family: 'Source Sans Pro',sans-serif;
// // }

// @media(max-width: 767px) {
//   .resume {
//     flex-direction: column;
//   }
// }

h3 {
  text-align: center;
  font-size: 1.5rem;
}

</style>