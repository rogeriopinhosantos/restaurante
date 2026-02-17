import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from "next/image"
import FotoImg from '../../../../public/restaurante_1.jpg'
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function Restaurants(){
 return(
    <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl text-center mb-12 font-bold">Restaurantes Disponíveis</h2>
        </div>
        <section className="grid grid-cols-1 gap-6 sm:grid-col-2 lg:grid-cols-4">
            <Card className="overflow-hidden m-2">                
                <CardContent className="p-0">
                    <div>
                        <div className="relative h-48">
                            <Image
                            src={FotoImg}
                            alt="foto do restaurante"
                            fill
                            className="object-cover"/>
                        </div>
                    </div>
                    <div className="p-4 space-y-4">
                        <div className="flex items-center justify-between">
                            <div>
                                <h3 className="font-semibold">
                                    Clinica centro
                                </h3>
                                <p className="text-sm text-gray-500">
                                    Rua x , centro, Campo Grande - MS
                                </p>
                            </div>
                            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500">

                            </div>
                        </div>
                        <Link 
                        href="/restaurant/123"
                        className="w-full bg-red-500 hover:bg-red-400 text-white flex items-center 
                        justify-center py-2 rounded-md text-sm md:text-base font-medium">
                            Fazer pedido
                            <ArrowRight className="ml-2"/>
                        </Link>
                    </div>
                </CardContent>
            </Card>              
        </section>
    </section>
 )
}