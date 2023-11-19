let imgContainer = document.getElementById("image-container");
const imgUpload = document.getElementById("img-upload");
const imgUrl = document.getElementById("img-url");
const fileUpload = document.getElementById("file-upload");
const pastUrl = document.getElementById("past-url");
const fileUplod = document.getElementById("file-upload-container");
const resetFilter = document.getElementById("reset-filter");
let filters = {
    brightness: 100,
    saturation: 100,
    contrast: 100,
    hue: 100,
    invert: 100
};

imgUrl.style.display = "none";

function changeUpload() {
    fileUplod.style.display = "block";
    fileUpload.style.backgroundColor = "black";
    fileUpload.style.border = "2px solid black";
    fileUpload.style.color = "white";
    pastUrl.style.backgroundColor = "white";
    pastUrl.style.color = "black";
    imgUrl.style.display = "none";
}

function changeUrl() {
    imgUrl.style.display = "block";
    pastUrl.style.backgroundColor = "black";
    pastUrl.style.color = "white";
    pastUrl.style.border = "2px solid black";
    fileUpload.style.backgroundColor = "white";
    fileUpload.style.color = "black";
    fileUplod.style.display = "none";
}

function upload(evt) {
    imgContainer.src = URL.createObjectURL(evt.target.files[0]);
    console.log(imgContainer.src);
    applyFilters();
}

function imgLink() {
    imgContainer.src = imgUrl.value;
    applyFilters();
}

function applyFilters() {
    imgContainer.style.filter = `brightness(${filters.brightness}%) saturate(${filters.saturation}%) contrast(${filters.contrast}%) hue-rotate(${filters.hue}deg) invert(${filters.brightness}%)`;
}

function updateFilter(filter, value) {
    filters[filter] = value;
    applyFilters();
}

// brightness
function brigt() {
    let brightRange = document.getElementById("bright-range").value;
    document.getElementById("bright-input").value = brightRange;
    updateFilter('brightness', brightRange);
}

function brigt1() {
    let brightInput = document.getElementById("bright-input").value;
    document.getElementById("bright-range").value = brightInput;
    updateFilter('brightness', brightInput);
}

// saturation
function saturation() {
    let saturationRange = document.getElementById("saturation-range").value;
    document.getElementById("saturation-input").value = saturationRange;
    updateFilter('saturation', saturationRange);
}

function saturation1() {
    let saturationInput = document.getElementById("saturation-input").value;
    document.getElementById("saturation-range").value = saturationInput;
    updateFilter('saturation', saturationInput);
}

// contrast
function contrast() {
    let contrastRange = document.getElementById("contrast-range").value;
    document.getElementById("contrast-input").value = contrastRange;
    updateFilter('contrast', contrastRange);
}

function contrast1() {
    let contrastInput = document.getElementById("contrast-input").value;
    document.getElementById("contrast-range").value = contrastInput;
    updateFilter('contrast', contrastInput);
}

// hue
function hue() {
    let hueRange = document.getElementById("hue-range").value;
    document.getElementById("hue-input").value = hueRange;
    updateFilter('hue', hueRange);
}

function hue1() {
    let hueInput = document.getElementById("hue-input").value;
    document.getElementById("hue-range").value = hueInput;
    updateFilter('hue', hueInput);
}

resetFilter.onclick = function resetFilter() {
    imgContainer.style.filter = "none";
}
