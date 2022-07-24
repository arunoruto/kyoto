<script>
  import SocialRow from "./SocialRow.svelte";
  export let basics;
  let name = basics.name || '';
  let label = basics.label || '';
  let profile_image = basics.image || '';
</script>

<div class="kyoto_home">
  <div class="home_content">
    <div class="avatar">
      <div
        class="image avatar_img blob"
        style="background-image: url({profile_image});"
      ></div>
    </div>
    <!-- End .avatar -->
    <div class="details">
      <h3 class="name"><span>{ name }</span></h3>
      <p class="job">{ label }</p>

      <SocialRow list={basics.profiles}/>
    </div>
    <!-- End .details -->
  </div>
</div>

<style lang="scss">
  @font-face{
    font-family: 'Dot Digital-7';
    src: url('../assets/fonts/dot_digital-7.ttf') format('truetype');
  }

  h3 {
    font-family: 'Roboto';
    // &.name > span {
    //   font-family: 'Dot Digital-7';
    //   font-size: 5rem;
    // }
  }

  // .name span {
  //   font-family: 'Dot Digital-7';
  //   font-size: 10px;
  // }

  .avatar_img {
    aspect-ratio: 1;
    background-position: 0% 20%;
  }
</style>
