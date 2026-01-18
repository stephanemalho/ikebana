import Link from "next/link"
import Container from "../components/ui/Container"

export default function FaqIkebanaPage() {
  return (
    <main className="pt-24">
      <Container>
        <div className="px-4 md:px-6 w-full m-auto">
          <div className="flex flex-col gap-8">
            <Link className="text-[--secondary-color] underline hover:text-black w-fit" href="/">
              Retour a la page accueil
            </Link>
            <div className="grid gap-2">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold" style={{ fontFamily: "var(--playfair-display)" }}>
                FAQ Ikebana
              </h1>
              <p className="text-lg md:text-xl text-[--secondary-color] font-[var(--inter-ikebana)]">
                Reponses aux questions frequentes sur l&apos;ikebana et les cours Ohara.
              </p>
            </div>
            <section className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-semibold text-[--secondary-color] mb-6">Questions frequentes</h2>
              <dl className="space-y-4 text-[--secondary-color] font-[var(--inter-ikebana)]">
                <div>
                  <dt className="font-semibold">Faut-il des prerequis pour debuter ?</dt>
                  <dd>Non, les cours sont ouverts aux debutants et progressent pas a pas.</dd>
                </div>
                <div>
                  <dt className="font-semibold">Quel materiel est necessaire ?</dt>
                  <dd>Un vase adapte et un kenzan sont recommandes, les details sont donnes lors de l&apos;inscription.</dd>
                </div>
                <div>
                  <dt className="font-semibold">Puis-je suivre un cours d&apos;essai ?</dt>
                  <dd>Oui, il est possible de reserver un premier cours pour decouvrir la methode.</dd>
                </div>
              </dl>
            </section>
          </div>
        </div>
      </Container>
    </main>
  )
}
