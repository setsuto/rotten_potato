<template>
  <div class="content-width">
    
    <section class="section-story">
      <div class="story" id="story">
        <div class="story__content">
          <div class="story__desc">
            <div class="story__title mb-md section">
              <h2><span>Rotten&nbsp;<span class="highlight" style="color: white;">Potato</span></span></h2>
            </div>
            <p class="mb-md">
              あなたの映画ライフを応援するブログです。<br>糞映画から良映画まで幅広く紹介します。<br>
              ユニクロの新作・セール情報等も合せて更新予定です。<br>
            </p>
            <button class="btn slide-bg">BLOG</button>
            <p v-on:mousemove="changeMousePosition(3, $event)">
              or Discover our story
            </p>
          </div>
          <div class="story__gallery">
            <img srcset="../assets/images/about_movie_04.jpg 300w, ../assets/images/about_movie_04.jpg 1000w"
              sizes="(max-width: 56.25em) 30vw, (max-width: 37.5em) 30vw, 300px" class="story__photo story__photo--1"
              alt="about_movie_03.jpg" src="../assets/images/about_movie_04.jpg">

            <img srcset="../assets/images/about_movie_03.jpg 300w, ../assets/images/about_movie_03.jpg 1000w"
              sizes="(max-width: 56.25em) 30vw, (max-width: 37.5em) 30vw, 300px" class="story__photo story__photo--2"
              alt="about_movie_03.jpg" src="../assets/images/about_movie_03.jpg">

            <img srcset="../assets/images/about_movie_02.jpg 300w, ../assets/images/about_movie_02.jpg 1000w"
              sizes="(max-width: 56.25em) 30vw, (max-width: 37.5em) 30vw, 300px" class="story__photo story__photo--3"
              alt="about_movie_02.jpg" src="../assets/images/about_movie_04.jpg">
          </div>
        </div>
        <div class="story__footer">
          <img class="story__downarrow" src="../assets/images/SVG/arrow.svg" alt="../assets/images/SVG/arrow.svg">
          <span class="story__scrolltext">scroll</span>
        </div>
      </div>
    </section>



    <section class="section-about">
      <div class="about ">
        <div class="about__gallerys">
          <img src="../assets/images/about_profile.png" sizes="(max-width: 767px) 50vw, 10vw"
            srcset="../assets/images/about_profile.png 800w, ../assets/images/about_profile.png 844w" alt=""
            class="image-2">
        </div>
        <div class="about__profile">
          <div class="about__profile--desc">
            <h3 class="heading-primary mb-sm">profile</h3>
            <p class="about__profile--para">
              27歳フリーター、趣味は映画とwebサイト制作。<br><br>
              好きな映画はマンチェスター・バイ・ザ・シー。<br>
              フロントエンドはvue.jsにはまってます。<br><br>
            </p>
          </div>
        </div>
      </div>
    </section>


    <section class="section-features">
      <div class="features">
        <div class="features__box">
          <h3 class="features__box--number">01</h3>
          <h4 class="features__box--heading">movie</h4>
          <p class="features__box--paragraph">NETFLIX、amazonPrimeで配信されているものを中心に、映画・ドラマの感想を更新・紹介します。</p>
        </div>
        <div class="features__box">
          <h3 class="features__box--number">02</h3>
          <h4 class="features__box--heading">coding</h4>
          <p class="features__box--paragraph">webサイトを作るのが趣味です。勉強中のCSS、vue.js、javascriptについての備忘録的な更新も行います。
          </p>
        </div>
        <div class="features__box">
          <h3 class="features__box--number">03</h3>
          <h4 class="features__box--heading">others</h4>
          <p class="features__box--paragraph">ユニクロや宅配アプリのセール、クーポンの最新情報をtwitterと合わせて更新します。
          </p>
        </div>
      </div>

    </section>










  </div>
</template>
