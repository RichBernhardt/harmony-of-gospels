<template>
<!-- The folder (About) must start with capital letter! -->
  <div class="root">
    <main>

      <details>
        <summary>Movie</summary>
        <section 
          class="aspect-ratio"
        >
          <iframe
            title="Jesus Of Nazareth (1977) - full movie"
            type="text/html"
            width="100%"
            height="100%"
            border="none"
            frameborder="0"
            allowfullscreen="true"
            src="https://www.youtube.com/embed/50IiF1rTTGQ?controls=1"
          />
        </section>
      </details>
      
      <details>
        <summary>About</summary>
        <section>
          <p>
            The goal of this project is to present the four Gospels (Jesus 
            words and acts) in an attractive and easy to understand way.
          </p>
          <p>
            The building blocks are events. Thus if an event is described 
            by multiple authors then all of those descriptions are grouped and 
            available in parallel. This grouping is called synoptic Gospels.
          </p>
          <p>
            On top of this well-known synoptic grouping, the events are listed 
            in chronological order mainly based on the thoughts shared on the 
            website 
            <a 
              target="_blank" 
              rel="noopener noreferrer"
              href="http://4gospels.info/"
            >
              4gospels.info.<span 
                style="display: inline-block; transform: scale(-1,1);">⇱</span>
            </a> 
            There are many alterations regarding the timeline, 
            however, the basic principle that organising the events based on feasts, 
            has been greatly utilised. Time is referenced in weeks and clearly 
            displayed throughout the document.
          </p>
          <p>
            An interactive map helps in visualising the events in space. The location 
            of the event visited for the last time is being highlighted on the map. 
            Nothing proves more clearly the need of a map than that the events of 
            "Jesus Helps A Non-Jewish Woman" (week 18-31) and "The Ten Lepers" (week 33) 
            are both positioned elsewhere in the timeline in line with common sense 
            and human capacities.
          </p>
          <p>
            There are both overlappings and conflicts between parallel Gospels. For a 
            smooth reading experience, wherever multiple author's descriptions are 
            available, the most complete and logically sound writing has been ordered 
            into the first position. These authors are displayed in [brackets]. Where 
            completeness and logic could only be guaranteed by multiple authors, then 
            an extra description has been created by merging verses together from these
            authors. The merge is strictly full-verse based. No verses have been partially 
            picked ever. These merged descriptions are named [Default]. The merging is 
            the reason for displaying verses with full reference (author, chapter, verse) 
            instead of verse numbers only.
          </p>
        </section>
      </details>

      <details>
        <summary>Connection</summary>
        <section>
          <p>
            Chronological order can be made in more than one way. 
            Merging verses of the same event from multiple 
            authors in a way that they provide completeness and a smooth 
            reading experience at the same time, is also not straightforward. 
            Locations and reference week ranges are not always obvious either. 
            Main titles, subtitles are also subjective.
            We can make the content of this site really good together only.
          </p>
          <p>
            Should you want to discuss your observations or thoughts, 
            please feel free to start or join a topic in this forum.
          </p>
          <p>
            <!-- https://ktquez.github.io/vue-disqus/setup.html#installation -->
            <!-- https://harmony-of-gospels.disqus.com/admin/install/settings/ -->
            <Disqus shortname='harmony-of-gospels' />
          </p>
          <p>
            In case the nature of your say is private, you can get in contact via 
            <a 
              href="mailto:gospelsharmony@gmail.com" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              gospelsharmony@gmail.com
            </a>
          </p>
        </section>
      </details>

      <details>
        <summary>Copyrights</summary>
        <section>
          <p>
            The current Bible version is New Century Version® (NCV). 
            Copyright © 2005 by Thomas Nelson, Inc.
            <br/>
            Except chapter 'The Family History Of Jesus', which uses the 
            Contemporary English Version (CEV) for brevity. Copyright © 
            1995 by American Bible Society.
          </p>
          <p>
            The chronological order is mainly based on thoughts shared on 
            <a 
              href="http://4gospels.info/"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <!-- https://stackoverflow.com/a/5409373 -->
              <!-- https://stackoverflow.com/a/15551842 -->
              <!-- https://mathiasbynens.github.io/rel-noopener -->
              4gospels.info<span 
                style="display: inline-block; transform: scale(-1,1);">⇱</span>
            </a>
            which was inspired by Michael Rood's observations. 
            However, no direct knowledge of Michael Rood's 
            works influenced the content of this site.
          </p>
          <p>
            This project employs an Attribution - Non-Commercial - Share Alike 
            4.0 International Creative Common License, which allows adaptations 
            of content to be shared as long as others share alike, but does not 
            allow commercial uses of its content.
          </p>
          <p>
            <a 
              href="https://github.com/RichBernhardt/harmony-of-gospels"
              target="_blank" 
              rel="noopener noreferrer"
            >
              Source code
              <span style="display: inline-block; transform: scale(-1,1);">⇱</span>
            </a>
          </p>
        </section>
      </details>
      
      <details>
        <summary>Giving</summary>
        <section>
          <p>
            Should the content of this site be valuable enough to you, 
            that you feel the urge to express your gratitude in an Earthly manner too, 
            then a monetary opportunity has been provided as follows.
          </p>
          <!-- https://www.paypal.com/donate/buttons/ -->
            <form 
              action="https://www.paypal.com/cgi-bin/webscr" 
              method="post" 
              target="_top"
            >
              <input type="hidden" name="cmd" value="_s-xclick" />
              <input type="hidden" name="hosted_button_id" value="DSHSNWKSTSUAA" />
              <input 
                type="image" 
                src="https://www.paypalobjects.com/en_US/GB/i/btn/btn_donateCC_LG.gif" 
                border="0" 
                name="submit" 
                title="PayPal - The safer, easier way to pay online!" 
                alt="Donate with PayPal button" />
              <img 
                alt="" 
                border="0" 
                src="https://www.paypal.com/en_GB/i/scr/pixel.gif" 
                width="1" 
                height="1" />
            </form>
            <p>
              Thank you!
            </p>
        </section>
      </details>

      <ButtonMenu />

    </main>
  </div>
</template>

<script>
import { Disqus } from 'vue-disqus'
import ButtonMenu from "~/components/ButtonMenu"

export default {
  components: {
    Disqus,
    ButtonMenu,
  },

}
</script>

<style scoped>

  body {
    margin: 0;
  }

  .root {
    display:flex;
    justify-content: center;
    background-color: lemonchiffon;
    padding: 10px;
    font-family: 'DejaVu Serif', serif;
    /* https://stackoverflow.com/a/20818206/ */
    line-height: 1.4;
  }

  main {
    margin-top: 2em;
    width: min(900px, 70%);
    margin-bottom: 60vh;
  }

  summary {
    font-size: 1.5em;
    font-weight: bold;
    margin: 0;
    padding-top: 10px;
    padding-bottom: 10px;
    outline: none;
  }

  summary::-webkit-details-marker {
    display: none;
  }

  summary:hover {
    background-color: #edee90;
    border-radius: 5px;
  }

  section {
    padding: 10px;
    padding-bottom: 2em;
    text-align: justify;
  }

  form {
    padding: 2em;
  }

  .aspect-ratio {
    /* to compensate <section> paddings */
    width: calc(100% - 20px);
    height: calc(min(900px, 70vw) * 3/5);
  }

  @media (max-width: 640px) {
    main {
      width: 100%;
    }
    .aspect-ratio {
    height: 60vw;
  }

  }

</style>