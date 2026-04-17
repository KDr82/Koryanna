class JavaHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header class="header">
            <div class="header__logo"><a href="index.html" alt="Home"></a></div>
            <div class="header__menu__l">
                    <button type="button" class="button__menu" onclick="document.location='nuntia/index.html'">
                        <div class="button__menu-top">Nuntia</div>
                        <div class="button__menu-bottom"></div>
                        <div class="button__menu-base"></div>
                    </button>
                    <button type="button" class="button__menu" onclick="document.location='sodalitas/index.html'">
                        <div class="button__menu-top">Sodalitas</div>
                        <div class="button__menu-bottom"></div>
                        <div class="button__menu-base"></div>
                    </button>
                    <button type="button" class="button__menu" onclick="document.location='apopsis/index.html'">
                        <div class="button__menu-top">Apopsis</div>
                        <div class="button__menu-bottom"></div>
                        <div class="button__menu-base"></div>
                    </button>
                    <button type="button" class="button__menu" onclick="document.location='regnum/index.html'">
                        <div class="button__menu-top">Regnum</div>
                        <div class="button__menu-bottom"></div>
                        <div class="button__menu-base"></div>
                    </button>
                    <button type="button" class="button__menu" onclick="document.location='pandektes/index.html'">
                        <div class="button__menu-top">Pandektes</div>
                        <div class="button__menu-bottom"></div>
                        <div class="button__menu-base"></div>
                    </button>
                    <button type="button" class="button__menu" onclick="document.location='cultura.html'">
                        <div class="button__menu-top">Cultura</div>
                        <div class="button__menu-bottom"></div>
                        <div class="button__menu-base"></div>
                    </button>
                    <button type="button" class="button__menu" onclick="document.location='civitas.html'">
                        <div class="button__menu-top">Civitas</div>
                        <div class="button__menu-bottom"></div>
                        <div class="button__menu-base"></div>
                    </button>
            </div>
            <div class="header__menu__m">
                    <button type="button" class="button__menu" onclick="document.location='nuntia/index.html'">
                        <div class="button__menu-top">Nuntia</div>
                        <div class="button__menu-bottom"></div>
                        <div class="button__menu-base"></div>
                    </button>
                    <button type="button" class="button__menu" onclick="document.location='sodalitas/index.html'">
                        <div class="button__menu-top">Sodalitas</div>
                        <div class="button__menu-bottom"></div>
                        <div class="button__menu-base"></div>
                    </button>
                    <button type="button" class="button__menu" onclick="document.location='apopsis/index.html'">
                        <div class="button__menu-top">Apopsis</div>
                        <div class="button__menu-bottom"></div>
                        <div class="button__menu-base"></div>
                    </button>
                    <button type="button" class="button__menu" onclick="document.location='regnum/index.html'">
                        <div class="button__menu-top">Regnum</div>
                        <div class="button__menu-bottom"></div>
                        <div class="button__menu-base"></div>
                    </button>
                    <button type="button" class="button__menu" onclick="document.location='pandektes/index.html'">
                        <div class="button__menu-top">Pandektes</div>
                        <div class="button__menu-bottom"></div>
                        <div class="button__menu-base"></div>
                    </button>
                    <button type="button" class="button__menu" onclick="document.location='cultura.html'">
                        <div class="button__menu-top">Cultura</div>
                        <div class="button__menu-bottom"></div>
                        <div class="button__menu-base"></div>
                    </button>
                    <button type="button" class="button__menu" onclick="document.location='civitas.html'">
                        <div class="button__menu-top">Civitas</div>
                        <div class="button__menu-bottom"></div>
                        <div class="button__menu-base"></div>
                    </button>
            </div>
            <div class="menu__burger">
                <div class="frame">
                    <div class="inner-frame">
                        <div class="button__burger"><p>&#9776;</p></div>
                    </div>
                </div>
            </div>
            <nav class="navbar">
                <ul class="navbar__list">
                    <li><a href="nuntia/index.html" class="navbar__link">Nuntia</a></li>
                    <li><a href="sodalitas/index.html" class="navbar__link">Sodalitas</a>
                        <span class="navbar__arrow"></span>
                        <ul class="navbar__sublist">
                            <li><a href="sodalitas/about_us.html" class="navbar__sublink">De Sodalitatis</a></li>
                            <li><a href="sodalitas/administration.html" class="navbar__sublink">Administratio</a></li>
                            <li><a href="sodalitas/legislation.html" class="navbar__sublink">Lex</a></li>
                            <li><a href="sodalitas/dignitatum/index.html" class="navbar__sublink">Notitia Dignitatum</a></li>
                        </ul>
                    </li>
                    <li><a href="apopsis/index.html" class="navbar__link">Apopsis</a>
                        <span class="navbar__arrow"></span>
                        <ul class="navbar__sublist">
                            <li><a href="apopsis/methodology.html" class="navbar__sublink">Methodologia</a></li>
                            <li><a href="apopsis/articles.html" class="navbar__sublink">Articuli</a></li>
                            <li><a href="apopsis/polemics.html" class="navbar__sublink">Polemikos</a></li>
                        </ul>
                    </li>
                    <li><a href="regnum/index.html" class="navbar__link">Regnum</a>
                        <span class="navbar__arrow"></span>
                        <ul class="navbar__sublist">
                            <li><a href="regnum/hist_koryanna.html" class="navbar__sublink">Historia Coriannae</a></li>
                            <li><a href="regnum/hist_igf.html" class="navbar__sublink">Historia Praetorianae</a></li>
                            <li><a href="regnum/government.html" class="navbar__sublink">Rectio</a></li>
                            <li><a href="regnum/high_command.html" class="navbar__sublink">Praetorium</a></li>
                            <li><a href="regnum/economy.html" class="navbar__sublink">Oeconomia</a></li>
                        </ul>
                    </li>
                    <li><a href="pandektes/index.html" class="navbar__link">Pandektes</a>
                        <span class="navbar__arrow"></span>
                        <ul class="navbar__sublist">
                            <li><a href="pandektes/astrography/index.html" class="navbar__sublink">Astrographia</a></li>
                            <li><a href="pandektes/astropolitics/index.html" class="navbar__sublink">Astropolitika</a></li>
                            <li><a href="pandektes/documents/index.html" class="navbar__sublink">Documenta</a></li>
                            <li><a href="pandektes/gme/index.html" class="navbar__sublink">Magnum Lexicon Militare</a></li>
                            <li><a href="pandektes/linguistics/index.html" class="navbar__sublink">Linguisticus et Cultura</a></li>
                            <li><a href="pandektes/mysticism/index.html" class="navbar__sublink">Mystica</a></li>
                            <li><a href="pandektes/prosopography/index.html" class="navbar__sublink">Prosopographia</a></li>
                            <li><a href="pandektes/technopedia/index.html" class="navbar__sublink">Technopaedia</a></li>
                            <li><a href="pandektes/uniformology/index.html" class="navbar__sublink">Uniformologia</a></li>
                            <li><a href="pandektes/chronology/index.html" class="navbar__sublink">Chronologia</a></li>
                        </ul>
                    </li>
                    <li><a href="cultura.html" class="navbar__link">Cultura</a>
                        <span class="navbar__arrow"></span>
                        <ul class="navbar__sublist">
                            <li><a href="librarium/index.html" class="navbar__sublink">Librarium</a></li>
                            <li><a href="phonotheca/index.html" class="navbar__sublink">Phonotheca</a></li>
                            <li><a href="#" class="navbar__sublink">Galeria</a></li>
                        </ul>
                    </li>
                    <li><a href="civitas.html" class="navbar__link">Civitas</a>
                        <span class="navbar__arrow"></span>
                        <ul class="navbar__sublist">
                            <li><a href="#" class="navbar__sublink">Forum</a></li>
                            <li><a href="links.html" class="navbar__sublink">Nexus</a></li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </header>
        `
    }
}
class JavaHeaderone extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header class="header">
            <div class="header__logo"><a href="/index.html" alt="Home"></a></div>
            <div class="header__menu__l">
                    <button type="button" class="button__menu" onclick="document.location='/nuntia/index.html'">
                        <div class="button__menu-top">Nuntia</div>
                        <div class="button__menu-bottom"></div>
                        <div class="button__menu-base"></div>
                    </button>
                    <button type="button" class="button__menu" onclick="document.location='/sodalitas/index.html'">
                        <div class="button__menu-top">Sodalitas</div>
                        <div class="button__menu-bottom"></div>
                        <div class="button__menu-base"></div>
                    </button>
                    <button type="button" class="button__menu" onclick="document.location='/apopsis/index.html'">
                        <div class="button__menu-top">Apopsis</div>
                        <div class="button__menu-bottom"></div>
                        <div class="button__menu-base"></div>
                    </button>
                    <button type="button" class="button__menu" onclick="document.location='/regnum/index.html'">
                        <div class="button__menu-top">Regnum</div>
                        <div class="button__menu-bottom"></div>
                        <div class="button__menu-base"></div>
                    </button>
                    <button type="button" class="button__menu" onclick="document.location='/pandektes/index.html'">
                        <div class="button__menu-top">Pandektes</div>
                        <div class="button__menu-bottom"></div>
                        <div class="button__menu-base"></div>
                    </button>
                    <button type="button" class="button__menu" onclick="document.location='/cultura.html'">
                        <div class="button__menu-top">Cultura</div>
                        <div class="button__menu-bottom"></div>
                        <div class="button__menu-base"></div>
                    </button>
                    <button type="button" class="button__menu" onclick="document.location='/civitas.html'">
                        <div class="button__menu-top">Civitas</div>
                        <div class="button__menu-bottom"></div>
                        <div class="button__menu-base"></div>
                    </button>
            </div>
            <div class="header__menu__m">
                    <button type="button" class="button__menu" onclick="document.location='/nuntia/index.html'">
                        <div class="button__menu-top">Nuntia</div>
                        <div class="button__menu-bottom"></div>
                        <div class="button__menu-base"></div>
                    </button>
                    <button type="button" class="button__menu" onclick="document.location='/sodalitas/index.html'">
                        <div class="button__menu-top">Sodalitas</div>
                        <div class="button__menu-bottom"></div>
                        <div class="button__menu-base"></div>
                    </button>
                    <button type="button" class="button__menu" onclick="document.location='/apopsis/index.html'">
                        <div class="button__menu-top">Apopsis</div>
                        <div class="button__menu-bottom"></div>
                        <div class="button__menu-base"></div>
                    </button>
                    <button type="button" class="button__menu" onclick="document.location='/regnum/index.html'">
                        <div class="button__menu-top">Regnum</div>
                        <div class="button__menu-bottom"></div>
                        <div class="button__menu-base"></div>
                    </button>
                    <button type="button" class="button__menu" onclick="document.location='/pandektes/index.html'">
                        <div class="button__menu-top">Pandektes</div>
                        <div class="button__menu-bottom"></div>
                        <div class="button__menu-base"></div>
                    </button>
                    <button type="button" class="button__menu" onclick="document.location='/cultura.html'">
                        <div class="button__menu-top">Cultura</div>
                        <div class="button__menu-bottom"></div>
                        <div class="button__menu-base"></div>
                    </button>
                    <button type="button" class="button__menu" onclick="document.location='/civitas.html'">
                        <div class="button__menu-top">Civitas</div>
                        <div class="button__menu-bottom"></div>
                        <div class="button__menu-base"></div>
                    </button>
            </div>
            <div class="menu__burger">
                <div class="frame">
                    <div class="inner-frame">
                        <div class="button__burger"><p>&#9776;</p></div>
                    </div>
                </div>
            </div>
            <nav class="navbar">
                <ul class="navbar__list">
                    <li><a href="/nuntia/index.html" class="navbar__link">Nuntia</a></li>
                    <li><a href="/sodalitas/index.html" class="navbar__link">Sodalitas</a>
                        <span class="navbar__arrow"></span>
                        <ul class="navbar__sublist">
                            <li><a href="/sodalitas/about_us.html" class="navbar__sublink">De Sodalitatis</a></li>
                            <li><a href="/sodalitas/administration.html" class="navbar__sublink">Administratio</a></li>
                            <li><a href="/sodalitas/legislation.html" class="navbar__sublink">Lex</a></li>
                            <li><a href="/sodalitas/dignitatum/index.html" class="navbar__sublink">Notitia Dignitatum</a></li>
                        </ul>
                    </li>
                    <li><a href="/apopsis/index.html" class="navbar__link">Apopsis</a>
                        <span class="navbar__arrow"></span>
                        <ul class="navbar__sublist">
                            <li><a href="/apopsis/methodology.html" class="navbar__sublink">Methodologia</a></li>
                            <li><a href="/apopsis/articles.html" class="navbar__sublink">Articuli</a></li>
                            <li><a href="/apopsis/polemics.html" class="navbar__sublink">Polemikos</a></li>
                        </ul>
                    </li>
                    <li><a href="/regnum/index.html" class="navbar__link">Regnum</a>
                        <span class="navbar__arrow"></span>
                        <ul class="navbar__sublist">
                            <li><a href="/regnum/hist_koryanna.html" class="navbar__sublink">Historia Coriannae</a></li>
                            <li><a href="/regnum/hist_igf.html" class="navbar__sublink">Historia Praetorianae</a></li>
                            <li><a href="/regnum/government.html" class="navbar__sublink">Rectio</a></li>
                            <li><a href="/regnum/high_command.html" class="navbar__sublink">Praetorium</a></li>
                            <li><a href="/regnum/economy.html" class="navbar__sublink">Oeconomia</a></li>
                        </ul>
                    </li>
                    <li><a href="/pandektes/index.html" class="navbar__link">Pandektes</a>
                        <span class="navbar__arrow"></span>
                        <ul class="navbar__sublist">
                            <li><a href="/pandektes/astrography/index.html" class="navbar__sublink">Astrographia</a></li>
                            <li><a href="/pandektes/astropolitics/index.html" class="navbar__sublink">Astropolitika</a></li>
                            <li><a href="/pandektes/documents/index.html" class="navbar__sublink">Documenta</a></li>
                            <li><a href="/pandektes/gme/index.html" class="navbar__sublink">Magnum Lexicon Militare</a></li>
                            <li><a href="/pandektes/linguistics/index.html" class="navbar__sublink">Linguisticus et Cultura</a></li>
                            <li><a href="/pandektes/mysticism/index.html" class="navbar__sublink">Mystica</a></li>
                            <li><a href="/pandektes/prosopography/index.html" class="navbar__sublink">Prosopographia</a></li>
                            <li><a href="/pandektes/technopedia/index.html" class="navbar__sublink">Technopaedia</a></li>
                            <li><a href="/pandektes/uniformology/index.html" class="navbar__sublink">Uniformologia</a></li>
                            <li><a href="/pandektes/chronology/index.html" class="navbar__sublink">Chronologia</a></li>
                        </ul>
                    </li>
                    <li><a href="/cultura.html" class="navbar__link">Cultura</a>
                        <span class="navbar__arrow"></span>
                        <ul class="navbar__sublist">
                            <li><a href="/librarium/index.html" class="navbar__sublink">Librarium</a></li>
                            <li><a href="/phonotheca/index.html" class="navbar__sublink">Phonotheca</a></li>
                            <li><a href="#" class="navbar__sublink">Galeria</a></li>
                        </ul>
                    </li>
                    <li><a href="/civitas.html" class="navbar__link">Civitas</a>
                        <span class="navbar__arrow"></span>
                        <ul class="navbar__sublist">
                            <li><a href="#" class="navbar__sublink">Forum</a></li>
                            <li><a href="/links.html" class="navbar__sublink">Nexus</a></li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </header>
        `
    }
}
class JavaFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer class="footer">
            <div class="footer__lt">
                <div class="disclaimer"><p>Все оригинальные тексты, переводы, изображения и модели являются © Корианской империи и Эдварда Никсона. Пожалуйста, не используйте данные материалы без упоминания авторов.</p></div>
                <div class="disclaimer__tab"><p>Все оригинальные тексты, переводы, изображения и модели являются © Корианской империи и Эдварда Никсона. Пожалуйста, не используйте данные материалы без упоминания авторов.</p></div>
                <div class="disclaimer__mob"><p>Все оригинальные материалы являются © Корианской империи и Эдварда Никсона. Пожалуйста, не используйте их без упоминания авторов.</p></div>
                <div class="disclaimer__mob__s"><p>Все оригинальные материалы являются © Корианской империи. Пожалуйста, не используйте без упоминания.</p></div>
                <div class="disclaimer__mob__u"><p>© Корианской империи.</p></div>
            </div>
            <div class="footer__md">
                <div class="footer__disclaimer"><a href="disclaimer.html">Disclaimer</a></div>
                <div class="footer__visuals">
                    <div class="footer__logo"><img src="img/footer__logo.webp"></div>
                    <div class="footer__logo__s"><img src="img/footer__logo__s.webp"></div>
                    <div class="footer__dataport"><img src="img/footer__dataport__l.webp"></div>
                    <div class="footer__dataport__s"><img src="img/footer__dataport__s.webp"></img></div>
                    <div class="footer__dataport__ss"><img src="img/footer__dataport__ss.webp"></img></div>
                    <div class="footer__btns"><img src="img/footer__buttons.webp"></div>
                    <div class="footer__btn"><img src="img/footer__button.webp"></div>
                </div>
            </div>
            <div class="footer__rt"></div>
        </footer>
        `
    }
}
class JavaFooterone extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer class="footer">
            <div class="footer__lt">
                <div class="disclaimer"><p>Все оригинальные тексты, переводы, изображения и модели являются © Корианской империи и Эдварда Никсона. Пожалуйста, не используйте данные материалы без упоминания авторов.</p></div>
                <div class="disclaimer__tab"><p>Все оригинальные тексты, переводы, изображения и модели являются © Корианской империи и Эдварда Никсона. Пожалуйста, не используйте данные материалы без упоминания авторов.</p></div>
                <div class="disclaimer__mob"><p>Все оригинальные материалы являются © Корианской империи и Эдварда Никсона. Пожалуйста, не используйте их без упоминания авторов.</p></div>
                <div class="disclaimer__mob__s"><p>Все оригинальные материалы являются © Корианской империи. Пожалуйста, не используйте без упоминания.</p></div>
                <div class="disclaimer__mob__u"><p>© Корианской империи.</p></div>
            </div>
            <div class="footer__md">
                <div class="footer__disclaimer"><a href="/disclaimer.html">Disclaimer</a></div>
                <div class="footer__visuals">
                    <div class="footer__logo"><img src="/img/footer__logo.webp"></div>
                    <div class="footer__logo__s"><img src="/img/footer__logo__s.webp"></div>
                    <div class="footer__dataport"><img src="/img/footer__dataport__l.webp"></div>
                    <div class="footer__dataport__s"><img src="/img/footer__dataport__s.webp"></img></div>
                    <div class="footer__dataport__ss"><img src="/img/footer__dataport__ss.webp"></img></div>
                    <div class="footer__btns"><img src="/img/footer__buttons.webp"></div>
                    <div class="footer__btn"><img src="/img/footer__button.webp"></div>
                </div>
            </div>
            <div class="footer__rt"></div>
        </footer>
        `
    }
}

