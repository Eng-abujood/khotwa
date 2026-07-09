// 1. نظام محاكاة شاشة تسجيل الدخول 
document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const loginScreen = document.getElementById('login-screen');
    loginScreen.style.transition = 'opacity 0.4s ease';
    loginScreen.style.opacity = '0';
    setTimeout(() => {
        loginScreen.classList.add('hidden');
        const mainApp = document.getElementById('main-app');
        mainApp.classList.remove('hidden');
        mainApp.style.animation = 'fadeIn 0.6s ease-in-out';
    }, 400);
});

// 2. كائن الترجمات الدقيقة لكلا اللغتين (تبديل فوري بالملي)
let currentLang = 'ar';

const translations = {
    ar: {
        dir: 'rtl',
        btnLang: '<i class="fa-solid fa-globe"></i> English',
        devBy: 'تم التطوير بواسطة:',
        editorTitle: '<i class="fa-solid fa-pen-to-square"></i> أدخل بياناتك بدقة',
        lblUpload: '<i class="fa-solid fa-camera"></i> رفع صورة شخصية',
        personalHeader: '<i class="fa-solid fa-user"></i> المعلومات الشخصية',
        expHeader: '<i class="fa-solid fa-briefcase"></i> الخبرات المهنية',
        eduHeader: '<i class="fa-solid fa-graduation-cap"></i> التعليم والتخصص',
        skillsHeader: '<i class="fa-solid fa-code"></i> المهارات',
        langHeader: '<i class="fa-solid fa-language"></i> اللغات',
        btnAddExp: '<i class="fa-solid fa-plus"></i> إضافة خبرة',
        btnAddEdu: '<i class="fa-solid fa-plus"></i> إضافة تعليم',
        btnAddSkill: '<i class="fa-solid fa-plus"></i> إضافة مهارة',
        btnAddLang: '<i class="fa-solid fa-plus"></i> إضافة لغة',
        btnPrint: '<i class="fa-solid fa-print"></i> طباعة وتحميل PDF',
        
        cvContactTitle: '<i class="fa-solid fa-address-card"></i> الاتصال والتفاصيل',
        cvAgeLabel: '<b>العمر:</b> ',
        cvExpTitle: '<i class="fa-solid fa-briefcase"></i> الخبرة المهنية',
        cvEduTitle: '<i class="fa-solid fa-graduation-cap"></i> التعليم والتخصص',
        cvSkillsTitle: '<i class="fa-solid fa-star"></i> المهارات',
        cvLangTitle: '<i class="fa-solid fa-globe"></i> اللغات',
        
        pName: 'الاسم الكامل', pTitle: 'المسمى الوظيفي (مثلا: مهندس برمجيات)', pEmail: 'البريد الإلكتروني',
        pPhone: 'رقم الهاتف', pLocation: 'المدينة، الدولة', pAge: 'العمر', pSummary: 'نبذة تعريفية مختصرة عنك...',
        pCompany: 'الشركة / المؤسسة', pJobTitle: 'المسمى الوظيفي', pDuration: 'الفترة الزمنية (مثال: 2024 - الحالي)', pJobDesc: 'الوصف المقتضب للوظيفة',
        pUni: 'الجامعة / المدرسة', pDegree: 'التخصص / الدرجة العلمية', pGradYear: 'سنة التخرج', pSkillItem: 'المهارة (مثال: JavaScript)', pLangItem: 'اللغة والمستوى (مثال: العربية - لغة أم)',
        btnDelete: 'حذف'
    },
    en: {
        dir: 'ltr',
        btnLang: '<i class="fa-solid fa-globe"></i> العربية',
        devBy: 'Developed by:',
        editorTitle: '<i class="fa-solid fa-pen-to-square"></i> Enter your data accurately',
        lblUpload: '<i class="fa-solid fa-camera"></i> Upload Photo',
        personalHeader: '<i class="fa-solid fa-user"></i> Personal Information',
        expHeader: '<i class="fa-solid fa-briefcase"></i> Professional Experience',
        eduHeader: '<i class="fa-solid fa-graduation-cap"></i> Education & Specialization',
        skillsHeader: '<i class="fa-solid fa-code"></i> Skills',
        langHeader: '<i class="fa-solid fa-language"></i> Languages',
        btnAddExp: '<i class="fa-solid fa-plus"></i> Add Experience',
        btnAddEdu: '<i class="fa-solid fa-plus"></i> Add Education',
        btnAddSkill: '<i class="fa-solid fa-plus"></i> Add Skill',
        btnAddLang: '<i class="fa-solid fa-plus"></i> Add Language',
        btnPrint: '<i class="fa-solid fa-print"></i> Print & Download PDF',
        
        cvContactTitle: '<i class="fa-solid fa-address-card"></i> Contact & Details',
        cvAgeLabel: '<b>Age:</b> ',
        cvExpTitle: '<i class="fa-solid fa-briefcase"></i> Professional Experience',
        cvEduTitle: '<i class="fa-solid fa-graduation-cap"></i> Education & Specialization',
        cvSkillsTitle: '<i class="fa-solid fa-star"></i> Skills',
        cvLangTitle: '<i class="fa-solid fa-globe"></i> Languages',
        
        pName: 'Full Name', pTitle: 'Job Title (e.g., Software Engineer)', pEmail: 'Email Address',
        pPhone: 'Phone Number', pLocation: 'City, Country', pAge: 'Age', pSummary: 'Brief professional summary...',
        pCompany: 'Company / Institution', pJobTitle: 'Job Title', pDuration: 'Time Period (e.g., 2024 - Present)', pJobDesc: 'Short job description',
        pUni: 'University / School', pDegree: 'Specialization / Degree', pGradYear: 'Graduation Year', pSkillItem: 'Skill (e.g., JavaScript)', pLangItem: 'Language & Level (e.g., English - Fluent)',
        btnDelete: 'Delete'
    }
};

