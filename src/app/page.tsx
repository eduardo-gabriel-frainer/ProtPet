import Footer from "./components/footer";
import SecaoIntro from "./components/secaoIntro";
import SecaoSobreNos from "./components/secaoSobreNos";
import SecaoCarousel from "./components/secaoCarousel";

export default function Home() {
  return (
    <div>
      <SecaoIntro/>
      <SecaoSobreNos/>
      <SecaoCarousel/>
      <Footer/>
    </div>
  );
}
