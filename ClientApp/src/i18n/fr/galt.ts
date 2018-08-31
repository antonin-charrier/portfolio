export default class Galt {
    static strings: any = {
        galt: "Galt",
        subtitle: "Galt, le gestionnaire de packages qui facilite la vie des développeurs",
        packageManager: "Galt est un gestionnaire de packages permettant aux développeurs de surveiller et d'administrer l'architecture " +
            "des dépendances de leurs projets .NET hébergés sur NuGet. ",
        idea: "L'idée naît en 2016 d'un de des professeurs de mon école dans sa petite ESN, ",
        signatureCode: "Signature Code",
        tool: ". Il souhaite créer un outil permettant à ses employés de facilement gérer tous les packages utilisés par leurs applications. " +
            "L'objectif est de visualiser les dépendances d'un projet sous forme d'arbre, d'être averti lorsqu'une nouvelle version d'un packagee sort" +
            "et d'être alerté en cas de conflit de versions. ",
        launch: "Un de mes camarades de classe rejoint Signature Code en février pour un stage d'un mois. " +
            "Il travaille sur un PoC (proof of concept) avec d'autres employés de la société. " +
            "La première version du projet fonctionne, bien qu'elle ait des fonctionnalités limitées et une interface utilisateur rudimentaire. " +
            "C'est pourquoi notre professeur décide de réaliser une seconde version de l'application. " +
            "En tant que projet d'école, il soumet l'idée à mon équipe qui est composée de Thibaud qui a déjà travaillé sur le projet et " +
            "de deux autres camarades de classe. ",
        start: "Nous commençons le projet en octobre 2016. Nous décidons d'utiliser des technologies adaptées à une interface user-friendly " +
            "et une gestion efficace des packages. Le back end est géré par ",
        mvc5: "ASP.NET MVC 5",
        frontend: "et le front end par",
        vue: "Vue.js",
        graphes: ", un framework javascript dont la version majeure 2.0 a été publiée juste deux semaines avant. " +
            "Pour afficher les graphes de dépendances, nous décidons d'utiliser un framework graphique puissant, ",
        d3: "d3.js",
        technologies: ". Ces technologies nous offrent beaucoup de possibilités. Cependant, elles nous sont nouvelles en plus d'être récentes et" +
            " donc peu documentées. ",
        frameworks: "Durant le projet, je suis principalement en charge du front end avec Vue.js. " +
            "Ce framework appartient aux trois principaux frameworks web javascript avec Angular (Google) et React (Facebook)," +
            "à la différence des deux autrees qu'il est développé par une équipe indépendante. " +
            "Mes coéquipiers se voient affectés d'autres tâches: l'un d'entre eux gère la création et l'affichage des graphes de dépendances" +
            "avec d3.js, un autre travaille sur le back end et le dernier fait les requêtes entre le front et le back end " +
            "et est une renfort technique pour les autres membres de l'équipe de par son expérience. ",
        suggest: "Je suggère à mon équipe de construire une ",
        spa: "SPA",
        server: "(single page application) qui contient les différentes vues nécessaires pour l'application " +
            "(accueil, inscription / connexion, recherche, graphe, etc.). " +
            "Toute la SPA est ensuite envoyée vers le back end. " +
            "Notre serveur ASP.NET affiche une page web qui contient seulement une référence à notre SPA en charge de l'interaction avec l'utilisateur (",
        note: "note : ",
        integrate: "il est désormais possible de facilement intégrer directement Vue.js dans une application web ASP.NET depuis les versions Core " +
            "- d'ailleurs ce site a été fait avec .NET Core 2 et Vue.js 2). ",
        mockups: "Avant de débuter la création de la SPA, je commence par créer des maquettes détaillées de chaque écran de notre application " +
            "en utilisant l'outil Moqups. Il s'agit d'une étape importante, en particulier lors de la création de SPA, car les pages sont entièrement " +
            "modulaires. Il est nécessaire de définir précisément ",
        ux: "l'UX",
        userExp: "(user experience) et ",
        ui: "l'UI",
        userInterf: "(user interface) afin d'avoir une direction à suivre durant l'implémentation. ",
        architecture: "J'ai appris l'architecture et le fonctionnement d'un framework web avec des apprentissages en ligne et avec un de mes " +
            "coéquipiers qui a déjà manipulé Vue.js. C'est un outil puissant permettant de créer des interfaces fluides et user-friendly et " +
            "d'afficher des pages de l'application créées à partir de composants réutilisables afin de réaliser une application complètement modulaire. ",
        objectives: "Après quatre mois, nous terminons les objectifs établis lors de notre phase d'avant-projet, c'est-à-dire :",
        graph: "Afficher un graphe de dépendances pour un package hébergé sur NuGet et récupéré en utilisant une barre de recherche. ",
        versions: "Afficher les différentes versions disponibles pour ce package, les potentielles nouvelles versions des dépendances" +
            "et les potentiels conflits de versions au sein des dépendances. ",
        account: "Permettre à l'utilisateur de créer un compte afin de sauvegarder les packages qu'il a consulté récemment et ses packages favoris. ",
        presentation: "Mon équipe présente le projet lors du forum des projets informatiques de mon école en janvier 2017. " +
            "Nous savons que la présentation va être difficile car notre projet est assez technique et vise un public technique. " +
            "Cependant nous arrivons à le rendre accessible à un large public afin que notre jury comprenne les enjeux du projet. " +
            "Parmi le jury, certains membres ont un bagage technique et posent des questions détaillées à propos du fonctionnement " +
            "de notre application, notamment comment nous gérons les dépendances des packages. " +
            "D'autres demandent les possibles évolutions et améliorations sur le projet. " +
            "Ces améliorations sont les seconds objectfs que nous avions défini au cas où nous avions encore du temps avant le forum :",
        interfaces: "Etendre la gestion des packages à des plateformes d'hébergement autres que NuGet (npm, Maven, gradle, etc.) en utilisant " +
            "des interfaces dans notre back end. ",
        optimization: "Optimiser le téléchargement des packages (certains packages nécessitant plusieurs minutes), notamment en suggérant des " +
            "options de téléchargment en tâche de fond. ",
        upload: "Ajouter la possibilité de téléverser son propre package sans utiliser une plateforme d'hébergement. ",
        benefit: "Ce projet a été un grand a été une grande opportunité pour moi sur le plan technique comme sur le plan humain. " +
            "J'ai découvert plusieurs technologies récentes que j'ai pu utiliser de nouveau sur mes autres projets. " +
            "J'ai été capable de répondre au besoin d'un client (mon professeur) et de terminer un projet dans sa globalité (le site a été déployé " +
            "sur le serveur de notre école). J'ai aussi pris part à l'organisation d'un projet complexe et j'ai amélioré mon expression orale " +
            "durant la présentation au forum devant un jury qui n'avait pas nécessairement un bagage technique. "

    }
}