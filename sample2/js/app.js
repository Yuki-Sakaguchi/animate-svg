var btn = document.getElementById('btn-click')
var back = document.getElementById('back-click')
var sect1 = document.getElementById('sect1')
var sect2 = document.getElementById('sect2')
var overlay = document.getElementById('morph')

var className = 'js-active'

btn.addEventListener('click', function () {
  anime({
    targets: '.morph',
    d: [
      { 
        value: 'M0,0V534.262S187.075,334.3,435.188,338.607,684.708,578.38,951.427,580.454,1278.17,419.925,1520.6,418.936,1920,640,1920,640V0Z' ,
        duration: 1000,
        easing: 'easeInQuint',
      },
      { 
        value: 'M0,0V978.671S160.768,851.7,408.881,856.01,662.813,976.6,929.533,978.671,1279.1,823.548,1521.525,822.559,1920,1054.32,1920,1054.32V0Z',
        duration: 700,
        easing: 'easeOutQuint',
      }
    ],
    complete: function () {
      sect2.classList.add(className)
    }
  })
})

back.addEventListener('click', function () {
  sect2.classList.remove(className)
  anime({
    targets: '.morph',
    d: [
      {
        value: 'M0,0V534.262S187.075,334.3,435.188,338.607,684.708,578.38,951.427,580.454,1278.17,419.925,1520.6,418.936,1920,640,1920,640V0Z',
        duration: 1000,
        easing: 'easeInQuint',
      },
      {
        value: 'M0,0V173.311S157.206,53.063,405.319,57.373,682.21,189.889,948.929,191.962,1303.1,58.363,1545.523,57.373,1920,191.962,1920,191.962V0Z',
        duration: 700,
        easing: 'easeOutQuint'
      }
    ]
  })
})
