David Ricardo Figueroa Blanco

Languages 
Spanish (Native), English (Professional Proficiency), Italian (Conversational), Portuguese (Intermediate)

PROFESSIONAL PROFILE

Computational Scientist & Data Specialist
Ph.D. in Data Science and Computation with a strong foundation in physical chemistry and machine learning. Expert in bridging the gap between theoretical molecular modeling and modern data engineering. Possesses specialized experience in:

AI for Drug Discovery: Designing 3D Convolutional Neural Networks (CNNs) for structure-based drug design and processing massive structural datasets (PDB).

High-Performance Simulation: Executing microsecond-scale Molecular Dynamics (MD) and Alchemical Free Energy calculations (FEP/ATM) on HPC clusters.

Full-Stack Prototyping: Rapidly developing web applications and automation tools using AI-assisted workflows, JavaScript, and Cloud Databases (Supabase/PostgreSQL).

Education & Mentorship: Proven track record in university-level teaching and technical mentorship for global open-source programs (Google Summer of Code).

Currently seeking a role that leverages this multidisciplinary expertise in Molecular Modeling, Machine Learning Engineering, or Educational Technology.

EDUCATION

Doctor of Philosophy (PhD) in Data Science and Computation | 2020 – 2024
University of Bologna, Bologna, Italy

Research Institution: Italian Institute of Technology (IIT), Genoa, Italy.

Laboratory: Molecular Modeling and Drug Discovery (PI: Dr. Marco De Vivo).

Thesis Title: "End-to-End Molecular Modeling of Polymerase Enzymes and AI-Driven Drug Design."

Key Focus: Integration of physics-based simulation methods with data-driven deep learning approaches to solve complex biochemical problems.

Master of Science (MSc) in Chemistry | 2018 – 2020
Universidad de los Andes, Bogotá, Colombia

Thesis: "Hybrid QM/MM Modeling of Enzymatic Reaction Mechanisms for Plastic Degradation."

Key Focus: Investigated the catalytic mechanism of PET-degrading enzymes using hybrid Quantum Mechanics/Molecular Mechanics (QM/MM) to propose reaction pathways.

Distinction: "Beca Quiero Estudiar Escala" (Merit-based Scholarship).

Bachelor of Science (BSc) in Chemistry | 2013 – 2018
Universidad de los Andes, Bogotá, Colombia

Thesis: "A Quantum Mechanical (QM) Study of Organic Reaction Mechanisms."

Award: Best Thesis Presentation (2018), Department of Chemistry.

Distinction: "Beca Quiero Estudiar Escala" (Merit-based Scholarship).

DETAILED RESEARCH EXPERIENCE

1. Artificial Intelligence for Structural Drug Design (PhD Project)

Italian Institute of Technology (IIT) | Collaboration with Prof. Massimiliano Pontil’s Lab

Objective: Develop a Deep Learning model to automatically identify optimal chemical fragments for protein binding pockets, aiding in fragment-based drug design (FBDD).

Deep Learning Architecture:

Designed and implemented a 3D Convolutional Neural Network (3D-CNN) using PyTorch.

The model inputs voxelized representations of protein-ligand interfaces and predicts the probability of specific chemical fragment types binding to sub-pockets.

Performance: Achieved 70% top-1 accuracy and >80% top-5 accuracy on the test set, validated through extensive hyperparameter optimization and cross-validation.

Large-Scale Data Engineering:

Built an end-to-end data pipeline to process the entire Protein Data Bank (PDB).

Data Curation: Processed ~215,000 PDB entries. Implemented rigorous cleaning protocols including:

Clustering by protein sequence identity to remove redundancy.

Filtering by Solvent Accessible Surface Area (SASA) to ensure ligand exposure.

Standardizing atom types and correcting structural errors.

Tool Development & Deployment:

Developed a PyMOL Plugin (Python/GUI) to visualize model predictions.

Enabled "Pocket Scanning": Users can select a protein region, run the model inference in real-time, and visualize suggested fragments directly within the PyMOL interface.

Utilized MLflow for experiment tracking, model versioning, and reproducibility.

2. Biophysical Modeling of DNA Polymerases (PhD Project)

Italian Institute of Technology (IIT) | Collaboration with Prof. Gianni De Fabritiis (UPF Barcelona)

Objective: Elucidate the atomistic mechanism of nucleotide selection in high-fidelity polymerases to understand fidelity and assist in antiviral drug design.

High-Performance Simulation (HPC):

