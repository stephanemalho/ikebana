import Link from "next/link";
import { CalendarDays, MapPin } from "lucide-react";

export function ParisCoursesHighlight() {
    return (
        <section id="cours-ikebana-paris" className="w-full py-14 lg:py-16">
            <div className="border border-white/70 bg-[linear-gradient(180deg,rgba(255,250,247,0.96),rgba(243,232,226,0.82))] px-6 py-10 shadow-[0_24px_70px_rgba(84,52,40,0.08)] md:px-10 lg:grid lg:grid-cols-[minmax(0,1.15fr)_minmax(19rem,0.85fr)] lg:gap-12 lg:px-14 lg:py-14">
                <div>
                    <span className="inline-flex border border-[--secondary-color]/15 bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[--secondary-color]/70">
                        Cours à Paris
                    </span>
                    <h2 className="mt-5 max-w-3xl text-3xl font-semibold leading-tight text-[--secondary-color] md:text-4xl" style={{ fontFamily: "var(--playfair-display)" }}>
                        Cours d&apos;ikebana à Paris 1er
                    </h2>
                    <p className="mt-5 max-w-3xl text-base leading-8 text-[--secondary-color]/78 md:text-[1.05rem]">
                        Le Chapitre Yvelines-Paris propose des cours d&apos;ikebana selon l&apos;enseignement de l&apos;École Ohara à l&apos;Association Franco-Japonaise de Tenri, au cœur de Paris.
                    </p>
                    <p className="mt-4 max-w-3xl text-base leading-8 text-[--secondary-color]/78 md:text-[1.05rem]">
                        Les cours ont lieu le lundi et le samedi, pour découvrir ou approfondir l&apos;art floral japonais dans une pratique attentive aux saisons, aux lignes et à l&apos;espace.
                    </p>
                    <div className="mt-7 flex flex-wrap gap-3">
                        <Link href="/cours-ikebana-paris" className="inline-flex border border-[--secondary-color]/25 px-4 py-3 text-sm font-medium text-[--secondary-color] transition hover:bg-white">
                            Voir les cours d&apos;ikebana à Paris
                        </Link>
                        <Link href="#cours" className="inline-flex border border-[--secondary-color]/25 px-4 py-3 text-sm font-medium text-[--secondary-color] transition hover:bg-white">
                            Voir les autres lieux de cours
                        </Link>
                    </div>
                </div>

                <aside className="mt-8 border-t border-[--secondary-color]/12 pt-6 text-[--secondary-color] lg:mt-0 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
                    <div className="flex gap-3">
                        <MapPin aria-hidden="true" className="mt-1 shrink-0" size={20} strokeWidth={1.6} />
                        <div>
                            <h3 className="font-medium">Association Franco-Japonaise de Tenri</h3>
                            <address className="mt-2 not-italic leading-7 text-[--secondary-color]/75">
                                8–12 rue Bertin-Poirée<br />
                                75001 Paris
                            </address>
                        </div>
                    </div>
                    <div className="mt-5 flex gap-3 border-t border-[--secondary-color]/12 pt-5">
                        <CalendarDays aria-hidden="true" className="mt-1 shrink-0" size={20} strokeWidth={1.6} />
                        <p className="leading-7 text-[--secondary-color]/75">Cours le lundi et le samedi.</p>
                    </div>
                </aside>
            </div>
        </section>
    );
}
