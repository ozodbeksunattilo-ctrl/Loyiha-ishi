const L = (uz, tg, ru, en) => ({ uz, tg, ru, en })

export const initialSiteInfo = {
  title: "MEGA EDU",
  tagline: L(
    "IT, Ingliz tili va Rus tili bo'yicha bolalar va o'smirlar uchun zamonaviy ta'lim markazi",
    "Маркази муосири таълимӣ барои кӯдакон ва наврасон аз рӯи IT, забони англисӣ ва русӣ",
    "Современный образовательный центр для детей и подростков по IT, английскому и русскому языкам",
    "A modern educational center for children and teenagers in IT, English and Russian"
  ),
  headerPhone: "+998 (77) 027 23 00",
  rawPhone: "998770272300",
  heroBadge1: "#fullstack",
  heroBadge2: "#dasturlash",
  heroBadge3: "#ingliz_tili",
  heroBadge4: "#rus_tili",
  heroTitleStart: L(
    "Farzandingizni yutuqli",
    "Фарзанди шуморо ба муваффақ",
    "Подготовьте вашего ребёнка к",
    "Prepare your child for a"
  ),
  heroTitleHighlight: L(
    "kelajak kasblari va tillariga",
    "касбҳои оянда ва забонҳо",
    "профессиям будущего и языкам",
    "successful future of professions and languages"
  ),
  heroTitleEnd: L(
    "tayyorlang",
    "омода кунед",
    "успешно подготовьте",
    "with the right skills"
  ),
  heroSubtitle: L(
    "7 yoshdan 20 yoshgacha bo'lgan bolalar va o'smirlar uchun IT, Ingliz tili hamda Rus tili bo'yicha to'liq ta'lim dasturlari.",
    "Барномаҳои пурраи таълимӣ аз рӯи IT, забони англисӣ ва русӣ барои кӯдакон ва наврасони 7 то 20 сола.",
    "Полные образовательные программы по IT, английскому и русскому языкам для детей и подростков от 7 до 20 лет.",
    "Full educational programs in IT, English and Russian for children and teenagers from 7 to 20 years old."
  ),
  studentCountText: L(
    "2 500 dan ortiq o'quvchi ta'lim olmoqda",
    "зиёда аз 2 500 хонанда таҳсил мекунанд",
    "более 2 500 учеников обучаются",
    "more than 2,500 students are learning"
  ),
  heroImageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80",
  promoYoutubeUrl: "https://www.youtube.com/watch?v=VUhWQg6RAYs",
  telegramUrl: "https://t.me/megaedu_uz",
  instagramUrl: "https://instagram.com/megaedu_uz",
  youtubeUrl: "https://youtube.com/@megaedu_uz",
  address: L(
    "Toshkent sh., Chilonzor tumani, Bunyodkor ko'chasi 14",
    "ш. Тошкент, ноҳияи Чилонзор, кӯчаи Бунёдкор 14",
    "г. Ташкент, Чиланзарский район, ул. Бунёдкор 14",
    "Tashkent, Chilanzar district, Bunyodkor street 14"
  ),
  workingHours: L(
    "Dushanba - Shanba: 09:00 - 20:00",
    "Душанбе - Шанбе: 09:00 - 20:00",
    "Понедельник - Суббота: 09:00 - 20:00",
    "Monday - Saturday: 09:00 - 20:00"
  )
};

export const initialAdvantages = [
  {
    id: "adv1",
    num: "01",
    title: L(
      "Eng zamonaviy ta'lim markazi",
      "Маркази муосири таълимӣ",
      "Самый современный образовательный центр",
      "The most modern educational center"
    ),
    desc: L(
      "MEGA EDU – o'quvchilar soni va ta'lim sifatiga ko'ra yetakchi IT va tillar akademiyalaridan biri.",
      "MEGA EDU – яке аз академияҳои пешқадами IT ва забонҳо аз рӯи шумораи хонандагон ва сифати таълим.",
      "MEGA EDU – одна из ведущих академий IT и языков по числу учеников и качеству обучения.",
      "MEGA EDU – one of the leading IT and language academies in terms of student numbers and teaching quality."
    )
  },
  {
    id: "adv2",
    num: "02",
    title: L(
      "7 yoshdan 20 yoshgacha bo'lganlar uchun",
      "Барои 7 то 20 сола",
      "Для детей от 7 до 20 лет",
      "For ages 7 to 20"
    ),
    desc: L(
      "Bolada texnik aql yoki til bilimi noldan boshlab shakllantiriladi. Dastur yosh toifalariga moslangan.",
      "Дар кӯдак ақли техникӣ ё дониши забон аз сифр ташаккул меёбад. Барнома мувофиқи синну сол аст.",
      "Технический склад ума или знание языка у ребёнка формируется с нуля. Программа адаптирована по возрастам.",
      "A child's technical mind or language skills are built from scratch. The program is adapted by age."
    )
  },
  {
    id: "adv3",
    num: "03",
    title: L(
      "Gamifikatsiya tufayli yuqori ko'rsatkichlar",
      "Натиҷаҳои баланд ба туфайли геймификация",
      "Высокие результаты благодаря геймификации",
      "High results thanks to gamification"
    ),
    desc: L(
      "O'quv jarayonidagi o'yin mexanikasi tufayli bizda dars samaradorligi va davomati juda yuqori.",
      "Ба туфайли механикаи бозӣ дар раванди таълим самаранокӣ ва ҳузури дарсҳо хеле баланд аст.",
      "Благодаря игровой механике в учебном процессе у нас очень высокие эффективность и посещаемость уроков.",
      "Thanks to game mechanics in the learning process, our lesson efficiency and attendance are very high."
    )
  },
  {
    id: "adv4",
    num: "04",
    title: L(
      "5+ yillik tajribaga ega mentorlar",
      "Менторҳо бо таҷрибаи 5+ сол",
      "Менторы с опытом 5+ лет",
      "Mentors with 5+ years of experience"
    ),
    desc: L(
      "Darslarni sohada real amaliyotga ega kuchli dasturchilar va IELTS 8+ instruktorlar olib boradi.",
      "Дарсҳоро барномасозони пурқувват бо амалияи воқеӣ дар соҳа ва инструкторони IELTS 8+ мегузаронанд.",
      "Уроки ведут сильные программисты с реальной практикой и инструкторы IELTS 8+.",
      "Lessons are led by strong programmers with real practice and IELTS 8+ instructors."
    )
  },
  {
    id: "adv5",
    num: "05",
    title: L(
      "Rasmiy va xalqaro sertifikat",
      "Сертификати расмӣ ва байналмилалӣ",
      "Официальный и международный сертификат",
      "Official and international certificate"
    ),
    desc: L(
      "Kursni muvaffaqiyatli tamomlagan barcha o'quvchilarga xalqaro standartlarga mos rasmiy sertifikat topshiriladi.",
      "Ба ҳамаи хонандагоне, ки курсиро бомуваффақият анҷом доданд, сертификати расмии мувофиқ ба стандартҳои байналмилалӣ супорида мешавад.",
      "Всем ученикам, успешно завершившим курс, вручается официальный сертификат, соответствующий международным стандартам.",
      "All students who successfully complete the course are awarded an official certificate meeting international standards."
    )
  },
  {
    id: "adv6",
    num: "06",
    title: L(
      "Real loyihalar va portfolio",
      "Лоиҳаҳои воқеӣ ва портфолио",
      "Реальные проекты и портфолио",
      "Real projects and portfolio"
    ),
    desc: L(
      "O'quvchilar nazariya bilan cheklanib qolmay, o'zlarining shaxsiy veb-sayt va dasturlarini ishlab chiqishadi.",
      "Хонандагон танҳо бо назария маҳдуд намешаванд, балки сомонаҳо ва барномаҳои шахсии худро таҳия мекунанд.",
      "Ученики не ограничиваются теорией, а разрабатывают собственные сайты и программы.",
      "Students don't just study theory — they build their own websites and programs."
    )
  }
];

