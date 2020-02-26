Vue.component("userprofile", {

    props: ["person"],
    data() {
        return {
            newInterest: "",


        };
    },
    methods: {
        addinterest() {
            if (this.newInterest)
                this.person.interests.push(this.newInterest);
            this.newInterest = ""
        },
        showThumbUp() {

            this.person.like = true
            this.person.likes++
        }

    },

    template: `<v-col cols="12" md="6" lg="4"><div>
       <v-card max-width="400px" max-height="900px" class="teal lighten-5 grey--text mx-auto my-5">
       <v-row ><v-card-title class="title mx-auto">
           <h4 class = "text-uppercase black--text" > {{person.name}} 
           {{person.surname}} </h4> </v-card-title>
        <v-img contain height="300px" width="400px"
        position="center" :src="person.photo" alt="users photo"/></v-row>
                            
                                <v-card-text class="mx-auto">
                        
                                <p class="ml-5">Wiek: {{person.age}}</p><p><v-icon class="ml-5" small aria-hidden="true">mdi-email</v-icon> {{person.email}}</p>
                                <v-icon class="mr-1 ml-5 mt-n2" aria-hidden="true">mdi-home</v-icon><span>ul.{{person.address.street}}</span>
                                <p class="ml-5">{{person.address.zipcode}} {{person.address.city}}</p>
                                </v-card-text>
                                <v-divider></v-divider>
                                <v-card-text>
                                <span class="text-capitalize"> Zainteresowania:</span> <v-list class="d-flex">
                                <v-list-item v-for="interest in person.interests" :key = "person.interest"
                                class="text-center text-capitalize"> {{interest}} </v-list-item> </v-list> </v-card-text>
                                <v-divider></v-divider>
                                <v-card-actions class="d-flex flex-column">
                                <v-checkbox color = "green accent-5"
                                v-model = "person.friend"
                                label="Przyjaciel"></v-checkbox>
                                
                                <v-btn min-width="100px" dark class="light-green darken-1 font-weight-light text-capitalize" @click="showThumbUp">Lubię!<v-icon v-if="person.like" small color="deep-orange darken-3" class="ml-1" aria-hidden="true">
                                mdi-thumb-up-outline</v-icon>
                                </v-btn><span class="font-weight-medium black--text">{{person.likes}}</span>
                                
                                    </v-card-actions>


                                    <v-divider></v-divider>
                                    <v-card-actions class="deep-orange darken-1">
                             
                                    <v-form @submit.prevent = "addinterest"
                                    class="mx-auto text-center" >
                                        <v-item-group v-if = "person.interests.length < 4" class ="d-flex" >
                                        <v-text-field label = "Nowe zainteresowanie" color = "deep-orange darken-3"
                                    v-model="newInterest">
                                        </v-text-field><v-btn small class="deep-orange--text font-weight-medium align-self-center ml-3"
                                    @click = "addinterest">Dodaj</v-btn></v-item-group> </v-form>
                                    <v-btn @click.prevent="$emit('usun', person.id)" small dark class="black font-weight-light text-capitalize">Usuń konto</v-btn>
                                </v-card-actions>
                                
                                </v-card>
                                
                                
                        </div></v-col>`
});


//Widoki:
const basic = {

    template: `<h1>Main Page</h1>`
}

const moreInfo = {

    template: `<h2>Kontakt</h2>`
}

const usersBox = {

    template: `<h1>users</h1>`
}

const routes = [

    {
        path: '/details',
        component: moreInfo
    },
    {
        path: '/users',
        component: usersBox
    },
    {
        path: '/basic',
        component: basic
    }
]

const router = new VueRouter({

    routes
})



