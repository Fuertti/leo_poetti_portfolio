const txtAnim = document.querySelector('h2');

new Typewriter(txtAnim, {
    loop: true,
    deleteSpeed: 100
})
.changeDelay(100)
.typeString('Votre d\351veloppeur ')
.pauseFor(700)
.typeString('<strong>Web</strong>')
.pauseFor(700)
.deleteChars(3)
.typeString('<strong>Front-End</strong>')
.pauseFor(700)
.deleteChars(9)
.typeString('<strong><span style="color: #DD4B25">HTML</span></strong>')
.pauseFor(700)
.deleteChars(4)
.typeString('<strong><span style="color: #254BDD">CSS</span></strong>')
.pauseFor(700)
.deleteChars(3)
.typeString('<strong><span style="color: #EFD81D">Javascript</span></strong>')
.start()

