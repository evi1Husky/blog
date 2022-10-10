if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
    navigator.serviceWorker.register('/service-worker.js');
    });
}

// Drop down menu 

/* Assign event listener to the drop down menu button, hide
drop down menu by clicking on blog article*/

(() => {
  const menuButton = document.getElementById('menuButton');
  const menuButtonSvg = document.getElementById('menuButtonSvg');
  menuButton.addEventListener('click', function() {
    const style = getComputedStyle(dropDownMenu)
    const display = style.display;
    if (display === 'none') {
      dropDownMenu.style.display = 'flex';
      menuButtonSvg.style.transform = 'rotate(90deg)'
    } else {
      dropDownMenu.style.display = 'none';
      menuButtonSvg.style.transform = 'rotate(0deg)'
    }
  });
  const articleContainer = document.getElementById('articleContainer');
  articleContainer.addEventListener('click', function() {
      dropDownMenu.style.display = 'none';
      menuButtonSvg.style.transform = 'rotate(0deg)'
  });
})();

// Scroll to the top button

/* Use Intersection Observer API to make the scroll to the top button
  appear when reaching the bottom of the page, Pass scrollTo method to
  addEventListener to enable scrolling to the top of the page on button
  click */

function backToTheTop(button) {
  const rootElement = document.documentElement;
  button.addEventListener("click", function() {
    rootElement.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

(() => {
  const target = document.querySelector('.footer');
  const backToTheTopButton = document.getElementById('backToTheTopButton');
  function callback(entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        backToTheTopButton.style.opacity = '1'
      } else {
        backToTheTopButton.style.opacity = '0'
      }
    });
  }
  const observer = new IntersectionObserver(callback);
  observer.observe(target);
  backToTheTop(backToTheTopButton);
})();

// Dark/light mode toggle button

/* Toggle classes to animate buttons and change web page color scheme.
 Use local storage to save theme preference, on page open adjust button 
 animation based on preferred theme. For the first page visit set preferred
 preferred theme according to OS settings. */

(() => {
  if (window.localStorage.length === 0 && window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches) {
        localStorage.setItem('preferredTheme', 'dark');
  }

  const preferredTheme = localStorage.getItem('preferredTheme');
  if (preferredTheme === 'dark') {
    document.getElementById("moonLogo").classList.toggle("moonLogoDark");
    document.getElementById("sunLogo").classList.toggle("sunLogoDark");
    document.querySelector(":root").classList.toggle("dark");
  }

  document.getElementById("darkModeButtonContainer"
    ).addEventListener("click", () => {
    document.querySelector("body").style.transition = 'background-color 1s';
    document.getElementById("moonLogo").style.transition = 'all 1s ease-out';
    document.getElementById("sunLogo").style.transition = 'all 1s ease-out';
    const moon = document.getElementById("moonLogo");
    if (preferredTheme === 'dark') {
      document.getElementById("sunLogo").classList.toggle("sunLogoAnimateDark");
      moon.classList.toggle("moonLogoAnimateDark");
      document.querySelector(":root").classList.toggle("dark");
    } else {
    document.getElementById("sunLogo").classList.toggle("sunLogoAnimate");
    moon.classList.toggle("moonLogoAnimate");
    document.querySelector(":root").classList.toggle("dark");
    }
    const style = getComputedStyle(moon)
    const opacity = style.opacity;
    if (opacity === '0') {
      localStorage.setItem('preferredTheme', 'dark');
    } else {
      localStorage.setItem('preferredTheme', 'light');
    }
  });
})();

/* make the inserted text pages blink by delaying disabling the animation 
property of the display div with setTimeout() method */

function textBlink() {
  articleContainer.style.animation = 'blinkingText 0.1s infinite';
  setTimeout(function () {
    articleContainer.style.animation = 'none';
  }, 100);
}

// blog cms

/* */

