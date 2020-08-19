window.addEventListener("load", () => {
  setTable("");
});

var events = document.getElementById("show_events");
var menu = document.getElementById("more_info");
var drinks = document.getElementById("drinks");
var snacks = document.getElementById("snacks");

events.addEventListener("click", () => {
  var win = window.open(
    "https://www.facebook.com/terrazacatedralmx/events",
    "_blank"
  );
  win.focus();
});

menu.addEventListener("click", () => {
  var win = window.open(
    "https://www.facebook.com/terrazacatedralmx/menu/",
    "_blank"
  );
  win.focus();
});

function setTable(data) {
  if (data == "" || data == "drinks") {
    drinks.style.fontWeight = "bold";
    drinks.style.textDecoration = "underline";
    snacks.style.fontWeight = "none";
    snacks.style.textDecoration = "none";

    document.getElementById("column1").innerHTML = `<div class="column-header">
    Cervezas
  </div>
  <div class="column-content">
    <table>
      <tr>
        <td class="item">Barril Modelo Clara</td>
        <td>$45</td>
      </tr>
      <tr>
        <td class="item">Barril Modelo Oscura</td>
        <td>$45</td>
      </tr>
      <tr>
        <td class="item">Corona</td>
        <td>$50</td>
      </tr>
      <tr>
        <td class="item">Victoria</td>
        <td>$50</td>
      </tr>
      <tr>
        <td class="item">Pacifico</td>
        <td>$50</td>
      </tr>
      <tr>
        <td class="item">León</td>
        <td>$50</td>
      </tr>
      <tr>
        <td class="item">Corazón de Malta</td>
        <td>$110</td>
      </tr>
      <tr>
        <td class="item">Encanton Pilsner</td>
        <td>$120</td>
      </tr>
      <tr>
        <td class="item">Magna Imperial</td>
        <td>$110</td>
      </tr>
    </table>
  </div>`;

    document.getElementById("column2").innerHTML = `<div class="column-header">
    Tequila
    </div>
    <div class="column-content">
    <table>
    <tr>
    <td class="item">
    Don Julio 70
    </td>
    <td>
    $210
    </td>
    </tr>
    <tr>
    <td class="item">Don Julio Blanco</td>
    <td>$150</td>
    </tr>
    <tr>
    <td class="item">Don Julio Reposado</td>
    <td>
    $160
    </td>
    </tr>
    <tr>
    <td class="item">
    Centenario Reposado
    </td>
    <td>
    $180
    </td>
    </tr>
    <tr>
    <td class="item">
    Herradura Blanco
    </td>
    <td>
    $100
    </td>
    </tr>
    <tr>
    <td class="item">
    Herradura Reposado
    </td>
    <td>
    $130
    </td>
    </tr>
    <tr>
    <td class="item">
    Patrón Cristalino
    </td>
    <td>
    $150
    </td>
    </tr>
    <tr>
    <td class="item">
    Tradicional Reposado
    </td>
    <td>
    $180
    </td>
    </tr>
    </table>
    </div>`;
  } else if (data == "snacks") {
    drinks.style.fontWeight = "none";
    drinks.style.textDecoration = "none";
    snacks.style.fontWeight = "bold";
    snacks.style.textDecoration = "underline";

    document.getElementById("column1").innerHTML = `<div class="column-header">
    Antojitos
  </div>
  <div class="column-content">
    <table>
      <tr>
        <td class="item">Nachos</td>
        <td>$80</td>
      </tr>
      <tr>
        <td class="item">Alitas</td>
        <td>$140</td>
      </tr>
      <tr>
        <td class="item">Guacamole</td>
        <td>$85</td>
      </tr>
      <tr>
        <td class="item">Papas Gajo</td>
        <td>$80</td>
      </tr>
      <tr>
        <td class="item">Dedos de queso</td>
        <td>$120</td>
      </tr>
      <tr>
        <td class="item">Tacos de Arrachera</td>
        <td>$120</td>
      </tr>
      <tr>
        <td class="item">Chilaquiles</td>
        <td>$80</td>
      </tr>
      <tr>
        <td class="item">Enchiladas</td>
        <td>$100</td>
      </tr>      
    </table>
  </div>`;

    document.getElementById("column2").innerHTML = `<div class="column-header">
    Especialidades
    </div>
    <div class="column-content">
    <table>
    <tr>
    <td class="item">
    Chapata-Xolo
    </td>
    <td>
    $110
    </td>
    </tr>
    <tr>
    <td class="item">Torta (Arrachera)</td>
    <td>$120</td>
    </tr>
    <tr>
    <td class="item">Fetuccini</td>
    <td>
    $110
    </td>
    </tr>
    <tr>
    <td class="item">
    Xolo-Burger
    </td>
    <td>
    $110
    </td>
    </tr>
    <tr>
    <td class="item">
    Mexa-Burger
    </td>
    <td>
    $110
    </td>
    </tr>
    <tr>
    <td class="item">
    Vege-Burger
    </td>
    <td>
    $110
    </td>
    </tr>
    <tr>
    <td class="item">
    Burrito (Vegetariano)
    </td>
    <td>
    $90
    </td>
    </tr>
    <tr>
    <td class="item">
    Fish-Taco
    </td>
    <td>
    $130
    </td>
    </tr>
    </table>
    </div>`;
  }
}

drinks.addEventListener("click", () => {
  document.getElementById("column1").classList.add("pulse_table");
  document.getElementById("column2").classList.add("pulse_table");
  setTable("drinks");
  setTimeout(() => {
    document.getElementById("column1").classList.remove("pulse_table");
    document.getElementById("column2").classList.remove("pulse_table");
  }, 1000);
});

snacks.addEventListener("click", () => {
  document.getElementById("column1").classList.add("pulse_table");
  document.getElementById("column2").classList.add("pulse_table");
  setTable("snacks");
  setTimeout(() => {
    document.getElementById("column1").classList.remove("pulse_table");
    document.getElementById("column2").classList.remove("pulse_table");
  }, 1000);
});
