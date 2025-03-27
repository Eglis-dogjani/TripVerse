
import trimg from './assets/tirana.jpg';

import trimg1 from './assets/Skanderbeg_Monument.jpg';


const navlinks = ["About", "Destinations", "Contact Us","Etc Etc"];

const Tirana = {
    title: "Tirana",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit placeat quam cumque impedit maiores quis ipsum qui! Doloribus, suscipit nobis. Ducimus, voluptas. Nemo ducimus officiis impedit assumenda quas recusandae reiciendis?",
    image: trimg
}

const locations = [Tirana];


const tr1 = {
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit placeat quam cumque impedit maiores quis ipsum qui! Doloribus, suscipit nobis. Ducimus, voluptas. Nemo ducimus officiis impedit assumenda quas recusandae reiciendis?",
    name: "Places of Tirana",
    image: trimg,
    link: "places"
}


const tiranaPage = [tr1];



const Place1 = {
    description: "Skanderbeg Monument in Skanderbeg Square has been regarded for more than half a century as the very centre of Tirana. It commemorates the 15th century nobleman, and hero of the nation for resisting the Ottomans. He is our King Arthur, our William Tell.",
    name: "Skanderbeg Square",
    image: trimg1
}
const Place2 = {
    description: "The Cloud is an art installation placed in front of National Gallery of Arts in Tirana, Albania. Since 2016, the Cloud has served as modern art space for cultural events in Tirana.The Pavilion is a delicate, three-dimensional structure; each unit comprises fine steel bars of 800 and 400 mm rectangles.",
    name: "The Cloud of Sou Fujimoto",
    image: trimg1
}
const Place3 = {
    description: "The Pyramid of Tirana is now the most special attraction in Tirana and can be called the symbol of Albania’s controversial history. The pyramid was erected as a mausoleum of the former dictator Enver Hoxha, with his daughter Pranvera and her husband Klement Kolaneci as architects.",
    name: "The Pyramid of Tirana",
    image: trimg1
}
const places = [Place1, Place2, Place3];

export {locations, tiranaPage, places, navlinks};