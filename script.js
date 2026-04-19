const breakfastItems = [
  { name: "Kaiserka salámová 120g", allergens: "(1,3,7)", price: "2,30 €" },
  { name: "Kaiserka šunková", allergens: "(1,3,7)", price: "2,30 €" },
  { name: "Kaiserka, syr, vajíčko", allergens: "(1,3,7)", price: "2,30 €" },
  { name: "Ham & Eggs 150g", allergens: "(1,3,7)", price: "4,20 €" },
  { name: "Miešané vajíčka 3 ks 150g", allergens: "(1,3,7)", price: "3,50 €" },
  { name: "Donut 60g", allergens: "(1,3,7)", price: "0,90 €" },
  { name: "Cheesecake 100g", allergens: "(1,3,7)", price: "2,90 €" },
  { name: "Jablkový koláč s karamelom 100g", allergens: "(1,3,7)", price: "3,90 €" },
];

const comboItems = [
  { name: "Kaiserka + nápoj", note: "zvýhodnené menu", price: "3,00 €" },
  { name: "Donut + nápoj", note: "zvýhodnené menu", price: "1,90 €" },
  { name: "Miešané vajíčka + nápoj", note: "zvýhodnené menu", price: "4,20 €" },
  { name: "Ham & Eggs + nápoj", note: "zvýhodnené menu", price: "5,00 €" },
];

const coffeeItems = [
  { name: "Espresso 30ml", price: "1,30 €" },
  { name: "Espresso lungo 60ml", price: "1,30 €" },
  { name: "Ristretto 22ml", price: "1,30 €" },
  { name: "Doppio 50ml", price: "1,80 €" },
  { name: "Latte Macchiato 230ml", price: "1,80 €" },
  { name: "Flat White 170ml", price: "1,80 €" },
  { name: "Cappuccino 160ml", price: "1,80 €" },
  { name: "Cafe Latte 280ml", price: "1,80 €" },
  { name: "Čaj 250ml", price: "1,30 €" },
  { name: "Smotana do kávy 10ml", price: "0,30 €" },
  { name: "Med 20g", price: "0,50 €" },
];

const cateringPoints = [
  "Raňajkové balíčky a coffee breaky",
  "Občerstvenie na porady a školenia",
  "Slané aj sladké misy",
  "Káva, čaj a doplnky na firemné aj súkromné akcie",
];

const dailyMenuItems = [
  {
    day: "Pondelok",
    title: "Denné menu",
    description: "
Slepačí  vývar (1,3,9)
Brokolicová krémová (7,9)
1, Bravčový steak s omáčkou so zeleného korenia, baby zemiaky (7,9)
2, Kuracie prsia v arašidovej omáčke s ryžou  (5,7)
3, Tekvicové risotto s kozím syrom (7)
4, XXL Kurací rezeň, viedenský zemiakový šalát (1,3,7,9,10)
5, Vyprážaný syr, pečné zemiaky, domáca tatárska omáčka(1,3,7,10)
6, Hovädzie líčka na víne, zemiakové pyré (7,9)",
    price: "od 6,90 €",
  },
  {
    day: "Utorok",
    title: "Denné menu",
    description: "Slepačí vývar (1,3,9)
Kelová s párkom (1,7,9)
1, Slovenské risotto s kuracím mäsom a syrom (7)
2, Švédske mäsové guľky, zemiakové pyré, brusnice (1,3,6,7)
3, Pražené rezance s tofu a vajíčkom (1,2,4,3,6,11)
4, XXL Kurací rezeň, viedenský zemiakový šalát (1,3,7,9,10)
5, Vyprážaný syr, pečné zemiaky, domáca tatárska omáčka(1,3,7,10)
6, Hovädzie líčka na víne, zemiakové pyré (7,9)",
    price: "od 6,90 €",
  },
  {
    day: "Streda",
    title: "Denné menu",
    description: "Slepačí vývar (1,3,9)
Kulajda (7)
1, Vyprážané rybie filé, zemiakové pyré, tatárska omáčka (1,3,7)
2, Pečená plnená paprika v paradajkovej omáčke, parená knedla (1,3,7)
3, Špenátové halušky v syrovej omáčke (1,3,7)
4, XXL Kurací rezeň, viedenský zemiakový šalát (1,3,7,9,10)
5, Vyprážaný syr, pečné zemiaky, domáca tatárska omáčka(1,3,7,10)
6, Hovädzie líčka na víne, zemiakové pyré (7,9)",
    price: "od 6,90 €",
  },

    {
    day: "Štvrtok",
    title: "Denné menu",
    description: "Slepačí  vývar (1,3,9)
Paradajková s parmezánom (7,9)
1, Pečené kuracie stehno, varené zemiaky, kapustový šalát (7,9)
2, Hovädzí stroganov, ryža (7,10)
3, Cviklové rizoto s balkánskym syrom(7)
4, XXL Kurací rezeň, viedenský zemiakový šalát (1,3,7,9,10)
5, Vyprážaný syr, pečné zemiaky, domáca tatárska omáčka(1,3,7,10)
6, Hovädzie líčka na víne, zemiakové pyré (7,9).",
    price: "od 6,90 €",
  },
  {
    day: "Piatok",
    title: "Denné menu",
    description: "Slepačí vývar (1,3,9)
Fazuľová na kyslo s údeným mäsom (7,9)
1, Kurací černohorský rezeň so syrom, pečené zemiaky (1,3,7)
2, Morčacie prsia v omáčke so sušených paradajok s baby špenátom, ryža
3, Slivkové pirohy s makom (1,3,7)
4, XXL Kurací rezeň, viedenský zemiakový šalát (1,3,7,9,10)
5, Vyprážaný syr, pečné zemiaky, domáca tatárska omáčka(1,3,7,10)
6, Hovädzie líčka na víne, zemiakové pyré (7,9)",
    price: "od 6,90 €",
  },
];