export const initialCourses = [
  {
    id: "c1",
    category: "IT",
    title: L(
      "IT KIDS & ROBOTOTEXNIKA",
      "IT KIDS & РОБОТОТЕХНИКА",
      "IT KIDS & РОБОТОТЕХНИКА",
      "IT KIDS & ROBOTICS"
    ),
    ageRange: L("7-11 yosh", "7-11 сола", "7-11 лет", "7-11 years"),
    subtitle: L(
      "Robototexnika va kompyuter savodxonligi orqali IT olamiga ilk qadamlar",
      "Қадамҳои аввал ба олами IT тавассути робототехника ва саводнокии компютерӣ",
      "Первые шаги в мир IT через робототехнику и компьютерную грамотность",
      "First steps into the IT world through robotics and computer literacy"
    ),
    description: L(
      "Farzandingiz IT'ni o'yin orqali o'rganadi – robotlar yig'adi, dasturlaydi va aqlli qurilmalar yaratadi. C++ va Scratch loyihalari, Arduino platformasi bilan ishlashni egallaydi.",
      "Фарзанди шумо IT-ро тавассути бозӣ меомӯзад – роботҳо месозад, барномарезӣ мекунад ва дастгоҳҳои интеллектуалӣ месозад. Лоиҳаҳои C++ ва Scratch, кор бо платформаи Arduino-ро азхуд мекунад.",
      "Ваш ребёнок изучает IT через игру – собирает роботов, программирует и создаёт умные устройства. Осваивает проекты C++ и Scratch, работу с платформой Arduino.",
      "Your child learns IT through play – builds robots, programs and creates smart devices. Masters C++ and Scratch projects, working with the Arduino platform."
    ),
    duration: "6 oy",
    lessonsPerWeek: L("Haftada 3 kun (2 soatdan)", "ҳафтае 3 рӯз (аз 2 соат)", "3 дня в неделю (по 2 часа)", "3 days a week (2 hours each)"),
    price: "450 000 so'm / oy",
    popular: true,
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "c2",
    category: "IT",
    title: L(
      "WEB DASTURLASH & AI (FRONTEND + BACKEND)",
      "WEB БАРНОМАСОЗӢ & AI (FRONTEND + BACKEND)",
      "WEB-РАЗРАБОТКА & AI (FRONTEND + BACKEND)",
      "WEB DEVELOPMENT & AI (FRONTEND + BACKEND)"
    ),
    ageRange: L("12-18 yosh", "12-18 сола", "12-18 лет", "12-18 years"),
    subtitle: L(
      "Saytlar, Telegram botlar va Sun'iy intellekt tizimlari yaratish",
      "Сохтани сомонаҳо, ботҳои Telegram ва системаҳои зеҳни сунъӣ",
      "Создание сайтов, Telegram-ботов и систем искусственного интеллекта",
      "Building websites, Telegram bots and AI systems"
    ),
    description: L(
      "Farzandingiz veb-saytlar yaratishni, Telegram botlar tuzishni, ma'lumotlar bazasi bilan ishlashni va AI'dan foydalanishni o'rganadi. HTML, CSS, JavaScript, React va Python bo'yicha mustahkam ko'nikma hosil qiladi.",
      "Фарзанди шумо сохтани сомонаҳо, ботҳои Telegram, кор бо пойгоҳи додаҳо ва истифодаи AI-ро меомӯзад. Малакаи устувори HTML, CSS, JavaScript, React ва Python-ро ба даст меорад.",
      "Ваш ребёнок научится создавать сайты, Telegram-ботов, работать с базами данных и использовать AI. Получит прочные навыки HTML, CSS, JavaScript, React и Python.",
      "Your child learns to build websites, Telegram bots, work with databases and use AI. Gains strong skills in HTML, CSS, JavaScript, React and Python."
    ),
    duration: "9 oy",
    lessonsPerWeek: L("Haftada 3 kun (2 soatdan)", "ҳафтае 3 рӯз (аз 2 соат)", "3 дня в неделю (по 2 часа)", "3 days a week (2 hours each)"),
    price: "600 000 so'm / oy",
    popular: true,
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "c3",
    category: "IT",
    title: L(
      "PYTHON & BACKEND DEVELOPMENT",
      "PYTHON & BACKEND DEVELOPMENT",
      "PYTHON & BACKEND DEVELOPMENT",
      "PYTHON & BACKEND DEVELOPMENT"
    ),
    ageRange: L("14+ yosh", "14+ сола", "14+ лет", "14+ years"),
    subtitle: L(
      "Kompaniya darajasidagi murakkab tizimlar va API backend yaratish",
      "Сохтани системаҳои мураккаб дар сатҳи ширкат ва backend API",
      "Создание сложных систем корпоративного уровня и API backend",
      "Building enterprise-level complex systems and API backend"
    ),
    description: L(
      "Python, Django, FastAPI, PostgreSQL va Git bilan professional darajada server tomonini dasturlash. Algoritmlar va ma'lumotlar tuzilmasi bo'yicha amaliy tajriba.",
      "Барномасозии сарвер дар сатҳи профессионалӣ бо Python, Django, FastAPI, PostgreSQL ва Git. Таҷрибаи амалӣ аз рӯи алгоритмҳо ва сохтори додаҳо.",
      "Профессиональная разработка серверной части на Python, Django, FastAPI, PostgreSQL и Git. Практический опыт по алгоритмам и структурам данных.",
      "Professional server-side development with Python, Django, FastAPI, PostgreSQL and Git. Hands-on experience with algorithms and data structures."
    ),
    duration: "8 oy",
    lessonsPerWeek: L("Haftada 3 kun (2 soatdan)", "ҳафтае 3 рӯз (аз 2 соат)", "3 дня в неделю (по 2 часа)", "3 days a week (2 hours each)"),
    price: "650 000 so'm / oy",
    popular: false,
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "c4",
    category: "Ingliz tili",
    title: L(
      "GENERAL ENGLISH & SPEAKING CLUB",
      "GENERAL ENGLISH & SPEAKING CLUB",
      "GENERAL ENGLISH & SPEAKING CLUB",
      "GENERAL ENGLISH & SPEAKING CLUB"
    ),
    ageRange: L("8-18 yosh", "8-18 сола", "8-18 лет", "8-18 years"),
    subtitle: L(
      "Erkin so'zlashuv va noldan grammatikani mustahkamlash",
      "Гуфтугӯи озод ва мустаҳкам кардани грамматика аз сифр",
      "Свободное общение и закрепление грамматики с нуля",
      "Free speaking and building grammar from scratch"
    ),
    description: L(
      "Interaktiv darslar va har haftalik native speakerlar bilan Speaking Club. O'quvchilar real hayotiy vaziyatlarda ingliz tilida ravon gapirishni boshlaydilar.",
      "Дарсҳои интерактивӣ ва Speaking Club ҳар ҳафта бо native speakerҳо. Хонандагон ба забони англисӣ дар вазъиятҳои воқеии ҳаёт равон гап заданро оғоз мекунанд.",
      "Интерактивные уроки и еженедельный Speaking Club с носителями языка. Ученики начинают свободно говорить по-английски в реальных ситуациях.",
      "Interactive lessons and a weekly Speaking Club with native speakers. Students begin speaking English fluently in real-life situations."
    ),
    duration: "6 oy",
    lessonsPerWeek: L("Haftada 3 kun (1.5 soatdan)", "ҳафтае 3 рӯз (аз 1.5 соат)", "3 дня в неделю (по 1.5 часа)", "3 days a week (1.5 hours each)"),
    price: "400 000 so'm / oy",
    popular: true,
    image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "c5",
    category: "Ingliz tili",
    title: L(
      "IELTS ACCELERATOR (BAND 7.5+)",
      "IELTS ACCELERATOR (BAND 7.5+)",
      "IELTS ACCELERATOR (BAND 7.5+)",
      "IELTS ACCELERATOR (BAND 7.5+)"
    ),
    ageRange: L("14+ yosh", "14+ сола", "14+ лет", "14+ years"),
    subtitle: L(
      "Xalqaro universitetlar hamda grantlar uchun maqsadli IELTS tayyorgarlik",
      "Тайёрии мақсадноки IELTS барои донишгоҳҳои байналмилалӣ ва грантҳо",
      "Целевая подготовка к IELTS для международных университетов и грантов",
      "Targeted IELTS preparation for international universities and grants"
    ),
    description: L(
      "Listening, Reading, Writing hamda Speaking bo'yicha maxsus strategiyalar. Har oy bepul Mock IELTS imtihonlari va individual feedback.",
      "Стратегияҳои махсус аз рӯи Listening, Reading, Writing ва Speaking. ҳар моҳ имтиҳонҳои ройгони Mock IELTS ва фидбекҳои инфиродӣ.",
      "Специальные стратегии по Listening, Reading, Writing и Speaking. Ежемесячные бесплатные Mock IELTS и индивидуальный feedback.",
      "Special strategies for Listening, Reading, Writing and Speaking. Monthly free Mock IELTS exams and individual feedback."
    ),
    duration: "4-6 oy",
    lessonsPerWeek: L("Haftada 3 kun (2 soatdan)", "ҳафтае 3 рӯз (аз 2 соат)", "3 дня в неделю (по 2 часа)", "3 days a week (2 hours each)"),
    price: "550 000 so'm / oy",
    popular: true,
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "c6",
    category: "Rus tili",
    title: L(
      "RUS TILI INTENSIV (SO'ZLASHUV AMALIYOTI)",
      "ЗАБОНИ РУСӢ ИНТЕНСИВ (АМАЛИЯИ ГУФТУГӮ)",
      "РУССКИЙ ИНТЕНСИВ (РАЗГОВОРНАЯ ПРАКТИКА)",
      "RUSSIAN INTENSIVE (SPEAKING PRACTICE)"
    ),
    ageRange: L("Barcha yoshdagilar", "ҳамаи синну солҳо", "Все возраста", "All ages"),
    subtitle: L(
      "Qisqa muddatda rus tilida erkin va to'g'ri muomala qilish",
      "Дар муддати кӯтоҳ ба забони русӣ озод ва дуруст муошират кардан",
      "За короткий срок свободно и правильно общаться на русском",
      "Communicate freely and correctly in Russian in a short time"
    ),
    description: L(
      "Quruq grammatikadan qochgan holda, muloqotga yo'naltirilgan intensiv darslar. Ish joyi va o'qish uchun amaliy sozlashuv mashg'ulotlari.",
      "Дарсҳои интенсивии равона ба муошират, бе грамматикаи хушк. Машқҳои амалӣ барои ҷои кор ва таҳсил.",
      "Интенсивные уроки, ориентированные на общение, без сухой грамматики. Практические занятия для работы и учёбы.",
      "Intensive communication-focused lessons without dry grammar. Practical sessions for work and study."
    ),
    duration: "3-5 oy",
    lessonsPerWeek: L("Haftada 3 kun (1.5 soatdan)", "ҳафтае 3 рӯз (аз 1.5 соат)", "3 дня в неделю (по 1.5 часа)", "3 days a week (1.5 hours each)"),
    price: "380 000 so'm / oy",
    popular: false,
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "c7",
    category: "Biologiya",
    title: L(
      "BIOLOGIYA (SUN & MILLIY SERTIFIKAT)",
      "БИОЛОГИЯ (SUN & СЕРТИФИКАТИ МИЛЛӢ)",
      "БИОЛОГИЯ (SUN И НАЦИОНАЛЬНЫЙ СЕРТИФИКАТ)",
      "BIOLOGY (SUN & NATIONAL CERTIFICATE)"
    ),
    ageRange: L("14+ yosh", "14+ сола", "14+ лет", "14+ years"),
    subtitle: L(
      "Biologiya fanidan davlat standartlari va imtihonlarga tayyorgarlik",
      "Тайёрӣ ба стандартҳои давлатӣ ва имтиҳонҳо аз фанни биология",
      "Подготовка к госстандартам и экзаменам по биологии",
      "Preparation for state standards and exams in biology"
    ),
    description: L(
      "SUN (Oliy ta'lim milliy testi) va Milliy sertifikat talablariga mos biologiya dasturi. Genetika, anatomiya, botanika va zoologiya bo'limlari testlar asosida mustahkamlanadi.",
      "Барномаи биология мувофиқи талаботи SUN (Тести миллии таҳсилоти олӣ) ва Сертификати миллӣ. Қисмҳои генетика, анатомия, ботаника ва зоология дар асоси тестҳо мустаҳкам карда мешаванд.",
      "Программа по биологии согласно требованиям SUN и Национального сертификата. Разделы генетики, анатомии, ботаники и зоологии закрепляются тестами.",
      "Biology program meeting the SUN and National Certificate requirements. Genetics, anatomy, botany and zoology sections are reinforced with tests."
    ),
    duration: "8 oy",
    lessonsPerWeek: L("Haftada 3 kun (1.5 soatdan)", "ҳафтае 3 рӯз (аз 1.5 соат)", "3 дня в неделю (по 1.5 часа)", "3 days a week (1.5 hours each)"),
    price: "350 000 so'm / oy",
    popular: true,
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "c8",
    category: "Fizika",
    title: L(
      "FIZIKA (FAN OLIMPIADASI & DTM)",
      "ФИЗИКА (ОЛИМПИАДАИ ФАННӢ & DTM)",
      "ФИЗИКА (ОЛИМПИАДА И DTM)",
      "PHYSICS (SCIENCE OLYMPIAD & DTM)"
    ),
    ageRange: L("14+ yosh", "14+ сола", "14+ лет", "14+ years"),
    subtitle: L(
      "Fizika olimpiadasi va oliy ta'lim testlariga chuqur tayyorgarlik",
      "Тайёрии амиқ ба олимпиадаи физика ва тестҳои таҳсилоти олӣ",
      "Глубокая подготовка к олимпиаде по физике и тестам вузов",
      "Deep preparation for physics olympiads and higher education tests"
    ),
    description: L(
      "Mexanika, elektromagnetizm, optika va termodinamika bo'limlari yuqori saviyada. DTM testlari hamda fan olimpiadalarida qatnashish uchun mantiqiy masalalar yechish amaliyoti.",
      "Қисмҳои механика, электромагнетизм, оптика ва термодинамика дар сатҳи баланд. Амалияи ҳалли масъалаҳои мантиқӣ барои тестҳои DTM ва олимпиадаҳои фаннӣ.",
      "Разделы механики, электромагнетизма, оптики и термодинамики на высоком уровне. Практика решения логических задач для тестов DTM и олимпиад.",
      "High-level mechanics, electromagnetism, optics and thermodynamics. Practice solving logic problems for DTM tests and olympiads."
    ),
    duration: "9 oy",
    lessonsPerWeek: L("Haftada 3 kun (2 soatdan)", "ҳафтае 3 рӯз (аз 2 соат)", "3 дня в неделю (по 2 часа)", "3 days a week (2 hours each)"),
    price: "400 000 so'm / oy",
    popular: true,
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "c9",
    category: "Kimyo",
    title: L(
      "KIMYO (SUN & MILLIY SERTIFIKAT)",
      "КИМИЁ (SUN & СЕРТИФИКАТИ МИЛЛӢ)",
      "ХИМИЯ (SUN И НАЦИОНАЛЬНЫЙ СЕРТИФИКАТ)",
      "CHEMISTRY (SUN & NATIONAL CERTIFICATE)"
    ),
    ageRange: L("14+ yosh", "14+ сола", "14+ лет", "14+ years"),
    subtitle: L(
      "Kimyo fanidan nazariy bilim va amaliy laboratoriya mashg'ulotlari",
      "Дониши назарӣ ва машқҳои амалии лабораторӣ аз кимиё",
      "Теоретические знания и практические лабораторные занятия по химии",
      "Theoretical knowledge and practical laboratory sessions in chemistry"
    ),
    description: L(
      "Organik va anorganik kimyo, elementlar davriy sistemasi, reaksiya tenglamalari. SUN imtihoni va Milliy sertifikatga mos masalali amaliyot bilan.",
      "Кимиёи органикӣ ва ғайриорганикӣ, системаи даврии элементҳо, муодилаҳои реаксия. Бо амалияи масъалаҳо мувофиқи имтиҳони SUN ва Сертификати миллӣ.",
      "Органическая и неорганическая химия, периодическая система, уравнения реакций. Практика с задачами по SUN и Национальному сертификату.",
      "Organic and inorganic chemistry, the periodic table, reaction equations. Problem-based practice aligned with SUN and National Certificate."
    ),
    duration: "8 oy",
    lessonsPerWeek: L("Haftada 3 kun (1.5 soatdan)", "ҳафтае 3 рӯз (аз 1.5 соат)", "3 дня в неделю (по 1.5 часа)", "3 days a week (1.5 hours each)"),
    price: "350 000 so'm / oy",
    popular: false,
    image: "https://images.unsplash.com/photo-1603126857599-f6e1573592d6?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "c10",
    category: "Tarix",
    title: L(
      "TARIX (MILLIY SERTIFIKAT & DTM)",
      "ТАЪРИХ (СЕРТИФИКАТИ МИЛЛӢ & DTM)",
      "ИСТОРИЯ (НАЦИОНАЛЬНЫЙ СЕРТИФИКАТ И DTM)",
      "HISTORY (NATIONAL CERTIFICATE & DTM)"
    ),
    ageRange: L("14+ yosh", "14+ сола", "14+ лет", "14+ years"),
    subtitle: L(
      "O'zbekiston va jahon tarixi bo'yicha imtihonlarga tayyorgarlik",
      "Тайёрӣ ба имтиҳонҳо аз таърихи Ўзбекистон ва ҷаҳон",
      "Подготовка к экзаменам по истории Узбекистана и мира",
      "Preparation for exams in the history of Uzbekistan and the world"
    ),
    description: L(
      "O'zbekiston tarixi hamda jahon tarixi xronologik tartibda, xarita va hujjatlar bilan. Milliy sertifikat va DTM testlariga mos konspekt asosida tayyorgarlik.",
      "Таърихи Ўзбекистон ва таърихи ҷаҳон дар тартиби хронологӣ, бо харита ва ҳуҷҷатҳо. Тайёрӣ дар асоси конспект мувофиқи тестҳои Сертификати миллӣ ва DTM.",
      "История Узбекистана и всемирная история в хронологическом порядке, с картами и документами. Подготовка по конспекту под Национальный сертификат и DTM.",
      "The history of Uzbekistan and world history in chronological order, with maps and documents. Preparation based on summaries for the National Certificate and DTM."
    ),
    duration: "7 oy",
    lessonsPerWeek: L("Haftada 3 kun (1.5 soatdan)", "ҳафтае 3 рӯз (аз 1.5 соат)", "3 дня в неделю (по 1.5 часа)", "3 days a week (1.5 hours each)"),
    price: "350 000 so'm / oy",
    popular: false,
    image: "https://images.unsplash.com/photo-1461988320302-91bde64fc8e4?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "c11",
    category: "Huquq",
    title: L(
      "HUQUQ ASOSLARI (YOSH HUQUQSHUNOS)",
      "АСОСҲОИ ҲУҚУҚ (ҲУҚУҚШИНОСИ ҶАВОН)",
      "ОСНОВЫ ПРАВА (МОЛОДОЙ ЮРИСТ)",
      "FUNDAMENTALS OF LAW (YOUNG LAWYER)"
    ),
    ageRange: L("13+ yosh", "13+ сола", "13+ лет", "13+ years"),
    subtitle: L(
      "Huquqiy savodxonlik va konstitutsiya asoslari",
      "Саводнокии ҳуқуқӣ ва асосҳои конститутсия",
      "Правовая грамотность и основы конституции",
      "Legal literacy and fundamentals of the constitution"
    ),
    description: L(
      "O'zbekiston Respublikasi Konstitutsiyasi, inson huquqlari, fuqarolik va jinoyat huquqi asoslari. Yosh huquqshunoslar olimpiadasiga tayyorgarlik va real hayotiy vaziyatlarni tahlil qilish.",
      "Конститутсияи Ҷумҳурии Ўзбекистон, ҳуқуқҳои инсон, асосҳои ҳуқуқи гражданӣ ва ҷиноятӣ. Тайёрӣ ба олимпиадаи ҳуқуқшиносони ҷавон ва таҳлили вазъиятҳои воқеии ҳаёт.",
      "Конституция Республики Узбекистан, права человека, основы гражданского и уголовного права. Подготовка к олимпиаде молодых юристов и разбор реальных ситуаций.",
      "The Constitution of the Republic of Uzbekistan, human rights, fundamentals of civil and criminal law. Preparation for young lawyers olympiad and analysis of real situations."
    ),
    duration: "6 oy",
    lessonsPerWeek: L("Haftada 2 kun (1.5 soatdan)", "ҳафтае 2 рӯз (аз 1.5 соат)", "2 дня в неделю (по 1.5 часа)", "2 days a week (1.5 hours each)"),
    price: "300 000 so'm / oy",
    popular: false,
    image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=600&q=80"
  }
];

