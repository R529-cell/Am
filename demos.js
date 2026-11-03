window.PG = {
 "p2": [
  {
   "name": "Contoh01.html",
   "code": "\u003chtml>\n\u003chead>\n\u003ctitle>Contoh 01 \u003c/title>\n\u003c/head>\n\u003cbody>\nHalo... \u003cbr>\nini script HTML pertamaku\n\u003c/body>\n\u003c/html>",
   "auto": true
  },
  {
   "name": "Contoh02.html (tag format)",
   "code": "\u003chtml>\n\u003chead>\n\u003ctitle>Contoh 02\u003c/title>\n\u003c/head>\n\u003cbody bgcolor=\"#00CCFF\" text=\"#FF0000\">\n\u003cp> Ini adalah contoh penggunaan formating TAG dalam HTML \u003cbr>\nmasing-masing TAG memiliki atribut masing-masing\u003cbr> \u003c/p>\n\u003cfont color=\"#000000\">Ini juga termasuk contoh penggunaan formating TAG\u003cbr>\u003c/font>\n\u003ch1>\u003cmarquee width=\"50%\" bgcolor=\"#000099\">Ini juga salah satu penggunaan Tag\u003c/marquee> \u003c/h1>\n\u003c/body>\n\u003c/html>",
   "auto": true
  },
  {
   "name": "LatihanTag.html (heading)",
   "code": "\u003chtml>\n\u003cbody bgcolor=\"magenta\">\n\u003cp>Perhatikan bahwa halaman ini seharusnya berwarna magenta. \u003c/p>\n\u003ch1> Ini adalah heading 1 \u003c/h1>\n\u003ch2> Ini adalah heading 2 \u003c/h2>\n\u003ch3> Ini adalah heading 3 \u003c/h3>\n\u003ch4> Ini adalah heading 4 \u003c/h4>\n\u003ch5> Ini adalah heading 5 \u003c/h5>\n\u003ch6> Ini adalah heading 6 \u003c/h6>\n\u003cp> Gunakan tag heading hanya untuk membuat heading saja. Jangan menggunakan\ntag tersebut hanya untuk membuat tampilan huruf tebal. Gunakan tag lain untuk\nkeperluan itu. \u003c/p>\n\u003ch1 align=\"center\">Ini adalah heading 1\u003c/h1>\n\u003cp>Heading di atas telah diposisikan untuk berada di tengah halaman ini. \u003c/p>\n\u003c/body>\n\u003c/html>",
   "auto": true
  },
  {
   "name": "Rowspan (gabung vertikal)",
   "code": "\u003ctable border=\"1\" width=\"60%\" height=\"120\">\n\u003ctr>\n\u003ctd rowspan=\"3\">Sel 1 (rowspan=3)\u003c/td>\n\u003ctd>Sel 2\u003c/td>\n\u003c/tr>\n\u003ctr>\n\u003ctd>Sel 3\u003c/td>\n\u003c/tr>\n\u003ctr>\n\u003ctd>Sel 4\u003c/td>\n\u003c/tr>\n\u003c/table>",
   "auto": true
  },
  {
   "name": "Colspan (gabung horizontal)",
   "code": "\u003ctable border=\"1\" width=\"60%\" height=\"120\">\n\u003ctr>\n\u003ctd colspan=\"2\">Sel 1 (colspan=2)\u003c/td>\n\u003c/tr>\n\u003ctr>\n\u003ctd>Sel 2\u003c/td>\n\u003ctd>Sel 3\u003c/td>\n\u003c/tr>\n\u003ctr>\n\u003ctd>Sel 4\u003c/td>\n\u003ctd>Sel 5\u003c/td>\n\u003c/tr>\n\u003c/table>",
   "auto": true
  },
  {
   "name": "Contoh03.html (Data Siswa)",
   "code": "\u003chtml>\n\u003chead>\n\u003ctitle> Contoh 03 - Penggunaan Tabel\u003c/title>\n\u003c/head>\n\u003cbody>\n\u003ch1>Tabel Data Siswa\u003c/h1>\n\u003ctable border=\"1\" bgcolor=\"pink\">\n\u003ctr>\n\u003cth>Nim\u003c/th>\u003cth>Nama\u003c/th>\u003cth>Alamat\u003c/th>\u003cth>Tempat, Tanggal Lahir\u003c/th>\u003cth>Jurusan\u003c/th>\n\u003c/tr>\n\u003ctr>\n\u003ctd>12110001\u003c/td>\u003ctd>Anita\u003c/td>\u003ctd>Cengkareng\u003c/td>\u003ctd>Jakarta, 20 Agustus 1990\u003c/td>\u003ctd>Sistem Informasi\u003c/td>\n\u003c/tr>\n\u003ctr>\n\u003ctd>12110002\u003c/td>\u003ctd>Aditya\u003c/td>\u003ctd>Tangerang\u003c/td>\u003ctd>Semarang, 01 Januari 1989\u003c/td>\u003ctd>Sistem Informasi\u003c/td>\n\u003c/tr>\n\u003ctr>\n\u003ctd>12110003\u003c/td>\u003ctd>Firman\u003c/td>\u003ctd>Bogor\u003c/td>\u003ctd>Jakarta, 18 September 1988\u003c/td>\u003ctd>Sistem Informasi\u003c/td>\n\u003c/tr>\n\u003c/table>\n\u003c/body>\n\u003c/html>",
   "auto": true
  },
  {
   "name": "tabelcell.html (cellpadding & cellspacing)",
   "code": "\u003c!DOCTYPE html>\n\u003chtml>\n\u003chead>\n\u003ctitle>Penggunaan atribut Cellpadding dan cellspacing dalam Tabel\u003c/title>\n\u003c/head>\n\u003cbody>\n\u003ch3>Belajar atribut cellpadding &amp; cellspacing dalam Tabel\u003c/h3>\n\u003ctable border=\"1\" cellspacing=\"0\" cellpadding=\"0\">\n\u003ctr>\u003ctd>Baris 1, Kolom 1\u003c/td>\u003ctd>Baris 1, Kolom 2\u003c/td>\u003ctd>Baris 1, Kolom 3\u003c/td>\u003c/tr>\n\u003ctr>\u003ctd>Baris 2, Kolom 1\u003c/td>\u003ctd>Baris 2, Kolom 2\u003c/td>\u003ctd>Baris 2, Kolom 3\u003c/td>\u003c/tr>\n\u003c/table>\n\u003cbr />\n\u003ctable border=\"1\" cellspacing=\"3\" cellpadding=\"5\">\n\u003ctr>\u003ctd>Baris 1, Kolom 1\u003c/td>\u003ctd>Baris 1, Kolom 2\u003c/td>\u003ctd>Baris 1, Kolom 3\u003c/td>\u003c/tr>\n\u003ctr>\u003ctd>Baris 2, Kolom 1\u003c/td>\u003ctd>Baris 2, Kolom 2\u003c/td>\u003ctd>Baris 2, Kolom 3\u003c/td>\u003c/tr>\n\u003c/table>\n\u003c/body>\n\u003c/html>",
   "auto": true
  }
 ],
 "p6": [
  {
   "name": "IF-ELSE: Bilangan",
   "code": "\u003cHTML>\n\u003cHEAD>\u003cTITLE>Percabangan IF-ELSE\u003c/TITLE>\u003c/HEAD>\n\u003cBODY>\n\u003cSCRIPT language=\"JavaScript\">\nfunction tanyabilangan()\n{\n  var bil = parseFloat(document.fform.bilangan.value);\n  var jenis = \" \";\n  if (isNaN(bil))\n  {\n    alert(\"Anda Belum memasukkan Bilangan\");\n  }\n  else\n  {\n    if (bil > 0)\n    {\n      jenis = \" Adalah bilangan Positif\";\n    }\n    else if (bil \u003c 0)\n    {\n      jenis = \" Adalah bilangan Negatif\";\n    }\n    else\n    {\n      jenis = \" Adalah Nol\";\n    }\n    alert (bil+\" \"+jenis);\n  }\n}\n\u003c/SCRIPT>\n\u003cFORM NAME =\"fform\">\n\u003cH2>Bilangan Negatif, Nol, Atau Positif ???\u003c/H2>\nMasukkan Bilangan :\u003cinput type=\"text\" size=\"11\" name=\"bilangan\">\n\u003cP>\n\u003cINPUT TYPE=\"button\" value=\"Tanya\" onclick=\"tanyabilangan()\">\n\u003cINPUT TYPE=\"reset\" value=\"Ulang\"> \u003c/p>\n\u003c/FORM>\n\u003c/BODY>\n\u003c/HTML>",
   "auto": false
  },
  {
   "name": "IF-ELSE 2: Travel",
   "code": "\u003cHTML>\n\u003cHEAD>\u003cTITLE>Percabangan IF-ELSE 2\u003c/TITLE>\u003c/HEAD>\n\u003cBODY>\n\u003cSCRIPT language=\"JavaScript\">\nfunction hitungtotal()\n{\n  var tujuan = document.fform.itujuan.value;\n  var jumlahtiket = parseFloat(document.fform.ijumlah.value);\n  var ht = 0.0; var sub = 0.0; var diskon = 0.0; var total = 0.0;\n  if (tujuan==\"Jakarta\")\n  {\n    ht = 100000;\n  }\n  else if (tujuan==\"Cirebon\")\n  {\n    ht = 150000;\n  }\n  else\n  {\n    ht = 200000;\n  }\n  sub = jumlahtiket*ht;\n  if (document.fform.imember.checked==true)\n  {\n    diskon = 0.10*sub;\n  }\n  else\n  {\n    diskon = 0.0;\n  }\n  total = sub-diskon;\n  document.fform.otiket.value = ht;\n  document.fform.osub.value = sub;\n  document.fform.odiskon.value = diskon;\n  document.fform.ototal.value = total;\n}\n\u003c/SCRIPT>\n\u003cFORM NAME =\"fform\">\n\u003ctable border=\"1\" align=\"center\" width=\"95%\">\n\u003ctr>\u003ctd colspan=\"2\">\u003cH2 ALIGN=\"center\">Travel Bintang Abadi\u003c/H2>\u003c/td>\u003c/tr>\n\u003ctr>\n\u003ctd>\u003cPRE>Nama         :\u003cinput type=\"text\" size=\"20\" name=\"inama\">\nTujuan       :\u003cselect name=\"itujuan\" size=1>\n              \u003coption value=\"Jakarta\">Jakarta\u003c/option>\n              \u003coption value=\"Cirebon\">Cirebon\u003c/option>\n              \u003coption value=\"Tasikmalaya\">Tasikmalaya\u003c/option>\n              \u003c/select>\nJumlah Tiket :\u003cinput type=\"text\" size=\"11\" name=\"ijumlah\" value=\"1\">\nMember       :\u003cinput type=\"checkbox\" name=\"imember\">Ya\u003c/PRE>\u003c/td>\n\u003ctd>\u003cPRE>Harga Tiket :\u003cinput type=\"text\" size=\"10\" name=\"otiket\">\nSub Total   :\u003cinput type=\"text\" size=\"10\" name=\"osub\">\nDiskon      :\u003cinput type=\"text\" size=\"10\" name=\"odiskon\">\nTotal Bayar :\u003cinput type=\"text\" size=\"10\" name=\"ototal\">\u003c/PRE>\u003c/td>\n\u003c/tr>\n\u003ctr>\u003ctd colspan=\"2\">\u003ccenter>\n\u003cINPUT TYPE=\"button\" value=\"Hitung\" onclick=\"hitungtotal()\">\n\u003cINPUT TYPE=\"reset\" value=\"Ulang\">\n\u003c/center>\u003c/td>\u003c/tr>\n\u003c/table>\n\u003c/FORM>\n\u003c/BODY>\n\u003c/HTML>",
   "auto": true
  },
  {
   "name": "IF-ELSE 3: Indeks Prestasi",
   "code": "\u003cHTML>\n\u003cHEAD>\u003cTITLE>Percabangan IF-ELSE 3\u003c/TITLE>\u003c/HEAD>\n\u003cBODY>\n\u003cSCRIPT language=\"JavaScript\">\nfunction hitungip()\n{\n  var quis  = parseFloat(document.fform.iquis.value);\n  var tugas = parseFloat(document.fform.itugas.value);\n  var uts   = parseFloat(document.fform.iuts.value);\n  var uas   = parseFloat(document.fform.iuas.value);\n  var ip = \" \";\n  var ket = \" \";\n  var na = (0.10*quis)+(0.20*tugas)+(0.30*uts)+(0.40*uas);\n  if ((na > 80) && (na \u003c= 100))\n  {\n    ip = \"A\"; ket = \"Lulus dengan Sangat Baik\";\n  }\n  else if ((na > 68) && (na \u003c= 80))\n  {\n    ip = \"B\"; ket = \"Lulus dengan Baik\";\n  }\n  else if ((na > 55) && (na \u003c= 68))\n  {\n    ip = \"C\"; ket = \"Lulus dengan Cukup\";\n  }\n  else if ((na > 38) && (na \u003c= 55))\n  {\n    ip = \"D\"; ket = \"Lulus dengan Kurang\";\n  }\n  else\n  {\n    ip = \"E\"; ket = \"Tidak Lulus\";\n  }\n  document.fform.ona.value = na;\n  document.fform.oip.value = ip;\n  document.fform.oket.value = ket;\n}\n\u003c/SCRIPT>\n\u003cFORM NAME =\"fform\">\n\u003ctable border=\"1\" width=\"100%\" ALIGN=\"center\">\n\u003ctr>\u003ctd colspan=\"4\">\u003cH2 ALIGN=\"center\">Menghitung Indeks Prestasi\u003c/H2>\u003c/td>\u003c/tr>\n\u003ctr>\n\u003ctd>Quis (10%) :\u003cinput type=\"text\" size=\"10\" name=\"iquis\" value=\"80\">\u003c/td>\n\u003ctd>Tugas (20%):\u003cinput type=\"text\" size=\"10\" name=\"itugas\" value=\"85\">\u003c/td>\n\u003ctd>UTS (30%)  :\u003cinput type=\"text\" size=\"10\" name=\"iuts\" value=\"75\">\u003c/td>\n\u003ctd>UAS (40%)  :\u003cinput type=\"text\" size=\"10\" name=\"iuas\" value=\"90\">\u003c/td>\n\u003c/tr>\n\u003ctr>\u003ctd colspan=\"4\" align=\"center\">\u003cINPUT TYPE=\"button\" value=\"Hitung\" onclick=\"hitungip()\">\u003cINPUT TYPE=\"reset\" value=\"Ulang\">\u003c/td>\u003c/tr>\n\u003ctr>\u003ctd colspan=\"4\">Nilai Akhir :\u003cinput type=\"text\" size=\"8\" name=\"ona\">\n IP :\u003cinput type=\"text\" size=\"5\" name=\"oip\">\n Keterangan :\u003cinput type=\"text\" size=\"25\" name=\"oket\">\u003c/td>\u003c/tr>\n\u003c/table>\n\u003c/FORM>\n\u003c/BODY>\n\u003c/HTML>",
   "auto": true
  },
  {
   "name": "Switch: Nama Bulan",
   "code": "\u003cHTML>\n\u003cHEAD>\u003cTITLE>Percabangan Switch\u003c/TITLE>\u003c/HEAD>\n\u003cBODY>\n\u003cSCRIPT language=\"JavaScript\">\nfunction tanyabulan()\n{\n  var bulan = parseFloat(document.fform.ibulan.value);\n  var namabulan = \" \";\n  switch (bulan)\n  {\n    case 1 : namabulan=\"Bulan ke 1 adalah = Januari\"; break;\n    case 2 : namabulan=\"Bulan ke 2 adalah = Februari\"; break;\n    case 3 : namabulan=\"Bulan ke 3 adalah = Maret\"; break;\n    case 4 : namabulan=\"Bulan ke 4 adalah = April\"; break;\n    case 5 : namabulan=\"Bulan ke 5 adalah = Mei\"; break;\n    case 6 : namabulan=\"Bulan ke 6 adalah = Juni\"; break;\n    case 7 : namabulan=\"Bulan ke 7 adalah = Juli\"; break;\n    case 8 : namabulan=\"Bulan ke 8 adalah = Agustus\"; break;\n    case 9 : namabulan=\"Bulan ke 9 adalah = September\"; break;\n    case 10 : namabulan=\"Bulan ke 10 adalah = Oktober\"; break;\n    case 11 : namabulan=\"Bulan ke 11 adalah = November\"; break;\n    case 12 : namabulan=\"Bulan ke 12 adalah = Desember\"; break;\n    default : namabulan=\"Anda salah mengisi\";\n  }\n  alert(namabulan);\n}\n\u003c/SCRIPT>\n\u003cFORM NAME =\"fform\">\n\u003cH2>Penggunaan Percabangan Switch\u003c/H2>\u003cHR>\nMasukkan Nomor Bulan [1-12] :\u003cinput type=\"text\" size=\"2\" name=\"ibulan\" value=\"8\">\n\u003cINPUT TYPE=\"button\" value=\"Hitung\" onclick=\"tanyabulan()\">\u003cINPUT TYPE=\"reset\" value=\"Ulang\">\n\u003c/FORM>\n\u003c/BODY>\n\u003c/HTML>",
   "auto": true
  },
  {
   "name": "Latihan: Travel (Kelas)",
   "code": "\u003cHTML>\n\u003cHEAD>\u003cTITLE>Latihan Travel Bintang Abadi\u003c/TITLE>\u003c/HEAD>\n\u003cBODY>\n\u003cSCRIPT language=\"JavaScript\">\n// Harga tiket: baris = tujuan, kolom = kelas\nvar harga = {\n  Jakarta:  {Eksekutif: 70000, Bisnis: 40000, Ekonomi: 10000},\n  Solo:     {Eksekutif: 80000, Bisnis: 50000, Ekonomi: 20000},\n  Surabaya: {Eksekutif: 90000, Bisnis: 60000, Ekonomi: 30000}\n};\nfunction hitung()\n{\n  var f = document.fform;\n  var tujuan = f.itujuan.value;\n  var kelas  = f.ikelas.value;\n  var jumlah = parseFloat(f.ijumlah.value);\n  var ht = harga[tujuan][kelas];\n  var sub = ht * jumlah;\n  var diskon = 0;\n  if (f.imember[0].checked)\n  {\n    diskon = 0.10 * sub;\n  }\n  f.oharga.value = ht;\n  f.osub.value = sub;\n  f.odiskon.value = diskon;\n  f.ototal.value = sub - diskon;\n}\n\u003c/SCRIPT>\n\u003cFORM NAME=\"fform\">\n\u003cH3>Travel Bintang Abadi\u003c/H3>\n\u003cPRE>Nama Pemesan :\u003cinput type=\"text\" name=\"inama\" size=\"20\" value=\"Abie\">\nTujuan       :\u003cselect name=\"itujuan\">\u003coption>Jakarta\u003c/option>\u003coption>Solo\u003c/option>\u003coption>Surabaya\u003c/option>\u003c/select>\nKelas        :\u003cselect name=\"ikelas\">\u003coption>Eksekutif\u003c/option>\u003coption>Bisnis\u003c/option>\u003coption>Ekonomi\u003c/option>\u003c/select>\nBanyak Tiket :\u003cinput type=\"text\" name=\"ijumlah\" size=\"5\" value=\"2\">\nMember       :\u003cinput type=\"radio\" name=\"imember\" checked>Member \u003cinput type=\"radio\" name=\"imember\">Bukan Member\n\u003c/PRE>\n\u003cINPUT TYPE=\"button\" value=\"Hitung\" onclick=\"hitung()\">\n\u003cPRE>Harga Tiket :\u003cinput type=\"text\" name=\"oharga\" size=\"10\">\nSub Total   :\u003cinput type=\"text\" name=\"osub\" size=\"10\">\nDiskon      :\u003cinput type=\"text\" name=\"odiskon\" size=\"10\">\nTotal Bayar :\u003cinput type=\"text\" name=\"ototal\" size=\"10\">\u003c/PRE>\n\u003c/FORM>\n\u003c/BODY>\n\u003c/HTML>",
   "auto": true
  }
 ],
 "p8": [
  {
   "name": "a. contohjs1: menuliskan teks",
   "code": "\u003chtml>\n\u003chead>\n\u003ctitle> Untitled Document\u003c/title>\n\u003c/head>\n\u003cbody>\n\u003cscript type=\"text/javascript\">\ndocument.write(\"Hello World!\")\n\u003c/script>\n\u003c/body>\n\u003c/html>",
   "auto": true
  },
  {
   "name": "b. contohjs2: format dengan tag",
   "code": "\u003chtml>\n\u003chead>\n\u003ctitle> Untitled Document\u003c/title>\n\u003c/head>\n\u003cbody>\n\u003cscript type=\"text/javascript\">\ndocument.write(\"\u003ch1>Hello World!\u003c/h1>\")\n\u003c/script>\n\u003c/body>\n\u003c/html>",
   "auto": true
  },
  {
   "name": "c. contohjs3: script di HEAD (onLoad)",
   "code": "\u003chtml>\n\u003chead>\n\u003ctitle> Untitled Document\u003c/title>\n\u003cscript type=\"text/javascript\">\nfunction message( )\n{\nalert(\"This alert box was called with the onload event\")\n}\n\u003c/script>\n\u003c/head>\n\u003cbody onLoad=\"message( )\">\nHalaman dimuat: fungsi message() dipanggil lewat event onLoad.\n\u003c/body>\n\u003c/html>",
   "auto": false
  },
  {
   "name": "d. contohjs4: script di BODY",
   "code": "\u003chtml>\n\u003chead>\n\u003ctitle> Untitled Document\u003c/title>\n\u003c/head>\n\u003cbody>\n\u003cscript type=\"text/javascript\">\ndocument.write(\"This message is written when the page loads\")\n\u003c/script>\n\u003c/body>\n\u003c/html>",
   "auto": true
  },
  {
   "name": "e. contohjs5: fungsi",
   "code": "\u003chtml>\n\u003chead>\n\u003cscript type=\"text/javascript\">\nfunction myfunction( )\n{\nalert(\"HELLO\")\n}\n\u003c/script>\n\u003c/head>\n\u003cbody>\n\u003cform>\n\u003cinput type=\"button\" onclick=\"myfunction( )\" value=\"Call function\">\n\u003c/form>\n\u003cp>By pressing the button, a function will be called. The function will alert a message.\u003c/p>\n\u003c/body>\n\u003c/html>",
   "auto": true
  },
  {
   "name": "f. contohjs6: fungsi + argumen",
   "code": "\u003chtml>\n\u003chead>\n\u003cscript type=\"text/javascript\">\nfunction myfunction(txt)\n{\nalert(txt)\n}\n\u003c/script>\n\u003c/head>\n\u003cbody>\n\u003cform>\n\u003cinput type=\"button\" onclick=\"myfunction('Good Morning!')\" value=\"Selamat Pagi\">\n\u003cinput type=\"button\" onclick=\"myfunction('Good Evening!')\" value=\"Selamat Malam\">\n\u003c/form>\n\u003cp>\nketika di tekan salah satu tombol maka fungsi akan di panggil dan pesan akan di tampilkan\n\u003c/p>\n\u003c/body>\n\u003c/html>",
   "auto": true
  },
  {
   "name": "g. contohjs7: tanggal lengkap",
   "code": "\u003chtml>\n\u003cbody>\n\u003cscript type=\"text/javascript\">\nvar d=new Date( )\nvar weekday= new Array(\"Sunday\",\"Monday\",\"Tuesday\",\"Wednesday\",\"Thursday\",\"Friday\",\"Saturday\")\nvar monthname= new Array(\"Jan\",\"Feb\",\"Mar\",\"Apr\",\"May\",\"Jun\",\"Jul\",\"Aug\",\"Sep\",\"Oct\",\"Nov\",\"Dec\")\ndocument.write(weekday[d.getDay( )] + \" \")\ndocument.write(d.getDate( ) + \". \")\ndocument.write(monthname[d.getMonth( )] + \" \")\ndocument.write(d.getFullYear( ))\n\u003c/script>\n\u003c/body>\n\u003c/html>",
   "auto": true
  },
  {
   "name": "Latihan: prompt, confirm, alert",
   "code": "\u003c!DOCTYPE html>\n\u003chtml>\n\u003chead>\n\u003cscript type=\"text/javascript\">\n// isi file program.js (dipanggil lewat \u003cscript src=\"program.js\">)\nvar n = prompt(\"Masukan nama anda:\");\nvar c = confirm(\"Hai \"+n+\"! Apakah saya tampan?\");\nif (c == true) {\n alert('Oh Thanks!!');\n}else{\n alert('Why?!!');\n}\n\u003c/script>\n\u003c/head>\n\u003cbody>\nHalaman latihan: dialog prompt, confirm, dan alert muncul saat halaman dimuat.\n\u003c/body>\n\u003c/html>",
   "auto": false
  }
 ],
 "p9": [
  {
   "name": "Latihan CSS (pseudo-class)",
   "code": "\u003c!DOCTYPE html>\n\u003chtml>\n\u003chead>\n\u003ctitle> Latihan CSS\u003c/title>\n\u003cstyle type=\"text/css\">\n/* a di dalam li anak pertama */\nli:first-child a { color:green; }\n/* a di dalam li anak terakhir */\nli:last-child a { color:green; }\n/* a di dalam li anak genap */\nli:nth-child(even) a { color:green; }\n/* a di dalam li anak ganjil */\nli:nth-child(odd) a { color:violet; }\n/* p pertama */\np:first-of-type { color: red; }\n/* p terakhir */\np:last-of-type { color: orange; }\n\u003c/style>\n\u003c/head>\n\u003cbody>\n\u003ca href=\"#\" class=\"hello\">Hello World\u003c/a>\n\u003cul>\n\u003cli>\u003ca href=\"#\">Link 1\u003c/a>\u003c/li>\n\u003cli>\u003ca href=\"#\">Link 2\u003c/a>\u003c/li>\n\u003cli>\u003ca href=\"#\">Link 3\u003c/a>\u003c/li>\n\u003cli>\u003ca href=\"#\">Link 4\u003c/a>\u003c/li>\n\u003cli>\u003ca href=\"#\">Link 5\u003c/a>\u003c/li>\n\u003cli>\u003ca href=\"#\">Link 6\u003c/a>\u003c/li>\n\u003cli>\u003ca href=\"#\">Link 7\u003c/a>\u003c/li>\n\u003cli>\u003ca href=\"#\">Link 8\u003c/a>\u003c/li>\n\u003cli>\u003ca href=\"#\">Link 9\u003c/a>\u003c/li>\n\u003cli>\u003ca href=\"#\">Link 10\u003c/a>\u003c/li>\n\u003c/ul>\n\u003cp>Lorem Ipsum adalah contoh teks atau dummy dalam industri percetakan dan penataan huruf atau typesetting. Lorem Ipsum telah menjadi standar contoh teks sejak tahun 1500an.\u003c/p>\n\u003cp> Ia tidak hanya bertahan selama 5 abad, tapi juga telah beralih ke penataan huruf elektronik, tanpa ada perubahan apapun.\u003c/p>\n\u003c/body>\n\u003c/html>",
   "auto": true
  },
  {
   "name": "Selector id & class",
   "code": "\u003chtml>\n\u003chead>\n\u003cstyle type=\"text/css\">\n#teks { color: blue; font-family: Calibri; }\n.warna { background-color: lightgreen; }\nh1 { color : blue ; font-size: 24px; }\n\u003c/style>\n\u003c/head>\n\u003cbody class=\"warna\">\n\u003ch1>Selector tag h1\u003c/h1>\n\u003cp id=\"teks\">TEST: paragraf dengan selector id (#teks)\u003c/p>\n\u003c/body>\n\u003c/html>",
   "auto": true
  },
  {
   "name": "Internal vs Inline",
   "code": "\u003chtml>\n\u003chead>\n\u003ctitle>CSS Secara Internal\u003c/title>\n\u003cstyle type=\"text/css\">p{text-align:justify; background:#eef;}\u003c/style>\n\u003c/head>\n\u003cbody>\n\u003cp>Paragraph yang diatur CSS secara Internal. Teks ini rata kiri-kanan (justify) karena aturan p di dalam tag style. Tambahkan teks lebih panjang agar efek justify terlihat jelas pada beberapa baris.\u003c/p>\n\u003cp style=\"text-align:center;color:crimson;\">Paragraph yang diatur CSS secara Inline (atribut style).\u003c/p>\n\u003c/body>\n\u003c/html>",
   "auto": true
  }
 ],
 "p10": [
  {
   "name": "index.html",
   "code": "\u003c!DOCTYPE html>\n\u003chtml lang=\"en\">\n\u003chead>\n\u003cmeta charset=\"UTF-8\">\n\u003ctitle> Website Responsive\u003c/title>\n\u003cmeta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n\u003cstyle>\n* { padding: 0; margin: 0; box-sizing: border-box; }\nbody { background: #dedede; font-family: 'Verdana', arial, sans-serif; font-size: 15px; }\np { margin-bottom: 20px; line-height: 1.5em; }\nh3 { margin-bottom: 20px; border-bottom: 1px solid #aaa; }\na { text-decoration: none; color: #333; }\na:hover { color: #666; }\n\n.container { max-width: 1080px; margin: 20px auto; background: #fff; overflow: hidden; padding: 10px; }\n.header { border: 1px solid #dedede; padding: 10px; margin: 10px; background: #9E9AFB; }\n\n/* main */\n.left { width: 250px; border: 1px solid #dedede; padding: 10px; margin: 10px; float: left; }\n.left ul li a { display: block; border-bottom: 1px solid #dedede; margin-bottom: 10px; padding: 10px 5px; }\n.left ul li a:hover { color: #461AF3; }\n.middle { width: 500px; border: 1px solid #dedede; padding: 10px; margin: 10px; float: left; }\n.middle img { max-width: 100%; height: auto; }\n.middle a { font-weight: bold; }\n.right { width: 250px; border: 1px solid #dedede; padding: 10px; margin: 10px; float: left; }\n.right ul { list-style-type: none; }\n.right ul li { display: block; }\n.right ul li a { display: block; border-bottom: 1px solid #dedede; margin-bottom: 10px; padding: 10px 5px; }\n.right ul li a:hover { color: #461AF3; }\n.footer { clear: both; border: 1px solid #dedede; padding: 15px; }\n\n/* MEDIA QUERIES (Responsive) */\n@media screen and (max-width: 1080px) {\n  .container { width: 100%; }\n  .left { width: 25%; background: #D6CCFE; }\n  .middle { width: 68%; float: right; }\n  .right { clear: both; padding: 1% 4%; width: auto; float: none; background: #D6CCFE; }\n}\n/* untuk ukuran layar 780px ke bawah */\n@media screen and (max-width: 780px) {\n  .header, .footer { text-align: center; }\n  .left { width: auto; float: none; }\n  .middle { width: auto; float: none; }\n}\n\u003c/style>\n\u003c/head>\n\u003cbody>\n\u003cdiv class=\"container\">\n  \u003cdiv class=\"header\">\n    \u003ch1 align=\"center\"> Selamat Datang DI Perpustakaan XYZ \u003c/h1>\n  \u003c/div>\n  \u003cdiv class=\"main\">\n    \u003cdiv class=\"left\">\n      \u003ch3 align=\"center\">Menu\u003c/h3>\n      \u003cul>\n        \u003cli>\u003ca href=\"#\">Login\u003c/a>\u003c/li>\n        \u003cli>\u003ca href=\"#\">Home\u003c/a>\u003c/li>\n        \u003cli>\u003ca href=\"#\">Daftar Buku\u003c/a>\u003c/li>\n      \u003c/ul>\n    \u003c/div>\n    \u003cdiv class=\"middle\">\n      \u003ch3 align=\"center\">Berita\u003c/h3>\n      \u003cp align=\"center\">\u003cstrong>\u003ca href=\"#\">Membuat Design Web Responsive\u003c/a>\u003c/strong>\u003c/p>\n      \u003cp>\u003cimg src=\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='260'%3E%3Crect width='600' height='260' fill='%23b9b3ff'/%3E%3Ctext x='300' y='140' font-size='34' text-anchor='middle' fill='%23333' font-family='Verdana'%3Egambar.jpg%3C/text%3E%3C/svg%3E\" alt=\"\">\u003c/p>\n      \u003cp>\u003ca href=\"#\">Baca Selengkapnya &gt;&gt; \u003c/a>\u003c/p>\n    \u003c/div>\n    \u003cdiv class=\"right\">\n      \u003ch3 align=\"center\">Buku Terpopuler\u003c/h3>\n      \u003cul>\n        \u003cli>\u003ca href=\"#\">Web Design\u003c/a>\u003c/li>\n        \u003cli>\u003ca href=\"#\">Pemrograman\u003c/a>\u003c/li>\n        \u003cli>\u003ca href=\"#\">Database\u003c/a>\u003c/li>\n      \u003c/ul>\n    \u003c/div>\n  \u003c/div>\n  \u003cdiv class=\"footer\">\n    \u003cp align=\"center\">Copyright &copy; 2018 Belajar CSS Responsive \u003c/p>\n  \u003c/div>\n\u003c/div>\n\u003c/body>\n\u003c/html>",
   "auto": true
  }
 ],
 "p11": [
  {
   "name": "Menuliskan teks",
   "code": "\u003chtml>\n\u003cbody>\n\u003cscript type=\"text/javascript\">\ndocument.write(\"Hello World!\")\n\u003c/script>\n\u003c/body>\n\u003c/html>",
   "auto": true
  },
  {
   "name": "Memformat teks dengan tag",
   "code": "\u003chtml>\n\u003cbody>\n\u003cscript type=\"text/javascript\">\ndocument.write(\"\u003ch1>Hello World!\u003c/h1>\")\n\u003c/script>\n\u003c/body>\n\u003c/html>",
   "auto": true
  },
  {
   "name": "Script di HEAD (onload)",
   "code": "\u003chtml>\n\u003chead>\n\u003ctitle> Untitled Document\u003c/title>\n\u003cscript type=\"text/javascript\">\nfunction message( )\n{\nalert(\"This alert box was called with the onload event\")\n}\n\u003c/script>\n\u003c/head>\n\u003cbody onLoad=\"message( )\">\nHalaman dimuat: fungsi message() dipanggil lewat event onLoad.\n\u003c/body>\n\u003c/html>",
   "auto": false
  },
  {
   "name": "Script di BODY",
   "code": "\u003chtml>\n\u003chead>\n\u003ctitle> Untitled Document\u003c/title>\n\u003c/head>\n\u003cbody>\n\u003cscript type=\"text/javascript\">\ndocument.write(\"This message is written when the page loads\")\n\u003c/script>\n\u003c/body>\n\u003c/html>",
   "auto": true
  },
  {
   "name": "JavaScript eksternal",
   "code": "\u003chtml>\n\u003chead>\n\u003c/head>\n\u003cbody>\n\u003c!-- Aslinya: \u003cscript src=\"xxx.js\">\u003c/script> -->\n\u003cscript type=\"text/javascript\">\n// (isi file xxx.js)\ndocument.write(\"Teks ini ditulis oleh skrip di file eksternal xxx.js\")\n\u003c/script>\n\u003cp>\nThe actual script is in an external script file called \"xxx.js\".\n\u003c/p>\n\u003c/body>\n\u003c/html>",
   "auto": true
  },
  {
   "name": "Variabel",
   "code": "\u003chtml>\n\u003cbody>\n\u003cscript type=\"text/javascript\">\nvar name = \"Hege\"\ndocument.write(name)\ndocument.write(\"\u003ch1>\"+name+\"\u003c/h1>\")\n\u003c/script>\n\u003cp>This example declares a variable, assigns a value to it, and then displays the variable.\u003c/p>\n\u003cp>Then the variable is displayed one more time, only this time as a heading.\u003c/p>\n\u003c/body>\n\u003c/html>",
   "auto": true
  },
  {
   "name": "Fungsi",
   "code": "\u003chtml>\n\u003chead>\n\u003cscript type=\"text/javascript\">\nfunction myfunction()\n{\nalert(\"HELLO\")\n}\n\u003c/script>\n\u003c/head>\n\u003cbody>\n\u003cform>\n\u003cinput type=\"button\" onclick=\"myfunction()\" value=\"Call function\">\n\u003c/form>\n\u003cp>By pressing the button, a function will be called. The function will alert a message.\u003c/p>\n\u003c/body>\n\u003c/html>",
   "auto": true
  },
  {
   "name": "Fungsi + argumen",
   "code": "\u003chtml>\n\u003chead>\n\u003cscript type=\"text/javascript\">\nfunction myfunction(txt)\n{\nalert(txt)\n}\n\u003c/script>\n\u003c/head>\n\u003cbody>\n\u003cform>\n\u003cinput type=\"button\" onclick=\"myfunction('Hello')\" value=\"Call function\">\n\u003c/form>\n\u003cp>By pressing the button, a function with an argument will be called. The function will alert this argument.\u003c/p>\n\u003c/body>\n\u003c/html>",
   "auto": true
  },
  {
   "name": "Fungsi + argumen (lagi)",
   "code": "\u003chtml>\n\u003chead>\n\u003cscript type=\"text/javascript\">\nfunction myfunction(txt)\n{\nalert(txt)\n}\n\u003c/script>\n\u003c/head>\n\u003cbody>\n\u003cform>\n\u003cinput type=\"button\" onclick=\"myfunction('Good Morning!')\" value=\"In the Morning\">\n\u003cinput type=\"button\" onclick=\"myfunction('Good Evening!')\" value=\"In the Evening\">\n\u003c/form>\n\u003cp>\nWhen you click on one of the buttons, a function will be called. The function will alert the argument that is passed to it.\n\u003c/p>\n\u003c/body>\n\u003c/html>",
   "auto": true
  },
  {
   "name": "Fungsi return nilai",
   "code": "\u003chtml>\n\u003chead>\n\u003cscript type=\"text/javascript\">\nfunction myFunction()\n{\nreturn (\"Hello, have a nice day!\")\n}\n\u003c/script>\n\u003c/head>\n\u003cbody>\n\u003cscript type=\"text/javascript\">\ndocument.write(myFunction())\n\u003c/script>\n\u003cp>The script in the body section calls a function.\u003c/p>\n\u003cp>The function returns a text.\u003c/p>\n\u003c/body>\n\u003c/html>",
   "auto": true
  },
  {
   "name": "Fungsi argumen + return: total(2,3)",
   "code": "\u003chtml>\n\u003chead>\n\u003cscript type=\"text/javascript\">\nfunction total(numberA,numberB)\n{\nreturn numberA + numberB\n}\n\u003c/script>\n\u003c/head>\n\u003cbody>\n\u003cscript type=\"text/javascript\">\ndocument.write(total(2,3))\n\u003c/script>\n\u003cp>The script in the body section calls a function with two arguments, 2 and 3.\u003c/p>\n\u003cp>The function returns the sum of these two arguments.\u003c/p>\n\u003c/body>\n\u003c/html>",
   "auto": true
  }
 ],
 "p12": [
  {
   "name": "Array I",
   "code": "\u003cHTML>\n\u003cHEAD>\n\u003cTITLE> Latihan Objek Array\u003c/TITLE>\n\u003c/HEAD>\n\u003cBODY>\n\u003ch3>Latihan Objek Array I\u003c/H3>\nNama pada data ke 3 adalah :\n\u003cSCRIPT LANGUAGE=\"JavaScript\">\nfunction cobaarray()\n{\nnama = new Array(\"Dian\",\"Andri\",\"Irawan\");\ndocument.write(nama[2]);\n}\ncobaarray();\n\u003c/SCRIPT>\n\u003c/BODY>\n\u003c/HTML>",
   "auto": true
  },
  {
   "name": "Array II (for)",
   "code": "\u003cHTML>\n\u003cHEAD>\n\u003cTITLE> Latihan Objek Array\u003c/TITLE>\n\u003c/HEAD>\n\u003cBODY>\n\u003ch3>Latihan Objek Array II\u003c/H3>\nPemanggilan data Array dengan Perintah Perulangan For\u003cBR>\n\u003cSCRIPT LANGUAGE=\"JavaScript\">\nvar nilai = new Array(3);\nnilai[0]=\"A\";\nnilai[1]=\"B\";\nnilai[2]=\"C\";\nfor (a=0;a\u003c3;++a)\n{\ndocument.writeln(\"\u003cB>Nilai ke \"+ (a+1) +\" : \"+nilai[a]+\"\u003cBR>\");\n}\n\u003c/SCRIPT>\n\u003c/BODY>\n\u003c/HTML>",
   "auto": true
  },
  {
   "name": "Date (tanggal & jam)",
   "code": "\u003cHTML>\n\u003cHEAD>\n\u003cTITLE> Latihan Objek Date\u003c/TITLE>\n\u003c/HEAD>\n\u003cBODY bgcolor=\"lightblue\">\n\u003ch3 align=\"center\">Latihan Objek Date/Tanggal\u003c/H3>\n\u003cSCRIPT LANGUAGE=\"JavaScript\">\nvar hari = new Array(\"Minggu\",\"Senin\",\"Selasa\",\"Rabu\",\"Kamis\",\"Jumat\",\"Sabtu\");\nvar bulan = new Array(\"Januari\",\"Februari\",\"Maret\",\"April\",\"Mei\",\"Juni\",\"Juli\",\"Agustus\",\"September\",\"Oktober\",\"November\",\"Desember\");\nvar t = new Date();\nvar hari_ini = hari[t.getDay()];\nvar tanggal = t.getDate();\nvar bulan_ini = bulan[t.getMonth()];\nvar tahun = t.getFullYear();\nvar jam = t.getHours();\nvar menit = t.getMinutes();\nvar detik = t.getSeconds();\ndocument.write(\"\u003cfont size=5 face=arial>\");\ndocument.write(\"\u003cb>\u003ccenter>Sekarang adalah hari : \"+hari_ini+\", tanggal : \"+ tanggal +\" \"+ bulan_ini +\" \" +tahun);\ndocument.write(\"\u003chr width=700>\");\ndocument.write(\"\u003c/font>\");\ndocument.write(\"\u003cfont size=3 face=arial>\");\ndocument.write(\"\u003cb>\u003ccenter>Jam sekarang = \"+ jam +\":\"+ menit+\":\"+detik);\ndocument.write(\"\u003c/font>\");\n\u003c/SCRIPT>\n\u003c/BODY>\n\u003c/HTML>",
   "auto": true
  },
  {
   "name": "Math",
   "code": "\u003cHTML>\n\u003cHEAD>\n\u003cTITLE> Latihan Objek Math\u003c/TITLE>\n\u003c/HEAD>\n\u003cBODY>\n\u003ch3>Latihan Dengan Objek Math\u003c/h3>\n\u003cSCRIPT LANGUAGE=\"JavaScript\">\nvar a=10; var b=5;\nbesar=Math.max(a,b);\ndocument.write(\"antara \" + a + \" dan \"+ b +\" lebih besar \"+besar+\"\u003cbr>\");\npangkat=Math.pow(b,a);\ndocument.write(b+ \" pangkat \"+ a +\" adalah \"+pangkat+\"\u003cbr>\");\nvar ran;\nran = Math.round(Math.random()*50000);\ndocument.write(\"Anda adalah pengunjung yang ke \" + ran + \".\u003cbr>\");\nvar akar;\nakar = Math.sqrt(ran);\ndocument.write (\"Akar dari \" + ran + \" adalah \"+akar);\n\u003c/SCRIPT>\n\u003c/BODY>\n\u003c/HTML>",
   "auto": true
  }
 ],
 "p13s": [
  {
   "name": "Latihan Objek String",
   "code": "\u003cHTML>\n\u003cBODY BGCOLOR=\"lightblue\">\n\u003cH3>Latihan Objek String\u003c/H3>\n\u003cSCRIPT LANGUAGE=\"Javascript\">\nnama = \"Shafana Vevica\";\npanjang = nama.length;\nn = nama.substring(1,4);\nbesar = nama.toUpperCase();\nnamakulink = nama.link('shafa.html');\ndocument.writeln('Namaku adalah = '+ nama +'\u003cBR>');\ndocument.writeln('Panjang namaku adalah '+ panjang + ' karakter\u003cBR>');\ndocument.writeln('method BIG = '+ nama.big() +'\u003cBR>');\ndocument.writeln('method SMALL = '+ nama.small() +'\u003cBR>');\ndocument.writeln('method SUB = '+ nama.sub() +'\u003cBR>');\ndocument.writeln('method SUP = '+ nama.sup() +'\u003cBR>');\ndocument.writeln('method BOLD = '+ nama.bold() +'\u003cBR>');\ndocument.writeln('method ITALIC = '+ nama.italics() +'\u003cBR>');\ndocument.writeln('method FONTCOLOR = '+ nama.fontcolor('red') +'\u003cBR>');\ndocument.writeln('method LOWERCASE = '+ nama.toLowerCase() +'\u003cBR>');\ndocument.writeln('method UPPERCASE = '+ besar +'\u003cBR>');\ndocument.writeln('method SUBSTRING = '+ n +'\u003cBR>');\ndocument.writeln('method STRIKE = '+ nama.strike() +'\u003cBR>');\ndocument.writeln('method CharAT = '+ nama.charAt(3) +'\u003cBR>');\ndocument.writeln('method Link = '+ namakulink +'\u003cBR>');\ndocument.writeln('Index Huruf c = '+ nama.indexOf(\"c\") +'\u003cBR>');\nawal = nama.indexOf('V');\nakhir = nama.length;\ndocument.writeln('Kata Yang Tersisa = '+ nama.substring(awal,akhir) +'\u003cBR>');\n\u003c/SCRIPT>\n\u003c/BODY>\n\u003c/HTML>",
   "auto": true
  }
 ],
 "p13d": [
  {
   "name": "Latihan Objek Document",
   "code": "\u003cHTML>\n\u003cBODY>\n\u003cH3>Latihan Objek Document\u003c/H3>\u003chr>\nDengan perintah ini maka teks dalam dokumen ini akan berwarna putih\u003cBR>\n\u003cSCRIPT LANGUAGE=\"Javascript\">\nnama=\"irawan\";\ndocument.bgColor=\"blue\";\ndocument.fgColor=\"white\";\ndocument.title=\"Belajar objek Document\";\ndocument.linkColor=\"red\";\ndocument.vlinkColor=\"green\";\ndocument.alinkColor=\"white\";\nnamakulink = nama.link('ir.html');\ndocument.writeln('Warna Link = '+ namakulink +'\u003cBR>');\n\u003c/SCRIPT>\n\u003c/BODY>\n\u003c/HTML>",
   "auto": true
  }
 ],
 "p13w": [
  {
   "name": "Latihan Objek Window",
   "code": "\u003cHTML>\n\u003cBODY>\n\u003cH3>Latihan Objek Window\u003c/H3>\u003chr>\n\u003cSCRIPT LANGUAGE=\"Javascript\">\nwindow.status=\"Welcome\";\nwindow.alert(\"Selamat Datang\");\nangka=window.prompt(\"Inputkan Angka ?\",0);\ndocument.write(\"Angka favorit anda adalah =\u003cstrong>\" +angka+ \"\u003c/strong>\u003cbr>\");\ntampung=window.confirm(\"jenis kelamin anda Pria ?\");\nif(tampung)\n{\ndocument.write(\"Boleh Kenalan donk\");\n}\nelse\n{\ndocument.write(\"Ok dech\");\n}\n// window.close();  \u003c- menutup jendela aktif (dimatikan agar hasil tetap terlihat)\n\u003c/SCRIPT>\n\u003c/BODY>\n\u003c/HTML>",
   "auto": false
  }
 ],
 "p15": [
  {
   "name": "onClick",
   "code": "\u003cHTML>\n\u003cBODY>\n\u003cSCRIPT LANGUAGE=\"JavaScript\">\nfunction warna(pilihan)\n{\nalert(\"Anda Memilih Warna \" + pilihan);\ndocument.bgColor=pilihan;\n}\nfunction kipas(hidup)\n{\n// pengganti gambar fanon.gif / fanoff.gif\nvar k = document.getElementById(\"kipas\");\nk.innerHTML = hidup ? \"ON\" : \"OFF\";\nk.style.background = hidup ? \"#7CFC00\" : \"#cccccc\";\n}\n\u003c/SCRIPT>\n\u003ch1 align=\"center\">Latihan Event OnClick\u003c/h1>\n\u003chr width=\"500\" color=\"black\" noshade>\n\u003ch3 align=\"center\">Pilih warna favorit anda.\u003c/h3>\n\u003cCENTER>\n\u003cFORM>\n\u003cINPUT TYPE=\"button\" VALUE=\"Biru\" onClick=\"warna('lightblue')\">\n\u003cINPUT TYPE=\"button\" VALUE=\"Pink\" onClick=\"warna('pink')\">\n\u003cINPUT TYPE=\"button\" VALUE=\"Coklat\" onClick=\"warna('burlywood')\">\n\u003cINPUT TYPE=\"button\" VALUE=\"Kelabu\" onClick=\"warna('darkgray')\">\n\u003cINPUT TYPE=\"button\" VALUE=\"Oranye\" onClick=\"warna('peachpuff')\">\n\u003cINPUT TYPE=\"button\" VALUE=\"Putih\" onClick=\"warna('white')\">\n\u003c/FORM>\n\u003cFORM>\n\u003cDIV id=\"kipas\" style=\"width:61px;height:72px;border:2px solid #000;line-height:72px;font-weight:bold;background:#ccc;\">OFF\u003c/DIV>\u003cBR>\n\u003cINPUT TYPE=BUTTON VALUE=\" Off \" onClick=\"kipas(false)\">\n\u003cINPUT TYPE=BUTTON VALUE=\" On \" onClick=\"kipas(true)\">\n\u003c/FORM>\n\u003c/CENTER>\n\u003chr width=\"500\" color=\"black\" noshade>\n\u003c/BODY>\n\u003c/HTML>",
   "auto": true
  },
  {
   "name": "onFocus & onBlur",
   "code": "\u003cHTML>\n\u003cBODY>\n\u003cSCRIPT LANGUAGE=\"JavaScript\">\nfunction info(t) { document.getElementById(\"status\").innerHTML = t; }  // pengganti window.status\nfunction masukannim()\n{\nif (document.f.inim.value==\"\") { alert(\"anda belum memasukkan nim\"); }\n}\nfunction masukannama()\n{\nif (document.f.inama.value==\"\") { alert(\"anda belum memasukkan nama\"); }\n}\nfunction masukanalamat()\n{\nif (document.f.ialamat.value==\"\") { alert(\"anda belum memasukkan alamat\"); }\n}\nfunction terimakasih()\n{\nif ((document.f.inim.value!=\"\")&&(document.f.inama.value!=\"\")&&(document.f.ialamat.value!=\"\"))\n{\nalert(\"Terima Kasih Telah mengisi Data\");\n}\nelse\nalert(\"Mohon Data Dilengkapi\");\n}\n\u003c/SCRIPT>\n\u003ch1 align=\"center\">Latihan Event OnFocus dan OnBlur\u003c/h1>\n\u003chr width=\"600\" color=\"black\" noshade size=\"10\">\n\u003cfont face=\"arial\">\n\u003ch3 align=\"center\">R E G I S T R A S I\u003c/h3>\n\u003chr width=\"600\" color=\"black\" noshade size=\"2\">\n\u003cp align=\"center\" id=\"status\" style=\"background:#ffffcc;border:1px dashed #999;\">(status: klik salah satu kolom)\u003c/p>\n\u003cCENTER>\n\u003cform name=\"f\" method=\"get\">\n\u003cTABLE>\n\u003ctr>\u003ctd>NIM\u003c/td>\u003ctd>:\u003c/td>\u003ctd>\u003cinput type=\"text\" name=\"inim\" size=\"9\" onFocus=\"info('Silahkan Mengisi NIM Anda')\" onBlur=\"masukannim()\">\u003c/td>\u003c/tr>\n\u003ctr>\u003ctd>NAMA\u003c/td>\u003ctd>:\u003c/td>\u003ctd>\u003cinput type=\"text\" name=\"inama\" size=\"23\" onFocus=\"info('Silahkan Mengisi Nama Anda')\" onBlur=\"masukannama()\">\u003c/td>\u003c/tr>\n\u003ctr>\u003ctd>ALAMAT\u003c/td>\u003ctd>:\u003c/td>\u003ctd>\u003cinput type=\"text\" name=\"ialamat\" size=\"34\" onFocus=\"info('Silahkan Mengisi Alamat Anda')\" onBlur=\"masukanalamat()\">\u003c/td>\u003c/tr>\n\u003c/table>\n\u003chr width=\"600\" color=\"black\" noshade size=\"2\">\n\u003cp>\u003cinput type=\"BUTTON\" value=\"Kirim\" Onclick=\"terimakasih()\">\n\u003cinput type=\"reset\" value=\"Reset\">\u003c/p>\n\u003c/form>\n\u003c/center>\n\u003c/BODY>\n\u003c/HTML>",
   "auto": true
  },
  {
   "name": "onLoad & onUnload",
   "code": "\u003cHTML>\n\u003cBODY Onload=\"tanggal()\" OnUnload=\"tutup()\">\n\u003cSCRIPT LANGUAGE=\"JavaScript\">\nfunction tanggal()\n{\nvar d = new Date();\nvar y = d.getFullYear();\nvar m = d.getMonth() + 1;\nvar tgl = d.getDate();\nvar t = tgl + '/' + m + '/' + y + ' ';\ndocument.getElementById(\"info\").innerHTML = \"Anda datang pada tanggal \" + t + \".\";\nalert(\"Selamat Datang Teman \\n Silahkan Masuk Ke Websiteku\");\n}\nfunction pad(n) { return (n\u003c10) ? \"0\"+n : n; }\nfunction timer()\n{\nvar d = new Date();\ndocument.f.txtwaktu.value = \" \" + pad(d.getHours()) + \" : \" + pad(d.getMinutes()) + \" : \" + pad(d.getSeconds());\nsetTimeout(\"timer()\",200);\n}\nfunction tutup()\n{\nwindow.alert(\"Terimakasih Telah Berkunjung\\nJangan lupa Datang kembali Ya..\");\n}\n\u003c/SCRIPT>\n\u003ch1 align=\"center\">Latihan Event OnLoad dan OnUnLoad\u003c/h1>\n\u003chr width=\"600\" color=\"black\" noshade size=\"10\">\n\u003ch3 align=\"center\">SELAMAT DATANG\u003c/h3>\n\u003cp align=\"center\" id=\"info\">\u003c/p>\n\u003cCENTER>\n\u003cform name=\"f\">\n\u003ch4 align=\"center\">Sekarang Menunjukkan Jam\u003c/h4>\n\u003cinput type=\"Text\" size=\"16\" name=\"txtwaktu\">\n\u003chr width=\"600\" color=\"black\" noshade size=\"2\">\n\u003cinput type=\"button\" value=\"Simulasi keluar halaman (onUnload)\" onClick=\"tutup()\">\n\u003c/form>\n\u003cSCRIPT LANGUAGE=\"JavaScript\">timer()\u003c/SCRIPT>\n\u003c/center>\n\u003c/BODY>\n\u003c/HTML>",
   "auto": false
  },
  {
   "name": "onMouseOver & onMouseOut",
   "code": "\u003cHTML>\n\u003cBODY>\n\u003cSCRIPT LANGUAGE=\"JavaScript\">\nfunction g1() { document.getElementById(\"kipas\").innerHTML = \"KIPAS ON\"; document.getElementById(\"kipas\").style.background = \"#7CFC00\"; }\nfunction g2() { document.getElementById(\"kipas\").innerHTML = \"KIPAS OFF\"; document.getElementById(\"kipas\").style.background = \"#cccccc\"; }\nfunction info(t) { document.getElementById(\"status\").innerHTML = t; }\n\u003c/SCRIPT>\n\u003ch1 align=\"center\">Latihan Event OnMouseOver dan OnMouseOut\u003c/h1>\n\u003chr width=\"600\" color=\"black\" noshade size=\"10\">\n\u003ch3 align=\"center\">SELAMAT DATANG\u003c/h3>\n\u003cCENTER>\n\u003cform name=\"f\">\n\u003cdiv id=\"logo\" style=\"width:260px;padding:14px;background:#4466dd;color:#fff;font-weight:bold;\"\n onmouseover=\"this.style.background='#cc3355';this.innerHTML='Motto Jawa Barat'\"\n onmouseout=\"this.style.background='#4466dd';this.innerHTML='Gemah Ripah Repeh Rapih'\">Gemah Ripah Repeh Rapih\u003c/div>\n\u003ch4 align=\"center\">Kalo Kepanasan Tunjuk Kipas Angin Saja\u003c/h4>\n\u003cA HREF=\"#\" onMouseOver=\"g1()\" onMouseOut=\"g2()\">\n\u003cdiv id=\"kipas\" style=\"width:140px;height:72px;line-height:72px;border:2px solid #000;background:#ccc;color:#000;font-weight:bold;\">KIPAS OFF\u003c/div>\n\u003c/A>\n\u003cp>Contoh Link Dengan Event\u003c/p>\n\u003cA HREF=\"#\" onMouseOver=\"document.bgColor='#ffcc00'; info('Ke Website Google.Com')\" onMouseOut=\"document.bgColor='white'\">Google.Com\u003c/A>\u003cBR>\n\u003cA HREF=\"#\" onMouseOver=\"info('Oh, jangan deket-deket..')\" onMouseOut=\"info('Nah gitu dong')\">Teknik Informatika UNIKOM\u003c/A>\n\u003cp id=\"status\" style=\"background:#ffffcc;border:1px dashed #999;\">(status)\u003c/p>\n\u003chr width=\"600\" color=\"black\" noshade size=\"2\">\n\u003c/form>\n\u003c/center>\n\u003c/BODY>\n\u003c/HTML>",
   "auto": true
  }
 ],
 "p16": [
  {
   "name": "Menghitung karakter string",
   "code": "\u003chtml>\n\u003cbody>\n\u003cscript type=\"text/javascript\">\nvar str=\"W3CSchools is great!\"\ndocument.write(\"\u003cp>\" + str + \"\u003c/p>\")\ndocument.write(str.length)\n\u003c/script>\n\u003c/body>\n\u003c/html>",
   "auto": true
  },
  {
   "name": "indexOf()",
   "code": "\u003chtml>\n\u003cbody>\n\u003cscript type=\"text/javascript\">\nvar str=\"W3CSchools is great!\"\nvar pos=str.indexOf(\"School\")\nif (pos>=0)\n{\ndocument.write(\"School found at position: \")\ndocument.write(pos + \"\u003cbr />\")\n}\nelse\n{\ndocument.write(\"School not found!\")\n}\n\u003c/script>\n\u003cp>This example tests if a string contains a specified word. If the word is found it returns the position of the first character of the word in the original string. Note: The first position in the string is 0!\u003c/p>\n\u003c/body>\n\u003c/html>",
   "auto": true
  },
  {
   "name": "match()",
   "code": "\u003chtml>\n\u003cbody>\n\u003cscript type=\"text/javascript\">\nvar str = \"W3CSchools is great!\"\ndocument.write(str.match(\"great\"))\n\u003c/script>\n\u003cp>This example tests if a string contains a specified word. If the word is found it returns the word.\u003c/p>\n\u003c/body>\n\u003c/html>",
   "auto": true
  },
  {
   "name": "substr() vs substring()",
   "code": "\u003chtml>\n\u003cbody>\n\u003cscript type=\"text/javascript\">\nvar str=\"W3CSchools is great!\"\ndocument.write(str.substr(2,6))\ndocument.write(\"\u003cbr />\u003cbr />\")\ndocument.write(str.substring(2,6))\n\u003c/script>\n\u003cp>substr(2,6): mulai karakter ke-2 sepanjang 6 karakter. substring(2,6): dari karakter ke-2 sampai sebelum karakter ke-6.\u003c/p>\n\u003c/body>\n\u003c/html>",
   "auto": true
  },
  {
   "name": "Huruf besar / kecil",
   "code": "\u003chtml>\n\u003cbody>\n\u003cscript type=\"text/javascript\">\nvar str=(\"Hello JavaScripters!\")\ndocument.write(str.toLowerCase())\ndocument.write(\"\u003cbr>\")\ndocument.write(str.toUpperCase())\n\u003c/script>\n\u003c/body>\n\u003c/html>",
   "auto": true
  },
  {
   "name": "Array nama-nama (for)",
   "code": "\u003chtml>\n\u003cbody>\n\u003cscript type=\"text/javascript\">\nvar famname = new Array(6)\nfamname[0] = \"Jan Egil\"\nfamname[1] = \"Tove\"\nfamname[2] = \"Hege\"\nfamname[3] = \"Stale\"\nfamname[4] = \"Kai Jim\"\nfamname[5] = \"Borge\"\nfor (i=0; i\u003c6; i++)\n{\ndocument.write(famname[i] + \"\u003cbr>\")\n}\n\u003c/script>\n\u003c/body>\n\u003c/html>",
   "auto": true
  },
  {
   "name": "Menghitung elemen array (length)",
   "code": "\u003chtml>\n\u003cbody>\n\u003cscript type=\"text/javascript\">\nvar famname = new Array(\"Jan Egil\",\"Tove\",\"Hege\",\"Stale\",\"Kai Jim\",\"Borge\")\nfor (i=0; i\u003cfamname.length; i++)\n{\ndocument.write(famname[i] + \"\u003cbr>\")\n}\ndocument.write(\"\u003cbr>Jumlah elemen = \" + famname.length)\n\u003c/script>\n\u003c/body>\n\u003c/html>",
   "auto": true
  },
  {
   "name": "Metode array: concat, join, reverse, slice, sort",
   "code": "\u003chtml>\n\u003cbody>\n\u003cscript type=\"text/javascript\">\nvar a = new Array(\"Tove\",\"Hege\",\"Stale\")\nvar b = new Array(\"Borge\",\"Kai Jim\")\ndocument.write(\"concat : \" + a.concat(b) + \"\u003cbr>\")\ndocument.write(\"join(' - ') : \" + a.join(\" - \") + \"\u003cbr>\")\ndocument.write(\"reverse : \" + a.slice().reverse() + \"\u003cbr>\")\ndocument.write(\"slice(1,3) : \" + a.slice(1,3) + \"\u003cbr>\")\ndocument.write(\"sort : \" + a.concat(b).sort() + \"\u003cbr>\")\n\u003c/script>\n\u003c/body>\n\u003c/html>",
   "auto": true
  },
  {
   "name": "Tanggal hari ini",
   "code": "\u003chtml>\n\u003cbody>\n\u003cscript type=\"text/javascript\">\nvar d = new Date()\ndocument.write(d.getDate())\ndocument.write(\".\")\ndocument.write(d.getMonth() + 1)\ndocument.write(\".\")\ndocument.write(d.getFullYear())\n\u003c/script>\n\u003c/body>\n\u003c/html>",
   "auto": true
  },
  {
   "name": "Jam saat ini",
   "code": "\u003chtml>\n\u003cbody>\n\u003cscript type=\"text/javascript\">\nvar d = new Date()\ndocument.write(d.getHours())\ndocument.write(\".\")\ndocument.write(d.getMinutes())\ndocument.write(\".\")\ndocument.write(d.getSeconds())\n\u003c/script>\n\u003c/body>\n\u003c/html>",
   "auto": true
  },
  {
   "name": "Mengeset tanggal (setFullYear)",
   "code": "\u003chtml>\n\u003cbody>\n\u003cscript type=\"text/javascript\">\nvar d = new Date()\nd.setFullYear(\"1990\")\ndocument.write(d)\n\u003c/script>\n\u003c/body>\n\u003c/html>",
   "auto": true
  },
  {
   "name": "Waktu UTC",
   "code": "\u003chtml>\n\u003cbody>\n\u003cscript type=\"text/javascript\">\nvar d = new Date()\ndocument.write(d.getUTCHours())\ndocument.write(\".\")\ndocument.write(d.getUTCMinutes())\ndocument.write(\".\")\ndocument.write(d.getUTCSeconds())\n\u003c/script>\n\u003c/body>\n\u003c/html>",
   "auto": true
  },
  {
   "name": "Nama hari",
   "code": "\u003chtml>\n\u003cbody>\n\u003cscript type=\"text/javascript\">\nvar d=new Date()\nvar weekday=new Array(\"Sunday\",\"Monday\",\"Tuesday\",\"Wednesday\",\"Thursday\",\"Friday\",\"Saturday\")\ndocument.write(\"Today is \" + weekday[d.getDay()])\n\u003c/script>\n\u003c/body>\n\u003c/html>",
   "auto": true
  },
  {
   "name": "Tanggal lengkap",
   "code": "\u003chtml>\n\u003cbody>\n\u003cscript type=\"text/javascript\">\nvar d=new Date()\nvar weekday=new Array(\"Sunday\",\"Monday\",\"Tuesday\",\"Wednesday\",\"Thursday\",\"Friday\",\"Saturday\")\nvar monthname=new Array(\"Jan\",\"Feb\",\"Mar\",\"Apr\",\"May\",\"Jun\",\"Jul\",\"Aug\",\"Sep\",\"Oct\",\"Nov\",\"Dec\")\ndocument.write(weekday[d.getDay()] + \" \")\ndocument.write(d.getDate() + \". \")\ndocument.write(monthname[d.getMonth()] + \" \")\ndocument.write(d.getFullYear())\n\u003c/script>\n\u003c/body>\n\u003c/html>",
   "auto": true
  },
  {
   "name": "Membuat jam (timer)",
   "code": "\u003chtml>\n\u003chead>\n\u003cscript type=\"text/javascript\">\nvar timer = null\nfunction stop()\n{\nclearTimeout(timer)\n}\nfunction start()\n{\nvar time = new Date()\nvar hours = time.getHours()\nvar minutes = time.getMinutes()\nminutes=((minutes \u003c 10) ? \"0\" : \"\") + minutes\nvar seconds = time.getSeconds()\nseconds=((seconds \u003c 10) ? \"0\" : \"\") + seconds\nvar clock = hours + \":\" + minutes + \":\" + seconds\ndocument.forms[0].display.value = clock\ntimer = setTimeout(\"start()\",1000)\n}\n\u003c/script>\n\u003c/head>\n\u003cbody onload=\"start()\" onunload=\"stop()\">\n\u003cform>\n\u003cinput type=\"text\" name=\"display\" size=\"20\">\n\u003cinput type=\"button\" value=\"Stop\" onclick=\"stop()\">\n\u003cinput type=\"button\" value=\"Start\" onclick=\"start()\">\n\u003c/form>\n\u003c/body>\n\u003c/html>",
   "auto": true
  }
 ],
 "p17": [
  {
   "name": "Contoh CSS 1 (tahoma, biru, italic)",
   "code": "\u003chtml>\n\u003chead>\n\u003cstyle Type=\"text/css\">\nh1{font-family:tahoma}\nh2{color: blue}\np{font-size:11pt ; font-style: italic}\n\u003c/style>\n\u003c/head>\n\u003cbody>\n\u003ch1>Judul Halaman (h1)\u003c/h1>\n\u003ch2>NuSinau\u003c/h2>\n\u003cp>NuSinau adalah suatu website tempat berbagi berbagai ilmu pengetahuan.\u003c/p>\n\u003c/body>\n\u003c/html>",
   "auto": true
  },
  {
   "name": "Pengelompokan selector",
   "code": "\u003chtml>\n\u003chead>\n\u003cstyle type=\"text/css\">\n/* pengelompokan selector: nilai properti sama */\nh1 , body , p , ul\n{\ncolor : blue;\n}\n\u003c/style>\n\u003c/head>\n\u003cbody>\n\u003ch1>Heading 1\u003c/h1>\n\u003cp>Paragraf ini ikut berwarna biru.\u003c/p>\n\u003cul>\u003cli>List item juga biru\u003c/li>\u003c/ul>\n\u003c/body>\n\u003c/html>",
   "auto": true
  },
  {
   "name": "a. Latar belakang",
   "code": "\u003chtml>\n\u003chead>\n\u003cstyle type=\"text/css\">\nbody\n{\nbackground: #00ff00 url(\"gambar.gif\") no-repeat fixed center center\n}\n\u003c/style>\n\u003c/head>\n\u003cbody>\n\u003cp>\u003cb>Catatan:\u003c/b> Properti background-attachment dan background-position digunakan dalam browser. (gambar.gif tidak tersedia di sini, sehingga hanya warna latar yang tampak)\u003c/p>\n\u003cp>Ada teks disini\u003c/p>\n\u003cp>Tuliskan sekehendak kalian\u003c/p>\n\u003cp>Terserah apa saja\u003c/p>\n\u003cp>Yang penting ada tulisannya\u003c/p>\n\u003c/body>\n\u003c/html>",
   "auto": true
  },
  {
   "name": "b. Penanganan font",
   "code": "\u003chtml>\n\u003chead>\n\u003cstyle type=\"text/css\">\np.normal {font-weight: normal}\np.tebal {font-weight: bold}\np.teballl {font-weight: 900}\np.lengkap\n{\nfont: italic small-caps 900 12px arial\n}\n\u003c/style>\n\u003c/head>\n\u003cbody>\n\u003cp class=\"normal\"> Perhatikan paragraf ini\u003c/p>\n\u003cp class=\"tebal\"> Bandingkan dengan paragraf diatasnya\u003c/p>\n\u003cp class=\"teballl\"> Bandingkan yang ini juga\u003c/p>\n\u003cp class=\"lengkap\"> Paragraf dengan semua atribut font dimasukkan\u003c/p>\n\u003c/body>\n\u003c/html>",
   "auto": true
  },
  {
   "name": "c. Pembuatan border",
   "code": "\u003chtml>\n\u003chead>\n\u003cstyle type=\"text/css\">\np.borderous\n{\nborder-style: double;\nborder-width: 5px 10px 1px medium;\nborder-color: #ff0000 #00ff00 #0000ff rgb(250,0,255)\n}\n\u003c/style>\n\u003c/head>\n\u003cbody>\n\u003cp class=\"borderous\">\n\u003cb>Catatan:\u003c/b> Properti \"border-color\" dan \"border-width\" tidak bisa dikenali secara langsung bila tanpa \"border-style\". Gunakan properti \"border-style\" untuk menyiapkan border.\n\u003c/p>\n\u003c/body>\n\u003c/html>",
   "auto": true
  },
  {
   "name": "d. Pengaturan margin",
   "code": "\u003chtml>\n\u003chead>\n\u003cstyle type=\"text/css\">\np.margin {margin: 2cm 4cm 3cm 80px}\n\u003c/style>\n\u003c/head>\n\u003cbody>\n\u003cp>Yang ini adalah paragraf biasa tanpa pengaturan margin, sepertinya biasa saja.\u003c/p>\n\u003cp class=\"margin\">Bandingkan dengan tampilan paragraf ini. Coba Anda kecilkan ukuran window browser agar terlihat lebih jelas perbedaannya.\u003c/p>\n\u003cp>This is a paragraph\u003c/p>\n\u003c/body>\n\u003c/html>",
   "auto": true
  },
  {
   "name": "e. Padding sel tabel",
   "code": "\u003chtml>\n\u003chead>\n\u003cstyle type=\"text/css\">\ntd {padding: 1.5cm}\ntd.value2 {padding: 0.5cm 2.5cm}\n\u003c/style>\n\u003c/head>\n\u003cbody>\n\u003ctable border=\"1\">\n\u003ctr>\u003ctd>Ini adalah tabel dengan sel yang menggunakan padding sama pada setiap sisinya (1,5cm).\u003c/td>\u003c/tr>\n\u003c/table>\n\u003cbr>\n\u003ctable border=\"1\">\n\u003ctr>\u003ctd class=\"value2\">Bandingkan dengan tampilan tabel ini. Padding atas dan bawah memiliki nilai 0,5cm, sedangkan padding kanan dan kiri nilainya 2,5cm.\u003c/td>\u003c/tr>\n\u003c/table>\n\u003c/body>\n\u003c/html>",
   "auto": true
  },
  {
   "name": "f. List",
   "code": "\u003chtml>\n\u003chead>\n\u003cstyle type=\"text/css\">\nul\n{\nlist-style: square outside url(\"gambarkecil.gif\")\n}\n\u003c/style>\n\u003c/head>\n\u003cbody>\n\u003cp>Disini Anda menggunakan gambar berukuran kecil sebagai bullet untuk list (gambarkecil.gif tidak tersedia, sehingga bullet berbentuk persegi). Properti outside akan menyebabkan list menjadi lebih rapi bila terdiri atas item yang berupa kalimat panjang.\u003c/p>\n\u003cul>\n\u003cli>Kopi\u003c/li>\n\u003cli>Teh\u003c/li>\n\u003cli>Coca Cola\u003c/li>\n\u003c/ul>\n\u003c/body>\n\u003c/html>",
   "auto": true
  },
  {
   "name": "g. Latar depan & belakang (z-index)",
   "code": "\u003chtml>\n\u003chead>\n\u003cstyle type=\"text/css\">\n.x1 { position:absolute; left:0; top:0; z-index:1; background:#e63946; width:100px; height:80px; opacity:.9; }\n.x2 { position:absolute; left:0; top:100px; z-index:-1; background:#2a9d8f; width:100px; height:80px; }\n\u003c/style>\n\u003c/head>\n\u003cbody>\n\u003cp>\u003cb>Catatan:\u003c/b> gambar.bmp pada slide diganti kotak berwarna.\u003c/p>\n\u003ch1>Sepertinya Heading ini terhalang oleh kotak merah\u003c/h1>\n\u003cdiv class=\"x1\">\u003c/div>\n\u003cp>Nilai default z-index adalah 0. Z-index 1 memiliki prioritas lebih tinggi, sedangkan Z-index -1 memiliki prioritas lebih rendah.\u003c/p>\n\u003cp>\u003c/p>\n\u003cdiv class=\"x2\">\u003c/div>\n\u003cp>Sekarang Anda bisa membandingkan dengan tampilan di bagian bawah ini. Apakah masih terhalang kotak?\u003c/p>\n\u003c/body>\n\u003c/html>",
   "auto": true
  },
  {
   "name": "h. Tampilan link",
   "code": "\u003chtml>\n\u003chead>\n\u003cstyle type=\"text/css\">\na:link {color: #ff0000}\na.one:visited {color: #0000ff}\na.one:hover {color: #ffcc00}\na.two:visited {color: #0000ff}\na.two:hover {font-size: 150%}\na.three:visited {color: #0000ff}\na.three:hover {background: #66ff66}\na.four:visited {color: #0000ff}\na.four:hover {font-family: fixedsys}\na.five:visited {color: #0000ff; text-decoration: line-through}\na.five:hover {text-decoration: overline}\n\u003c/style>\n\u003c/head>\n\u003cbody>\n\u003cp>Gerakkan pointer mouse di atas link-link di bawah ini untuk membuat link tersebut berubah tampilannya.\u003c/p>\n\u003cp>\u003ca class=\"one\" href=\"#hlm1\">Mengubah properti color\u003c/a>\u003c/p>\n\u003cp>\u003ca class=\"two\" href=\"#hlm2\">Mengubah properti font-size\u003c/a>\u003c/p>\n\u003cp>\u003ca class=\"three\" href=\"#hlm3\">Mengubah properti background-color\u003c/a>\u003c/p>\n\u003cp>\u003ca class=\"four\" href=\"#hlm4\">Mengubah properti font-family\u003c/a>\u003c/p>\n\u003cp>\u003ca class=\"five\" href=\"#hlm5\">Mengubah properti text-decoration\u003c/a>\u003c/p>\n\u003c/body>\n\u003c/html>",
   "auto": true
  }
 ],
 "p18": [
  {
   "name": "Array I",
   "code": "\u003cHTML>\n\u003cHEAD>\n\u003cTITLE> Latihan Objek Array\u003c/TITLE>\n\u003c/HEAD>\n\u003cBODY>\n\u003ch3>Latihan Objek Array I\u003c/H3>\nNama pada data ke 3 adalah :\n\u003cSCRIPT LANGUAGE=\"JavaScript\">\nfunction cobaarray()\n{\nnama = new Array(\"Dian\",\"Andri\",\"Irawan\");\ndocument.write(nama[2]);\n}\ncobaarray();\n\u003c/SCRIPT>\n\u003c/BODY>\n\u003c/HTML>",
   "auto": true
  },
  {
   "name": "Array II (for)",
   "code": "\u003cHTML>\n\u003cHEAD>\n\u003cTITLE> Latihan Objek Array\u003c/TITLE>\n\u003c/HEAD>\n\u003cBODY>\n\u003ch3>Latihan Objek Array II\u003c/H3>\nPemanggilan data Array dengan Perintah Perulangan For\u003cBR>\n\u003cSCRIPT LANGUAGE=\"JavaScript\">\nvar nilai = new Array(3);\nnilai[0]=\"A\";\nnilai[1]=\"B\";\nnilai[2]=\"C\";\nfor (a=0;a\u003c3;++a)\n{\ndocument.writeln(\"\u003cB>Nilai ke \"+ (a+1) +\" : \"+nilai[a]+\"\u003cBR>\");\n}\n\u003c/SCRIPT>\n\u003c/BODY>\n\u003c/HTML>",
   "auto": true
  },
  {
   "name": "Date (tanggal & jam)",
   "code": "\u003cHTML>\n\u003cHEAD>\n\u003cTITLE> Latihan Objek Date\u003c/TITLE>\n\u003c/HEAD>\n\u003cBODY bgcolor=\"lightblue\">\n\u003ch3 align=\"center\">Latihan Objek Date/Tanggal\u003c/H3>\n\u003cSCRIPT LANGUAGE=\"JavaScript\">\nvar hari = new Array(\"Minggu\",\"Senin\",\"Selasa\",\"Rabu\",\"Kamis\",\"Jumat\",\"Sabtu\");\nvar bulan = new Array(\"Januari\",\"Februari\",\"Maret\",\"April\",\"Mei\",\"Juni\",\"Juli\",\"Agustus\",\"September\",\"Oktober\",\"November\",\"Desember\");\nvar t = new Date();\nvar hari_ini = hari[t.getDay()];\nvar tanggal = t.getDate();\nvar bulan_ini = bulan[t.getMonth()];\nvar tahun = t.getFullYear();\nvar jam = t.getHours();\nvar menit = t.getMinutes();\nvar detik = t.getSeconds();\ndocument.write(\"\u003cfont size=5 face=arial>\");\ndocument.write(\"\u003cb>\u003ccenter>Sekarang adalah hari : \"+hari_ini+\", tanggal : \"+ tanggal +\" \"+ bulan_ini +\" \" +tahun);\ndocument.write(\"\u003chr width=700>\");\ndocument.write(\"\u003c/font>\");\ndocument.write(\"\u003cfont size=3 face=arial>\");\ndocument.write(\"\u003cb>\u003ccenter>Jam sekarang = \"+ jam +\":\"+ menit+\":\"+detik);\ndocument.write(\"\u003c/font>\");\n\u003c/SCRIPT>\n\u003c/BODY>\n\u003c/HTML>",
   "auto": true
  },
  {
   "name": "Math",
   "code": "\u003cHTML>\n\u003cHEAD>\n\u003cTITLE> Latihan Objek Math\u003c/TITLE>\n\u003c/HEAD>\n\u003cBODY>\n\u003ch3>Latihan Dengan Objek Math\u003c/h3>\n\u003cSCRIPT LANGUAGE=\"JavaScript\">\nvar a=10; var b=5;\nbesar=Math.max(a,b);\ndocument.write(\"antara \" + a + \" dan \"+ b +\" lebih besar \"+besar+\"\u003cbr>\");\npangkat=Math.pow(b,a);\ndocument.write(b+ \" pangkat \"+ a +\" adalah \"+pangkat+\"\u003cbr>\");\nvar ran;\nran = Math.round(Math.random()*50000);\ndocument.write(\"Anda adalah pengunjung yang ke \" + ran + \".\u003cbr>\");\nvar akar;\nakar = Math.sqrt(ran);\ndocument.write (\"Akar dari \" + ran + \" adalah \"+akar);\n\u003c/SCRIPT>\n\u003c/BODY>\n\u003c/HTML>",
   "auto": true
  }
 ],
 "p19": [
  {
   "name": "Marquee JavaScript (kotak teks + status)",
   "code": "\u003chtml>\n\u003chead>\n\u003ctitle>membuat Marquee Pada Status bar\u003c/title>\n\u003c/head>\n\u003cbody bgcolor=\"lightblue\" onload=\"p()\">\u003ccenter>\n\u003cp>\u003cfont color=\"orange\" size=\"5\">Latihan Marquee Dengan JavaScript\u003c/font>\u003c/p>\n\u003cscript language=\"JavaScript\">\nvar pesan =\"Hallo Friend...Apa Khabar? \";\nvar pesan2 =\"Welcome To My website \";\nfunction p()\n{\ndocument.basis.kotak.value=pesan;\npesan=pesan.substr(1,pesan.length)+pesan.substr(0,1);\npesan2=pesan2.substr(1,pesan2.length)+pesan2.substr(0,1);\ndocument.getElementById(\"status\").innerHTML=pesan2;   // pengganti window.status\nsetTimeout(\"p()\",100);\n}\n\u003c/script>\n\u003cform method=\"post\" name=\"basis\">\n\u003cinput type=\"text\" name=\"kotak\" size=20>\n\u003c/form>\n\u003cdiv id=\"status\" style=\"background:#ddd;border:1px solid #999;width:260px;padding:3px;font-family:monospace;\">status bar\u003c/div>\n\u003c/center>\n\u003c/body>\n\u003c/html>",
   "auto": true
  },
  {
   "name": "Marquee HTML (tag marquee)",
   "code": "\u003chtml>\n\u003cbody bgcolor=\"lightblue\">\n\u003ch3>Marquee pada halaman web (tag HTML)\u003c/h3>\n\u003cmarquee behavior=\"scroll\" direction=\"left\" bgcolor=\"#fde047\">Teks berjalan ke kiri...\u003c/marquee>\n\u003cbr>\n\u003cmarquee behavior=\"alternate\" direction=\"right\" bgcolor=\"#ff9ec4\">Teks bolak-balik\u003c/marquee>\n\u003cbr>\n\u003cmarquee direction=\"up\" height=\"60\" bgcolor=\"#7ee7c7\">Teks bergerak ke atas\u003c/marquee>\n\u003c/body>\n\u003c/html>",
   "auto": true
  }
 ]
};
