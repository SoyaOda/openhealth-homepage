export interface Dictionary {
  navigation: {
    home: string
    privacyPolicy: string
    switchToEnglish?: string
    switchToJapanese?: string
  }
  company: {
    name: string
    nameShort: string
    description: string
    business: string
    businessDescription: string
    mission: string
    missionDescription: string
  }
  footer: {
    copyright: string
  }
  privacyPolicy: {
    title: string
    intro: string
    article1: {
      title: string
      content: string
    }
    article2: {
      title: string
      content: string
    }
    article3: {
      title: string
      content: string
      purposes: string[]
    }
    article10: {
      title: string
      content: string
    }
    contact: string
    email: string
  }
}