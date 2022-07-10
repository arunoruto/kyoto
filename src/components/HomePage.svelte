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
        class="image avatar_img"
        style="background-image: url({profile_image});"
      ></div>
    </div>
    <!-- End .avatar -->
    <div class="details">
      <h3 class="name">{ name }</h3>
      <p class="job">{ label }</p>

      <SocialRow list={basics.profiles}/>
    </div>
    <!-- End .details -->
  </div>
</div>

<style lang="scss">

.avatar_img {
  aspect-ratio: 1;
  background-position: 0% 20%;
}
</style>
