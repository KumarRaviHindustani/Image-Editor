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
    hue: 0,
    invert: 0,
};

imgUrl.style.display = "none"; // file upload by url option hide


// file upload option show

function changeUpload() {
    fileUplod.style.display = "block";   // file upload option show
    fileUpload.style.backgroundColor = "black";
    fileUpload.style.border = "2px solid black";
    fileUpload.style.color = "white";
    pastUrl.style.backgroundColor = "white";
    pastUrl.style.color = "black";
    imgUrl.style.display = "none"; // file upload by url option hide
}

function changeUrl() {
    imgUrl.style.display = "block";   // file upload by url option show
    pastUrl.style.backgroundColor = "black";
    pastUrl.style.color = "white";
    pastUrl.style.border = "2px solid black";
    fileUpload.style.backgroundColor = "white";
    fileUpload.style.color = "black";
    fileUplod.style.display = "none"; // file upload option hide
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
    imgContainer.style.filter = `brightness(${filters.brightness}%) saturate(${filters.saturation}%) contrast(${filters.contrast}%) hue-rotate(${filters.hue}deg) invert(${filters.invert}%)`;
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

// invert
function invert() {
    let invertRange = document.getElementById("invert-range").value;
    document.getElementById("invert-input").value = invertRange;
    updateFilter('invert', invertRange);
}

function invert1() {
    let invertInput = document.getElementById("invert-input").value;
    document.getElementById("invert-range").value = invertInput;
    updateFilter('invert', invertInput);
}


// reset all applied filters (filter reset button JavaScript )
resetFilter.onclick = function resetFilter() {
    imgContainer.style.filter = "none";
    document.getElementById("bright-range").value = 100;
    document.getElementById("saturation-range").value = 100;
    document.getElementById("contrast-range").value = 100;
    document.getElementById("hue-range").value = 0;
    document.getElementById("bright-input").value = 100;
    document.getElementById("saturation-input").value = 100;
    document.getElementById("contrast-input").value = 100;
    document.getElementById("hue-input").value = 0;
    document.getElementById("invert-range").value = 0;
    document.getElementById("invert-input").value = 0;
}