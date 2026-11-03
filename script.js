/* ===== Navigasi pertemuan ===== */
function openTab(tabId, element) {
    var tabs = document.getElementsByClassName("tab-content");
    for (var i = 0; i < tabs.length; i++) tabs[i].style.display = "none";
    var links = document.getElementsByClassName("nav-link");
    for (var j = 0; j < links.length; j++) links[j].classList.remove("active-tab");
    document.getElementById(tabId).style.display = "block";
    var idx = ['t1', 't2', 't3'].indexOf(tabId);
    (element || links[idx]).classList.add("active-tab");
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
function gotoMeeting(n) {
    openTab(n <= 6 ? 't1' : (n <= 12 ? 't2' : 't3'));
    var el = document.getElementById('m' + n);
    if (el) setTimeout(function () { el.scrollIntoView({ behavior: 'smooth', block: 'start' }); }, 30);
}
function copyCode(btn) {
    var el = btn.nextElementSibling;
    navigator.clipboard.writeText(el.innerText).then(function () {
        var t = btn.innerText; btn.innerText = "Tersalin! ✓";
        setTimeout(function () { btn.innerText = t; }, 1500);
    });
}
function $(id) { return document.getElementById(id); }
function num(id, def) { var v = parseFloat(String($(id).value).replace(',', '.')); return isNaN(v) ? (def || 0) : v; }
function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
function rp(n) { return Number(n).toLocaleString('id-ID'); }
function phpBool(b) { return b ? '1' : ''; }

/* ===== Playground (jalankan kode HTML/JS asli di iframe) ===== */
var SHIM = function (id) {
    return '<script>(function(){var P=function(t,m){parent.postMessage({pg:"' + id + '",t:t,m:String(m)},"*")};' +
        'var a=window.alert,c=window.confirm,p=window.prompt;' +
        'window.alert=function(m){P("alert",m);try{return a.call(window,m)}catch(e){}};' +
        'window.confirm=function(m){var r=false;try{r=c.call(window,m)}catch(e){}P("confirm",m+" \\u2192 "+(r?"OK (true)":"Cancel (false)"));return r};' +
        'window.prompt=function(m,d){var r=null;try{r=p.call(window,m,d)}catch(e){}P("prompt",m+" \\u2192 "+(r===null?"null (Cancel)":"\\""+r+"\\""));return r};' +
        'window.onerror=function(m){P("error",m)};})();<\/script>';
};
function initPlaygrounds() {
    document.querySelectorAll('.playground').forEach(function (pg) {
        var id = pg.getAttribute('data-pg'), list = (window.PG || {})[id] || [];
        var tabs = pg.querySelector('.pg-tabs'), ta = pg.querySelector('textarea'),
            fr = pg.querySelector('iframe'), log = pg.querySelector('.dialog-log'),
            hint = pg.querySelector('.pg-hint'), cur = 0;
        fr.style.height = (pg.getAttribute('data-h') || 300) + 'px';
        ta.style.height = (pg.getAttribute('data-h') || 300) + 'px';
        function run() {
            log.innerHTML = ''; log.hidden = true; hint.textContent = '';
            fr.srcdoc = SHIM(id) + ta.value;
        }
        function select(i) {
            cur = i;
            tabs.querySelectorAll('button').forEach(function (b, k) { b.classList.toggle('on', k === i); });
            ta.value = list[i].code;
            if (list[i].auto) run();
            else { fr.srcdoc = '<body style="font-family:sans-serif;color:#555;padding:1rem">Klik <b>&#9654; Jalankan</b> untuk memulai contoh ini (memunculkan kotak dialog).</body>'; log.hidden = true; }
        }
        list.forEach(function (ex, i) {
            var b = document.createElement('button');
            b.type = 'button'; b.textContent = ex.name; b.onclick = function () { select(i); };
            tabs.appendChild(b);
        });
        pg.querySelector('.pg-run').onclick = run;
        window.addEventListener('message', function (e) {
            if (e.source !== fr.contentWindow || !e.data || e.data.pg !== id) return;
            log.hidden = false;
            var d = document.createElement('div');
            d.innerHTML = '<b>' + esc(e.data.t) + '</b>: ' + esc(e.data.m);
            log.appendChild(d);
            hint.textContent = 'Dialog dicatat di bawah';
        });
        if (list.length) select(0);
    });
}

/* ===== P1: struktur navigasi ===== */
var NAV = {
    linier: ['[Beranda] <==> [Profil] <==> [Galeri] <==> [Kontak]',
        'Halaman ditampilkan berurutan: hanya bisa maju satu halaman atau mundur satu halaman, tidak bisa melompat dua halaman.'],
    hirarki: ['              [ Master Page: Beranda ]\n             /          |           \\\n       [Profil]      [Produk]       [Kontak]\n                     /      \\\n              [Produk A]  [Produk B]',
        'Memakai percabangan: ada Master Page (halaman utama) dengan Slave Page (halaman pendukung). Bila slave page diklik ia menjadi master page baru yang punya cabang lagi. Tidak boleh ada tampilan linier.'],
    nonlinier: ['   [Hal A] ------- [Hal B]\n      |   \\          |\n      |    \\         |\n   [Hal C] ------- [Hal D]',
        'Pengembangan dari linier yang boleh bercabang, tetapi semua halaman setingkat: tidak ada Master Page dan Slave Page.'],
    campuran: ['                [ Beranda ]\n               /     |      \\\n        [Berita]  [Galeri]  [Kontak]\n          |  \\     |  <==>  |\n        [Isi] [Arsip] [Foto1]==>[Foto2]',
        'Struktur bebas yang menggabungkan beberapa struktur lain (hirarki + linier + non-linier). Paling banyak dipakai karena interaksinya tinggi dan keterikatan halaman lebih efisien.']
};
function navShow(k) {
    $('navDiagram').textContent = NAV[k][0];
    $('navDesc').innerHTML = '<strong>Struktur Navigasi ' + k.charAt(0).toUpperCase() + k.slice(1) + ':</strong> ' + NAV[k][1];
}

/* ===== P3 ===== */
function w3Update() {
    $('w3_out1').innerHTML = 'Nim Saya = ' + esc($('w3_nim').value) + '<br>Nama Saya = ' + esc($('w3_nama').value) + '<br>Kelas Saya = ' + esc($('w3_kelas').value);
    var j = num('w3_jml'), h = num('w3_hrg');
    $('w3_out2').innerHTML = 'Jumlah Beli : ' + j + '<br>Harga Barang : ' + h + '<br>Total Bayar : ' + (j * h);
    var r = num('w3_r');
    $('w3_out3').innerHTML = 'Hitung Luas Lingkaran<br>Jari-jari : ' + r + '<br>Luas Lingkaran = ' + (Math.round(3.14 * r * r * 1e6) / 1e6);
}
/* ===== P4 ===== */
function w4Hitung() {
    var b1 = num('w4_b1'), b2 = num('w4_b2'), t1 = $('w4_t1').value, t2 = $('w4_t2').value, o = [];
    function L(s) { o.push(s); }
    L(b1 + ' + ' + b2 + ' = ' + (b1 + b2)); L(b1 + ' - ' + b2 + ' = ' + (b1 - b2));
    L(b1 + ' / ' + b2 + ' = ' + (b2 === 0 ? 'Division by zero (error PHP)' : b1 / b2));
    if (b2 !== 0) L(b1 + ' % ' + b2 + ' = ' + (b1 % b2));
    L(b1 + '==' + b2 + ' = ' + phpBool(b1 == b2)); L(b1 + '!=' + b2 + ' = ' + phpBool(b1 != b2)); L(b1 + '>=' + b2 + ' = ' + phpBool(b1 >= b2));
    L(esc(t1) + '==' + esc(t2) + ' = ' + phpBool(t1 == t2)); L(esc(t1) + '!=' + esc(t2) + ' = ' + phpBool(t1 != t2));
    L(b1 + '&lt;&gt;' + b2 + ' or ' + esc(t1) + '==' + esc(t2) + ' adalah ' + phpBool((b1 != b2) || (t1 == t2)));
    L('!(' + esc(t1) + '==' + esc(t2) + ') adalah ' + phpBool(!(t1 == t2)));
    L('Aku Sedang belajar ' + esc(t1) + ' . ' + esc(t2) + ' = ' + esc(t1 + t2));
    $('w4_out').innerHTML = o.join('<br>') + '<br><small>(PHP mencetak true sebagai 1 dan false sebagai kosong)</small>';
}
function w4Kubus() {
    var s = num('w4_sisi');
    $('w4_out2').innerHTML = 'Belajar Menghitung . Volume Kubus<br>Panjang Sisi Kubus = ' + s + '<br>Volume Kubus = ' + (s * s * s) + ' cm3';
}
/* ===== P5 ===== */
function w5Kirim() {
    var n = $('w5_nama').value, m = $('w5_method').value, f = m === 'get' ? 'metodegetproses.php' : 'metodepostproses.php';
    var url = 'localhost/modul_web1/' + f + (m === 'get' ? '?nama=' + encodeURIComponent(n) : '');
    $('w5_out').innerHTML = '<b>Address bar:</b> <code>' + esc(url) + '</code><br><br>Data Nama Yang Diinputkan adalah : ' + esc(n) +
        '<br><small>' + (m === 'get' ? 'GET: data ikut terlihat di URL ($_GET["nama"]).' : 'POST: data dikirim terpisah, URL tidak berubah ($_POST["nama"]).') + '</small>';
}
function w5Diri() {
    var n = $('w5_n').value, t = $('w5_t').value, a = $('w5_a').value, o = '';
    if (n) o += 'Nama : ' + esc(n) + '<br>'; if (t) o += 'No Telp : ' + esc(t) + '<br>'; if (a) o += 'Alamat : ' + esc(a).replace(/\n/g, '<br>') + '<br>';
    $('w5_out2').innerHTML = o || '<em>(tidak ada data yang diisi, tidak ada yang ditampilkan)</em>';
}
function w5Reset() { ['w5_n', 'w5_t', 'w5_a'].forEach(function (i) { $(i).value = ''; }); $('w5_out2').innerHTML = ''; }
function w5Mhs() {
    var jk = document.querySelector('input[name="w5_jk"]:checked'), h = [0, 1, 2].map(function (i) {
        var c = document.querySelectorAll('.w5_h')[i]; return c.checked ? c.value : '';
    });
    $('w5_out3').innerHTML = '<table border="1" cellpadding="4" style="background:cyan;border-collapse:collapse;color:#000;width:100%"><tr><td colspan="2" align="center"><b>Data Mahasiswa</b></td></tr>' +
        '<tr><td>Nama</td><td>' + esc($('w5_mn').value) + '</td></tr><tr><td>Alamat</td><td>' + esc($('w5_ma').value) + '</td></tr>' +
        '<tr><td>Jenis Kelamin</td><td>' + (jk ? jk.value : '') + '</td></tr><tr><td>Pekerjaan</td><td>' + $('w5_mp').value + '</td></tr>' +
        '<tr><td>Hobi</td><td>' + h.join(',') + '</td></tr></table><p style="margin-top:.5rem"><a href="#" onclick="document.getElementById(\'w5_f3\').reset();document.getElementById(\'w5_out3\').innerHTML=\'<em>Isi form lalu klik Kirim.</em>\';return false;">Kembali ke form input</a></p>';
}
/* ===== P7: perulangan PHP ===== */
var LOOPS = {
    'for': { f: 'contohfor.php', code: function (n) { return '<?php\nfor($i = 1; $i <= ' + n + '; $i++)\n{\n   echo $i . \'<br />\';\n}\n?>'; }, run: function (n) { var o = []; for (var i = 1; i <= n; i++) o.push(i); return o; }, ket: 'for: inisialisasi $i=1; selama $i <= batas; $i++ menaikkan nilai tiap putaran.' },
    'while': { f: 'while.php', code: function (n) { return '<?php\n$i = 1;\nwhile($i <= ' + n + ')\n{\n   echo $i . \'<br />\';\n   $i++;\n}\n?>'; }, run: function (n) { var o = [], i = 1; while (i <= n) { o.push(i); i++; } return o; }, ket: 'while: kondisi tidak ditulis di dalam fungsi perulangan; $i++ ditulis di dalam blok.' },
    'dowhile': { f: 'dowhile.php', code: function (n) { return '<?php\n$i = 1;\ndo{\n   echo $i . \'<br />\';\n   $i++;\n}\nwhile($i <= ' + n + ');\n?>'; }, run: function (n) { var o = [], i = 1; do { o.push(i); i++; } while (i <= n); return o; }, ket: 'do-while: pernyataan dieksekusi dulu, baru kondisi dibaca. Post-increment di bawah echo: angka dicetak dulu baru ditambah 1.' },
    'dowhile2': { f: 'dowhile2.php', code: function (n) { return '<?php\n$i = 1;\ndo{\n   $i++;\n   echo $i . \'<br />\';\n}\nwhile($i <= ' + n + ');\n?>'; }, run: function (n) { var o = [], i = 1; do { i++; o.push(i); } while (i <= n); return o; }, ket: 'Posisi $i++ dipindah ke atas echo: nilai ditambah dulu sehingga output menjadi 2 sampai ' + '(batas+1). Hasil bergantung pada posisi post-increment.' },
    'foreach1': { f: 'foreach1.php', code: function () { return "<?php\n$array = array('PHP', 'Python', 'Ruby');\nforeach($array as $value)\n{\n   echo $value . '<br />';\n}\n?>"; }, run: function () { return ['PHP', 'Python', 'Ruby']; }, ket: 'foreach tanpa key: hanya mengambil nilai tiap elemen array.' },
    'foreach2': { f: 'foreach2.php', code: function () { return "<?php\n$array = array('Java', 'PHP', 'C++');\nforeach($array as $key => $value)\n{\n   echo $key . ' yaitu Bagian dari '. $value . '<br />';\n}\n?>"; }, run: function () { return ['Java', 'PHP', 'C++'].map(function (v, k) { return k + ' yaitu Bagian dari ' + v; }); }, ket: 'foreach dengan key: $key berisi indeks array (0,1,2), $value berisi isinya.' },
    'latihan': { f: 'LatihanFor.php', code: function () { return '<?php\nfor($kata=1;$kata<=20;$kata++)\n{\n   echo "Saya Sedang Belajar Dasar Pemrograman Web"."<br/>";\n}\n?>'; }, run: function () { var o = []; for (var i = 0; i < 20; i++) o.push('Saya Sedang Belajar Dasar Pemrograman Web'); return o; }, ket: 'Latihan: menampilkan kalimat 20 kali dengan perulangan for.' }
};
var w7Key = 'for';
function w7Run() {
    var n = Math.max(1, Math.min(200, Math.floor(num('w7_n', 9)))), L = LOOPS[w7Key];
    $('w7_title').textContent = L.f;
    $('w7_code').textContent = L.code(n);
    $('w7_out').innerHTML = L.run(n).map(esc).join('<br>');
    $('w7_ket').innerHTML = '<strong>Penjelasan:</strong> ' + L.ket;
}
/* ===== P9: box model ===== */
function w9Update() {
    var m = $('w9_m').value, b = $('w9_b').value, p = $('w9_p').value, s = $('w9_s').value;
    $('w9_mv').textContent = m; $('w9_bv').textContent = b; $('w9_pv').textContent = p;
    $('w9_box').style.padding = m + 'px';
    $('w9_content').style.border = b + 'px ' + s + ' #e11d48';
    $('w9_content').style.padding = p + 'px';
    $('w9_css').textContent = 'margin: ' + m + 'px;\nborder: ' + b + 'px ' + s + ' #e11d48;\npadding: ' + p + 'px;';
}
/* ===== P10: responsive ===== */
var w10Done = false;
function w10Init() {
    if (w10Done) return; w10Done = true;
    $('w10_frame').srcdoc = window.PG.p10[0].code;
    document.querySelectorAll('#w10_btns button').forEach(function (b) {
        b.onclick = function () {
            var w = b.getAttribute('data-w'), f = $('w10_frame');
            f.style.width = /%/.test(w) ? w : w + 'px'; f.style.maxWidth = '100%';
            $('w10_info').innerHTML = 'Lebar tampilan: <strong>' + (/%/.test(w) ? 'penuh (desktop)' : w + 'px') + '</strong>';
        };
    });
    $('w10_info').innerHTML = 'Lebar tampilan: <strong>penuh (desktop)</strong>';
}
/* ===== P11: operator JS ===== */
function w11Hitung() {
    var x = num('w11_x'), y = num('w11_y');
    function row(a, b, c) { return '<tr><td>' + a + '</td><td>' + b + '</td><td><b>' + c + '</b></td></tr>'; }
    var r = [row('x + y', x + ' + ' + y, x + y), row('x - y', x + ' - ' + y, x - y), row('x * y', x + ' * ' + y, x * y), row('x / y', x + ' / ' + y, y === 0 ? 'Infinity' : x / y), row('x % y', x + ' % ' + y, x % y),
        row('x++', 'x=' + x, x + 1), row('x--', 'x=' + x, x - 1),
        row('x += y', 'x = x + y', x + y), row('x -= y', 'x = x - y', x - y), row('x *= y', 'x = x * y', x * y), row('x /= y', 'x = x / y', x / y), row('x %= y', 'x = x % y', x % y),
        row('x == y', '', x == y), row('x != y', '', x != y), row('x > y', '', x > y), row('x < y', '', x < y), row('x >= y', '', x >= y), row('x <= y', '', x <= y),
        row('x &lt; 10 &amp;&amp; y &gt; 1', 'and', x < 10 && y > 1), row('x==5 || y==5', 'or', x == 5 || y == 5), row('!(x == y)', 'not', !(x == y))];
    $('w11_out').innerHTML = '<div class="table-wrap"><table class="data-table"><thead><tr><th>Ekspresi</th><th>Keterangan</th><th>Hasil</th></tr></thead><tbody>' + r.join('') + '</tbody></table></div>';
}
/* ===== P12 & P18: latihan ===== */
function w12Salam(s, dialog) {
    var v = $('w12_jam' + s).value.trim(), j = v === '' ? new Date().getHours() : parseInt(v, 10);
    if (isNaN(j) || j < 0 || j > 23) { $('w12_salam' + s).innerHTML = '<em>Isi jam 0 - 23.</em>'; return; }
    var u = j < 11 ? 'Selamat Pagi' : (j < 18 ? 'Selamat Siang' : 'Selamat Malam');
    $('w12_salam' + s).innerHTML = '<div class="result-box">Jam ' + j + ' &rarr; <b>' + u + '</b></div><marquee style="background:#fde047;color:#000;font-weight:bold;padding:4px;margin-top:.5rem;">' + u + '</marquee>';
    if (dialog) alert(u);
}
function w12Akar(s) {
    var a = num('w12_a' + s), b = num('w12_b' + s), c = num('w12_c' + s), o = $('w12_akar' + s);
    if (a === 0) { o.innerHTML = 'a = 0, bukan persamaan kuadrat' + (b !== 0 ? ' (persamaan linear: x = ' + (-c / b) + ')' : '.'); return; }
    var D = b * b - 4 * a * c;
    var h = 'F(x) = ' + a + 'x&sup2; + ' + b + 'x + ' + c + '<br>D = b&sup2; - 4ac = ' + D + '<br>';
    if (D > 0) h += 'x1 = ' + (-b + Math.sqrt(D)) / (2 * a) + '<br>x2 = ' + (-b - Math.sqrt(D)) / (2 * a);
    else if (D === 0) h += 'x1 = x2 = ' + (-b / (2 * a));
    else h += 'D &lt; 0: tidak ada akar real (akar imajiner: ' + (-b / (2 * a)).toFixed(3) + ' &plusmn; ' + (Math.sqrt(-D) / (2 * a)).toFixed(3) + 'i)';
    o.innerHTML = h;
}
/* ===== P13 ===== */
function w13Log(t) { $('w13_out').innerHTML = t; }
function w13Nav(k) {
    w13Log(k === 'open' ? '<code>window.open("utsb.HTML")</code> &rarr; membuka <b>jendela baru</b> berisi utsb.HTML (halaman ini tetap terbuka).' :
        '<code>window.location="kunci_jawaban UTS.HTML"</code> &rarr; halaman ini <b>diganti</b> dengan kunci_jawaban UTS.HTML.');
}
function w13Pilih() { var s = $('w13_sel'); $('w13_teks').value = s.selectedIndex < 0 ? '' : ' Go To ' + s.options[s.selectedIndex].text + '!'; }
function w13Go() {
    var s = $('w13_sel'), f = ['latobjekradio.HTML', 'latobjekselect.HTML', 'latobjekteksarea.HTML'];
    if (s.selectedIndex < 0) { w13Log('Pilih salah satu menu terlebih dahulu.'); return; }
    w13Log('<code>window.location.href="' + f[s.selectedIndex] + '"</code> &rarr; berpindah ke halaman <b>' + f[s.selectedIndex] + '</b>.');
}
/* ===== P14: JSP ===== */
var JSP = {
    'var': { t: 'Nilai variabel angka', def: 10, f: 'variabel.jsp', code: function (v) { return '<%! int angka = ' + v + '; %>\n<div id="tampil">Nilai dari angka= <%=angka%> </div>'; }, out: function (v) { return '<div>Nilai dari angka= ' + esc(v) + ' </div>'; } },
    'date': { t: '(tidak ada input)', def: '', f: 'tanggal.jsp', code: function () { return '<p>\nTgl Sekarang:\n<%= (new java.util.Date()).toLocaleString()%>\n</p>'; }, out: function () { return '<p>Tgl Sekarang: ' + new Date().toLocaleString('id-ID') + '</p>'; } },
    'if': { t: 'Nilai variabel hari (1-7)', def: 3, f: 'ifelse.jsp', code: function (v) { return '<%! int hari = ' + v + '; %>\n<html>\n<head><title>Contoh IF...ELSE</title></head>\n<body>\n<% if (hari == 1 || hari == 7) { %>\n<p> Merupakan Hari Weekend</p>\n<% } else { %>\n<p> Hari ini bukan weekend</p>\n<% } %>\n</body>\n</html>'; }, out: function (v) { v = parseInt(v, 10); return (v == 1 || v == 7) ? '<p>Merupakan Hari Weekend</p>' : '<p>Hari ini bukan weekend</p>'; } },
    'elseif': { t: 'Nilai variabel nilai', def: 80, f: 'ifelseif.jsp', code: function (v) { return '<%! int nilai = ' + v + '; %>\n<html>\n<head><title>Contoh IF..ELSE IF..ELSE ..</title></head>\n<body>\n<% if ( nilai > 84 ) { %>\n<p> Grade Anda A</p>\n<% } else if( nilai > 74 ) { %>\n<p> Grade Anda B </p>\n<% } else { %>\n<p> Grade Anda Kurang Sekali </p>\n<% } %>\n</body>\n</html>'; }, out: function (v) { v = parseFloat(v); return v > 84 ? '<p>Grade Anda A</p>' : (v > 74 ? '<p>Grade Anda B</p>' : '<p>Grade Anda Kurang Sekali</p>'); } },
    'loop': { t: 'Banyak perulangan', def: 5, f: 'perulangan.jsp', code: function (v) { return '<html>\n<head><title>Contoh Perulangan ..</title></head>\n<body>\n<% for (int i = 1; i <= ' + v + '; i++) { %>\n<p> Perulangan ke-<%=i%> </p>\n<% } %>\n</body>\n</html>'; }, out: function (v) { var o = ''; for (var i = 1; i <= Math.min(100, parseInt(v, 10) || 0); i++) o += '<p>Perulangan ke-' + i + '</p>'; return o; } }
};
var w14Key = 'var';
function w14Run() {
    var J = JSP[w14Key], v = $('w14_in').value;
    $('w14_title').textContent = J.f; $('w14_code').textContent = J.code(v); $('w14_out').innerHTML = J.out(v);
}
function w14Pick(k) {
    w14Key = k; var J = JSP[k]; $('w14_lbl').firstChild.textContent = J.t; $('w14_in').value = J.def; $('w14_in').disabled = (k === 'date'); w14Run();
}

/* ===== P19: frame ===== */
var W19 = [['latmath.HTML', 'Latihan Matematika'], ['latobjekteks.HTML', 'Latihan Objek Teks'], ['latobjekselect.HTML', 'Latihan Objek Select'], ['latobjekcheck.HTML', 'Latihan Objek Check']];
function w19Awal() {
    $('w19_isi').innerHTML = '<div style="background:pink;color:#000;text-align:center;padding:1rem;height:100%;"><h2>Halaman ini dengan menggunakan</h2><h2>Frame</h2><p><strong>Design By Irawan Afrianto</strong></p><p><strong>Email : irawan@unikom.ac.id</strong></p></div>';
    $('w19_info').innerHTML = 'Frame kanan (<code>fr2</code>) menampilkan <b>awal.html</b>.';
}
function w19Tampil() {
    var i = parseInt(document.querySelector('input[name="w19_rb"]:checked').value, 10);
    $('w19_isi').innerHTML = '<div style="background:#fff;color:#000;padding:1rem;height:100%;"><h3>' + W19[i][1] + '</h3><p>Isi halaman <b>' + W19[i][0] + '</b> dimuat di frame ini.</p></div>';
    $('w19_info').innerHTML = '<code>parent.fr2.location.href="' + W19[i][0] + '"</code> &rarr; hanya frame kanan yang berganti, menu di kiri tetap.';
}
/* ===== P20: MVC ===== */
var MVC = [
    ['browser', 'Web browser mengirim request ke web container dan diterima oleh Servlet sebagai Controller.'],
    ['controller', 'Controller mengecek request lalu memprosesnya. Output-nya dapat berbentuk objek / java bean.'],
    ['model', 'Model merepresentasikan data pada database dalam bentuk objek-objek yang saling berhubungan (ORM - Object Relationship Mapping).'],
    ['controller', 'Controller menyerahkan tugas menampilkan objek kepada View (file JSP).'],
    ['view', 'View mengambil data berbentuk objek / java bean lalu memprosesnya.'],
    ['browser', 'View mengirim response ke web browser untuk menampilkan data, memakai syntax EL dan library JSTL.']];
var w20i = 0;
function w20Step(d) {
    w20i = Math.max(0, Math.min(MVC.length - 1, w20i + d));
    var names = { browser: 'Web Browser', controller: 'Controller (Servlet)', model: 'Model (ORM / Database)', view: 'View (JSP)' };
    $('w20_row').innerHTML = Object.keys(names).map(function (k) { return '<div class="mvc-box' + (MVC[w20i][0] === k ? ' on' : '') + '">' + names[k] + '</div>'; }).join('<span class="mvc-arrow">&harr;</span>');
    $('w20_text').innerHTML = '<b>Langkah ' + (w20i + 1) + ' dari ' + MVC.length + ':</b> ' + MVC[w20i][1];
}
/* ===== P21: servlet ===== */
var w21n = 0, w21up = false, w21L = [];
function w21Show() { $('w21_log').textContent = w21L.join('\n') || '(servlet belum di-load)'; }
function w21Req() {
    if (!w21up) { w21up = true; w21L.push('[Container] servlet di-load -> init() dipanggil (sekali)'); }
    w21n++; w21L.push('[Request #' + w21n + '] thread baru -> service() -> doGet() -> response dikirim');
    w21Show();
}
function w21Stop() {
    if (!w21up) { w21L.push('(servlet belum berjalan, tidak ada yang dihentikan)'); }
    else { w21up = false; w21n = 0; w21L.push('[Container] destroy() dipanggil (sekali) -> servlet tidak melayani lagi'); }
    w21Show();
}
function w21Reset() { w21n = 0; w21up = false; w21L = []; w21Show(); }
function w21Hasil() {
    var m = $('w21_m').value, u;
    try { u = new URL($('w21_url').value); } catch (e) { $('w21_out').textContent = 'URL tidak valid.'; return; }
    var seg = u.pathname.split('/').filter(Boolean), ctx = seg.length > 1 ? '/' + seg[0] : '', sp = '/' + seg.slice(seg.length > 1 ? 1 : 0).join('/');
    var port = u.port || (u.protocol === 'https:' ? '443' : '80');
    var hobi = u.searchParams.getAll('hobi'), nama = u.searchParams.get('nama');
    var rows = [['getMethod()', m], ['getRequestURI()', u.pathname], ['getRequestURL()', u.origin + u.pathname], ['getProtocol()', 'HTTP/1.1'], ['getRemoteAddr()', '127.0.0.1 (contoh)'], ['getRemotePort()', '52114 (contoh)'],
        ['getServerName()', u.hostname], ['getServerPort()', port], ['getServletPath()', sp], ['getContentType()', m === 'POST' ? 'application/x-www-form-urlencoded' : 'null'],
        ['getParameter("nama")', nama === null ? 'null' : nama], ['getParameterValues("hobi")', hobi.length ? '[' + hobi.join(', ') + ']' : 'null']];
    $('w21_out').innerHTML = rows.map(function (r) { return esc(r[0]) + ' : <b>' + esc(r[1]) + '</b>'; }).join('<br>');
}

/* ===== Init ===== */
document.addEventListener('DOMContentLoaded', function () {
    initPlaygrounds();
    document.querySelectorAll('#navBtns button').forEach(function (b) { b.onclick = function () { navShow(b.getAttribute('data-nav')); }; });
    navShow('linier');
    ['w3_nim', 'w3_nama', 'w3_kelas', 'w3_jml', 'w3_hrg', 'w3_r'].forEach(function (i) { $(i).addEventListener('input', w3Update); }); w3Update();
    w4Hitung(); $('w4_sisi').addEventListener('input', w4Kubus); w4Kubus(); w5Kirim();
    document.querySelectorAll('#w7_btns button').forEach(function (b) {
        b.onclick = function () { w7Key = b.getAttribute('data-k'); w7Run(); };
    });
    $('w7_n').addEventListener('input', w7Run); w7Run();
    ['w9_m', 'w9_b', 'w9_p', 'w9_s'].forEach(function (i) { $(i).addEventListener('input', w9Update); }); w9Update();
    w11Hitung(); w12Salam('a', false); w12Akar('a'); w12Salam('b', false); w12Akar('b');
    document.querySelectorAll('#w14_btns button').forEach(function (b) { b.onclick = function () { w14Pick(b.getAttribute('data-k')); }; });
    w14Pick('var');
    w10Init(); w19Awal(); w20Step(0); w21Show(); w21Hasil();
});