const vm = new Vue({
    el: '#app',
    vuetify: new Vuetify(),

    router: router,
    data: {


        copy: false,
        searching: false,
        search: '',
        users: [],
        persons: [{
                id: 1,
                name: "Piotr",
                surname: "Kwiatkowski",
                age: "28",
                email: "piotr@gmail.com",
                address: {
                    street: "Wiejska 45A",
                    zipcode: "15-300",
                    city: "Białystok"
                },
                friend: true,
                likes: 4,
                like: false,
                photo: "../Images/oleg-ivanov--portrait-young-man-ginger-hair-unsplash.jpg",
                interests: ["psychologia", "muzyka"]
            },
            {
                id: 2,
                name: "Krzysztof",
                surname: "Nowak",
                age: "29",
                email: "iknow@wp.pl",
                address: {
                    street: "Sienkiewicza 12/13",
                    zipcode: "15-400",
                    city: "Białystok"
                },
                friend: false,
                likes: 12,
                photo: "../Images/johan-de-jager-man-in-glasses-unsplash.jpg",
                interests: ["komiksy", "gry wideo", "anime"]
            },
            {
                id: 3,
                name: "Olga",
                surname: "Zielińska",
                age: "32",
                email: "olzie@gmail.com",
                address: {
                    street: "Lipowa 8/10",
                    zipcode: "15-500",
                    city: "Białystok"
                },
                friend: true,
                likes: 15,
                photo: "../Images/kate-kozyrka-portrait-of-a-smiling-woman-unsplash.jpg",
                interests: ["Kino", "muzyka"]
            },
            {
                id: 4,
                name: "Barbara",
                surname: "Kowalska",
                age: "22",
                email: "kowalska@manga.pl",
                address: {
                    street: "Mazowiecka 9B/44",
                    zipcode: "15-600",
                    city: "Białystok"
                },
                friend: false,
                likes: 10,
                photo: "../Images/anastasiya-pavlova-portrait-woman-short-hair-unsplash.jpg",
                interests: ["manga", "anime"]
            },

            {
                id: 5,
                name: "Tomasz",
                surname: "Miauczyński",
                age: 38,
                email: "tomasz.miauczyński@gmail.com",
                address: {
                    street: "E.Orzeszkowej 9a/22",
                    zipcode: "41-303",
                    city: "Dąbrowa Górnicza"
                },
                friend: true,
                likes: 23,
                photo: "../Images/wassim-chouak-bearded-man-in-a-hoodie-unsplash.jpg",
                interests: ["modelarstwo", "historia"]
            },
            {
                id: 6,
                name: "Wojciech",
                surname: "Malinowski",
                age: 33,
                email: "wojciech.malinowski@gmail.com",
                address: {
                    street: "Warszawska 93/24",
                    zipcode: "60-684",
                    city: "Poznań"
                },
                friend: true,
                likes: 123,
                photo: "../Images/cesar-rincon-man-with-beard-and-curly-hairs-unsplash.jpg",
                interests: ["modelarstwo", "historia starożytna"]

            },
            {

                id: 7,
                woman: true,
                name: "Alicja",
                surname: "Wesołowska",
                age: 25,
                email: "alicja.wesołowska@gmail.com",
                address: {
                    street: "Piłsudskiego 65",
                    zipcode: "41-200",
                    city: "Żywiec"
                },
                friend: true,
                likes: 13,
                photo: "../Images/hiva-sharifi-smiling-young-woman-unsplash.jpg",
                interests: ["przyroda", "podróże"]
            },

            {
                id: 8,
                woman: true,
                name: "Wanda",
                surname: "Kwiatkowska",
                age: 24,
                email: "wanda.kwiatkowska@gmail.com",
                address: {
                    street: "Tysiąclecia 25/55",
                    zipcode: "60-682",
                    city: "Zakopane"
                },
                friend: false,
                likes: 8,
                photo: "../Images/lucas-gouvea-woman-with-nose-rings-unsplash.jpg",
                interests: ["wspinaczka", "hodowla owiec"]

            },
            {
                id: 9,
                name: "Maciej",
                surname: "Beksiński",
                age: 32,
                email: "maciej.beksiński@gmail.com",
                address: {
                    street: "Sienkiewicza 22",
                    zipcode: "22-682",
                    city: "Gdańsk"
                },
                friend: true,
                likes: 18,
                photo: "../Images/outi-mahonen-man-in-green-blouse-unsplash.jpg",
                interests: ["sztuki walki", "warcaby"]

            },
            {
                id: 10,
                woman: true,
                name: "Maria",
                surname: "Peszkowska",
                age: 30,
                email: "maria.peszkowska@gmail.com",
                address: {
                    street: "Kasprzaka 56/33",
                    zipcode: "22-300",
                    city: "Olsztyn"
                },
                friend: true,
                likes: 28,
                photo: "../Images/oscar-nord-woman-with-dark-curly-hair-unsplash.jpg",
                interests: ["jazda konna", "łyżwiarstwo figurowe"]
            }
        ]

    },

    created() {

        fetch('./data.json', {
                method: "GET"
            })
            .then(response => response.json())
            .then((data) => {
                this.users = data.users
                console.log(this.users)
            })
            .catch(error => console.log(error))
    },
    methods: {

        searchUser() {
            if (this.search) {
                this.searching = !this.searching;
                console.log(this.searching);


                this.users = this.users.filter(a => (a.surname.toLowerCase() === this.search) || (a.name.toLowerCase() === this.search) || (a.name === this.search) || (a.surname === this.search) || (a.surname.toUpperCase() === this.search) || (a.name.toUpperCase() === this.search));
            }
            this.search = "";

        },

        sortAZ() {

            this.persons.sort((a, b) =>
                a.surname.toLowerCase().localeCompare(b.surname.toLowerCase())
            );

        },

        sortZA() {

            this.persons.sort((a, b) =>
                b.surname.toLowerCase().localeCompare(a.surname.toLowerCase())
            );


        },

        showUsers() {

            this.copy = true;
            this.searching = !this.searching;
        },


        removeProfile(id) {


            let ask = confirm(`Czy na pewno chcesz usunąć konto użytkownika?`)
            if (ask) {
                this.persons = this.persons.filter(user => user.id !== id);
            }

        },
    },

});