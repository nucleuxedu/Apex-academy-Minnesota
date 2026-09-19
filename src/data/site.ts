export const site = {
  name: "Veritas Academy",
  tagline: "Grounded in Truth. Guided by Wisdom. Marked by Virtue.",
  description:
    "Veritas Academy is a private school, in Chisago City, MN, where we love well in pursuit of Excellence, through a classical education.",
  url: "https://veritasclassical.org/",
  phoneDisplay: "763.670.0793",
  phoneTel: "7636700793",
  admissionsPhoneDisplay: "651.462.3894",
  admissionsPhoneTel: "6514623894",
  factsPhoneDisplay: "1 877-303-3039",
  factsPhoneTel: "18773033039",
  email: "admissions@veritasclassical.org",
  generalEmail: "v@veritasclassical.org",
  presidentEmail: "President@veritasclassical.org",
  hours: "Monday – Friday: 8:00 AM – 3:30 PM",
  taxId: "26-2949017",
  logo: {
    src: "https://veritasclassical.org/wp-content/uploads/2020/02/Weblogo-110h.png",
    retina: "https://veritasclassical.org/wp-content/uploads/2020/03/logo-220so.png",
    mobileRetina: "https://veritasclassical.org/wp-content/uploads/2020/02/Weblogo-220h.png",
    width: 421,
    height: 110,
    alt: "Veritas Academy Chisago City MN Logo",
  },
  favicon: "https://veritasclassical.org/wp-content/uploads/2020/02/cropped-Veritas-Site-Icon-32x32.png",
  appleIcon: "https://veritasclassical.org/wp-content/uploads/2020/02/cropped-Veritas-Site-Icon-180x180.png",
  locations: [
    {
      title: "Veritas Academy",
      lines: ["11723 Stinson Avenue", "Chisago City, MN 55013"],
    },
    {
      title: "Veritas Chapel",
      lines: ["34888 Kable Avenue", "North Branch, MN 55056"],
    },
  ],
  social: [
    { label: "Facebook", href: "https://www.facebook.com/veritasgecko/" },
    { label: "Instagram", href: "https://www.instagram.com/veritasclassic" },
    { label: "Email", href: "mailto:v@veritasclassical.org" },
  ],
  apps: {
    android: {
      href: "https://play.google.com/store/apps/details?id=com.subsplashconsulting.s_JJKTS8&hl=en_US",
      image: "https://veritasclassical.org/wp-content/uploads/2020/03/google-play-1.png",
      alt: "Download Android App",
    },
    ios: {
      href: "https://subsplash.com/veritasacademy/app",
      image: "https://veritasclassical.org/wp-content/uploads/2020/03/app-store-logo-4.png",
      alt: "Download iOS App",
    },
  },
  copyright:
    "Veritas Academy is a private K-12 classical Christian school serving North Branch, Cambridge, Forest Lake, Wyoming, Lindstrom, Stacy, Isanti, Chisago City.",
  inquiryFormSrc: "https://api.leadconnectorhq.com/widget/form/uMUqtnL839IeTkgFajGQ",
  contactFormSrc: "https://api.leadconnectorhq.com/widget/form/QRvSMV7Wwj8onyoDkoZ7",
  givebutterId: "pdQN9j",
  factsUrl: "https://online.factsmgt.com/signin/4J766",
  intentToEnrollUrl: "https://veritasclassical.org/us-application/",
  internationalApplicationUrl: "https://veritasclassical.org/international-student-application/",
  faqUrl: "https://veritasclassical.org/questions/",
  internationalFaqUrl: "https://veritasclassical.org/international-faqs/",
  sevisFeeUrl: "https://fmjfee.com/i901fee/index.html#",
  visaWaitTimesUrl:
    "https://travel.state.gov/content/travel/en/us-visas/visa-information-resources/wait-times.html",
  converaPayUrl: "https://students.convera.com/va#!",
  theatreTicketsUrl: "https://veritasacademy.subspla.sh/5syftpt",
  restfulLearningUrl: "https://myveritas.us/restful-learning/",
  homepageVideoMobile: "https://veritasclassical.org/wp-content/uploads/2025/06/VA-Homepage-Video-New.mp4",
  homepageVideoDesktop: "https://veritasclassical.org/wp-content/uploads/2026/04/VA-Homepage-Video-New-2-1.mp4",
};

