import { faCss3Alt, faHtml5, faJs, faNodeJs, faReact } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import imageRickAndMorty from '../../public/rickandmorty.png'
import imageCarpiShop from '../../public/carpishop.png'
import imageEcommerce from '../../public/e-shop.png'
import imageGameSnake from '../../public/snakeGame.png'
import imageFormValidate from '../../public/form-validate.png'


export default function Projects() {

    const projects = [
        {
            id: 0,
            title: 'Rick and Morty',
            image: imageRickAndMorty,
            description: 'Project made to consume the Rick and Morty API to display the correct data.',
            technologies: ['HTML5', 'CSS3', 'JavaScript', 'React',],
            repository: 'https://github.com/matibustamante7/RickAndMorty_diplomatura',
            demo: 'https://rick-and-morty-diplomatura-h5dm.vercel.app/',
        },
        {
            id: 1,
            title: 'Carpi shoop',
            image: imageCarpiShop,
            description: 'Project ecommerce with cart.',
            technologies: ['HTML5', 'CSS3', 'JavaScript'],
            repository: 'https://github.com/matibustamante7/CarpiShop',
            demo: 'https://carpi-shop.vercel.app/',
        },
        {
            id: 2,
            title: 'Ecommerce Platzi',
            image: imageEcommerce,
            description: 'Ecommerce project currently under development, consuming the Platzi API. It will have many more functionalities and technologies such as integrated Mercado Pago to make payments. It will also have a back end.',
            technologies: ['HTML5', 'Tailwind', 'JavaScript', 'React'],
            repository: 'https://github.com/matibustamante7/ecommerce_apliPlatzi',
            demo: 'https://ecommerce-apli-platzi.vercel.app/',
        },
        {
            id: 3,
            title: 'Snake Game',
            image: imageGameSnake,
            description: 'Project to develop the famous snake game.',
            technologies: ['HTML5', 'CSS3', 'JavaScript'],
            repository: 'https://github.com/matibustamante7/CarpiShop',
            demo: 'https://snake-game-phi-eight.vercel.app/',
        },{
            id: 4,
            title: 'Form Validate',
            image: imageFormValidate,
            description: 'Project ecommerce with cart.',
            technologies: ['HTML5', 'CSS3', 'JavaScript'],
            repository: 'https://github.com/matibustamante7/form-validate-js',
            demo: 'https://form-validate-js.vercel.app/',
        },
        // Puedes seguir agregando más objetos según sea necesario
    ];

    const getIconForTechnology = (technology) => {
        switch (technology.toLowerCase()) {
            case 'html5':
                return faHtml5;
            case 'css3':
                return faCss3Alt;
            case 'javascript':
                return faJs;
            case 'react':
                return faReact;
            case 'node.js':
                return faNodeJs;
            default:
                // Puedes devolver un icono predeterminado o manejar el caso según tus necesidades
                return faHtml5;
        }
    };




    return (
        <div className="sm:h-screen m-auto items-center flex xxs:flex-col xxs:h-max xxs:w-full sm:w-full md:w-2/3">
            <h3 className="text-blue-700 text-3xl">My projects</h3>

            <div id='container_proyects'
            className="flex flex-row flex-wrap justify-center gap-8 xxs:flex-col xxs:items-center sm:flex-col md:flex-row lg:flex-row ">
                {projects.map(project => (
                    <div key={project.id} className=" flex flex-col justify-between border-2 border-gray-800 rounded-3xl items-start p-4 xxs:w-5/6 lg:w-5/12  xl:w-1/4">
                        <h2 className="text-xl font-semibold">{project.title}</h2>
                        <img className="w-full rounded-xl" src={project.image} alt={project.title} />
                        <p className="text-sm my-2">{project.description}</p>
                        <h4 className="underline mb-2">Technologies</h4>
                        <div className="flex flex-row justify-evenly w-full gap-1 flex-wrap">
                            {project?.technologies?.map((tech, index) => (
                                <p key={index} className="text-sky-900 text-3xl">
                                    <FontAwesomeIcon icon={getIconForTechnology(tech)} />
                                </p>
                            ))}
                        </div>
                        <div className="flex flex-row justify-evenly w-full mt-4 gap-1">
                            <button className="px-2 py-1 bg-blue-900 hover:bg-blue-500 rounded-xl">
                                <a href={project.demo} target="_blank">Demo</a>
                            </button>
                            <button className="px-2 py-1 bg-gray-800 hover:bg-gray-700 rounded-xl ">
                                <a href={project.repository} target="_blank">Repository</a>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
