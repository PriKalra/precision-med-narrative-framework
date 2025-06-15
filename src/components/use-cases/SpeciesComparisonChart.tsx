
import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, LogarithmicScale, BarElement, Title, Tooltip, Legend, TooltipItem } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, LogarithmicScale, BarElement, Title, Tooltip, Legend);

const speciesData = {
    human: { values: [70, 312, 2.6, 0.4, 1.6], color: 'rgba(115, 41, 230, 0.7)' },
    monkey: { values: [7, 45, 3.66, 0.73, 1.6], color: 'rgba(46, 184, 105, 0.7)' },
    rat: { values: [0.25, 5, 3.66, 0.73, 1.6], color: 'rgba(166, 128, 224, 0.7)' },
    mouse: { values: [0.025, 0.5, 3.66, 0.73, 1.6], color: 'rgba(90, 196, 137, 0.7)' }
};
const labels = ['Body Weight (kg)', 'Cardiac Output (L/h)', 'Liver (%BW)', 'Kidney (%BW)', 'Thyroid Blood Flow (%)'];

const SpeciesComparisonChart: React.FC = () => {
    const [activeSpecies, setActiveSpecies] = useState<keyof typeof speciesData>('human');

    const chartData = {
        labels,
        datasets: [{
            label: `${activeSpecies.charAt(0).toUpperCase() + activeSpecies.slice(1)} Parameters`,
            data: speciesData[activeSpecies].values,
            backgroundColor: speciesData[activeSpecies].color,
            borderColor: speciesData[activeSpecies].color.replace('0.7', '1'),
            borderWidth: 1
        }]
    };

    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        scales: { 
            y: { 
                beginAtZero: true, 
                type: 'logarithmic' as const, 
                title: { display: true, text: 'Value (Log Scale)', color: '#9ca3af' }, // gray-400
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
                    label: (context: TooltipItem<'bar'>) => {
                        const label = context.chart.data.labels?.[context.dataIndex];
                        const value = context.parsed.y;
                        if (label && value !== null) {
                            return `${label}: ${value}`;
                        }
                        return '';
                    }
                }
            }
        }
    };

    return (
        <div className="bg-card p-4 sm:p-8 rounded-xl shadow-lg">
            <div className="flex justify-center space-x-2 mb-4">
                {(Object.keys(speciesData) as Array<keyof typeof speciesData>).map((species) => (
                    <button
                        key={species}
                        onClick={() => setActiveSpecies(species)}
                        className={`px-4 py-2 rounded-md font-semibold shadow transition-colors ${activeSpecies === species ? 'bg-primary text-primary-foreground' : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'}`}
                    >
                        {species.charAt(0).toUpperCase() + species.slice(1)}
                    </button>
                ))}
            </div>
            <div className="relative h-[350px] md:h-[400px]">
                <Bar options={chartOptions} data={chartData} />
            </div>
            <p className="text-xs text-muted-foreground mt-4 text-center">
                Note: The vertical axis uses a logarithmic scale to clearly display values that span several orders of magnitude. The values shown in tooltips are the actual linear scale values.
            </p>
        </div>
    );
};

export default SpeciesComparisonChart;
