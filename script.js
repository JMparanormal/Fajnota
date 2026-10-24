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
Paradajková so syrom (7)
1, Kuracie kung pao s ryžou (2,4,5,6)
2, Bravčový bôčik s kurkumovým zemiakom, čalamáda, kyslé uhorky (6,10)
3, Hubové risotto s parmezánom (7)
4, XXL Kurací rezeň, viedenský zemiakový šalát (1,3,7,9,10)
5, Vyprážaný syr, pečné zemiaky, domáca tatárska omáčka(1,3,7,10)
6, Hovädzie líčka na víne, zemiakové pyre (7)`,
    price: "od 6,90 €",
  },
  {
    day: "Utorok",
    title: "Denné menu",
    description: `Slepačí vývar (1,3,9)
Hŕstková (1,9)
1, Bravčové čevapčiči, varené zemiaky, domáci ajvar (1,3,10)
2, Hovädzí stroganov, ryža (7)
3, Gnochhi v nivovej omáčke s orechmi (1,3,7,8)
4, XXL Kurací rezeň, viedenský zemiakový šalát (1,3,7,9,10)
5, Vyprážaný syr, pečné zemiaky, domáca tatárska omáčka(1,3,7,10)
6, Hovädzie líčka na víne, zemiakové pyre (7)`,
    price: "od 6,90 €",
  },
  {
    day: "Streda",
    title: "Denné menu",
    description: `Slepačí vývar (1,3,9) 
Kelová s párkom (1,3,7,9)
1, Francúzske zemiaky s kyslou uhorkou (1,3,7)
2, Grilované kuracie prsia na lúskoch s volskym okom, baby zemiaky (3,7)
3, Špagety v arrabbiata omáčke s parmezánom (1,3,7)
4, XXL Kurací rezeň, viedenský zemiakový šalát (1,3,7,9,10)
5, Vyprážaný syr, pečné zemiaky, domáca tatárska omáčka(1,3,7,10)
6, Hovädzie líčka na víne, zemiakové pyre (7)`,
    price: "od 6,90 €",
  },
  {
    day: "Štvrtok",
    title: "Denné menu",
    description: `Slepačí vývar (1,3,9) 
Batatová (7,9)
1, Hovädzí madarský guláš, parená knedľa (1,3,7)
2, Vyprážané vykosť. kuracie stehno v parmezán. strúhanke s rukolou a cherry paradajkami, ryža (1,3,7)
3, Buritto s grilovaným halloumi syrom, fresh šalá (1,3,7)
4, XXL Kurací rezeň, viedenský zemiakový šalát (1,3,7,9,10)
5, Vyprážaný syr, pečné zemiaky, domáca tatárska omáčka(1,3,7,10)
6, Hovädzie líčka na víne, zemiakové pyre (7)`,
    price: "od 6,90 €",
  },


    {
    day: "Piatok",
    title: "Denné menu",
    description: `Slepačí vývar (1,3,9) 
Minestrone (9)
1, Holandský mletý rezeň, zemiakové pyré, tatárska omáčka (1,3,7)
2, Grilované kuracie prsia so sušenými paradajkamí, ryža
3, Slivkové pirohy s makom (1,3,7)
4, XXL Kurací rezeň, viedenský zemiakový šalát (1,3,7,9,10)
5, Vyprážaný syr, pečné zemiaky, domáca tatárska omáčka(1,3,7,10)
6, Hovädzie líčka na víne, zemiakové pyre (7)`,
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
