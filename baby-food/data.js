const babyFoodData = [
  {
    month: 6,
    title: "الشهر السادس",
    icon: "🥣",
    description: "بداية تقديم الأطعمة الصلبة المهروسة - جرّبي نوع واحد جديد كل 3 أيام",
    categories: [
      {
        name: "حبوب ونشويات",
        icon: "🌾",
        foods: ["أرز مهروس", "شوفان مهروس", "بطاطس مهروسة", "بطاطا حلوة مهروسة"]
      },
      {
        name: "خضروات",
        icon: "🥕",
        foods: ["جزر مهروس", "كوسا مهروسة", "قرع مهروس", "بروكلي مهروس"]
      },
      {
        name: "فواكه",
        icon: "🍎",
        foods: ["موز مهروس", "تفاح مهروس", "إجاص مهروس", "أفوكادو مهروس"]
      }
    ],
    notes: [
      "ابدئي بملعقة صغيرة واحدة وزادّي الكمية تدريجياً",
      "القوام يجب أن يكون ناعماً جداً وسائلاً",
      "أرضعي الطفل حليب الأم أو الحليب الصناعي كأساس"
    ]
  },
  {
    month: 7,
    title: "الشهر السابع",
    icon: "🥄",
    description: "تنويع الأطعمة مع قوام أسمك قليلاً - إدخال البروتينات",
    categories: [
      {
        name: "حبوب ونشويات",
        icon: "🌾",
        foods: ["أرز", "شوفان", "بطاطس", "بطاطا حلوة", "معكرونة مطبوخة ومهروسة"]
      },
      {
        name: "خضروات",
        icon: "🥕",
        foods: ["جزر", "كوسا", "قرع", "بروكلي", "سبانخ", "فاصوليا خضراء"]
      },
      {
        name: "فواكه",
        icon: "🍎",
        foods: ["موز", "تفاح", "إجاص", "أفوكادو", "مانجا", "خوخ"]
      },
      {
        name: "بروتينات",
        icon: "🍗",
        foods: ["دجاج مهروس", "لحم مهروس", "سمك أبيض مهروس", "صفار بيض"]
      }
    ],
    notes: [
      "يمكنك خلط أكثر من نوع من الخضار معاً",
      "ابدئي بإدخال البروتينات تدريجياً",
      "لا تضيفي ملح أو سكر أو بهارات"
    ]
  },
  {
    month: 8,
    title: "الشهر الثامن",
    icon: "🍽️",
    description: "أطعمة أكثر تنوعاً مع قوام قطعي صغير - تشجيع الطفل على المضغ",
    categories: [
      {
        name: "حبوب ونشويات",
        icon: "🌾",
        foods: ["أرز", "شوفان", "بطاطس", "بطاطا حلوة", "معكرونة", "خبز محمص للأطفال"]
      },
      {
        name: "خضروات",
        icon: "🥕",
        foods: ["جزر", "كوسا", "قرع", "بروكلي", "سبانخ", "فاصوليا خضراء", "بازلاء", "بطاطس مهروسة"]
      },
      {
        name: "فواكه",
        icon: "🍎",
        foods: ["موز", "تفاح", "إجاص", "أفوكادو", "مانجا", "خوخ", "بطيخ", "شمام"]
      },
      {
        name: "بروتينات",
        icon: "🍗",
        foods: ["دجاج مفروم", "لحم مفروم", "سمك أبيض", "صفار بيض", "عدس مهروس", "فول مهروس"]
      },
      {
        name: "ألبان",
        icon: "🥛",
        foods: ["زبادي كامل الدسم", "جبنة قريش"]
      }
    ],
    notes: [
      "يمكن تقديم الأطعمة بقطع صغيرة جدّاً لتشجيع المضغ",
      "قدمي وجبات خفيفة بين الوجبات الرئيسية",
      "شجّعي الطفل على الأكل بيده"
    ]
  }
];

