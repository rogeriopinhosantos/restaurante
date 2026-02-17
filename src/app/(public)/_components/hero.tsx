import { Button } from "@/components/ui/button";
import Image from "next/image";
import restauranteImg from '../../../../public/restaurante.jpg'

export function Hero(){
    return(
        <section className="bg-white">
           <div className="container mx-auto px-4 pt-20 lg:pb-4 sm:pb-0 sm:px-6 lg:px-8">
                <main className="flex items-center justify-center">
                    <article className="flex-[2] max-w-3xl space-y-8 flex flex-col justify-center">
                        <h1 className="text-3xl lg:text-4xl font-bold max-w-2xl tracking-tight">
                            Encontre os melhores restaurantes em um único local!
                        </h1>
                        <p className="text-base md:text-lg text-gray-600">
                            Nós somos uma plataforma para todos os tipos de restaurantes com 
                            foco em agilizar seu atendimento de formar simplificada e organizada.
                        </p>
                        <Button className="bg-red-500 hover:bg-red-400 w-fit px-6 font-semibold">
                            Encontre um restaurante
                        </Button>    
                    </article>
                    <div className="hidden lg:block">
                        <Image
                            src={restauranteImg}
                            alt="Foto ilustrativa de um restaurante"
                            width={340}
                            height={500}
                            className="object-contain"
                            quality={100}
                            priority
                        />
                    </div>
                </main>
           </div>
        </section>
    )
}