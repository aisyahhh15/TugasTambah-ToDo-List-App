let total = 0;
let selesai = 0;

function tambahTugas() {
  let input = document.getElementById("inputTugas");
  let namaTugas = input.value;

  if (namaTugas === "") {
    alert("Nama tugas tidak boleh kosong!");
    return;
  }

  let li = document.createElement("li");
  li.innerHTML = `
    <span>${namaTugas}</span>
    <div>
      <button onclick="selesaiTugas(this)">Selesai</button>
      <button onclick="hapusTugas(this)">Hapus</button>
    </div>
  `;

  document.getElementById("daftarTugas").appendChild(li);

  total++;
  document.getElementById("total").innerText = total;

  input.value = "";
}

function selesaiTugas(btn) {
  let li = btn.parentElement.parentElement;
  li.classList.toggle("done");

  if (li.classList.contains("done")) {
    selesai++;
    btn.innerText = "Batal";
  } else {
    selesai--;
    btn.innerText = "Selesai";
  }

  document.getElementById("selesai").innerText = selesai;
}

function hapusTugas(btn) {
  let li = btn.parentElement.parentElement;

  if (li.classList.contains("done")) {
    selesai--;
    document.getElementById("selesai").innerText = selesai;
  }

  li.remove();
  total--;
  document.getElementById("total").innerText = total;
}
