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
        members: [
            {name: 'Claudia Bosch',     image: './src/images/our-team/claudia@2x.jpg',  position: 'Presidenta',                         info: 'Nuestra fundadora, la cabeza del grupo. Emprendedora y líder de un grupo experto en nuevas experiencias.'},
            {name: 'Marcela Bosch',     image: './src/images/our-team/marcela@2x.jpg',  position: 'Director SBT',                       info: ''},
            {name: 'Katina Bosch',      image: './src/images/our-team/katina@2x.jpg',   position: 'Directora BIZÚ',                     info: ''},
            {name: 'Isabel Bosch',      image: './src/images/our-team/Isabel@2x.jpg',   position: 'Project Manager',                    info: ''},
            {name: 'Rocio de la peña',  image: './src/images/our-team/rocio@2x.jpg',    position: 'Directora Ejecutiva',                info: ''},
            {name: 'Gabriela Estrada',  image: './src/images/our-team/gabriela@2x.jpg', position: 'Cordinadora de Recursos Humanos',    info: 'Mejora Continua'},
            {name: 'Eduardo Gonzales',  image: './src/images/our-team/eduardo@2x.jpg',  position: 'Chef Corporativo',                   info: 'Transparencia'},
            {name: 'Carmen Ochoa',      image: './src/images/our-team/carmen@2x.jpg',   position: 'Gerente Residente Casa Palopó',      info: 'Salud Integral'},
            {name: 'Paula Lehnoff',     image: './src/images/our-team/paula@2x.jpg',    position: 'Directora de Mercadeo',              info: 'Transparencia'},
            {name: 'Megan Skinner',     image: './src/images/our-team/Megan@2x.jpg',    position: 'Responsabilidad Social',             info: 'Agradecimiento'},
            
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
            },
            {
                name: 'Casa Palopó', 
                year: 'Top 2018', 
                content: '12 Jaw-Dropping Honeymoon Resorts with Breathtaking Views', 
                url: 'https://www.brides.com/story/honeymoon-resorts-with-amazing-views', 
                source: 'Brides.com'
            },
            {
                name: 'Casa Palopó', 
                year: 'Top 2018', 
                content: 'The 7 Most Stunning, Gravity-Defying Cliffside Hotels', 
                url: 'https://www.mensjournal.com/travel/the-7-most-stunning-gravity-defying-cliffside-hotels-in-the-world-2018/', 
                source: 'MensJournal.com'
            },
            {
                name: 'Casa Palopó', 
                year: 'Top 2018', 
                content: 'You’ll Want to Curl Up in One of These Unforgettable Hotel Libraries', 
                url: 'https://www.afar.com/magazine/youll-want-to-curl-up-in-one-of-these-unforgettable-hotel-libraries', 
                source: 'AFAR.com'
            },
            {
                name: 'Casa Palopó', 
                year: 'Top 2018', 
                content: 'Discover the Wonders of Guatemala', 
                url: 'https://www.travelchannel.com/destinations/guatemala/articles/discover-the-wonders-of-guatemala', 
                source: 'TravelChannel.com'
            },
            {
                name: 'Casa Palopó', 
                year: 'Top 2019', 
                content: 'Delta Sky Magazine - Descubramos el pasado en Guatemala', 
                url: 'https://view.imirus.com/209/document/13056/page/79', 
                source: 'Delta Sky Magazine'
            },
            {
                name: 'Casa Palopó', 
                year: 'Top 2019', 
                content: 'The 24 Most Romantic Couples and Honeymoon Packages in the World', 
                url: 'https://www.instyle.com/weddings/most-romantic-couples-honeymoon-hotel-packages', 
                source: 'Instyle.com'
            },
            {
                name: 'Casa Palopó', 
                year: 'Top 2019', 
                content: '14 Technicolor Resorts to Brighten Your Winter Blues', 
                url: 'https://www.brides.com/gallery/technicolor-honeymoon-resorts', 
                source: 'Brides.com'
            },
            {
                name: 'Casa Palopó', 
                year: 'Top 2019', 
                content: 'Life Changing Luxury Spiritual Experiences', 
                url: 'https://www.departures.com/travel/luxury-spiritual-experiences', 
                source: 'Departures.com'
            },
            {
                name: 'Casa Palopó', 
                year: 'Top 2019', 
                content: 'A Colofrul Destination Wedding at Casa Palopo in Guatemala', 
                url: 'https://www.theknot.com/real-weddings/a-colorful-destination-wedding-at-casa-palop-in-guatemala-album', 
                source: 'The Knot.com'
            },
            {
                name: 'Casa Palopó', 
                year: 'Top 2019', 
                content: 'A Hotels Complimentary Amenities Can Make All the Difference', 
                url: 'https://www.travelpulse.com/news/hotels-and-resorts/a-hotels-complimentary-amenities-can-make-all-the-difference.html', 
                source: 'Travel Pulse.com'
            },
            {
                name: 'Casa Palopó', 
                year: 'Top 2019', 
                content: 'Conde Nast Traveler Magazine - Top 15 Hotels in the Caribbean and Central America', 
                url: 'https://www.cntraveler.com/readers-choice-awards/caribbean-atlantic/carribean-central-america-top-hotels', 
                source: 'CN Traveler'
            },
            {
                name: 'Casa Palopó', 
                year: 'Top 2019', 
                content: 'Conde Nast Traveler Magazine - Top 15 Hotels in the Caribbean and Central America', 
                url: 'https://www.cntraveler.com/readers-choice-awards/caribbean-atlantic/carribean-central-america-top-hotels', 
                source: 'CN Traveler'
            },
            {
                name: 'Casa Palopó', 
                year: 'Top 2019', 
                content: 'Forbes - Trade Overcrowded Destinations for these Quieter Gems', 
                url: 'https://www.forbes.com/sites/cassidyrandall/2019/10/03/trade-overcrowded-destinations-for-these-quieter-gems/#2d3acb4571dc', 
                source: 'CN Traveler'
            },
            {
                name: 'Casa Palopó', 
                year: 'Top 2019', 
                content: 'Travel and Leisure - The Best Solo Trips to Take Before the Year is Over', 
                url: 'https://www.travelandleisure.com/trip-ideas/solo-travel/solo-travel-trips-to-take-this-year', 
                source: 'CN Traveler'
            },
            {
                name: 'La esquina', 
                year: '', 
                content: 'In Doral Magazine - Getaway to Guatemala (pagina 32)', 
                url: 'https://issuu.com/inweston/docs/binder2indoral_julyaug', 
                source: 'Doral Magazine'
            },
            {
                name: 'La esquina', 
                year: '', 
                content: 'Rose & Ivy Journal - A Land of Many Colors (pagina 146)', 
                url: 'https://issuu.com/roseandivyjournal/docs/11_r_i_2019_issue-2?fr=xKAE9_zU1NQ', 
                source: 'Rose & Ivy Journal'
            },
            {
                name: 'La esquina', 
                year: '', 
                content: 'QuePasa - El primer Food Hall guatemalteco', 
                url: 'https://quepasa.gt/mercadito-esquina-antigua-foodie-hall-guatemala/?lang=es', 
                source: 'Quepasa.gt'
            },
            {
                name: 'La esquina', 
                year: '', 
                content: 'Restaurantes coloridos en Guatemala', 
                url: 'https://www.guatemala.com/guias/gastronomia/restaurantes-coloridos-en-guatemala/la-esquina-antigua.html', 
                source: 'Guatemala.com'
            },
            {
                name: 'La esquina', 
                year: '', 
                content: 'Restaurantes con murales en Guatemala', 
                url: 'https://www.guatemala.com/guias/gastronomia/restaurantes-con-murales-en-guatemala/la-esquina-antigua.html', 
                source: 'Guatemala.com'
            },
            {
                name: 'La esquina', 
                year: '', 
                content: 'Restaurantes de tacos en Antigua', 
                url: 'https://www.guatemala.com/guias/gastronomia/restaurantes-de-tacos-en-antigua-guatemala/la-esquina-antigua.html', 
                source: 'Guatemala.com'
            },
            {
                name: 'Adela', 
                year: '', 
                content: 'Helados Adela. Autenticos artesanales ahora en zona 14', 
                url: 'https://republica.gt/2019/08/09/helados-adela-deliciosa-heladeria-ahora-en-zona-14/', 
                source: 'República'
            },
            {
                name: 'Adela', 
                year: '', 
                content: 'Deliciosas heladerías que debes probar en la Ciudad de Guatemala', 
                url: 'https://www.guatemala.com/guias/gastronomia/heladerias-en-guatemala/helados-adela-postres-artesanales-y-cremosos-.html', 
                source: 'Guatemala.com'
            },
            {
                name: 'Adela', 
                year: '', 
                content: 'Adela ToGo, helados artesanales a domicilio en Guatemala', 
                url: 'https://www.guatemala.com/noticias/sociedad/adela-togo-helados-artesanales-a-domicilio-guatemala.html', 
                source: 'Guatemala.com'
            },
            {
                name: 'Bizu', 
                year: '', 
                content: 'Moda amigable con el planeta', 
                url: 'https://republica.gt/2019/08/06/bizu-moda-amigable-con-el-planeta/', 
                source: 'República'
            },
            {
                name: 'Grupo Alta', 
                year: '', 
                content: 'Keep it between the family', 
                url: 'https://issuu.com/scuro/docs/scuro_11_digital', 
                source: 'Scuro Magazine'
            },
            {
                name: 'Villa Bokeh', 
                year: '', 
                content: 'Where to Go in 2020', 
                url: 'https://www.bloomberg.com/features/best-places-to-travel-2020/', 
                source: 'Bloomberg'
            },
        ]
    },
    computed: {
        randomPublications: function() {
            return this.publications.sort(function(){return .5 - Math.random()}).slice(0, 3)
        }
    }
    
})