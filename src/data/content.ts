export const asset = (file: string) => `${import.meta.env.BASE_URL}images/${file}`

export type Client = {
  name: string
  logo: string
}

export const clients: Client[] = [
  {
    name: 'Sendhamarai Engineering',
    logo: asset('clients/sendhamarai-engineering.png'),
  },
  {
    name: 'Venkateshwara Fibre Glass',
    logo: asset('clients/venkateshwara-fibre-glass.png'),
  },
  {
    name: 'IL&FS Tamil Nadu Power',
    logo: asset('clients/ilfs-tamil-nadu-power.png'),
  },
  {
    name: 'Hindustan Coca-Cola',
    logo: asset('clients/hindustan-coca-cola.png'),
  },
  {
    name: 'Aachi Group of Companies',
    logo: asset('clients/aachi-group.png'),
  },
  {
    name: 'Phoenix Mall',
    logo: asset('clients/phoenix-mall.png'),
  },
  {
    name: 'ESI Hospital, MGR Nagar',
    logo: asset('clients/esi-hospital-mgr-nagar.png'),
  },
]

export const capabilities = [
  'Chartered Engineering & Competent Person services',
  'Third-party inspection and NDT support',
  'Plant & machinery valuation for banks and MSMEs',
  'Structural stability and equipment fitness',
  'Safety, energy, and compliance audits',
  'Factory plans, layouts, and Engineering advisory',
]

export type Vertical = {
  id: string
  path: string
  index: string
  title: string
  navLabel: string
  summary: string
  heroTitle: string
  heroLead: string
  image: string
  detailImage: string
  imageAlt: string
  detailAlt: string
  overview: string[]
  services: { title: string; text: string }[]
  process: { step: string; title: string; text: string }[]
  audience: string[]
  outcomes: string[]
}