export type NavChild = { label: string; href: string; children?: NavChild[] };
export type NavItem = { label: string; href: string; children?: NavChild[] };

export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Academics", href: "/academics" },
  { label: "Student Life", href: "/student-life" },
  {
    label: "Admissions",
    href: "https://veritasclassical.org/admissions/",
    children: [
      { label: "Get Started", href: "/get-started" },
      {
        label: "International Students",
        href: "/international-students",
        children: [{ label: "International Student Get Started", href: "/get-started-international" }],
      },
    ],
  },
  { label: "Tuition & Financial Information", href: "/tuition" },
  { label: "About Veritas", href: "/about" },
  { label: "Contact Us", href: "/contact-us" },
  { label: "Donate", href: "/donate" },
];

export const aboutLinks = [
  { label: "What Parents Are Saying", href: "/testimonials" },
  { label: "Core Values", href: "/core-values" },
  { label: "Statement of Faith", href: "/statement-of-faith" },
  { label: "Calendar", href: "/calendar" },
  { label: "Contact Us", href: "/contact-us" },
];

export const knowVeritasLinks = [
  { label: "Core Values", href: "/core-values" },
  { label: "Statement of Faith", href: "/statement-of-faith" },
  { label: "Contact Us", href: "/contact-us" },
];

export const programLinks = [
  { label: "Academic Program", href: "/academics" },
  { label: "School of Grammar (K-5)", href: "/academics#grammar" },
  { label: "School of Logic (6-8)", href: "/academics#logic" },
  { label: "School of Rhetoric (9-12)", href: "/academics#rhetoric" },
  { label: "Athletics", href: "/athletics" },
  { label: "The Arts", href: "/the-arts" },
  { label: "Veritas Conservatory of Music", href: "/orchestra-and-more" },
  { label: "Veritas Conservatory of Music Lessons", href: "/orchestra-and-more-lessons" },
  { label: "Theatre", href: "/theatre-arts" },
];

export const artsLinks = [
  { label: "Veritas Conservatory of Music", href: "/orchestra-and-more" },
  { label: "Veritas Conservatory of Music Lessons", href: "/orchestra-and-more-lessons" },
  { label: "Theatre Arts", href: "/theatre-arts" },
  { label: "Christmas at Veritas", href: "/christmas-at-veritas" },
  { label: "Sights and Sounds", href: "/sights-and-sounds" },
];

export const lifeAtVeritasLinks = [
  { label: "International Students Cost", href: "/international-student-cost" },
  { label: "Make Payments", href: "/global-pay" },
  { label: "Student Life", href: "/student-life" },
  { label: "Athletics", href: "/athletics" },
  { label: "The Arts", href: "/the-arts" },
  { label: "SCIENCE at Veritas", href: "/science" },
];

export const exploreLinks = [
  { label: "Athletics", href: "/athletics" },
  { label: "The Arts", href: "/the-arts" },
  { label: "SCIENCE at Veritas", href: "/science" },
  { label: "Student Life", href: "/student-life" },
];

export const testimonials = [
  "We want the best life for our child. A best life starts with a strong foundation. Veritas Academy is that foundation. We couldn’t be happier with our choice to choose Veritas.",
  "Because of Veritas Academy’s commitment to students, my children are motivated to learn, they are challenged at their skill level instead of being held back due to their ages.",
  "Transition from other educational models is seamlessly supported. Staff and teachers are proactive and caring to the smallest detail. Leadership goes above and beyond for ALL students.",
  "Veritas Academy prepared my child for college. His biology professor said his papers are some of the best first-time college papers she has ever seen.",
];

