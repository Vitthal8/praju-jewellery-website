/**
 * HANDCRAFTED JEWELLERY BY PRAJU — APP.JS
 * Handles: Products, Cart, Animations, Nav, Search, Reviews, WhatsApp checkout
 */

'use strict';

/* ═══════════════════════════════════════════════════════════════
   DATA — Products & Reviews
   ═══════════════════════════════════════════════════════════════ */
const PRODUCTS = [
  { id: 1, name: 'Pearl Cascade Earrings', category: 'earrings', price: 449, compare: 649, material: 'Gold-plated brass, freshwater pearls', emoji: '🤍', badge: 'bestseller', badgeType: '' },
  { id: 2, name: 'Twisted Hoop Set', category: 'earrings', price: 349, compare: 499, material: 'Anti-tarnish silver alloy', emoji: '⭕', badge: 'new', badgeType: 'new' },
  { id: 3, name: 'Boho Layered Necklace', category: 'necklace', price: 699, compare: 999, material: 'Gold-plated brass, semi-precious stones', emoji: '📿', badge: 'trending', badgeType: '' },
  { id: 4, name: 'Delicate Chain Bracelet', category: 'bracelet', price: 299, compare: 449, material: 'Sterling silver-tone, adjustable', emoji: '✨', badge: 'new', badgeType: 'new' },
  { id: 5, name: 'Oxidised Jhumka Earrings', category: 'earrings', price: 399, compare: 599, material: 'Oxidised brass with beadwork', emoji: '🌺', badge: '', badgeType: '' },
  { id: 6, name: 'Name Initial Necklace', category: 'custom', price: 599, compare: null, material: 'Gold / Silver — custom made', emoji: '💌', badge: 'custom', badgeType: '' },
  { id: 7, name: 'Kundan Choker Set', category: 'necklace', price: 1299, compare: 1799, material: 'Kundan stones, antique gold finish', emoji: '👑', badge: 'premium', badgeType: '' },
  { id: 8, name: 'Beaded Charm Bracelet', category: 'bracelet', price: 249, compare: 349, material: 'Semi-precious stone beads', emoji: '🔮', badge: 'new', badgeType: 'new' },
];

const REVIEWS = [
  { name: 'Sneha P.', city: 'Pune', rating: 5, text: 'Absolutely obsessed with my pearl earrings! They look exactly like the photo and the quality is insane for the price. Will definitely order again!', product: 'Pearl Cascade Earrings' },
  { name: 'Aishwarya R.', city: 'Mumbai', rating: 5, text: 'Got a custom name necklace as a birthday gift for my bestie — she literally cried! Praju is so talented and delivered in just 3 days. 10/10!', product: 'Custom Name Necklace' },
  { name: 'Priya K.', city: 'Nagpur', rating: 5, text: 'I've ordered from so many places but the finish on these jhumkas is unmatched. Super lightweight and didn't cause any irritation to my ears!', product: 'Oxidised Jhumkas' },
  { name: 'Riya M.', city: 'Nashik', rating: 5, text: 'The packaging was so aesthetic I didn't want to open it! The bracelet is delicate but sturdy. Already got 3 compliments today. Praju is queen!', product: 'Beaded Charm Bracelet' },
  { name: 'Tanvi S.', city: 'Kolhapur', rating: 5, text: 'Ordered the boho necklace and it's perfect for my indo-western outfits. The stones are gorgeous and it hasn't tarnished even after a month!', product: 'Boho Layered Necklace' },
  { name: 'Meghna D.', city: 'Aurangabad', rating: 5, text: 'Communication was so smooth on WhatsApp! Got my custom piece approved before she even made it. Super professional and the result is stunning!', product: 'Custom Earrings' },
];

const INSTA_POSTS = [
  { emoji: '💛', label: 'Shop Now' },
  { emoji: '✨', label: 'New Drop' },
  { emoji: '🌸', label: 'GRWM' },
  { emoji: '💍', label: 'Custom' },
  { emoji: '🤍', label: 'Pearls' },
  { emoji: '⭕', label: 'Hoops' },
  { emoji: '🌺', label: 'Ethnic' },
  { emoji: '📿', label: 'Layers' },
  { emoji: '👑', label: 'Premium' },
  { emoji: '🎁', label: 'Gifts' },
  { emoji: '💎', label: 'Stones' },
  { emoji: '🌿', label: 'Minimal' },
];

/* ═══════════════════════════════════════════════════════════════
   CART STATE
   ═══════════════════════════════════════════════════════════════ */
let cart = JSON.parse(localStorage.getItem('praju_cart') || '[]');
let activeFilter = 'all';

/* ═══════════════════════════════════════════════════════════════
   UTILITY
   ═══════════════════════════════════════════════════════════════ */
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];
const formatPrice = n => `₹${n.toLocaleString('en-IN')}`;

