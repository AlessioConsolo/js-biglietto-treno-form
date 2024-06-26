const btn = document.getElementById("price-button");
btn.addEventListener("click", function () {
  let name = document.getElementById("name").value;
  let km = document.getElementById("km-da-percorrere").value;
  let eta = document.getElementById("eta").value;

  let price = 0.21 * km;
  let perc_discount = 0;
  let final_price = 0;

  if (eta == 1) {
    perc_discount = 20;
  } else if (eta == 2) {
    perc_discount = 40;
  }

  if (perc_discount > 0) {
    final_price = price - (perc_discount * price) / 100;
  } else if (perc_discount <= 0) {
    final_price = price;
  }

  document.getElementById("nome-passeggero").append(`${name}`);
  document.getElementById("price").innerText = final_price.toFixed(2);
});