export const verticals: Vertical[] = [
  {
    id: 'solar',
    path: '/services/solar-plant-installation',
    index: '01',
    title: 'Solar Plant Installation',
    navLabel: 'Solar',
    summary:
      'Engineering oversight for industrial and commercial solar plants across Tamil Nadu — from rooftop arrays on factory sheds to ground-mount systems ready for commissioning.',
    heroTitle: 'Solar plant Engineering for Indian industry',
    heroLead:
      'Independent inspection and technical assurance for rooftop and ground-mount solar installations on factories, warehouses and commercial campuses.',
    image: asset('solar.jpg'),
    detailImage: asset('solar-detail.jpg'),
    imageAlt: 'Rooftop solar panels on an industrial factory building in India',
    detailAlt: 'Technicians inspecting solar arrays on an Indian factory roof',
    overview: [
      'Industrial solar programmes succeed when installation quality, structural safety and documentation are verified early — not after energisation issues appear.',
      'IAAN CONSULTANTSS supports plant owners, EPCs and facility teams with disciplined Engineering checks tailored to Indian factory roofs, sheds and ground-mount layouts.',
    ],
    services: [
      {
        title: 'Installation inspection',
        text: 'Module mounting, cabling routes, earthing continuity and workmanship checks across rooftop and ground-mount arrays.',
      },
      {
        title: 'Structural readiness',
        text: 'Review of roof loading considerations, mounting integrity and access safety for industrial sheds and large buildings.',
      },
      {
        title: 'Safety & compliance review',
        text: 'Walkway clearances, fall protection interfaces, electrical safety observations and site housekeeping during installation.',
      },
      {
        title: 'Commissioning documentation',
        text: 'Support for inspection records, punch lists and technical notes that help teams move cleanly toward commissioning.',
      },
    ],
    process: [
      {
        step: '01',
        title: 'Site briefing',
        text: 'Understand plant layout, roof type, installation stage and documentation already available.',
      },
      {
        step: '02',
        title: 'Field inspection',
        text: 'Carry out structured checks on mounting, electrical interfaces, safety provisions and workmanship.',
      },
      {
        step: '03',
        title: 'Findings & close-out',
        text: 'Issue clear observations, priority actions and supporting notes for EPC and owner teams.',
      },
    ],
    audience: [
      'Manufacturing plants adding rooftop solar',
      'Warehouse and logistics campuses',
      'Commercial and institutional facilities',
      'EPC contractors needing third-party review',
    ],
    outcomes: [
      'Clear installation quality visibility before handover',
      'Reduced rework risk on industrial roofs',
      'Better documentation discipline for commissioning',
      'Independent assurance for owners and lenders',
    ],
  },
  {
    id: 'fire-safety',
    path: '/services/fire-safety',
    index: '02',
    title: 'Fire Safety',
    navLabel: 'Fire Safety',
    summary:
      'Industrial fire safety for large buildings, factories, warehouses and plant campuses — protecting people, assets and uninterrupted production.',
    heroTitle: 'Fire safety for large buildings and industrial plants',
    heroLead:
      'Practical fire and life-safety programmes for factories, warehouses, process plants and multi-building campuses across Tamil Nadu.',
    image: asset('fire.jpg'),
    detailImage: asset('fire-detail.jpg'),
    imageAlt: 'Large Indian industrial building with fire hydrant infrastructure',
    detailAlt: 'Indian industrial warehouse exterior with fire hydrant and safety systems',
    overview: [
      'Large industrial buildings carry concentrated fire loads, complex egress paths and critical production assets. Fire safety must be engineered for the facility — not treated as a generic checklist.',
      'We support plant leadership and EHS teams with audits and reviews focused on real operating conditions in Indian factories and warehouses.',
    ],
    services: [
      {
        title: 'Facility fire safety audits',
        text: 'Structured audits for factories, warehouses and large commercial/industrial buildings covering prevention, detection interfaces and preparedness.',
      },
      {
        title: 'Hydrant & protection system checks',
        text: 'Review of hydrants, hose reels, access around fire points and visible readiness of installed protection infrastructure.',
      },
      {
        title: 'Life-safety & egress review',
        text: 'Exit routes, emergency preparedness observations and high-risk area walkdowns for occupied industrial buildings.',
      },
      {
        title: 'Industrial risk observations',
        text: 'Ventilation, storage practices, hot-work interfaces and other operational factors that elevate fire risk on plant campuses.',
      },
    ],
    process: [
      {
        step: '01',
        title: 'Facility walkthrough',
        text: 'Map building use, occupancy patterns, storage zones and existing fire provisions.',
      },
      {
        step: '02',
        title: 'Gap assessment',
        text: 'Identify practical gaps in protection readiness, access, egress and operational controls.',
      },
      {
        step: '03',
        title: 'Action plan',
        text: 'Prioritise corrective actions so leadership can sequence improvements without disrupting production.',
      },
    ],
    audience: [
      'Factories and process plants',
      'Warehouses and logistics hubs',
      'Multi-building industrial campuses',
      'Large commercial/industrial facilities',
    ],
    outcomes: [
      'Clear view of fire-risk exposure on site',
      'Prioritised improvement roadmap for EHS teams',
      'Better readiness around hydrants and life-safety provisions',
      'Stronger protection of people and production continuity',
    ],
  },
  {
    id: 'compliance',
    path: '/services/compliance',
    index: '03',
    title: 'Compliance',
    navLabel: 'Compliance',
    summary:
      'Statutory inspections and Chartered Engineering certifications for Indian factories, MSMEs, banks and institutions.',
    heroTitle: 'Statutory compliance for Indian factories',
    heroLead:
      'Competent Person inspections, building stability certification, equipment fitness and plant & machinery valuation under one Engineering practice.',
    image: asset('compliance.jpg'),
    detailImage: asset('compliance-detail.jpg'),
    imageAlt: 'Industrial workers in hard hats and high-vis vests on a plant platform',
    detailAlt: 'Two industrial workers in hard hats and high-vis vests on a compliance inspection platform',
    overview: [
      'Factory compliance in Tamil Nadu demands both statutory competence and practical plant knowledge. Delays in certificates and inspections can stall operations, financing and expansions.',
      'IAAN CONSULTANTSS provides a single window for Competent Person inspections, Chartered Engineering certifications and related industrial compliance support.',
    ],
    services: [
      {
        title: 'Competent Person inspections',
        text: 'Statutory inspections under Tamil Nadu Factories Rules with DISH-approved Competent Person capability.',
      },
      {
        title: 'Building stability certification',
        text: 'Factory building stability assessments and certification support for industrial structures.',
      },
      {
        title: 'Equipment fitness certification',
        text: 'Fitness reviews for industrial equipment, machinery installation certificates and related documentation.',
      },
      {
        title: 'Plant & machinery valuation',
        text: 'Valuation support for banks, financial institutions and MSMEs covering plant assets and second-hand machinery.',
      },
    ],
    process: [
      {
        step: '01',
        title: 'Requirement mapping',
        text: 'Confirm statutory need, equipment list, building scope and documentation timelines.',
      },
      {
        step: '02',
        title: 'Inspection & assessment',
        text: 'Execute Competent Person / Chartered Engineering assessments at site with clear technical notes.',
      },
      {
        step: '03',
        title: 'Certification support',
        text: 'Deliver certificates and supporting records aligned to factory, bank or institutional requirements.',
      },
    ],
    audience: [
      'Manufacturing and process industries',
      'MSMEs and expanding factories',
      'Banks and financial institutions',
      'EPC and project owners',
    ],
    outcomes: [
      'Timely statutory inspection coverage',
      'Credible Engineering documentation for regulators and lenders',
      'Reduced compliance bottlenecks for plant operations',
      'One accountable Engineering partner for multiple certificates',
    ],
  },
  {
    id: 'iso',
    path: '/services/iso-audit-certification',
    index: '04',
    title: 'ISO Audit & Certification',
    navLabel: 'ISO',
    summary:
      'Practical ISO assessment, internal audit preparation and certification guidance aligned to Indian industrial operations.',
    heroTitle: 'ISO readiness for industrial operations',
    heroLead:
      'Gap analysis, internal audit preparation and certification support that connects management systems to how Indian plants actually operate.',
    image: asset('iso.jpg'),
    detailImage: asset('iso-detail.jpg'),
    imageAlt: 'ISO audit discussion with Indian professionals in an industrial office',
    detailAlt: 'ISO audit meeting with Indian quality and operations teams',
    overview: [
      'ISO programmes stall when documentation is disconnected from shop-floor reality. We help industrial teams close gaps with practical assessment and audit preparation.',
      'Our approach is built for manufacturing and process environments where evidence, process discipline and operational ownership matter as much as manuals.',
    ],
    services: [
      {
        title: 'Gap analysis & assessment',
        text: 'Structured review of current practices against target ISO management system requirements.',
      },
      {
        title: 'Internal audit preparation',
        text: 'Guidance to prepare teams, evidence trails and corrective-action discipline before certification audits.',
      },
      {
        title: 'Certification support',
        text: 'Hands-on support through documentation readiness and certification journey milestones.',
      },
      {
        title: 'Process documentation guidance',
        text: 'Practical advice so procedures remain usable for operators, supervisors and auditors alike.',
      },
    ],
    process: [
      {
        step: '01',
        title: 'Baseline assessment',
        text: 'Review current system maturity, documentation and operational evidence.',
      },
      {
        step: '02',
        title: 'Close the gaps',
        text: 'Prioritise process, record and responsibility improvements with plant stakeholders.',
      },
      {
        step: '03',
        title: 'Audit readiness',
        text: 'Prepare for internal and certification audits with clear ownership and evidence packs.',
      },
    ],
    audience: [
      'Factories pursuing first-time ISO certification',
      'Plants preparing for surveillance or recertification',
      'Quality and operations leadership teams',
      'Multi-site industrial groups standardising systems',
    ],
    outcomes: [
      'Clear gap visibility before certification pressure',
      'Stronger evidence discipline on the shop floor',
      'Smoother internal and external audit cycles',
      'Management systems that support real operations',
    ],
  },
]

export const getVertical = (id: string) => verticals.find((item) => item.id === id)
