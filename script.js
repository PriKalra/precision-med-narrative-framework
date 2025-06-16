
// Main application script
class PrecisionMedicineApp {
    constructor() {
        this.scrollama = scrollama();
        this.currentStep = 0;
        this.organs = [
            { name: 'Liver', group: 'metabolic' },
            { name: 'Kidney', group: 'metabolic' },
            { name: 'Brain', group: 'standard' },
            { name: 'Lung', group: 'standard' },
            { name: 'Heart', group: 'standard' },
            { name: 'Gut', group: 'standard' },
            { name: 'Spleen', group: 'standard' },
            { name: 'Muscle', group: 'standard' },
            { name: 'Thyroid', group: 'specialized' },
            { name: 'Testes', group: 'specialized' },
            { name: 'Prostate', group: 'specialized' },
            { name: 'Ovaries', group: 'specialized' },
            { name: 'Uterus', group: 'specialized' },
            { name: 'Adipose', group: 'other' },
            { name: 'Skin', group: 'other' },
            { name: 'Blood', group: 'other' }
        ];
        
        this.init();
    }

    init() {
        this.setupScrollytelling();
        this.createPBPKDiagram();
        this.createSpeciesChart();
        this.setupNavigation();
        this.setupScrollIndicator();
        this.setupAnimations();
    }

    setupScrollytelling() {
        // Setup scrollama for step-by-step storytelling
        this.scrollama
            .setup({
                step: '.step',
                offset: 0.5,
                debug: false
            })
            .onStepEnter(response => {
                this.handleStepEnter(response);
            })
            .onStepExit(response => {
                this.handleStepExit(response);
            });

        // Handle resize
        window.addEventListener('resize', () => {
            this.scrollama.resize();
        });
    }

    handleStepEnter(response) {
        const stepIndex = +response.element.dataset.step;
        this.currentStep = stepIndex;
        
        // Update active step
        document.querySelectorAll('.step').forEach(step => {
            step.classList.remove('active');
        });
        response.element.classList.add('active');
        
        // Update PBPK diagram based on step
        this.updatePBPKDiagram(stepIndex);
    }

    handleStepExit(response) {
        // Handle step exit if needed
    }

    createPBPKDiagram() {
        const container = document.getElementById('pbpk-diagram');
        if (!container) return;

        container.innerHTML = `
            <div class="text-center">
                <h4 class="text-xl font-semibold text-blue-600 mb-4">16-Organ PBPK System</h4>
                <div class="organ-grid" id="organ-grid">
                    ${this.organs.map((organ, index) => 
                        `<div class="organ organ-${organ.group}" data-organ="${index}">
                            ${organ.name}
                        </div>`
                    ).join('')}
                </div>
                <div class="mt-4 text-sm text-gray-500 min-h-[2rem] flex items-center justify-center">
                    <span id="diagram-caption">A mechanistic PBPK model links all major physiological systems.</span>
                </div>
            </div>
        `;
    }

    updatePBPKDiagram(stepIndex) {
        const organs = document.querySelectorAll('.organ');
        const caption = document.getElementById('diagram-caption');
        
        // Clear all states
        organs.forEach(organ => {
            organ.classList.remove('highlighted', 'faded');
        });

        switch(stepIndex) {
            case 0:
                caption.textContent = "A mechanistic PBPK model links all major physiological systems.";
                break;
                
            case 1:
                // Cycle through organs to show drug distribution
                this.startOrganCycling();
                caption.textContent = "Simulating drug distribution across organs.";
                break;
                
            case 2:
                this.stopOrganCycling();
                caption.textContent = "Watch drug concentrations change over time in different organs.";
                // Highlight a few organs in sequence
                setTimeout(() => organs[0]?.classList.add('highlighted'), 200);
                setTimeout(() => organs[4]?.classList.add('highlighted'), 600);
                setTimeout(() => organs[8]?.classList.add('highlighted'), 1000);
                break;
                
            case 3:
                this.stopOrganCycling();
                // Highlight specialized organs
                organs.forEach(organ => {
                    const organIndex = organ.dataset.organ;
                    const organData = this.organs[organIndex];
                    if (organData.group === 'specialized') {
                        organ.classList.add('highlighted');
                    } else {
                        organ.classList.add('faded');
                    }
                });
                caption.textContent = "Our model includes specialized reproductive and thyroid organs for enhanced precision.";
                break;
        }
    }

