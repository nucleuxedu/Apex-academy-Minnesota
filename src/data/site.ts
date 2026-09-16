export const SITE = {
  name: "Minnesota Preparatory Academy",
  shortName: "MPA",
  tagline: "Empowerment in Education",
  description:
    "Minnesota Preparatory Academy is a multicultural National Preparatory High School created to address the opportunity gaps by not only developing innovative programs for young men & women of color in underserved communities in Minnesota and across the country but also to bring together hands on, grass roots programs based in education, athletics, trades and the arts. These interventions focus on building core life and leadership skills through the use of education, athletics, trades and the arts.",
  address: "1115 Greenbrier Ave St Paul, MN 55106",
  phone: "651-468-8024",
  phoneHref: "tel:651-468-8024",
  emails: {
    contact: "info@minnesotaprepacademy.org",
    inquiry: "info@mnprepacademy.com",
  },
  donationUrl: "https://square.link/u/BU2r9ax8?src=sheet",
  termsUrl: "https://ashanillc.wixsite.com/mysite-1/terms-of-use",
  privacyUrl: "https://ashanillc.wixsite.com/mysite-1/privacy-policy",
  images: {
    logo: "https://static.wixstatic.com/media/2e39a0_11e16c8f070d4fb3939910befc407b05~mv2.png",
    mark: "https://static.wixstatic.com/media/2e39a0_4c1826bba58f41a889c808d7f1bd43be~mv2.png",
    contact:
      "https://static.wixstatic.com/media/2e39a0_a2a79cc879114014a970f80d14f98c8b~mv2.jpg",
    support:
      "https://static.wixstatic.com/media/2e39a0_620f62913e6d4845bbbdb9c293f3d2f8~mv2.png",
  },
  social: [
    { label: "Facebook", href: "https://www.facebook.com/wix" },
    { label: "Twitter", href: "https://www.twitter.com/wix" },
    { label: "YouTube", href: "https://www.youtube.com/user/Wix" },
    { label: "Instagram", href: "https://instagram.com/wix/" },
  ],
} as const;

export type NavItem = {
  label: string;
  href: string;
  external?: boolean;
};

export const NAV_ITEMS: NavItem[] = [
  { label: "About", href: "/about" },
  { label: "Academics", href: "/academics" },
  { label: "Tuition and Fees", href: "/tuition-and-fees" },
  { label: "Admissions", href: "/admissions" },
  {
    label: "Donation",
    href: SITE.donationUrl,
    external: true,
  },
  { label: "Application Inquiry", href: "/application-inquiry" },
  { label: "Support Us", href: "/support-us" },
  { label: "Contact", href: "/contact" },
  { label: "File Share", href: "/file-share" },
];

export const QUICK_LINKS = [
  { label: "Support Us", href: "/support-us" },
  { label: "News", href: "/" },
  { label: "Contact", href: "/contact" },
] as const;

export const HOME = {
  title: "Home | Minnesota Prep Academy",
  welcome: "Welcome to Minnesota Preparatory Academy",
  vision: "Our Vision for Student Success",
  admissions: "Admissions & Enrollment",
  intro:
    "Minnesota Preparatory Academy is an exclusive K-12 and Post Graduate institution that provides quality education and elite training for students. Our knowledgeable staff is committed to the success of our students and their future. We welcome you to explore what we do and how Minnesota Preparatory Academy can help you achieve your goals.",
  empowerment: "Empowerment in Education",
  join: "Join Our Community",
  empowerSuccess: "Empower Student Success",
  cards: [
    {
      title: "Academic Programs",
      href: "/about",
      description:
        "Explore our history, mission, and the programs that prepare students for college, careers, and leadership.",
    },
    {
      title: "Upcoming Events",
      href: "/tuition-and-fees",
      description:
        "Review tuition, enrollment dates, and payment plans for the coming school year.",
    },
    {
      title: "Apply Now",
      href: "/application-inquiry",
      description:
        "Start your application inquiry and our team will send the full application shortly.",
    },
  ],
} as const;

