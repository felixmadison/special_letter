const text =
  "Hai Sherline, Aku sudah lama ingin mengatakan sesuatu, tapi jujur, aku butuh keberanian lebih untuk menyampaikannya. Aku tahu kita sudah cukup lama mengenal satu sama lain, dan selama itu, ada sesuatu yang semakin tumbuh dalam hatiku. Aku tidak tahu pasti kapan perasaan ini mulai muncul, tapi aku tidak bisa lagi menyimpannya sendirian. Jadi, aku memutuskan untuk jujur kepada diriku sendiri dan sekarang juga kepadamu. Setiap kali kita menghabiskan waktu bersama, entah itu bercanda, berbicara tentang hal-hal kecil, atau hanya duduk dalam diam, aku merasa nyaman, lebih bahagia. Ada sesuatu tentang dirimu yang membuat hariku selalu terasa lebih cerah, dan aku selalu menunggu momen di mana aku bisa melihat senyummu lagi. Perasaan ini semakin nyata setiap kali kita bersama, dan aku sadar, aku tidak ingin hanya menjadi seorang teman yang berdiri di sampingmu. Aku ingin lebih dari itu. Kamu istimewa bagiku, bukan hanya karena kebaikan hatimu atau tawa yang selalu kamu bawa, tetapi karena caramu membuat segala sesuatu di sekitarmu terasa lebih indah. Aku tahu mungkin ini terasa tiba-tiba, dan aku tidak ingin membuatmu merasa terbebani. Aku hanya ingin jujur, bahwa aku menyukaimu bukan sekadar sebagai teman, tapi lebih dari itu. Aku mengerti jika mungkin perasaanmu berbeda, dan apapun itu, aku akan menghargainya. Aku hanya berharap kita bisa tetap seperti ini atau bahkan lebih baik. Aku hanya ingin kamu tahu, bahwa ada seseorang yang benar-benar mengagumimu, menghargaimu, dan berharap suatu hari nanti, kita bisa menjadi lebih dari sekadar teman. Terima kasih sudah mendengarkan perasaanku. Aku merasa jauh lebih lega setelah mengatakan semua ini. Apapun yang terjadi, aku tetap bersyukur bisa mengenalmu, dan aku berharap kita bisa tetap dekat, apapun jawabannya.";

const paragraph = text.split("");

let i = 0;

function dashOut(arr) {
  if (i < arr.length) {
    console.log(arr[i]);
    document.querySelector(".textcount").textContent += arr[i]; 
    i++;
    console.log("The i count: " + i);
    setTimeout(function () {
      dashOut(arr);
    }, interval(arr[i]));
  }
}

function interval(letter) {
  console.log(letter);
  if (letter == ";" || letter == "." || letter == ",") {
    return Math.floor(Math.random() * 500 + 500); 
  } else {
    return Math.floor(Math.random() * 130 + 5); 
  }
}

function startFromBegin() {
  i = 0;
  dashOut(paragraph);
}

startFromBegin();
