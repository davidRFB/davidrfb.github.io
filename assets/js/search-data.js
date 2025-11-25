// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "Publications in reversed chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "A collection of my research and software projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "Curriculum Vitae of David R. Figueroa Blanco.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "news-selected-as-a-google-summer-of-code-2024-mentor-for-the-deepchem-open-source-library-rocket",
          title: 'Selected as a Google Summer of Code 2024 mentor for the DeepChem open-source...',
          description: "",
          section: "News",},{id: "news-published-our-research-on-dna-polymerase-nucleotide-selection-in-the-journal-of-chemical-information-and-modeling-dna",
          title: 'Published our research on DNA polymerase nucleotide selection in the Journal of Chemical...',
          description: "",
          section: "News",},{id: "news-completed-my-phd-in-data-science-and-computation-at-the-university-of-bologna-amp-amp-iit-mortar-board",
          title: 'Completed my PhD in Data Science and Computation at the University of Bologna...',
          description: "",
          section: "News",},{id: "projects-ai-for-structural-drug-design",
          title: 'AI for Structural Drug Design',
          description: "3D-CNN for fragment-based drug design using PyTorch",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_ai_drug_design/";
            },},{id: "projects-dna-polymerase-modeling",
          title: 'DNA Polymerase Modeling',
          description: "Molecular dynamics simulations of nucleotide selection in polymerases",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_polymerase_modeling/";
            },},{id: "projects-deepchem-contributions",
          title: 'DeepChem Contributions',
          description: "Open source contributions and Google Summer of Code mentorship",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_deepchem/";
            },},{id: "projects-caju-social-club",
          title: 'Caju Social Club',
          description: "Full-stack event management web application with Supabase backend",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_event_app/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/cv.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%64%61%76%69%64.%66%69%67%75%65%72%6F%61@%69%69%74.%69%74", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/davidRFB", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/david-figueroa-6636b9237", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
