// Nawigacja

const showSearch =  document.querySelector("input");

function search() {
    showSearch.classList.toggle("w-40");
    showSearch.classList.toggle("w-0");
    showSearch.classList.toggle("border");
};

function showOffer() {
    const offersNav = document.getElementById('offers-navi');
    offersNav.classList.toggle('flex');
    offersNav.classList.toggle('hidden');
};

// Intro

currentSlideID = 1;

sliderElement = document.getElementById('slider');
totalSlides = sliderElement.childElementCount;

function next(){
    if(currentSlideID < totalSlides){
        currentSlideID++;
        showSlide();   
    }
};

function prev(){
    if(currentSlideID > 1) {
        currentSlideID--;
        showSlide();   
    }
};

function showSlide() {
    slides = document.getElementById('slider').getElementsByTagName('li')
    for (let index = 0; index < totalSlides; index++) {
        const element = slides[index];
        if (currentSlideID===index+1) {
            element.classList.remove('hidden');
            element.classList.add('flex');
        } else {
            element.classList.remove('flex');
            element.classList.add('hidden');
        }
        
    }
};

// Oferta

const cards = document.querySelectorAll('.card');

[...cards].forEach((card)=>{
    card.addEventListener( 'click', function() {
        card.classList.toggle('card-active');
    });
});

// Realizacje

const masonry = new Macy({
    container: '.gallery',
    mobileFirst: true,
    columns: 1,
    breakAt: {
        400: 2,
        700: 3
    },
    margin: {
        x: 42,
        y: 43
    }
});

const extend = document.getElementById("show");
const shrink = document.getElementById("hide");
const galleryBox = document.getElementById("gallery-box");
const gradient = document.getElementById("gradient");

function showMore() {
    extend.classList.remove("flex");
    extend.classList.add("hidden");
    shrink.classList.remove("hidden");
    shrink.classList.add("flex");
    galleryBox.classList.toggle("h-[1475px]");
    galleryBox.classList.toggle("h-full");
    gradient.classList.toggle("hidden");
};

function showLess() {
    shrink.classList.remove("flex");
    shrink.classList.add("hidden");
    extend.classList.remove("hidden");
    extend.classList.add("flex");
    galleryBox.classList.toggle("h-full");
    galleryBox.classList.toggle("h-[1475px]");
    gradient.classList.toggle("hidden");
};

// Galeria zdjęć w popupie

const gallery = document.querySelectorAll(".image"),
previewBox = document.querySelector(".preview-box"),
previewImg = previewBox.querySelector("img"),
closePopup = document.querySelector(".close-icon"),
currentImg = previewBox.querySelector(".current-img"),
totalImg = previewBox.querySelector(".total-img"),
shadow = document.querySelector(".shadow");

window.onload = () => {
    for (let i = 0; i < gallery.length; i++) {
        totalImg.textContent = gallery.length;
        let newIndex = i;
        let clickImgIndex;
        gallery[i].onclick = () => {
            clickImgIndex = newIndex;
            function preview() {
                currentImg.textContent = newIndex + 1;
                let selectedImgUrl = gallery[newIndex].querySelector("img").src;
                previewImg.src = selectedImgUrl;
            }

            const prevBtn = document.querySelector(".prev");
            const nextBtn = document.querySelector(".next");

            if(newIndex == 0) {
                prevBtn.style.display = "none";
            }
            if(newIndex >= gallery.length - 1) {
                nextBtn.style.display = "none";    
            }

            prevBtn.onclick = () => {
                newIndex--;
                if(newIndex == 0) {
                    preview();
                    prevBtn.style.display = "none";
                }else {
                    preview();
                    nextBtn.style.display = "flex";
                }
            }

            nextBtn.onclick = () => {
                newIndex++;
                if(newIndex >= gallery.length - 1) {
                    preview();
                    nextBtn.style.display = "none";
                }else {
                    preview();
                    prevBtn.style.display = "flex";
                }
            }

            preview();
            previewBox.classList.add("show");
            shadow.style.display = "block";
            document.querySelector("body").style.overflow = "hidden";

            closePopup.onclick = ()=>{
                newIndex = clickImgIndex;
                prevBtn.style.display = "flex";
                nextBtn.style.display = "flex";
                previewBox.classList.remove("show");
                shadow.style.display = "none";
                document.querySelector("body").style.overflow = "auto";
            }
        }
    }
};