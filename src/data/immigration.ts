export interface ImmigrationService {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  heroDescription: string;
  heroImage?: string;
  sections: {
    heading: string;
    content: string[];
    listItems?: string[];
  }[];
  faqs?: {
    question: string;
    answer: string;
  }[];
}

export const immigrationServices: ImmigrationService[] = [
  {
    slug: "green-card",
    heroImage: "/images/green-card.webp",
    title: "Green Card Applications",
    metaTitle: "Apply for Green Card | NYC Immigration Lawyers | Stillman Legal PC",
    metaDescription:
      "Need to apply for a green card? Our experienced immigration attorneys guide you through the process. Free consultation at Stillman Legal P.C.",
    heroDescription:
      "Have you always thought \"Do I qualify for a green card\"? Many individuals have lived in the United States for years yet remain uncertain about their legal options.",
    sections: [
      {
        heading: "Need to Apply for a Green Card?",
        content: [
          "Have you ever found yourself wondering, \"Do I qualify for a green card?\" but felt unsure where to begin or whether you meet the necessary requirements? You're not alone. Many individuals have lived in the United States for years, contributing to their communities and raising families, yet remain uncertain about their legal options.",
          "If you have children who are U.S. citizens or have established strong ties to the country, you may be eligible for permanent residency -- and it's crucial to explore all your possibilities.",
          "Understanding the green card process can be overwhelming, especially with complex immigration laws and changing policies. That's why it's so important to seek guidance from experienced immigration attorneys who specialize in navigating these legal pathways.",
        ],
      },
      {
        heading: "Why Choose Stillman Legal?",
        content: [
          "At our firm, we have successfully handled numerous cases involving green cards, citizenship, and naturalization. Whether you are just starting your immigration journey or have been waiting for years to take the next step, our team is here to help.",
          "We are 100% committed to protecting the rights of individuals and families seeking legal status in the United States. Our goal is to provide you with clarity, confidence, and a clear path forward.",
          "Don't let uncertainty hold you back from securing your future. Reach out to us today to learn more about your eligibility and take the first step toward obtaining your green card.",
        ],
      },
    ],
  },
  {
    slug: "citizenship",
    heroImage: "/images/citizenship.jpg",
    title: "Citizenship Applications",
    metaTitle: "Apply for U.S. Citizenship | NYC Immigration Lawyers | Stillman Legal PC",
    metaDescription:
      "Need to apply for U.S. citizenship? Our experienced immigration attorneys guide you through naturalization. Free consultation at Stillman Legal P.C.",
    heroDescription:
      "A qualified immigration attorney can help you navigate the naturalization process. Our lawyers have over a decade of experience and understand the processes.",
    sections: [
      {
        heading: "Applying for Citizenship",
        content: [
          "The naturalization process is complex and potentially lengthy, but our lawyers have over a decade of experience and understand the processes. We can work to improve your chances of a successful outcome.",
          "At Stillman Legal, P.C., our firm has handled numerous immigration cases and we have vigorously advocated on behalf of undocumented immigrants.",
        ],
      },
      {
        heading: "Ways To Obtain U.S. Citizenship",
        content: [
          "There are several ways to obtain American citizenship. One is to be born in the United States or a United States territory, or to be born to at least one American citizen parent. A non-citizen can also apply through naturalization. A parent who becomes naturalized can grant American citizenship to any of their children.",
        ],
      },
      {
        heading: "What Are the Requirements?",
        content: [],
        listItems: [
          "Demonstrate written and verbal command of English",
          "Be a resident of the United States with a green card for 5 years",
          "Be at least 18 years of age when filing Form N-400 (Application for Naturalization)",
          "Show that you have good moral character",
          "Be able to provide evidence of maintaining a physical presence in the United States for 30 months",
          "Show knowledge of American history and the U.S. government",
        ],
      },
    ],
  },
  {
    slug: "asylum",
    heroImage: "/images/asylum.webp",
    title: "Asylum Applications",
    metaTitle: "Apply for Asylum | NYC Immigration Lawyers | Stillman Legal PC",
    metaDescription:
      "Need to apply for asylum? If you fear persecution in your home country, our experienced attorneys can help. Free consultation at Stillman Legal P.C.",
    heroDescription:
      "It doesn't matter whether you entered legally or illegally, you may still be protected if you qualify and apply for asylum.",
    sections: [
      {
        heading: "Applying for Asylum",
        content: [
          "Asylum can protect you if you have a legitimate fear of prosecution in your home country. If you are able to demonstrate that you have a credible fear, you may be able to apply and ultimately be afforded this protection.",
        ],
      },
      {
        heading: "Why Hire a Lawyer for Your Asylum Claim?",
        content: [
          "Handling an asylum claim alone can be done but it's never advisable. It can lead to a difficult experience in the system, with judges, forms, and can impact your chance of success negatively.",
          "You traveled thousands of miles to seek asylum and there is obviously a lot on the line, so hiring a competent attorney to help you with the process is crucial!",
          "A good attorney will know how to handle all the paperwork, will explain things so that they are less confusing for you and most importantly, will answer all questions during the process.",
        ],
      },
    ],
    faqs: [
      {
        question: "Who Qualifies for Asylum in the United States?",
        answer:
          "Any alien who arrives in the United States may qualify if they can establish that they are a refugee being persecuted or will likely be persecuted based on religion, race, nationality, political opinion or membership in a social group.",
      },
      {
        question: "How Long Do I Have to File for Asylum?",
        answer: "Individuals have one (1) year from the Date of Arrival into the United States.",
      },
      {
        question: "Can I visit my home country while in the process?",
        answer:
          "You will be able to travel to your home country when your asylum is granted and you have obtained citizenship. If you do it before then, you might inadvertently put yourself at risk of being deported.",
      },
    ],
  },
  {
    slug: "naturalization",
    heroImage: "/images/family-visas.jpeg",
    title: "Family Visas",
    metaTitle: "Apply for Family Visas | NYC Immigration Lawyers | Stillman Legal PC",
    metaDescription:
      "Need a family visa? Our experienced immigration attorneys help families navigate the visa process. Free consultation at Stillman Legal P.C.",
    heroDescription:
      "Family visas allow immigrants to become permanent residents through a family member who is already a resident or citizen of the United States.",
    sections: [
      {
        heading: "Family Visas",
        content: [
          "Your success is our success. We want you to have a seamless experience and receive all the support you need during the immigration process. We will always put your family's needs first.",
        ],
      },
      {
        heading: "Why Choose Us?",
        content: [],
        listItems: [
          "We have the experience, and we personalize every interaction with our clients",
          "Professional guidance all throughout",
          "We are fully invested in protecting your rights as an immigrant",
          "Consistent status of your case",
          "All calls, text messages promptly returned",
          "Virtual access to your lawyer!",
        ],
      },
      {
        heading: "Why You Need a Lawyer",
        content: [
          "Family-based immigration at first glance can seem like an easy process. However, the ever-changing and ever-evolving laws can create obstacles along the way.",
          "Obtaining help from an experienced attorney can help your family avoid mistakes and risk having your petition rejected completely.",
        ],
      },
    ],
    faqs: [
      {
        question: "How long is the wait for a family visa?",
        answer:
          "It depends on your circumstances. First Preference (F-1): 1-5 years. Second Preference (F-2): 1 year for spouses, 3-4 years for adult children. Third Preference (F-3): 9 years average. Fourth Preference (F-4): 7-10 years average.",
      },
    ],
  },
  {
    slug: "daca",
    heroImage: "/images/daca-1.jpg",
    title: "DACA",
    metaTitle: "DACA Applications & Renewals | NYC Immigration Lawyers | Stillman Legal PC",
    metaDescription:
      "Need help with DACA applications or renewals? Our experienced attorneys assist Dreamers. Free consultation at Stillman Legal P.C.",
    heroDescription:
      "The DACA program protects children who came to the United States as undocumented immigrants from being deported.",
    sections: [
      {
        heading: "Deferred Action for Childhood Arrivals (DACA)",
        content: [
          "The program called \"Deferred Action for Childhood Arrivals\" (DACA) was implemented by President Barack Obama to protect children who came to the United States as undocumented immigrants from being deported.",
          "This program expires every two years and has to be renewed. As of today, USCIS is NOT accepting new applications. However, USCIS IS accepting renewals for those who were previously granted this benefit.",
        ],
      },
      {
        heading: "Who Is Eligible to File for Renewal?",
        content: [
          "According to USCIS, if you had DACA and it expired on or after September 5, 2016, you are eligible to renew. In addition:",
        ],
        listItems: [
          "You must have resided in the United States since you submitted your most recent DACA application",
          "There are no convictions or felonies or serious misdemeanors in your record",
          "You must not have left the United States on or after August 15, 2012, without advanced parole",
        ],
      },
    ],
    faqs: [
      {
        question: "If my DACA application is denied, will I be deported?",
        answer:
          "No. Your information is not shared with ICE or U.S. Customs and Border Protection for purposes of deportation. Please note that USCIS is not accepting new applications, so beware of immigration scams.",
      },
    ],
  },
  {
    slug: "waivers",
    heroImage: "/images/waivers.jpg",
    title: "Immigration Waivers",
    metaTitle: "Immigration Waivers | NYC Immigration Lawyers | Stillman Legal PC",
    metaDescription:
      "Need an immigration waiver? Our experienced attorneys have a high approval rate for provisional waivers. Free consultation at Stillman Legal P.C.",
    heroDescription:
      "If you or your family member entered the United States without a visa, you may be subject to a 3 or 10 year bar. A provisional waiver may help.",
    sections: [
      {
        heading: "Applying for Waivers",
        content: [
          "If you or your family member entered the United States without a visa, you may be subject to a 3 or 10 year bar and therefore inadmissible to the United States. This is the case even if you are married to a US citizen or Lawful Permanent Resident.",
          "In order to overcome this inadmissibility and apply for lawful permanent status or a \"green card\" you must file a provisional extreme hardship waiver.",
        ],
      },
      {
        heading: "How the Provisional Waiver Works",
        content: [
          "The provisional waiver allows immediate family members of U.S. citizens or Lawful Permanent Residents who entered the U.S. without inspection to apply for I-601A provisional waivers in the United States.",
          "Once approved by USCIS, they will be eligible to attend appointments for immigrant visas in their countries of origin. The provisional waiver allows families to avoid separation for months or even years while their waivers are pending.",
          "These family members will obtain their waivers before departing the U.S., will be interviewed abroad, and will then return to their families in the U.S. within just a few days or weeks.",
        ],
      },
      {
        heading: "Our Track Record",
        content: [
          "Our office has a unique approach to preparing provisional waivers, which has resulted in a high approval rate from USCIS. Clients who were told by others that their hardship was not extreme or significant enough were able to successfully obtain their green card with the assistance of our firm.",
        ],
      },
    ],
  },
  {
    slug: "lgbtq-marriage",
    heroImage: "/images/lgbtq-1.webp",
    title: "LGBTQ+ Marriage & Fianc\u00e9(e) Immigration",
    metaTitle: "LGBTQ+ Marriage & Immigration | NYC Immigration Lawyers | Stillman Legal PC",
    metaDescription:
      "LGBTQ+ immigration attorneys in NYC. Same-sex couples enjoy the same immigration rights. Free consultation at Stillman Legal P.C.",
    heroDescription:
      "Since 2014, lesbian, gay, bisexual, and trans immigrants enjoy the same rights as opposite-gender couples!",
    sections: [
      {
        heading: "LGBTQ+ Marriage & Fianc\u00e9(e) Immigration",
        content: [
          "LGBT couples are able to petition for their spouse to become legal as well as their children. LGBTQ individuals are protected from discrimination in the process of applying for their green cards.",
          "Spouses of U.S. citizens and residents are eligible to apply for a visa based on their family connection, so now same-sex spouses have equal opportunity to apply for an immigrant visa.",
          "If you cannot show a connection because you are not in a jurisdiction that recognizes same-sex marriage, then a U.S. citizen may apply for a temporary fianc\u00e9(e) visa to bring a partner to the U.S. so they can be legally married.",
        ],
      },
      {
        heading: "Why Work with an Attorney?",
        content: [
          "Applicants often face significant delays before their applications are considered. To avoid delays and mistakes that can cause an application to be rejected, applicants choose to work with an experienced immigration lawyer who understands the unique issues that may arise during the processing of LGBTQ applications.",
          "Immigration law can be quite complex, and mistakes can risk opportunities to do it once and do it right! For help protecting your rights and your future, call us for a consultation.",
        ],
      },
    ],
  },
];

export function getImmigrationService(slug: string): ImmigrationService | undefined {
  return immigrationServices.find((is) => is.slug === slug);
}
