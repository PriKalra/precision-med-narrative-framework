
// Main application script
class PrecisionMedicineApp {
    constructor() {
        this.scrollama = scrollama();
        this.currentStep = 0;
        this.solutionStep = 0;
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
        
        this.speciesData = {
            human: { values: [70, 312, 2.6, 0.4, 1.6], color: 'rgba(115, 41, 230, 0.7)' },
            monkey: { values: [7, 45, 3.66, 0.73, 1.6], color: 'rgba(46, 184, 105, 0.7)' },
            rat: { values: [0.25, 5, 3.66, 0.73, 1.6], color: 'rgba(166, 128, 224, 0.7)' },
            mouse: { values: [0.025, 0.5, 3.66, 0.73, 1.6], color: 'rgba(90, 196, 137, 0.7)' }
        };

        this.enzymeData = {
            cyp3a: {
                title: 'CYP3A Family',
                content: 'Found in the liver and intestine, CYP3A enzymes are responsible for metabolizing over 50% of prescription drugs. Their activity shows high variability between people due to genetics and can be a source of the HLM:HH disconnect. Predicting CYP3A-mediated interactions and understanding how varying expression levels impact them is a primary goal for DDI assessment, enabling more precise dosing.'
            },
            ugts: {
                title: 'UGTs (UDP-glucuronosyltransferases)',
                content: 'These are key Phase II metabolism enzymes that make compounds more water-soluble for excretion. Their expression and activity are highly tissue- and species-dependent, leading to significant variations in unbound intrinsic clearance. Integrating these specific expression profiles improves cross-species scaling and DDI predictions related to glucuronidation.'
            },
            mdr1: {
                title: 'MDR1 (P-glycoprotein)',
                content: "MDR1 is an efflux transporter that acts like a bouncer, pumping drugs out of cells. It's crucial in limiting drug absorption and preventing entry into the brain. Its function, substrate specificity, and expression levels can differ significantly across species. Accounting for these varied expression profiles is key to predicting transporter-mediated DDIs and tissue-specific drug concentrations."
            }
        };
        
        this.init();
    }

