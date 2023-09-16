import img1 from '../../asset/portfolio/img1.png'
import img2 from '../../asset/portfolio/img2.png'
import img3 from '../../asset/portfolio/img3.png'
interface Project {
    id: number;
    img: string;
    name: string;
    category: string;
}

export const portfolio_data: Project[] = [
    {
        id:1,
        img: "https://i.ibb.co/kK4R233/img1.png",
        name: "Dentistry website",
        category: "Landing page"
    },
    {
        id:2,
        img: "https://i.ibb.co/L6LdYCt/img2.png",
        name: "Vegmart app case study",
        category: "App Design"
    },
    {
        id:3,
        img: "https://i.ibb.co/X42g6Vy/img3.png",
        name: "Music Event app case study",
        category: "App Design"
    }
]

<<<<<<< HEAD
// use https://jsonkeeper.com/b/1D8F for portfolio datas

=======
export const categories =[
    "View all",
    "Landing page",
    "App Design"
]
>>>>>>> 947ac79e882378857c4f401c8654a899cf6459b4
