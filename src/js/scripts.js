const navbar = document.querySelector('.navbar')
const logos = [
    {'id': '#logo',            'oldImage': './src/images/logos/logo_grupoalta.svg',         'newImage': './src/images/logos/logo_grupoalta_black.svg'},
    {'id': '#laEsquina-logo',  'oldImage': './src/images/logos/logo_laesquina_black.svg',   'newImage': './src/images/logos/logo_laesquina_white.svg'},
    {'id': '#bizu-logo',       'oldImage': './src/images/logos/logo_bizu_black.svg',        'newImage': './src/images/logos/logo_bizu_white.svg'},
    {'id': '#casaPalopo-logo', 'oldImage': './src/images/logos/logo_casa palopo_black.svg', 'newImage': './src/images/logos/logo_casapalopo_white.svg'},
    {'id': '#queseso-logo',    'oldImage': './src/images/logos/logo_queseso_black.svg',     'newImage': './src/images/logos/logo_queseso_white.svg'},
    {'id': '#adela-logo',      'oldImage': './src/images/logos/logo_adela_black.svg',       'newImage': './src/images/logos/logo_adela_white.svg'},
    {'id': '#sbt-logo',        'oldImage': './src/images/logos/logo_sbt_black.svg',         'newImage': './src/images/logos/logo_sbt_white.svg'}
]


function showActiveMenu() {
    const active = navbar.classList.toggle('d-none')
    // logos.forEach(logo => {
    //     changeLogo(logo.id, logo.oldImage, logo.newImage, active)
    // });
    toggleText(active)
    openFullScreen()
}

function changeLogo(id, oldLogo, newLogo, active) {
    let logoSource = oldLogo
    if (active) {
        logoSource = newLogo
    }
    return document.querySelector(id).src = logoSource
}

function toggleText(active) {
    let menuText = 'MENÚ'
    if (active) {
        menuText = 'CERRAR'
    }
    return document.querySelector('#btn-menu').innerHTML = menuText
}

function openFullScreen() {
    document.querySelector('.navbar-fullscreen').classList.toggle('navbar-fullscreen-active')
}