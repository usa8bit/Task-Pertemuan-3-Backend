<?php

// membuat class person
class Person {
// membuat property (variable)
    public $nama;
    public $alamat;
    public $jurusan;

// membuat method construct (yang dijalankan ketika object dibuat dan bisa digunakan untuk mengatur nilai awal object)
    public function __construct($nama, $alamat, $jurusan) {
        $this->nama = $nama;
        $this->alamat = $alamat;
        $this->jurusan = $jurusan;
    }
}

$usamah = new Person('Usamah', 'Bogor', 'Teknik Informatika');
?>