export const whatSetsApart = [
  {
    title: "Small Class Sizes",
    image: "https://veritasclassical.org/wp-content/uploads/2024/09/Small-Class-Sizes.png",
    imageTitle: "Small Class Sizes",
    href: "https://veritasclassical.org/class-size/",
    body: "Students are known and taught with intention. Teachers understand each student’s strengths and needs, allowing for meaningful growth that large classrooms cannot provide.",
  },
  {
    title: "Christian Formation",
    image: "https://veritasclassical.org/wp-content/uploads/2024/09/Prayer.png",
    imageTitle: "Prayer",
    href: "https://veritasclassical.org/christianformation/",
    body: "Students are grounded in Biblical truth and taught to live with wisdom and virtue. In a culture that often pulls in the opposite direction, we provide clarity, direction, and consistency.",
  },
  {
    title: "Academic Placement",
    image: "https://veritasclassical.org/wp-content/uploads/2024/09/Academic-Acceleration.png",
    imageTitle: "Academic Acceleration",
    href: "https://veritasclassical.org/academic-placement/",
    body: "Students are placed according to ability and readiness, allowing them to be challenged without being overwhelmed. Instruction is structured, purposeful, and responsive to each student’s progress.",
  },
  {
    title: "Intentional Teaching",
    image: "https://veritasclassical.org/wp-content/uploads/2024/09/Caring-Teachers_2024.png",
    imageTitle: "Caring Teachers_2024",
    href: "https://veritasclassical.org/intentional-teaching/",
    body: "Teachers build strong relationships with students while maintaining clear expectations. Students are supported, challenged, and held accountable in a consistent and structured environment.",
  },
];

export const whyChooseVeritasAlt = [
  {
    title: "Small Class Sizes",
    image: "https://veritasclassical.org/wp-content/uploads/2024/05/SmallClass2021-300x191.png",
    imageTitle: "SmallClass2021",
    href: "https://veritasclassical.org/class-size/",
    body: "Your child will get the attention they need to succeed and will be given opportunities that wouldn’t be available to them in a larger class setting.",
  },
  {
    title: "Christian Values",
    image: "https://veritasclassical.org/wp-content/uploads/2024/05/praying_600383-300x192.jpg",
    imageTitle: "Group of people praying with Holy Bible at home, closeup",
    href: "https://veritasclassical.org/christianformation/",
    body: "Your child will be taught Biblical values that are instrumental in leading all of us towards goodness, love and hope in a world that oftentimes seems hopeless.",
  },
  {
    title: "Academic Acceleration",
    image: "https://veritasclassical.org/wp-content/uploads/2024/05/Science13_600383-300x192.jpg",
    imageTitle: "Science13_600383",
    href: "https://veritasclassical.org/academic-acceleration/",
    body: "Your child will not be held back or pushed too far forward. We ensure each student is appropriately placed based on ability, giftedness and motivation.",
  },
  {
    title: "Caring Teachers",
    image: "https://veritasclassical.org/wp-content/uploads/2024/05/Greek-Class_740472-300x191.jpg",
    imageTitle: "Greek Class_740472",
    href: "https://veritasclassical.org/caring-teachers",
    body: "Your child will be loved and cared for by highly trained staff committed to nurturing every student in a safe and supportive learning environment.",
  },
];

export const pillars = [
  {
    title: "Think",
    subtitle: "Clear Thinking",
    body: "Students learn to reason carefully, write clearly, and communicate with confidence through a classical course of study.",
    icon: "psychology" as const,
  },
  {
    title: "Discipline",
    subtitle: "Athletics",
    body: "Athletics develop discipline, teamwork, and perseverance as part of a balanced and ordered student life.",
    icon: "directions_run" as const,
  },
  {
    title: "Create",
    subtitle: "The Arts",
    body: "Students engage in the arts to develop skill, attention, and an appreciation for beauty in both creation and performance.",
    icon: "palette" as const,
  },
  {
    title: "Grow",
    subtitle: "Christian Formation",
    body: "Students grow in understanding and maturity through daily practice of faith, responsibility, and virtue.",
    icon: "menu_book" as const,
  },
];

export const attractions = [
  {
    title: "Snowboarding",
    place: "Wild Mountain",
    image: "https://veritasclassical.org/wp-content/uploads/2022/07/snowboarding-400x626-1.jpg",
    imageTitle: "snowboarding-400×626",
  },
  {
    title: "Rock Climbing",
    place: "Interstate State Park",
    image: "https://veritasclassical.org/wp-content/uploads/2022/07/rock-climbing-400x628-1.jpg",
    imageTitle: "rock-climbing-400×628",
  },
  {
    title: "Water Activities",
    place: "Local Lakes",
    altPlace: ". . . on 1 of 10,000 Lakes",
    image: "https://veritasclassical.org/wp-content/uploads/2022/07/wakesurfing-400x626-1.jpg",
    imageTitle: "wakesurfing-400×626",
  },
  {
    title: "Shopping and Recreation",
    place: "Mall of America",
    altTitle: "Shop or Play",
    image: "https://veritasclassical.org/wp-content/uploads/2022/07/MOA-fun-400x627-1.jpg",
    imageTitle: "MOA-fun-400×627",
  },
];

