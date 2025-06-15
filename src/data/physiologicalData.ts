
export interface OrganData {
  volumeL: number;
  bloodFlowLhr: number;
}

export const physiologicalData: Record<string, OrganData> = {
  Adipose: { volumeL: 15.0, bloodFlowLhr: 15.6 },
  Brain: { volumeL: 1.4, bloodFlowLhr: 45.0 },
  Gut: { volumeL: 1.5, bloodFlowLhr: 87.0 },
  Heart: { volumeL: 0.33, bloodFlowLhr: 15.0 },
  Kidney: { volumeL: 0.31, bloodFlowLhr: 69.0 },
  Liver: { volumeL: 1.8, bloodFlowLhr: 18.9 }, // Note: portal vein flow added to total
  Lung: { volumeL: 1.0, bloodFlowLhr: 312.0 },
  Muscle: { volumeL: 28.0, bloodFlowLhr: 46.8 },
  Skin: { volumeL: 3.7, bloodFlowLhr: 15.6 },
  Spleen: { volumeL: 0.18, bloodFlowLhr: 9.0 },
};

