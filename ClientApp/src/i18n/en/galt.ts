export default class Galt {
    static strings: any = {
        galt: "Galt",
        subtitle: "Galt, the package manager that eases the developpers life",
        packageManager: "Galt is a package manager allowing developpers to watch and administrate the dependencies architecture of their .NET projects hosted on NuGet. ",
        idea: "The idea rises in 2016 from one of my school teachers in his small IT company, ",
        signatureCode: "Signature Code",
        tool: ". He wants to create a tool allowing his employees to easily manage all the packages used by their applications. " +
            "The objective is to visualize a project dependencies as a tree, to be warned when a new package version is released" +
            "and to be alerted in the case of a versions conflict. ",
        launch: "One of my classmate joins Signature Code in February for an internship during one month. " +
            "He works on a PoC (proof of concept) along with other employees of the company. " +
            "The first version of the project works, even though it has limited functionnalities and a poor user interface. " +
            "That's why our teacher decides to make a second version of the application. " +
            "As a school project, he submits the idea to my team which is composed by Thibaud who already worked on the project and two others classmates. ",
        start: "We start the project in October 2016. We decide to use adapted technologies for a user-friendly interface and a efficient " +
            "packages management. Back end is managed by ",
        mvc5: "ASP.NET MVC 5",
        frontend: "and front end by",
        vue: "Vue.js",
        graphes: ", a javascript framework which major version 2.0 has just been released two weeks before. " +
            "To display dependencies graphes, we decide to use a powerful graphic framework, ",
        d3: "d3.js",
        technologies: ". These technologies offer us many possibilities. However, they are new to us besides being recent then not much documented. ",
        frameworks: "During the project, I am mainly in charge of the front end with Vue.js. " +
            "This framework belongs to the three main javascript web frameworks along with Angular (Google) and React (Facebook)," +
            "unlike it is developped by an independent team. " +
            "My teammates are being affected other tasks: one of them manages the creation and display of the dependencies graphes with d3.js, " +
            "another one works on the back end and the last one make the requests between front and back end" +
            "and is a technical reinforcment for the other members of the team with his experience. ",
        suggest: "I suggest to my team to build an ",
        spa: "SPA",
        server: "(single page application) containing the different views necessary for the application " +
            "(home, sign up / sign in, search, graph, etc.). " +
            "All the SPA is then sent to the back end. " +
            "Our ASP.NET server displays a web page containing only a reference to our SPA in charge of the user interaction (",
        note: "note: ",
        integrate: "it is now possible to easily integrate directly Vue.js in an ASP.NET web application since Core versions " +
            "- moreover this site was made with .NET Core 2 and Vue.js 2). ",
        mockups: "Before starting the SPA creation, I begin with creating detailed mockups of each screen from our application using Moqups tool. " +
            "It is an important step, in particular when building SPAs, because pages are entirely modular. It is necessary to precisely define",
        ux: "UX",
        userExp: "(user experience) and ",
        ui: "UI",
        userInterf: "(user interface) to have a direction to follow during implementation. ",
        architecture: "I learn the architecture and the functionment of a web framework with online learning and with one of my teammates who already" +
            "experienced Vue.js. It is a powerful tool allowing us to create fluid and user-friendly interfaces and to display the" +
            "application pages created by reusable components in order to make a completely modular app. ",
        objectives: "After four months, we achieve the objectives established during our pre-project phase, which are:",
        graph: "Display a dependencies graph for a package hosted on NuGet retrieved using a search bar. ",
        versions: "Display the different versions available for this package, the potential new versions of the dependencies" +
            "and the potential conflicts of versions within the dependencies. ",
        account: "Allow the user to create an account to save the packages he consulted recently and his favorite packages. ",
        presentation: "My team presents the project during a forum of IT projects in my school in January 2017. " +
            "We know that the presentation will be hard because our project is quite technical and aims a technical audience. " +
            "Though we succeed in making it accessible for a large audience so our jury understand the stakes of our project. " +
            "Among the jury, some of the members have a technical background and ask detailed questions about the functionment of our application, " +
            "especially how we handle the package dependencies. " +
            "Some other ones ask for the possible evolutions and improvements on the project. " +
            "These improvments are the secondary objectives we defined in the case we had still time before the forum:",
        interfaces: "Extend the packages management to hosting platforms other than NuGet (npm, Maven, gradle, etc.) using interfaces in our backend. ",
        optimization: "Optimize the packages download (as some packages can need several minutes), especially by suggesting background download options. ",
        upload: "Add the possibility to upload your own package without using a hosting platform. ",
        benefit: "This project was a great opportunity for me on the technical side as well as the human side. " +
            "I discovered several very recent technologies that I used again on my other projects. " +
            "I have been able to answer the need of a customer (my teacher) and to end a project in its whole (the site has been deployed " +
            "on our school server). I also took part in the organization of a complex project and I improved my oral expression " +
            "during the presentation at the forum in front of a jury who did not necessary have a technical background. "

    }
}