(() => {
  const aboutThisBlog =
    `<svg id="AboutThisBlogimage" viewBox="0 0 250 150" 
    xmlns="http://www.w3.org/2000/svg" 
    xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"><path 
    d="M0 42L11 42L11 39L22 39L22 42L33 42L33 42L43 42L43 24L54 
    24L54 25L65 25L65 30L76 30L76 51L87 51L87 42L98 42L98 34L109 
    34L109 21L120 21L120 12L130 12L130 24L141 24L141 7L152 7L152 
    39L163 39L163 33L174 33L174 42L185 42L185 24L196 24L196 21L207 
    21L207 37L217 37L217 16L228 16L228 27L239 27L239 28L250 28L250 
    12L250 0L250 0L239 0L239 0L228 0L228 0L217 0L217 0L207 0L207 
    0L196 0L196 0L185 0L185 0L174 0L174 0L163 0L163 0L152 0L152 
    0L141 0L141 0L130 0L130 0L120 0L120 0L109 0L109 0L98 0L98 0L87 
    0L87 0L76 0L76 0L65 0L65 0L54 0L54 0L43 0L43 0L33 0L33 0L22 0L22 
    0L11 0L11 0L0 0Z" fill="#fa7268"></path><path d="M0 52L11 52L11 
    43L22 43L22 45L33 45L33 54L43 54L43 30L54 30L54 28L65 28L65 43L76 
    43L76 57L87 57L87 48L98 48L98 43L109 43L109 22L120 22L120 15L130 
    15L130 57L141 57L141 34L152 34L152 55L163 55L163 62L174 62L174 
    49L185 49L185 55L196 55L196 34L207 34L207 67L217 67L217 36L228 
    36L228 31L239 31L239 45L250 45L250 28L250 10L250 26L239 26L239 
    25L228 25L228 14L217 14L217 35L207 35L207 19L196 19L196 22L185 
    22L185 40L174 40L174 31L163 31L163 37L152 37L152 5L141 5L141 22L130 
    22L130 10L120 10L120 19L109 19L109 32L98 32L98 40L87 40L87 49L76 
    49L76 28L65 28L65 23L54 23L54 22L43 22L43 40L33 40L33 40L22 40L22 
    37L11 37L11 40L0 40Z" fill="#ef6467"></path><path d="M0 93L11 93L11 
    102L22 102L22 99L33 99L33 102L43 102L43 72L54 72L54 85L65 85L65 
    112L76 112L76 70L87 70L87 60L98 60L98 43L109 43L109 103L120 103L120 
    61L130 61L130 70L141 70L141 62L152 62L152 70L163 70L163 84L174 84L174 
    104L185 104L185 102L196 102L196 97L207 97L207 100L217 100L217 76L228 
    76L228 57L239 57L239 109L250 109L250 69L250 26L250 43L239 43L239 
    29L228 29L228 34L217 34L217 65L207 65L207 32L196 32L196 53L185 53L185 
    47L174 47L174 60L163 60L163 53L152 53L152 32L141 32L141 55L130 55L130 
    13L120 13L120 20L109 20L109 41L98 41L98 46L87 46L87 55L76 55L76 41L65 
    41L65 26L54 26L54 28L43 28L43 52L33 52L33 43L22 43L22 41L11 41L11 50L0 
    50Z" fill="#e45765"></path><path d="M0 106L11 106L11 126L22 126L22 103L33 
    103L33 106L43 106L43 78L54 78L54 102L65 102L65 114L76 114L76 84L87 84L87 
    78L98 78L98 58L109 58L109 118L120 118L120 82L130 82L130 72L141 72L141 
    81L152 81L152 93L163 93L163 104L174 104L174 114L185 114L185 112L196 112L196 
    99L207 99L207 118L217 118L217 100L228 100L228 75L239 75L239 114L250 114L250 
    86L250 67L250 107L239 107L239 55L228 55L228 74L217 74L217 98L207 98L207 
    95L196 95L196 100L185 100L185 102L174 102L174 82L163 82L163 68L152 68L152 
    60L141 60L141 68L130 68L130 59L120 59L120 101L109 101L109 41L98 41L98 58L87 
    58L87 68L76 68L76 110L65 110L65 83L54 83L54 70L43 70L43 100L33 100L33 97L22 
    97L22 100L11 100L11 91L0 91Z" fill="#d84a64"></path><path d="M0 106L11 106L11 
    142L22 142L22 106L33 106L33 121L43 121L43 88L54 88L54 124L65 124L65 130L76 
    130L76 97L87 97L87 91L98 91L98 62L109 62L109 129L120 129L120 99L130 99L130 
    93L141 93L141 88L152 88L152 115L163 115L163 108L174 108L174 133L185 133L185 
    117L196 117L196 112L207 112L207 130L217 130L217 106L228 106L228 90L239 90L239 
    123L250 123L250 103L250 84L250 112L239 112L239 73L228 73L228 98L217 98L217 
    116L207 116L207 97L196 97L196 110L185 110L185 112L174 112L174 102L163 102L163 
    91L152 91L152 79L141 79L141 70L130 70L130 80L120 80L120 116L109 116L109 56L98 
    56L98 76L87 76L87 82L76 82L76 112L65 112L65 100L54 100L54 76L43 76L43 104L33 
    104L33 101L22 101L22 124L11 124L11 104L0 104Z" fill="#cb3d62"></path><path d="M0 
    120L11 120L11 144L22 144L22 139L33 139L33 148L43 148L43 130L54 130L54 127L65 
    127L65 145L76 145L76 141L87 141L87 133L98 133L98 130L109 130L109 130L120 130L120 
    132L130 132L130 129L141 129L141 136L152 136L152 145L163 145L163 135L174 135L174 
    141L185 141L185 123L196 123L196 126L207 126L207 138L217 138L217 151L228 151L228 
    139L239 139L239 124L250 124L250 132L250 101L250 121L239 121L239 88L228 88L228 
    104L217 104L217 128L207 128L207 110L196 110L196 115L185 115L185 131L174 131L174 
    106L163 106L163 113L152 113L152 86L141 86L141 91L130 91L130 97L120 97L120 127L109 
    127L109 60L98 60L98 89L87 89L87 95L76 95L76 128L65 128L65 122L54 122L54 86L43 
    86L43 119L33 119L33 104L22 104L22 140L11 140L11 104L0 104Z" fill="#be3061">
    </path><path d="M0 151L11 151L11 151L22 151L22 151L33 151L33 151L43 151L43 151L54 
    151L54 151L65 151L65 151L76 151L76 151L87 151L87 151L98 151L98 151L109 151L109 
    151L120 151L120 151L130 151L130 151L141 151L141 151L152 151L152 151L163 151L163 
    151L174 151L174 151L185 151L185 151L196 151L196 151L207 151L207 151L217 151L217 
    151L228 151L228 151L239 151L239 151L250 151L250 151L250 130L250 122L239 122L239 
    137L228 137L228 149L217 149L217 136L207 136L207 124L196 124L196 121L185 121L185 
    139L174 139L174 133L163 133L163 143L152 143L152 134L141 134L141 127L130 127L130 
    130L120 130L120 128L109 128L109 128L98 128L98 131L87 131L87 139L76 139L76 143L65 
    143L65 125L54 125L54 128L43 128L43 146L33 146L33 137L22 137L22 142L11 142L11 118L0 
    118Z" fill="#b0235f"></path></svg>
    <h2>About this blog</h2>
    <p>Howl on top of tall thing mesmerizing birds. Love blinks and
    purr purr purr purr yawn howl on top of tall thing meowing non
    stop for food for caticus cuteicus, so spread kitty litter all
    over house yet catty ipsum. I shredded your linens for you. Love
    to play with owner's hair tie you are a captive audience while
    sitting on the toilet, pet me. I show my fluffy belly but it's a
    trap! if you pet it i will tear up your hand. Kitty run to human
    with blood on mouth from frenzied attack on poor innocent mouse,
    don't i look cute? steal mom's crouton while she is in the bathroom
    and destroy house in 5 seconds, yet poop in litter box, scratch the
    walls and cat dog hate mouse eat string barf pillow no baths hate
    everything. Cough. Kick up litter kitty power. Run in circles hiding
    behind the couch until lured out by a feathery toy but be superior
    but roll on the floor purring your whiskers off for chase little red
    dot someday it will be mine!. Immediately regret falling into bathtub
    put toy mouse in food bowl run out of litter box at full speed.</p>
    <div class="line"></div>`;
  const article1 = 
    `<div class="authorsInfo">
      <svg id="authorsPfp" width="3rem" height="3rem" viewBox="0 0 4 4">
        <circle id="path354" cx="2" cy="2" r="1.8877"/></svg>
      <div class="nameDate">
        <div class="authorsName">Author's name and pfp</div>
        <div class="publishingDate">09/17/2022</div>
      </div>
    </div>
    <h2>Article headline</h2>
    <h3>Paragraph heading</h3>
    <p>
      Check cat door for ambush 10 times before 
      coming in, lick plastic bags or eat and than sleep on your face. 
      Scratch the postman wake up lick paw wake up owner meow meow when in 
      doubt, wash, or funny little cat chirrup noise shaking upright tail 
      when standing next to you snob you for another person yet eat all the 
      power cords or twitch tail in permanent irritation run in circles.
    </p>
    <p> 
      Mesmerizing birds eat a plant, kill a hand for scream for no reason at 
      4 am yet playing with balls of wool, lies down climb a tree, wait for a 
      fireman jump to fireman then scratch his face and give me attention or 
      face the wrath of my claws. Flee in terror at cucumber discovered on 
      floor pounce on unsuspecting person cough furball into food bowl then 
      scratch owner for a new one always ensure to lay down in such a manner 
      that tail can lightly brush human's nose give me attention or face the 
      wrath of my claws so find something else more interesting. Run as fast 
      as i can into another room for no reason just going to dip my paw in 
      your coffee and do a taste test - oh never mind i forgot i don't like 
      coffee - you can have that back now but pelt around the house and up 
      and down stairs chasing phantoms.
    </p>
    <p> 
      Meow going to catch the red dot today 
      going to catch the red dot today and this cat happen now, it was too 
      purr-fect!!!. Swat at dog. Oooo! dangly balls! jump swat swing flies 
      so sweetly to the floor crash move on wash belly nap push your water 
      glass on the floor refuse to leave cardboard box. Rub my belly hiss if 
      it fits, i sits for purr like an angel run around the house at 4 in the 
      morning for cat is love, cat is life. Rub whiskers on bare skin act 
      innocent pretend you want to go out but then don't or scratch leg; meow 
      for can opener to feed me. Catch eat throw up catch eat throw up bad 
      birds. Climb leg why dog in house? i'm the sole ruler of this home and 
      its inhabitants smelly, stupid dogs, inferior furballs time for 
      night-hunt, human freakout or love you, then bite you and waffles 
      cat fur is the new black.
    </p>
    <div class="line"></div>
    <h3>Paragraph heading</h3>
    <p>
      Purr when being pet poop on grasses for sleep everywhere, but not in my 
      bed, if it fits i sits, eat the fat cats food, jump up to edge of bath, 
      fall in then scramble in a mad panic to get out being gorgeous with belly 
      side up. Look at dog hiiiiiisssss brown cats with pink ears my water bowl 
      is clean and freshly replenished, so i'll drink from the toilet take a big 
      fluffing crap ðŸ’©. Slap kitten brother with paw rub face on owner floof tum, 
      tickle bum, jellybean footies curly toes found somthing move i bite it tail 
      for purr for no reason.
    </p>
    <p>
      If it fits, i sits catch small lizards, bring them 
      into house, then unable to find them on carpet or get video posted to internet 
      for chasing red dot. Destroy dog burrow under covers scratch the postman wake 
      up lick paw wake up owner meow meow and destroy house in 5 seconds. See owner, 
      run in terror roll over and sun my belly attempt to leap between furniture but 
      woefully miscalibrate and bellyflop onto the floor; what's your problem? i meant 
      to do that now i shall wash myself intently, but chase little red dot someday it 
      will be mine! but sit by the fire stare out cat door then go back inside for 
      morning beauty routine of licking self. 
    </p>
    <p> 
      Intrigued by the shower pet my belly, 
      you know you want to; seize the hand and shred it! jump launch to pounce upon 
      little yarn mouse, bare fangs at toy run hide in litter box until treats are fed 
      but scamper i is playing on your console hooman. I am the best spend all night 
      ensuring people don't sleep sleep all day yet curl into a furry donut so leave 
      buried treasure in the sandbox for the toddlers or sit on human they not getting 
      up ever ask for petting groom yourself 4 hours - checked, have your beauty sleep 
      18 hours - checked, be fabulous for the rest of the day - checked.
    </p>
    <div class="line"></div>
    <h3>Paragraph heading</h3>
    <p>
      Meow meow you are my owner so here is a dead rat scratch at door to be let outside, 
      get let out then scratch at door immmediately after to be let back in, need to chase 
      tail this human feeds me, i should be a god cat meoooow i iz master of hoomaan, not 
      hoomaan master of i, oooh damn dat dog, for rub my belly hiss. Eats owners hair then 
      claws head bawl under human beds for human is in bath tub, emergency! drowning! 
      meooowww!, and scratch leg; meow for can opener to feed me. Am in trouble, roll over, 
      too cute for human to get mad wake up human for food at 4am. Touch water with paw 
      then recoil in horror scratch so owner bleeds yet murr i hate humans they are so 
      annoying stare out the window for kitty kitty.
    </p>
    <p> 
      I shall purr myself to sleep pushes 
      butt to face so my cat stared at me he was sipping his tea, too chill on the couch 
      table. Chase mice sugar, my siamese, stalks me (in a good way), day and night . 
      Intently stare at the same spot carrying out surveillance on the neighbour's dog. 
      Stares at human while pushing stuff off a table bury the poop bury it deep refuse 
      to leave cardboard box have a lot of grump in yourself because you can't forget 
      to be grumpy and not be like king grumpy cat but woops poop hanging from butt must 
      get rid run run around house drag poop on floor maybe it comes off woops left brown 
      marks on floor human slave clean lick butt now. Tuxedo cats always looking dapper 
      purr for no reason. Catching very fast laser pointer hide from vacuum cleaner decide 
      to want nothing to do with my owner today scratch leg; meow for can opener to feed 
      me fall over dead (not really but gets sypathy). Milk the cow scratch so owner bleeds. 
      Eat a plant, kill a hand.
    </p>
    <div class="line"></div>`;

  const aboutThisBlogButton = document.getElementById('infoButton');
  const latestArticleButton = document.getElementById('latestArticleButton');

  aboutThisBlogButton.addEventListener('click', function () {
      articleContainer.innerHTML = aboutThisBlog;
      dropDownMenu.style.display = 'none';
      menuButtonSvg.style.transform = 'rotate(0deg)';
      textBlink()
  });

  backToTheTop(aboutThisBlogButton);

  latestArticleButton.addEventListener('click', function () {
      articleContainer.innerHTML = article1;
      dropDownMenu.style.display = 'none';
      menuButtonSvg.style.transform = 'rotate(0deg)';
      textBlink()
  });

  backToTheTop(latestArticleButton);

  articleContainer.innerHTML = article1;
})();