function showToast(msg) {
  const t = $('#toast');
  $('#toastMsg').textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2800);
}

function saveCart() {
  localStorage.setItem('praju_cart', JSON.stringify(cart));
}

/* ═══════════════════════════════════════════════════════════════
   LOADER
   ═══════════════════════════════════════════════════════════════ */
window.addEventListener('load', () => {
  setTimeout(() => {
    $('#loader').classList.add('hide');
  }, 1200);
});

/* ═══════════════════════════════════════════════════════════════
   CUSTOM CURSOR
   ═══════════════════════════════════════════════════════════════ */
const cursor = $('#cursor');
const follower = $('#cursorFollower');
let mouseX = 0, mouseY = 0, followerX = 0, followerY = 0;

if (window.matchMedia('(pointer: fine)').matches) {
  document.addEventListener('mousemove', e => {
    mouseX = e.clientX; mouseY = e.clientY;
    cursor.style.left = mouseX + 'px';
    cursor.style.top = mouseY + 'px';
  });

  (function animateFollower() {
    followerX += (mouseX - followerX) * 0.12;
    followerY += (mouseY - followerY) * 0.12;
    follower.style.left = followerX + 'px';
    follower.style.top = followerY + 'px';
    requestAnimationFrame(animateFollower);
  })();
}

/* ═══════════════════════════════════════════════════════════════
   NAVIGATION
   ═══════════════════════════════════════════════════════════════ */
const nav = $('#nav');
const burger = $('#burger');
const navLinks = $('#navLinks');

window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  navLinks.classList.toggle('open');
});

navLinks.addEventListener('click', e => {
  if (e.target.classList.contains('nav__link')) {
    burger.classList.remove('active');
    navLinks.classList.remove('open');
  }
});

/* ═══════════════════════════════════════════════════════════════
   SEARCH OVERLAY
   ═══════════════════════════════════════════════════════════════ */
const searchOverlay = $('#searchOverlay');
$('#searchToggle').addEventListener('click', () => {
  searchOverlay.classList.add('open');
  setTimeout(() => $('#searchInput').focus(), 300);
});
$('#searchClose').addEventListener('click', () => searchOverlay.classList.remove('open'));
searchOverlay.addEventListener('click', e => {
  if (e.target === searchOverlay) searchOverlay.classList.remove('open');
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') searchOverlay.classList.remove('open');
});

$('#searchInput').addEventListener('input', e => {
  const val = e.target.value.toLowerCase();
  if (val.length >= 2) {
    filterProductsByText(val);
    searchOverlay.classList.remove('open');
    document.querySelector('#collections').scrollIntoView({ behavior: 'smooth' });
  }
});

/* ═══════════════════════════════════════════════════════════════
   CART
   ═══════════════════════════════════════════════════════════════ */
const cartSidebar = $('#cartSidebar');
const cartOverlay = $('#cartOverlay');

function openCart() {
  cartSidebar.classList.add('open');
  cartOverlay.classList.add('open');
}

function closeCart() {
  cartSidebar.classList.remove('open');
  cartOverlay.classList.remove('open');
}

$('#cartToggle').addEventListener('click', openCart);
$('#cartClose').addEventListener('click', closeCart);
cartOverlay.addEventListener('click', closeCart);

function updateCartUI() {
  const count = cart.reduce((a, i) => a + i.qty, 0);
  const total = cart.reduce((a, i) => a + i.price * i.qty, 0);
  const countEl = $('#cartCount');

  countEl.textContent = count;
  countEl.classList.toggle('visible', count > 0);

  const itemsEl = $('#cartItems');
  const footer = $('#cartFooter');

  if (cart.length === 0) {
    itemsEl.innerHTML = `
      <div class="cart-empty">
        <span>🛒</span>
        <p>Your cart is empty</p>
        <a href="#collections" class="btn btn--outline" onclick="closeCart()">Browse Collection</a>
      </div>`;
    footer.style.display = 'none';
    return;
  }

  footer.style.display = 'block';
  $('#cartTotal').textContent = formatPrice(total);

  itemsEl.innerHTML = cart.map(item => `
    <div class="cart-item">
      <div class="cart-item__img">${item.emoji}</div>
      <div class="cart-item__info">
        <div class="cart-item__name">${item.name}</div>
        <div class="cart-item__price">${formatPrice(item.price)} × ${item.qty}</div>
        <a class="cart-item__remove" onclick="removeFromCart(${item.id})">Remove ✕</a>
      </div>
    </div>
  `).join('');

  // WhatsApp checkout message
  const msg = encodeURIComponent(
    `Hi Praju! 🛍️ I'd like to order:\n\n` +
    cart.map(i => `• ${i.name} × ${i.qty} = ${formatPrice(i.price * i.qty)}`).join('\n') +
    `\n\n*Total: ${formatPrice(total)}*\n\nPlease share payment details!`
  );
  $('#whatsappCheckout').href = `https://wa.me/919999999999?text=${msg}`;
}

