import Carousel from "./carousel.tsx"; // ⚠️ Ajusta esta ruta dependiendo de dónde guardaste carousel.tsx

export default function Landing() {
    return (
        <div className="w-[80%] flex flex-col items-center bg-white justify-self-center -mt-5">
            {/* 
              Aquí puedes poner más cosas de tu landing page arriba 
              (títulos, textos de bienvenida, etc.) 
            */}
            
            {/* Llamamos a nuestro nuevo componente inteligente */}
            <Carousel />

            <p className="h-200 text-black">¡Bienvenido al Aula de Software!</p>
        </div>
    );
}