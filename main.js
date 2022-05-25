// toggles hamburger menu
$('.menu-toggle').click(function() {
  
  $('.site-nav').toggleClass('site-nav--open', 500);
  $(this).toggleClass('open');
  $('.site-nav').css('transition', "transform ease-in-out 1000ms");
})  

// the fucking version load
window.addEventListener('load', () => {
  let version = '1.2.5';
  let versionFooter = document.querySelector('.copyright');
  versionFooter.innerText = `[Version ${version}] ${versionFooter.innerText}`
})


// wraps divs in spans
const splitIntoLetters = (wrapper) => {
  wrapper.innerHTML = wrapper.textContent.replace(/\S/g, `<span class='letter'>$&</span>`);
}
let textWrapper = document.querySelector('.ml6 .letters');
let textWrapper2 = document.querySelector('.ml7 .letters2');
splitIntoLetters(textWrapper)
splitIntoLetters(textWrapper2)

// idek
// setTimeout(() => {
//   $('.letter').css("animation", "slowMove 1s ease-in-out infinite alternate")
// }, 2500)


// first load animation (works on refresh)
anime.timeline({loop: false})
  .add({
    targets: '.ml6 .letter',
    opacity: 1,
    translateY: ["1.2em", '0'],
    translateZ: 0,
    duration: 2500,
    delay: (el, i) => 50 * i,
});


anime.timeline({loop: false})
  .add({
    targets: '.ml7 .letter',
    translateY: ["1.2em", 0],
    translateX: ["0.55em", 0],
    translateZ: 0,
    rotateZ: [180, 0],
    duration: 2500,
    easing: "easeOutExpo",
    delay: (el, i) => 50 * i,
  });




// BLACK MAGIC. DONT FUCKING TOUCH
const amountscrolled = () => {

  // gets important window info
  let winheight = $(window).height();
  let docheight = $(document).height();
  let scrollTop = $(window).scrollTop();

  // finds how long the page is and then calculates pct
  let trackLength = docheight - winheight;
  /* Math.floor is used because 0.00001% scrolled is kinda annoying shit */
  let pctScrolled = Math.floor(scrollTop/trackLength * 100);
                /*  ^^^^^^^^^^ */

  // it works. leave it.
  if (pctScrolled>0) {
    // voodoo css magic to make it do shit
    $('.wrapper').css('width', '100%');
    $('.wrapper').css('margin', '0 auto');
    $('.wrapper').css('left', '0%');
    $('.wrapper').css('transform', 'scale(1)');
    $('.navHeader').css('border-radius', '0');
    $('.container').css('padding', '0');
    $('.site-nav').css('width', 'unset');
    // checks if on mobile to add more padding than 0pct
    if (window.matchMedia('(min-width: 1000px)').matches) {
      $('.site-nav a').css('padding', '0');
    } else {
      $('.site-nav a').css('padding', '2em 4em 2em 1.5em');
    }
    return;
  } else {
    // does the opposite if the pct is back to 0 (top of page)
    $('.wrapper').css('width', '60%');
    $('.wrapper').css('margin', '2em auto');
    $('.wrapper').css('left', '20%');
    $('.wrapper').css('transform', 'scale(1.2)');
    $('.navHeader').css('border-radius', '100vw');
    $('.container').css('padding', '0.2em 0');
    $('.site-nav').css('width', '80%');
    // checks if on mobile to add less padding than more than 0pct scrolled
    if (window.matchMedia('(min-width: 1000px)').matches) {
      $('.site-nav a').css('padding', '0');
    } else {
      $('.site-nav a').css('padding', '1em 2em 1em 0.75em');
    }
    return;
  };
};

// does all of this shit each time the page is scrolled or resized
$(window).on("scroll", () => {
  amountscrolled();
});

$(window).on("resize", () => {
  amountscrolled();
});

const projBack = () => {
    $('.projects-container').css("transform", "translateY(-100%)")
}

const projForward = () => {
  $('.projects-container').css("transform", "translateY(0)")
}
    // social media clicks
    let discordElem = document.querySelector('#discord');
    let youtubeElem = document.querySelector('#youtube');
    let githubElem = document.querySelector('#github');
    function discord() {
      discordElem.click();
    }
    function youtube() {
      youtubeElem.click();
    }
    function github() {
      githubElem.click();
    }
    // card clicks for mobile
    let card1 = document.querySelector('.card1');
    let card2 = document.querySelector('.card2');
    let content = document.querySelector('.card__content');
    let content2 = document.querySelector('.card__content2');
    let state = false;
    let state2 = false;
    card1.addEventListener('click', () => {
      if (state==false) {
        state = true;
        content.style.transform = 'rotateY(.5turn)';
      } else {
        state = false;
        content.style.transform = 'rotateY(0turn)';
      }
    })
    card2.addEventListener('click', () => {
      if (state2==false) {
        state2 = true;
        content2.style.transform = 'rotateY(-.5turn)';
      } else {
        state2 = false;
        content2.style.transform = 'rotateY(0turn)';
      }
    })
    // omit text element tap animation
    let text1 = document.querySelector('.title');
    let text2 = document.querySelector('.sub');
    let text3 = document.querySelector('.logo');
    let elems = document.querySelector('.scaleT')
    // text3.addEventListener('click', () => {
    //   text3.style.animation = 'theReverseRotate ease-in 1s';
    // });


