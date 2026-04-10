const APP_DATA = {

    dict: {
        ar: { printTitle: "جدول غذاء الطفل (4 أسابيع)", week: "الأسبوع", prep: "طريقة التحضير", track: "تتبع الحساسية", day: "يوم", alt: "بديل", ing: "المكونات", step: "التحضير", swap: "تبديل", reaction: "تفاعل الطفل", notes: "ملاحظات", done: "تم التقديم", markDone: "تم التقديم؟", progress: "التقدم", childName: "اسم الطفل/الطفلة", childDob: "تاريخ ميلاد الطفل", startDate: "تاريخ البدء", lang: "لغة المساعدة", generate: "عرض الجدول المخصص (4 أسابيع)", loginTitle: "تغذية طفلك", loginSub: "أدخلي رقم الجوال المسجل في طلبك للدخول إلى منصتك", phone: "رقم الجوال", loginBtn: "تسجيل الدخول", print: "طباعة الجدول", sendMail: "إرسال بالبريد", whatsapp: "واتساب", forbidden: "أطعمة محظورة تماماً (قبل عمر السنة)", tips: "نصائح عوالم", rules: "قواعد التغذية الطبية السليمة", references: "المراجع الطبية", footer: "صنع من قبل عوالم Awalem", stage: "المرحلة", months: "أشهر", ageNow: "عمر الطفل الآن", enterData: "الرجاء إدخال", loginFirst: "يرجى تسجيل الدخول أولاً", threeDayRule: "قاعدة الـ 3 أيام", noSalt: "يُمنع منعاً تاماً إضافة الملح والسكر والعسل قبل عمر السنة", startSmall: "ابدأي بملعقة واحدة إلى ملعقتين يومياً في البداية", allergicNote: "سجّلي ردة فعل طفلكِ لكل طعام جديد" },
        en: { printTitle: "Baby Meal Plan (4 Weeks)", week: "Week", prep: "Recipe", track: "Track", day: "Day", alt: "Swap", ing: "Ingredients", step: "Steps", swap: "Swap", reaction: "Baby's Reaction", notes: "Notes", done: "Done", markDone: "Mark Done", progress: "Progress", childName: "Child's Name", childDob: "Date of Birth", startDate: "Start Date", lang: "Helper Language", generate: "Generate 4-Week Plan", loginTitle: "Baby Nutrition", loginSub: "Enter your registered phone number", phone: "Phone Number", loginBtn: "Login", print: "Print Schedule", sendMail: "Send Email", whatsapp: "WhatsApp", forbidden: "Forbidden Foods (Under 1 Year)", tips: "Tips", rules: "Feeding Rules", references: "Medical References", footer: "Made by Awalem", stage: "Stage", months: "months", ageNow: "Child's age now", enterData: "Please enter", loginFirst: "Please login first", threeDayRule: "3-Day Rule: One new food every 3 days", noSalt: "No salt, sugar, or honey before age 1", startSmall: "Start with 1-2 teaspoons daily", allergicNote: "Record baby's reaction to each new food" },
        tl: { printTitle: "Plano ng Pagkain (4 Linggo)", week: "Linggo", prep: "Resipe", track: "Tala", day: "Araw", alt: "Palitan", ing: "Mga Sangkap", step: "Mga Hakbang", swap: "Palitan", reaction: "Reaksyon ng Sanggol", notes: "Mga Tala", done: "Tapos na", markDone: "Tapos na?", progress: "Pag-unlad", childName: "Pangalan ng Bata", childDob: "Petsa ng Kapanganakan", startDate: "Petsa ng Simula", lang: "Wika ng Tulong", generate: "Gumawa ng 4-Linggong Plano", loginTitle: "Nutrisyon ng Sanggol", loginSub: "Ilagay ang nakarehistrong numero ng telepono", phone: "Numero ng Telepono", loginBtn: "Mag-login", print: "I-print", sendMail: "Magpadala ng Email", whatsapp: "WhatsApp", forbidden: "Ipinagbabawal na Pagkain (Wala pang 1 Taon)", tips: "Mga Tip", rules: "Mga Patakaran", references: "Mga Sanggunian", footer: "Gawa ng Awalem", stage: "Yugto", months: "buwan", ageNow: "Edad ng bata ngayon", enterData: "Pakilagay", loginFirst: "Mag-login muna", threeDayRule: "3-Araw na Patakaran", noSalt: "Bawal ang asin, asukal, at pulot bago mag-1 taon", startSmall: "Magsimula sa 1-2 kutsarita araw-araw", allergicNote: "I-record ang reaksyon ng sanggol" },
        id: { printTitle: "Rencana Makan (4 Minggu)", week: "Minggu", prep: "Resep", track: "Lacak", day: "Hari", alt: "Ganti", ing: "Bahan", step: "Langkah", swap: "Ganti", reaction: "Reaksi Bayi", notes: "Catatan", done: "Selesai", markDone: "Tandai Selesai", progress: "Kemajuan", childName: "Nama Anak", childDob: "Tanggal Lahir", startDate: "Tanggal Mulai", lang: "Bahasa", generate: "Buat Rencana 4 Minggu", loginTitle: "Nutrisi Bayi", loginSub: "Masukkan nomor telepon terdaftar", phone: "Nomor Telepon", loginBtn: "Masuk", print: "Cetak", sendMail: "Kirim Email", whatsapp: "WhatsApp", forbidden: "Makanan Terlarang (Di Bawah 1 Tahun)", tips: "Tips", rules: "Aturan Makan", references: "Referensi Medis", footer: "Dibuat oleh Awalem", stage: "Tahap", months: "bulan", ageNow: "Usia anak sekarang", enterData: "Silakan masukkan", loginFirst: "Silakan login terlebih dahulu", threeDayRule: "Aturan 3 Hari", noSalt: "Tanpa garam, gula, dan madu sebelum 1 tahun", startSmall: "Mulai dengan 1-2 sendok teh per hari", allergicNote: "Catat reaksi bayi terhadap makanan baru" },
        hi: { printTitle: "शिशु आहार योजना", week: "सप्ताह", prep: "विधि", track: "ट्रैक", day: "दिन", alt: "बदलें", ing: "सामग्री", step: "तरीका", swap: "बदलें", reaction: "शिशु की प्रतिक्रिया", notes: "नोट्स", done: "हो गया", markDone: "पूरा करें?", progress: "प्रगति", childName: "बच्चे का नाम", childDob: "जन्म तिथि", startDate: "आरंभ तिथि", lang: "सहायक भाषा", generate: "4 सप्ताह की योजना बनाएं", loginTitle: "शिशु पोषण", loginSub: "पंजीकृत फ़ोन नंबर दर्ज करें", phone: "फ़ोन नंबर", loginBtn: "लॉगिन", print: "प्रिंट करें", sendMail: "ईमेल भेजें", whatsapp: "व्हाट्सएप", forbidden: "प्रतिबंधित खाद्य पदार्थ", tips: "सुझाव", rules: "खिलाने के नियम", references: "चिकित्सा संदर्भ", footer: "Awalem द्वारा निर्मित", stage: "चरण", months: "महीने", ageNow: "बच्चे की उम्र", enterData: "कृपया दर्ज करें", loginFirst: "कृपया पहले लॉगिन करें", threeDayRule: "3 दिन का नियम", noSalt: "1 साल से पहले नमक, चीनी और शहद न दें", startSmall: "रोज़ 1-2 चम्मच से शुरू करें", allergicNote: "शिशु की प्रतिक्रिया दर्ज करें" },
        ur: { printTitle: "بچے کی خوراک کا منصوبہ", week: "ہفتہ", prep: "ترکیب", track: "ٹریک", day: "دن", alt: "تبدیل", ing: "اجزاء", step: "طریقہ", swap: "تبدیل", reaction: "بچے کا ردعمل", notes: "نوٹس", done: "ہو گیا", markDone: "مکمل کریں؟", progress: "ترقی", childName: "بچے کا نام", childDob: "تاریخ پیدائش", startDate: "شروع کی تاریخ", lang: "مدد کی زبان", generate: "4 ہفتوں کا منصوبہ بنائیں", loginTitle: "بچے کی خوراک", loginSub: "اپنا رجسٹرڈ فون نمبر درج کریں", phone: "فون نمبر", loginBtn: "لاگ ان", print: "پرنٹ کریں", sendMail: "ای میل بھیجیں", whatsapp: "واٹس ایپ", forbidden: "ممنوعہ غذائیں", tips: "تجاویز", rules: "کھلانے کے اصول", references: "طبی حوالے", footer: "Awalem کی طرف سے", stage: "مرحلہ", months: "مہینے", ageNow: "بچے کی عمر", enterData: "براہ کرم درج کریں", loginFirst: "پہلے لاگ ان کریں", threeDayRule: "3 دن کا اصول", noSalt: "1 سال سے پہلے نمک، چینی اور شہد نہ دیں", startSmall: "روزانہ 1-2 چائے کے چمچ سے شروع کریں", allergicNote: "بچے کا ردعمل درج کریں" },
        bn: { printTitle: "শিশু আহার পরিকল্পনা", week: "সপ্তাহ", prep: "রেসিপি", track: "ট্র্যাক", day: "দিন", alt: "পরিবর্তন", ing: "উপকরণ", step: "পদ্ধতি", swap: "পরিবর্তন", reaction: "শিশুর প্রতিক্রিয়া", notes: "নোটস", done: "সম্পন্ন", markDone: "সম্পন্ন করুন?", progress: "অগ্রগতি", childName: "শিশুর নাম", childDob: "জন্ম তারিখ", startDate: "শুরুর তারিখ", lang: "সাহায্যকারী ভাষা", generate: "4 সপ্তাহের পরিকল্পনা তৈরি করুন", loginTitle: "শিশু পুষ্টি", loginSub: "নিবন্ধিত ফোন নম্বর দিন", phone: "ফোন নম্বর", loginBtn: "লগইন", print: "প্রিন্ট করুন", sendMail: "ইমেইল পাঠান", whatsapp: "হোয়াটসঅ্যাপ", forbidden: "নিষিদ্ধ খাবার", tips: "পরামর্শ", rules: "খাওয়ার নিয়ম", references: "চিকিৎসা সংস্থান", footer: "Awalem দ্বারা নির্মিত", stage: "পর্যায়", months: "মাস", ageNow: "শিশুর বয়স", enterData: "দয়া করে লিখুন", loginFirst: "প্রথমে লগইন করুন", threeDayRule: "3 দিনের নিয়ম", noSalt: "1 বছরের আগে লবণ, চিনি ও মধু দেবেন না", startSmall: "প্রতিদিন 1-2 চামচ দিয়ে শুরু করুন", allergicNote: "শিশুর প্রতিক্রিয়া লিখুন" },
        si: { printTitle: "ළදරු ආහාර සැලැස්ම", week: "සතිය", prep: "වට්ටෝරුව", track: "පරීක්ෂාව", day: "දිනය", alt: "මාරු කරන්න", ing: "අමුද්‍රව්‍ය", step: "පියවර", swap: "මාරු කරන්න", reaction: "ළදරු ප්‍රතිචාරය", notes: "සටහන්", done: "අවසන්", markDone: "සලකුණු කරන්න?", progress: "ප්‍රගතිය", childName: "ළදරුවාගේ නම", childDob: "උපන් දිනය", startDate: "ආරම්භ දිනය", lang: "උපකාරක භාෂාව", generate: "4 සති සැලැස්ම", loginTitle: "ළදරු පෝෂණය", loginSub: "ලියාපදිංචි දුරකථන අංකය ඇතුලත් කරන්න", phone: "දුරකථන අංකය", loginBtn: "පුරනය", print: "මුද්‍රණය", sendMail: "ඊමේල් යවන්න", whatsapp: "වොට්සැප්", forbidden: "තහනම් ආහාර", tips: "උපදෙස්", rules: "ආහාර රීති", references: "වෛද්‍ය යොමු", footer: "Awalem විසින් නිර්මාණය", stage: "අදියර", months: "මාස", ageNow: "ළදරුවාගේ වයස", enterData: "කරුණාකර ඇතුලත් කරන්න", loginFirst: "කරුණාකර පුරනය වන්න", threeDayRule: "3 දින නීතිය", noSalt: "1 වසරට පෙර ලුණු, සීනි සහ මී පැණි නොදෙන්න", startSmall: "දිනපතා 1-2 තේ හැන්දකින් ආරම්භ කරන්න", allergicNote: "ළදරුවාගේ ප්‍රතිචාරය සටහන් කරන්න" },
        ne: { printTitle: "शिशु भोजन योजना", week: "हप्ता", prep: "विधि", track: "ट्र्याक", day: "दिन", alt: "बदल्नुहोस्", ing: "सामग्री", step: "तरिका", swap: "बदल्नुहोस्", reaction: "शिशुको प्रतिक्रिया", notes: "नोटहरू", done: "भयो", markDone: "पूरा गर्नुहुन्छ?", progress: "प्रगति", childName: "बच्चाको नाम", childDob: "जन्म मिति", startDate: "सुरु मिति", lang: "सहायक भाषा", generate: "4 हप्ताको योजना बनाउनुहोस्", loginTitle: "शिशु पोषण", loginSub: "दर्ता भएको फोन नम्बर हाल्नुहोस्", phone: "फोन नम्बर", loginBtn: "लगइन", print: "प्रिन्ट गर्नुहोस्", sendMail: "इमेल पठाउनुहोस्", whatsapp: "व्हाट्सएप", forbidden: "निषेधित खाना", tips: "सुझाव", rules: "खुवाउने नियम", references: "चिकित्सा सन्दर्भ", footer: "Awalem द्वारा निर्मित", stage: "चरण", months: "महिना", ageNow: "बच्चाको उमेर", enterData: "कृपया हाल्नुहोस्", loginFirst: "पहिले लगइन गर्नुहोस्", threeDayRule: "3 दिनको नियम", noSalt: "1 वर्ष अघि नुन, चिनी र मह नदिनुहोस्", startSmall: "दैनिक 1-2 चम्चाले सुरु गर्नुहोस्", allergicNote: "शिशुको प्रतिक्रिया रेकर्ड गर्नुहोस्" },
        am: { printTitle: "የህፃን ምግብ እቅድ", week: "ሳምንት", prep: "አሰራር", track: "ክትትል", day: "ቀን", alt: "ቀይር", ing: "ግብአቶች", step: "ደረጃዎች", swap: "ቀይር", reaction: "የህፃኑ ምላሽ", notes: "ማስታወሻዎች", done: "ተጠናቀቀ", markDone: "ምልክት አድርግ?", progress: "እድገት", childName: "የህፃኑ ስም", childDob: "የልደት ቀን", startDate: "የመጀመሪያ ቀን", lang: "የረዳት ቋንቋ", generate: "4 ሳምንት እቅድ ፍጠር", loginTitle: "የህፃን ስርአተ ምግብ", loginSub: "የተመዘገበ ስልክ ቁጥር ያስገቡ", phone: "ስልክ ቁጥር", loginBtn: "ግባ", print: "አትም", sendMail: "ኢሜል ላክ", whatsapp: "ዋትስአፕ", forbidden: "ከበሉ የተከለከሉ ምግቦች", tips: "ምክሮች", rules: "የመመገቢያ ህጎች", references: "የህክምና ማመዛዘኛ", footer: "በAwalem የተሰራ", stage: "ደረጃ", months: "ወራት", ageNow: "የህፃኑ ዕድሜ", enterData: "እባክዎ ያስገቡ", loginFirst: "እባክዎ መጀመሪያ ይግቡ", threeDayRule: "3 ቀን ህግ", noSalt: "ከ1 ዓመት በፊት ጨው፣ ስኳር እና ማር አይስጡ", startSmall: "በቀን 1-2 ማንኪያ ይጀምሩ", allergicNote: "የህፃኑን ምላሽ ያስፈርሙ" },
        sw: { printTitle: "Mpango wa Chakula", week: "Wiki", prep: "Mapishi", track: "Fuatilia", day: "Siku", alt: "Badilisha", ing: "Viungo", step: "Hatua", swap: "Badilisha", reaction: "Mwitiko wa Mtoto", notes: "Vidokezo", done: "Imekamilika", markDone: "Weka alama?", progress: "Maendeleo", childName: "Jina la Mtoto", childDob: "Tarehe ya Kuzaliwa", startDate: "Tarehe ya Kuanza", lang: "Lugha ya Msaada", generate: "Tengeneza Mpango wa Wiki 4", loginTitle: "Lishe ya Mtoto", loginSub: "Ingiza nambari yako ya simu", phone: "Nambari ya Simu", loginBtn: "Ingia", print: "Chapisha", sendMail: "Tuma Barua Pepe", whatsapp: "WhatsApp", forbidden: "Vyakula Vilivyokatazwa", tips: "Vidokezo", rules: "Sheria za Kulisha", references: "Vyanzo vya Matibabu", footer: "Imetengenezwa na Awalem", stage: "Hatua", months: "miezi", ageNow: "Umri wa mtoto sasa", enterData: "Tafadhali ingiza", loginFirst: "Tafadhali ingia kwanza", threeDayRule: "Sheria ya Siku 3", noSalt: "Hakuna chumvi, sukari au asali kabla ya mwaka 1", startSmall: "Anza na vijiko 1-2 kila siku", allergicNote: "Rekodi mwitiko wa mtoto" }
    },

    stages: {
        6: {
            title: "المرحلة الأولى: الأطعمة المهروسة الناعمة جداً",
            icon: "🥣",
            description: "بداية تقديم الأطعمة الصلبة المهروسة - جرّبي نوع واحد جديد كل 3 أيام",
            weeks: [
                [
                    { name: "كوسة", icon: "🥒", prep: "تقشير، سلق بالبخار، ثم هرس ناعم جداً.", alt: "لوبيا خضراء مهروسة." },
                    { name: "جزر", icon: "🥕", prep: "سلق مطول لضمان الليونة التامة، ثم هرس.", alt: "قرع عسلي." }
                ],
                [
                    { name: "بطاطس", icon: "🥔", prep: "سلق جيد، هرس مع قليل من حليب الأم.", alt: "بطاطا حلوة." },
                    { name: "تفاح", icon: "🍎", prep: "تقشير، سلق بالبخار، وهرس.", alt: "كمثرى مسلوقة ومهروسة." }
                ],
                [
                    { name: "موز", icon: "🍌", prep: "هرس الموز الناضج جداً بالشوكة.", alt: "أفوكادو مهروس ناعم." },
                    { name: "بروكلي", icon: "🥦", prep: "سلق الزهرات فقط (بدون الساق) وهرسها.", alt: "قرنبيط مسلوق ومهروس." }
                ],
                [
                    { name: "شوفان", icon: "🥣", prep: "طحن الشوفان، طبخه بالماء حتى يذوب، تخفيفه بالحليب.", alt: "أرز مطحون ومطبوخ." },
                    { name: "خوخ", icon: "🍑", prep: "تقشير وسلق وهرس ناعم.", alt: "مشمش مسلوق." }
                ]
            ]
        },
        7: {
            title: "المرحلة الثانية: إدخال البروتين والقوام الأثقل",
            icon: "🥄",
            description: "تنويع الأطعمة مع قوام أسمك قليلاً - إدخال البروتينات",
            weeks: [
                [
                    { name: "دجاج مهروس", icon: "🍗", prep: "سلق جيد وهرس مع مرق السلق.", alt: "ديك رومي مهروس." },
                    { name: "عدس", icon: "🍲", prep: "سلق العدس حتى يذوب تماماً.", alt: "حمص مقشر ومهروس." }
                ],
                [
                    { name: "صفار البيض", icon: "🥚", prep: "سلق البيضة كاملة، وأخذ الصفار فقط.", alt: "مهروس الأفوكادو." },
                    { name: "سبانخ", icon: "🍃", prep: "سلق وهرس مع قليل من البطاطس.", alt: "ملوخية مطبوخة ومهروسة." }
                ],
                [
                    { name: "بازلاء", icon: "🫛", prep: "سلق وهرس وتصفية القشور إن لزم.", alt: "فاصوليا خضراء." },
                    { name: "شوفان خشن", icon: "🥣", prep: "طبخ الشوفان كما هو بدون طحن.", alt: "برغل ناعم مطبوخ." }
                ],
                [
                    { name: "لحم عجل", icon: "🥩", prep: "سلق مفروم العجل ناعماً جداً.", alt: "كبدة دجاج مسلوقة ومهروسة." },
                    { name: "قرع", icon: "🎃", prep: "شوي القرع بالفرن وهرسه.", alt: "جزر مشوي ومهروس." }
                ]
            ]
        },
        9: {
            title: "المرحلة الثالثة: الأطعمة اللينة (Finger Foods)",
            icon: "🍽️",
            description: "أطعمة أكثر تنوعاً مع قوام قطعي صغير - تشجيع الطفل على المضغ",
            weeks: [
                [
                    { name: "بطيخ", icon: "🍉", prep: "إزالة البذور وتقطيع لمكعبات لينة.", alt: "شمام مقطع." },
                    { name: "زبادي", icon: "🥛", prep: "تقديم زبادي طبيعي كامل الدسم.", alt: "موز مع حليب." }
                ],
                [
                    { name: "مكرونة", icon: "🍝", prep: "سلق زيادة لتصبح لينة جداً.", alt: "قطع خبز لينة." },
                    { name: "جبن", icon: "🧀", prep: "جبن مبستر قليل الملح (مثل الموزاريلا الطازجة).", alt: "لبنة غير مالحة." }
                ],
                [
                    { name: "سمك أبيض", icon: "🐟", prep: "شوي أو سلق مع التأكد من خلوه من الشوك.", alt: "تونة معلبة بالماء." },
                    { name: "طماطم", icon: "🍅", prep: "تقشير وتقطيع ناعم.", alt: "فلفل رومي مشوي ومقشر." }
                ],
                [
                    { name: "موز قطع", icon: "🍌", prep: "تقطيع الموز لشرائح طولية يمسكها الطفل.", alt: "كيوي ناضج جداً." },
                    { name: "بانكيك صحي", icon: "🥞", prep: "عمل بانكيك من (موز + بيض + شوفان) بدون سكر.", alt: "وافل الشوفان اللين." }
                ]
            ]
        },
        12: {
            title: "المرحلة الرابعة: طعام العائلة المعتاد",
            icon: "👨‍👩‍👧‍👦",
            description: "الطفل يستطيع أكل معظم أطعمة العائلة مع مراعاة عدم الإفراط في الملح والسكر",
            weeks: [
                [
                    { name: "أرز مطبوخ", icon: "🍚", prep: "أرز مطبوخ لين مع خضار مهروسة.", alt: "برغل مطبوخ." },
                    { name: "كفتة دجاج", icon: "🍗", prep: "كفتة دجاج مشوية بدون بهارات حارة.", alt: "كفتة لحم." }
                ],
                [
                    { name: "خبز مع حمص", icon: "🫓", prep: "خبز محمص لين مع حمص مهروس.", alt: "خبز مع جبن." },
                    { name: "سلطة فواكه", icon: "🍇", prep: "مكعبات فواكه متنوعة ناضجة ولينة.", alt: "فاكهة مهروسة." }
                ],
                [
                    { name: "شوربة خضار", icon: "🥣", prep: "شوربة خضار مطبوخة جيداً مع قطع صغيرة.", alt: "شوربة عدس." },
                    { name: "بيض كامل", icon: "🥚", prep: "الآن يمكن تقديم البيضة كاملة (بياض + صفار).", alt: "أومليت بدون ملح." }
                ],
                [
                    { name: "سمك مشوي", icon: "🐟", prep: "سمك مشوي بدون شوك مع أرز.", alt: "دجاج مشوي." },
                    { name: "فول مدمس", icon: "🫘", prep: "فول مهروس بدون ملح أو طحينة.", alt: "حمص مهروس." }
                ]
            ]
        }
    },

    forbiddenFoods: [
        { name: "العسل", icon: "🍯", reason: "خطر التسمم البوتوليني - يمنع تماماً قبل السنة" },
        { name: "حليب البقر", icon: "🥛", reason: "صعب الهضم وقد يسبب حساسية - لا يُقدم كمشروب رئيسي" },
        { name: "الملح", icon: "🧂", reason: "يضر الكلية - لا تضيفي أي ملح لطعام الطفل" },
        { name: "السكر المضاف", icon: "🍬", reason: "غير صحي ويسبب تسوس الأسنان" },
        { name: "بياض البيض (قبل 9 أشهر)", icon: "🥚", reason: "قد يسبب حساسية - الصفار مسموح من 7 أشهر" },
        { name: "المكسرات الكاملة", icon: "🥜", reason: "خطر الاختناق - يمكن تقديمها مطحونة ومطبوخة" },
        { name: "السمك عالي الزئبق", icon: "🐟", reason: "الزئبق ضار بالجهاز العصبي للطفل" },
        { name: "العصائر", icon: "🧃", reason: "تحتوي سكر عالي وتسبب إسهال - قدمي الفاكهة الكاملة" }
    ],

    tips: [
        { icon: "🍼", text: "الحليب (أم أو صناعي) هو المصدر الرئيسي للتغذية في السنة الأولى" },
        { icon: "🕐", text: "قد يحتاج الطفل إلى 10-15 محاولة ليقبل طعام جديد" },
        { icon: "🚫", text: "لا تجبري الطفل على الأكل - اتركيه يأكل بالكمية التي يريدها" },
        { icon: "📅", text: "قاعدة الـ 3 أيام: قدّمي الصنف الجديد لثلاثة أيام متتالية لمراقبة الحساسية" },
        { icon: "🌴", text: "التمر مسموح من 6 أشهر: يجب أن يُقدم منقوعاً ومقشراً ومهروساً تماماً" },
        { icon: "⚠️", text: "راقبي علامات الحساسية: طفح جلدي، تقيؤ، إسهال، تورم" },
        { icon: "📸", text: "سجّلي ردة فعل طفلكِ لكل طعام جديد لمعرفة ما يحبه" },
        { icon: "🧼", text: "اغسلي يديكِ وأدوات الطفل جيداً قبل تحضير الطعام" }
    ],

    references: [
        { name: "منظمة الصحة العالمية (WHO)", text: "دليل التغذية التكميلية للرضع والأطفال الصغار" },
        { name: "الأكاديمية الأمريكية لطب الأطفال (AAP)", text: "توصيات إدخال الأطعمة الصلبة للأطفال" },
        { name: "UNICEF", text: "دليل التغذية المبكرة وتطوير عادات الأكل الصحي" }
    ]
};

const PRODUCT_SKU = "babyfood";
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxL4pI3wIIBfT4SKMXQsBwJId9bqwviUwHiCfEZFIOemEOwZ2cGq8gjqvedDFAfJjlP/exec";
