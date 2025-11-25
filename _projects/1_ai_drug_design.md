---
layout: page
title: AI for Structural Drug Design
description: 3D-CNN for fragment-based drug design using PyTorch
img: assets/img/ai_dd.png
importance: 1
category: research
---

## Artificial Intelligence for Fragment-Based Drug Design

Collaboration with Prof. Massimiliano Pontil's Lab, Italian Institute of Technology (IIT)

### Objective

Develop a Deep Learning model to automatically identify optimal chemical fragments for protein binding pockets, aiding in fragment-based drug design (FBDD).

### Deep Learning Architecture

- Designed and implemented a **3D Convolutional Neural Network (3D-CNN)** using PyTorch
- The model inputs voxelized representations of protein-ligand interfaces and predicts the probability of specific chemical fragment types binding to sub-pockets
- **Performance**: Achieved 70% top-1 accuracy and >80% top-5 accuracy on the test set

### Large-Scale Data Engineering

Built an end-to-end data pipeline to process the entire Protein Data Bank (PDB):

- Processed ~215,000 PDB entries
- Implemented rigorous cleaning protocols including:
  - Clustering by protein sequence identity to remove redundancy
  - Filtering by Solvent Accessible Surface Area (SASA) to ensure ligand exposure
  - Standardizing atom types and correcting structural errors

### Tool Development & Deployment

- Developed a **PyMOL Plugin** (Python/GUI) to visualize model predictions
- Enabled "Pocket Scanning": Users can select a protein region, run the model inference in real-time, and visualize suggested fragments directly within the PyMOL interface
- Utilized **MLflow** for experiment tracking, model versioning, and reproducibility

### Technologies Used

`PyTorch` `Python` `PyMOL` `MLflow` `HPC` `SLURM` `NumPy` `SciPy`
