/* =========================================================
   Pizza Hut Lunch Buffet — Independent Informational Website
   script.js
   ========================================================= */

/* ---------------------------------------------------------
   1. MENU DATA
   All prices are labeled as reference/typical prices.
   All calories are labeled "Approx." (estimated reference
   values) unless noted otherwise, because actual buffet
   pricing, portions and nutrition vary by location.
--------------------------------------------------------- */
const MENU_ITEMS = [
  // ---------------- PIZZA ----------------
  { id:"pepperoni-pizza", name:"Pepperoni Pizza", category:"pizza",
    desc:"Classic hand-tossed style pizza topped with savory pepperoni and melted mozzarella.",
    price:"From $8.99", priceValue:8.99, calories:300, calNote:"per slice, approx.",
    img:"images/pepperoni-pizza.jpg", popular:true, featured:true,
    serving:"1 slice (medium crust)", protein:"12g", fat:"13g", carbs:"29g" },
  { id:"cheese-pizza", name:"Cheese Pizza", category:"pizza",
    desc:"A buffet favorite — a generous layer of mozzarella over classic pizza sauce.",
    price:"From $8.49", priceValue:8.49, calories:260, calNote:"per slice, approx.",
    img:"images/cheese-pizza.jpg", popular:true, featured:true,
    serving:"1 slice (medium crust)", protein:"10g", fat:"9g", carbs:"30g" },
  { id:"sausage-pizza", name:"Sausage Pizza", category:"pizza",
    desc:"Savory Italian-style sausage crumbles layered over melted cheese.",
    price:"From $8.99", priceValue:8.99, calories:310, calNote:"per slice, approx.",
    img:"images/sausage-pizza.jpg", popular:false, featured:false,
    serving:"1 slice (medium crust)", protein:"13g", fat:"15g", carbs:"29g" },
  { id:"meat-lovers-pizza", name:"Meat Lover's Pizza", category:"pizza",
    desc:"Loaded with pepperoni, sausage, ham and bacon for serious meat fans.",
    price:"From $9.99", priceValue:9.99, calories:370, calNote:"per slice, approx.",
    img:"images/meat-lovers-pizza.jpg", popular:true, featured:false,
    serving:"1 slice (medium crust)", protein:"16g", fat:"20g", carbs:"29g" },
  { id:"veggie-pizza", name:"Veggie Pizza", category:"pizza",
    desc:"A colorful mix of peppers, onions, mushrooms, and olives on a cheesy base.",
    price:"From $8.99", priceValue:8.99, calories:250, calNote:"per slice, approx.",
    img:"images/veggie-pizza.jpg", popular:false, featured:true,
    serving:"1 slice (medium crust)", protein:"9g", fat:"8g", carbs:"31g" },
  { id:"supreme-pizza", name:"Supreme Pizza", category:"pizza",
    desc:"The classic combo: pepperoni, sausage, peppers, onions, and mushrooms.",
    price:"From $9.49", priceValue:9.49, calories:320, calNote:"per slice, approx.",
    img:"images/supreme-pizza.jpg", popular:true, featured:false,
    serving:"1 slice (medium crust)", protein:"13g", fat:"15g", carbs:"30g" },
  { id:"hawaiian-pizza", name:"Hawaiian Pizza", category:"pizza",
    desc:"Sweet pineapple and smoky ham over melted mozzarella and pizza sauce.",
    price:"From $8.99", priceValue:8.99, calories:270, calNote:"per slice, approx.",
    img:"images/hawaiian-pizza.jpg", popular:false, featured:false,
    serving:"1 slice (medium crust)", protein:"11g", fat:"9g", carbs:"32g" },
  { id:"bbq-chicken-pizza", name:"BBQ Chicken Pizza", category:"pizza",
    desc:"Grilled chicken and red onion finished with tangy BBQ sauce and cheese.",
    price:"From $9.49", priceValue:9.49, calories:290, calNote:"per slice, approx.",
    img:"images/bbq-chicken-pizza.jpg", popular:false, featured:false,
    serving:"1 slice (medium crust)", protein:"14g", fat:"9g", carbs:"33g" },

  // ---------------- SIDES ----------------
  { id:"breadsticks", name:"Breadsticks", category:"sides",
    desc:"Warm, soft-baked breadsticks brushed with garlic butter and herbs.",
    price:"From $6.49", priceValue:6.49, calories:140, calNote:"per stick, approx.",
    img:"images/breadsticks.jpg", popular:true, featured:true,
    serving:"1 breadstick", protein:"3g", fat:"4g", carbs:"22g" },
  { id:"garlic-bread", name:"Garlic Bread", category:"sides",
    desc:"Toasted bread finished with a buttery garlic and herb topping.",
    price:"From $5.99", priceValue:5.99, calories:160, calNote:"per slice, approx.",
    img:"images/garlic-bread.jpg", popular:false, featured:false,
    serving:"1 slice", protein:"3g", fat:"6g", carbs:"22g" },
  { id:"cheesy-bread", name:"Cheesy Bread", category:"sides",
    desc:"Breadstick dough topped with a blend of melted cheeses, served with dip.",
    price:"From $7.49", priceValue:7.49, calories:170, calNote:"per piece, approx.",
    img:"images/cheesy-bread.jpg", popular:true, featured:true,
    serving:"1 piece", protein:"6g", fat:"7g", carbs:"20g" },
  { id:"potato-wedges", name:"Seasoned Potato Wedges", category:"sides",
    desc:"Crispy-edged potato wedges tossed in a light seasoning blend.",
    price:"From $5.99", priceValue:5.99, calories:180, calNote:"per serving, approx.",
    img:"images/potato-wedges.jpg", popular:false, featured:false,
    serving:"~6 wedges", protein:"3g", fat:"7g", carbs:"27g" },

  // ---------------- PASTA ----------------
  { id:"cavatappi-pasta", name:"Cavatappi Pasta", category:"pasta",
    desc:"Spiral pasta tossed in a creamy cheese sauce, a familiar buffet staple.",
    price:"From $7.99", priceValue:7.99, calories:330, calNote:"per serving, approx.",
    img:"images/cavatappi-pasta.jpg", popular:true, featured:true,
    serving:"1 cup", protein:"11g", fat:"13g", carbs:"40g" },
  { id:"marinara-pasta", name:"Pasta with Marinara", category:"pasta",
    desc:"Pasta tossed in a slow-simmered tomato marinara sauce.",
    price:"From $7.49", priceValue:7.49, calories:260, calNote:"per serving, approx.",
    img:"images/marinara-pasta.jpg", popular:false, featured:false,
    serving:"1 cup", protein:"8g", fat:"5g", carbs:"46g" },
  { id:"meat-sauce-pasta", name:"Pasta with Meat Sauce", category:"pasta",
    desc:"Hearty pasta tossed in a rich tomato sauce with seasoned ground beef.",
    price:"From $8.49", priceValue:8.49, calories:350, calNote:"per serving, approx.",
    img:"images/meat-sauce-pasta.jpg", popular:false, featured:false,
    serving:"1 cup", protein:"15g", fat:"12g", carbs:"42g" },

  // ---------------- WINGS ----------------
  { id:"buffalo-wings", name:"Buffalo Wings", category:"wings",
    desc:"Classic bone-in wings tossed in a tangy, spicy buffalo sauce.",
    price:"From $9.99", priceValue:9.99, calories:90, calNote:"per wing, approx.",
    img:"images/buffalo-wings.jpg", popular:true, featured:true,
    serving:"1 wing", protein:"6g", fat:"6g", carbs:"1g" },
  { id:"boneless-wings", name:"Boneless Wings", category:"wings",
    desc:"Breaded, all-white-meat wings tossed in your choice of sauce.",
    price:"From $9.99", priceValue:9.99, calories:80, calNote:"per piece, approx.",
    img:"images/boneless-wings.jpg", popular:true, featured:false,
    serving:"1 piece", protein:"5g", fat:"5g", carbs:"5g" },
  { id:"bbq-wings", name:"BBQ Wings", category:"wings",
    desc:"Bone-in wings glazed with a sweet and smoky BBQ sauce.",
    price:"From $9.99", priceValue:9.99, calories:95, calNote:"per wing, approx.",
    img:"images/bbq-wings.jpg", popular:false, featured:false,
    serving:"1 wing", protein:"6g", fat:"6g", carbs:"3g" },

  // ---------------- SALADS ----------------
  { id:"garden-salad", name:"Garden Salad", category:"salads",
    desc:"Crisp mixed greens with tomato, cucumber, and shredded cheese.",
    price:"From $4.99", priceValue:4.99, calories:110, calNote:"per bowl, approx. (dressing separate)",
    img:"images/garden-salad.jpg", popular:false, featured:true,
    serving:"1 bowl, no dressing", protein:"3g", fat:"5g", carbs:"9g" },
  { id:"caesar-salad", name:"Caesar Salad", category:"salads",
    desc:"Romaine lettuce, parmesan, and croutons with classic Caesar dressing.",
    price:"From $5.49", priceValue:5.49, calories:190, calNote:"per bowl, approx.",
    img:"images/caesar-salad.jpg", popular:false, featured:false,
    serving:"1 bowl, with dressing", protein:"5g", fat:"14g", carbs:"11g" },

  // ---------------- DESSERTS ----------------
  { id:"cinnamon-sticks", name:"Cinnamon Sticks", category:"desserts",
    desc:"Baked dough sticks dusted with cinnamon sugar, served with sweet icing.",
    price:"From $6.99", priceValue:6.99, calories:170, calNote:"per stick, approx.",
    img:"images/cinnamon-sticks.jpg", popular:true, featured:true,
    serving:"1 stick", protein:"2g", fat:"5g", carbs:"27g" },
  { id:"chocolate-brownie", name:"Chocolate Brownie", category:"desserts",
    desc:"A dense, fudgy chocolate brownie — a classic buffet dessert pick.",
    price:"From $3.99", priceValue:3.99, calories:200, calNote:"per piece, approx.",
    img:"images/chocolate-brownie.jpg", popular:true, featured:false,
    serving:"1 piece", protein:"2g", fat:"9g", carbs:"28g" },
  { id:"chocolate-chip-cookie", name:"Chocolate Chip Cookie", category:"desserts",
    desc:"A warm, soft-baked cookie loaded with chocolate chips.",
    price:"From $2.99", priceValue:2.99, calories:180, calNote:"per cookie, approx.",
    img:"images/chocolate-chip-cookie.jpg", popular:false, featured:false,
    serving:"1 cookie", protein:"2g", fat:"8g", carbs:"25g" },
  { id:"dessert-pizza", name:"Dessert Pizza", category:"desserts",
    desc:"A sweet take on pizza, finished with a sugary glaze and toppings.",
    price:"From $5.99", priceValue:5.99, calories:220, calNote:"per slice, approx.",
    img:"images/dessert-pizza.jpg", popular:false, featured:true,
    serving:"1 slice", protein:"3g", fat:"7g", carbs:"36g" },

  // ---------------- DRINKS ----------------
  { id:"fountain-drink", name:"Fountain Soft Drink", category:"drinks",
    desc:"Choice of regular or diet fountain soda, refills where offered.",
    price:"From $2.49", priceValue:2.49, calories:150, calNote:"per regular 16oz, approx. (0 Calories for diet options)",
    img:"images/fountain-drink.jpg", popular:false, featured:true,
    serving:"16 oz", protein:"0g", fat:"0g", carbs:"39g" },
  { id:"iced-tea", name:"Iced Tea", category:"drinks",
    desc:"Freshly brewed iced tea, served sweetened or unsweetened.",
    price:"From $2.49", priceValue:2.49, calories:90, calNote:"per 16oz sweetened, approx. (0 Calories unsweetened)",
    img:"images/iced-tea.jpg", popular:false, featured:false,
    serving:"16 oz", protein:"0g", fat:"0g", carbs:"24g" },
  { id:"lemonade", name:"Lemonade", category:"drinks",
    desc:"A refreshing, lightly sweetened lemonade.",
    price:"From $2.49", priceValue:2.49, calories:160, calNote:"per 16oz, approx.",
    img:"images/lemonade.jpg", popular:false, featured:false,
    serving:"16 oz", protein:"0g", fat:"0g", carbs:"42g" },
  { id:"bottled-water", name:"Bottled Water", category:"drinks",
    desc:"Still bottled water — a simple, no-calorie option on the buffet line.",
    price:"From $1.99", priceValue:1.99, calories:0, calNote:"0 Calories",
    img:"images/bottled-water.jpg", popular:false, featured:false,
    serving:"1 bottle", protein:"0g", fat:"0g", carbs:"0g" },
];