export const experienceCards = [
  {
    title: "Learn Proficient English",
    image: "https://veritasclassical.org/wp-content/uploads/2022/07/Language2.png",
    imageTitle: "Language Learning",
    body: "During your education at Veritas, you will be able to achieve proficiency as you practice with native speakers in the classroom and throughout your stay.",
  },
  {
    title: "Experience American Culture",
    image: "https://veritasclassical.org/wp-content/uploads/2022/07/Cultural.png",
    imageTitle: "Cultural Experience",
    body: "Whether it is the July 4th parade and barbecue, or a field trip to America’s landmarks, you will be immersed in American culture throughout your education and your social life.",
  },
  {
    title: "Build Lasting Relationships",
    image: "https://veritasclassical.org/wp-content/uploads/2022/07/Relationships2-1.png",
    imageTitle: "Relationships",
    body: "In additional to friendships built in the classroom and the dorms, students are paired with a family where they spend holidays, and enjoy the benefits of having a home away from home.",
  },
  {
    title: "Prepare for American Colleges",
    image: "https://veritasclassical.org/wp-content/uploads/2022/07/UCLA.png",
    imageTitle: "UCLA",
    body: "High school students receive individualized college counseling and have opportunities to visit colleges, meet with college admissions counselors and professors in their desired majors.",
  },
];

export const faculty = [
  {
    name: "John Baumgartner",
    image: "https://veritasclassical.org/wp-content/uploads/2021/12/BaumgartnerJ.png",
    imageTitle: "Baumgartner John",
    bio: "Mr. Baumgartner is a Twin Cities-based trombonist, bassist, composer, and music educator. As a performer he has toured across the US and Canada, recorded on various projects.",
  },
  {
    name: "Karen Baumgartner",
    image: "https://veritasclassical.org/wp-content/uploads/2021/12/BaumgartnerK.png",
    imageTitle: "Baumgartner K",
    bio: "Ms. Karen Baumgartner is an award winning-flutist who has given solo performances across the country. She also teachers at the University of Northwestern in Saint as an adjunct flute instructor.",
  },
  {
    name: "Weily Grina-Shay",
    image: "https://veritasclassical.org/wp-content/uploads/2021/12/WeilyShay-1.png",
    imageTitle: "Weily Shay",
    bio: "Ms. Grina-Shay is a clarinetist who is passionate about chamber music, education. She is the co-founder of 10th Wave Chamber Music Collective, a chamber music organization that seeks to curate innovative concert.",
  },
  {
    name: "Rebecca Plunkett",
    image: "https://veritasclassical.org/wp-content/uploads/2021/12/RebeccaPlunkett.png",
    imageTitle: "Rebecca Plunkett",
    bio: "Ms. Plunkett is a highly motivated, fun, energetic, and organized violinist who loves to teach! She has a certification in Beginner Violin Technique with Dr. Stephanie Allen of Violin Technique Coaching.",
  },
  {
    name: "Ben Valine",
    image: "https://veritasclassical.org/wp-content/uploads/2021/12/ValineB.png",
    imageTitle: "Valine B",
    bio: "Mr. Valine is a multi-instrumentalist whose talents include violin, viola, guitar, banjo, and mandolin. He has performed with Vince Gill and Ricky Skaggs, and has opened for John Legend, Sting, and The Jacksons.",
  },
  {
    name: "Kiana Welsch",
    image: "https://veritasclassical.org/wp-content/uploads/2022/01/KianaWelsch-300x191.png",
    imageTitle: "Kiana Welsch",
    bio: "Ms. Welsch has been playing the violin since she was six years old. She was a dedicated member of the Minnesota Youth Symphonies for five years, which played a significant role in her career choice.",
  },
  {
    name: "Cathy Ellis",
    image: "https://veritasclassical.org/wp-content/uploads/2023/07/CathyEllis.png",
    imageTitle: "Cathy Ellis",
    bio: "Ms. Ellis has taught music since 1987 and has performed in orchestras since 7th grade. She studied the Suzuki Violin Method at San Diego State University under Dr. Theodore Brunson.",
  },
  {
    name: "Timothy Shows",
    image: "https://veritasclassical.org/wp-content/uploads/2023/07/Timothy-Shows-2.png",
    imageTitle: "Timothy Shows 2",
    bio: "Mr. Shows is a Colombian American Principal Oboist of the Mankato Symphony. His studies in Manhattan with Maestro Lucarelli have refined his senses of tone color and air production.",
  },
];