Conducted over 6 microseconds of unbiased Molecular Dynamics (MD) simulations using Amber 2022 (pmemd.cuda) on GPU clusters.

Analyzed conformational dynamics to identify key "checkpoints" in the nucleotide binding process.

Free Energy Calculations:

Performed rigorous Alchemical Free Energy Perturbation (FEP) calculations (>1 microsecond aggregate sampling) to quantify binding affinities of correct vs. incorrect nucleotides.

Methodological Innovation: Applied the Alchemical Transfer Method (ATM) using OpenMM during a research stay at Universitat Pompeu Fabra (Barcelona), validating results against standard Amber FEP protocols.

Impact: Published findings in Journal of Chemical Information and Modeling, providing a structural rationale for polymerase fidelity.

3. Open Source Development & Mentorship

DeepChem (Open Source Library)

Google Summer of Code (GSoC) Mentor (2024):

Selected to mentor a student project focused on enhancing DeepChem's capabilities.

Responsibilities: Defined project roadmap, conducted weekly code reviews, guided the student through the Pull Request (PR) lifecycle, and ensured adherence to software engineering best practices.

Outcome: Successfully guided the student to merge their contribution into the core library.

Contributor:

PROTACs Tutorial: Authored and merged a comprehensive tutorial on modeling Proteolysis Targeting Chimeras (PROTACs). Designed the content to be accessible for chemists with intermediate Python skills.

Codebase Improvements: Submitted PRs for documentation enhancements and new molecular featurizers.

TECHNICAL PROJECTS & PROTOTYPING

1. Full-Stack Event Management Application

Role: Solo Developer /

Stack: JavaScript (Frontend), Supabase (Backend/Auth/DB), AI-Assisted Development.

Description: Built a web application allowing users to create profiles, select interests, and register for events.

Data Engineering: Leveraged Supabase (PostgreSQL) to architect the database schema. Wrote SQL policies for data security and managed user authentication flows.

Methodology: Utilized AI tools to accelerate frontend development, demonstrating the ability to ship functional software rapidly by combining "vibe coding" (logic-first prompting) with solid backend engineering principles.

2. Automated Reporting System (Google Ecosystem)

Role: Developer

Stack: Google Apps Script, Google Gemini API, Gmail API.

Description: Created an automation pipeline to parse incoming emails, extract unstructured text data, and summarize it using the Gemini Large Language Model.

Outcome: The system automatically generates formatted reports in Google Docs/Sheets, reducing manual data entry time.

TEACHING EXPERIENCE

Teaching Assistant (Laboratory Instructor) | 2018 – 2020
Universidad de los Andes, Bogotá, Colombia

Courses: General Chemistry Laboratory, Fundamentals of Chemical Analysis Laboratory.

Scope: Supervised groups of 25–30 undergraduate students.

Responsibilities:

delivered pre-lab lectures explaining chemical principles and safety protocols.

Guided students through wet-lab experimental procedures.

Graded laboratory reports and provided detailed feedback on scientific writing and data analysis.

SKILLS INVENTORY

Computational Chemistry & Physics:

MD Engines: Amber (Expert), OpenMM (Advanced), GROMACS.

Quantum Chemistry: Gaussian, CP2K (QM/MM focus), ORCA.

Methods: Molecular Dynamics, Alchemical Free Energy (FEP, TI, ATM), Homology Modeling, Docking.

Data Science & Machine Learning:

Languages: Python (Expert), Bash (Proficient), SQL (Intermediate), JavaScript (Basic/AI-assisted).

ML Frameworks: PyTorch (Advanced), Scikit-learn, TensorFlow.

Data Manipulation: Pandas, NumPy, SciPy.

Visualization: Matplotlib, Seaborn, PyMOL (Scripting & Plugin Dev).

Workflow: MLflow, Git/GitHub, Jupyter Notebooks.

Cloud & DevOps:

Infrastructure: HPC Environments (SLURM), Supabase.

APIs: Google Gemini, RESTful API integration.

PUBLICATIONS

./_bibliography/papers.bib
HONORS & AWARDS

Google Summer of Code Mentor Selection (2024) - Recognition of open-source expertise.

Best Thesis Presentation (2018) - Universidad de los Andes, Department of Chemistry.

"Beca Quiero Estudiar Escala" (2013 – 2018) - Full-tuition merit scholarship covering the entire undergraduate degree.

Colombian National Chemistry Olympiad:

Gold Medal (2013) - Universidad de Antioquia.

Silver Medal - Universidad Nacional de Colombia.

Silver Medal - Universidad de Antioquia.