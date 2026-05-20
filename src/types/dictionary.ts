export interface Dictionary {
  navigation: {
    home: string
    localAi: string
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
    address: string
    phone: string
    localAi: {
      badge: string
      title: string
      subtitle: string
      primaryCta: string
      secondaryCta: string
      lineCta: string
      lineReady: string
      proofLabel: string
      offersTitle: string
      offersSubtitle: string
      workflowTitle: string
      workflowSubtitle: string
      channelsTitle: string
      channelsSubtitle: string
      pricingTitle: string
      pricingSubtitle: string
      contactTitle: string
      contactSubtitle: string
      demoAnchorLabel: string
      pricingAnchorLabel: string
    }
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
