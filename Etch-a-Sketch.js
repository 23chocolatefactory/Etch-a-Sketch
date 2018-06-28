let totalPixels;
run();
function run() {
  if (document.querySelector('.grid-1') != null) {
    for (let i = 1; i <= totalPixels; i++) {
      let cont = document.querySelector('.cont');
      cont.removeChild(cont.childNodes[0]);
      console.log(i);
    }
  }
  let pixInput = document.querySelector('input');
  if (pixInput.value > 150) {
    pixInput.value = 150;
  }
  totalPixels = Math.pow(pixInput.value, 2);
  for (let i = 1; i <= totalPixels; i++) {
    let grid = document.createElement('div');
    grid.style.width = String(100 / Math.sqrt(totalPixels) + '%');
    grid.style.height = String(100 / Math.sqrt(totalPixels) + '%');
    grid.style.background = 'red';
    grid.className = 'grid grid-' + i;
    grid.style.float = 'left';
    grid.style.borderWidth = '5px';
    grid.style.borderColor = '#000';
    grid.onmouseover = function() {
      grid.style.background = '#000';
    }
    document.querySelector('.cont').appendChild(grid);
  }
}

function reset() {
  for (let i = 1; i <= totalPixels; i++) {
    let grid = document.querySelector(String('.' + 'grid-' + i));
    grid.style.background = 'red';
  }
}