// تابع تبديل اللغات الرئيسي
function toggleLanguage() {
    currentLang = (currentLang === 'ar') ? 'en' : 'ar';
    const t = translations[currentLang];
    
    // قلب اتجاه التطبيق والـ DOM الأساسي
    const body = document.body;
    const mainApp = document.getElementById('main-app');
    
    if(currentLang === 'en') {
        body.classList.add('ltr-mode');
        mainApp.dir = 'ltr';
    } else {
        body.classList.remove('ltr-mode');
        mainApp.dir = 'rtl';
    }
    
    // تحديث العناوين والأزرار الثابتة
    document.getElementById('lang-toggle-btn').innerHTML = t.btnLang;
    document.querySelector('.developer-info span strong').previousSibling.textContent = t.devBy + " ";
    document.getElementById('editor-main-title').innerHTML = t.editorTitle;
    document.getElementById('lbl-upload').innerHTML = t.lblUpload;
    
    document.querySelector('#block-personal h3').innerHTML = t.personalHeader;
    document.querySelector('#block-experience h3').innerHTML = t.expHeader;
    document.querySelector('#block-education h3').innerHTML = t.eduHeader;
    document.querySelector('#block-skills h3').innerHTML = t.skillsHeader;
    document.querySelector('#block-languages h3').innerHTML = t.langHeader;
    
    const addButtons = document.querySelectorAll('.btn-add');
    addButtons[0].innerHTML = t.btnAddExp;
    addButtons[1].innerHTML = t.btnAddEdu;
    addButtons[2].innerHTML = t.btnAddSkill;
    addButtons[3].innerHTML = t.btnAddLang;
    
    document.getElementById('btn-print-cv').innerHTML = t.btnPrint;
    
    // تحديث عناوين المعاينة للـ CV
    document.getElementById('cv-title-contact').innerHTML = t.cvContactTitle;
    document.getElementById('cv-title-skills').innerHTML = t.cvSkillsTitle;
    document.getElementById('cv-title-langs').innerHTML = t.cvLangTitle;
    document.getElementById('cv-title-exp').innerHTML = t.cvExpTitle;
    document.getElementById('cv-title-edu').innerHTML = t.cvEduTitle;
    
    // تحديث الـ Placeholders للحقول الأساسية
    document.getElementById('in-name').placeholder = t.pName;
    document.getElementById('in-title').placeholder = t.pTitle;
    document.getElementById('in-email').placeholder = t.pEmail;
    document.getElementById('in-phone').placeholder = t.pPhone;
    document.getElementById('in-location').placeholder = t.pLocation;
    document.getElementById('in-age').placeholder = t.pAge;
    document.getElementById('in-summary').placeholder = t.pSummary;
    
    // تحديث العمر والعناصر التابعة فوراً
    const ageVal = document.getElementById('in-age').value;
    document.getElementById('view-age-box').innerHTML = t.cvAgeLabel + `<span>${ageVal || '-'}</span>`;
    
    // قلب وتحديث المدخلات الديناميكية النشطة
    updatePlaceholdersForDynamicRows();
    updateDynamicLists();
}

