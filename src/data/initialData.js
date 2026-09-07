export const initialSiteInfo = {
  title: "MEGA EDU",
  tagline: "IT, Ingliz tili va Rus tili bo'yicha bolalar va o'smirlar uchun zamonaviy ta'lim markazi",
  headerPhone: "+998 (77) 027 23 00",
  rawPhone: "998770272300",
  heroBadge1: "#fullstack",
  heroBadge2: "#dasturlash",
  heroBadge3: "#ingliz_tili",
  heroBadge4: "#rus_tili",
  heroTitleStart: "Farzandingizni yutuqli",
  heroTitleHighlight: "kelajak kasblari va tillariga",
  heroTitleEnd: "tayyorlang",
  heroSubtitle: "7 yoshdan 20 yoshgacha bo'lgan bolalar va o'smirlar uchun IT, Ingliz tili hamda Rus tili bo'yicha to'liq ta'lim dasturlari.",
  studentCountText: "2 500 dan ortiq o'quvchi ta'lim olmoqda",
  heroImageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80",
  promoYoutubeUrl: "https://www.youtube.com/watch?v=VUhWQg6RAYs",
  telegramUrl: "https://t.me/megaedu_uz",
  instagramUrl: "https://instagram.com/megaedu_uz",
  youtubeUrl: "https://youtube.com/@megaedu_uz",
  address: "Toshkent sh., Chilonzor tumani, Bunyodkor ko'chasi 14",
  workingHours: "Dushanba - Shanba: 09:00 - 20:00"
};

export const initialAdvantages = [
  {
    id: "adv1",
    num: "01",
    title: "Eng zamonaviy ta'lim markazi",
    desc: "MEGA EDU – o'quvchilar soni va ta'lim sifatiga ko'ra yetakchi IT va tillar akademiyalaridan biri."
  },
  {
    id: "adv2",
    num: "02",
    title: "7 yoshdan 20 yoshgacha bo'lganlar uchun",
    desc: "Bolada texnik aql yoki til bilimi noldan boshlab shakllantiriladi. Dastur yosh toifalariga moslangan."
  },
  {
    id: "adv3",
    num: "03",
    title: "Gamifikatsiya tufayli yuqori ko'rsatkichlar",
    desc: "O'quv jarayonidagi o'yin mexanikasi tufayli bizda dars samaradorligi va davomati juda yuqori."
  },
  {
    id: "adv4",
    num: "04",
    title: "5+ yillik tajribaga ega mentorlar",
    desc: "Darslarni sohada real amaliyotga ega kuchli dasturchilar va IELTS 8+ instruktorlar olib boradi."
  },
  {
    id: "adv5",
    num: "05",
    title: "Rasmiy va xalqaro sertifikat",
    desc: "Kursni muvaffaqiyatli tamomlagan barcha o'quvchilarga xalqaro standartlarga mos rasmiy sertifikat topshiriladi."
  },
  {
    id: "adv6",
    num: "06",
    title: "Real loyihalar va portfolio",
    desc: "O'quvchilar nazariya bilan cheklanib qolmay, o'zlarining shaxsiy veb-sayt va dasturlarini ishlab chiqishadi."
  }
];

