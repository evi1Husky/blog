/* Assign event listener to the drop down menu button svg using an immediately
invoked function, hide drop down menu by clicking anywhere on the except the
button and the menu, to do so assign an even listener to the entire document
and use an if statement to check if an element is menu button/drop 
down menu */

(() => {
  const menuButton = document.getElementById('svgContainerMenu');
  const dropDownMenu = document.querySelector('.dropDownMenu');
  menuButton.addEventListener('click', function() {
    const style = getComputedStyle(dropDownMenu)
    const display = style.display;
    if (display === 'none') {
      dropDownMenu.style.display = 'block'
    } else {
      dropDownMenu.style.display = 'none'
    }
  });
  document.addEventListener('click', function(e) {
    if (e.target !== menuButton && e.target !== dropDownMenu) {
      dropDownMenu.style.display = 'none'
    }
  });
})();

/* rotate menu button on click and change background on mouseover,
 check if mobile browser to assign different event listeners */

if ("ontouchstart" in document.documentElement)
{
  (() => {
    const menuButtonSvg = document.getElementById('headerMenu');
    const dropDownMenu = document.querySelector('.dropDownMenu');
    document.addEventListener('click', function() {
      const style = getComputedStyle(dropDownMenu)
      const display = style.display;
      if (display === 'none') {
        menuButtonSvg.style.transform = 'rotate(0deg)'
        // menuButtonSvg.style.background = '#e5eaf1'
      } else {
        menuButtonSvg.style.transform = 'rotate(90deg)'
        // menuButtonSvg.style.background = '#c8cad2'
      }
    });
  })();
} else {
  (() => {
    const menuButtonSvg = document.getElementById('headerMenu');
    const menuButton = document.getElementById('svgContainerMenu');
    const dropDownMenu = document.querySelector('.dropDownMenu');
    document.addEventListener('click', function() {
      const style = getComputedStyle(dropDownMenu)
      const display = style.display;
      if (display === 'none') {
        menuButtonSvg.style.transform = 'rotate(0deg)'
      } else {
        menuButtonSvg.style.transform = 'rotate(90deg)'
      }
    });
    menuButton.addEventListener('mouseover', function() {
      menuButtonSvg.style.background = '#c8cad2'
    });
    menuButton.addEventListener('mouseout', function() {
      menuButtonSvg.style.background = '#e5eaf1'
    });
    menuButton.addEventListener('mousedown', function() {
      menuButtonSvg.style.background = '#d6d8e1'
    });
    menuButton.addEventListener('mouseup', function() {
      menuButtonSvg.style.background = '#c8cad2'
    });
  })();
}