const mealSchedule = {
  6: [
    { food: "أرز مهروس", icon: "🌾", category: "حبوب ونشويات" },
    { food: "شوفان مهروس", icon: "🌾", category: "حبوب ونشويات" },
    { food: "بطاطس مهروسة", icon: "🥕", category: "خضروات" },
    { food: "بطاطا حلوة مهروسة", icon: "🥕", category: "خضروات" },
    { food: "جزر مهروس", icon: "🥕", category: "خضروات" },
    { food: "كوسا مهروسة", icon: "🥕", category: "خضروات" },
    { food: "قرع مهروس", icon: "🥕", category: "خضروات" },
    { food: "بروكلي مهروس", icon: "🥕", category: "خضروات" },
    { food: "موز مهروس", icon: "🍎", category: "فواكه" },
    { food: "تفاح مهروس", icon: "🍎", category: "فواكه" },
    { food: "إجاص مهروس", icon: "🍎", category: "فواكه" },
    { food: "أفوكادو مهروس", icon: "🍎", category: "فواكه" }
  ],
  7: [
    { food: "أرز", icon: "🌾", category: "حبوب ونشويات" },
    { food: "شوفان", icon: "🌾", category: "حبوب ونشويات" },
    { food: "بطاطس", icon: "🌾", category: "حبوب ونشويات" },
    { food: "بطاطا حلوة", icon: "🌾", category: "حبوب ونشويات" },
    { food: "معكرونة مطبوخة ومهروسة", icon: "🌾", category: "حبوب ونشويات" },
    { food: "جزر", icon: "🥕", category: "خضروات" },
    { food: "كوسا", icon: "🥕", category: "خضروات" },
    { food: "قرع", icon: "🥕", category: "خضروات" },
    { food: "بروكلي", icon: "🥕", category: "خضروات" },
    { food: "سبانخ", icon: "🥕", category: "خضروات" },
    { food: "فاصوليا خضراء", icon: "🥕", category: "خضروات" },
    { food: "موز", icon: "🍎", category: "فواكه" },
    { food: "تفاح", icon: "🍎", category: "فواكه" },
    { food: "إجاص", icon: "🍎", category: "فواكه" },
    { food: "أفوكادو", icon: "🍎", category: "فواكه" },
    { food: "مانجا", icon: "🍎", category: "فواكه" },
    { food: "خوخ", icon: "🍎", category: "فواكه" },
    { food: "دجاج مهروس", icon: "🍗", category: "بروتينات" },
    { food: "لحم مهروس", icon: "🍗", category: "بروتينات" },
    { food: "سمك أبيض مهروس", icon: "🍗", category: "بروتينات" },
    { food: "صفار بيض", icon: "🍗", category: "بروتينات" }
  ],
  8: [
    { food: "أرز", icon: "🌾", category: "حبوب ونشويات" },
    { food: "شوفان", icon: "🌾", category: "حبوب ونشويات" },
    { food: "بطاطس", icon: "🌾", category: "حبوب ونشويات" },
    { food: "بطاطا حلوة", icon: "🌾", category: "حبوب ونشويات" },
    { food: "معكرونة", icon: "🌾", category: "حبوب ونشويات" },
    { food: "خبز محمص للأطفال", icon: "🌾", category: "حبوب ونشويات" },
    { food: "جزر", icon: "🥕", category: "خضروات" },
    { food: "كوسا", icon: "🥕", category: "خضروات" },
    { food: "قرع", icon: "🥕", category: "خضروات" },
    { food: "بروكلي", icon: "🥕", category: "خضروات" },
    { food: "سبانخ", icon: "🥕", category: "خضروات" },
    { food: "فاصوليا خضراء", icon: "🥕", category: "خضروات" },
    { food: "بازلاء", icon: "🥕", category: "خضروات" },
    { food: "موز", icon: "🍎", category: "فواكه" },
    { food: "تفاح", icon: "🍎", category: "فواكه" },
    { food: "إجاص", icon: "🍎", category: "فواكه" },
    { food: "أفوكادو", icon: "🍎", category: "فواكه" },
    { food: "مانجا", icon: "🍎", category: "فواكه" },
    { food: "خوخ", icon: "🍎", category: "فواكه" },
    { food: "بطيخ", icon: "🍎", category: "فواكه" },
    { food: "شمام", icon: "🍎", category: "فواكه" },
    { food: "دجاج مفروم", icon: "🍗", category: "بروتينات" },
    { food: "لحم مفروم", icon: "🍗", category: "بروتينات" },
    { food: "سمك أبيض", icon: "🍗", category: "بروتينات" },
    { food: "صفار بيض", icon: "🍗", category: "بروتينات" },
    { food: "عدس مهروس", icon: "🍗", category: "بروتينات" },
    { food: "فول مهروس", icon: "🍗", category: "بروتينات" },
    { food: "زبادي كامل الدسم", icon: "🥛", category: "ألبان" },
    { food: "جبنة قريش", icon: "🥛", category: "ألبان" }
  ]
};