export const initialCourses = [
  {
    id: "c1",
    category: "IT",
    title: "IT KIDS & ROBOTOTEXNIKA",
    ageRange: "7-11 yosh",
    subtitle: "Robototexnika va kompyuter savodxonligi orqali IT olamiga ilk qadamlar",
    description: "Farzandingiz IT'ni o'yin orqali o'rganadi – robotlar yig'adi, dasturlaydi va aqlli qurilmalar yaratadi. C++ va Scratch loyihalari, Arduino platformasi bilan ishlashni egallaydi.",
    duration: "6 oy",
    lessonsPerWeek: "Haftada 3 kun (2 soatdan)",
    price: "450 000 so'm / oy",
    popular: true,
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "c2",
    category: "IT",
    title: "WEB DASTURLASH & AI (FRONTEND + BACKEND)",
    ageRange: "12-18 yosh",
    subtitle: "Saytlar, Telegram botlar va Sun'iy intellekt tizimlari yaratish",
    description: "Farzandingiz veb-saytlar yaratishni, Telegram botlar tuzishni, ma'lumotlar bazasi bilan ishlashni va AI'dan foydalanishni o'rganadi. HTML, CSS, JavaScript, React va Python bo'yicha mustahkam ko'nikma hosil qiladi.",
    duration: "9 oy",
    lessonsPerWeek: "Haftada 3 kun (2 soatdan)",
    price: "600 000 so'm / oy",
    popular: true,
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "c3",
    category: "IT",
    title: "PYTHON & BACKEND DEVELOPMENT",
    ageRange: "14+ yosh",
    subtitle: "Kompaniya darajasidagi murakkab tizimlar va API backend yaratish",
    description: "Python, Django, FastAPI, PostgreSQL va Git bilan professional darajada server tomonini dasturlash. Algoritmlar va ma'lumotlar tuzilmasi bo'yicha amaliy tajriba.",
    duration: "8 oy",
    lessonsPerWeek: "Haftada 3 kun (2 soatdan)",
    price: "650 000 so'm / oy",
    popular: false,
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "c4",
    category: "Ingliz tili",
    title: "GENERAL ENGLISH & SPEAKING CLUB",
    ageRange: "8-18 yosh",
    subtitle: "Erkin so'zlashuv va noldan grammatikani mustahkamlash",
    description: "Interaktiv darslar va har haftalik native speakerlar bilan Speaking Club. O'quvchilar real hayotiy vaziyatlarda ingliz tilida ravon gapirishni boshlaydilar.",
    duration: "6 oy",
    lessonsPerWeek: "Haftada 3 kun (1.5 soatdan)",
    price: "400 000 so'm / oy",
    popular: true,
    image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "c5",
    category: "Ingliz tili",
    title: "IELTS ACCELERATOR (BAND 7.5+)",
    ageRange: "14+ yosh",
    subtitle: "Xalqaro universitetlar hamda grantlar uchun maqsadli IELTS tayyorgarlik",
    description: "Listening, Reading, Writing hamda Speaking bo'yicha maxsus strategiyalar. Har oy bepul Mock IELTS imtihonlari va individual feedback.",
    duration: "4-6 oy",
    lessonsPerWeek: "Haftada 3 kun (2 soatdan)",
    price: "550 000 so'm / oy",
    popular: true,
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "c6",
    category: "Rus tili",
    title: "RUS TILI INTENSIV (SO'ZLASHUV AMALIYOTI)",
    ageRange: "Barcha yoshdagilar",
    subtitle: "Qisqa muddatda rus tilida erkin va to'g'ri muomala qilish",
    description: "Quruq grammatikadan qochgan holda, muloqotga yo'naltirilgan intensiv darslar. Ish joyi va o'qish uchun amaliy sozlashuv mashg'ulotlari.",
    duration: "3-5 oy",
    lessonsPerWeek: "Haftada 3 kun (1.5 soatdan)",
    price: "380 000 so'm / oy",
    popular: false,
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "c7",
    category: "Biologiya",
    title: "BIOLOGIYA (SUN & MILLIY SERTIFIKAT)",
    ageRange: "14+ yosh",
    subtitle: "Biologiya fanidan davlat standartlari va imtihonlarga tayyorgarlik",
    description: "SUN (Oliy ta'lim milliy testi) va Milliy sertifikat talablariga mos biologiya dasturi. Genetika, anatomiya, botanika va zoologiya bo'limlari testlar asosida mustahkamlanadi.",
    duration: "8 oy",
    lessonsPerWeek: "Haftada 3 kun (1.5 soatdan)",
    price: "350 000 so'm / oy",
    popular: true,
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "c8",
    category: "Fizika",
    title: "FIZIKA (FAN OLIMPIADASI & DTM)",
    ageRange: "14+ yosh",
    subtitle: "Fizika olimpiadasi va oliy ta'lim testlariga chuqur tayyorgarlik",
    description: "Mexanika, elektromagnetizm, optika va termodinamika bo'limlari yuqori saviyada. DTM testlari hamda fan olimpiadalarida qatnashish uchun mantiqiy masalalar yechish amaliyoti.",
    duration: "9 oy",
    lessonsPerWeek: "Haftada 3 kun (2 soatdan)",
    price: "400 000 so'm / oy",
    popular: true,
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "c9",
    category: "Kimyo",
    title: "KIMYO (SUN & MILLIY SERTIFIKAT)",
    ageRange: "14+ yosh",
    subtitle: "Kimyo fanidan nazariy bilim va amaliy laboratoriya mashg'ulotlari",
    description: "Organik va anorganik kimyo, elementlar davriy sistemasi, reaksiya tenglamalari. SUN imtihoni va Milliy sertifikatga mos masalali amaliyot bilan.",
    duration: "8 oy",
    lessonsPerWeek: "Haftada 3 kun (1.5 soatdan)",
    price: "350 000 so'm / oy",
    popular: false,
    image: "https://images.unsplash.com/photo-1603126857599-f6e1573592d6?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "c10",
    category: "Tarix",
    title: "TARIX (MILLIY SERTIFIKAT & DTM)",
    ageRange: "14+ yosh",
    subtitle: "O'zbekiston va jahon tarixi bo'yicha imtihonlarga tayyorgarlik",
    description: "O'zbekiston tarixi hamda jahon tarixi xronologik tartibda, xarita va hujjatlar bilan. Milliy sertifikat va DTM testlariga mos konspekt asosida tayyorgarlik.",
    duration: "7 oy",
    lessonsPerWeek: "Haftada 3 kun (1.5 soatdan)",
    price: "350 000 so'm / oy",
    popular: false,
    image: "https://images.unsplash.com/photo-1461988320302-91bde64fc8e4?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "c11",
    category: "Huquq",
    title: "HUQUQ ASOSLARI (YOSH HUQUQSHUNOS)",
    ageRange: "13+ yosh",
    subtitle: "Huquqiy savodxonlik va konstitutsiya asoslari",
    description: "O'zbekiston Respublikasi Konstitutsiyasi, inson huquqlari, fuqarolik va jinoyat huquqi asoslari. Yosh huquqshunoslar olimpiadasiga tayyorgarlik va real hayotiy vaziyatlarni tahlil qilish.",
    duration: "6 oy",
    lessonsPerWeek: "Haftada 2 kun (1.5 soatdan)",
    price: "300 000 so'm / oy",
    popular: false,
    image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=600&q=80"
  }
];

