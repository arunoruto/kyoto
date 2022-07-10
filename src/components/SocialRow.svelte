<script>
  export let list;
</script>

<ul class="social">
  {#each list as social, i}
  <li>
    <a href={social.url} target="_blank" rel="noreferrer">
      <!-- <font-awesome-icon class="svg" :icon="['fab', social.network.toLowerCase()]"/> -->
      <i class="fa-brands fa-{social.network.toLowerCase()} svg"></i>
    </a>
  </li>
  {/each}
</ul>

<style lang="scss" scoped>
</style>
