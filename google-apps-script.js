function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Subscribers');
    var body = JSON.parse(e.postData.contents);
    var phone = body.phone.toString().trim();
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
      var rowPhone = data[i][colPhone].toString().trim();
      var rowSku = data[i][colSku].toString().trim();
      var rowStatus = data[i][colStatus].toString().trim();

      if (rowPhone === phone && rowStatus === 'نشط') {
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
      return jsonResponse({ success: true, message: 'تم تسجيل الدخول بنجاح! مرحباً بكِ' });
    }

    if (storedDeviceId === deviceId) {
      return jsonResponse({ success: true, message: 'مرحباً بعودتك!' });
    }

    return jsonResponse({ success: false, message: 'هذا الرقم مسجل بجهاز آخر. لتغيير الجهاز تواصلي مع الدعم.' });
  } catch (err) {
    return jsonResponse({ success: false, message: 'حدث خطأ تقني، حاولي لاحقاً' });
  }
}

function doGet(e) {
  var p = e.parameter;
  var phone = (p.phone || '').toString().trim();
  var deviceId = (p.deviceId || '').toString().trim();
  var sku = (p.sku || '').toString().trim();

  if (!phone || !deviceId || !sku) {
    return jsonResponse({ success: false, message: 'بيانات ناقصة' });
  }

  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Subscribers');
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
      var rowPhone = data[i][colPhone].toString().trim();
      var rowSku = data[i][colSku].toString().trim();
      var rowStatus = data[i][colStatus].toString().trim();

      if (rowPhone === phone && rowStatus === 'نشط') {
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
      return jsonResponse({ success: true, message: 'تم تسجيل الدخول بنجاح! مرحباً بكِ' });
    }

    if (storedDeviceId === deviceId) {
      return jsonResponse({ success: true, message: 'مرحباً بعودتك!' });
    }

    return jsonResponse({ success: false, message: 'هذا الرقم مسجل بجهاز آخر. لتغيير الجهاز تواصلي مع الدعم.' });
  } catch (err) {
    return jsonResponse({ success: false, message: 'حدث خطأ تقني، حاولي لاحقاً' });
  }
}

function jsonResponse(data) {
  return ContentService.createTextOutput(JSON.stringify(data)).setMimeType(ContentService.MimeType.JSON);
}