export const tuitionMatrix: Record<string, Record<string, string>> = {
  "K-5th": {
    "$49,000 or below": "For $49,000 and below, please contact the admissions office for guided tuition options. 651.462.3894.",
    "$50,000-$69,000": "$4,800-$6,667",
    "$70,000-$89,000": "$6,668-$7,835",
    "$90,000 and above": "$7,836-$9,999",
  },
  "6th-8th": {
    "$49,000 or below": "For $49,000 and below, please contact the admissions office for guided tuition options. 651.462.3894.",
    "$50,000-$69,000": "$6,500-$8,667",
    "$70,000-$89,000": "$8,668-$9,835",
    "$90,000 and above": "$9,836-$11,999",
  },
  "9th-12th": {
    "$49,000 or below": "For $49,000 and below, please contact the admissions office for guided tuition options. 651.462.3894.",
    "$50,000-$69,000": "$7,500-$8,667",
    "$70,000-$89,000": "$8,668-$9,835",
    "$90,000 and above": "$9,836-$13,999",
  },
};

export const grades = [
  "PreK",
  "Kindergarten",
  "1st Grade",
  "2nd Grade",
  "3rd Grade",
  "4th Grade",
  "5th Grade",
  "6th Grade",
  "7th Grade",
  "8th Grade",
  "9th Grade",
  "10th Grade",
  "11th Grade",
  "12th Grade",
];

export const countries = [
  "Afghanistan","Albania","Algeria","Andorra","Angola","Antigua and Barbuda","Argentina","Armenia","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bhutan","Bolivia","Bosnia and Herzegovina","Botswana","Brazil","Brunei","Bulgaria","Burkina Faso","Burundi","Cabo Verde","Cambodia","Cameroon","Canada","Central African Republic","Chad","Chile","China","Colombia","Comoros","Congo (DRC)","Congo (Republic)","Costa Rica","Croatia","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Eswatini","Ethiopia","Fiji","Finland","France","Gabon","Gambia","Georgia","Germany","Ghana","Greece","Grenada","Guatemala","Guinea","Guinea-Bissau","Guyana","Haiti","Honduras","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Israel","Italy","Jamaica","Japan","Jordan","Kazakhstan","Kenya","Kiribati","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Mauritania","Mauritius","Mexico","Micronesia","Moldova","Monaco","Mongolia","Montenegro","Morocco","Mozambique","Myanmar","Namibia","Nauru","Nepal","Netherlands","New Zealand","Nicaragua","Niger","Nigeria","North Korea","North Macedonia","Norway","Oman","Pakistan","Palau","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Qatar","Romania","Russia","Rwanda","Saint Kitts and Nevis","Saint Lucia","Saint Vincent and the Grenadines","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Korea","South Sudan","Spain","Sri Lanka","Sudan","Suriname","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor-Leste","Togo","Tonga","Trinidad and Tobago","Tunisia","Turkey","Turkmenistan","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States","Uruguay","Uzbekistan","Vanuatu","Vatican City","Venezuela","Vietnam","Yemen","Zambia","Zimbabwe",
];

