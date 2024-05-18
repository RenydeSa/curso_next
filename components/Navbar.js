
import Link from "next/link";

export default function Navbar() {
  return (
        <div>
           <ul>
                <li>
                    <h2> Home </h2>
                </li>
                <li>
                    <Link href="/products">
                    <h2> Produtos </h2>
                    </Link>
                </li>
            </ul>
        </div>
  );
}