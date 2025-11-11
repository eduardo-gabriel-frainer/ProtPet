import CardOng from "../components/cardOng";
import Footer from "../components/footer";

export default function CadastroAnimais() {
  return (
    <div className="min-h-screen bg-amber-50 flex flex-col">
      <div className="flex flex-wrap justify-center gap-10 py-16">
        <CardOng
          image="/ONG.png"
          nome="Patinhas Solidárias"
          descricaoCurta="Resgate e reabilitação de animais abandonados"
          descricaoLonga="Trabalhamos há 15 anos no resgate, tratamento veterinário e adoção responsável de cães e gatos em situação de abandono. Atendemos mais de 200 animais por ano."
          telefone="+351 912 345 678"
          email="contato@patinhassolidarias.pt"
          endereco="Rua dos Animais 123 - Lisboa"
          pix="patinhas@solidarias.pt"
          paypal="donate@solidarias.pt"
        />

        <CardOng
          image="/ONG.png"
          nome="Amigos dos Bichos"
          descricaoCurta="Acolhimento e adoção responsável"
          descricaoLonga="Ajudamos animais a encontrar um lar amoroso e proporcionamos cuidados veterinários para aqueles que foram abandonados Ajudamos animais a encontrar um lar amoroso e proporcionamos."
          telefone="+351 987 654 321"
          email="amigos@bichos.pt"
          endereco="Av. dos Pássaros 45 - Porto"
          pix="amigos@pix.pt"
          paypal="paypal@bichos.pt"
        />
      </div>

      <Footer />
    </div>
  );
}
