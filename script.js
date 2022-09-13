(() => {
  const menuButton = document.getElementById('headerMenu');
  menuButton.addEventListener('click', function() {
    const dropDownMenu = document.querySelector('.dropDownMenu');
    const style = getComputedStyle(dropDownMenu)
    const display = style.display;
    if (display === 'none') {
      dropDownMenu.style.display = 'block'
    } else {
      dropDownMenu.style.display = 'none'
    }
  });
})();

(() => {
  document.addEventListener('click', function(e) {
    const menuButton = document.getElementById('headerMenu');
    const dropDownMenu = document.querySelector('.dropDownMenu');
    if (e.target !== menuButton && e.target !== dropDownMenu) {
      dropDownMenu.style.display = 'none'
    }
  });
})();
