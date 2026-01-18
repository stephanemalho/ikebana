import Link from "next/link"
import Container from "../components/ui/Container"
import ImageIkebana from "../components/imageIkebana/ImageIkebana"

export default function GalerieIkebanaPage() {
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
                Galerie Ikebana Ohara
              </h1>
              <p className="text-lg md:text-xl text-[--secondary-color] font-[var(--inter-ikebana)]">
                Selection de compositions par themes et inspirations saisonnieres.
              </p>
            </div>
            <section className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-semibold text-[--secondary-color] mb-4">Compositions et inspirations</h2>
              <p className="text-[--secondary-color] font-[var(--inter-ikebana)] leading-relaxed">
                Explorez des compositions Ohara et des inspirations visuelles pour mieux comprendre l&apos;equilibre des formes,
                des couleurs et des volumes.
              </p>
            </section>
          </div>
        </div>
      </Container>
      <Container>
        <ImageIkebana />
      </Container>
    </main>
  )
}