    init() {
        this.setupScrollytelling();
        this.createPBPKDiagram();
        this.createSolutionFlowchart();
        this.createSpeciesChart();
        this.setupDDIExplainer();
        this.setupEnzymeTabs();
        this.setupNavigation();
        this.setupScrollIndicator();
        this.setupAnimations();
        this.animateClearanceBars();
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
        const section = response.element.closest('section');
        
        // Update active step
        document.querySelectorAll('.step').forEach(step => {
            step.classList.remove('active');
        });
        response.element.classList.add('active');
        
        // Handle different sections
        if (section.id === 'introduction') {
            this.currentStep = stepIndex;
            this.updatePBPKDiagram(stepIndex);
        } else if (section.id === 'solution') {
            this.solutionStep = stepIndex;
            this.updateSolutionFlowchart(stepIndex);
        }
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

    createSolutionFlowchart() {
        const container = document.getElementById('solution-flowchart');
        if (!container) return;

        container.innerHTML = `
            <div class="w-full flex justify-center items-center">
                <div class="relative w-full max-w-lg h-[70vh]">
                    <div id="gnn-visual" class="absolute inset-0 transition-all duration-700 ease-in-out opacity-100 scale-100">
                        <div class="flex items-center justify-center h-full">
                            <div class="p-4 bg-white rounded-xl shadow-lg w-full max-w-lg">
                                <div class="flex items-center justify-center h-48 space-x-4">
                                    <span class="text-sm font-mono text-center text-gray-600">Molecule<br/>(SMILES)</span>
                                    <span class="text-2xl text-gray-400">→</span>
                                    <div class="text-center">
                                        <div class="relative w-24 h-24 animate-pulse">
                                            <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-blue-600 rounded-full"></div>
                                            <div class="absolute top-2 left-2 w-4 h-4 bg-blue-400 rounded-full"></div>
                                            <div class="absolute bottom-2 right-2 w-4 h-4 bg-blue-400 rounded-full"></div>
                                            <div class="absolute top-2 right-2 w-4 h-4 bg-blue-400 rounded-full"></div>
                                            <div class="absolute bottom-2 left-2 w-4 h-4 bg-blue-400 rounded-full"></div>
                                        </div>
                                        <span class="text-sm font-semibold mt-2 block">GNN Model</span>
                                    </div>
                                    <span class="text-2xl text-gray-400">→</span>
                                    <div class="text-left text-sm font-mono text-gray-600">
                                        <p>Vss: 1.5 L/kg</p>
                                        <p>CL: 20 mL/min</p>
                                        <p>Papp: 10e-6</p>
                                        <span class="text-xs font-semibold mt-2 block text-gray-900">(Predicted ADME)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="ai-flowchart" class="absolute inset-0 transition-all duration-700 ease-in-out opacity-0 scale-95 pointer-events-none">
                        <div class="flex items-center justify-center h-full">
                            <div class="w-full max-w-md mx-auto p-4 space-y-2 font-sans text-xs flex flex-col items-center" id="flowchart-container">
                                <!-- Flowchart will be built here -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;

        this.buildAIFlowchart();
    }

    buildAIFlowchart() {
        const container = document.getElementById('flowchart-container');
        if (!container) return;

        const flowchartSteps = [
            { icon: '👥', title: 'Human Expert Input', desc: 'Pharmacologist defines problem' },
            { icon: '🤖', title: 'Conversational Agent', desc: 'Processes natural language query' },
            { icon: '⚙️', title: 'Planning Agent', desc: 'Orchestrates workflow' },
            { icon: '🗄️', title: 'Data Retrieval', desc: '' },
            { icon: '📚', title: 'Knowledge Extraction', desc: '' },
            { icon: '🧪', title: 'Hypothesis Generation', desc: '' },
            { icon: '🧠', title: 'ML Parameter Prediction', desc: '' },
            { icon: '🧪', title: 'Simulation Agent', desc: 'PBPK/PK/PD/QSP Models' },
            { icon: '🔄', title: 'Evaluation & Refinement Loop', desc: 'Iterative optimization' },
            { icon: '✅', title: 'Human Oversight', desc: 'Expert review & approval' },
            { icon: '📄', title: 'Regulatory & Reporting', desc: 'Automated documentation' }
        ];

        let html = '';
        flowchartSteps.forEach((step, index) => {
            const isGrid = index >= 3 && index <= 6;
            
            if (index === 3) {
                html += '<div class="grid grid-cols-2 gap-4 w-full transition-opacity duration-500 opacity-20" id="parallel-tasks">';
            }
            
            html += `
                <div class="flowchart-node p-3 border rounded-lg transition-all duration-500 transform bg-gray-50 shadow opacity-100" data-step="${index}">
                    <div class="flex items-center space-x-3">
                        <span class="text-lg shrink-0">${step.icon}</span>
                        <div>
                            <h4 class="font-semibold text-sm text-gray-600">${step.title}</h4>
                            ${step.desc ? `<p class="text-xs text-gray-500">${step.desc}</p>` : ''}
                        </div>
                    </div>
                </div>
            `;
            
            if (index === 6) {
                html += '</div>';
            }
            
            if (index < flowchartSteps.length - 1 && (index < 3 || index > 6)) {
                html += '<div class="flex justify-center items-center h-8 transition-opacity duration-500 opacity-20"><span class="text-gray-400">↓</span></div>';
            }
            
            if (index === 8) {
                html += '<div class="grid grid-cols-2 gap-4 w-full transition-opacity duration-500 opacity-20" id="final-tasks">';
            }
            
            if (index === 10) {
                html += '</div>';
            }
        });

        container.innerHTML = html;
    }

    updateSolutionFlowchart(stepIndex) {
        const gnnVisual = document.getElementById('gnn-visual');
        const aiFlowchart = document.getElementById('ai-flowchart');
        const flowchartNodes = document.querySelectorAll('.flowchart-node');
        
        if (stepIndex === 0) {
            // Show GNN visual
            gnnVisual.classList.remove('opacity-0', 'scale-95', 'pointer-events-none');
            gnnVisual.classList.add('opacity-100', 'scale-100');
            aiFlowchart.classList.add('opacity-0', 'scale-95', 'pointer-events-none');
            aiFlowchart.classList.remove('opacity-100', 'scale-100');
        } else {
            // Show AI flowchart
            gnnVisual.classList.add('opacity-0', 'scale-95', 'pointer-events-none');
            gnnVisual.classList.remove('opacity-100', 'scale-100');
            aiFlowchart.classList.remove('opacity-0', 'scale-95', 'pointer-events-none');
            aiFlowchart.classList.add('opacity-100', 'scale-100');
            
            // Activate steps based on current step
            const activeSteps = this.getActiveFlowchartSteps(stepIndex);
            
            flowchartNodes.forEach((node, index) => {
                const isActive = activeSteps.includes(index);
                if (isActive) {
                    node.classList.add('bg-blue-50', 'border-blue-300');
                    node.classList.remove('bg-gray-50');
                    node.querySelector('h4').classList.add('text-blue-800');
                    node.querySelector('h4').classList.remove('text-gray-600');
                } else {
                    node.classList.remove('bg-blue-50', 'border-blue-300');
                    node.classList.add('bg-gray-50');
                    node.querySelector('h4').classList.remove('text-blue-800');
                    node.querySelector('h4').classList.add('text-gray-600');
                }
            });
            
            // Show/hide parallel task groups
            const parallelTasks = document.getElementById('parallel-tasks');
            const finalTasks = document.getElementById('final-tasks');
            
            if (stepIndex >= 3) {
                parallelTasks?.classList.remove('opacity-20');
                parallelTasks?.classList.add('opacity-100');
            }
            
            if (stepIndex >= 6) {
                finalTasks?.classList.remove('opacity-20');
                finalTasks?.classList.add('opacity-100');
            }
        }
    }

    getActiveFlowchartSteps(stepIndex) {
        switch(stepIndex) {
            case 1: return [0, 1, 2];
            case 2: return [0, 1, 2];
            case 3: return [3, 4, 5, 6];
            case 4: return [7];
            case 5: return [8];
            case 6: return [9, 10];
            default: return [];
        }
    }

    createSpeciesChart() {
        const ctx = document.getElementById('speciesComparisonChart');
        if (!ctx) return;

        this.currentSpecies = 'human';
        this.speciesChart = null;
        this.updateSpeciesChart();
        
        // Add event listeners for species buttons
        document.querySelectorAll('.species-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const species = e.target.dataset.species;
                this.currentSpecies = species;
                this.updateSpeciesChart();
                
                // Update button states
                document.querySelectorAll('.species-btn').forEach(b => {
                    b.classList.remove('bg-blue-600', 'text-white');
                    b.classList.add('bg-gray-200', 'text-gray-700', 'hover:bg-gray-300');
                });
                e.target.classList.add('bg-blue-600', 'text-white');
                e.target.classList.remove('bg-gray-200', 'text-gray-700', 'hover:bg-gray-300');
            });
        });
    }

    updateSpeciesChart() {
        const ctx = document.getElementById('speciesComparisonChart');
        if (!ctx) return;

        if (this.speciesChart) {
            this.speciesChart.destroy();
        }

        const labels = ['Body Weight (kg)', 'Cardiac Output (L/h)', 'Liver (%BW)', 'Kidney (%BW)', 'Thyroid Blood Flow (%)'];
        const speciesInfo = this.speciesData[this.currentSpecies];

        this.speciesChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: `${this.currentSpecies.charAt(0).toUpperCase() + this.currentSpecies.slice(1)} Parameters`,
                    data: speciesInfo.values,
                    backgroundColor: speciesInfo.color,
                    borderColor: speciesInfo.color.replace('0.7', '1'),
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        type: 'logarithmic',
                        title: { display: true, text: 'Value (Log Scale)', color: '#9ca3af' },
                        ticks: { color: '#9ca3af' },
                        grid: { color: 'rgba(156, 163, 175, 0.1)' }
                    },
                    x: {
                        ticks: { color: '#9ca3af' },
                        grid: { color: 'rgba(156, 163, 175, 0.1)' }
                    }
                },
                plugins: {
                    legend: { display: false },
                    tooltip: {
                        callbacks: {
                            label: (context) => {
                                const label = context.chart.data.labels[context.dataIndex];
                                const value = context.parsed.y;
                                return `${label}: ${value}`;
                            }
                        }
                    }
                }
            }
        });
    }

    setupDDIExplainer() {
        const analyzeBtn = document.getElementById('analyze-ddi');
        const drugAInput = document.getElementById('drug-a');
        const drugBInput = document.getElementById('drug-b');
        const resultDiv = document.getElementById('ddi-result');

        if (!analyzeBtn) return;

        analyzeBtn.addEventListener('click', async () => {
            const drugA = drugAInput.value.trim();
            const drugB = drugBInput.value.trim();

            if (!drugA || !drugB) {
                resultDiv.textContent = "Please enter names for both drugs.";
                resultDiv.classList.add('text-red-600');
                return;
            }

            analyzeBtn.textContent = 'Analyzing...';
            analyzeBtn.disabled = true;
            resultDiv.classList.remove('text-red-600', 'italic');
            resultDiv.textContent = 'Analyzing potential drug-drug interactions...';

            // Simulate API call delay
            setTimeout(() => {
                const mockResult = this.generateMockDDIResult(drugA, drugB);
                resultDiv.textContent = mockResult;
                analyzeBtn.textContent = 'Analyze Potential DDI ✨';
                analyzeBtn.disabled = false;
            }, 2000);
        });
    }

    generateMockDDIResult(drugA, drugB) {
        const commonInteractions = {
            'warfarin': {
                'amiodarone': 'Amiodarone inhibits CYP2C9 and CYP3A4, potentially increasing warfarin levels and bleeding risk. Monitor INR closely and consider dose reduction.',
                'aspirin': 'Additive anticoagulant effects increase bleeding risk. Both drugs affect platelet function and coagulation cascade.',
            },
            'digoxin': {
                'amiodarone': 'Amiodarone inhibits P-glycoprotein, increasing digoxin levels. Reduce digoxin dose by 50% and monitor levels.',
                'verapamil': 'Verapamil inhibits P-glycoprotein transport, increasing digoxin bioavailability and risk of toxicity.',
            }
        };

        const drugALower = drugA.toLowerCase();
        const drugBLower = drugB.toLowerCase();

        if (commonInteractions[drugALower]?.[drugBLower]) {
            return commonInteractions[drugALower][drugBLower];
        }
        if (commonInteractions[drugBLower]?.[drugALower]) {
            return commonInteractions[drugBLower][drugALower];
        }

        return `Based on current knowledge, there are no well-documented major interactions between ${drugA} and ${drugB}. However, consider monitoring for additive effects if both drugs affect similar physiological systems. Always consult current drug interaction databases for the most up-to-date information.`;
    }

    setupEnzymeTabs() {
        const enzymeTabs = document.querySelectorAll('.enzyme-tab');
        const enzymeContent = document.getElementById('enzyme-content');

        if (!enzymeTabs.length) return;

        enzymeTabs.forEach(tab => {
            tab.addEventListener('click', (e) => {
                const enzyme = e.target.dataset.enzyme;
                const enzymeInfo = this.enzymeData[enzyme];

                // Update tab states
                enzymeTabs.forEach(t => {
                    t.classList.remove('bg-blue-50', 'text-blue-600', 'border-b-2', 'border-blue-600');
                    t.classList.add('text-gray-600', 'hover:bg-gray-50');
                });
                e.target.classList.add('bg-blue-50', 'text-blue-600', 'border-b-2', 'border-blue-600');
                e.target.classList.remove('text-gray-600', 'hover:bg-gray-50');

                // Update content
                enzymeContent.innerHTML = `
                    <h4 class="font-bold text-lg mb-2">${enzymeInfo.title}</h4>
                    <p class="text-gray-600">${enzymeInfo.content}</p>
                `;
            });
        });
    }

    animateClearanceBars() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const fills = entry.target.querySelectorAll('.clearance-fill');
                    fills.forEach(fill => {
                        fill.style.transition = 'height 1.5s ease-out';
                        fill.style.height = fill.style.height || '0%';
                    });
                }
            });
        }, { threshold: 0.5 });

        const clearanceBars = document.getElementById('clearance-bars');
        if (clearanceBars) {
            observer.observe(clearanceBars);
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
        if (this.speciesChart) {
            this.speciesChart.destroy();
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
