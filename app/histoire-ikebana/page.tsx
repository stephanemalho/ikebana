import Link from "next/link"
import Container from "../components/ui/Container"

export default function HistoireIkebanaPage() {
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
                Histoire de l&apos;Ikebana
              </h1>
              <p className="text-lg md:text-xl text-[--secondary-color] font-[var(--inter-ikebana)]">
                Origines de l&apos;ikebana et evolution de cet art japonais.
              </p>
            </div>
            <section className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-semibold text-[--secondary-color] mb-4">Des origines rituelles a l&apos;art moderne</h2>
              <p className="text-[--secondary-color] font-[var(--inter-ikebana)] leading-relaxed">
                L&apos;ikebana est ne des offrandes florales dans les temples bouddhistes. Au fil des siecles, cette pratique est
                devenue un art a part entiere, fonde sur l&apos;asymetrie, le rythme et la maitrise de l&apos;espace vide.
              </p>
            </section>
          </div>
        </div>
      </Container>
    </main>
  )
}
