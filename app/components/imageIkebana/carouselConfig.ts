// src/config/carouselConfig.ts

export type carouselItemType = {
    imageUrl: string;
    altText: string;
    title: string;
    description: string;
};

export type carouselMetadataType = {
    id: string;
    title: string;
    description: string;
    seeMoreUrl?: string;
    items: carouselItemType[];
};

export const carouselIkebanaData: carouselMetadataType = {
    id: "creations-ikebana",
    title: "Créations Ikebana École Ohara",
    description:
        "Plongez dans l'esthétique de l'école Ohara, reconnue pour son approche naturaliste et son attention profonde aux saisons (四季,shiki). Les formes Moribana, Heika ou Rimpa expriment chacune un rapport unique au paysage, à la lumière et au cycle naturel. Ces créations illustrent l'essence même de l'ikebana : saisir l'instant présent à travers les fleurs.",
    seeMoreUrl: "Voir plus de créations pour chaque saisons",
    items: [
        {
            imageUrl: "/images/ikebana-creation/heika-4-saisons.webp",
            altText: "Arrangement Heika quatre saisons style Ohara",
            title: "Heika 4 Saisons",
            description:
                "Style Heika Ohara représentant l'harmonie des quatre saisons dans un seul arrangement, exprimant le cycle naturel de la vie."
        },
        {
            imageUrl:
                "/images/ikebana-creation/katamukeru-katachi-printemps.webp",
            altText: "Arrangement Katamukeru Katachi printemps style Ohara",
            title: "Katamukeru Katachi Printemps",
            description:
                "Style Ohara du printemps avec forme inclinée, symbolisant le réveil de la nature et l'énergie nouvelle qui émerge."
        },
        {
            imageUrl: "/images/ikebana-creation/mawaru-katachi-4-saisons.webp",
            altText: "Arrangement Mawaru Katachi quatre saisons style Ohara",
            title: "Mawaru Katachi 4 Saisons",
            description:
                "Forme circulaire Ohara évoquant le mouvement cyclique des saisons et l'éternité du temps qui passe."
        },
        {
            imageUrl:
                "/images/ikebana-creation/moribana-chokuritsu-kei-ete.webp",
            altText: "Arrangement Moribana Chokuritsu Kei été style Ohara",
            title: "Moribana Chokuritsu Kei Été",
            description:
                "Style Moribana vertical d'été Ohara, capturant la force et la vitalité de la saison chaude avec des lignes droites."
        },
        {
            imageUrl:
                "/images/ikebana-creation/moribana-tashu-ike-4-saisons.webp",
            altText:
                "Arrangement Moribana Tashu Ike quatre saisons style Ohara",
            title: "Moribana Tashu Ike 4 Saisons",
            description:
                "Style Moribana multi-variétés Ohara célébrant la diversité florale à travers les quatre saisons."
        },
        {
            imageUrl:
                "/images/ikebana-creation/moribana-tashu-ike-printemps.webp",
            altText: "Arrangement Moribana Tashu Ike printemps style Ohara",
            title: "Moribana Tashu Ike Printemps",
            description:
                "Moribana printanier Ohara mélangeant plusieurs variétés pour célébrer l'explosion florale du printemps."
        },
        {
            imageUrl: "/images/ikebana-creation/narabu-katachi-4-saisons.webp",
            altText: "Arrangement Narabu Katachi quatre saisons style Ohara",
            title: "Narabu Katachi 4 Saisons",
            description:
                "Forme alignée Ohara représentant l'harmonie et l'équilibre constant à travers toutes les saisons."
        },
        {
            imageUrl: "/images/ikebana-creation/rimpa-cho-automne.webp",
            altText: "Arrangement Rimpa Cho automne style Ohara",
            title: "Rimpa Cho Automne",
            description:
                "Style Rimpa décoratif d'automne Ohara, évoquant la beauté mélancolique et les couleurs chaudes de la saison."
        },
        {
            imageUrl: "/images/ikebana-creation/rimpa-cho-ete.webp",
            altText: "Arrangement Rimpa Cho été variation style Ohara",
            title: "Rimpa Cho Été Variation",
            description:
                "Variation du style Rimpa d'été Ohara, montrant la richesse créative possible avec les fleurs estivales."
        },
        {
            imageUrl: "/images/ikebana-creation/rimpa-cho-jaune-automne.webp",
            altText: "Arrangement Rimpa Cho jaune automne style Ohara",
            title: "Rimpa Cho Jaune Automne",
            description:
                "Rimpa automnal Ohara aux tons dorés, capturant l'essence des feuillages d'automne et leur beauté éphémère."
        },
        {
            imageUrl: "/images/ikebana-creation/rimpa-cho-printemps.webp",
            altText: "Arrangement Rimpa Cho printemps style Ohara",
            title: "Rimpa Cho Printemps",
            description:
                "Style Rimpa printanier Ohara célébrant le renouveau et la fraîcheur des premières fleurs de la saison."
        },
        {
            imageUrl: "/images/ikebana-creation/rimpa-cho-rouge-automne.webp",
            altText: "Arrangement Rimpa Cho rouge automne style Ohara",
            title: "Rimpa Cho Rouge Automne",
            description:
                "Rimpa automnal Ohara aux couleurs flamboyantes, exprimant l'intensité et la passion de la saison rouge."
        },
        {
            imageUrl:
                "/images/ikebana-creation/shakei-moribana-shizen-honi-printemps.webp",
            altText:
                "Arrangement Shakei Moribana Shizen Honi printemps style Ohara",
            title: "Shakei Moribana Shizen Honi Printemps",
            description:
                "Moribana paysagé naturel Ohara du printemps, recréant un paysage miniature avec la beauté sauvage de la nature."
        },
        {
            imageUrl:
                "/images/ikebana-creation/shakei-moribana-youshiki-honi-ete.webp",
            altText:
                "Arrangement Shakei Moribana Youshiki Honi été style Ohara",
            title: "Shakei Moribana Youshiki Honi Été",
            description:
                "Moribana paysagé stylisé Ohara d'été, combinant tradition et modernité dans un paysage floral raffiné."
        },
        {
            imageUrl:
                "/images/ikebana-creation/shikisai-moribana-youshiki-honi.webp",
            altText: "Arrangement Shikisai Moribana Youshiki Honi style Ohara",
            title: "Shikisai Moribana Youshiki Honi",
            description:
                "Moribana coloré Ohara utilisant la technique des couleurs harmonieuses pour créer un paysage floral vibrant et équilibré."
        }
    ]
};

