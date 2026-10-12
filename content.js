// All site content lives here. Edit this file to update the website.

const SITE_LINKS = Object.freeze({
  linkedin: "https://www.linkedin.com/in/engmelaraby/",
  email: "mailto:mohammed.elaraby100@gmail.com",
});

const SITE_CONTENT = Object.freeze({
  photo: "assets/mohammed-elaraby.jpg",
  handle: "@engmelaraby",
  skills: [
    "PHP", "Symfony", "Laravel", "Drupal", "JavaScript", "TypeScript", "Dart", "Flutter",
    "MySQL", "MongoDB", "AWS (EC2, RDS)", "GCP", "Linux / RHEL", "CI/CD", "Microservices", "API Design", "Agile / Scrum",
  ],

  en: {
    pageTitle: "Eng. Mohammed Elaraby | Senior Software Engineer & Technical Lead · م. محمد العربي",
    switchLabel: "العربية",
    themeLabels: { system: "System", light: "Light", dark: "Dark" },
    nav: [
      { id: "focus", label: "About" },
      { id: "experience", label: "Experience" },
      { id: "projects", label: "Projects" },
      { id: "highlights", label: "Highlights" },
      { id: "contact", label: "Contact" },
    ],
    prefix: "Eng.",
    firstName: "Mohammed",
    lastName: "Elaraby",
    title: "Senior Software Engineer & Technical Team Lead",
    tagline: "9+ years in software engineering · 5+ years leading teams.",
    bio: [
      "I'm a Senior Software Engineer at Lead Liaison and Captello, and a Development Consultant for Go Bus Transportation, where I previously served as Group Head of Developers.",
      "I work mostly with PHP: Symfony, Laravel, and Drupal. I care about OOP/OOD, microservices, and API design. I've run AWS (EC2, RDS) and GCP infrastructure and CI/CD pipelines, and led teams at ArabDT, AWStreams, HMASERV, and Metacodya. I like building strong teams, mentoring developers, and shipping large deployments on time.",
    ],
    photoCaption: "MOHAMMED ELARABY / ALEXANDRIA, EGYPT",
    buttons: [
      { label: "LinkedIn", href: SITE_LINKS.linkedin, style: "primary", external: true },
      { label: "Experience", href: "#experience", style: "ghost" },
      { label: "Get in touch", href: "#contact", style: "link" },
    ],

    focusTitle: "What I do",
    focusIntro: "The areas I've spent the last nine years working in.",
    focus: [
      { tag: "Backend", name: "PHP platforms & APIs", description: "Building backend services and APIs with Symfony, Laravel, and Drupal, grounded in OOP/OOD and microservices." },
      { tag: "Leadership", name: "Building engineering teams", description: "Leading and mentoring developers, assigning work to people's strengths, code reviews, and hiring." },
      { tag: "Cloud", name: "Infrastructure & delivery", description: "Managing AWS, GCP, and WHM servers, CI/CD pipelines, and large software deployments." },
      { tag: "Process", name: "Agile delivery", description: "Estimating and tracking work with Scrum, and working with product, UI/UX, and infrastructure teams." },
    ],

    experienceTitle: "Experience",
    experienceIntro: "Where I've worked, newest first.",
    experience: [
      { period: "Apr 2025 — Present", role: "Senior Software Engineer", company: "Lead Liaison", summary: "Developing and maintaining Symfony backend services in a distributed team; contributing to API design and integrations for core product features." },
      { period: "Apr 2025 — Present", role: "Senior Software Engineer", company: "Captello", summary: "Designing and building full-stack features on the core engineering team, across backend services and integrations." },
      { period: "May 2025 — Present", role: "Development Consultant", company: "Go Bus Transportation", summary: "Advising the development team on architecture, code quality, scalability, and delivery practices." },
      { period: "Sep 2022 — May 2025", role: "(Group) Head of Developers", company: "Go Bus Transportation", summary: "Led and mentored the development team, shipped the Golimo and Gomini app families, built the infrastructure server, ran Scrum planning and code reviews, managed AWS and WHM servers, and hired engineers." },
      { period: "May 2024 — Apr 2025", role: "Technical Lead", company: "HMASERV", summary: "Led technical delivery on PHP projects with API gateways and backend integrations." },
      { period: "Feb 2024 — Jul 2024", role: "Technical Lead", company: "Metacodya Software and Digital Solutions", summary: "Led a remote team on JavaScript projects and API gateway integrations." },
      { period: "Dec 2023 — Jan 2024", role: "Senior Software Developer", company: "Aqwas", summary: "Delivered JavaScript development, including API gateway integrations, on a remote engagement." },
      { period: "Oct 2021 — Sep 2022", role: "Technical Team Lead", company: "ArabDT", summary: "Led a Drupal team through large deployments, refactoring, and hiring, working with the infrastructure team in Saudi Arabia." },
      { period: "Mar 2021 — Dec 2021", role: "Senior Software Engineer / Technical Team Lead", company: "AWStreams", summary: "Led the technical team across multiple projects, managed AWS servers and GitHub repositories, and helped hire engineers." },
      { period: "Mar 2021 — Dec 2021", role: "Technical Team Lead", company: "OZZ", summary: "Directed planning, execution, and code quality across the team's projects." },
      { period: "Jun 2020 — Dec 2021", role: "Senior PHP Developer", company: "ExpandCart", summary: "Worked on the bug-fixing team, built automated tests, and led a companion API that let third parties build plugins." },
      { period: "2020", role: "Senior Software Developer & Junior Technical Team Lead", company: "Innovation Hub", summary: "Worked across frontend and backend and stood in as team lead." },
      { period: "2019 — 2020", role: "Senior Web Developer", company: "Close2Seven", summary: "Built e-commerce sites, dashboards, and an HR system with Laravel; worked on SEO for major MENA websites." },
      { period: "2017 — 2019", role: "Junior Web Developer", company: "Aaser Media", summary: "Built interfaces in HTML, CSS, and JavaScript, plus WordPress, HubSpot, and Laravel work." },
    ],
    skillsTitle: "Toolbox",

    projectsTitle: "Projects",
    projectsIntro: "Products and systems I've led or built.",
    projects: [
      { tag: "Go Bus · Lead", name: "Golimo", description: "Led the development of the Golimo Customer, Chauffeur, POS, and Web applications." },
      { tag: "Go Bus · Lead", name: "Gomini", description: "Led the creation of the Gomini Customer, Chauffeur, and Web applications, expanding the company's product line." },
      { tag: "Go Bus · Infrastructure", name: "Infrastructure server", description: "Helped design and build the company's infrastructure server and deployment setup." },
      { tag: "ExpandCart · API", name: "Companion API", description: "Led a companion API for the web app that lets third parties build plugins." },
      { tag: "ArabDT · Drupal", name: "Drupal applications", description: "Led the team building Drupal-based applications for the company's portfolio." },
      { tag: "Close2Seven · Laravel", name: "HR system", description: "Built an HR system for resources, projects, tasks, attendance, and timesheets." },
    ],

    highlightsTitle: "Highlights",
    highlightsIntro: "A few numbers, plus awards, education, and certifications.",
    stats: [
      { value: "9+", label: "Years in software engineering" },
      { value: "5+", label: "Years leading development teams" },
      { value: "12", label: "Companies worked with" },
      { value: "2,100+", label: "Followers on LinkedIn" },
    ],
    highlights: [
      { tag: "Award · ArabDT", name: "Certificate of Recognition", description: "For outstanding contributions to project success." },
      { tag: "Education", name: "Bachelor's in Business Information Systems", description: "High Institute for Hotels, Tourism & Computer." },
      { tag: "Certification", name: "Red Hat System Administration", description: "New Horizons." },
      { tag: "Certification", name: "MCSA & MCSE 2016", description: "Microsoft certifications, New Horizons." },
    ],

    contactTitle: "Let's talk",
    contactText: "A project, a team to build, or a question about engineering careers. Send me a message.",
    contactButton: "Send an email",
    footer: "Eng. Mohammed Elaraby",
  },

  ar: {
    pageTitle: "م. محمد العربي | مهندس برمجيات أول وقائد فريق تقني · Mohammed Elaraby",
    switchLabel: "English",
    themeLabels: { system: "النظام", light: "فاتح", dark: "داكن" },
    nav: [
      { id: "focus", label: "نبذة" },
      { id: "experience", label: "الخبرات" },
      { id: "projects", label: "المشاريع" },
      { id: "highlights", label: "أبرز الإنجازات" },
      { id: "contact", label: "تواصل" },
    ],
    prefix: "م.",
    firstName: "محمد",
    lastName: "العربي",
    title: "مهندس برمجيات أول وقائد فريق تقني",
    tagline: "أكثر من ٩ سنوات في هندسة البرمجيات · أكثر من ٥ سنوات في قيادة الفرق.",
    bio: [
      "أعمل مهندس برمجيات أول في Lead Liaison وCaptello، ومستشار تطوير لشركة جو باص، حيث شغلت سابقًا منصب رئيس قسم المطورين للمجموعة.",
      "أعمل أساسًا بلغة PHP وأطر Symfony وLaravel وDrupal، وأهتم بالبرمجة والتصميم كائني التوجه والخدمات المصغّرة وتصميم الواجهات البرمجية. أدرت بنية تحتية على AWS (EC2 وRDS) وGCP وخطوط CI/CD، وقدت فرقًا في ArabDT وAWStreams وHMASERV وMetacodya. أحب بناء فرق قوية وتوجيه المطورين وتسليم المشاريع الكبيرة في موعدها.",
    ],
    photoCaption: "محمد العربي / الإسكندرية، مصر",
    buttons: [
      { label: "LinkedIn", href: SITE_LINKS.linkedin, style: "primary", external: true },
      { label: "الخبرات", href: "#experience", style: "ghost" },
      { label: "تواصل معي", href: "#contact", style: "link" },
    ],

    focusTitle: "ماذا أعمل",
    focusIntro: "المجالات التي عملت فيها خلال السنوات التسع الماضية.",
    focus: [
      { tag: "الأنظمة الخلفية", name: "منصات PHP والواجهات البرمجية", description: "بناء خدمات وواجهات برمجية باستخدام Symfony وLaravel وDrupal، على أسس التصميم كائني التوجه والخدمات المصغّرة." },
      { tag: "القيادة", name: "بناء الفرق الهندسية", description: "قيادة المطورين وتوجيههم، وتوزيع المهام حسب نقاط القوة، ومراجعة الكود، والتوظيف." },
      { tag: "السحابة", name: "البنية التحتية والتسليم", description: "إدارة خوادم AWS وGCP وWHM، وخطوط CI/CD، وعمليات النشر الكبيرة." },
      { tag: "المنهجية", name: "التسليم بأسلوب Agile", description: "تقدير المهام ومتابعتها بمنهجية Scrum، والعمل مع فرق المنتج وتجربة المستخدم والبنية التحتية." },
    ],

    experienceTitle: "الخبرات",
    experienceIntro: "أماكن عملي، من الأحدث إلى الأقدم.",
    experience: [
      { period: "أبريل ٢٠٢٥ — الآن", role: "مهندس برمجيات أول", company: "Lead Liaison", summary: "تطوير وصيانة خدمات خلفية بـ Symfony ضمن فريق موزّع، والمساهمة في تصميم الواجهات البرمجية والتكاملات لميزات المنتج الأساسية." },
      { period: "أبريل ٢٠٢٥ — الآن", role: "مهندس برمجيات أول", company: "Captello", summary: "تصميم وبناء ميزات متكاملة ضمن فريق الهندسة الأساسي، عبر الخدمات الخلفية والتكاملات." },
      { period: "مايو ٢٠٢٥ — الآن", role: "مستشار تطوير", company: "جو باص للنقل", summary: "تقديم المشورة لفريق التطوير في المعمارية وجودة الكود وقابلية التوسع وممارسات التسليم." },
      { period: "سبتمبر ٢٠٢٢ — مايو ٢٠٢٥", role: "رئيس قسم المطورين (للمجموعة)", company: "جو باص للنقل", summary: "قيادة فريق التطوير وتوجيهه، وإطلاق عائلتي تطبيقات Golimo وGomini، وبناء خادم البنية التحتية، وتخطيط Scrum ومراجعة الكود، وإدارة خوادم AWS وWHM، وتوظيف المهندسين." },
      { period: "مايو ٢٠٢٤ — أبريل ٢٠٢٥", role: "قائد تقني", company: "HMASERV", summary: "قيادة التسليم التقني لمشاريع PHP مع بوابات الواجهات البرمجية والتكاملات الخلفية." },
      { period: "فبراير ٢٠٢٤ — يوليو ٢٠٢٤", role: "قائد تقني", company: "Metacodya Software and Digital Solutions", summary: "قيادة فريق عن بُعد في مشاريع JavaScript وتكاملات بوابات الواجهات البرمجية." },
      { period: "ديسمبر ٢٠٢٣ — يناير ٢٠٢٤", role: "مطور برمجيات أول", company: "Aqwas", summary: "تنفيذ أعمال تطوير JavaScript، منها تكاملات بوابات الواجهات البرمجية، في مهمة عن بُعد." },
      { period: "أكتوبر ٢٠٢١ — سبتمبر ٢٠٢٢", role: "قائد فريق تقني", company: "ArabDT", summary: "قيادة فريق Drupal في عمليات النشر الكبيرة وإعادة الهيكلة والتوظيف، بالتعاون مع فريق البنية التحتية في السعودية." },
      { period: "مارس ٢٠٢١ — ديسمبر ٢٠٢١", role: "مهندس برمجيات أول / قائد فريق تقني", company: "AWStreams", summary: "قيادة الفريق التقني في عدة مشاريع، وإدارة خوادم AWS ومستودعات GitHub، والمساهمة في توظيف المهندسين." },
      { period: "مارس ٢٠٢١ — ديسمبر ٢٠٢١", role: "قائد فريق تقني", company: "OZZ", summary: "توجيه التخطيط والتنفيذ وجودة الكود في مشاريع الفريق." },
      { period: "يونيو ٢٠٢٠ — ديسمبر ٢٠٢١", role: "مطور PHP أول", company: "ExpandCart", summary: "العمل في فريق إصلاح الأخطاء، وبناء اختبارات آلية، وقيادة واجهة برمجية مرافقة تتيح للأطراف الخارجية بناء إضافات." },
      { period: "٢٠٢٠", role: "مطور برمجيات أول وقائد فريق تقني مساعد", company: "Innovation Hub", summary: "العمل على الواجهات الأمامية والخلفية، والقيام بدور قائد الفريق عند الحاجة." },
      { period: "٢٠١٩ — ٢٠٢٠", role: "مطور ويب أول", company: "Close2Seven", summary: "بناء مواقع تجارة إلكترونية ولوحات تحكم ونظام موارد بشرية بـ Laravel، والعمل على تحسين محركات البحث لمواقع كبرى في المنطقة." },
      { period: "٢٠١٧ — ٢٠١٩", role: "مطور ويب مبتدئ", company: "Aaser Media", summary: "بناء واجهات بـ HTML وCSS وJavaScript، إلى جانب أعمال WordPress وHubSpot وLaravel." },
    ],
    skillsTitle: "الأدوات",

    projectsTitle: "المشاريع",
    projectsIntro: "منتجات وأنظمة قدتها أو بنيتها.",
    projects: [
      { tag: "جو باص · قيادة", name: "Golimo", description: "قيادة تطوير تطبيقات Golimo للعملاء والسائقين ونقاط البيع والويب." },
      { tag: "جو باص · قيادة", name: "Gomini", description: "قيادة بناء تطبيقات Gomini للعملاء والسائقين والويب، لتوسيع منتجات الشركة." },
      { tag: "جو باص · البنية التحتية", name: "خادم البنية التحتية", description: "المساهمة في تصميم وبناء خادم البنية التحتية للشركة وإعدادات النشر." },
      { tag: "ExpandCart · واجهة برمجية", name: "واجهة برمجية مرافقة", description: "قيادة واجهة برمجية مرافقة لتطبيق الويب تتيح للأطراف الخارجية بناء إضافات." },
      { tag: "ArabDT · Drupal", name: "تطبيقات Drupal", description: "قيادة الفريق في بناء تطبيقات مبنية على Drupal ضمن أعمال الشركة." },
      { tag: "Close2Seven · Laravel", name: "نظام موارد بشرية", description: "بناء نظام لإدارة الموارد والمشاريع والمهام والحضور وسجلات الوقت." },
    ],

    highlightsTitle: "أبرز الإنجازات",
    highlightsIntro: "بعض الأرقام، والتكريمات والتعليم والشهادات.",
    stats: [
      { value: "+٩", label: "سنوات في هندسة البرمجيات" },
      { value: "+٥", label: "سنوات في قيادة فرق التطوير" },
      { value: "١٢", label: "شركة عملت معها" },
      { value: "+٢١٠٠", label: "متابع على LinkedIn" },
    ],
    highlights: [
      { tag: "تكريم · ArabDT", name: "شهادة تقدير", description: "للمساهمات المتميزة في نجاح المشاريع." },
      { tag: "التعليم", name: "بكالوريوس نظم المعلومات الإدارية", description: "المعهد العالي للفنادق والسياحة والحاسب الآلي." },
      { tag: "شهادة", name: "Red Hat System Administration", description: "نيو هورايزونز." },
      { tag: "شهادة", name: "MCSA & MCSE 2016", description: "شهادات مايكروسوفت، نيو هورايزونز." },
    ],

    contactTitle: "خلينا نتكلم",
    contactText: "مشروع، أو فريق محتاج يتبني، أو سؤال عن المسار المهني في البرمجة. ابعتلي رسالة.",
    contactButton: "أرسل بريدًا",
    footer: "م. محمد العربي",
  },
});
