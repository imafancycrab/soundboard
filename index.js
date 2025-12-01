function createButtons() {
    const main = document.querySelector('main')
    const template = document.getElementById('button').textContent

        sounds.forEach((obj) => {
      let html = template;

      Object.keys(obj).forEach((key) => {
        const regex = new RegExp(`{{${key}}}`, `g`)
        html = html.replace(regex, obj[key])
      })
      main.innerHTML += html
    })
}

createButtons()


function playSound(url) {
    const audio = new Audio(url);
    audio.play();
}

