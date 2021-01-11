<template>
  <section class="section-form">

    <h1 class="heading-primary text-center mb-md font-bold">CONTACT</h1>
    <form name="contact" method="POST" data-netlify="true">
      <div class="search__item">
        <label class="search__label">お名前: <input class="search__input" type="text" name="name"></label>
      </div>
      <div class="search__item">
        <label class="search__label">メールアドレス: <input class="search__input" type="email" name="email"></label>
      </div>
      <div class="search__item">
        <label class="search__label">メッセージ内容: <textarea name="message" class="search__message"></textarea></label>
      </div>
      <div class="search__item text-center">
        <button class="btn slide-bg" type="submit">Send</button>
      </div>
    </form>
  </section>
</template>
