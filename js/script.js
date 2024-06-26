const btn = document.getElementById("price-button");
btn.addEventListener("click", function () {
  let name = document.getElementById("nome").value;
  let km = document.getElementById("km-da-percorrere").value;
  let eta = document.getElementById("eta").value;
  let cpcode = Math.floor(Math.random() * 90000 + 1);
  let carrozza = Math.floor(Math.random() * 10 + 1);

  let price = 0.21 * km;
  let perc_discount = 0;
  let final_price = 0;

  if (eta == 1) {
    perc_discount = 20;
  } else if (eta == 2) {
    perc_discount = 0;
  } else if (eta == 3) {
    perc_discount = 40;
  }

  if (perc_discount > 0) {
    final_price = price - (perc_discount * price) / 100;
  } else if (perc_discount <= 0) {
    final_price = price;
  }

  document.getElementById("codice-cp").innerText = cpcode;
  document.getElementById("carrozza").innerText = carrozza;
  document.getElementById("nome-passeggero").innerText = name;
  document.getElementById("price").innerText = final_price.toFixed(2);
  console.log(final_price.toFixed(2));
});