const CATEGORY_LABELS = {
  all:"All", pizza:"Pizza", sides:"Sides", pasta:"Pasta", wings:"Wings",
  salads:"Salads", desserts:"Desserts", drinks:"Drinks"
};

/* ---------------------------------------------------------
   2. MOBILE NAV
--------------------------------------------------------- */
function initNav(){
  const btn = document.querySelector(".hamburger");
  const nav = document.querySelector(".main-nav");
  const backdrop = document.querySelector(".nav-backdrop");
  if(!btn || !nav) return;
  const close = () => {
    btn.setAttribute("aria-expanded","false");
    nav.classList.remove("open");
    backdrop && backdrop.classList.remove("open");
  };
  btn.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    btn.setAttribute("aria-expanded", String(isOpen));
    backdrop && backdrop.classList.toggle("open", isOpen);
  });
  backdrop && backdrop.addEventListener("click", close);
  nav.querySelectorAll("a").forEach(a => a.addEventListener("click", close));
  document.addEventListener("keydown", e => { if(e.key === "Escape") close(); });
}

/* ---------------------------------------------------------
   3. FOOD GRID: render, search, filter
--------------------------------------------------------- */
function escapeHtml(str){
  return String(str).replace(/[&<>"']/g, s => ({
    "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"
  }[s]));
}

