// Prix par offre et par nombre d'écrans
const prixOffres = {
  basique: { 1: '9,99', 2: '19,99', 3: '29,99', 4: '39,99' },
  premium: { 1: '19,99', 2: '39,99', 3: '59,99', 4: '79,99' },
  ultra:   { 1: '29,99', 2: '59,99', 3: '79,99', 4: '99,99' }
};

const durees = { 
  basique: '/3 mois', 
  premium: '/6 mois', 
  ultra: '/12 mois' 
};

const pages = { 
  basique: 'offre-3mois.html', 
  premium: 'offre-6mois.html', 
  ultra: 'offre-12mois.html' 
};

// Mise à jour des prix
function updatePrix(offerKey, selectId, priceSpan, priceSmall) {
  const select = document.getElementById(selectId);
  function maj() {
    const val = select.value;
    priceSpan.textContent = prixOffres[offerKey][val] + ' €';
    priceSmall.textContent = durees[offerKey];
  }
  select.addEventListener('change', maj);
  maj(); // Initialisation au chargement
}

// Configuration des boutons
function setupBtn(offerKey, selectId, btnId) {
  const select = document.getElementById(selectId);
  const btn = document.getElementById(btnId);
  btn.addEventListener('click', function(e) {
    e.preventDefault();
    const val = select.value;
    window.location.href = pages[offerKey] + '?ecrans=' + val;
  });
}

// Initialisation au chargement
document.addEventListener('DOMContentLoaded', function() {
  // Basique
  updatePrix('basique', 'screens-basic',
    document.querySelector('.spin1 .offer-price-inner span'),
    document.querySelector('.spin1 .offer-price-inner small'));
  setupBtn('basique', 'screens-basic', 'btn-basic');

  // Premium
  updatePrix('premium', 'screens-premium',
    document.querySelector('.spin2 .offer-price-inner span'),
    document.querySelector('.spin2 .offer-price-inner small'));
  setupBtn('premium', 'screens-premium', 'btn-premium');

  // Ultra
  updatePrix('ultra', 'screens-ultra',
    document.querySelector('.spin3 .offer-price-inner span'),
    document.querySelector('.spin3 .offer-price-inner small'));
  setupBtn('ultra', 'screens-ultra', 'btn-ultra');
}); 