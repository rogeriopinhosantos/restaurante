import getSession from '@/lib/getSession'
import {redirect} from 'next/navigation'
export default function Categories(){

       const session = await getSession();
    
        if (!session) {
            redirect("/")
        }

    return(
        <section>
            <h1>Página de Categorias</h1>
        </section>
    )
}