import Link from "next/link"
import Container from "../components/ui/Container"

export default function EcoleIkebanaOharaPage() {
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
                Ecole d&apos;Ikebana Ohara
              </h1>
              <p className="text-lg md:text-xl text-[--secondary-color] font-[var(--inter-ikebana)]">
                Presentation de l&apos;ecole, de l&apos;enseignement et de l&apos;affiliation Ohara.
              </p>
            </div>
            <section className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-semibold text-[--secondary-color] mb-4">
                Une ecole reconnue pour l&apos;enseignement Ohara
              </h2>
              <p className="text-[--secondary-color] font-[var(--inter-ikebana)] leading-relaxed">
                Cette page presente l&apos;identite de l&apos;ecole, la methode pedagogique et les lieux d&apos;enseignement a Paris et
                dans les Yvelines. Elle met en avant la legitimite de l&apos;affiliation a l&apos;ecole Ohara et le parcours
                d&apos;enseignement.
              </p>
            </section>
          </div>
        </div>
      </Container>
    </main>
  )
}
