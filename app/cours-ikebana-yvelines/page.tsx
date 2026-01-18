import Link from "next/link"
import Container from "../components/ui/Container"

export default function CoursIkebanaYvelinesPage() {
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
                Cours d&apos;Ikebana dans les Yvelines
              </h1>
              <p className="text-lg md:text-xl text-[--secondary-color] font-[var(--inter-ikebana)]">
                Cours d&apos;ikebana dans les Yvelines avec acces aux informations locales.
              </p>
            </div>
            <section className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-semibold text-[--secondary-color] mb-4">Cours en region</h2>
              <p className="text-[--secondary-color] font-[var(--inter-ikebana)] leading-relaxed">
                Cette page centralise les informations pratiques pour les cours dans les Yvelines. Consultez les lieux et
                les contacts pour planifier votre inscription.
              </p>
              <Link className="inline-block mt-4 underline hover:text-black text-[--secondary-color]" href="/cours-ikebana">
                Voir les lieux et contacts
              </Link>
            </section>
          </div>
        </div>
      </Container>
    </main>
  )
}
