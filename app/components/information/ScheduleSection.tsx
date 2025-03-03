import { Calendar } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function ScheduleSection() {
  return (
    <section id="cours" className="w-full py-12 lg:min-h-[700px] bg-[#F7E5E6]">
      <div className="container px-4 md:px-6 w-[80%] m-auto ">
        <div className="flex flex-col items-start gap-4 md:gap-8">
          <div className="grid gap-1">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[--secondary-color]">
              Vos cours d&apos;Ikebana
            </h2>
            <p className="text-xl text-[--secondary-color] font-[var(--plus-jakarta-sans)]">
              Découvrez nos horaires et dates pour l&apos;année 2024/2025
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
              <Card data-aos="fade-left" className="border-[--secondary-color]/20">
                <CardHeader className="bg-[--secondary-color]/10 rounded-t-lg">
                  <CardTitle className="text-2xl text-[--secondary-color]">
                    <Calendar className="inline-block mr-2 h-6 w-6" /> Cours du Lundi
                  </CardTitle>
                  <CardDescription className="text-[--secondary-color]/80 font-[var(--plus-jakarta-sans)]">
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
                          <span className="text-[--secondary-color]">16h45</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Badge className="border-[--secondary-color] bg-white text-[--secondary-color]">tous niveaux</Badge>
                          <span className="text-[--secondary-color]">18h30</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-4 text-[--secondary-color]">
                        Dates 2024/2025
                        <span className="text-sm font-normal ml-2 text-black">(Susceptible de modifications)</span>
                      </h3>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-[--secondary-color]">
                        <li>17 mars 2025</li>
                        <li>14 et 28 avril 2025</li>
                        <li>12 et 26 mai 2025</li>
                        <li>16 et 30 juin 2025</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="saturday" className="mt-6">
              <Card data-aos="fade-right" className="border-[--secondary-color]/20">
                <CardHeader className="bg-[--secondary-color]/10 rounded-t-lg">
                  <CardTitle className="text-2xl text-[--secondary-color]">
                    <Calendar className="inline-block mr-2 h-6 w-6" /> Cours du Samedi
                  </CardTitle>
                  <CardDescription className="text-[--secondary-color]/80 font-[var(--plus-jakarta-sans)]">
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
                        <li>15 mars 2025</li>
                        <li>12 avril 2025</li>
                        <li>10 mai 2025</li>
                        <li>14 juin 2025</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  )
}