export const initialCertificates = [
  {
    id: "cert1",
    title: L(
      "MEGA EDU - IT Fullstack Bitiruv Sertifikati",
      "MEGA EDU - СЕРТИФИКАТИ ХАТМ IT FULLSTACK",
      "MEGA EDU - ДИПЛОМ IT FULLSTACK",
      "MEGA EDU - IT FULLSTACK GRADUATE CERTIFICATE"
    ),
    course: L(
      "Web Dasturlash (Frontend + Backend)",
      "Web барномасозӣ (Frontend + Backend)",
      "Веб-разработка (Frontend + Backend)",
      "Web Development (Frontend + Backend)"
    ),
    issuedTo: "Azizbek Rahimov",
    year: "2025",
    badge: L(
      "Rasmiy Sertifikat",
      "Сертификати расмӣ",
      "Официальный сертификат",
      "Official Certificate"
    ),
    image: "https://images.unsplash.com/photo-1589330694653-ded6df03f754?auto=format&fit=crop&w=600&q=80",
    description: L(
      "O'quvchi to'liq 9 oylik amaliy dasturni yakunlab, o'zining shaxsiy portfoliosi va real veb loyihasini muvaffaqiyatli topshirdi.",
      "Хонанда барномаи пурраи 9-моҳаро анҷом дода, портфолио ва лоиҳаи воқеии вебии худро бомуваффақият супорид.",
      "Ученик завершил полную 9-месячную практическую программу и успешно сдал личное портфолио и реальный веб-проект.",
      "The student completed the full 9-month practical program and successfully submitted their personal portfolio and real web project."
    )
  },
  {
    id: "cert2",
    title: L(
      "IELTS 7.5 High Achievement Certificate",
      "IELTS 7.5 СЕРТИФИКАТИ БАЛАНД",
      "IELTS 7.5 СЕРТИФИКАТ ВЫСОКОГО ДОСТИЖЕНИЯ",
      "IELTS 7.5 HIGH ACHIEVEMENT CERTIFICATE"
    ),
    course: "IELTS Intensive",
    issuedTo: "Malika Umarova",
    year: "2025",
    badge: L(
      "Xalqaro Imtihon",
      "Имтиҳони байналмилалӣ",
      "Международный экзамен",
      "International Exam"
    ),
    image: "https://images.unsplash.com/photo-1579389083078-4e7018379f7e?auto=format&fit=crop&w=600&q=80",
    description: L(
      "O'quvchi MEGA EDU IELTS Accelerator kursi natijasida birinchi urinishda 7.5 ballni qo'lga kiritdi.",
      "Хонанда дар натиҷаи курси IELTS Accelerator-и MEGA EDU дар кӯшиши аввал 7.5 холро ба даст овард.",
      "Ученик набрал 7.5 балла с первой попытки в результате курса IELTS Accelerator в MEGA EDU.",
      "The student achieved a 7.5 band on the first attempt as a result of the MEGA EDU IELTS Accelerator course."
    )
  },
  {
    id: "cert3",
    title: L(
      "Business & Conversational Russian Certificate",
      "СЕРТИФИКАТИ РУСӢ БАРОИ БИЗНЕС ВА ГУФТУГӮ",
      "СЕРТИФИКАТ ДЕЛОВОГО И РАЗГОВОРНОГО РУССКОГО",
      "BUSINESS & CONVERSATIONAL RUSSIAN CERTIFICATE"
    ),
    course: L(
      "Rus Tili Intensiv",
      "Забони русӣ интенсив",
      "Русский интенсив",
      "Russian Intensive"
    ),
    issuedTo: "Jasur Ergachev",
    year: "2025",
    badge: L(
      "Sertifikatlangan",
      "Сертификатӣ",
      "Сертифицировано",
      "Certified"
    ),
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=600&q=80",
    description: L(
      "Rus tilida erkin so'zlashuv va biznes muloqot kursini 95% a'lo baho bilan yakunladi.",
      "Курси гуфтугӯи озод ва муоширати бизнесӣ ба забони русӣ бо баҳои аълои 95% анҷом дод.",
      "Завершил курс свободного общения и деловой коммуникации на русском языке с отличной оценкой 95%.",
      "Completed the free speaking and business communication course in Russian with a 95% excellent grade."
    )
  }
];