function cardHtml(item){
  return `
  <article class="food-card" data-id="${item.id}" data-category="${item.category}"
     data-name="${escapeHtml(item.name.toLowerCase())}" data-desc="${escapeHtml(item.desc.toLowerCase())}"
     data-cal="${item.calories}">
    <div class="thumb">
      ${item.popular ? '<span class="badge">Popular</span>' : ""}
      <span class="badge cal">${item.calories} cal</span>
      <img src="${item.img}" alt="${escapeHtml(item.name)}" loading="lazy" width="600" height="450">
    </div>
    <div class="body">
      <h3>${escapeHtml(item.name)}</h3>
      <p class="desc">${escapeHtml(item.desc)}</p>
      <div class="price-cal">
        <span class="price">${escapeHtml(item.price)}</span>
        <span class="cal">Approx. ${item.calories} Calories</span>
      </div>
      <button type="button" class="view-btn" data-view="${item.id}">View Details</button>
    </div>
  </article>`;
}

function renderGrid(gridEl, items){
  if(!gridEl) return;
  if(items.length === 0){
    gridEl.innerHTML = `<p class="no-results">No buffet items found. Try another search.</p>`;
    return;
  }
  gridEl.innerHTML = items.map(cardHtml).join("");
}

function initFoodGrid(){
  const gridEl = document.querySelector("[data-food-grid]");
  if(!gridEl) return;

  const presetCategory = gridEl.getAttribute("data-preset-category") || "all";
  const searchInput = document.querySelector("[data-search-input]");
  const categoryButtons = document.querySelectorAll("[data-category-filter]");
  const calorieButtons = document.querySelectorAll("[data-calorie-filter]");

  let state = { query:"", category:presetCategory, calorie:"all" };

  function applyFilters(){
    let items = MENU_ITEMS.slice();
    if(state.category !== "all"){
      items = items.filter(i => i.category === state.category);
    }
    if(state.calorie === "under300"){
      items = items.filter(i => i.calories < 300);
    } else if(state.calorie === "300to500"){
      items = items.filter(i => i.calories >= 300 && i.calories <= 500);
    } else if(state.calorie === "over500"){
      items = items.filter(i => i.calories > 500);
    } else if(state.calorie === "under500"){
      items = items.filter(i => i.calories < 500);
    }
    if(state.query.trim()){
      const q = state.query.trim().toLowerCase();
      items = items.filter(i =>
        i.name.toLowerCase().includes(q) ||
        i.desc.toLowerCase().includes(q) ||
        i.category.toLowerCase().includes(q)
      );
    }
    renderGrid(gridEl, items);
  }

  if(searchInput){
    searchInput.addEventListener("input", e => {
      state.query = e.target.value;
      applyFilters();
    });
  }

  categoryButtons.forEach(btn => {
    if(btn.dataset.categoryFilter === presetCategory) btn.classList.add("active");
    btn.addEventListener("click", () => {
      categoryButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      state.category = btn.dataset.categoryFilter;
      applyFilters();
    });
  });

  calorieButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      calorieButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      state.calorie = btn.dataset.calorieFilter;
      applyFilters();
    });
  });

  applyFilters();
  gridEl.addEventListener("click", e => {
    const btn = e.target.closest("[data-view]");
    if(btn) openModal(btn.dataset.view);
  });
}

