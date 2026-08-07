
// MENU DATASTORE
const MENU_DATA = [
  // CHEF'S SPECIALS & SPOTLIGHTS
  {
    id: "dish-1",
    title: "A5 Japanese Wagyu Tenderloin",
    category: "mains",
    isChefSpecial: true,
    price: 850,
    rating: "4.9",
    image: "assets/images/wagyu_steak.png",
    description: "Pan-seared A5 Miyazaki Wagyu beef served with black truffle butter, charred baby carrots, and a rich 48-hour bone marrow demi-glace.",
    badges: ["chef"],
    dietary: ["gf"],
    calories: "680 kcal",
    prepTime: "25 min",
    winePairing: "2018 Chateau Margaux Bordeaux",
    allergens: "Dairy"
  },
  {
    id: "dish-2",
    title: "Black Truffle & Porcini Risotto",
    category: "mains",
    isChefSpecial: true,
    price: 340,
    rating: "4.8",
    image: "assets/images/truffle_risotto.png",
    description: "Acquerello carnaroli rice slow-cooked with wild mountain porcini, finished with aged Parmigiano-Reggiano and freshly shaved Norcia black truffles.",
    badges: ["chef", "vegan"],
    dietary: ["vegetarian", "gf"],
    calories: "520 kcal",
    prepTime: "20 min",
    winePairing: "2020 Barolo DOCG",
    allergens: "Dairy"
  },
  {
    id: "dish-3",
    title: "Grand Azure Lobster Bisque",
    category: "starters",
    isChefSpecial: true,
    price: 280,
    rating: "4.9",
    image: "assets/images/lobster_bisque.png",
    description: "Velvety Atlantic lobster reduction infused with cognac and tarragon, crowned with butter-poached lobster tail and chive infused oil.",
    badges: ["chef"],
    dietary: ["gf"],
    calories: "380 kcal",
    prepTime: "15 min",
    winePairing: "2021 Meursault Chardonnay",
    allergens: "Shellfish, Dairy"
  },
  {
    id: "dish-4",
    title: "Celestial Chocolate Sphere",
    category: "desserts",
    isChefSpecial: true,
    price: 195,
    rating: "4.9",
    image: "assets/images/artisan_dessert.png",
    description: "70% Valrhona dark chocolate shell melted table-side with warm Tahitian vanilla sauce, revealing wild raspberry mousse and edible 24k gold leaf.",
    badges: ["chef"],
    dietary: ["vegetarian"],
    calories: "450 kcal",
    prepTime: "12 min",
    winePairing: "Vintage Taylor Fladgate Port",
    allergens: "Dairy, Eggs, Soy"
  },
  {
    id: "dish-5",
    title: "Sapphire Cloud Cocktail",
    category: "beverages",
    isChefSpecial: true,
    price: 185,
    rating: "4.9",
    image: "assets/images/signature_cocktail.png",
    description: "Empress 1908 botanical gin infused with elderflower liqueur, blue spirulina, and fresh yuzu citrus, topped with an aromatic citrus bubble cloud.",
    badges: ["chef"],
    dietary: ["vegan", "gf"],
    calories: "160 kcal",
    prepTime: "5 min",
    winePairing: "Signature Mixologist Creation",
    allergens: "None"
  },

  // BREAKFAST & BRUNCH
  {
    id: "dish-6",
    title: "Royal Smoked Salmon Benedict",
    category: "breakfast",
    isChefSpecial: false,
    price: 220,
    rating: "4.7",
    image: "assets/images/hero_bg.png",
    description: "Artisanal brioche topped with wild Scottish smoked salmon, organic poached eggs, fresh avocado ribbons, and saffron hollandaise.",
    badges: [],
    dietary: [],
    calories: "510 kcal",
    prepTime: "15 min",
    winePairing: "Veuve Clicquot Champagne",
    allergens: "Eggs, Gluten, Fish, Dairy"
  },
  {
    id: "dish-7",
    title: "Organic Açai & Pitaya Bowl",
    category: "breakfast",
    isChefSpecial: false,
    price: 165,
    rating: "4.6",
    image: "assets/images/artisan_dessert.png",
    description: "Blended Amazonian açai topped with hemp seeds, chia pudding, fresh blueberries, coconut flakes, and artisan almond butter.",
    badges: ["vegan"],
    dietary: ["vegan", "gf"],
    calories: "320 kcal",
    prepTime: "10 min",
    winePairing: "Fresh Cold-Pressed Green Juice",
    allergens: "Tree Nuts"
  },

  // STARTERS & APPETIZERS
  {
    id: "dish-8",
    title: "Hokkaido Scallop Crudo",
    category: "starters",
    isChefSpecial: false,
    price: 260,
    rating: "4.8",
    image: "assets/images/lobster_bisque.png",
    description: "Thinly sliced Japanese scallops with yuzu kosho pearls, pink grapefruit gel, compressed radish, and extra virgin olive oil.",
    badges: [],
    dietary: ["gf"],
    calories: "220 kcal",
    prepTime: "12 min",
    winePairing: "Sancerre Sauvignon Blanc",
    allergens: "Molluscs"
  },
  {
    id: "dish-9",
    title: "Heirloom Tomato & Burrata",
    category: "starters",
    isChefSpecial: false,
    price: 195,
    rating: "4.7",
    image: "assets/images/truffle_risotto.png",
    description: "Creamy Pugliese burrata cheese served with organic heirloom tomatoes, aged balsamic caviar, pesto drizzle, and grilled sourdough.",
    badges: [],
    dietary: ["vegetarian"],
    calories: "390 kcal",
    prepTime: "10 min",
    winePairing: "Vermentino di Sardegna",
    allergens: "Dairy, Gluten"
  },

  // MAINS
  {
    id: "dish-10",
    title: "Chilean Sea Bass En Papillote",
    category: "mains",
    isChefSpecial: false,
    price: 450,
    rating: "4.9",
    image: "assets/images/wagyu_steak.png",
    description: "Wild-caught sea bass baked in parchment with saffron lemongrass broth, baby fennel, fingerling potatoes, and cherry tomatoes.",
    badges: [],
    dietary: ["gf"],
    calories: "480 kcal",
    prepTime: "22 min",
    winePairing: "Puligny-Montrachet",
    allergens: "Fish"
  },
  {
    id: "dish-11",
    title: "Roasted Rack of New Zealand Lamb",
    category: "mains",
    isChefSpecial: false,
    price: 480,
    rating: "4.8",
    image: "assets/images/wagyu_steak.png",
    description: "Herb-crusted lamb rack accompanied by smoked eggplant puree, charred broccolini, and mint jus.",
    badges: [],
    dietary: ["gf"],
    calories: "620 kcal",
    prepTime: "24 min",
    winePairing: "Rioja Gran Reserva",
    allergens: "None"
  },

  // DESSERTS
  {
    id: "dish-12",
    title: "Matcha Passionfruit Mille-Feuille",
    category: "desserts",
    isChefSpecial: false,
    price: 175,
    rating: "4.7",
    image: "assets/images/artisan_dessert.png",
    description: "Caramelized puff pastry layers filled with ceremonial Uji matcha cream and tangy passionfruit gelée.",
    badges: [],
    dietary: ["vegetarian"],
    calories: "370 kcal",
    prepTime: "10 min",
    winePairing: "Chateau d'Yquem Sauternes",
    allergens: "Gluten, Dairy, Eggs"
  },

  // BEVERAGES & COCKTAILS
  {
    id: "dish-13",
    title: "Smoked Old Fashioned",
    category: "beverages",
    isChefSpecial: false,
    price: 180,
    rating: "4.8",
    image: "assets/images/signature_cocktail.png",
    description: "Small-batch Woodford Reserve Bourbon, Angostura bitters, raw cane sugar syrup smoked under cherrywood glass dome.",
    badges: [],
    dietary: ["vegan", "gf"],
    calories: "180 kcal",
    prepTime: "5 min",
    winePairing: "Cuban Cigar Companion",
    allergens: "None"
  }
];

