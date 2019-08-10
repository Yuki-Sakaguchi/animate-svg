const moonPath = 'M24.5 50C24.5 77.6142 50 100 50 100C22.3858 100 0 77.6142 0 50C0 22.3858 22.3858 0 50 0C50 0 24.5 22.3858 24.5 50Z'
const sunPath = 'M100 50C100 77.6142 77.6142 100 50 100C22.3858 100 0 77.6142 0 50C0 22.3858 22.3858 0 50 0C77.6142 0 100 22.3858 100 50Z'

let toggle = false
const darkMode = document.querySelector('#darkMode')

darkMode.addEventListener('click', () => {
  const timeline = anime.timeline({
    duration: 750,
    easing: 'easeOutExpo'
  })
  
  timeline
    .add({
      targets: '.sun',
      d: [{ value: toggle ? sunPath : moonPath }]
    })
    .add({
      targets: "#darkMode",
      rotate: toggle ? 0 : 320
    }, '-=350')
    .add({
      targets: 'section',
      backgroundColor: toggle ? 'rgb(255, 255, 255)' : 'rgb(22, 22, 22)',
      color: toggle ? 'rgb(22, 22, 22)' : 'rgb(255, 255, 255)'
    }, '-=700')

  if (!toggle) {
    toggle = true
  } else {
    toggle = false
  }
})