export const carouselInspirationData: carouselMetadataType = {
    id: "inspirations-ikebana",
    title: "Sources d'Inspiration pour l'Ikebana",
    description:
        "Découvrez une collection d'inspirations florales qui nourrissent l'âme créatrice. Initiez-vous à l'art de l'ikebana et apprenez à transformer l'inspiration naturelle en compositions raffinées, porteuses de sens et d'émotion..",
    seeMoreUrl: "Voir plus d'inspirations pour l'ikebana",
    items: [
        {
            imageUrl:
                "/images/inspiration-for-ikebana/blue-and-violet-flower.webp",
            altText: "Arrangement de fleurs bleues et violettes",
            title: "Harmonie des Bleus",
            description:
                "Un mélange délicat de nuances bleues et violettes pour apaiser l'âme."
        },
        {
            imageUrl: "/images/inspiration-for-ikebana/blue-flower.webp",
            altText: "Fleur bleue en arrangement ikebana",
            title: "Sérénité Azurée",
            description:
                "La pureté du bleu exprime la tranquillité et la méditation profonde."
        },
        {
            imageUrl: "/images/inspiration-for-ikebana/big-sakura-white.webp",
            altText: "Grand arrangement de sakura blanc",
            title: "Élégance du Sakura",
            description:
                "La beauté éphémère des cerisiers en fleurs, symbole du renouveau."
        },
        {
            imageUrl: "/images/inspiration-for-ikebana/night-sakure.webp",
            altText: "Sakura nocturne",
            title: "Mystère Nocturne",
            description:
                "Les sakura sous la lune révèlent leur beauté mystérieuse et envoûtante."
        },
        {
            imageUrl:
                "/images/inspiration-for-ikebana/japanese-silver-grass.webp",
            altText: "Herbe argentée japonaise",
            title: "Grâce Argentée",
            description:
                "L'herbe argentée danse avec légèreté, symbole de flexibilité."
        },
        {
            imageUrl: "/images/inspiration-for-ikebana/green-grass.webp",
            altText: "Herbes vertes en composition",
            title: "Fraîcheur Naturelle",
            description:
                "La simplicité des herbes vertes évoque la vitalité de la nature."
        },
        {
            imageUrl: "/images/inspiration-for-ikebana/orange-flower.webp",
            altText: "Fleur orange éclatante",
            title: "Éclat Solaire",
            description:
                "L'orange vibrant apporte chaleur et énergie positive à votre espace."
        },
        {
            imageUrl: "/images/inspiration-for-ikebana/pink-flower.webp",
            altText: "Fleur rose délicate",
            title: "Douceur Rosée",
            description:
                "La tendresse du rose exprime l'amour et la compassion universelle."
        },
        {
            imageUrl: "/images/inspiration-for-ikebana/pink-sakura-day.webp",
            altText: "Arrangement de sakura roses",
            title: "Romance Printanière",
            description:
                "Les sakura roses célèbrent l'amour naissant et les nouveaux commencements."
        },
        {
            imageUrl: "/images/inspiration-for-ikebana/pink-sakura-tree.webp",
            altText: "Arbre de sakura rose",
            title: "Majesté Florale",
            description:
                "Un arbre entier de sakura roses, symbole de beauté et d'impermanence."
        },
        {
            imageUrl: "/images/inspiration-for-ikebana/red-flower.webp",
            altText: "Fleur rouge passionnée",
            title: "Passion Ardente",
            description:
                "Le rouge intense évoque la passion, la force et la détermination."
        },
        {
            imageUrl: "/images/inspiration-for-ikebana/rose.webp",
            altText: "Rose classique",
            title: "Élégance Intemporelle",
            description:
                "La rose, reine des fleurs, exprime l'amour dans sa forme la plus pure."
        },
        {
            imageUrl: "/images/inspiration-for-ikebana/sakura-white.webp",
            altText: "Sakura blanc pur",
            title: "Pureté Immaculée",
            description:
                "Le blanc immaculé des sakura symbolise la pureté et la renaissance."
        },
        {
            imageUrl: "/images/inspiration-for-ikebana/sea-view.webp",
            altText: "Vue sur mer avec arrangement",
            title: "Horizon Infini",
            description:
                "L'union de l'art floral et de l'immensité marine pour une paix profonde."
        }
    ]
};
