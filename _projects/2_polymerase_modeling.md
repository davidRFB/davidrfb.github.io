---
layout: page
title: DNA Polymerase Modeling
description: Molecular dynamics simulations of nucleotide selection in polymerases
img: assets/img/polymerase.png
importance: 2
category: research
---

## Biophysical Modeling of DNA Polymerases

Collaboration with Prof. Gianni De Fabritiis (UPF Barcelona) at the Italian Institute of Technology (IIT)

### Objective

Elucidate the atomistic mechanism of nucleotide selection in high-fidelity polymerases to understand fidelity and assist in antiviral drug design.

### High-Performance Simulation (HPC)

- Conducted over **6 microseconds** of unbiased Molecular Dynamics (MD) simulations using Amber 2022 (pmemd.cuda) on GPU clusters
- Analyzed conformational dynamics to identify key "checkpoints" in the nucleotide binding process

### Free Energy Calculations

- Performed rigorous **Alchemical Free Energy Perturbation (FEP)** calculations (>1 microsecond aggregate sampling) to quantify binding affinities of correct vs. incorrect nucleotides
- **Methodological Innovation**: Applied the Alchemical Transfer Method (ATM) using OpenMM during a research stay at Universitat Pompeu Fabra (Barcelona), validating results against standard Amber FEP protocols

### Impact

Published findings in **Journal of Chemical Information and Modeling**, providing a structural rationale for polymerase fidelity.

### Technologies Used

`Amber` `OpenMM` `GROMACS` `Python` `HPC/SLURM` `GPU Computing`