export const ABOUT = {
  title: "About | Minnesota Preparatory Academy",
  heading: "School History",
  body: [
    "Minnesota Preparatory Academy is a multicultural National Preparatory High School created to address the opportunity gaps by not only developing innovative programs for young men & women of color in underserved communities in Minnesota and across the country but also by bringing together hands on, grassroots programs based in education, athletics, trades, and the arts.",
    "These interventions focus on building core life and leadership skills through the use of education, athletics, trades, and the arts.",
    "All children have the talent and ability to be successful. Young men & women of color have a unique set of life experiences that is not being tapped. Setting higher expectations for our young men & women of color is critical to building stronger viable inner-city communities. Creating an environment of mutual respect and understanding amongst all students, families, faculty, and staff.",
    "At Minnesota Preparatory Academy, we believe that all young men and women can embrace who they are, define their future, and make a positive impact on the world.",
  ],
  missionTitle: "Our Mission",
  mission:
    "Our mission is to provide a nurturing and challenging educational environment that empowers students to become critical thinkers, compassionate leaders, and lifelong learners.",
  visionTitle: "Our Vision",
  vision:
    "Our vision is to create a supportive and inclusive community where every student feels valued, inspired, and prepared to contribute positively to society.",
} as const;

export const ACADEMICS = {
  title: "Academics | Minnesota Preparatory Academy",
  heading: "Academics",
  acellus: "Minnesota Preparatory Academy is powered by Acellus.",
  postGradTitle: "Post Grad Program:",
  pseoTitle: "PSEO (Post Secondary Education Options)",
  pseoBody:
    "Students at MPA have access to earning college credits while enrolled in our programs through our partnership with Sophia Learning.",
  sophiaUrl: "https://www.sophia.org/online-college-credit/",
  internationalTitle: "International Program Powered By",
  internationalBody: ': Veritas Academy Minnesota "F1-Visa Certified"',
} as const;

export const ADMISSIONS = {
  title: "Admissions | Minnesota Preparatory Academy",
  heading: "The Admissions Process",
  intro:
    "The admissions process begins in the SPRING before the desired year of enrollment. Decisions are generally made in late May through early July of each year. Admittance is based on a candidate’s entire profile, which includes an academic evaluation administered by Minnesota Preparatory Academy Admission staff, Standardized Test Scores (SAT/ACT), and student telephone interviews. All admission evaluations are standardized and age-appropriate.",
  steps: [
    {
      title: "Step 1",
      body: "We invite all prospective families to attend an open house or information session held numerous times throughout the Spring and Summer months. The sessions will provide a broad view of the school, our history, and our mission. It is an opportunity to hear from our President, Donnell Bratton as well as administration and staff.",
    },
    {
      title: "Step 2",
      body: "Please send the information through the online Inquiry tab in the application. Our administration will then send you the application via email. A link to submit the $50.00 application fee will also be provided for processing.",
    },
    {
      title: "Step 3",
      body: "Submit all OFFICIAL high school transcripts.",
    },
    {
      title: "Step 4",
      body: "Complete Final Evaluation (conducted and scheduled by the Admissions Director). Evaluations are conducted between May 5th and July 30th (Monday-Friday). This evaluation will allow both families and Minnesota Preparatory Academy staff to ensure that all details are agreed upon. This call is also a time for us to begin to familiarize ourselves with the student and their goals. The following will be discussed in full during the final interview",
      bullets: [
        "Student evaluation (questions regarding academics, behavior and goals)",
        "Review of Financial Aid needs & Tuition information",
        "Review of parent obligations during the school year",
      ],
    },
    {
      title: "Step 5",
      body: "Receive admissions decision via mail (and email).",
    },
  ],
} as const;