// تحديث الـ Placeholders للصفوف التي أنشأها المستخدم ديناميكياً
function updatePlaceholdersForDynamicRows() {
    const t = translations[currentLang];
    
    document.querySelectorAll('#experience-list .dynamic-row').forEach(row => {
        const inputs = row.querySelectorAll('input');
        if(inputs.length) {
            inputs[0].placeholder = t.pCompany; inputs[1].placeholder = t.pJobTitle;
            inputs[2].placeholder = t.pDuration; inputs[3].placeholder = t.pJobDesc;
            row.querySelector('.btn-delete').innerText = t.btnDelete;
        }
    });
    
    document.querySelectorAll('#education-list .dynamic-row').forEach(row => {
        const inputs = row.querySelectorAll('input');
        if(inputs.length) {
            inputs[0].placeholder = t.pUni; inputs[1].placeholder = t.pDegree; inputs[2].placeholder = t.pGradYear;
            row.querySelector('.btn-delete').innerText = t.btnDelete;
        }
    });
    
    document.querySelectorAll('#skills-list .dynamic-row').forEach(row => {
        const input = row.querySelector('input');
        if(input) input.placeholder = t.pSkillItem;
        row.querySelector('.btn-delete').innerText = t.btnDelete;
    });
    
    document.querySelectorAll('#languages-list .dynamic-row').forEach(row => {
        const input = row.querySelector('input');
        if(input) input.placeholder = t.pLangItem;
        row.querySelector('.btn-delete').innerText = t.btnDelete;
    });
}

// 3. الربط الفوري اللحظي للمعلومات الأساسية
const bindings = [
    { input: 'in-name', output: 'view-name' },
    { input: 'in-title', output: 'view-title' },
    { input: 'in-email', output: 'view-email' },
    { input: 'in-phone', output: 'view-phone' },
    { input: 'in-location', output: 'view-location' },
    { input: 'in-summary', output: 'view-summary' }
];

bindings.forEach(b => {
    document.getElementById(b.input).addEventListener('input', (e) => {
        document.getElementById(b.output).innerText = e.target.value || "...";
    });
});

document.getElementById('in-age').addEventListener('input', (e) => {
    const t = translations[currentLang];
    document.getElementById('view-age-box').innerHTML = t.cvAgeLabel + `<span>${e.target.value || '-'}</span>`;
});

// 4. معالجة وحقن رفع الصورة الشخصية فوريًا
document.getElementById('image-input').addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(event) {
            document.getElementById('view-photo').src = event.target.result;
        };
        reader.readAsDataURL(file);
    }
});

// 5. محرك بناء الحقول الديناميكية المتوافقة مع اتجاه اللغة الحالي
function addExperienceField() {
    const container = document.getElementById('experience-list');
    const id = Date.now();
    const row = document.createElement('div');
    row.className = 'dynamic-row';
    row.id = `exp-${id}`;
    row.innerHTML = `
        <div class="grid-2"><input type="text"><input type="text"></div>
        <div class="grid-2"><input type="text"><input type="text"></div>
        <button type="button" class="btn-secondary btn-delete" style="color: #ef4444;" onclick="document.getElementById('exp-${id}').remove(); updateDynamicLists();">حذف</button>
    `;
    container.appendChild(row);
    updatePlaceholdersForDynamicRows();
}