export const initialReviews = [
  {
    id: "r1",
    parentName: "Munisa Fayzullayeva",
    studentName: L("Javohir (11 yosh)", "Ҷавоҳир (11 сола)", "Жавохир (11 лет)", "Javohir (11 years)"),
    course: L(
      "IT Kids & Dasturlash",
      "IT Kids & барномасозӣ",
      "IT Kids и программирование",
      "IT Kids & Programming"
    ),
    comment: L(
      "Farzandim IT sohasiga qiziqib qoldi, robotlar yig'ish va dasturlashni o'rganyapti. O'qituvchilar juda tajribali va bemalol bolasini topshirishim mumkin.",
      "Фарзанди ман ба соҳаи IT қизиқ шуд, роботҳо сохтан ва барномасозиро меомӯзад. Муаллимон хеле ботаҷрибаанд ва ман бо осонӣ фарзандамро супорида метавонам.",
      "Мой ребёнок заинтересовался IT, учится собирать роботов и программировать. Преподаватели очень опытные, могу смело доверить им ребёнка.",
      "My child became interested in IT and is learning to build robots and program. Teachers are very experienced and I can confidently leave my child with them."
    ),
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
    videoThumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=500&q=80",
    youtubeUrl: "https://www.youtube.com/watch?v=RDovBk4v0Ow"
  },
  {
    id: "r2",
    parentName: "Nazir Rixsiboev",
    studentName: L("Sardor (15 yosh)", "Сардор (15 сола)", "Сардор (15 лет)", "Sardor (15 years)"),
    course: "Web Dasturlash",
    comment: L(
      "O'g'lim veb-sayt yaratishni o'rgandi va endi o'z loyihalarini ishlab chiqmoqda. Kelajakda dasturchi bo'laman deb aytadi. MEGA EDU ustozlariga rahmat!",
      "Писари ман сохтани сомонаро ёд гирифт ва ҳоло лоиҳаҳои худашро таҳия мекунад. Мегӯяд, оянда барномасоз мешавам. Раҳмат ба устодони MEGA EDU!",
      "Мой сын научился создавать сайты и теперь разрабатывает собственные проекты. Говорит, что станет программистом. Спасибо преподавателям MEGA EDU!",
      "My son learned to build websites and is now developing his own projects. He says he will become a programmer. Thank you to the MEGA EDU teachers!"
    ),
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80",
    videoThumbnail: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=500&q=80",
    youtubeUrl: "https://www.youtube.com/watch?v=nZ3deR3BSKc"
  },
  {
    id: "r3",
    parentName: "Baxrom Abduqayumov",
    studentName: L("Madina (14 yosh)", "Мадина (14 сола)", "Мадина (14 лет)", "Madina (14 years)"),
    course: L(
      "IELTS & Ingliz tili",
      "IELTS & забони англисӣ",
      "IELTS и английский язык",
      "IELTS & English"
    ),
    comment: L(
      "Qizim ingliz tilida erkin gapira boshladi va IELTS imtihoniga tayyorlanmoqda. Ustozlar individual yondashuv bilan har bir o'quvchiga e'tibor berishadi.",
      "Духтари ман ба забони англисӣ озод гап зада шуд ва ба имтиҳони IELTS омода мешавад. Устодон ба ҳар як хонанда бо равиши инфиродӣ диққат медиҳанд.",
      "Моя дочь начала свободно говорить по-английски и готовится к IELTS. Преподаватели уделяют внимание каждому ученику с индивидуальным подходом.",
      "My daughter started speaking English fluently and is preparing for IELTS. Teachers give individual attention to every student."
    ),
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80",
    videoThumbnail: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=500&q=80",
    youtubeUrl: "https://www.youtube.com/watch?v=GSnWFA3qnAg"
  },
  {
    id: "r4",
    parentName: "Dilafruz Maksumova",
    studentName: L("Kamron (10 yosh)", "Камрон (10 сола)", "Камрон (10 лет)", "Kamron (10 years)"),
    course: L(
      "Rus Tili & IT Kids",
      "Забони русӣ & IT Kids",
      "Русский язык и IT Kids",
      "Russian & IT Kids"
    ),
    comment: L(
      "Farzandim ikki yo'nalishda – rus tili va IT bo'yicha o'rganmoqda. Darslar o'yin tarzida o'tadi va natija juda yaxshi. Hammaga tavsiya qilaman!",
      "Фарзанди ман дар ду самт – забони русӣ ва IT меомӯзад. Дарсҳо ба тарзи бозӣ мегузаранд ва натиҷа хеле хуб аст. Ба ҳама тавсия медиҳам!",
      "Мой ребёнок учится по двум направлениям — русскому языку и IT. Уроки проходят в игровой форме, результат очень хороший. Рекомендую всем!",
      "My child is learning two directions — Russian and IT. Lessons are in game form and the result is very good. I recommend it to everyone!"
    ),
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80",
    videoThumbnail: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=500&q=80",
    youtubeUrl: "https://www.youtube.com/watch?v=2HGMhFLbre4"
  }
];