export const initialCertificates = [
  {
    id: "cert1",
    title: "MEGA EDU - IT Fullstack Bitiruv Sertifikati",
    course: "Web Dasturlash (Frontend + Backend)",
    issuedTo: "Azizbek Rahimov",
    year: "2025",
    badge: "Rasmiy Sertifikat",
    image: "https://images.unsplash.com/photo-1589330694653-ded6df03f754?auto=format&fit=crop&w=600&q=80",
    description: "O'quvchi to'liq 9 oylik amaliy dasturni yakunlab, o'zining shaxsiy portfoliosi va real veb loyihasini muvaffaqiyatli topshirdi."
  },
  {
    id: "cert2",
    title: "IELTS 7.5 High Achievement Certificate",
    course: "IELTS Intensive",
    issuedTo: "Malika Umarova",
    year: "2025",
    badge: "Xalqaro Imtihon",
    image: "https://images.unsplash.com/photo-1579389083078-4e7018379f7e?auto=format&fit=crop&w=600&q=80",
    description: "O'quvchi MEGA EDU IELTS Accelerator kursi natijasida birinchi urinishda 7.5 ballni qo'lga kiritdi."
  },
  {
    id: "cert3",
    title: "Business & Conversational Russian Certificate",
    course: "Rus Tili Intensiv",
    issuedTo: "Jasur Ergachev",
    year: "2025",
    badge: "Sertifikatlangan",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=600&q=80",
    description: "Rus tilida erkin so'zlashuv va biznes muloqot kursini 95% a'lo baho bilan yakunladi."
  }
];

