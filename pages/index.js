import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home(){
  return (
      <>
        <div>
          <Navbar />
        </div>

        <h1> Página Inicial </h1>
        <video controls>
          <source src="video_ica.mp4" type="video/mp4" />
        </video>


        <div>
          <Footer/>
        </div>
      </>
      
  );
}

