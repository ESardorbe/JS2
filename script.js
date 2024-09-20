// Функция для обновления фона и текста при наведении или фокусировке на изображении
function upDate(previewPic) {
    console.log("Функция upDate вызвана");
    let imageDiv = document.getElementById('image');
    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
    imageDiv.innerHTML = previewPic.alt;
}

// Функция для возврата исходного состояния при уходе мыши или потере фокуса
function unDo() {
    let imageDiv = document.getElementById('image');
    imageDiv.style.backgroundImage = "none";
    imageDiv.innerHTML = "Наведите курсор на изображение ниже, чтобы отобразить его здесь";
}

// Функция, вызываемая при загрузке страницы
function initializeGallery() {
    console.log("Галерея загружена");
    let images = document.querySelectorAll('.preview');

    // Добавление атрибутов tabindex и установка событий
    images.forEach(function(img) {
        img.setAttribute('tabindex', '0'); // Устанавливаем атрибут для фокуса через клавиатуру
        img.addEventListener('focus', function() { upDate(img); });
        img.addEventListener('blur', unDo);
    });
}