export const initialReviews = [
  {
    id: "r1",
    parentName: "Munisa Fayzullayeva",
    studentName: "Javohir (11 yosh)",
    course: "IT Kids & Dasturlash",
    comment: "Farzandim IT sohasiga qiziqib qoldi, robotlar yig'ish va dasturlashni o'rganyapti. O'qituvchilar juda tajribali va bemalol bolasini topshirishim mumkin.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
    videoThumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=500&q=80",
    youtubeUrl: "https://www.youtube.com/watch?v=RDovBk4v0Ow"
  },
  {
    id: "r2",
    parentName: "Nazir Rixsiboev",
    studentName: "Sardor (15 yosh)",
    course: "Web Dasturlash",
    comment: "O'g'lim veb-sayt yaratishni o'rgandi va endi o'z loyihalarini ishlab chiqmoqda. Kelajakda dasturchi bo'laman deb aytadi. MEGA EDU ustozlariga rahmat!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80",
    videoThumbnail: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=500&q=80",
    youtubeUrl: "https://www.youtube.com/watch?v=nZ3deR3BSKc"
  },
  {
    id: "r3",
    parentName: "Baxrom Abduqayumov",
    studentName: "Madina (14 yosh)",
    course: "IELTS & Ingliz tili",
    comment: "Qizim ingliz tilida erkin gapira boshladi va IELTS imtihoniga tayyorlanmoqda. Ustozlar individual yondashuv bilan har bir o'quvchiga e'tibor berishadi.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80",
    videoThumbnail: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=500&q=80",
    youtubeUrl: "https://www.youtube.com/watch?v=GSnWFA3qnAg"
  },
  {
    id: "r4",
    parentName: "Dilafruz Maksumova",
    studentName: "Kamron (10 yosh)",
    course: "Rus Tili & IT Kids",
    comment: "Farzandim ikki yo'nalishda – rus tili va IT bo'yicha o'rganmoqda. Darslar o'yin tarzida o'tadi va natija juda yaxshi. Hammaga tavsiya qilaman!",
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
    role: "Front-End Developer & IT Lead",
    subject: "IT",
    experience: "5 yillik tajriba",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "t2",
    name: "Amirxon Ibaydillayev",
    role: "Full-Stack Mentor",
    subject: "IT",
    experience: "4 yillik tajriba",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "t3",
    name: "Sharifjon Mo'minov",
    role: "Back-End Senior Specialist",
    subject: "IT",
    experience: "6 yillik tajriba",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "t4",
    name: "Elena Smirnova",
    role: "IELTS Master & Head Trainer",
    subject: "Ingliz tili",
    experience: "7 yillik tajriba (IELTS 8.5)",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "t5",
    name: "Azamat Azamatov",
    role: "Rus Tili va Nutq Madaniyati Ustozi",
    subject: "Rus tili",
    experience: "5 yillik tajriba",
    image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "t6",
    name: "Gulchehra Rustamova",
    role: "Biologiya Fani O'qituvchisi",
    subject: "Biologiya",
    experience: "8 yillik tajriba",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "t7",
    name: "Jasur Tohirov",
    role: "Fizika Fani O'qituvchisi",
    subject: "Fizika",
    experience: "9 yillik tajriba",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "t8",
    name: "Nodira Sultonova",
    role: "Kimyo Fani O'qituvchisi",
    subject: "Kimyo",
    experience: "7 yillik tajriba",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "t9",
    name: "Otabek Qosimov",
    role: "Tarix Fani O'qituvchisi",
    subject: "Tarix",
    experience: "10 yillik tajriba",
    image: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "t10",
    name: "Malika Yusupova",
    role: "Huquq Fani O'qituvchisi",
    subject: "Huquq",
    experience: "6 yillik tajriba",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80"
  }
];

export const initialFaqs = [
  {
    id: "f1",
    question: "O'qish narxi qancha va to'lov tartibi qanday?",
    answer: "Kurslar narxi yo'nalishga qarab oyiga 380 000 so'mdan 650 000 so'mgacha. To'lovlarni naqd, plastik karta (Click, Payme, Uzum) orqali amalga oshirishingiz mumkin."
  },
  {
    id: "f2",
    question: "Darslar qachon va qaysi vaqtlarda bo'lib o'tadi?",
    answer: "Darslar haftada 3 kun, ertalabki, tushdan keyingi hamda kechki guruhlarda o'tiladi. Sizga mos keladigan qulay grafik tanlanadi."
  },
  {
    id: "f3",
    question: "Farzandim kompyuterni umuman bilmasa ham o'rgana oladimi?",
    answer: "Albatta! Bizning IT KIDS hamda noldan boshlanadigan kurslarimiz hech qanday boshlang'ich bilim talab qilmaydi. Ustozlarimiz noldan o'rgatishadi."
  },
  {
    id: "f4",
    question: "Bepul sinov darsi yoki konsultasiya bormi?",
    answer: "Ha! Birinchi tanishuv va proforiyentatsiya darsi mutlaqo bepul. Ariza qoldiring va mutaxassislarimiz sizga mos vaqtni belgilab berishadi."
  },
  {
    id: "f5",
    question: "Kurs yakunida sertifikat beriladimi?",
    answer: "Ha, barcha bosqichlarni muvaffaqiyatli yakunlagan o'quvchilarga MEGA EDU rasmiy sertifikati topshiriladi."
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