const forbiddenFoods = [
  { name: "عسل", icon: "🍯", reason: "خطر التسمم البوتوليني" },
  { name: "حليب بقر", icon: "🥛", reason: "صعب الهضم وقد يسبب حساسية" },
  { name: "ملح", icon: "🧂", reason: "يضر الكلية" },
  { name: "سكر", icon: "🍬", reason: "غير صحي ويسبب تسوس الأسنان" },
  { name: "بياض البيض", icon: "🥚", reason: "قد يسبب حساسية" },
  { name: "مكسرات كاملة", icon: "🥜", reason: "خطر الاختناق" },
  { name: "سمك عالي الزئبق", icon: "🐟", reason: "الزئبق ضار بالجهاز العصبي" },
  { name: "أطعمة حارة", icon: "🌶️", reason: "تهيج المعدة" }
];

const tips = [
  { icon: "🍼", text: "الحليب (أم أو صناعي) هو المصدر الرئيسي للتغذية في السنة الأولى" },
  { icon: "🕐", text: "قد يحتاج الطفل إلى 10-15 محاولة ليقبل طعام جديد" },
  { icon: "🚫", text: "لا تجبري الطفل على الأكل - اتركيه يأكل بالكمية التي يريدها" },
  { icon: "📸", text: "سجّلي ردة فعل طفلكِ لكل طعام جديد لمعرفة ما يحبه" },
  { icon: "⚠️", text: "راقبي علامات الحساسية: طفح جلدي، تقيؤ، إسهال، تورم" },
  { icon: "🧼", text: "اغسلي يديكِ وأدوات الطفل جيداً قبل تحضير الطعام" }
];

const arabicMonths = ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"];
const arabicDays = ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"];

function formatDate(date) {
  return `${date.getDate()} ${arabicMonths[date.getMonth()]}`;
}

function formatDateFull(date) {
  return `${arabicDays[date.getDay()]} ${date.getDate()} ${arabicMonths[date.getMonth()]}`;
}

function generateTimeline(age, startDate) {
  const meals = mealSchedule[age];
  const start = new Date(startDate + "T00:00:00");

  return meals.map((meal, index) => {
    const fromDate = new Date(start);
    fromDate.setDate(fromDate.getDate() + index * 3);
    const toDate = new Date(fromDate);
    toDate.setDate(toDate.getDate() + 2);

    return {
      ...meal,
      dayNumber: index + 1,
      fromDate: formatDate(fromDate),
      toDate: formatDate(toDate),
      fromDateFull: formatDateFull(fromDate),
      toDateFull: formatDateFull(toDate),
      fromRaw: fromDate,
      toRaw: toDate
    };
  });
}

function renderStaticSections() {
  document.getElementById("forbidden-foods").innerHTML = forbiddenFoods.map(food => `
    <div class="food-item forbidden" title="${food.reason}">${food.icon} ${food.name}</div>
  `).join("");

  document.getElementById("tips-container").innerHTML = tips.map(tip => `
    <div class="tip-item">
      <span class="tip-icon">${tip.icon}</span>
      <span>${tip.text}</span>
    </div>
  `).join("");
}

