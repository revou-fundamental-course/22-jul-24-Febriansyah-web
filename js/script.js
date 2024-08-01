function formValidation() {
    // Ambil nilai dari input dan select
    let name = document.getElementById('input-name').value;
    let email = document.getElementById('input-email').value;
    let selectedCoffee = document.getElementById('select-coffee').value;

    // Tampilkan nilai di console
    console.log('Nama:', name);
    console.log('Email:', email);
    console.log('Pilihan kopi:', selectedCoffee);

    // Validasi input
    if (name === '') {
        alert('Maaf, nama tidak boleh kosong');
    } else if (email === '') {
        alert('Maaf, email tidak boleh kosong');
    } else if (selectedCoffee === '') {
        alert('Maaf, Anda harus memilih ketertarikan');
    } else {
        alert('Sukses menginput');
    }
}

showSlide();

function showSlide() {
    let listImage = document.getElementsByClassName('main-content-banner');
    console.log(listImage);

    let index = 0;
    setInterval(() => {
        if (listImage.length > 0) {
            for (let i = 0; i < listImage.length; i++) {
                listImage[i].style.display = 'none';
            }
            listImage[index].style.display = 'block';
            index = (index + 1) % listImage.length;
        }
    }, 3000); // Ganti 3000 dengan interval waktu yang diinginkan dalam milidetik
}