export const initialTeachers = [
  {
    id: "t1",
    name: "Bunyodbek Bekmuxammedov",
    role: L(
      "Front-End Developer & IT Lead",
      "Front-End Developer & IT Lead",
      "Front-End разработчик и IT-лид",
      "Front-End Developer & IT Lead"
    ),
    subject: "IT",
    experience: L(
      "5 yillik tajriba",
      "5 соли таҷриба",
      "5 лет опыта",
      "5 years experience"
    ),
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "t2",
    name: "Amirxon Ibaydillayev",
    role: L(
      "Full-Stack Mentor",
      "Full-Stack Mentor",
      "Ментор Full-Stack",
      "Full-Stack Mentor"
    ),
    subject: "IT",
    experience: L("4 yillik tajriba", "4 соли таҷриба", "4 года опыта", "4 years experience"),
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "t3",
    name: "Sharifjon Mo'minov",
    role: L(
      "Back-End Senior Specialist",
      "Back-End Senior Specialist",
      "Старший специалист Back-End",
      "Back-End Senior Specialist"
    ),
    subject: "IT",
    experience: L("6 yillik tajriba", "6 соли таҷриба", "6 лет опыта", "6 years experience"),
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "t4",
    name: "Elena Smirnova",
    role: L(
      "IELTS Master & Head Trainer",
      "IELTS Master & Head Trainer",
      "IELTS Master и главный тренер",
      "IELTS Master & Head Trainer"
    ),
    subject: "Ingliz tili",
    experience: L("7 yillik tajriba (IELTS 8.5)", "7 соли таҷриба (IELTS 8.5)", "7 лет опыта (IELTS 8.5)", "7 years experience (IELTS 8.5)"),
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "t5",
    name: "Azamat Azamatov",
    role: L(
      "Rus Tili va Nutq Madaniyati Ustozi",
      "Устоди забони русӣ ва фарҳанги нутқ",
      "Преподаватель русского и культуры речи",
      "Russian Language and Speech Culture Teacher"
    ),
    subject: "Rus tili",
    experience: L("5 yillik tajriba", "5 соли таҷриба", "5 лет опыта", "5 years experience"),
    image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "t6",
    name: "Gulchehra Rustamova",
    role: L(
      "Biologiya Fani O'qituvchisi",
      "Муаллими фанни биология",
      "Преподаватель биологии",
      "Biology Teacher"
    ),
    subject: "Biologiya",
    experience: L("8 yillik tajriba", "8 соли таҷриба", "8 лет опыта", "8 years experience"),
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "t7",
    name: "Jasur Tohirov",
    role: L(
      "Fizika Fani O'qituvchisi",
      "Муаллими фанни физика",
      "Преподаватель физики",
      "Physics Teacher"
    ),
    subject: "Fizika",
    experience: L("9 yillik tajriba", "9 соли таҷриба", "9 лет опыта", "9 years experience"),
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "t8",
    name: "Nodira Sultonova",
    role: L(
      "Kimyo Fani O'qituvchisi",
      "Муаллими фанни кимиё",
      "Преподаватель химии",
      "Chemistry Teacher"
    ),
    subject: "Kimyo",
    experience: L("7 yillik tajriba", "7 соли таҷриба", "7 лет опыта", "7 years experience"),
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "t9",
    name: "Otabek Qosimov",
    role: L(
      "Tarix Fani O'qituvchisi",
      "Муаллими фанни таърих",
      "Преподаватель истории",
      "History Teacher"
    ),
    subject: "Tarix",
    experience: L("10 yillik tajriba", "10 соли таҷриба", "10 лет опыта", "10 years experience"),
    image: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "t10",
    name: "Malika Yusupova",
    role: L(
      "Huquq Fani O'qituvchisi",
      "Муаллими фанни ҳуқуқ",
      "Преподаватель права",
      "Law Teacher"
    ),
    subject: "Huquq",
    experience: L("6 yillik tajriba", "6 соли таҷриба", "6 лет опыта", "6 years experience"),
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80"
  }
];