function addEducationField() {
    const container = document.getElementById('education-list');
    const id = Date.now();
    const row = document.createElement('div');
    row.className = 'dynamic-row';
    row.id = `edu-${id}`;
    row.innerHTML = `
        <div class="grid-2"><input type="text"><input type="text"></div>
        <input type="text">
        <button type="button" class="btn-secondary btn-delete" style="color: #ef4444;" onclick="document.getElementById('edu-${id}').remove(); updateDynamicLists();">حذف</button>
    `;
    container.appendChild(row);
    updatePlaceholdersForDynamicRows();
}

function addSkillField() {
    const container = document.getElementById('skills-list');
    const id = Date.now();
    const row = document.createElement('div');
    row.className = 'dynamic-row';
    row.id = `skill-${id}`;
    row.innerHTML = `
        <input type="text">
        <button type="button" class="btn-secondary btn-delete" style="color: #ef4444; margin-top:5px;" onclick="document.getElementById('skill-${id}').remove(); updateDynamicLists();">حذف</button>
    `;
    container.appendChild(row);
    updatePlaceholdersForDynamicRows();
}

function addLanguageField() {
    const container = document.getElementById('languages-list');
    const id = Date.now();
    const row = document.createElement('div');
    row.className = 'dynamic-row';
    row.id = `lang-${id}`;
    row.innerHTML = `
        <input type="text">
        <button type="button" class="btn-secondary btn-delete" style="color: #ef4444; margin-top:5px;" onclick="document.getElementById('lang-${id}').remove(); updateDynamicLists();">حذف</button>
    `;
    container.appendChild(row);
    updatePlaceholdersForDynamicRows();
}

// استماع فوري لأي مدخل ديناميكي لتحديث المعاينة في نفس اللحظة
document.getElementById('experience-list').addEventListener('input', updateDynamicLists);
document.getElementById('education-list').addEventListener('input', updateDynamicLists);
document.getElementById('skills-list').addEventListener('input', updateDynamicLists);
document.getElementById('languages-list').addEventListener('input', updateDynamicLists);

// 6. دالة استخراج البيانات وحقنها في الـ CV الحقيقي بالملي
function updateDynamicLists() {
    // تحديث قسم الخبرات
    const expRows = document.querySelectorAll('#experience-list .dynamic-row');
    const expView = document.getElementById('view-experience');
    expView.innerHTML = '';
    expRows.forEach(row => {
        const inputs = row.querySelectorAll('input');
        if(inputs.length && (inputs[0].value || inputs[1].value)) {
            expView.innerHTML += `
                <div class="item-render">
                    <h5>${inputs[1].value || ''} - ${inputs[0].value || ''}</h5>
                    <span>${inputs[2].value || ''}</span>
                    <p>${inputs[3].value || ''}</p>
                </div>
            `;
        }
    });

    // تحديث قسم التعليم
    const eduRows = document.querySelectorAll('#education-list .dynamic-row');
    const eduView = document.getElementById('view-education');
    eduView.innerHTML = '';
    eduRows.forEach(row => {
        const inputs = row.querySelectorAll('input');
        if(inputs.length && (inputs[0].value || inputs[1].value)) {
            eduView.innerHTML += `
                <div class="item-render">
                    <h5>${inputs[1].value || ''}</h5>
                    <p>${inputs[0].value || ''} | ${inputs[2].value || ''}</p>
                </div>
            `;
        }
    });

    // تحديث قسم المهارات
    const skillRows = document.querySelectorAll('#skills-list .dynamic-row');
    const skillView = document.getElementById('view-skills');
    skillView.innerHTML = '';
    skillRows.forEach(row => {
        const input = row.querySelector('input');
        if(input && input.value) {
            skillView.innerHTML += `<li>${input.value}</li>`;
        }
    });

    // تحديث قسم اللغات
    const langRows = document.querySelectorAll('#languages-list .dynamic-row');
    const langView = document.getElementById('view-languages');
    langView.innerHTML = '';
    langRows.forEach(row => {
        const input = row.querySelector('input');
        if(input && input.value) {
            langView.innerHTML += `<li>${input.value}</li>`;
        }
    });
}

// حقن الحقول التوجيهية عند الإقلاع الأول للمنصة
window.onload = function() {
    addExperienceField();
    addEducationField();
    addSkillField();
    addLanguageField();
};
