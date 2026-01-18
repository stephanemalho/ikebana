import Link from "next/link"
import Container from "../components/ui/Container"

export default function InscriptionIkebanaPage() {
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
                Inscription aux cours d&apos;Ikebana
              </h1>
              <p className="text-lg md:text-xl text-[--secondary-color] font-[var(--inter-ikebana)]">
                Modalites d&apos;inscription, materiel requis et etapes pour rejoindre les cours.
              </p>
            </div>
            <section className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-semibold text-[--secondary-color] mb-4">Comment s&apos;inscrire</h2>
              <ol className="list-decimal list-inside text-[--secondary-color] font-[var(--inter-ikebana)] space-y-2">
                <li>Choisir le lieu et le format de cours adapte a votre niveau.</li>
                <li>Contacter l&apos;ecole pour valider une place et les disponibilites.</li>
                <li>Confirmer l&apos;inscription et preparer le materiel recommande.</li>
              </ol>
              <Link className="inline-block mt-4 underline hover:text-black text-[--secondary-color]" href="/contact">
                Contacter l&apos;ecole
              </Link>
            </section>
          </div>
        </div>
      </Container>
    </main>
  )
}
