import aiDetectorDashboard from '@/assets/images/ai-detector-research-dashboard.png?url'
import aiDetector from '@/assets/images/ai-detector-research.png?url'
import borderRadiusPreviewer from '@/assets/images/border-radius-previewer.png?url'
import chromeExtension from '@/assets/images/chrome-extension.png?url'
import sortingAlgorithms from '@/assets/images/sorting.png?url'
import nextjsIcon from '/icons/nextjs_icon_dark.svg?url'
import piniaIcon from '/icons/pinia.svg?url'
import pythonIcon from '/icons/python.svg?url'
import tailwindIcon from '/icons/tailwindcss.svg?url'
import typescriptIcon from '/icons/typescript.svg?url'
import vueIcon from '/icons/vue.svg?url'
import vuetifyIcon from '/icons/vuetify.svg?url'
export default [
  {
    id: 1,
    description: 'A frontend for the AI detector research tool.',
    title: 'AI detector research tool dashboard',
    gitUrl: 'https://github.com/OriginalityAI/Ai-detector-research-tool-UI',
    webUrl: '',
    image: aiDetectorDashboard,
    tech: [vueIcon, vuetifyIcon, typescriptIcon, piniaIcon, pythonIcon],
  },
  {
    id: 2,
    description:
      'Open-source command-line Python tool enabling users to test multiple AI detectors accuracy on large datasets.',
    title: 'AI detector research tool',
    gitUrl: 'https://github.com/OriginalityAI/AI-detector-research-tool',
    webUrl: '',
    image: aiDetector,
    tech: [pythonIcon],
  },
  {
    id: 3,
    description:
      "A Chrome extension that allows users to run Originality.ai's AI detector on any website.",
    title: 'AI detector Chrome extension',
    gitUrl: '',
    webUrl:
      'https://chromewebstore.google.com/detail/ai-detector-and-human-wri/kdngfaamkbbkdbemejnlkmjfpmndjdmb',
    image: chromeExtension,
    tech: [vueIcon, vuetifyIcon, typescriptIcon, piniaIcon],
  },
  {
    id: 4,
    description:
      'A tool designed to help users easily learn and understand various sorting algorithms. ',
    title: 'Sorting algorithm visualizer',
    gitUrl: 'https://github.com/Jimmy-b36/visualize-algorithms',
    webUrl: 'https://visualize-algorithms-lld6.vercel.app/',
    image: sortingAlgorithms,
    tech: [nextjsIcon, tailwindIcon, typescriptIcon],
  },
  {
    id: 5,
    description: 'A border radius previewer for easy copy and paste.',
    title: 'Border Radius Previewer',
    gitUrl: 'https://github.com/Jimmy-b36/border-radius-preview',
    webUrl: 'https://border-radius-preview.vercel.app/',
    image: borderRadiusPreviewer,
    tech: [nextjsIcon, tailwindIcon, typescriptIcon],
  },
]