export const countryCodes = [
  { flag: "🇺🇸", code: "+1", label: "United States" },
  { flag: "🇬🇧", code: "+44", label: "United Kingdom" },
  { flag: "🇦🇺", code: "+61", label: "Australia" },
  { flag: "🇦🇫", code: "+93", label: "Afghanistan" },
  { flag: "🇦🇱", code: "+355", label: "Albania" },
  { flag: "🇩🇿", code: "+213", label: "Algeria" },
  { flag: "🇦🇷", code: "+54", label: "Argentina" },
  { flag: "🇦🇲", code: "+374", label: "Armenia" },
  { flag: "🇦🇹", code: "+43", label: "Austria" },
  { flag: "🇦🇿", code: "+994", label: "Azerbaijan" },
  { flag: "🇧🇭", code: "+973", label: "Bahrain" },
  { flag: "🇧🇩", code: "+880", label: "Bangladesh" },
  { flag: "🇧🇪", code: "+32", label: "Belgium" },
  { flag: "🇧🇷", code: "+55", label: "Brazil" },
  { flag: "🇨🇦", code: "+1", label: "Canada" },
  { flag: "🇨🇱", code: "+56", label: "Chile" },
  { flag: "🇨🇳", code: "+86", label: "China" },
  { flag: "🇨🇴", code: "+57", label: "Colombia" },
  { flag: "🇪🇬", code: "+20", label: "Egypt" },
  { flag: "🇪🇹", code: "+251", label: "Ethiopia" },
  { flag: "🇫🇷", code: "+33", label: "France" },
  { flag: "🇩🇪", code: "+49", label: "Germany" },
  { flag: "🇬🇭", code: "+233", label: "Ghana" },
  { flag: "🇬🇷", code: "+30", label: "Greece" },
  { flag: "🇮🇳", code: "+91", label: "India" },
  { flag: "🇮🇩", code: "+62", label: "Indonesia" },
  { flag: "🇮🇷", code: "+98", label: "Iran" },
  { flag: "🇮🇶", code: "+964", label: "Iraq" },
  { flag: "🇮🇪", code: "+353", label: "Ireland" },
  { flag: "🇮🇱", code: "+972", label: "Israel" },
  { flag: "🇮🇹", code: "+39", label: "Italy" },
  { flag: "🇯🇵", code: "+81", label: "Japan" },
  { flag: "🇯🇴", code: "+962", label: "Jordan" },
  { flag: "🇰🇿", code: "+7", label: "Kazakhstan" },
  { flag: "🇰🇪", code: "+254", label: "Kenya" },
  { flag: "🇰🇷", code: "+82", label: "South Korea" },
  { flag: "🇰🇼", code: "+965", label: "Kuwait" },
  { flag: "🇱🇧", code: "+961", label: "Lebanon" },
  { flag: "🇲🇾", code: "+60", label: "Malaysia" },
  { flag: "🇲🇽", code: "+52", label: "Mexico" },
  { flag: "🇲🇦", code: "+212", label: "Morocco" },
  { flag: "🇳🇱", code: "+31", label: "Netherlands" },
  { flag: "🇳🇿", code: "+64", label: "New Zealand" },
  { flag: "🇳🇬", code: "+234", label: "Nigeria" },
  { flag: "🇳🇴", code: "+47", label: "Norway" },
  { flag: "🇵🇰", code: "+92", label: "Pakistan" },
  { flag: "🇵🇦", code: "+507", label: "Panama" },
  { flag: "🇵🇪", code: "+51", label: "Peru" },
  { flag: "🇵🇭", code: "+63", label: "Philippines" },
  { flag: "🇵🇱", code: "+48", label: "Poland" },
  { flag: "🇵🇹", code: "+351", label: "Portugal" },
  { flag: "🇶🇦", code: "+974", label: "Qatar" },
  { flag: "🇷🇺", code: "+7", label: "Russia" },
  { flag: "🇸🇦", code: "+966", label: "Saudi Arabia" },
  { flag: "🇸🇬", code: "+65", label: "Singapore" },
  { flag: "🇿🇦", code: "+27", label: "South Africa" },
  { flag: "🇪🇸", code: "+34", label: "Spain" },
  { flag: "🇱🇰", code: "+94", label: "Sri Lanka" },
  { flag: "🇸🇪", code: "+46", label: "Sweden" },
  { flag: "🇨🇭", code: "+41", label: "Switzerland" },
  { flag: "🇹🇼", code: "+886", label: "Taiwan" },
  { flag: "🇹🇭", code: "+66", label: "Thailand" },
  { flag: "🇹🇳", code: "+216", label: "Tunisia" },
  { flag: "🇹🇷", code: "+90", label: "Turkey" },
  { flag: "🇺🇦", code: "+380", label: "Ukraine" },
  { flag: "🇦🇪", code: "+971", label: "United Arab Emirates" },
  { flag: "🇻🇳", code: "+84", label: "Vietnam" },
  { flag: "🇾🇪", code: "+967", label: "Yemen" },
  { flag: "🇿🇼", code: "+263", label: "Zimbabwe" },
];
