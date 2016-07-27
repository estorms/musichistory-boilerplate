console.log('factory built');

var music = (function() {
songs1 = []
songs2 = []

// var Predator = (function () {
//   var carnivores = []
//   var herbivores = []

return {
    getSongs1: function(functionToBeInvoked) {
    var xhr = new XMLHttpRequest()
      xhr.open('GET', 'songs1.json')
      xhr.addEventListener('load', function (evt) {
        songs1 = JSON.parse(evt.target.responseText)
        functionToBeInvoked(songs1)
      })
      xhr.send()
    },

    getSongs2: function(functionToBeInvoked) {
    var xhr = new XMLHttpRequest()
      xhr.open('GET', 'songs2.json')
      xhr.addEventListener('load', function (evt) {
        songs2 = JSON.parse(evt.target.responseText)
        functionToBeInvoked(songs2)
      })
      xhr.send()

    }
}

}())


// var Predator = (function () {
//   var carnivores = []
//   var herbivores = []

//   return {
//     getCarnivores: function (cb) {
//       var xhr = new XMLHttpRequest()
//       xhr.open('GET', 'carnivores.json')
//       xhr.addEventListener('load', function (evt) {
//         carnivores = JSON.parse(evt.target.responseText)
//         cb(carnivores)
//       })
//       xhr.send()
//     },
//     getHerbivores: function (cb) {
//       var xhr = new XMLHttpRequest()
//       xhr.open('GET', 'herbivores.json')
//       xhr.addEventListener('load', function (evt) {
//         herbivores = JSON.parse(evt.target.responseText)
//         cb(herbivores)
//       })
//       xhr.send()
//     }
//   }
// }())