function renderAgeSelector() {
  const mainContent = document.getElementById("main-content");
  const today = new Date().toISOString().split("T")[0];

  mainContent.innerHTML = `
    <div class="bento-card">
      <h2 class="section-title">👶 اختاري عمر طفلكِ</h2>
      <p class="selector-desc">اختاري المرحلة العمرية لطفلكِ لإنشاء جدول وجبات مخصص بتواريخ محددة</p>
      <div class="age-options">
        <div class="age-option" data-age="6">
          <span class="age-option-icon">🥣</span>
          <span class="age-option-label">الشهر السادس</span>
          <span class="age-option-sub">بداية الطعام المهروس</span>
        </div>
        <div class="age-option" data-age="7">
          <span class="age-option-icon">🥄</span>
          <span class="age-option-label">الشهر السابع</span>
          <span class="age-option-sub">تنويع وإدخال بروتينات</span>
        </div>
        <div class="age-option" data-age="8">
          <span class="age-option-icon">🍽️</span>
          <span class="age-option-label">الشهر الثامن</span>
          <span class="age-option-sub">أطعمة متنوعة قطعية</span>
        </div>
      </div>
      <div class="start-date-section">
        <label class="date-label">📅 تاريخ البداية:</label>
        <input type="date" id="start-date" class="date-input" value="${today}">
      </div>
      <button id="generate-btn" class="generate-btn" disabled>إنشاء جدول الوجبات 🗓️</button>
    </div>
  `;

  let selectedAge = null;

  document.querySelectorAll(".age-option").forEach(option => {
    option.addEventListener("click", () => {
      document.querySelectorAll(".age-option").forEach(o => o.classList.remove("selected"));
      option.classList.add("selected");
      selectedAge = parseInt(option.dataset.age);
      document.getElementById("generate-btn").disabled = false;
    });
  });

  document.getElementById("generate-btn").addEventListener("click", () => {
    const startDate = document.getElementById("start-date").value;
    if (selectedAge && startDate) {
      localStorage.setItem("babyFoodSchedule", JSON.stringify({ age: selectedAge, startDate }));
      renderTimelineView();
    }
  });
}

function renderTimelineView() {
  const saved = JSON.parse(localStorage.getItem("babyFoodSchedule"));
  if (!saved) { renderAgeSelector(); return; }

  const schedule = generateTimeline(saved.age, saved.startDate);
  const stage = babyFoodData.find(s => s.month === saved.age);
  const mainContent = document.getElementById("main-content");

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const timelineHTML = schedule.map(item => {
    const isActive = today >= item.fromRaw && today <= item.toRaw;
    const isPast = today > item.toRaw;
    const statusClass = isActive ? "active" : isPast ? "past" : "future";

    let statusBadge = "";
    if (isActive) statusBadge = '<span class="timeline-badge now">اليوم ✅</span>';
    else if (isPast) statusBadge = '<span class="timeline-badge done">تم ✓</span>';

    return `
      <div class="timeline-item ${statusClass}">
        <div class="timeline-dot"></div>
        <div class="timeline-card">
          <div class="timeline-dates">
            <span>${item.fromDate}</span>
            <span class="dates-arrow">→</span>
            <span>${item.toDate}</span>
          </div>
          <div class="timeline-food">${item.icon} ${item.food}</div>
          <div class="timeline-category">${item.category}</div>
          ${statusBadge}
        </div>
      </div>
    `;
  }).join("");

  const totalDays = schedule.length * 3;
  const endDate = new Date(schedule[schedule.length - 1].toRaw);

  mainContent.innerHTML = `
    <div class="bento-card">
      <div class="timeline-header">
        <div class="timeline-info">
          <span class="timeline-stage-icon">${stage.icon}</span>
          <div>
            <h2 class="section-title" style="margin:0;border:none;padding:0">${stage.title}</h2>
            <p style="color:var(--text-muted);font-size:0.9rem;margin-top:4px">${stage.description}</p>
          </div>
        </div>
        <button id="reset-btn" class="reset-btn">🔄 تغيير</button>
      </div>
      <div class="timeline-summary">
        <div class="summary-item">
          <span class="summary-num">${schedule.length}</span>
          <span class="summary-label">وجبة</span>
        </div>
        <div class="summary-item">
          <span class="summary-num">${totalDays}</span>
          <span class="summary-label">يوم</span>
        </div>
        <div class="summary-item">
          <span class="summary-num">${formatDate(endDate)}</span>
          <span class="summary-label">آخر يوم</span>
        </div>
      </div>
      <div class="timeline">
        ${timelineHTML}
      </div>
      <div class="note-box">
        <strong>📌 ملاحظات:</strong>
        ${stage.notes.map(n => `<p>• ${n}</p>`).join("")}
      </div>
    </div>
  `;

  document.getElementById("reset-btn").addEventListener("click", () => {
    localStorage.removeItem("babyFoodSchedule");
    renderAgeSelector();
  });

  const activeItem = document.querySelector(".timeline-item.active");
  if (activeItem) {
    setTimeout(() => {
      activeItem.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 300);
  }
}

function renderUI() {
  renderStaticSections();

  const saved = localStorage.getItem("babyFoodSchedule");
  if (saved) {
    renderTimelineView();
  } else {
    renderAgeSelector();
  }
}

document.addEventListener("DOMContentLoaded", renderUI);
