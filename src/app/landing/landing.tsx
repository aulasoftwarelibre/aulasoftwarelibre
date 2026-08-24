import Carousel from "./carousel"; // ⚠️ Ajusta esta ruta dependiendo de dónde guardaste carousel.tsx
import Image from "next/image";
import facebookImg from "../assets/facebook.png";
import instaImg from "../assets/instagram.png";
import telegramImg from "../assets/telegram.png";
import linkedinImg from "../assets/linkedin.png";
import twitterImg from "../assets/x.png";
import youtubeImg from "../assets/youtube.png";
import githubImg from "../assets/github.png";

interface RRSS {
  id: number;
  image: any;
  alt: string;
  url: string;
}

const socials: RRSS[] = [
  {
    id: 1,
    image: facebookImg,
    alt: "facebook logo",
    url: "https://www.facebook.com/AulaSoftwareLibre/",
  },
  {
    id: 2,
    image: instaImg,
    alt: "instagram logo",
    url: "https://www.instagram.com/aulasoftwarelibre/?hl=es",
  },
  {
    id: 3,
    image: telegramImg,
    alt: "telegram logo",
    url: "https://t.me/AulaSoftwareLibreUCO",
  },
  {
    id: 4,
    image: linkedinImg,
    alt: "linkedin logo",
    url: "https://www.linkedin.com/company/aulasoftwarelibre/posts/?feedView=all",
  },
  {
    id: 5,
    image: twitterImg,
    alt: "twitter logo",
    url: "https://x.com/aulasl",
  },
  {
    id: 6,
    image: githubImg,
    alt: "github logo",
    url: "https://github.com/aulasoftwarelibre",
  },
  {
    id: 7,
    image: youtubeImg,
    alt: "youtube logo",
    url: "https://www.youtube.com/c/AulaSoftwareLibre",
  },
];


export default function Landing() {
    return (
        <div className="w-[80%] flex flex-col items-center bg-white justify-self-center -mt-20">
            {/* 
              Aquí puedes poner más cosas de tu landing page arriba 
              (títulos, textos de bienvenida, etc.) 
            */}
            
            {/* Llamamos a nuestro nuevo componente inteligente */}
            <Carousel />
            <div className="grid grid-cols-2 w-[80%] pt-[4vw] justify-self-center justify-items-center">
                <p className="h-200 text-black text-3xl">¡Bienvenido!<br/><br/>El <b>Aula de Software Libre</b> de la Universidad de Córdoba es una entidad universitaria para el fomento y la difusión del <b>Software Libre</b> dentro de la comunidad universitaria y en la sociedad en general.<br/><br/>Gracias a la gran iniciativa y el espiritu de los estudiantes del Aula llevamos más de 15 años compartiendo conocimiento con el resto de la comunidad tecnológica de Córdoba.</p>
                <Image
                    src="pinhuevo-transparente.png"
                    alt="pinhuevo-transparente"
                    width={400}
                    height={400}
                />
            </div>
            <div>
                <p className="text-black text-3xl justify-self-center">¡Siguenos en nuestras redes sociales!</p>
                <div className="grid grid-cols-7 p-20 gap-10 justify-center">
                    {socials.map((social) => (
                    <div key={social.id} className="">
                        <a href={social.url}>
                        <Image
                            src={social.image}
                            alt={social.alt}
                            width={50}
                            height={50}
                        />
                        </a>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    );
}