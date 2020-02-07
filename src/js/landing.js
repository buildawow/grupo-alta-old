new Vue({
    el: '#app',
    data: {
        companies: [
            {name: 'Casa Palopo', image: './src/images/landing/casapalopo_grid@2x.jpg', logo: './src/images/logos/logo_casapalopo_white.svg', url: 'https://www.casapalopo.com/es/habitaciones'},
            {name: 'La Esquina',  image: './src/images/landing/laesquina_grid@2x.jpg',  logo: './src/images/logos/logo_laesquina_white.svg', url: 'https://www.mercaditolaesquina.com/'},
            {name: 'Adela',       image: './src/images/landing/adela_grid@2x.jpg',      logo: './src/images/logos/logo_adela_white.svg', url: 'https://www.heladosadela.com/'},
            {name: 'Bizu',        image: './src/images/landing/bizu_grid@2x.jpg',       logo: './src/images/logos/logo_bizu_white.svg', url: 'https://shopbizu.com/'},
            {name: 'Queseso',     image: './src/images/landing/queseso_grid@2x.jpg',    logo: './src/images/logos/logo_queseso_white.svg', url: 'https://www.facebook.com/quesesogt/'},
            {name: 'SBT',         image: './src/images/landing/sbt_grid@2x.jpg',        logo: './src/images/logos/logo_sbt_white.svg', url: '#'},
        ],
        publications: [
            {
                name: 'Casa Palopó', year: 'Top 2018', 
                content: '7 Luxury Hotels to Witness Natural Wonders from Your Room', 
                url: 'https://www.architecturaldigest.com/gallery/luxury-hotels-witness-natural-wonders-from-your-room', 
                source: 'Architectural Digest'
            },
            {
                name: 'Casa Palopó', year: 'Top 2018', 
                content: 'Top Resorts in Central America & The Caribbean', 
                url: 'https://www.cntraveler.com/readers-choice-awards/caribbean-atlantic/carribean-central-america-top-hotels', 
                source: 'CNTraveler.com'
            },
            {
                name: 'Casa Palopó', 
                year: 'Top 2018', 
                content: 'The Most Colorful Hotel Suites in the World', 
                url: 'https://www.departures.com/travel/hotels/worlds-most-colorful-hotel-suites', 
                source: 'Departures.com'
            }
        ]
    }
})