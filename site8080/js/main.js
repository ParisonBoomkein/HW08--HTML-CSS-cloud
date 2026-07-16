// เปิด/ปิดเมนูบนมือถือ
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var list = document.querySelector('.nav-list');
  if (toggle && list) {
    toggle.addEventListener('click', function () {
      list.classList.toggle('open');
    });
  }
});

// ฟอร์ม Contact: เปิดโปรแกรมอีเมลของผู้ใช้พร้อมกรอกข้อมูลให้อัตโนมัติ
function sendViaMailto(event) {
  event.preventDefault();
  var name = document.getElementById('fullname').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;

  var to = '6810301022@cdti.ac.th';
  var subject = 'ข้อความจากเว็บไซต์ส่วนตัว - ' + name;
  var body = 'ชื่อ: ' + name + '\nอีเมล: ' + email + '\n\nข้อความ:\n' + message;

  var mailtoLink = 'mailto:' + to
    + '?subject=' + encodeURIComponent(subject)
    + '&body=' + encodeURIComponent(body);

  window.location.href = mailtoLink;
  return false;
}