export const TUITION = {
  title: "Tuition and Fees | Minnesota Preparatory Academy",
  heading: "Tuition and Fees",
  highSchoolTitle: "High School Students",
  postGradTitle: "Post Graduate Students",
  rates: [
    { label: "On-campus Student (Annually)", amount: "$20,500.00" },
    { label: "Day Student (Annually)", amount: "$16,500.00" },
  ],
  additionalTitle: "Additional costs (All Students ):",
  additional: [
    "Meals (during travel) It is REQUIRED that you provide your student with a weekly stipend during basketball season for meals while we are traveling. These meals outside of the campus are not included in the tuition cost. Funding is needed for this such as light snacks and can include full dinners.",
    "Toiletries/Personal Products. It is REQUIRED that you provide your student and monthly stipend (year around) for everyday items such as (shampoo, soap, laundry products, etc). Minnesota Preparatory Academy DOES NOT supply these items. We do however make weekly trips to the store to ensure that students are able to purchase these items.",
  ],
  enrollmentTitle: "Enrollment Fee and Contract",
  enrollmentFee:
    "A non-refundable enrollment fee of $4,500.00 for students is due on the following enrollment dates.",
  enrollmentDates: [
    "June 1st (Early Enrollment)",
    "June 20th",
    "July 15th (Late Enrollment includes $50.00 fee)",
  ],
  enrollmentNote:
    "This payment will be applied to the total tuition balance and secures your students place in our academy and on our roster. After the due date of July 15th, a place in the class can no longer be assured.",
  paymentTitle: "Tuition Payment Options",
  paymentPlans: [
    "One-Payment Plan",
    "Two-Payment Plan",
    "Ten-Payment Plan",
    "Extended Tuition Plan- (form of financial aid, please ask admissions director for details)",
  ],
  paymentNote:
    "Minnesota Preparatory Academy’s payment plans enable families to spread tuition payments over the school year as opposed to paying the tuition in one total sum. Families will be billed in an automatic bank draft by the Business Office according to their payment-plan selection.",
  contact:
    "Please contact Donnell Bratton, Administrative Director, 651-468-8024 with any questions.",
} as const;

export const SUPPORT = {
  title: "Support Us | Minnesota Preparatory Academy",
  heading: "Support Our Academy",
  join: "Join Our Community",
  intro:
    "Minnesota Preparatory Academy is an exclusive K-12 and Post Graduate institution that provides quality education and elite training for students. Our knowledgeable staff is committed to the success of our students and their future. We welcome you to explore what we do and how Minnesota Preparatory Academy can help you achieve your goals.",
  eventsCta: "View Upcoming Events",
  involved: "Get Involved Today",
  waysTitle: "Ways to Support Our Mission:",
  ways: [
    {
      title: "In-Person Donation",
      body: `Visit Us at :\n${SITE.address}`,
    },
    {
      title: "Online Donation",
      body: "Make a secure and tax-deductible donation online.",
      cta: "Donate Now",
      href: SITE.donationUrl,
    },
    {
      title: "Donate Over the Phone",
      body: "Support our academy by donating over the phone. Our team is available to assist you. Tel: 651-468-8024",
    },
  ],
} as const;

export const CONTACT = {
  title: "Contact | Minnesota Preparatory Academy",
  heading: "Contact Us",
  reach: "Reach Out to Us",
  details: `${SITE.name} ${SITE.address}`,
  line: `${SITE.emails.contact} | ${SITE.phone}`,
  success: "Thank You for Contacting Us!",
  supportCta: "Support MPA Today!",
  contribute: "Contribute",
  fields: [
    { name: "firstName", label: "First Name", required: true },
    { name: "lastName", label: "Last Name", required: true },
    { name: "email", label: "Email Address", required: true, type: "email" },
    { name: "yourMessage", label: "Your Message", required: false },
    {
      name: "message",
      label: "Type Your Message Here",
      required: false,
      multiline: true,
    },
  ],
} as const;

export const INQUIRY = {
  title: "Application Inquiry | Minnesota Preparatory Academy",
  heading: "Application Inquiry",
  intro:
    "Great to hear that you are interested in joining Minnesota Prep Academy! Please fill out our contact form and our team will reach out to you shortly with the application. Thank you for considering us as your educational institution!",
  success: "Thanks for submitting!",
  fields: [
    { name: "firstName", label: "First Name", required: false },
    { name: "lastName", label: "Last Name", required: false },
    { name: "email", label: "Email", required: true, type: "email" },
    { name: "message", label: "Message", required: false, multiline: true },
  ],
} as const;

export const FILE_SHARE = {
  title: "File Share | Minnesota Preparatory Academy",
  heading: "File Share",
  empty: "Sign in to view shared files.",
} as const;
