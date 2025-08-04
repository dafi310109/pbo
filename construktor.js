// function Car(name, model, weight, color) {
//     this.name = name;
//     this.model = model;
//     this.weight = weight;
//     this.color = color;

//     this.start = function() {
//         console.log(`${this.name} dinyalakan.`);
//     };

//     this.drive = function() {
//         console.log(`${this.name} sedang berjalan.`);
//     };
// }

// let car1 = new Car("Toyota", "2020", 1200, "Hitam");
// let car2 = new Car("Honda", "2021", 1200, "Hitam");
// car1.start();
// car1.drive(); 
// car2.start();
// car2.drive();

// class Car {
//     constructor(name, model, weight, color) {
//         this.name = name;
//         this.model = model;
//         this.weight = weight;
//         this.color = color;
//     }
    
//     start() {
//         console.log(`${this.name} dinyalakan.`);
//     }

//     drive() {
//         console.log(`${this.name} sedang berjalan.`);
//     }
// }
// let car1 = new Car("Toyota", "2020", 1200, "Hitam");
// let car2 = new Car("Honda", "2021", 1300, "Putih");
// car1.start();   
// car1.drive();
// car2.start();
// car2.drive();

// class Sepeda {
//   constructor(merk, jumlah_gigi, warna_sepeda) {
//     this.merk = merk;
//     this.jumlah_gigi = jumlah_gigi;
//     this.warna_sepeda = warna_sepeda;
//   }

//   start() {
//     console.log("Sepeda digoes.");
//   }

//   brake() {
//     console.log("Sepeda mengerem.");
//   }

//   stop() {
//     console.log("Sepeda berhenti.");
//   }
// }

// // Membuat objek dari class
// let sepeda = new Sepeda("Wimcycle", 7, "Hitam");
// let sepeda2 = new Sepeda("Pacific", 10, "Hijau");

// console.log("Merk sepeda: " + sepeda.merk);
// console.log("Merk sepeda: " + sepeda2.merk);
// sepeda.start();   // Output: Sepeda digoes.
// sepeda2.brake();  // Output: Sepeda mengerem.

class Student {
    constructor(nama, nim, jurusan, angkatan) {
        this.nama = nama;
        this.nim = nim;
        this.jurusan = jurusan;
        this.angkatan = angkatan;
    }

    introduce() {
        console.log(`Halo, nama saya ${this.nama}, NIM: ${this.nim}, jurusan ${this.jurusan}, angkatan ${this.angkatan}.`);
    }

    isSenior() {
        if (this.angkatan < 2025) {
            console.log(`${this.nama} adalah mahasiswa senior.`);
        } else {
            console.log(`${this.nama} adalah mahasiswa baru.`);
        }
    }

    displayInfo() {
        console.log(`Nama: ${this.nama}, NIM: ${this.nim}, Jurusan: ${this.jurusan}, Angkatan: ${this.angkatan}`);
    }
}

// Membuat objek student
let student1 = new Student("Zahir", "123456", "Teknik Informatika", 2020);
let student2 = new Student("Siraj", "654321", "Sistem Informasi", 2025);

// Memanggil method
student1.introduce();
student2.introduce();

student1.isSenior();
student2.isSenior();

student1.displayInfo();
student2.displayInfo();