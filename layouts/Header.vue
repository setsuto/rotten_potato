<template>
    <header class="header">
        <div class="header__container">
            <a href="/" class="header__logo">
                <svg>
                    <use xlink:href="../assets/images/sprite.svg#icon-telegram"></use>
                </svg>
                <span>Rotten&nbsp;Potato</span>
            </a>

            <slot name="header-nav"></slot>

            <nav class="header__nav--social" id="socialNav">
                <ul class="header__ul">
                    <li class="header__li">
                        <a href="#" target="_blank" class="header__link">
                            <svg width="24px" height="24px">
                                <use xlink:href="../assets/images/sprite.svg#icon-instagram"></use>
                            </svg>
                        </a>
                    </li>
                    <li class="header__li">
                        <a href="#" target="_blank" class="header__link">
                            <svg width="24px" height="24px">
                                <use xlink:href="../assets/images/sprite.svg#icon-twitter"></use>
                            </svg>
                        </a>
                    </li>
                </ul>
            </nav>

            <div class="header__gnav">
                <input type="checkbox" class="gnav__checkbox" id="navi-toggle">
                <label for="navi-toggle" class="gnav__btn">
                    <span class="gnav__icon">&nbsp;</span>
                </label>
                <!-- <div class="gnav__background"></div> -->
                <slot name="mobile-nav"></slot>
            </div>
        </div>
        <!-- <p v-boder>HOME</p> -->
    </header>
</template>



<script>
    export default {
        data() {
            return {
                items: {
                    items: [{
                            url: 'index.html',
                            text: 'HOME'
                        },
                        {
                            url: 'about.html',
                            text: 'ABOUT'
                        },
                        {
                            url: 'blog.html',
                            text: 'BLOG'
                        },
                        {
                            url: 'portfolio.html',
                            text: 'PORTFOLIO'
                        },
                    ]
                }
            }
        }
    }
</script>
