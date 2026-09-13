// 1. Словарь переводов
const translations = {
  ru: {
    navCollection: "Коллекция",
    navMenu: "Вкусы",
    navAbout: "О бренде",
    headerMenu: "Меню",
    heroEyebrow: "SAINT-TROPEZ · SINCE 1988",
    heroTitle: "Солнечный вкус,<br><em>созданный для наслаждения.</em>",
    heroIntro: "BARBARAC — коллекция премиального мороженого и сорбетов. Чистый вкус, красивый ритуал, одно идеальное мгновение.",
    heroButton: "Открыть меню",
    artCaption: "la dolce vita<br><em>в каждой ложке</em>",
    collectionEyebrow: "ПРЕМИАЛЬНАЯ КОЛЛЕКЦИЯ",
    statementTitle: "Мягкая текстура.<br>Яркий характер.<br><em>Без лишнего.</em>",
    statementText: "Классические рецепты, авторские сочетания и освежающие сорбеты — для того самого вкуса, к которому хочется возвращаться.",
    menuEyebrow: "МЕНЮ",
    menuTitle: "Выберите своё<br><em>солнце.</em>",
    oneScoop: "1 шарик",
    fromPrice: "от 850 ֏",
    classics: "Классика",
    classicsNote: "Доведённая до совершенства.",
    signature: "Фирменные",
    signatureNote: "Неожиданные сочетания.",
    sorbets: "Сорбеты",
    sorbetsNote: "Чистая фруктовая свежесть.",
    fVanilla: "Ваниль", fChocolate: "Шоколад", fCoffee: "Кофе", fPistachio: "Фисташка",
    fDubai: "Дубайский шоколад", fSaltedCaramel: "Солёная карамель", fTiramisu: "Тирамису", fSpeculoos: "Спекулос",
    fLemon: "Лимон", fRaspberry: "Малина", fMango: "Манго", fPassion: "Маракуйя",
    heritageEyebrow: "С 1988 ГОДА",
    heritageTitle: "Немного<br><em>солнца</em><br>каждый день.",
    heritageText: "BARBARAC вдохновлён Средиземноморьем: долгими летними вечерами, красивой простотой и радостью, которую не нужно объяснять.",
    backTop: "Наверх ↑"
  },
  en: {
    navCollection: "Collection",
    navMenu: "Flavors",
    navAbout: "Heritage",
    headerMenu: "Menu",
    heroEyebrow: "SAINT-TROPEZ · SINCE 1988",
    heroTitle: "A sun-drenched taste,<br><em>crafted for indulgence.</em>",
    heroIntro: "BARBARAC — a collection of premium ice cream and sorbets. Pure taste, a beautiful ritual, one perfect moment.",
    heroButton: "View Menu",
    artCaption: "la dolce vita<br><em>in every spoonful</em>",
    collectionEyebrow: "PREMIUM COLLECTION",
    statementTitle: "Soft texture.<br>Bold character.<br><em>Nothing extra.</em>",
    statementText: "Classic recipes, signature combinations, and refreshing sorbets — for that very taste you want to return to.",
    menuEyebrow: "MENU",
    menuTitle: "Choose your<br><em>sun.</em>",
    oneScoop: "1 scoop",
    fromPrice: "from 850 ֏",
    classics: "Classics",
    classicsNote: "Perfected over time.",
    signature: "Signature",
    signatureNote: "Unexpected combinations.",
    sorbets: "Sorbets",
    sorbetsNote: "Pure fruit freshness.",
    fVanilla: "Vanilla", fChocolate: "Chocolate", fCoffee: "Coffee", fPistachio: "Pistachio",
    fDubai: "Dubai Chocolate", fSaltedCaramel: "Salted Caramel", fTiramisu: "Tiramisu", fSpeculoos: "Speculoos",
    fLemon: "Lemon", fRaspberry: "Raspberry", fMango: "Mango", fPassion: "Passion Fruit",
    heritageEyebrow: "SINCE 1988",
    heritageTitle: "A little bit<br><em>of sun</em><br>every day.",
    heritageText: "BARBARAC is inspired by the Mediterranean: long summer evenings, beautiful simplicity, and a joy that needs no explanation.",
    backTop: "Back to top ↑"
  },
  hy: {
    navCollection: "Հավաքածու",
    navMenu: "Համեր",
    navAbout: "Մեր մասին",
    headerMenu: "Ընտրացանկ",
    heroEyebrow: "ՍԵՆ-ՏՐՈՊԵ · 1988 ԹՎԱԿԱՆԻՑ",
    heroTitle: "Արևոտ համ,<br><em>ստեղծված հաճույքի համար:</em>",
    heroIntro: "BARBARAC — պրեմիում պաղպաղակի և շերբետի հավաքածու: Մաքուր համ, գեղեցիկ ծես, մեկ կատարյալ վայրկյան:",
    heroButton: "Դիտել ընտրացանկը",
    artCaption: "la dolce vita<br><em>յուրաքանչյուր գդալում</em>",
    collectionEyebrow: "ՊՐԵՄԻՈՒՄ ՀԱՎԱՔԱԾՈՒ",
    statementTitle: "Փափուկ հյուսվածք:<br>Պայծառ բնավորություն:<br><em>Առանց ավելորդի:</em>",
    statementText: "Դասական բաղադրատոմսեր, հեղինակային համադրություններ և զովացնող շերբետներ՝ այն համի համար, որին ուզում ես վերադառնալ:",
    menuEyebrow: "ԸՆՏՐԱՑԱՆԿ",
    menuTitle: "Ընտրիր քո<br><em>արևը:</em>",
    oneScoop: "1 գնդիկ",
    fromPrice: "850 ֏-ից",
    classics: "Դասական",
    classicsNote: "Հասցված է կատարելության:",
    signature: "Ֆիրմային",
    signatureNote: "Անսպասելի համադրություններ:",
    sorbets: "Շերբետներ",
    sorbetsNote: "Մաքուր մրգային թարմություն:",
    fVanilla: "Վանիլ", fChocolate: "Շոկոլադ", fCoffee: "Սուրճ", fPistachio: "Պիստակ",
    fDubai: "Դուբայի շոկոլադ", fSaltedCaramel: "Աղի կարամել", fTiramisu: "Տիրամիսու", fSpeculoos: "Սպեկուլոս",
    fLemon: "Կիտրոն", fRaspberry: "Ազնվամորի", fMango: "Մանգո", fPassion: "Մարակույա",
    heritageEyebrow: "1988 ԹՎԱԿԱՆԻՑ",
    heritageTitle: "Մի փոքր<br><em>արև</em><br>ամեն օր:",
    heritageText: "BARBARAC-ը ոգեշնչված է Միջերկրական ծովով՝ երկար ամառային երեկոներով, գեղեցիկ պարզությամբ և ուրախությամբ, որը բացատրության կարիք չունի:",
    backTop: "Դեպի վեր ↑"
  }
};

// 2. Логика переключения языка
const langButtons = document.querySelectorAll('.language-switcher button');

langButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    // Убираем активный класс у всех
    langButtons.forEach(b => b.classList.remove('active'));
    // Добавляем текущему
    btn.classList.add('active');
    
    const lang = btn.getAttribute('data-lang');
    document.documentElement.lang = lang;
    
    // Обновляем тексты
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang][key]) {
        el.textContent = translations[lang][key];
      }
    });
    
    // Обновляем HTML (с тегами <br>, <em>)
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.getAttribute('data-i18n-html');
      if (translations[lang][key]) {
        el.innerHTML = translations[lang][key];
      }
    });
  });
});

// 3. Анимация появления при скролле (Intersection Observer)
const observerOptions = {
  threshold: 0.15,
  rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); // Анимируем только один раз
    }
  });
}, observerOptions);

document.querySelectorAll('.fade-up').forEach(el => {
  observer.observe(el);
});
