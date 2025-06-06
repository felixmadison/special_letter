const text =
"Hai Sherline, sebenarnya sudah lama aku ingin menyampaikan ini, tapi terus terang aku butuh keberanian lebih. Semakin lama aku mengenal kamu, ada perasaan yang tumbuh dalam hatiku dan aku tidak bisa lagi menyimpannya sendiri. Sejak pertama kali kita bertemu, sejak kita satu kelompok, aku mulai merasa bahwa ada sesuatu yang istimewa dalam dirimu. Sejak saat itu, aku selalu menanti kehadiranmu di kelas, menanti senyumanmu, menanti setiap kesempatan untuk bisa berbicara denganmu walaupun hanya sebentar. Kamu beda, bukan cuma karena kamu baik, tapi karena kamu bisa bikin suasana jadi lebih hidup. Aku suka kamu. Aku nggak tahu kamu punya perasaan yang sama atau tidak, tapi aku tetap akan menghargai perasaan kamu. Aku berharap kita bisa terus jadi teman, apapun jawaban kamu nanti. Terima kasih sudah mau mendengarkan isi hatiku. Mengenal kamu sudah jadi hadiah yang berharga buat aku. Semoga kita bisa lebih dekat dengan cara yang nyaman untuk kamu.";
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
    return Math.floor(Math.random() * 200 + 400); 
  } else {
    return Math.floor(Math.random() * 110 + 5); 
  }
}

function startFromBegin() {
  i = 0;
  dashOut(paragraph);
}

startFromBegin();
