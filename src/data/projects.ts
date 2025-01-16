import aiDetectorDashboard from '@/assets/images/ai-detector-research-dashboard.png?url'
import aiDetector from '@/assets/images/ai-detector-research.png?url'
import borderRadiusPreviewer from '@/assets/images/border-radius-previewer.png?url'
import chromeExtension from '@/assets/images/chrome-extension.png?url'
import sortingAlgorithms from '@/assets/images/sorting.png?url'
export default [
  {
    id: 1,
    title: 'AI Detector Research Tool UI',
    description: 'A frontend for the AI detector research tool.',
    gitUrl: 'https://github.com/OriginalityAI/Ai-detector-research-tool-UI',
    webUrl: '',
    image: aiDetectorDashboard,
    tech: ['Vue.js', 'Vuetify', 'TypeScript', 'Pinia', 'Python'],
    role: 'Lead Developer',
  },
  {
    id: 2,
    title: 'AI Detector Research Tool',
    description:
      'Open-source command-line Python tool enabling users to test multiple AI detectors accuracy on large datasets.',
    gitUrl: 'https://github.com/OriginalityAI/AI-detector-research-tool',
    webUrl: '',
    image: aiDetector,
    tech: ['Python'],
    role: 'Lead Developer',
  },
  {
    id: 3,
    title: 'Ai Detector Chrome Extension',
    description:
      "A Chrome extension that allows users to run Originality.ai's AI detector on any website.",
    gitUrl: '',
    webUrl:
      'https://chromewebstore.google.com/detail/ai-detector-and-human-wri/kdngfaamkbbkdbemejnlkmjfpmndjdmb',
    image: chromeExtension,
    tech: ['Vue.js', 'Vuetify', 'TypeScript', 'Pinia'],
    role: 'Lead Developer',
  },
  {
    id: 4,
    title: 'Sorting Algorithm Visualizer',
    description:
      'A tool designed to help users easily learn and understand various sorting algorithms. ',
    gitUrl: 'https://github.com/Jimmy-b36/visualize-algorithms',
    webUrl: 'https://visualize-algorithms-lld6.vercel.app/',
    image: sortingAlgorithms,
    tech: ['Next.js', 'Tailwind CSS', 'TypeScript'],
    role: '',
  },
  {
    id: 5,
    title: 'Border Radius Previewer',
    description: 'A border radius previewer for easy copy and paste.',
    gitUrl: 'https://github.com/Jimmy-b36/border-radius-preview',
    webUrl: 'https://border-radius-preview.vercel.app/',
    image: borderRadiusPreviewer,
    tech: ['Next.js', 'Tailwind CSS', 'TypeScript'],
    role: '',
  },
]

export interface IProject {
  id: number
  title: string
  description: string
  image: string
  webUrl: string
  gitUrl: string
  tech: string[]
  role: string
}
