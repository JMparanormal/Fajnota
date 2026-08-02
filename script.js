const breakfastItems = [
  { name: "Kaiserka salámová 120g", allergens: "(1,3,7)", price: "2,30 €" },
  { name: "Kaiserka šunková", allergens: "(1,3,7)", price: "2,30 €" },
  { name: "Kaiserka, syr, vajíčko", allergens: "(1,3,7)", price: "2,30 €" },
  { name: "Ham & Eggs 150g", allergens: "(1,3,7)", price: "4,20 €" },
  { name: "Miešané vajíčka 3 ks 150g", allergens: "(1,3,7)", price: "3,50 €" },
];

const comboItems = [
  { name: "Kaiserka + nápoj", note: "zvýhodnené menu", price: "3,00 €" },
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
    description: `Slepačí vývar (1,3,9) ,
   Brokolicová krémová (7,9)
1, Slovenské risotto s kuracím mäsom a syrom (7)
2, Burito s hovädzím trhaným a chedarom, americké zemiaky (1,3,7)
3, Vyprážaný karfiol, varené zemiaky, tatárska omáčka (1,3,7)
4, XXL Kurací rezeň, viedenský zemiakový šalát (1,3,7,9,10)
5, Vyprážaný syr, pečné zemiaky, domáca tatárska omáčka(1,3,7,10)
6, Grilovaný losos na špargľovom risotto (4,7,9)`,
    price: "od 6,90 €",
  },
  {
    day: "Utorok",
    title: "Denné menu",
    description: `Slepačí vývar (1,3,9) 
    Kelová s párkom (1,3,9)
1, Segedínsky guľáš s domácou parenou knedľou (1,3,7)
2, Grilované kuracie prsia na šafránovom risotte s parmezánom (7,9)
3, Rigatoni v omáčke so sušeými paradajkami, baby špenátom a parmezánom (1,3,7)
4, XXL Kurací rezeň, viedenský zemiakový šalát (1,3,7,9,10)
5, Vyprážaný syr, pečné zemiaky, domáca tatárska omáčka(1,3,7,10)
6, Grilovaný losos na špargľovom risotto (4,7,9)`,
    price: "od 6,90 €",
  },
  {
    day: "Streda",
    title: "Denné menu",
    description: `Slepačí vývar (1,3,9) 
Špenátová (7,9)
1, Vyprážané vykostené kuracie stehno v corn flakes, zemiakové pyré, uhorkový šalát (1,3,7)
2, Tagliatelle Bolognese s parmezánom (1,3,7)
3, Špenátový hummus s falafelom a grilovanou zeleninou (1,5,6,11)
4, XXL Kurací rezeň, viedenský zemiakový šalát (1,3,7,9,10)
5, Vyprážaný syr, pečné zemiaky, domáca tatárska omáčka(1,3,7,10)
6, Grilovaný losos na špargľovom risotto (4,7,9)`,
    price: "od 6,90 €",
  },
  {
    day: "Štvrtok",
    title: "Denné menu",
    description: `Slepačí vývar (1,3,9) 
Lusková kyslá (7,9)
1, Šošovicový prívarok, bravčové fašírky (1,3,7)
2, Hovädzí stroganov, ryža (1,3,7,10)
3, Penne pomodoro s grilovaným Halloumi syrom (1,3,7)
4, XXL Kurací rezeň, viedenský zemiakový šalát (1,3,7,9,10)
5, Vyprážaný syr, pečné zemiaky, domáca tatárska omáčka(1,3,7,10)
6, Grilovaný losos na špargľovom risotto (4,7,9)`,
    price: "od 6,90 €",
  },


    {
    day: "Piatok",
    title: "Denné menu",
    description: `Slepačí vývar (1,3,9) 
Minestrone (9)
1, Vyprážaná bravčová krkovička, zemiakové pyré, paradajkový šalát (1,3,7)
2, Kuracie red curry s ananásom a ryžou (1,6,7,9)
3, Slivkové pirohy s makom (1,3,7)
4, XXL Kurací rezeň, viedenský zemiakový šalát (1,3,7,9,10)
5, Vyprážaný syr, pečné zemiaky, domáca tatárska omáčka(1,3,7,10)
6, Grilovaný losos na špargľovom risotto (4,7,9)`,
    price: "od 6,90 €",
  },
];

function renderDailyMenu() {
  const wrapper = document.getElementById("dailyMenu");
  if (!wrapper) return;

  wrapper.innerHTML = dailyMenuItems
    .map(
      (item) => `
        <article class="card">
          <p class="eyebrow">${item.day}</p>
          <h3>${item.title}</h3>
          <p class="menu-description">${item.description}</p>
          <span class="card-badge">${item.price}</span>
        </article>
      `
    )
    .join("");
}

function renderBreakfast() {
  const wrapper = document.getElementById("breakfastList");
  if (!wrapper) return;

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
  if (!wrapper) return;

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
  if (!wrapper) return;

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
  if (!wrapper) return;

  wrapper.innerHTML = cateringPoints
    .map((item) => `<div class="catering-point">${item}</div>`)
    .join("");
}

function setupMobileMenu() {
  const toggle = document.getElementById("menuToggle");
  const mobileMenu = document.getElementById("mobileMenu");

  if (!toggle || !mobileMenu) return;

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

  if (!form || !message) return;

  form.addEventListener("submit", () => {
    message.textContent = "Dopyt sa odosiela...";
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
