import Link from "next/link"
import Container from "../components/ui/Container"

export default function EcoleOharaPage() {
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
                Ecole Ohara
              </h1>
              <p className="text-lg md:text-xl text-[--secondary-color] font-[var(--inter-ikebana)]">
                Comprendre l&apos;ecole Ohara et ses particularites par rapport aux autres courants.
              </p>
            </div>
            <section className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-semibold text-[--secondary-color] mb-4">Une approche paysagere</h2>
              <p className="text-[--secondary-color] font-[var(--inter-ikebana)] leading-relaxed">
                L&apos;ecole Ohara se distingue par le style Moribana et une attention particuliere aux paysages. Cette page
                presente les differences avec d&apos;autres ecoles et explique la philosophie de l&apos;approche Ohara.
              </p>
            </section>
          </div>
        </div>
      </Container>
    </main>
  )
}
