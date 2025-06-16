
# Advancing Precision Medicine: The GNN-PBPK-AI Framework

## Live Demo
🌐 **Live Website**: [https://prikalra.github.io/precision-med-narrative-framework/](https://prikalra.github.io/precision-med-narrative-framework/)

## Overview
An interactive scrollytelling experience showcasing the integration of Agentic AI with Model-Informed Drug Discovery and Development (MIDD). This project demonstrates how computational modeling and mechanistic science can advance personalized medicine.

## Features
✨ **Professional Scrollytelling** using Scrollama.js  
🎯 **Interactive PBPK Visualizations** with dynamic organ highlighting  
📊 **Species Comparison Charts** using Chart.js  
🎨 **Responsive Design** optimized for all devices  
⚡ **Zero Build Process** - pure HTML/CSS/JS for reliable GitHub Pages deployment  
📱 **Mobile-Optimized** scrollytelling experience  

## Technology Stack
- **Scrollama.js** - Industry-standard scrollytelling library (used by NY Times, The Pudding)
- **Chart.js** - Interactive data visualizations
- **Tailwind CSS** - Utility-first CSS framework
- **D3.js** - Data-driven document manipulation
- **Vanilla JavaScript** - No framework dependencies

## Project Structure
```
├── index.html          # Main HTML file with complete structure
├── styles.css          # Custom CSS for scrollytelling and animations
├── script.js           # JavaScript for interactivity and scroll handling
├── .github/workflows/
│   └── deploy.yml      # Simplified GitHub Pages deployment
└── README.md           # Project documentation
```

## Key Components

### 1. Hero Section
- Compelling introduction to precision medicine
- Gradient background with fade-in animations

### 2. Scrollytelling Sections
- **Introduction**: PBPK fundamentals with interactive organ diagram
- **Challenge**: Biological complexity in drug development
- **Solution**: Agentic AI integration approach
- **Use Cases**: Practical applications and examples
- **Future**: Challenges and directions

### 3. Interactive Visualizations
- **16-Organ PBPK System**: Dynamic highlighting based on scroll position
- **Species Comparison**: Radar chart showing physiological differences
- **Drug Distribution Animation**: Simulated pharmacokinetic modeling

## Local Development
1. Clone the repository
2. Open `index.html` in your browser
3. For live reloading during development, use a simple HTTP server:
   ```bash
   python -m http.server 8000
   # or
   npx serve .
   ```

## Deployment
The project uses GitHub Pages with a simple workflow:
- Automatically deploys on push to `main` branch
- No build process required
- Direct file serving for maximum reliability

## Domain-Specific Content
The project demonstrates pharmaceutical model-informed drug discovery concepts including:
- **PBPK Modeling**: Physiologically-based pharmacokinetic simulation
- **ADME Prediction**: Absorption, Distribution, Metabolism, Elimination
- **Species Extrapolation**: Translating animal studies to human predictions
- **Drug-Drug Interactions**: AI-powered interaction assessment
- **Virtual Patient Twins**: Personalized modeling with real-time data

## Performance Optimizations
- Lazy-loaded animations and interactions
- Optimized scroll event handling
- Minimal external dependencies
- Responsive image and chart loading
- Smooth scroll behavior with hardware acceleration

## Browser Support
- Modern browsers with ES6+ support
- Mobile Safari and Chrome optimized
- Progressive enhancement for older browsers

## Contributing
This project showcases static scrollytelling techniques. Key areas for enhancement:
- Additional interactive visualizations
- Enhanced mobile experience
- More pharmaceutical use cases
- Advanced animation sequences

## Inspiration
Built following best practices from leading data journalism organizations:
- The New York Times interactive graphics
- The Pudding's scrollytelling articles
- Reuters visual storytelling
- Scientific visualization standards

## License
This project is open source and available under the MIT License.

---

*Demonstrating the future of precision medicine through interactive storytelling.*