    startOrganCycling() {
        this.stopOrganCycling(); // Clear any existing interval
        let currentOrgan = 0;
        
        this.organCycleInterval = setInterval(() => {
            const organs = document.querySelectorAll('.organ');
            organs.forEach(organ => organ.classList.remove('highlighted'));
            
            if (organs[currentOrgan]) {
                organs[currentOrgan].classList.add('highlighted');
            }
            
            currentOrgan = (currentOrgan + 1) % this.organs.length;
        }, 800);
    }

    stopOrganCycling() {
        if (this.organCycleInterval) {
            clearInterval(this.organCycleInterval);
            this.organCycleInterval = null;
        }
    }

    createSpeciesChart() {
        const ctx = document.getElementById('speciesComparisonChart');
        if (!ctx) return;

        const speciesData = {
            labels: ['Body Weight (kg)', 'Liver Volume (L)', 'Cardiac Output (L/min)', 'Renal Clearance (mL/min)'],
            datasets: [
                {
                    label: 'Mouse',
                    data: [0.025, 0.001, 0.01, 0.2],
                    backgroundColor: 'rgba(59, 130, 246, 0.2)',
                    borderColor: 'rgba(59, 130, 246, 1)',
                    borderWidth: 2
                },
                {
                    label: 'Rat',
                    data: [0.25, 0.01, 0.08, 1.5],
                    backgroundColor: 'rgba(16, 185, 129, 0.2)',
                    borderColor: 'rgba(16, 185, 129, 1)',
                    borderWidth: 2
                },
                {
                    label: 'Monkey',
                    data: [5, 0.2, 1.2, 40],
                    backgroundColor: 'rgba(245, 158, 11, 0.2)',
                    borderColor: 'rgba(245, 158, 11, 1)',
                    borderWidth: 2
                },
                {
                    label: 'Human',
                    data: [70, 1.8, 5.6, 120],
                    backgroundColor: 'rgba(239, 68, 68, 0.2)',
                    borderColor: 'rgba(239, 68, 68, 1)',
                    borderWidth: 2
                }
            ]
        };

        new Chart(ctx, {
            type: 'radar',
            data: speciesData,
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    r: {
                        beginAtZero: true,
                        ticks: {
                            display: false
                        }
                    }
                },
                plugins: {
                    legend: {
                        position: 'bottom'
                    },
                    title: {
                        display: true,
                        text: 'Physiological Parameters Across Species (Normalized)'
                    }
                }
            }
        });
    }

    setupNavigation() {
        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Update active navigation link on scroll
        window.addEventListener('scroll', () => {
            this.updateActiveNavLink();
        });
    }

    updateActiveNavLink() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');
        
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            if (window.pageYOffset >= sectionTop) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }

    setupScrollIndicator() {
        // Create scroll progress indicator
        const indicator = document.createElement('div');
        indicator.className = 'scroll-indicator';
        document.body.appendChild(indicator);

        window.addEventListener('scroll', () => {
            const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = (window.pageYOffset / totalHeight) * 100;
            indicator.style.transform = `scaleX(${progress / 100})`;
        });
    }

    setupAnimations() {
        // Intersection Observer for fade-in animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observe challenge cards, future cards, and use cases
        document.querySelectorAll('.challenge-card, .future-card, .use-case').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });
    }

    // Cleanup method
    destroy() {
        this.stopOrganCycling();
        if (this.scrollama) {
            this.scrollama.destroy();
        }
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const app = new PrecisionMedicineApp();
    
    // Cleanup on page unload
    window.addEventListener('beforeunload', () => {
        app.destroy();
    });
});

// Utility functions for enhanced interactivity
function showTooltip(element, text) {
    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip bg-gray-900 text-white p-2 rounded text-sm absolute z-50';
    tooltip.textContent = text;
    tooltip.style.top = element.offsetTop - 40 + 'px';
    tooltip.style.left = element.offsetLeft + 'px';
    document.body.appendChild(tooltip);
    
    setTimeout(() => {
        tooltip.remove();
    }, 3000);
}

// Enhanced organ interaction
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        const organs = document.querySelectorAll('.organ');
        organs.forEach(organ => {
            organ.addEventListener('mouseenter', function() {
                const organName = this.textContent.trim();
                const tooltips = {
                    'Liver': 'Primary site of drug metabolism via CYP enzymes',
                    'Kidney': 'Major route of drug elimination through filtration',
                    'Brain': 'Protected by blood-brain barrier, critical for CNS drugs',
                    'Thyroid': 'Specialized endocrine organ with unique drug sensitivity',
                    'Testes': 'Reproductive organ requiring specialized modeling',
                    'Ovaries': 'Hormone-sensitive reproductive tissue'
                };
                
                if (tooltips[organName]) {
                    showTooltip(this, tooltips[organName]);
                }
            });
        });
    }, 1000);
});
