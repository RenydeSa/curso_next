import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Link from "next/link";
export default function Products(){
    return(
        <>
            <div>
                <Navbar />
            </div>
            <h1> Página de Produtos </h1>

            <div>
                <ul>
                    <li>
                        <Link href="/products/shirt">
                            <h3> Camisa </h3>
                        </Link>
                    </li>
                    <li>
                        <Link href="/products/pants/redpants">
                            <h3> Calça Vermelha </h3>
                        </Link>
                    </li>
                    <li>
                        <Link href="/products/pants/bluepants">
                            <h3> Calça Azul </h3>
                        </Link>
                    </li>
                </ul>
            </div>

            <div>
                <button>
                    <Link href="/">
                        Voltar para Home
                    </Link>
                </button>
            </div>

            <div>
                <Footer/>
            </div>
        </>
        
    );

}