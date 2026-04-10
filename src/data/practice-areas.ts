export type LayoutVariant = "standard" | "sidebar-stats" | "faq-focus" | "evidence-list" | "full-width" | "two-column";

export interface PracticeArea {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroDescription: string;
  heroImage?: string;
  layout: LayoutVariant;
  sections: {
    heading: string;
    content: string[];
    listItems?: string[];
  }[];
  faqs?: {
    question: string;
    answer: string;
  }[];
  stats?: {
    value: string;
    label: string;
  }[];
  calloutText?: string;
}

export const practiceAreas: PracticeArea[] = [
  {
    slug: "wage-manipulation",
    title: "Wage Manipulation",
    heroImage: "/images/nyc-skyline.jpg",
    metaTitle: "NYC Wage Theft & Wage Manipulation Lawyers | Overtime Pay Attorneys | Stillman Legal PC",
    metaDescription:
      "Is your employer not paying you your due wages for the work you have done? It is illegal for employers not to pay you your earned pay and overtime. Speak with wage theft and wage manipulation attorneys at Stillman Legal PC.",
    heroTitle: "Wage Manipulation is Illegal in New York State",
    heroDescription:
      "You cannot afford to be underpaid by your employer. Your family depends on your income. If your employer cheats you, get the money you earn.",
    layout: "sidebar-stats",
    stats: [
      { value: "80%", label: "Of immigrant labor abuses go unreported" },
      { value: "77%", label: "Of undocumented workers earn below minimum wage" },
      { value: "65%", label: "Of employers never pay earned overtime" },
    ],
    sections: [
      {
        heading: "Wage Manipulation in New York State",
        content: [
          "Have you been the victim of Wage Manipulation at work in New York City or New York State?",
          "It is increasingly common for employers to save on wage expenses by manipulating their timetable data. As a result, you might find that you are not fully paid for your work hours. If that's the case, you are also entitled to additional compensation under state and federal law. In addition, some claims can be substantial depending on how long the wage manipulation lasted.",
          "By law, employers are obliged to pay workers hourly wages for every minute they work. So, if your employer cheats you, get the money you earn. Contact Stillman Legal today!",
        ],
      },
    ],
    calloutText: "DON'T BE AN EMPLOYEE STATISTIC. CALL US TODAY AT 212-832-1000. GET A FREE CASE EVALUATION.",
  },
  {
    slug: "racial-discrimination",
    title: "Racial Discrimination",
    heroImage: "/images/racial-discrimination.jpg",
    metaTitle: "New York City Race Discrimination Lawyers | Racial Discrimination Attorneys | Stillman Legal PC",
    metaDescription:
      "Experienced NYC racial discrimination attorneys. If you've faced racial discrimination at work, Stillman Legal P.C. will fight for justice. Free consultation.",
    heroTitle: "Racial Discrimination is Illegal in New York State",
    heroDescription:
      "Have you been discriminated against at work because of your Race in New York City or in the State of New York?",
    layout: "evidence-list",
    sections: [
      {
        heading: "Racial Discrimination in New York State",
        content: [
          "Racial discrimination is adverse treatment or harassment of an employee or job applicant because of their race or skin color.",
          "Race discrimination in the workplace involves treating an individual job applicant or employee differently because he, she or they are of a certain race, or because the individual has personal characteristics that are associated with a racial background (for example race-linked diseases, cultural characteristics linked to race, or physical characteristics associated with race, such as skin complexion, hair texture or facial features).",
          "In workplaces in New York City, it is actionable when an employer, employee, supervisor, or business partner treats differently or harasses an employee or applicant based on race. Racial discrimination occurs between people of the same race and people of different races.",
        ],
      },
      {
        heading: "Do I Have A Racial Discrimination Claim?",
        content: [
          "To prove a race discrimination case, the employee must show that the employer took an \"adverse employment action\" against the employee which was motivated by discrimination. Examples of this include:",
        ],
        listItems: [
          "Firing, wrongful dismissal, or constructive discharge",
          "Demotion, transfer, or unfavorable job assignment",
          "Reduction in pay",
          "Failure to interview or hire",
          "Denying promotion or advancement",
          "Any other employment decision that materially affects the terms and conditions of employment",
          "Unfair Treatment",
          "Indirect Harassment",
          "Racist Jokes (whether directed to an individual or not)",
          "Unequal Pay",
        ],
      },
      {
        heading: "Special New York Rules",
        content: [
          "The time limit is extended in state cases. The State of New York allows you to file a complaint with the New York Department of Human Rights (DHR) up to one year after the last incident. In New York City, you can file your lawsuit with the New York City Commission on Human Rights (CHR).",
          "Cases of racial discrimination in New York City can take a few months to a year or two. Once you receive the right to sue, you have three months to file a federal or state court complaint.",
          "Compensation is based on company gross profits and the discrimination action's seriousness, and whether the company has acted similarly in the past.",
        ],
      },
      {
        heading: "What Constitutes Harassment?",
        content: [
          "If you are a victim of racial discrimination at work, you can help yourself by taking steps to create a record. Write down the incident, who was involved, where it happened, and who the witnesses were. The following types of verbal or physical conduct can constitute harassment:",
        ],
        listItems: [
          "Offensive jokes, slurs, epithets, or name calling based on race or color",
          "Verbal or written mockery, insults or put-downs based on race or color",
          "The presence of offensive objects, pictures, or graffiti in the workplace",
          "Physical assaults, or threats of assault because of one's race or color",
        ],
      },
    ],
  },
  {
    slug: "disability-discrimination",
    title: "Disability Discrimination",
    heroImage: "/images/disability-discrimination.jpg",
    metaTitle: "New York City Disability Discrimination Lawyers | Stillman Legal PC",
    metaDescription:
      "NYC disability discrimination attorneys protecting employee rights. If your employer discriminated against you due to a disability, we can help. Free consultation.",
    heroTitle: "Disability Discrimination is Illegal in New York State",
    heroDescription:
      "Have you been discriminated against at work because of a Disability in New York City or in the State of New York?",
    layout: "two-column",
    sections: [
      {
        heading: "Disability Discrimination in New York State",
        content: [
          "If you have been denied employment, accommodation, or promotion at work because of a disability, you are not alone. Unfortunately, it's an everyday occurrence in many workplaces.",
          "A disability should never prevent you from occupying a position for which you are qualified. All working men and women, regardless of their disability, have the right to get a good job based on their skills and abilities.",
        ],
      },
      {
        heading: "Americans with Disabilities Act (ADA)",
        content: [
          "Under the Americans with Disabilities Act (ADA) and the New York Human Rights Act, employers may not discriminate against a qualified person with a disability. In addition, employers must provide adequate accommodation for disabled people.",
          "If a person is considered disabled under the ADA, they must fulfill one of three legal requirements:",
        ],
        listItems: [
          "A person must have a physical or mental impairment that restricts one or more essential life activities.",
          "The person must put on record that they are considered disabled.",
          "If the person is disabled within the meaning of the law, their disability must affect an important activity in life.",
        ],
      },
      {
        heading: "Important Life Activities",
        content: [
          "Important life activities include tasks such as self-care, seeing, hearing, walking, standing, sleeping, eating, speaking, breathing, reading, learning, concentrating, thinking, communicating, lifting, and working.",
          "Functions include immune system, cell growth, digestion, neurological, brain, respiratory system, circulation, endocrine, and reproductive functions.",
          "The duration of the impairment will be a consideration to determine whether it is significant. If the impairment is expected to last for a short time or be less severe than average, a person may not qualify as disabled.",
        ],
      },
    ],
  },
  {
    slug: "pregnancy-discrimination",
    title: "Pregnancy Discrimination",
    heroImage: "/images/pregnancy-discrimination.jpg",
    metaTitle: "New York City Pregnancy Discrimination Lawyers | Stillman Legal PC",
    metaDescription:
      "Experienced pregnancy discrimination attorneys in NYC. If you've been discriminated against due to pregnancy, contact Stillman Legal P.C. for a free consultation.",
    heroTitle: "Pregnancy Discrimination is Illegal in New York State",
    heroDescription:
      "Have you been a victim of Pregnancy Discrimination at work in New York City or New York State?",
    layout: "faq-focus",
    sections: [
      {
        heading: "Pregnancy Discrimination in New York State",
        content: [
          "Pregnancy discrimination happens when an employee or applicant is unfairly treated or harassed because she is pregnant. Employees may not be terminated, demoted, reassigned, or otherwise harassed because they are pregnant or because of an illness related to their pregnancy.",
          "Federal and New York laws prohibit this kind of discrimination in the workplace and pregnant women are a protected class.",
          "Under federal and local family laws, mothers and fathers have the right to take up to 10 weeks of paid leave from work to be with their new baby. You can use the program up to 12 months after birth.",
        ],
      },
      {
        heading: "Special New York Rules",
        content: [
          "New York City has several laws that protect workers and applicants from pregnancy discrimination. The New York City Human Rights Law (NYC HRL) protects women from discrimination because of pregnancy if they are currently pregnant, planning a pregnancy, and work for an employer with 15 or more employees.",
          "In addition, the Pregnancy Workers Fairness Act (PWFA) protects women from pregnancy discrimination in workplaces with four or more employees.",
        ],
      },
    ],
    faqs: [
      {
        question: "What forms can pregnancy discrimination take?",
        answer:
          "Pregnancy discrimination in New York City can take many forms including unequal treatment, refusal of promotions, insistence on medical leave, job filled while on leave, and refusal of workplace accommodation.",
      },
      {
        question: "What should I do if I'm being discriminated against?",
        answer:
          "Document the incident, who was involved, when the incident occurred, and what happened. If you are still working, do not terminate your job without consulting your lawyer. Instead, decide whether to take legal action against your employer.",
      },
      {
        question: "How long will my case take?",
        answer:
          "The good news is that a lawsuit for discrimination against pregnant women in New York City won't take that long to settle. Contact an experienced lawyer for pregnancy discrimination to evaluate your specific situation.",
      },
    ],
  },
  {
    slug: "age-discrimination",
    title: "Age Discrimination",
    heroImage: "/images/age-discrimination.jpg",
    metaTitle: "New York City Age Discrimination Lawyers | Stillman Legal PC",
    metaDescription:
      "NYC age discrimination attorneys fighting for workers over 40. If you've faced age-based discrimination, Stillman Legal P.C. offers free consultations.",
    heroTitle: "Age Discrimination is Illegal in New York Workplaces",
    heroDescription:
      "Have you been a victim of Age Discrimination at work in New York City or in the State of New York? Ageism is ubiquitous and there are certain industries that are notorious for favoring youth over experience!",
    layout: "full-width",
    sections: [
      {
        heading: "What To Do If You've Been Discriminated Against Because Of Your Age",
        content: [
          "Knowing your rights is a very good start! New York and Federal Law prohibits employers from discriminating against workers over 40. The Federal law, also known as the Age Discrimination in Employment Act (or \"ADEA\") makes it unlawful for an employer with 20 or more employees to use age as a negative factor in hiring, promotion, or any other term or condition of employment.",
        ],
      },
      {
        heading: "How Do You Prove Age Discrimination?",
        content: [
          "The U.S. Supreme Court has made proving age discrimination under the ADEA extremely challenging. In a 2009 decision, the Supreme Court held that it is not enough for an employee claiming age discrimination to show that bias was the \"motivating factor\" for the adverse action at work. Instead, the employer must prove that age was the only factor in the employment decision.",
          "Age bias can be proved through anecdotal evidence (for example, comments) as well as through statistics (for example, data showing that older workers are denied promotions or laid off at disproportionate rates), or a combination of both.",
          "In age discrimination claims, the key evidence of discrimination will be in the company's possession. A successful age discrimination suit requires skilled counsel who can obtain the evidence from the company while in court mandated discovery.",
        ],
      },
      {
        heading: "What About Damages?",
        content: [
          "Damages for age discrimination are also limited under federal law. Emotional distress damages and punitive damages are not possible. However, an employee who proves discrimination in violation of federal law is entitled to an award of \"liquidated damages\" equal to the lost wages she recovers.",
          "For example, if a victim of age discrimination is out of work for a year and loses $300,000 due to an unlawful termination, they can recover $600,000 from their former employer should they prevail in their claim.",
        ],
      },
    ],
  },
  {
    slug: "gender-sex-discrimination",
    title: "Gender & Sex Discrimination",
    heroImage: "/images/gender-discrimination.jpg",
    metaTitle: "New York City Gender Discrimination Attorney | Sex Discrimination Lawyer | Stillman Legal PC",
    metaDescription:
      "NYC sexual harassment and gender discrimination attorneys. If you've experienced workplace harassment or sex discrimination, contact Stillman Legal P.C.",
    heroTitle: "Gender Discrimination is Illegal in New York State",
    heroDescription:
      "Have you been discriminated against at work because of your Gender or Sex in New York City or in the State of New York?",
    layout: "evidence-list",
    sections: [
      {
        heading: "Gender Discrimination in New York State",
        content: [
          "It's unfortunate that even with all the social reform and progress of the past few decades, the glass ceiling is a fact that exists within many companies in New York and the United States.",
          "Companies continue to pay female employees less than male employees for the same position, promote women less frequently than men, and create work environments that are generally hostile to women.",
          "Gender discrimination or sex discrimination is illegal! Period. It is against the law to:",
        ],
        listItems: [
          "Treat women differently from men in the workplace",
          "Pay male employees more than female employees for similar work",
          "Unfairly promote male employees ahead of female employees who are similarly qualified",
          "Have policies that have a disparate impact on male and female employees",
          "Discriminate against pregnant women in the workplace",
        ],
      },
      {
        heading: "Your Rights Against Retaliation",
        content: [
          "Your employer cannot take adverse actions or retaliate against you because you report this kind of discrimination. If you were terminated or retaliated against because you filed a complaint or complained about gender discrimination or supported another person's claim, you may have a separate legal action against your employer.",
          "We represent both men and women!",
        ],
      },
    ],
  },
  {
    slug: "sexual-orientation-discrimination",
    title: "Sexual Orientation Discrimination",
    heroImage: "/images/sexual-orientation-discrimination.jpg",
    metaTitle: "New York City Sexual Orientation Discrimination Lawyers | Gay, LGBTQ+ Discrimination Attorneys | Stillman Legal PC",
    metaDescription:
      "NYC attorneys fighting sexual orientation discrimination in the workplace. Stillman Legal P.C. protects LGBTQ+ employee rights. Free consultation.",
    heroTitle: "Sexual Orientation Discrimination is Illegal in New York State",
    heroDescription:
      "Have you been a victim of Sexual Orientation Discrimination at work in New York City or New York State?",
    layout: "standard",
    sections: [
      {
        heading: "Sexual Orientation Discrimination in New York State",
        content: [
          "Discrimination based on sexual orientation can occur in New York City workplaces, regardless of whether you are gay, straight, bisexual, or trans. Such activities are prohibited under federal and state laws.",
          "Regardless of your sexuality, you have the right to speak about your sexual orientation publicly without retaliation or discrimination at the workplace. As an employee or applicant, your sexual orientation should not play a role in employment decisions.",
        ],
      },
      {
        heading: "Laws For Sexual Orientation Discrimination",
        content: [
          "In New York City, both local and federal laws exist that protect employees' sexual orientation. Under Title VII of the 1964 Civil Rights Act, sexual orientation is protected from all forms of discrimination based on sex. It prohibits employers with 15 or more employees from discriminating against you based on sexual orientation.",
          "Federal employees are protected under the 1978 Civil Service Reform Act and the Executive Order 13087 of 1998. The New York Sexual Orientation Non-Discrimination Act (SONDA) prohibits discrimination against employees who are part of the LGBTQ community.",
        ],
      },
      {
        heading: "Types of Evidence",
        content: [
          "If you are a victim of sexual orientation discrimination in the workplace, three types of evidence can help prove your case: direct, disparate, and policy.",
          "Direct evidence must be oral or written and directly addressed to you. Disparate evidence is the most common form -- you must establish a link between unfair treatment and your sexual orientation. Policy evidence is any policy that leads to discrimination.",
        ],
      },
      {
        heading: "Examples of Workplace Discrimination",
        content: [],
        listItems: [
          "You are demoted because your supervisor found out you are gay",
          "Your boss refuses to put you on a project because of your sexual orientation",
          "Your manager fires you because you complained about your treatment",
          "Your boss refuses to offer your same-sex spouse benefits entitled to heterosexual couples",
          "Your boss outs you even though you asked for privacy",
          "Your co-worker keeps sending offensive emails with gay jokes",
          "A co-worker keeps asking you on a date even though you have repeatedly told them NO",
        ],
      },
      {
        heading: "Filing a Claim",
        content: [
          "If you want to file a claim under Title VII, you can submit it to the Equal Employment Opportunities Commission (EEOC). The EEOC will investigate before giving you the right to sue by letter. After you receive the letter, you have 80 days to file a complaint with the Federal Court.",
          "You have a year from the date of the last discrimination incident in New York state law. You can file a lawsuit with the New York State Human Rights Division or bring the complaint to state court within three years from the date of the discrimination incident.",
          "You have the right to live as you wish. No employer should treat or harass you differently because of your sexual orientation.",
        ],
      },
    ],
  },
  {
    slug: "religious-discrimination",
    title: "Religious Discrimination",
    heroImage: "/images/religious-discrimination.jpg",
    metaTitle: "New York City Religious Discrimination Lawyers | Stillman Legal PC",
    metaDescription:
      "NYC religious discrimination attorneys. If your employer discriminated against you based on religion, Stillman Legal P.C. can help. Free consultation.",
    heroTitle: "Religious Discrimination is Illegal in New York State",
    heroDescription:
      "Have you been the victim of Religious Discrimination at work in New York City or New York State?",
    layout: "two-column",
    sections: [
      {
        heading: "Religious Discrimination in New York State",
        content: [
          "Religious discrimination occurs when an employer treats an employee or applicant differently because of their religious beliefs or practice.",
          "It is illegal for an employer, employee, supervisor, or business partner to treat a worker or applicant differently based on their religious beliefs in New York City. In most cases, if an employee demands prayer breaks, wears specific religious clothing, or takes leave for religious events, the employer must make reasonable efforts to accommodate the employee.",
        ],
      },
      {
        heading: "Federal Law On Religious Discrimination",
        content: [
          "Under Federal Law, it is unlawful for an employer to bully a person because of their religion. Harassment includes insulting remarks about people's religious beliefs and practices.",
          "When it becomes frequent and severe, religious discrimination can create a hostile work environment and lead to adverse employment decisions such as dismissal or demotion.",
          "The law requires most employers to provide adequate accommodation for employee religious practices unless doing so would cause severe business difficulties.",
        ],
      },
      {
        heading: "Religious Discrimination in New York City",
        content: [
          "New York City prohibits most employers with four or more employees from discriminating against an employee or applicant based on religion.",
          "Religious discrimination at a New York City workplace can take different forms:",
        ],
        listItems: [
          "Unlawful Dismissal",
          "Harassment",
          "Hostile Work Environment",
          "Denial of Rights",
        ],
      },
    ],
  },
  {
    slug: "retaliation-discrimination",
    title: "Retaliation",
    heroImage: "/images/retaliation-discrimination.jpg",
    metaTitle: "New York City Retaliation Discrimination Lawyers | Whistleblower Attorneys | Stillman Legal PC",
    metaDescription:
      "NYC retaliation attorneys. If your employer retaliated against you for reporting discrimination or violations, Stillman Legal P.C. will fight for you.",
    heroTitle: "Retaliation Discrimination is Illegal in New York State",
    heroDescription:
      "Have you been the victim of Retaliation Discrimination at work in New York City or New York State?",
    layout: "full-width",
    sections: [
      {
        heading: "Retaliation Discrimination in New York State",
        content: [
          "State and Federal Laws forbid an employer from retaliating against an employee because that employee filed a report or claim against his or her boss or employer.",
          "Say for example, an employee files a sexual harassment claim against their employer -- the employer might terminate the employee on the spot as punishment.",
          "The good news is that New York Laws and Federal Laws are in place to protect an employee's position and career, should they need to file a claim that might upset the employer.",
        ],
      },
      {
        heading: "Common Retaliation Tactics",
        content: [
          "At Stillman Legal, we know that employers have been known to punish an employee for filing a sexual harassment claim, which may have injured that employer's reputation or pride.",
          "Employers might also try to prevent the employee from filing a complaint by terminating the employee before they get to file.",
          "Another popular retaliation tactic is for an employer to demote or diminish wages for an employee who returns from disability or family leave. All of these actions count as retaliation and are not allowed under the law.",
        ],
      },
    ],
  },
  {
    slug: "hair-discrimination",
    title: "Hair Discrimination",
    heroImage: "/images/hair-discrimination.jpg",
    metaTitle: "New York City Hair Discrimination Lawyers | Stillman Legal PC",
    metaDescription:
      "NYC hair discrimination attorneys. New York City law protects your right to wear natural hairstyles at work. Free consultation with Stillman Legal P.C.",
    heroTitle: "Hair Discrimination is Illegal in New York City",
    heroDescription:
      "Have you been a victim of Hair Discrimination at work in New York City?",
    layout: "faq-focus",
    sections: [
      {
        heading: "Hair Discrimination in New York City",
        content: [
          "Has this happened to you? You lost your job because your boss doesn't like your hair. You have been denied a promotion or advancement because your hair doesn't look like someone else's. Your employer's hair policy makes you violate your heritage or religion. Your boss calls your hair unprofessional.",
          "In New York City, there's good news for you. A first-of-its-kind law in the United States prohibits employers, government institutions, and law enforcement agencies from adopting discriminatory measures, ordering hair manipulation, or adopting discriminatory actions based on hairstyles.",
          "The New York City Human Rights Commission has issued guidelines to protect hair and hairstyles. The directives are directed at racial discrimination and state that hair discrimination is based on characteristics and cultural practices associated with Black culture.",
        ],
      },
    ],
    faqs: [
      {
        question: "What hairstyles are protected?",
        answer:
          "Your right to maintain natural hair, hairstyles such as locks, cornrows, twists, braids, fades, and afros, and to keep hair in a natural and untrimmed state is protected. The most protected communities are those with religious and cultural ties to uncut hair: Native Americans, Sikhs, Muslims, Jews, and Rastafarians.",
      },
      {
        question: "What should I do if I face hair discrimination?",
        answer:
          "Our experienced attorneys at Stillman Legal, P.C., have years of experience handling workplace discrimination claims and employee rights claims. We aggressively represent people who have been discriminated against. Contact us for a free consultation.",
      },
    ],
  },
  {
    slug: "nationality-discrimination",
    title: "Nationality Discrimination",
    heroImage: "/images/nationality-discrimination.jpg",
    metaTitle: "New York City Nationality Discrimination Attorneys | National Origin Discrimination Lawyers | Stillman Legal PC",
    metaDescription:
      "NYC national origin discrimination attorneys. If you've been discriminated against based on nationality, contact Stillman Legal P.C. for a free consultation.",
    heroTitle: "Nationality Discrimination is Illegal in New York State",
    heroDescription:
      "Have you been discriminated against based on your country of nationality at work in New York City or New York State?",
    layout: "sidebar-stats",
    sections: [
      {
        heading: "Nationality Discrimination in New York State",
        content: [
          "National origin discrimination happens when an employee is treated differently because they are from a particular country, or have personal characteristics associated with a particular region (for example ethnicity, accent, or physical appearance).",
          "National origin discrimination is a violation of both Federal and New York Laws. All these laws make it illegal to discriminate someone on the basis of their national origin.",
        ],
      },
      {
        heading: "Language Discrimination",
        content: [
          "While employers may have legitimate business reasons to enforce language requirements in very limited circumstances, these requirements should be closely scrutinized.",
          "An employment decision based on language fluency or accent is deemed legitimate only if an employer can provide evidence that the effective use of English is necessary to perform job duties and an individual's fluency or accent really interferes with their ability to communicate.",
          "It would be unlawful to implement an \"English-only\" policy to avoid having to listen to others speak in foreign languages, to generate a reason for terminating someone who is not a native English speaker, or to create a hostile work environment for non-English speakers.",
        ],
      },
      {
        heading: "Who Is Liable?",
        content: [
          "Under New York Law, when a manager or supervisor engages in national origin discrimination, the employer itself is liable. Where a co-worker engages in national origin harassment, the employer is likewise liable if it knew or should have known about the instances of discrimination and failed to take appropriate corrective action.",
          "Employers are liable for harassment by their customers or clients if they know or should have known about the harassment and fail to act.",
        ],
      },
    ],
  },
  {
    slug: "workplace-disability-accommodation",
    title: "Workplace Disability Accommodation",
    heroImage: "/images/workplace-accommodation.jpg",
    metaTitle: "New York City Workplace Disability Accommodation Lawyers | Stillman Legal PC",
    metaDescription:
      "NYC workplace disability accommodation attorneys. If your employer denied reasonable accommodations, Stillman Legal P.C. can help. Free consultation.",
    heroTitle: "Workplace Disability Accommodation is the Law in New York State",
    heroDescription:
      "Have you been denied Workplace Disability Accommodations at work in New York City or New York State?",
    layout: "standard",
    sections: [
      {
        heading: "Workplace Disability Accommodation in New York State",
        content: [
          "Disabled workers enjoy the same benefits and privileges as other workers. As long as the accommodation does not entail undue hardship, employers must provide adequate accommodation for disabled workers.",
          "According to the ADA, adequate accommodation is any modification or adjustment that enables a qualified employee to carry out his or her work. The standard and definition also pertain to job applicants.",
          "Although we have come a long way as a society in creating safe and accessible jobs for workers with disabilities, illegal and discriminatory employment practices are still widespread.",
        ],
      },
      {
        heading: "Americans with Disabilities Act",
        content: [
          "Employers must provide adequate accommodation for disabled workers. The Americans with Disabilities Act and New York Human Rights Act provide that discrimination occurs when an employer does not treat a qualified person fairly because of a disability or perceived disability.",
          "Federal and state laws prohibit employers from firing an employee because of their disability. The ADA sets a standard for when an employer can dismiss an employee because of a disability, as in cases where the disability impairs an essential work function.",
          "This protection also extends to asking for help: employers must not discriminate against a disabled person who requests adequate statutory leave or accommodation.",
        ],
      },
      {
        heading: "Get Help Now",
        content: [
          "Disabilities should never hinder your ability to succeed in the professional world. If you feel you have been the victim of discrimination in the workplace, sexual harassment, or a violation of your employment rights, call us for free advice to discuss your possible claim.",
          "Our lawyers are at your disposal to review your claim, prepare a solid case and recover the damages and justice you deserve!",
        ],
      },
    ],
  },
];

export function getPracticeArea(slug: string): PracticeArea | undefined {
  return practiceAreas.find((pa) => pa.slug === slug);
}
