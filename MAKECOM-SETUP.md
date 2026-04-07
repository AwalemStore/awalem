# دليل إعداد Make.com - تكامل سلة + Google Sheets

## تنسيق Google Sheet (اسم الشيت: Subscribers)

الصف الأول = عناوين الأعمدة:

| phone | sku | device_id | status | name | email | notes | order_id |
|-------|-----|-----------|--------|------|-------|-------|----------|
| 555123456 | routaine | | نشط | فاطمة | f@email.com | | 1001 |
| 555789012 | awalem-all | AW-xyz | نشط | سارة | s@email.com | | 1002 |

## SKU المنتجات في سلة

| المنتج | SKU في سلة |
|--------|-----------|
| الروتين الذكي | `routaine` |
| القاموس العام | `dicgeneral` |
| قاموس المطبخ | `dicfood` |
| باقة شاملة (الكل) | `awalem-all` |

---

## الخطوة 1: إنشاء Scenario في Make.com

1. افتحي **Make.com** > **Create new Scenario**
2. اضغطي **+** واختاري **Salla**
3. Trigger: **Order Created** (أو Watch Orders)

## الخطوة 2: إضافة Filter

بعد الـ Salla Trigger أضيفي **Filter**:
- **Condition:** يحتوي SKU على واحد من: `routaine` أو `dicgeneral` أو `dicfood` أو `awalem-all`
- هذا يضمن أن بس طلبات منتجات عوالم تنضاف

## الخطوة 3: Router - توزيع حسب SKU

أضيفي **Router** بعد الـ Filter:

### المسار 1: SKU = awalem-all (الباقة الشاملة)
- **Filter:** SKU contains `awalem-all`
- **Action:** Google Sheets > Add Row (3 مرات)
  - صف 1: phone + sku=`routaine` + status=`نشط`
  - صف 2: phone + sku=`dicgeneral` + status=`نشط`
  - صف 3: phone + sku=`dicfood` + status=`نشط`
  - كل صف: نفس phone و name و email و order_id

### المسار 2: SKU = منتج واحد
- **Filter:** SKU does NOT contain `awalem-all`
- **Action:** Google Sheets > Add Row (مرة واحدة)
  - phone = رقم المشتري
  - sku = الـ SKU من الطلب
  - status = `نشط`
  - name = اسم المشتري
  - email = إيميل المشتري
  - order_id = رقم الطلب

## الخطوة 4: ربط Google Sheets

1. في Make.com أضيفي **Google Sheets** module
2. اختاري **Add a Row**
3. اختاري الـ Spreadsheet
4. تأكدي أن اسم الشيت `Subscribers`
5. تأكدي أن أسماء الأعمدة تتطابق مع الجدول فوق

## الخطوة 5: تعيين القيم (Mapping)

| العمود | القيمة من Salla |
|--------|-----------------|
| phone | `{{1.customer.phone}}` |
| sku | `{{1.items[].sku}}` |
| device_id | (اتركيه فاضي) |
| status | `نشط` |
| name | `{{1.customer.name}}` |
| email | `{{1.customer.email}}` |
| notes | (اتركيه فاضي) |
| order_id | `{{1.id}}` |

## الخطوة 6: اختبار

1. أضيفي صف تجريبي في الشيت يدوياً:
   - phone: `555000000`
   - sku: `routaine`
   - status: `نشط`
   - باقي الأعمدة فاضية

2. افتحي الموقع وادخلي بالرقم `0555000000`
3. لازم يشتغل ويسجل الـ device_id

## ملاحظات

- كل SKU = منتج واحد = صف واحد في الشيت
- `awalem-all` = 3 صفوف (واحد لكل منصة)
- كل صف له device_id مستقل (جهاز واحد لكل منتج)
- لما تضيفين منصات جديدة (سواقين مثلاً) بس أضيفي SKU جديد في سلة + نفس الـ Scenario مع مسار جديد
