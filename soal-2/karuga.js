function hitung_rata() {
    var siswa1 = parseFloat(document.getElementById('siswa1').value);
    var siswa2 = parseFloat(document.getElementById('siswa2').value);
    var siswa3 = parseFloat(document.getElementById('siswa3').value);
    var siswa4 = parseFloat(document.getElementById('siswa4').value);
    var siswa5 = parseFloat(document.getElementById('siswa5').value);

    var Rata = (siswa1 + siswa2 + siswa3 + siswa4 + siswa5)/5;

    document.getElementById('hasil').innerText = Rata + " cm";
}