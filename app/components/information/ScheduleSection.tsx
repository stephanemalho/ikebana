import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Container from "../ui/Container"

export function ScheduleSection() {
  return (
    <section id="cours" className="w-full py-12 lg:min-h-[700px] bg-gradient-to-t
    from-[--primary-color]
    via-[--primary-color]/60
    to-transparent">
      <Container>
        <div className="px-4 md:px-6 w-full m-auto">
          <div className="flex flex-col items-start gap-4 md:gap-8">
            <div className="grid gap-1">
              <h2 className="text-4xl font-bold" style={{ fontFamily: "var(--playfair-display)" }}>
                Nos cours d&apos;Ikebana
              </h2>
              <p className="text-xl text-[--secondary-color] font-[var(--inter-ikebana)]">
                Retrouvez les lieux de cours et les contacts pour s&apos;inscrire aux ateliers d&apos;Ikebana.
              </p>
            </div>

            <div className="grid w-full gap-6 md:grid-cols-3">
              <Card className="border-[--secondary-color]/20" itemScope itemType="https://schema.org/Place">
                <CardHeader className="bg-[--secondary-color]/10 rounded-t-lg">
                  <CardTitle className="text-2xl text-[--secondary-color]" itemProp="name">
                    Association Tenri
                  </CardTitle>
                  <CardDescription className="text-[--secondary-color]/80 font-[var(--inter-ikebana)]">
                    Cours le lundi et le samedi
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6 space-y-4 text-[--secondary-color] font-[var(--inter-ikebana)]">
                  <div>
                    <h3 className="text-lg font-semibold text-[--secondary-color]">Adresse</h3>
                    <address
                      className="not-italic"
                      itemProp="address"
                      itemScope
                      itemType="https://schema.org/PostalAddress"
                    >
                      <span itemProp="streetAddress">8-12 Rue Bertin Poirée</span>
                      <br />
                      <span itemProp="postalCode">75001</span>{" "}
                      <span itemProp="addressLocality">Paris</span>
                    </address>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[--secondary-color]">Contact</h3>
                    <ul className="space-y-2">
                      <li>
                        <a className="underline hover:text-black" href="tel:+33144760606" itemProp="telephone">
                          01 44 76 06 06
                        </a>
                      </li>
                      <li>
                        <a
                          className="underline hover:text-black"
                          href="https://www.tenri-paris.com/contact/"
                          itemProp="url"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Page de contact
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[--secondary-color]">Liens utiles</h3>
                    <ul className="space-y-2">
                      <li>
                        <a
                          className="underline hover:text-black"
                          href="https://www.tenri-paris.com/cultures/ikebana/"
                          itemProp="url"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Site de l&apos;association
                        </a>
                      </li>
                      <li>
                        <a
                          className="underline hover:text-black"
                          href="https://share.google/vGRB9D9d3TEmGp40n"
                          itemProp="hasMap"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Localisation Google
                        </a>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-[--secondary-color]/20" itemScope itemType="https://schema.org/Place">
                <CardHeader className="bg-[--secondary-color]/10 rounded-t-lg">
                  <CardTitle className="text-2xl text-[--secondary-color]" itemProp="name">
                    Centre culturel de Courbevoie
                  </CardTitle>
                  <CardDescription className="text-[--secondary-color]/80 font-[var(--inter-ikebana)]">
                    Cours au centre culturel
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6 space-y-4 text-[--secondary-color] font-[var(--inter-ikebana)]">
                  <div>
                    <h3 className="text-lg font-semibold text-[--secondary-color]">Adresse</h3>
                    <address
                      className="not-italic"
                      itemProp="address"
                      itemScope
                      itemType="https://schema.org/PostalAddress"
                    >
                      <span itemProp="streetAddress">14bis square de l&apos;Hôtel de ville</span>
                      <br />
                      <span itemProp="postalCode">92400</span>{" "}
                      <span itemProp="addressLocality">Courbevoie</span>
                    </address>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[--secondary-color]">Contact</h3>
                    <ul className="space-y-2">
                      <li>
                        <a className="underline hover:text-black" href="tel:+33171057949" itemProp="telephone">
                          01 71 05 79 49
                        </a>
                      </li>
                      <li>
                        <a
                          className="underline hover:text-black"
                          href="https://www.ville-courbevoie.fr/2801/culture-loisirs/centres-culturels.htm"
                          itemProp="url"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Informations et contact
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[--secondary-color]">Localisation</h3>
                    <a
                      className="underline hover:text-black"
                      href="https://share.google/0i7nt448AZ2B7bZeg"
                      itemProp="hasMap"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Voir sur Google
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-[--secondary-color]/20" itemScope itemType="https://schema.org/Place">
                <CardHeader className="bg-[--secondary-color]/10 rounded-t-lg">
                  <CardTitle className="text-2xl text-[--secondary-color]" itemProp="name">
                    Association Fleurs &amp; Japon
                  </CardTitle>
                  <CardDescription className="text-[--secondary-color]/80 font-[var(--inter-ikebana)]">
                    Cours à Gif-sur-Yvette
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6 space-y-4 text-[--secondary-color] font-[var(--inter-ikebana)]">
                  <div>
                    <h3 className="text-lg font-semibold text-[--secondary-color]">Adresse</h3>
                    <address
                      className="not-italic"
                      itemProp="address"
                      itemScope
                      itemType="https://schema.org/PostalAddress"
                    >
                      <span itemProp="streetAddress">3 All. de l&apos;Étang</span>
                      <br />
                      <span itemProp="postalCode">91190</span>{" "}
                      <span itemProp="addressLocality">Gif-sur-Yvette</span>
                    </address>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[--secondary-color]">Contact</h3>
                    <ul className="space-y-2">
                      <li>
                        <a className="underline hover:text-black" href="tel:+33632569075" itemProp="telephone">
                          06 32 56 90 75
                        </a>
                      </li>
                      <li>
                        <a
                          className="underline hover:text-black"
                          href="mailto:ikuko.kato@free.fr"
                          itemProp="email"
                        >
                          ikuko.kato@free.fr
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[--secondary-color]">Liens utiles</h3>
                    <ul className="space-y-2">
                      <li>
                        <a
                          className="underline hover:text-black"
                          href="https://www.parc-naturel-chevreuse.fr/fleurs-et-japon"
                          itemProp="url"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Présentation de l&apos;association
                        </a>
                      </li>
                      <li>
                        <a
                          className="underline hover:text-black"
                          href="https://annuaire-entreprises.data.gouv.fr/etablissement/87765186900019"
                          itemProp="url"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Fiche annuaire
                        </a>
                      </li>
                      <li>
                        <a
                          className="underline hover:text-black"
                          href="https://www.google.com/maps/place/3+All.+de+l'%C3%89tang,+91190+Gif-sur-Yvette/@48.7018837,2.1374972,17z/data=!3m1!4b1!4m6!3m5!1s0x47e67f7ce2bb20d9:0x53641636c83643b!8m2!3d48.7018837!4d2.1400721!16s%2Fg%2F11cpgzx9wj?entry=ttu&g_ep=EgoyMDI2MDExMy4wIKXMDSoASAFQAw%3D%3D"
                          itemProp="hasMap"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Localisation Google
                        </a>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
