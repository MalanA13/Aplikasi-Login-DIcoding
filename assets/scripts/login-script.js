/**@module Login-Script */
/**
*Membuat variable loginFormElement untuk tampilan Form
*@constant (HTMLElement)
*/
const loginFormElement = document.queryselector('#loginForm');

/**
*Membuat variable InputEmailElement untuk Tampilan Inputan email
*@constant (HTMLElement)
*/
const inputEmailElement = document.queryselector('#inputEmail');

/**
*Membuat variable InputEmailElement untuk Tampilan Inputan email
*@constant (HTMLElement)
*/
const inputPasswordElement = document.queryselector('#inputPassword');

/*
*membuat variable untuk menyimpan informasi email dan password sementara
*@constant {string}
*/
const expectedEmail = 'admin@dicoding.com';
const expectedPassword = 'superpassword';

/*
*Comment : menambahkan aksi atau logic untuk halaman login
*/
loginFormElement.addEventListener('submit', function(event) {
  event.preventDefault();

  /*
  *membuat variable untuk mendapatkan nilai inputan dari email dan password saat button di tekan di halaman login
  *@constant {string}
  */
  const email = inputEmailElement.value;
  const password = inputPasswordElement.value;

  /*
  *membuat logic untuk memeriksa sebuah nilai dari inputan, 
  *apakah email dan password sudah cocok dengan email dan password sementara,
  *Jika Benar maka akan masuk ke halaman Beranda atau Home,
  *Jika Salah maka akan memunculkan PopUp error
  */
  if (email == expectedEmail && password == expectedPassword) {
    goToHome();
  } else {
    showPopUp();
  }
});


// /*
//  * Catatan:
//  * Gunakan fungsi goToHome() untuk menampilkan halaman home
//  * Gunakan fungsi goToLogin() untuk menampilkan halaman login
//  * Gunakan fungsi showPopUp() untuk menampilkan pop up error
//  */

// const loginFormElement = document.querySelector('#loginForm');
// const inputEmailElement = document.querySelector('#inputEmail');
// const inputPasswordElement = document.querySelector('#inputPassword');

// const expectedEmail = 'admin@dicoding.com';
// const expectedPassword = 'superpassword';

// loginFormElement.addEventListener('submit', function(event) {
//   event.preventDefault();

//   const email = inputEmailElement.value;
//   const password = inputPasswordElement.value;
//   if (email == expectedEmail && password == expectedPassword) {
//     goToHome();
//   } else {
//     showPopUp();
//   }
// });