/* ---------------------------------------------------------
   4. MODAL
--------------------------------------------------------- */
function buildModal(){
  if(document.querySelector(".modal-backdrop")) return;
  const wrap = document.createElement("div");
  wrap.className = "modal-backdrop";
  wrap.innerHTML = `
    <div class="modal" role="dialog" aria-modal="true" aria-labelledby="modalTitle">
      <button type="button" class="modal-close" aria-label="Close details">&times;</button>
      <img alt="" id="modalImg">
      <div class="modal-body">
        <span class="modal-tag" id="modalCategory"></span>
        <h3 id="modalTitle"></h3>
        <p id="modalDesc"></p>
        <div class="modal-meta">
          <span class="meta-pill" id="modalPrice"></span>
          <span class="meta-pill" id="modalCal"></span>
          <span class="meta-pill" id="modalServing"></span>
        </div>
        <div class="nutri-card">
          <h4>Estimated Nutrition</h4>
          <div class="nutri-row"><span>Protein</span><span id="modalProtein"></span></div>
          <div class="nutri-row"><span>Fat</span><span id="modalFat"></span></div>
          <div class="nutri-row"><span>Carbohydrates</span><span id="modalCarbs"></span></div>
          <p class="nutri-note">Values are approximate reference estimates and can vary by preparation, toppings, and location.</p>
        </div>
      </div>
    </div>`;
  document.body.appendChild(wrap);
  wrap.querySelector(".modal-close").addEventListener("click", closeModal);
  wrap.addEventListener("click", e => { if(e.target === wrap) closeModal(); });
  document.addEventListener("keydown", e => {
    if(e.key === "Escape" && wrap.classList.contains("open")) closeModal();
  });
}