export const initialFaqs = [
  {
    id: "f1",
    question: L(
      "O'qish narxi qancha va to'lov tartibi qanday?",
      "Нархи таҳсил чанд аст ва тартиби пардохт чӣ гуна аст?",
      "Сколько стоит обучение и как проходит оплата?",
      "How much does tuition cost and how does payment work?"
    ),
    answer: L(
      "Kurslar narxi yo'nalishga qarab oyiga 380 000 so'mdan 650 000 so'mgacha. To'lovlarni naqd, plastik karta (Click, Payme, Uzum) orqali amalga oshirishingiz mumkin.",
      "Нархи курсҳо аз рӯи самт аз 380 000 то 650 000 сӯм дар як моҳ. Шумо метавонед пардохтро бо нақд ва корти пластикӣ (Click, Payme, Uzum) анҷом диҳед.",
      "Стоимость курсов зависит от направления и составляет от 380 000 до 650 000 сумов в месяц. Оплата возможна наличными или банковской картой (Click, Payme, Uzum).",
      "Course prices vary by direction and range from 380,000 to 650,000 soums per month. You can pay in cash or by bank card (Click, Payme, Uzum)."
    )
  },
  {
    id: "f2",
    question: L(
      "Darslar qachon va qaysi vaqtlarda bo'lib o'tadi?",
      "Дарсҳо кай ва дар кадом вақт мегузаранд?",
      "Когда и в какое время проходят занятия?",
      "When and at what times do classes take place?"
    ),
    answer: L(
      "Darslar haftada 3 kun, ertalabki, tushdan keyingi hamda kechki guruhlarda o'tiladi. Sizga mos keladigan qulay grafik tanlanadi.",
      "Дарсҳо дар як ҳафта 3 рӯз, дар гурӯҳҳои саҳарӣ, баъди чоштӣ ва шомӣ мегузаранд. Графики мувофиқи шумо интихоб карда мешавад.",
      "Занятия проходят 3 раза в неделю в утренних, дневных и вечерних группах. Подбирается удобный для вас график.",
      "Classes are held 3 times a week in morning, afternoon and evening groups. A convenient schedule is chosen for you."
    )
  },
  {
    id: "f3",
    question: L(
      "Farzandim kompyuterni umuman bilmasa ham o'rgana oladimi?",
      "Оё фарзанди ман агар компютерро умуман надонад ҳам меомӯзад?",
      "Сможет ли мой ребёнок учиться, если совсем не знает компьютер?",
      "Can my child learn even if they don't know computers at all?"
    ),
    answer: L(
      "Albatta! Bizning IT KIDS hamda noldan boshlanadigan kurslarimiz hech qanday boshlang'ich bilim talab qilmaydi. Ustozlarimiz noldan o'rgatishadi.",
      "Албатта! Курсҳои мо IT KIDS ва аз сифр оғозшаванда ҳеҷ дониши ибтидоӣ талаб намекунанд. Устодони мо аз сифр таълим медиҳанд.",
      "Конечно! Наши курсы IT KIDS и курсы с нуля не требуют никаких начальных знаний. Наши преподаватели обучают с нуля.",
      "Of course! Our IT KIDS and from-scratch courses require no prior knowledge. Our teachers teach from scratch."
    )
  },
  {
    id: "f4",
    question: L(
      "Bepul sinov darsi yoki konsultasiya bormi?",
      "Оё дарси озмоишии ройгон ё машварат ҳаст?",
      "Есть ли бесплатный пробный урок или консультация?",
      "Is there a free trial lesson or consultation?"
    ),
    answer: L(
      "Ha! Birinchi tanishuv va proforiyentatsiya darsi mutlaqo bepul. Ariza qoldiring va mutaxassislarimiz sizga mos vaqtni belgilab berishadi.",
      "Бале! Дарси аввалини шиносӣ ва профориентатсия комилан ройгон аст. Ариза гузоред ва мутахассисони мо вақти мувофиқро муайян мекунанд.",
      "Да! Первый ознакомительный и профориентационный урок абсолютно бесплатен. Оставьте заявку, и наши специалисты подберут удобное время.",
      "Yes! The first introductory and career guidance lesson is completely free. Leave a request and our specialists will set a convenient time."
    )
  },
  {
    id: "f5",
    question: L(
      "Kurs yakunida sertifikat beriladimi?",
      "Оё дар охири курс сертификат дода мешавад?",
      "Выдаётся ли сертификат по окончании курса?",
      "Is a certificate awarded at the end of the course?"
    ),
    answer: L(
      "Ha, barcha bosqichlarni muvaffaqiyatli yakunlagan o'quvchilarga MEGA EDU rasmiy sertifikati topshiriladi.",
      "Бале, ба ҳамаи хонандагоне, ки ҳамаи марҳилаҳоро бомуваффақият анҷом доданд, сертификати расмии MEGA EDU супорида мешавад.",
      "Да, ученикам, успешно завершившим все этапы, вручается официальный сертификат MEGA EDU.",
      "Yes, students who successfully complete all stages are awarded the official MEGA EDU certificate."
    )
  }
];

export const initialApplications = [
  {
    id: "app-101",
    name: "Bekzod Alimov",
    phone: "+998 (90) 123-45-67",
    course: "Web Dasturlash & AI",
    note: "Darslar kechki payt bo'lsa yaxshi bo'lardi.",
    status: "Yangi",
    createdAt: new Date(Date.now() - 3600000 * 2).toLocaleString("uz-UZ")
  },
  {
    id: "app-102",
    name: "Nigora Shokirova",
    phone: "+998 (97) 765-43-21",
    course: "IELTS Accelerator",
    note: "Qizim uchun IELTS 7.5 kursi bo'yicha ma'lumot olmoqchiman.",
    status: "Bog'lanildi",
    createdAt: new Date(Date.now() - 3600000 * 24).toLocaleString("uz-UZ")
  }
];
