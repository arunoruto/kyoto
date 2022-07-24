<script>
  export let basics;
  let isActive  = false;
  let isVisible = false;
  
  function showModal() {
    isActive  = true;
    isVisible = true;
  }
  function closeModal() {
    isActive  = false;
    isVisible = false;
  }
</script>

<div class="kyoto_about">
  <div class="about_image">
    <img src={ basics.image } alt="about" />
  </div>

  <div class="description">
    <h3 class="name">{ basics.name }</h3>
    <div class="description_inner">
      <div class="left">
        <p>{ basics.summary }</p>
        <div class="kyoto_button">
          <!-- <button class="ib-button" on:click={ () => showModal() }>Read More</button> -->
        </div>
      </div>
      <!-- End .left -->

      <div class="right">
        <ul>
          {#if basics.location.city && basics.location.countryCode}
          <li>
            <p>
              <span>Based in:</span>
              { basics.location.city }, { basics.location.countryCode }
            </p>
          </li>
          {/if}
          {#if basics.email}
          <li v-if="basics.email">
            <p>
              <span>Email:</span>
              <a href={ basics.email }>{ basics.email }</a>
            </p>
          </li>
          {/if}
          {#if basics.phone}
          <li>
            <p>
              <span>Phone:</span>
              <a href={ basics.phone }>{ basics.phone }</a>
            </p>
          </li>
          {/if}
        </ul>
        <!-- End ul -->
      </div>
      <!-- End .right -->
    </div>
  </div>

  <!-- Start Modalbox -->
  <transition name="fade">
    <!-- Modal -->
    {#if isVisible}
    <div on:click={ () => closeModal() } class={ isActive ? 'modal-mask' : ''} id="modal">
      <!-- <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-user" @click.stop> -->
      <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-user"></div>
        <div class="modal-content">
          <div class="kyoto_modalbox_about">
            <div class="close" on:click={ () => closeModal() }>
              <!-- <img
                class="svg"
                src="../assets/img/svg/cancel.svg"
                alt="cancel-img"
              /> -->
            </div>
            <!-- End .close -->
            <div class="my_box">
              <div class="left">
                <div class="about_title">
                  <h3>Photography Skills</h3>
                </div>
                <!-- End .abut_title -->
                <div class="kyoto_progress">
                  <div class="progress_inner">
                    <span
                      ><span class="label">Wedding Photography</span
                      ><span class="number">95%</span></span
                    >
                    <div class="background">
                      <div class="bar">
                        <div class="bar_in" style="width:95%"></div>
                      </div>
                    </div>
                  </div>
                  <!-- End progress_inner -->
                  <div class="progress_inner">
                    <span
                      ><span class="label">Lifestyle Photography</span
                      ><span class="number">80%</span></span
                    >
                    <div class="background">
                      <div class="bar">
                        <div class="bar_in" style="width:80%"></div>
                      </div>
                    </div>
                  </div>
                  <!-- End progress_inner -->
                  <div class="progress_inner">
                    <span
                      ><span class="label">Family Photography</span
                      ><span class="number">90%</span></span
                    >
                    <div class="background">
                      <div class="bar">
                        <div class="bar_in" style="width:90%"></div>
                      </div>
                    </div>
                  </div>
                  <!-- End progress_inner -->
                </div>
                <!-- End .kyoto_progress -->
              </div>
              <!-- End .left -->
              <div class="right">
                <div class="about_title">
                  <h3>Language Skills</h3>
                </div>
                <div class="kyoto_progress">
                  <div class="progress_inner">
                    <span
                      ><span class="label">English</span
                      ><span class="number">95%</span></span
                    >
                    <div class="background">
                      <div class="bar">
                        <div class="bar_in" style="width:95%"></div>
                      </div>
                    </div>
                  </div>
                  <div class="progress_inner">
                    <span
                      ><span class="label">Japanese</span
                      ><span class="number">90%</span></span
                    >
                    <div class="background">
                      <div class="bar">
                        <div class="bar_in" style="width:90%"></div>
                      </div>
                    </div>
                  </div>
                  <div class="progress_inner">
                    <span
                      ><span class="label">Arabian</span
                      ><span class="number">85%</span></span
                    >
                    <div class="background">
                      <div class="bar">
                        <div class="bar_in" style="width:85%"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- End .right -->
            </div>
            <div class="counter">
              <div class="about_title">
                <h3>Fun Facts</h3>
              </div>
              <ul>
                <li>
                  <div class="list_inner">
                    <h3>777+</h3>
                    <span>Projects Completed</span>
                  </div>
                </li>
                <li>
                  <div class="list_inner">
                    <h3>3K</h3>
                    <span>Happy Clients</span>
                  </div>
                </li>
                <li>
                  <div class="list_inner">
                    <h3>9K+</h3>
                    <span>Lines of Code</span>
                  </div>
                </li>
              </ul>
              <!-- End ul -->
            </div>
            <!-- End .counter -->
            <div class="partners">
              <div class="about_title">
                <h3>Our Partners</h3>
              </div>
              <!-- <Brand /> -->
            </div>
            <!-- End .partner -->
          </div>
          <!-- End kyoto_modalbox_about -->
        </div>
      </div>
    {/if}
  </transition>
  <!-- End Modalbox -->
</div>

<style lang="scss">

.kyoto_about .about_image img {
  aspect-ratio: 1.5;
  object-fit: cover;
  object-position: 0% 20%;
  // width: 100%;
}

</style>
