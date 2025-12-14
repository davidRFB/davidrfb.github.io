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
        },{id: "post-from-local-scripts-to-web-application",
        
          title: "From Local Scripts to Web Application",
        
        description: "Building and deploying the full-stack LSC translator with FastAPI, Docker, and Hugging Face Spaces",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/mano-06-web-deployment/";
          
        },
      },{id: "post-from-letters-to-words-two-approaches-to-real-time-correction",
        
          title: "From Letters to Words: Two Approaches to Real-Time Correction",
        
        description: "Building instant autocomplete with tries and smart LLM correction for sign language translation",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/mano-05-word-correction/";
          
        },
      },{id: "post-the-landmark-experiment-fixing-train-inference-distribution-mismatch",
        
          title: "The Landmark Experiment: Fixing Train-Inference Distribution Mismatch",
        
        description: "How adding landmarks to training data fixed live inference instability",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/mano-04-landmark-experiment/";
          
        },
      },{id: "post-experiment-3-hyperparameter-optimization",
        
          title: "Experiment 3: Hyperparameter Optimization",
        
        description: "Systematic search over models, learning rates, and batch sizes",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/mano-03-hyperparameter-optimization/";
          
        },
      },{id: "post-experiment-2-data-leakage-analysis-and-model-diagnostics",
        
          title: "Experiment 2: Data Leakage Analysis and Model Diagnostics",
        
        description: "Investigating why 100% test accuracy fails in real-world inference",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/mano-02-data-leakage/";
          
        },
      },{id: "post-experiment-1-initial-dataset-and-baseline-model",
        
          title: "Experiment 1: Initial Dataset and Baseline Model",
        
        description: "Data collection, model selection, and first training results",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/mano-01-baseline/";
          
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
