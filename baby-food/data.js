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

function renderUI() {
  const stagesContainer = document.getElementById("stages-container");
  const forbiddenContainer = document.getElementById("forbidden-foods");
  const tipsContainer = document.getElementById("tips-container");

  stagesContainer.innerHTML = babyFoodData.map(stage => {
    const categoriesHTML = stage.categories.map(cat => `
      <div class="food-category-label">${cat.icon} ${cat.name}</div>
      <div class="food-grid">
        ${cat.foods.map(food => `<div class="food-item">${food}</div>`).join("")}
      </div>
    `).join("");

    const notesHTML = stage.notes.map(note => `<p>• ${note}</p>`).join("");

    return `
      <div class="age-stage-card" data-month="${stage.month}">
        <div class="stage-header">
          <div class="stage-icon">${stage.icon}</div>
          <div>
            <div class="stage-title">${stage.title}</div>
            <div class="stage-age">عمر ${stage.month} أشهر</div>
          </div>
          <div class="toggle-icon">▼</div>
        </div>
        <p class="stage-desc">${stage.description}</p>
        <div class="stage-content">
          ${categoriesHTML}
          <div class="note-box">
            <strong>📌 ملاحظات:</strong>
            ${notesHTML}
          </div>
        </div>
      </div>
    `;
  }).join("");

  forbiddenContainer.innerHTML = forbiddenFoods.map(food => `
    <div class="food-item forbidden" title="${food.reason}">${food.icon} ${food.name}</div>
  `).join("");

  tipsContainer.innerHTML = tips.map(tip => `
    <div class="tip-item">
      <span class="tip-icon">${tip.icon}</span>
      <span>${tip.text}</span>
    </div>
  `).join("");

  document.querySelectorAll(".age-stage-card").forEach(card => {
    card.addEventListener("click", () => {
      card.classList.toggle("active");
    });
  });
}

document.addEventListener("DOMContentLoaded", renderUI);
