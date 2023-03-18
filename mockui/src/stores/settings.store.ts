import create from 'zustand';

import dynamic from 'next/dynamic';
import FancyImg from 'public/images/fancy.png';
import LegacyImg from 'public/images/legacy.png';
import NewImg from 'public/images/new.png';
import ProfessionalImg from 'public/images/professional.png';

const ProfessionalTemplate = dynamic(() => import('src/templates/layouts/ProfessionalTemplate'), {
  ssr: false,
});
const LegacyTemplate = dynamic(() => import('src/templates/layouts/LegacyTemplate'), {
  ssr: false,
});
const Template3 = dynamic(() => import('src/templates/layouts/Template3'), {
  ssr: false,
});

const Template4 = dynamic(() => import('src/templates/layouts/Template4'), {
  ssr: false,
});

const Template5 = dynamic(() => import('src/templates/layouts/Template5'), {
  ssr: false,
});

const Template6 = dynamic(() => import('src/templates/layouts/Template6'), {
  ssr: false,
});
const Template7 = dynamic(() => import('src/templates/layouts/Template7'), {
  ssr: false,
});
const Template8 = dynamic(() => import('src/templates/layouts/Template8'), {
  ssr: false,
});

export const templates = [
  ProfessionalTemplate,
  LegacyTemplate,
  Template3,
  Template4,
  Template5,
  Template6,
  Template7,
  Template8,
];
export const templatesSrc = [
  ProfessionalImg,
  LegacyImg,
  FancyImg,
  FancyImg,
  FancyImg,
  NewImg,
  NewImg,
  NewImg,
];
export const templatesName = [
  'Professional',
  'legacy',
  'template3',
  'template4',
  'template5',
  'template6',
  'template7',
  'template8',
];

export const useTemplates = create((set: any) => ({
  index: 0,
  template: templates[0],

  setTemplate: (index: number) => set({ index, template: templates[index] }),
}));

export const useItems = create((set: any) => ({
  isPhotoDisplayed: true,

  setIsPhotoDisplayed: (isPhotoDisplayed: boolean) => set({ isPhotoDisplayed }),
}));

export const useZoom = create((set: any) => ({
  zoom: 0,

  update: (value: number) => {
    const zoomLevel = +value.toFixed(1);

    set((state: any) => {
      if (zoomLevel > 0.5) state.zoom = 0.5;
      else if (zoomLevel < -0.5) state.zoom = -0.5;
      else state.zoom = zoomLevel;
    });
  },
}));
