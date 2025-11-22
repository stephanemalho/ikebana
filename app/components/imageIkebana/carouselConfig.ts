// 📌 src/config/carouselConfig.ts

export type carouselItemType = {
    imageUrl: string;
    altText: string;
    title: string;
    description: string;
};

export type carouselMetadataType = {
    title: string;
    description: string;
    items: carouselItemType[];
};

export const carouselIkebanaData: carouselMetadataType = {
    title: "Créations Ikebana - École Ohara",
    description:
        "Retrouvez ici les principales compositions d'ikebana réalisées par Ikuko Kato, instructrice certifiée de l'école Ohara. Chaque arrangement floral illustre l'harmonie entre la nature et l'art, mettant en valeur la beauté éphémère des fleurs et des plantes.",
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
            imageUrl: "/images/ikebana-creation/rinpa-cho-automne.webp",
            altText: "Arrangement Rinpa Cho automne style Ohara",
            title: "Rinpa Cho Automne",
            description:
                "Style Rinpa décoratif d'automne Ohara, évoquant la beauté mélancolique et les couleurs chaudes de la saison."
        },
        {
            imageUrl: "/images/ikebana-creation/rinpa-cho-ete.webp",
            altText: "Arrangement Rinpa Cho été variation style Ohara",
            title: "Rinpa Cho Été Variation",
            description:
                "Variation du style Rinpa d'été Ohara, montrant la richesse créative possible avec les fleurs estivales."
        },
        {
            imageUrl: "/images/ikebana-creation/rinpa-cho-jaune-automne.webp",
            altText: "Arrangement Rinpa Cho jaune automne style Ohara",
            title: "Rinpa Cho Jaune Automne",
            description:
                "Rinpa automnal Ohara aux tons dorés, capturant l'essence des feuillages d'automne et leur beauté éphémère."
        },
        {
            imageUrl: "/images/ikebana-creation/rinpa-cho-printemps.webp",
            altText: "Arrangement Rinpa Cho printemps style Ohara",
            title: "Rinpa Cho Printemps",
            description:
                "Style Rinpa printanier Ohara célébrant le renouveau et la fraîcheur des premières fleurs de la saison."
        },
        {
            imageUrl: "/images/ikebana-creation/rinpa-cho-rouge-automne.webp",
            altText: "Arrangement Rinpa Cho rouge automne style Ohara",
            title: "Rinpa Cho Rouge Automne",
            description:
                "Rinpa automnal Ohara aux couleurs flamboyantes, exprimant l'intensité et la passion de la saison rouge."
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
    title: "Sources d'Inspiration pour l'Ikebana",
    description:
        "Découvrez une collection d'inspirations florales qui nourrissent l'âme créatrice. Initiez-vous à l'art de l'ikebana et apprenez à transformer l'inspiration naturelle en compositions raffinées, porteuses de sens et d'émotion..",
    items: [
        {
            imageUrl:
                "/images/inspiration-for-ikebana/blue-and-violet-flower.jpg",
            altText: "Arrangement de fleurs bleues et violettes",
            title: "Harmonie des Bleus",
            description:
                "Un mélange délicat de nuances bleues et violettes pour apaiser l'âme."
        },
        {
            imageUrl: "/images/inspiration-for-ikebana/blue-flower.jpg",
            altText: "Fleur bleue en arrangement ikebana",
            title: "Sérénité Azurée",
            description:
                "La pureté du bleu exprime la tranquillité et la méditation profonde."
        },
        {
            imageUrl: "/images/inspiration-for-ikebana/big-sakura-white.jpg",
            altText: "Grand arrangement de sakura blanc",
            title: "Élégance du Sakura",
            description:
                "La beauté éphémère des cerisiers en fleurs, symbole du renouveau."
        },
        {
            imageUrl: "/images/inspiration-for-ikebana/night-sakure.JPEG",
            altText: "Sakura nocturne",
            title: "Mystère Nocturne",
            description:
                "Les sakura sous la lune révèlent leur beauté mystérieuse et envoûtante."
        },
        {
            imageUrl:
                "/images/inspiration-for-ikebana/japanese-silver-grass.jpg",
            altText: "Herbe argentée japonaise",
            title: "Grâce Argentée",
            description:
                "L'herbe argentée danse avec légèreté, symbole de flexibilité."
        },
        {
            imageUrl: "/images/inspiration-for-ikebana/green-grass.jpg",
            altText: "Herbes vertes en composition",
            title: "Fraîcheur Naturelle",
            description:
                "La simplicité des herbes vertes évoque la vitalité de la nature."
        },
        {
            imageUrl: "/images/inspiration-for-ikebana/orange-flower.jpg",
            altText: "Fleur orange éclatante",
            title: "Éclat Solaire",
            description:
                "L'orange vibrant apporte chaleur et énergie positive à votre espace."
        },
        {
            imageUrl: "/images/inspiration-for-ikebana/pink-flower.jpg",
            altText: "Fleur rose délicate",
            title: "Douceur Rosée",
            description:
                "La tendresse du rose exprime l'amour et la compassion universelle."
        },
        {
            imageUrl: "/images/inspiration-for-ikebana/pink-sakura-day.jpg",
            altText: "Arrangement de sakura roses",
            title: "Romance Printanière",
            description:
                "Les sakura roses célèbrent l'amour naissant et les nouveaux commencements."
        },
        {
            imageUrl: "/images/inspiration-for-ikebana/pink-sakura-tree.JPEG",
            altText: "Arbre de sakura rose",
            title: "Majesté Florale",
            description:
                "Un arbre entier de sakura roses, symbole de beauté et d'impermanence."
        },
        {
            imageUrl: "/images/inspiration-for-ikebana/red-flower.jpg",
            altText: "Fleur rouge passionnée",
            title: "Passion Ardente",
            description:
                "Le rouge intense évoque la passion, la force et la détermination."
        },
        {
            imageUrl: "/images/inspiration-for-ikebana/rose.jpg",
            altText: "Rose classique",
            title: "Élégance Intemporelle",
            description:
                "La rose, reine des fleurs, exprime l'amour dans sa forme la plus pure."
        },
        {
            imageUrl: "/images/inspiration-for-ikebana/sakura-white.jpg",
            altText: "Sakura blanc pur",
            title: "Pureté Immaculée",
            description:
                "Le blanc immaculé des sakura symbolise la pureté et la renaissance."
        },
        {
            imageUrl: "/images/inspiration-for-ikebana/sea-view.jpg",
            altText: "Vue sur mer avec arrangement",
            title: "Horizon Infini",
            description:
                "L'union de l'art floral et de l'immensité marine pour une paix profonde."
        }
    ]
};
