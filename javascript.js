const text =
"Hai Sherline, sebenarnya sudah lama aku ingin menyampaikan ini, tapi terus terang aku butuh keberanian lebih. Semakin lama kita mengenal, ada perasaan yang tumbuh dalam hatiku dan aku tidak bisa lagi menyimpannya sendiri. Sejak pertama kali kita bertemu, sejak kita satu kelompok, aku mulai merasa bahwa ada sesuatu yang istimewa dalam dirimu. Sesuatu yang membuat aku selalu menanti senyumanmu. Kamu berbeda dari yang lain, bukan hanya karena kebaikan atau tawamu, tapi karena caramu membuat segalanya di sekitarmu terasa lebih indah. Aku suka kamu bukan sekadar sebagai teman, tapi lebih dari itu. Aku tidak tahu bagaimana perasaanmu, dan apapun itu aku akan menghargainya. Aku hanya ingin kita tetap berteman apapun jawabanmu. Terima kasih sudah membaca confessku ini. Mengenalmu saja sudah sangat berarti buatku. Aku berharap kita bisa lebih dekat, apapun yang terjadi.";
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
    return Math.floor(Math.random() * 200 + 300); 
  } else {
    return Math.floor(Math.random() * 100 + 5); 
  }
}

function startFromBegin() {
  i = 0;
  dashOut(paragraph);
}

startFromBegin();
