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
            imageUrl: "/images/ikebana-creation/2026/5shu%20ike%20vertical.jpg",
            altText: "Moribana Tashu ike 盛花多種活け",
            title: "Moribana Tashu ike 盛花多種活け",
            description: "Création Ikebana de l'École Ohara."
        },
        {
            imageUrl: "/images/ikebana-creation/2026/Bunjin%20Cho-2.jpg",
            altText: "Bunjin Cho 文人調",
            title: "Bunjin Cho 文人調",
            description: "Création Ikebana de l'École Ohara."
        },
        {
            imageUrl: "/images/ikebana-creation/2026/Bunjin%20Cho.jpg",
            altText: "Bunjin Cho 文人調",
            title: "Bunjin Cho 文人調",
            description: "Création Ikebana de l'École Ohara."
        },
        {
            imageUrl: "/images/ikebana-creation/2026/Free%20style.jpg",
            altText: "Free style 創作",
            title: "Free style 創作",
            description: "Création Ikebana de l'École Ohara."
        },
        {
            imageUrl: "/images/ikebana-creation/2026/Free11.jpg",
            altText: "Free style 自由創作",
            title: "Free style 自由創作",
            description: "Création Ikebana de l'École Ohara."
        },
        {
            imageUrl: "/images/ikebana-creation/2026/Free12%20vertical.JPG",
            altText: "Free style 自由創作",
            title: "Free style 自由創作",
            description: "Création Ikebana de l'École Ohara."
        },
        {
            imageUrl: "/images/ikebana-creation/2026/Hana%20Kanade11.jpg",
            altText: "Hana Kanade 花奏",
            title: "Hana Kanade 花奏",
            description: "Création Ikebana de l'École Ohara."
        },
        {
            imageUrl: "/images/ikebana-creation/2026/Heika%20IMG_9375.jpg",
            altText: "Heika 瓶花",
            title: "Heika 瓶花",
            description: "Création Ikebana de l'École Ohara."
        },
        {
            imageUrl: "/images/ikebana-creation/2026/Heika.jpg",
            altText: "Heika 瓶花",
            title: "Heika 瓶花",
            description: "Création Ikebana de l'École Ohara."
        },
        {
            imageUrl: "/images/ikebana-creation/2026/Hiraki%20karachi%20vertical.jpg",
            altText: "Hiraku karachi ひらくかたち",
            title: "Hiraku karachi ひらくかたち",
            description: "Création Ikebana de l'École Ohara."
        },
        {
            imageUrl: "/images/ikebana-creation/2026/IMG_0951%20vertical.jpg",
            altText: "Paysage naturel 写景自然",
            title: "Paysage naturel 写景自然",
            description: "Création Ikebana de l'École Ohara."
        },
        {
            imageUrl: "/images/ikebana-creation/2026/IMG_1712.jpg",
            altText: "Bunjin Cho 文人調",
            title: "Bunjin Cho 文人調",
            description: "Création Ikebana de l'École Ohara."
        },
        {
            imageUrl: "/images/ikebana-creation/2026/IMG_9230%20vertical.jpg",
            altText: "Moribana Tashu ike 盛花多種活け",
            title: "Moribana Tashu ike 盛花多種活け",
            description: "Création Ikebana de l'École Ohara."
        },
        {
            imageUrl: "/images/ikebana-creation/2026/Kakitsubata%20Natsu11.jpg",
            altText: "Shakei Moribana Yoshiki honi 写景盛花様式本位",
            title: "Shakei Moribana Yoshiki honi 写景盛花様式本位",
            description: "Création Ikebana de l'École Ohara."
        },
        {
            imageUrl: "/images/ikebana-creation/2026/Kansui-Kei11.jpg",
            altText: "Kansui-Kei 観水型",
            title: "Kansui-Kei 観水型",
            description: "Création Ikebana de l'École Ohara."
        },
        {
            imageUrl: "/images/ikebana-creation/2026/Katamukeru%20katachi%20vertical.jpg",
            altText: "Katamukeru katachi かたむけるかたち",
            title: "Katamukeru katachi かたむけるかたち",
            description: "Création Ikebana de l'École Ohara."
        },
        {
            imageUrl: "/images/ikebana-creation/2026/Mizukagami%20no%20Kei11%20vertical.jpg",
            altText: "Mizukagami no Kei 水鏡の景",
            title: "Mizukagami no Kei 水鏡の景",
            description: "Création Ikebana de l'École Ohara."
        },
        {
            imageUrl: "/images/ikebana-creation/2026/Moribana%20Chokuritsu-kei11.jpg",
            altText: "Moribana chokuritsu-Kei 盛花直立型",
            title: "Moribana chokuritsu-Kei 盛花直立型",
            description: "Création Ikebana de l'École Ohara."
        },
        {
            imageUrl: "/images/ikebana-creation/2026/Moribana%20chokuritsu-Kei%20vertical.jpg",
            altText: "Moribana chokuritsu-Kei 盛花直立型",
            title: "Moribana chokuritsu-Kei 盛花直立型",
            description: "Création Ikebana de l'École Ohara."
        },
        {
            imageUrl: "/images/ikebana-creation/2026/Moribana11%20vertical.jpg",
            altText: "Moribana Tashu ike 盛花多種活け",
            title: "Moribana Tashu ike 盛花多種活け",
            description: "Création Ikebana de l'École Ohara."
        },
        {
            imageUrl: "/images/ikebana-creation/2026/Narabu%20katachi%20vertical.jpg",
            altText: "Narabu katachi ならぶかたち",
            title: "Narabu katachi ならぶかたち",
            description: "Création Ikebana de l'École Ohara."
        },
        {
            imageUrl: "/images/ikebana-creation/2026/Narabu%20katachi11%20vertical.jpg",
            altText: "Narabu katachi ならぶかたち",
            title: "Narabu katachi ならぶかたち",
            description: "Création Ikebana de l'École Ohara."
        },
        {
            imageUrl: "/images/ikebana-creation/2026/Rinpa%20cho%20vertical.jpg",
            altText: "Rinpa cho 琳派調",
            title: "Rinpa cho 琳派調",
            description: "Création Ikebana de l'École Ohara."
        },
        {
            imageUrl: "/images/ikebana-creation/2026/Rinpa%20cho%20vertical3.jpg",
            altText: "Rinpa cho 琳派調",
            title: "Rinpa cho 琳派調",
            description: "Création Ikebana de l'École Ohara."
        },
        {
            imageUrl: "/images/ikebana-creation/2026/Rinpa%20cho11%20vertical.jpg",
            altText: "Rinpa cho 琳派調",
            title: "Rinpa cho 琳派調",
            description: "Création Ikebana de l'École Ohara."
        },
        {
            imageUrl: "/images/ikebana-creation/2026/Rinpa%20cho13%20vertical.jpg",
            altText: "Rinpa cho 琳派調",
            title: "Rinpa cho 琳派調",
            description: "Création Ikebana de l'École Ohara."
        },
        {
            imageUrl: "/images/ikebana-creation/2026/Shakei%20Moribana%20Yoshiki%20honi-2.jpg",
            altText: "Shakei Moribana Yoshiki honi 写景盛花様式本位",
            title: "Shakei Moribana Yoshiki honi 写景盛花様式本位",
            description: "Création Ikebana de l'École Ohara."
        },
        {
            imageUrl: "/images/ikebana-creation/2026/Shakei%20Moribana%20Yoshiki%20honi-4.jpg",
            altText: "Shakei Moribana Yoshiki honi 写景盛花様式本位",
            title: "Shakei Moribana Yoshiki honi 写景盛花様式本位",
            description: "Création Ikebana de l'École Ohara."
        },
        {
            imageUrl: "/images/ikebana-creation/2026/Shakei%20Moribana%20Yoshiki%20honi.jpg",
            altText: "Shakei Moribana Yoshiki honi 写景盛花様式本位",
            title: "Shakei Moribana Yoshiki honi 写景盛花様式本位",
            description: "Création Ikebana de l'École Ohara."
        },
        {
            imageUrl: "/images/ikebana-creation/2026/Shakei%20yoshiki%20chukei11%20vertical.jpg",
            altText: "Shakei Moribana Yoshiki honi 写景盛花様式本位",
            title: "Shakei Moribana Yoshiki honi 写景盛花様式本位",
            description: "Création Ikebana de l'École Ohara."
        },
        {
            imageUrl: "/images/ikebana-creation/2026/Shakei%20yoshiki11.jpg",
            altText: "Shakei Moribana Yoshiki honi 写景盛花様式本位",
            title: "Shakei Moribana Yoshiki honi 写景盛花様式本位",
            description: "Création Ikebana de l'École Ohara."
        },
        {
            imageUrl: "/images/ikebana-creation/2026/Shikisai%20Moribana%20Yoshiki%20honi-2.jpg",
            altText: "Shikisai Moribana Yoshiki honi 色彩盛花様式本位",
            title: "Shikisai Moribana Yoshiki honi 色彩盛花様式本位",
            description: "Création Ikebana de l'École Ohara."
        },
        {
            imageUrl: "/images/ikebana-creation/2026/Shikisai%20yoshiki11%20vertical.jpg",
            altText: "Shikisai Moribana Yoshiki honi 色彩盛花様式本位",
            title: "Shikisai Moribana Yoshiki honi 色彩盛花様式本位",
            description: "Création Ikebana de l'École Ohara."
        },
        {
            imageUrl: "/images/ikebana-creation/2026/Yoshiki14%20vertical.jpg",
            altText: "Shakei Moribana Yoshiki honi 写景盛花様式本位",
            title: "Shakei Moribana Yoshiki honi 写景盛花様式本位",
            description: "Création Ikebana de l'École Ohara."
        },
        {
            imageUrl: "/images/ikebana-creation/2026/Yoshiki15%20vertical.jpg",
            altText: "Yoshiki 様式本位",
            title: "Yoshiki 様式本位",
            description: "Création Ikebana de l'École Ohara."
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