function addToCart(id) {
  const product = PRODUCTS.find(p => p.id === id);
  if (!product) return;

  const existing = cart.find(i => i.id === id);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ id: product.id, name: product.name, price: product.price, emoji: product.emoji, qty: 1 });
  }

  saveCart();
  updateCartUI();
  showToast(`${product.name} added to cart ✦`);
  openCart();
}

window.removeFromCart = function(id) {
  cart = cart.filter(i => i.id !== id);
  saveCart();
  updateCartUI();
};

/* ═══════════════════════════════════════════════════════════════
   PRODUCTS
   ═══════════════════════════════════════════════════════════════ */
function renderProducts(products) {
  const grid = $('#productGrid');
  if (products.length === 0) {
    grid.innerHTML = '<p style="text-align:center;color:var(--muted);padding:3rem;grid-column:1/-1">No products found. Try a different filter.</p>';
    return;
  }

  grid.innerHTML = products.map((p, i) => `
    <div class="product-card" style="animation-delay:${i * 0.08}s">
      <div class="product-card__img-wrap">
        <div class="product-card__img-placeholder">${p.emoji}</div>
        ${p.badge ? `<span class="product-card__badge product-card__badge--${p.badgeType}">${p.badge}</span>` : ''}
        <div class="product-card__actions">
          <button class="product-card__action-btn" onclick="toggleWishlist(${p.id})" title="Add to Wishlist" id="wish-${p.id}">🤍</button>
          <button class="product-card__action-btn" onclick="shareProduct(${p.id})" title="Share">🔗</button>
        </div>
      </div>
      <div class="product-card__body">
        <p class="product-card__category">${p.category}</p>
        <h3 class="product-card__name">${p.name}</h3>
        <p class="product-card__material">${p.material}</p>
        <div class="product-card__footer">
          <div>
            <span class="product-card__price">${formatPrice(p.price)}</span>
            ${p.compare ? `<span class="product-card__compare">${formatPrice(p.compare)}</span>` : ''}
          </div>
          <button class="product-card__add" onclick="addToCart(${p.id})">Add +</button>
        </div>
      </div>
    </div>
  `).join('');
}

window.filterProducts = function(cat) {
  activeFilter = cat;
  $$('.filter-tab').forEach(t => {
    t.classList.toggle('filter-tab--active', t.dataset.filter === cat || (cat !== 'all' && t.dataset.filter === cat));
  });
  const filtered = cat === 'all' ? PRODUCTS : PRODUCTS.filter(p => p.category === cat);
  renderProducts(filtered);
  document.querySelector('#collections').scrollIntoView({ behavior: 'smooth' });
};

function filterProductsByText(text) {
  const filtered = PRODUCTS.filter(p =>
    p.name.toLowerCase().includes(text) ||
    p.category.toLowerCase().includes(text) ||
    p.material.toLowerCase().includes(text)
  );
  renderProducts(filtered);
}

$$('.filter-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    $$('.filter-tab').forEach(t => t.classList.remove('filter-tab--active'));
    tab.classList.add('filter-tab--active');
    const filter = tab.dataset.filter;
    activeFilter = filter;
    const filtered = filter === 'all' ? PRODUCTS : PRODUCTS.filter(p => p.category === filter);
    renderProducts(filtered);
  });
});

/* ═══════════════════════════════════════════════════════════════
   WISHLIST
   ═══════════════════════════════════════════════════════════════ */
let wishlist = JSON.parse(localStorage.getItem('praju_wishlist') || '[]');

window.toggleWishlist = function(id) {
  const btn = $(`#wish-${id}`);
  if (wishlist.includes(id)) {
    wishlist = wishlist.filter(i => i !== id);
    if (btn) btn.textContent = '🤍';
    showToast('Removed from wishlist');
  } else {
    wishlist.push(id);
    if (btn) btn.textContent = '❤️';
    showToast('Added to wishlist ♡');
  }
  localStorage.setItem('praju_wishlist', JSON.stringify(wishlist));
};

window.shareProduct = function(id) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;
  const text = `Check out ${p.name} at Handcrafted Jewellery by Praju! ${formatPrice(p.price)} 💛 ${window.location.href}`;
  if (navigator.share) {
    navigator.share({ title: p.name, text, url: window.location.href });
  } else {
    navigator.clipboard.writeText(text).then(() => showToast('Link copied to clipboard!'));
  }
};

/* ═══════════════════════════════════════════════════════════════
   REVIEWS CAROUSEL
   ═══════════════════════════════════════════════════════════════ */