// APP STATE
let currentCategory = "all";
let currentDietary = "all";
let searchQuery = "";
let tastingList = [];

// DOM ELEMENTS
document.addEventListener("DOMContentLoaded", () => {
  initHeaderScroll();
  renderSpotlightSection();
  renderMenuGrid();
  initCategoryNav();
  initDietaryChips();
  initSearch();
  initModalEvents();
  initDrawerEvents();
});

// 1. HEADER SCROLL EFFECT
function initHeaderScroll() {
  const header = document.querySelector(".site-header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
}

// 2. RENDER SPOTLIGHT (CHEF'S SPECIALS)
function renderSpotlightSection() {
  const spotlightContainer = document.getElementById("spotlightGrid");
  if (!spotlightContainer) return;

  const chefItems = MENU_DATA.filter(item => item.isChefSpecial).slice(0, 3);

  spotlightContainer.innerHTML = chefItems.map(item => `
    <div class="spotlight-card">
      <div class="spotlight-img-wrap">
        <img src="${item.image}" alt="${item.title}" loading="lazy">
        <span class="badge-chef-special">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/></svg>
          Chef's Spotlight
        </span>
      </div>
      <div class="spotlight-content">
        <div class="spotlight-header">
          <h3 class="spotlight-title">${item.title}</h3>
          <span class="spotlight-price">Rs. ${item.price.toLocaleString('en-IN')}</span>
        </div>
        <p class="spotlight-desc">${item.description}</p>
        <div class="spotlight-footer">
          <button class="btn-quick-view" onclick="openModal('${item.id}')">
            Details & Ingredients &rarr;
          </button>
          <button class="btn-add-tasting ${isItemInTasting(item.id) ? 'added' : ''}" onclick="toggleTastingList('${item.id}')">
            ${isItemInTasting(item.id) ? '✓ Saved' : '+ Tasting List'}
          </button>
        </div>
      </div>
    </div>
  `).join("");
}

// 3. RENDER MAIN MENU GRID
function renderMenuGrid() {
  const gridContainer = document.getElementById("menuGrid");
  if (!gridContainer) return;

  let filtered = MENU_DATA.filter(item => {
    // Category Filter
    if (currentCategory !== "all" && item.category !== currentCategory) {
      return false;
    }
    // Dietary Filter
    if (currentDietary !== "all") {
      if (currentDietary === "vegan" && !item.dietary.includes("vegan")) return false;
      if (currentDietary === "vegetarian" && !item.dietary.includes("vegetarian")) return false;
      if (currentDietary === "gf" && !item.dietary.includes("gf")) return false;
      if (currentDietary === "chef" && !item.isChefSpecial) return false;
    }
    // Search Query Filter
    if (searchQuery.trim() !== "") {
      const q = searchQuery.toLowerCase();
      const matchTitle = item.title.toLowerCase().includes(q);
      const matchDesc = item.description.toLowerCase().includes(q);
      if (!matchTitle && !matchDesc) return false;
    }
    return true;
  });

  if (filtered.length === 0) {
    gridContainer.innerHTML = `
      <div class="no-results">
        <svg class="no-results-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
        </svg>
        <h3>No Menu Items Found</h3>
        <p>We couldn't find any dishes matching your current search criteria or dietary preferences.</p>
        <button class="cat-btn active" onclick="resetFilters()">Reset Filters</button>
      </div>
    `;
    return;
  }

  gridContainer.innerHTML = filtered.map(item => {
    const isAdded = isItemInTasting(item.id);
    return `
      <article class="menu-card">
        <div class="menu-card-img-wrap">
          <img src="${item.image}" alt="${item.title}" loading="lazy">
          <div class="menu-badge-list">
            ${item.isChefSpecial ? '<span class="badge badge-chef">Chef Selection</span>' : ''}
            ${item.dietary.includes('vegan') ? '<span class="badge badge-vegan">Vegan</span>' : ''}
            ${item.dietary.includes('vegetarian') ? '<span class="badge badge-vegan">Vegetarian</span>' : ''}
            ${item.dietary.includes('gf') ? '<span class="badge badge-gf">Gluten Free</span>' : ''}
          </div>
        </div>
        <div class="menu-card-body">
          <div class="menu-card-header">
            <h3 class="menu-item-title">${item.title}</h3>
            <span class="menu-item-price">Rs. ${item.price.toLocaleString('en-IN')}</span>
          </div>
          <p class="menu-item-desc">${item.description}</p>
          <div class="menu-card-actions">
            <button class="btn-quick-view" onclick="openModal('${item.id}')">
              Quick View
            </button>
            <button class="btn-add-tasting ${isAdded ? 'added' : ''}" onclick="toggleTastingList('${item.id}')">
              ${isAdded ? '✓ Saved' : '+ Tasting List'}
            </button>
          </div>
        </div>
      </article>
    `;
  }).join("");
}

// 4. CATEGORY NAVIGATION
function initCategoryNav() {
  const catButtons = document.querySelectorAll(".cat-btn");
  catButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      catButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentCategory = btn.dataset.category || "all";
      renderMenuGrid();
    });
  });
}

// 5. DIETARY CHIPS
function initDietaryChips() {
  const chips = document.querySelectorAll(".dietary-chip");
  chips.forEach(chip => {
    chip.addEventListener("click", () => {
      chips.forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
      currentDietary = chip.dataset.dietary || "all";
      renderMenuGrid();
    });
  });
}

// 6. SEARCH INPUT
function initSearch() {
  const searchInput = document.getElementById("heroSearchInput");
  const clearBtn = document.getElementById("searchClearBtn");

  if (!searchInput) return;

  searchInput.addEventListener("input", (e) => {
    searchQuery = e.target.value;
    if (searchQuery.length > 0) {
      clearBtn?.classList.add("visible");
    } else {
      clearBtn?.classList.remove("visible");
    }
    renderMenuGrid();
  });

  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      searchInput.value = "";
      searchQuery = "";
      clearBtn.classList.remove("visible");
      renderMenuGrid();
    });
  }
}

// 7. RESET FILTERS
function resetFilters() {
  currentCategory = "all";
  currentDietary = "all";
  searchQuery = "";

  const searchInput = document.getElementById("heroSearchInput");
  if (searchInput) searchInput.value = "";

  document.querySelectorAll(".cat-btn").forEach(b => b.classList.remove("active"));
  document.querySelector('.cat-btn[data-category="all"]')?.classList.add("active");

  document.querySelectorAll(".dietary-chip").forEach(c => c.classList.remove("active"));
  document.querySelector('.dietary-chip[data-dietary="all"]')?.classList.add("active");

  renderMenuGrid();
}

// 8. QUICK VIEW MODAL
function openModal(id) {
  const item = MENU_DATA.find(i => i.id === id);
  if (!item) return;

  const modalOverlay = document.getElementById("modalOverlay");
  const modalContainer = document.getElementById("modalContainer");

  const isAdded = isItemInTasting(item.id);

  modalContainer.innerHTML = `
    <button class="modal-close" onclick="closeModal()" aria-label="Close modal">
      <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
    </button>
    <div class="modal-body">
      <div class="modal-img-wrap">
        <img src="${item.image}" alt="${item.title}">
      </div>
      <div class="modal-content">
        <div class="modal-title-row">
          <h2 class="modal-title">${item.title}</h2>
          <span class="modal-price">Rs. ${item.price.toLocaleString('en-IN')}</span>
        </div>
        <p class="modal-desc">${item.description}</p>
        
        <div class="modal-meta-grid">
          <div>
            <span class="meta-item-label">Calories</span>
            <span class="meta-item-val">${item.calories}</span>
          </div>
          <div>
            <span class="meta-item-label">Prep Time</span>
            <span class="meta-item-val">${item.prepTime}</span>
          </div>
          <div>
            <span class="meta-item-label">Allergens</span>
            <span class="meta-item-val">${item.allergens}</span>
          </div>
          <div>
            <span class="meta-item-label">Sommelier Pairing</span>
            <span class="meta-item-val">${item.winePairing}</span>
          </div>
        </div>

        <div class="modal-footer">
          <button class="btn-modal-add" onclick="toggleTastingList('${item.id}'); closeModal();">
            ${isAdded ? 'Remove from Tasting List' : '+ Add to Tasting Selection'}
          </button>
        </div>
      </div>
    </div>
  `;

  modalOverlay.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  const modalOverlay = document.getElementById("modalOverlay");
  modalOverlay.classList.remove("active");
  document.body.style.overflow = "";
}

function initModalEvents() {
  const modalOverlay = document.getElementById("modalOverlay");
  modalOverlay?.addEventListener("click", (e) => {
    if (e.target === modalOverlay) closeModal();
  });
}

// 9. TASTING LIST / ORDER SELECTION STATE
function isItemInTasting(id) {
  return tastingList.some(item => item.id === id);
}

function toggleTastingList(id) {
  const index = tastingList.findIndex(item => item.id === id);
  if (index > -1) {
    tastingList.splice(index, 1);
  } else {
    const item = MENU_DATA.find(i => i.id === id);
    if (item) tastingList.push(item);
  }

  updateTastingUI();
  renderSpotlightSection();
  renderMenuGrid();
}

function updateTastingUI() {
  const countBadges = document.querySelectorAll(".tasting-count");
  countBadges.forEach(b => b.textContent = tastingList.length);

  const drawerBody = document.getElementById("drawerBody");
  const drawerTotal = document.getElementById("drawerTotal");

  if (!drawerBody) return;

  if (tastingList.length === 0) {
    drawerBody.innerHTML = `
      <div class="drawer-empty">
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
        <p>Your tasting list is currently empty.</p>
        <small style="color:#94a3b8">Explore our menu and add dishes to curate your personalized hotel dining experience.</small>
      </div>
    `;
    if (drawerTotal) drawerTotal.textContent = "Rs. 0.00";
    return;
  }

  let total = 0;
  drawerBody.innerHTML = `
    <div class="drawer-item-list">
      ${tastingList.map(item => {
        total += item.price;
        return `
          <div class="drawer-item">
            <img src="${item.image}" alt="${item.title}" class="drawer-item-img">
            <div class="drawer-item-info">
              <h4 class="drawer-item-name">${item.title}</h4>
              <span class="drawer-item-price">Rs. ${item.price.toLocaleString('en-IN')}</span>
            </div>
            <button class="btn-remove-item" onclick="toggleTastingList('${item.id}')" aria-label="Remove item">
              <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
          </div>
        `;
      }).join("")}
    </div>
  `;

  if (drawerTotal) drawerTotal.textContent = `Rs. ${total.toLocaleString('en-IN')}`;
}

function initDrawerEvents() {
  const drawerOverlay = document.getElementById("drawerOverlay");
  const openBtn = document.getElementById("openTastingBtn");
  const closeBtn = document.getElementById("closeDrawerBtn");

  openBtn?.addEventListener("click", () => {
    drawerOverlay?.classList.add("active");
    document.body.style.overflow = "hidden";
  });

  closeBtn?.addEventListener("click", () => {
    drawerOverlay?.classList.remove("active");
    document.body.style.overflow = "";
  });

  drawerOverlay?.addEventListener("click", (e) => {
    if (e.target === drawerOverlay) {
      drawerOverlay.classList.remove("active");
      document.body.style.overflow = "";
    }
  });
}