let lastFocused = null;
function openModal(id){
  const item = MENU_ITEMS.find(i => i.id === id);
  if(!item) return;
  buildModal();
  const wrap = document.querySelector(".modal-backdrop");
  wrap.querySelector("#modalImg").src = item.img;
  wrap.querySelector("#modalImg").alt = item.name;
  wrap.querySelector("#modalCategory").textContent = CATEGORY_LABELS[item.category] || item.category;
  wrap.querySelector("#modalTitle").textContent = item.name;
  wrap.querySelector("#modalDesc").textContent = item.desc;
  wrap.querySelector("#modalPrice").textContent = item.price;
  wrap.querySelector("#modalCal").textContent = `Approx. ${item.calories} Calories`;
  wrap.querySelector("#modalServing").textContent = item.serving;
  wrap.querySelector("#modalProtein").textContent = item.protein;
  wrap.querySelector("#modalFat").textContent = item.fat;
  wrap.querySelector("#modalCarbs").textContent = item.carbs;
  lastFocused = document.activeElement;
  wrap.classList.add("open");
  wrap.querySelector(".modal-close").focus();
}
function closeModal(){
  const wrap = document.querySelector(".modal-backdrop");
  if(!wrap) return;
  wrap.classList.remove("open");
  if(lastFocused) lastFocused.focus();
}

/* ---------------------------------------------------------
   5. FEATURED / POPULAR SECTIONS (home page)
--------------------------------------------------------- */
function initFeaturedSections(){
  const featuredEl = document.querySelector("[data-featured-grid]");
  if(featuredEl){
    const items = MENU_ITEMS.filter(i => i.featured).slice(0,6);
    featuredEl.innerHTML = items.map(i => `
      <div class="feature-card">
        <img src="${i.img}" alt="${escapeHtml(i.name)}" loading="lazy" width="300" height="300">
        <div class="cap">${escapeHtml(i.name)}</div>
      </div>`).join("");
  }
  const popularEl = document.querySelector("[data-popular-grid]");
  if(popularEl){
    const items = MENU_ITEMS.filter(i => i.popular);
    popularEl.innerHTML = items.map(cardHtml).join("");
    popularEl.addEventListener("click", e => {
      const btn = e.target.closest("[data-view]");
      if(btn) openModal(btn.dataset.view);
    });
  }
}

/* ---------------------------------------------------------
   6. FAQ ACCORDION
--------------------------------------------------------- */
function initFaq(){
  document.querySelectorAll(".faq-item").forEach(item => {
    const q = item.querySelector(".faq-q");
    if(!q) return;
    q.addEventListener("click", () => {
      const isOpen = item.classList.contains("open");
      document.querySelectorAll(".faq-item.open").forEach(o => {
        if(o !== item){ o.classList.remove("open"); o.querySelector(".faq-q").setAttribute("aria-expanded","false"); }
      });
      item.classList.toggle("open", !isOpen);
      q.setAttribute("aria-expanded", String(!isOpen));
    });
  });
}

/* ---------------------------------------------------------
   7. INIT
--------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
  initNav();
  initFoodGrid();
  initFeaturedSections();
  initFaq();
  const yearEl = document.querySelector("[data-year]");
  if(yearEl) yearEl.textContent = new Date().getFullYear();
});