customElements.define('templ-header', JavaHeader)
customElements.define('templ-headerone', JavaHeaderone)
customElements.define('templ-footer', JavaFooter)
customElements.define('templ-footerone', JavaFooterone)

"use strict"

const isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () { 
        return navigator.userAgent.match(/BlackBerry/i);
    },
	iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
	Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
	Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
	any: function() {
        return (
            isMobile.Android() ||
            isMobile.BlackBerry() ||
            isMobile.iOS() ||
            isMobile.Opera() ||
            isMobile.Windows());
    }
};

if (isMobile.any()) {
    document.body.classList.add('_touch');

    let menuArrows = document.querySelectorAll('.navbar__arrow');
    if (menuArrows.length > 0) {
        for (let index = 0; index < menuArrows.length; index++) {
            const menuArrow = menuArrows[index];
            menuArrow.addEventListener("click", function (e) {
                menuArrow.parentElement.classList.toggle('_active');
            });
        }
    }

} else {
    document.body.classList.add('_pc');
}

const burgerMenu = document.querySelector('.menu__burger');
if (burgerMenu) {
    const navbarMenu = document.querySelector('.navbar');
    burgerMenu.addEventListener("click", function (e) {
        document.body.classList.toggle('_lock');
        burgerMenu.classList.toggle('_active');
        navbarMenu.classList.toggle('_active');
    });
}

function changeImg(imgchanger) {
    document.getElementById('slider').src = imgchanger;
}

function openCity(evt, cityName) {
    var i, roster__file__content, rosterlinks;
    roster__file__content = document.getElementsByClassName("roster__file__content");
    for (i = 0; i < roster__file__content.length; i++) {
        roster__file__content[i].style.display = "none";
    }
    rosterlinks = document.getElementsByClassName("rosterlinks");
    for (i = 0; i < rosterlinks.length; i++) {
        rosterlinks[i].className = rosterlinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }