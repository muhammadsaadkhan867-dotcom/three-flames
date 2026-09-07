const featured = [
  {name:'Mutton Seekh Tikka',category:'Grill',price:'Rs. 890',description:'Hand-minced mutton, smoked over charcoal, finished with warm spices.',image:'images/mutton-seekh.jpg'},
  {name:'Malai Chicken Boti',category:'Grill',price:'Rs. 520',description:'Tender chicken in a silky cream marinade with a gentle fire kiss.',image:'images/malai-boti.jpg'},
  {name:'Chicken Sajji',category:'Signature',price:'Rs. 950',description:'Slow-roasted chicken, fragrant rice, and a crisp, golden finish.',image:'images/chicken-sajji.jpg'},
  {name:'Kabuli Pulao',category:'Rice',price:'Rs. 590',description:'Long-grain rice, tender mutton, caramelized carrots, and raisins.',image:'images/kabuli-pulao.jpg'}
];
const compact = [['Classic Seekh Kebab','Rs. 490','Grill'],['Seekh Mutton Boti','Rs. 890','Signature'],['Three Flames Platter for Two','Rs. 1,000','Signature'],['Chapli Kebab','Rs. 430','Grill']];
const groups = [
 ['karahi','Karahi Items','Handi & wok',[['Mutton Karahi (1kg Full)','Rs. 2,900'],['Mutton Karahi (Half)','Rs. 1,500'],['TSP White Handi','Rs. 1,199'],['Chicken Badami Handi','Rs. 1,250'],['Lahori Chicken Handi','Rs. 1,250'],['Chicken Achari Handi','Rs. 1,250'],['Chicken Karahi Half / Full','Rs. 799 / 1,399'],['Shahi Karahi Half / Full','Rs. 799 / 1,550'],['Chicken Jalfrezi','Rs. 650'],['Chicken Masala','Rs. 799'],['Chicken Qeema','Rs. 699'],['Chicken Ginger','Rs. 699'],['Mughlai Mix Vegetable','Rs. 350'],['Shahi Dal Mash','Rs. 350'],['Dal Mash','Rs. 350'],['Mix Vegetable','Rs. 300'],['Chicken Seekh Kabab Karahi','Rs. 799'],['Beef Seekh Kabab Karahi','Rs. 799'],['Beef Tikka Karahi','Rs. 850']]],
 ['bbq','BBQ Items','From the charcoal',[['Chicken Angara','Rs. 1,250'],['Chicken Tikka','Rs. 299'],['Chicken Shawaya','Rs. 1,300'],['Chicken Malai Boti (4 pcs)','Rs. 400'],['Chicken Boti (4 pcs)','Rs. 350'],['Reshmi Kabab (4 pcs)','Rs. 599'],['Beef Seekh Kabab (4 pcs)','Rs. 599'],['Afghani Tikka (4 pcs)','Rs. 599'],['Beef Tikka (4 pcs)','Rs. 299'],['Batair (1 pc)','Rs. 200'],['Green Boti (4 pcs)','Rs. 300']]],
 ['fish','Fish Items','Fresh grill',[['Grill Fish Silver (per kg)','Rs. 1,000'],['Grill Raa Fish (per kg)','Rs. 1,000']]],
 ['shawarma','Shawarma & Rolls','Street-fire favourites',[['Chicken Shawarma Sada','Rs. 150'],['Turkish Shawarma','Rs. 250'],['Chicken Cheese Shawarma','Rs. 200'],['Zinger Shawarma','Rs. 250'],['BBQ Shawarma','Rs. 350'],['BBQ Grill Shawarma','Rs. 350'],['Chicken Paratha Roll','Rs. 200'],['Zinger Paratha Roll','Rs. 250'],['BBQ Paratha Roll','Rs. 230'],['Zinger Wrap','Rs. 300']]],
 ['nan','Nan','Fresh baked',[['Roghani Nan','Rs. 50'],['Nan','Rs. 30']]],
 ['soup','Soup','Warm bowl',[['Chicken Soup Bowl','Rs. 100']]],
 ['lassi','Lassi & Margarita','Cooling pours',[['Lassi','Rs. 150'],['Sweet Lassi','Rs. 200'],['Margarita','Rs. 150']]],
 ['tea','Tea','Any hour',[['Karak Chai','Rs. 120'],['Tandoori / Matka Chai','Rs. 120'],['Green Tea','Rs. 50']]],
 ['drinks','Cold Drinks & Sides','Table essentials',[['Mineral Water (S)','Rs. 60'],['Mineral Water (L)','Rs. 120'],['Can','Rs. 130'],['Salad','Rs. 50'],['Raita','Rs. 50'],['Tomato Chatni','Rs. 50']]],
 ['pulao','Kabali Pulao','Signature rice',[['Kabali Pulao (2 Person)','Rs. 800'],['Kabali Pulao (1 Person)','Rs. 350']]],
 ['platters','Platters','Built for sharing',[['2 Person Platter','Rs. 1,600','Kabali Pulao, 2 Seekh Kabab, 2 pieces Malai Boti, 2 pieces Chicken Boti, 2 pieces Fish Tikka, tomato chatni, salad.'],['4 Person Platter','Rs. 2,850','Kabali Pulao, 4 Seekh Kabab, 4 pieces Malai Boti, 4 pieces Chicken Boti, 4 pieces Fish Tikka, 4 pieces Green Boti, 4 pieces Beef Tikka, tomato chatni, salad.'],['Full Platter','Rs. 3,950','Kabali Pulao, 6 Seekh Kabab, 6 pieces Malai Boti, 6 pieces Chicken Boti, 6 pieces Fish Tikka, 6 pieces Green Boti, 6 pieces Beef Tikka, 1 litre cold drink, tomato chatni, salad.']]]
];
const $ = s => document.querySelector(s);
const featuredFilters = $('#featuredFilters');
const featuredGrid = $('#featuredGrid');
const categories = ['All','Grill','Signature','Rice'];
function renderFeatured(category='All'){
  featuredFilters.innerHTML = categories.map(c=>`<button class="${c===category?'active':''}" data-category="${c}">${c}</button>`).join('');
  featuredGrid.innerHTML = featured.filter(i=>category==='All'||i.category===category).map((i,n)=>`<article class="dish-card" data-tilt><div class="dish-image"><img src="${i.image}" alt="${i.name}"><span>${i.category}</span></div><div class="dish-copy"><div><h3>${i.name}</h3><p>${i.description}</p></div><b>${i.price}</b></div></article>`).join('');
  document.querySelectorAll('[data-tilt]').forEach(card=>{card.addEventListener('pointermove',e=>{const r=card.getBoundingClientRect();card.style.transform=`perspective(1000px) rotateX(${((e.clientY-r.top)/r.height-.5)*-5}deg) rotateY(${((e.clientX-r.left)/r.width-.5)*6}deg)`});card.addEventListener('pointerleave',()=>card.style.transform='')});
}
featuredFilters.addEventListener('click', e=>{if(e.target.dataset.category) renderFeatured(e.target.dataset.category)});
$('#compactMenu').innerHTML = compact.map((i,n)=>`<div class="compact-item"><span class="compact-number">0${n+1}</span><b>${i[0]}</b><span class="compact-category">${i[2]}</span><strong>${i[1]}</strong><span>↗</span></div>`).join('');
const tabs = $('#menuTabs');
tabs.innerHTML = `<button class="active" data-group="all">All menu</button>` + groups.map(g=>`<button data-group="${g[0]}">${g[1]}</button>`).join('');
function renderGroups(active='all'){
  const visible = active==='all'?groups:groups.filter(g=>g[0]===active);
  $('#fullMenuGrid').innerHTML = visible.map(g=>`<article class="menu-group ${g[0]==='platters'?'menu-group--platter':''}"><div class="menu-group-head"><span>${g[2]}</span><span>✣</span></div><h3>${g[1]}</h3><div class="menu-group-lines">${g[3].map(i=>`<div class="menu-line"><div><b>${i[0]}</b>${i[2]?`<p>${i[2]}</p>`:''}</div><strong>${i[1]}</strong></div>`).join('')}</div><a href="tel:+923344226655" class="menu-group-order">Order this category ↗</a></article>`).join('');
}
tabs.addEventListener('click',e=>{if(!e.target.dataset.group)return;tabs.querySelectorAll('button').forEach(b=>b.classList.toggle('active',b===e.target));renderGroups(e.target.dataset.group)});
renderFeatured();renderGroups();
const nav = $('.site-nav'), mobile = $('.mobile-menu'), links = $('.nav-links');
window.addEventListener('scroll',()=>nav.classList.toggle('scrolled',window.scrollY>24),{passive:true});
mobile.addEventListener('click',()=>{const open=links.classList.toggle('open');mobile.setAttribute('aria-expanded',open)});
links.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{links.classList.remove('open');mobile.setAttribute('aria-expanded','false')}));