function renderReviews() {
  const track = $('#reviewsTrack');
  const dotsEl = $('#reviewsDots');

  track.innerHTML = REVIEWS.map(r => `
    <div class="review-card">
      <div class="review-card__stars">${'★'.repeat(r.rating)}${'☆'.repeat(5 - r.rating)}</div>
      <p class="review-card__text">"${r.text}"</p>
      <div class="review-card__footer">
        <div class="review-card__avatar">${r.name[0]}</div>
        <div>
          <div class="review-card__name">${r.name}, ${r.city}</div>
          <div class="review-card__meta">Purchased: ${r.product}</div>
        </div>
      </div>
    </div>
  `).join('');

  dotsEl.innerHTML = REVIEWS.map((_, i) => `<button class="reviews__dot ${i === 0 ? 'active' : ''}" data-idx="${i}"></button>`).join('');

  $$('.reviews__dot').forEach(dot => {
    dot.addEventListener('click', () => {
      const idx = +dot.dataset.idx;
      const card = track.children[idx];
      card.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
      $$('.reviews__dot').forEach(d => d.classList.remove('active'));
      dot.classList.add('active');
    });
  });

  // Auto-update dots on scroll
  track.addEventListener('scroll', () => {
    const idx = Math.round(track.scrollLeft / 336);
    $$('.reviews__dot').forEach((d, i) => d.classList.toggle('active', i === idx));
  }, { passive: true });
}

/* ═══════════════════════════════════════════════════════════════
   INSTAGRAM GRID
   ═══════════════════════════════════════════════════════════════ */
function renderInstaGrid() {
  const grid = $('#instaGrid');
  grid.innerHTML = INSTA_POSTS.map(p => `
    <div class="insta__item">
      <div class="insta__item-inner">${p.emoji}</div>
      <div class="insta__item-overlay">${p.label}</div>
    </div>
  `).join('');

  $$('.insta__item').forEach(item => {
    item.addEventListener('click', () => {
      window.open('https://instagram.com/praju.jewellery', '_blank');
    });
  });
}

/* ═══════════════════════════════════════════════════════════════
   COUNTER ANIMATION
   ═══════════════════════════════════════════════════════════════ */
function animateCounter(el) {
  const target = parseInt(el.dataset.count);
  const duration = 1800;
  const step = target / (duration / 16);
  let current = 0;

  const timer = setInterval(() => {
    current += step;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    el.textContent = Math.floor(current);
  }, 16);
}

/* ═══════════════════════════════════════════════════════════════
   SCROLL REVEAL (IntersectionObserver)
   ═══════════════════════════════════════════════════════════════ */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounter(entry.target);
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

function initReveal() {
  $$('.reveal-up, .reveal-left, .reveal-right').forEach(el => revealObserver.observe(el));
  $$('[data-count]').forEach(el => counterObserver.observe(el));
}

/* ═══════════════════════════════════════════════════════════════
   BUDGET SLIDER
   ═══════════════════════════════════════════════════════════════ */
const budgetSlider = $('#budgetSlider');
const budgetVal = $('#budgetVal');
if (budgetSlider) {
  budgetSlider.addEventListener('input', e => {
    budgetVal.textContent = parseInt(e.target.value).toLocaleString('en-IN');
  });
}

/* ═══════════════════════════════════════════════════════════════
   CUSTOM FORM → WHATSAPP
   ═══════════════════════════════════════════════════════════════ */
const customForm = $('#customForm');
if (customForm) {
  customForm.addEventListener('submit', e => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(customForm));

    if (!data.name || !data.phone) {
      showToast('Please fill in your name and phone number');
      return;
    }

    const msg = encodeURIComponent(
      `Hi Praju! 💛 I'd like a custom order!\n\n` +
      `*Name:* ${data.name}\n` +
      `*Phone:* ${data.phone}\n` +
      `*Type:* ${data.type || 'Not specified'}\n` +
      `*Idea:* ${data.idea || 'Will share on chat'}\n` +
      `*Budget:* Up to ₹${parseInt(data.budget).toLocaleString('en-IN')}`
    );

    window.open(`https://wa.me/919999999999?text=${msg}`, '_blank');
    showToast('Opening WhatsApp with your details ✦');
    customForm.reset();
    if (budgetVal) budgetVal.textContent = '999';
  });
}

/* ═══════════════════════════════════════════════════════════════
   SMOOTH SCROLL (nav links)
   ═══════════════════════════════════════════════════════════════ */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

/* ═══════════════════════════════════════════════════════════════
   INIT
   ═══════════════════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  renderProducts(PRODUCTS);
  renderReviews();
  renderInstaGrid();
  updateCartUI();

  // Restore wishlist state
  wishlist.forEach(id => {
    const btn = $(`#wish-${id}`);
    if (btn) btn.textContent = '❤️';
  });

  // Start reveal observations after a tick
  setTimeout(initReveal, 100);
});
  
