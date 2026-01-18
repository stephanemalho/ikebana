import Link from "next/link"
import Container from "../components/ui/Container"
import { ScheduleSection } from "../components/information/ScheduleSection"

export default function CoursIkebanaPage() {
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
                Cours d&apos;Ikebana Ohara
              </h1>
              <p className="text-lg md:text-xl text-[--secondary-color] font-[var(--inter-ikebana)]">
                Apprendre l&apos;ikebana avec une approche progressive, du debutant au niveau avance.
              </p>
            </div>
            <section className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-semibold text-[--secondary-color] mb-4">Les formats de cours</h2>
              <ul className="text-[--secondary-color] font-[var(--inter-ikebana)] space-y-2">
                <li>Initiation et bases techniques pour debutant.</li>
                <li>Perfectionnement des styles Ohara pour niveaux intermediaires.</li>
                <li>Suivi personnalise et progression vers des compositions avancees.</li>
              </ul>
            </section>
          </div>
        </div>
      </Container>
      <ScheduleSection />
    </main>
  )
}
