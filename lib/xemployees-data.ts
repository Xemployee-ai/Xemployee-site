export type XemployeeStatus = "battle-tested" | "private-beta" | "coming-soon"

export interface Xemployee {
  id: string
  name: string
  tagline: string
  replaces: string
  whatItDoes: string[]
  runsOn: string
  status: XemployeeStatus
  funnyLine?: string
  deployUrl?: string
  specUrl?: string
  comingSoon?: boolean
}

export const xemployees: Xemployee[] = [
  {
    id: "raptor-1",
    name: "Raptor-1",
    tagline: "Outbound, without the burnout.",
    replaces: "SDRs / outbound reps",
    whatItDoes: [
      "Rips through lead lists and enrichment.",
      "Writes and sends cold emails 24/7.",
      "Handles replies until a human *must* step in.",
    ],
    runsOn: "Frontier models, your CRM, and email stack.",
    status: "battle-tested",
    funnyLine: "Your human reps will hate its numbers.",
    deployUrl: "#",
    specUrl: "#",
    comingSoon: false,
  },
]

export const comingSoonXemployees: Xemployee[] = [
  {
    id: "sentinel-1",
    name: "Sentinel-1",
    tagline: "Level 1 support, zero patience required.",
    replaces: "L1 Support / Help Desk",
    whatItDoes: [
      "Answers common questions instantly.",
      "Escalates complex issues to humans.",
      "Learns from every interaction.",
    ],
    runsOn: "Frontier models + your knowledge base + ticketing system.",
    status: "coming-soon",
    comingSoon: true,
  },
  {
    id: "scribe-1",
    name: "Scribe-1",
    tagline: "Forms and back office, automated.",
    replaces: "Data entry / Admin staff",
    whatItDoes: [
      "Fills forms from unstructured data.",
      "Updates spreadsheets and databases.",
      "Handles repetitive admin workflows.",
    ],
    runsOn: "Frontier models + your tools + automation platforms.",
    status: "coming-soon",
    comingSoon: true,
  },
]

/**
 * Get an Xemployee by ID from both active and coming soon arrays
 */
export function getXemployeeById(id: string): Xemployee | undefined {
  const allXemployees = [...xemployees, ...comingSoonXemployees]
  return allXemployees.find((xe) => xe.id === id)
}
