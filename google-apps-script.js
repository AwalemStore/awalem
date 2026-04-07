function normalizePhone(phone) {
  var p = phone.toString().trim();
  p = p.replace(/[\s\-\(\)\+]/g, '');
  if (p.startsWith('00966')) p = p.substring(5);
  if (p.startsWith('966')) p = p.substring(3);
  if (p.startsWith('0')) p = p.substring(1);
  return p;
}

var SHEET_NAME = 'الورقة1';
var SHEET_ID = '1evB9CEONCn8YLlX6Pel554WDaPVTMGEJXPSiJWrl_CU';

function getSheet() {
  var ss = SpreadsheetApp.openById(SHEET_ID);
  var sheets = ss.getSheets();
  var names = [];
  for (var i = 0; i < sheets.length; i++) {
    names.push(sheets[i].getName());
  }
  var sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) {
    throw new Error('ما لقيت تبويب باسم "' + SHEET_NAME + '" - التبويبات المتاحة: ' + names.join(' | '));
  }
  return sheet;
}

function doPost(e) {
  try {
    var sheet = getSheet();
    var body = JSON.parse(e.postData.contents);
    var phone = normalizePhone(body.phone);
    var deviceId = body.deviceId.toString().trim();
    var sku = body.sku.toString().trim();

    if (!phone || !deviceId || !sku) {
      return jsonResponse({ success: false, message: 'بيانات ناقصة' });
    }

    var data = sheet.getDataRange().getValues();
    var headers = data[0];
    var colPhone = headers.indexOf('phone');
    var colSku = headers.indexOf('sku');
    var colDeviceId = headers.indexOf('device_id');
    var colStatus = headers.indexOf('status');

    if (colPhone === -1 || colSku === -1 || colDeviceId === -1 || colStatus === -1) {
      return jsonResponse({ success: false, message: 'خطأ في إعداد الشيت' });
    }

    var matchedRow = null;
    var matchedRowIndex = -1;

    for (var i = 1; i < data.length; i++) {
      var rowPhone = normalizePhone(data[i][colPhone]);
      var rowSku = data[i][colSku].toString().trim();

      if (rowPhone === phone) {
        if (rowSku === sku || rowSku === 'awalem-all') {
          matchedRow = data[i];
          matchedRowIndex = i + 1;
          break;
        }
      }
    }

    if (!matchedRow) {
      return jsonResponse({ success: false, message: 'الرقم غير مسجل في النظام أو الاشتراك غير فعال' });
    }

    var storedDeviceId = matchedRow[colDeviceId].toString().trim();

    if (storedDeviceId === '') {
      sheet.getRange(matchedRowIndex, colDeviceId + 1).setValue(deviceId);
      sheet.getRange(matchedRowIndex, colStatus + 1).setValue('مستخدم');
      return jsonResponse({ success: true, message: 'تم تسجيل الدخول بنجاح! مرحباً بكِ' });
    }

    if (storedDeviceId === deviceId) {
      sheet.getRange(matchedRowIndex, colStatus + 1).setValue('مستخدم');
      return jsonResponse({ success: true, message: 'مرحباً بعودتك!' });
    }

    return jsonResponse({ success: false, message: 'هذا الرقم مسجل بجهاز آخر. لتغيير الجهاز تواصلي مع الدعم.' });
  } catch (err) {
    return jsonResponse({ success: false, message: 'خطأ: ' + err.toString() });
  }
}

function doGet(e) {
  var p = e.parameter;
  var phone = normalizePhone(p.phone || '');
  var deviceId = (p.deviceId || '').toString().trim();
  var sku = (p.sku || '').toString().trim();

  if (!phone || !deviceId || !sku) {
    return jsonResponse({ success: false, message: 'بيانات ناقصة' });
  }

  try {
    var sheet = getSheet();
    var data = sheet.getDataRange().getValues();
    var headers = data[0];
    var colPhone = headers.indexOf('phone');
    var colSku = headers.indexOf('sku');
    var colDeviceId = headers.indexOf('device_id');
    var colStatus = headers.indexOf('status');

    if (colPhone === -1 || colSku === -1 || colDeviceId === -1 || colStatus === -1) {
      return jsonResponse({ success: false, message: 'خطأ في إعداد الشيت' });
    }

    var matchedRow = null;
    var matchedRowIndex = -1;

    for (var i = 1; i < data.length; i++) {
      var rowPhone = normalizePhone(data[i][colPhone]);
      var rowSku = data[i][colSku].toString().trim();

      if (rowPhone === phone) {
        if (rowSku === sku || rowSku === 'awalem-all') {
          matchedRow = data[i];
          matchedRowIndex = i + 1;
          break;
        }
      }
    }

    if (!matchedRow) {
      return jsonResponse({ success: false, message: 'الرقم غير مسجل في النظام أو الاشتراك غير فعال' });
    }

    var storedDeviceId = matchedRow[colDeviceId].toString().trim();

    if (storedDeviceId === '') {
      sheet.getRange(matchedRowIndex, colDeviceId + 1).setValue(deviceId);
      sheet.getRange(matchedRowIndex, colStatus + 1).setValue('مستخدم');
      return jsonResponse({ success: true, message: 'تم تسجيل الدخول بنجاح! مرحباً بكِ' });
    }

    if (storedDeviceId === deviceId) {
      sheet.getRange(matchedRowIndex, colStatus + 1).setValue('مستخدم');
      return jsonResponse({ success: true, message: 'مرحباً بعودتك!' });
    }

    return jsonResponse({ success: false, message: 'هذا الرقم مسجل بجهاز آخر. لتغيير الجهاز تواصلي مع الدعم.' });
  } catch (err) {
    return jsonResponse({ success: false, message: 'خطأ: ' + err.toString() });
  }
}

function jsonResponse(data) {
  return ContentService.createTextOutput(JSON.stringify(data)).setMimeType(ContentService.MimeType.JSON);
}
