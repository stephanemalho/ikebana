import { Calendar } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Container from "../ui/Container"

export function ScheduleSection() {
  return (
    <section id="cours" className="w-full py-12 lg:min-h-[700px] bg-[--primary-color]">
      <Container>
        <div className="px-4 md:px-6 w-full m-auto">
          <div className="flex flex-col items-start gap-4 md:gap-8">
            <div className="grid gap-1">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold" style={{ fontFamily: "var(--playfair-display)" }}>
                Nos cours d&apos;Ikebana
              </h2>
              <p className="text-xl text-[--secondary-color] font-[var(--inter-ikebana)]">
                Découvrez les horaires et dates pour l&apos;année 2024/2025
              </p>
              <p className="mt-6 text-md italic text-[--secondary-color] font-[var(--inter-ikebana)]"> Tout nos cours d&apos;Ikebana style Ohara ont lieu à <a className="underline hover:text-black" href="https://www.tenri-paris.com/cultures/ikebana/">l&apos;Association Culturelle Franco-Japonaise de TENRI</a> située au 8 - 12 Rue Bertin Poirée, 75001 Paris, métro Louvre-Rivoli.
              </p>
              <p className="text-md italic text-[--secondary-color] font-[var(--inter-ikebana)]">Contactez Ikuko Kato si vous souhaitez des cours dans les Yvelines (78).
                par mail <a href="mailto:ikuko.kato@free.fr" className="underline hover:text-black">mail de Ikuko Kato</a> ou par téléphone au <a href="tel:+33610366745" className="underline hover:text-black">06 10 36 67 45</a>.
              </p>
            </div>

            <Tabs defaultValue="monday" className="w-full">
              <TabsList className="grid w-full grid-cols-2 bg-white/70">
                <TabsTrigger
                  value="monday"
                  className="text-[--secondary-color] data-[state=active]:bg-[--secondary-color] data-[state=active]:text-white"
                >
                  Cours du Lundi
                </TabsTrigger>
                <TabsTrigger
                  value="saturday"
                  className="text-[--secondary-color] data-[state=active]:bg-[--secondary-color] data-[state=active]:text-white"
                >
                  Cours du Samedi
                </TabsTrigger>
              </TabsList>

              <TabsContent value="monday" className="mt-6">
                <Card className="border-[--secondary-color]/20">
                  <CardHeader className="bg-[--secondary-color]/10 rounded-t-lg">
                    <CardTitle className="text-2xl text-[--secondary-color]">
                      <Calendar className="inline-block mr-2 h-6 w-6" /> Cours du Lundi
                    </CardTitle>
                    <CardDescription className="text-[--secondary-color]/80 font-[var(--inter-ikebana)]">
                      Horaires et dates pour les cours du lundi
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="grid gap-6 md:grid-cols-2">
                      <div>
                        <h3 className="text-xl font-semibold mb-4 text-[--secondary-color]">
                          Horaires
                        </h3>
                        <ul className="space-y-3">
                          <li className="flex items-center gap-2">
                            <Badge className="border-[--secondary-color] bg-white text-[--secondary-color]">débutant</Badge>
                            <span className="text-[--secondary-color]">12h30</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Badge className="border-[--secondary-color] bg-white text-[--secondary-color]">non débutant</Badge>
                            <span className="text-[--secondary-color]">14h30</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Badge className="border-[--secondary-color] bg-white text-[--secondary-color]">non débutant</Badge>
                            <div className="flex flex-col">
                              <span className="text-[--secondary-color]">16h45*</span>
                              <i className="text-xs">Ce cours sera ouvert uniquement lorsque cela sera nécessaire.</i>
                            </div>
                          </li>
                          <li className="flex items-center gap-2">
                            <Badge className="border-[--secondary-color] bg-white text-[--secondary-color]">tous niveaux</Badge>
                            <span className="text-[--secondary-color]">18h30</span>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold mb-4 text-[--secondary-color]">
                          Dates 2025/2026
                          <span className="text-sm font-normal ml-2 text-black">(Susceptible de modifications)</span>
                        </h3>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-[--secondary-color]">
                          <li>12 et 26 janvier 2026</li>
                          <li>9 février 2026</li>
                          <li>30 mars  2026</li>
                          <li>13 avril  2026</li>
                          <li>13 et 27 avril  2026</li>
                          <li>18 mai 2026</li>
                          <li>8 et 22 juin 2026</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="saturday" className="mt-6">
                <Card className="border-[--secondary-color]/20">
                  <CardHeader className="bg-[--secondary-color]/10 rounded-t-lg">
                    <CardTitle className="text-2xl text-[--secondary-color]">
                      <Calendar className="inline-block mr-2 h-6 w-6" /> Cours du Samedi
                    </CardTitle>
                    <CardDescription className="text-[--secondary-color]/80 font-[var(--inter-ikebana)]">
                      Vous pouvez participer à la réalisation d&apos;une ou de deux compositions selon votre choix.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="grid gap-6 md:grid-cols-2">
                      <div>
                        <h3 className="text-xl font-semibold mb-4 text-[--secondary-color]">
                          Horaires
                        </h3>
                        <ul className="space-y-3">
                          <li className="flex items-center gap-2">
                            <Badge className="border-[--secondary-color] bg-white text-[--secondary-color]">débutant</Badge>
                            <span className="text-[--secondary-color]">13h</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Badge className="border-[--secondary-color] bg-white text-[--secondary-color]">débutant, non débutant</Badge>
                            <span className="text-[--secondary-color]">14h30</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Badge className="border-[--secondary-color] bg-white text-[--secondary-color]">débutant, non débutant</Badge>
                            <span className="text-[--secondary-color]">16h30</span>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold mb-4 text-[--secondary-color]">
                          Dates 2024/2025
                          <span className="text-sm font-normal ml-2 text-black">(Susceptible de modifications)</span>
                        </h3>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-[--secondary-color]">
                          <li>10 janvier 2026</li>
                          <li>7 et 28 février 2026</li>
                          <li>11 avril 2026</li>
                          <li>16 mai 2026</li>
                          <li>6 juin 2026</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </Container>
    </section>
  )
}

