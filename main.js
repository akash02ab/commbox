const slider = document.getElementById('hours-per-shift');
const sliderFill = document.querySelector('.range-slider-fill');
const count = document.querySelector('.range-count');

slider.addEventListener('change', (event) => {
  const percent = (event.target.value - event.target.min) / (event.target.max - event.target.min) * 100;
  sliderFill.style.width = `${percent}%`;

  if (percent === 0 || percent === 100) {
    count.innerHTML = '';
  } else {
    count.innerHTML = event.target.value;
    count.style.left = `${percent - 2}%`;
  }
})

sliderFill.addEventListener('click', (event) => { 
  const x = event.offsetX;
  const y = slider.offsetWidth;
  const ratio = x / y;
  const value = Math.round(ratio * (12 - 5)) + 5;
  slider.value = value;
  slider.dispatchEvent(new Event('change'));
})