function renderDailyMenu() {
  const wrapper = document.getElementById("dailyMenu");

  wrapper.innerHTML = dailyMenuItems
    .map(
      (item) => `
        <article class="card">
          <p class="eyebrow">${item.day}</p>
          <h3>${item.title}</h3>
          <p>${item.description}</p>
          <span class="card-badge">${item.price}</span>
        </article>
      `
    )
    .join("");
}

function renderBreakfast() {
  const wrapper = document.getElementById("breakfastList");

  wrapper.innerHTML = breakfastItems
    .map(
      (item) => `
        <article class="menu-item">
          <div>
            <h3>${item.name}</h3>
            <p>${item.allergens}</p>
          </div>
          <div class="price">${item.price}</div>
        </article>
      `
    )
    .join("");
}

function renderCombos() {
  const wrapper = document.getElementById("comboList");

  wrapper.innerHTML = comboItems
    .map(
      (item) => `
        <article class="combo-item">
          <div>
            <h3>${item.name}</h3>
            <p>${item.note}</p>
          </div>
          <div class="price">${item.price}</div>
        </article>
      `
    )
    .join("");
}

function renderCoffee() {
  const wrapper = document.getElementById("coffeeList");

  wrapper.innerHTML = coffeeItems
    .map(
      (item) => `
        <article class="coffee-card">
          <h3>${item.name}</h3>
          <div class="price">${item.price}</div>
        </article>
      `
    )
    .join("");
}

function renderCateringPoints() {
  const wrapper = document.getElementById("cateringPoints");

  wrapper.innerHTML = cateringPoints
    .map((item) => `<div class="catering-point">${item}</div>`)
    .join("");
}

function setupMobileMenu() {
  const toggle = document.getElementById("menuToggle");
  const mobileMenu = document.getElementById("mobileMenu");

  toggle.addEventListener("click", () => {
    mobileMenu.classList.toggle("open");
  });

  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("open");
    });
  });
}

function setupForm() {
  const form = document.getElementById("cateringForm");
  const message = document.getElementById("formMessage");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const data = new FormData(form);
    const name = data.get("name");
    const email = data.get("email");
    const type = data.get("type");

    message.textContent = `Ďakujeme, ${name}. Tvoj dopyt pre „${type}“ sme zaznamenali. Na adresu ${email} sa vám môže ozvať personál kantíny.`;
    form.reset();
  });
}

function init() {
  renderDailyMenu();
  renderBreakfast();
  renderCombos();
  renderCoffee();
  renderCateringPoints();
  setupMobileMenu();
  setupForm();
}

document.addEventListener("DOMContentLoaded", init);
