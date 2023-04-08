export interface Specialists {
  id: number
  name: string
  estimation: number
  photo: string // HTMLImageElement  or  File
  reviewsCl: {
    id: number
    text: string
    estimation: number
  }
  appointmentsCl: {
    id: number
    date: string
    status: boolean
    psyId: number
  }
}
