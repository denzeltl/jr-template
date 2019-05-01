// VARIABLES

// button variables
const editBoxLender = document.getElementById("edit-box-lender");
const nextBtnLender = document.getElementById("next-btn-lender");

const navBtnMatterEmail = document.getElementById("nav-btn-matter-email");
const editBoxMatterEmail = document.getElementById("edit-box-matter-email");
const nextBtnMatterEmail = document.getElementById("next-btn-matter-email");
const backBtnMatterEmail = document.getElementById("back-btn-matter-email");

const navBtnTitleSearch = document.getElementById("nav-btn-title-search");
const editBoxTitleSearch = document.getElementById("edit-box-title-search");
const nextBtnTitleSearch = document.getElementById("next-btn-title-search");
const backBtnTitleSearch = document.getElementById("back-btn-title-search");

const navBtnCoa = document.getElementById("nav-btn-coa");
const editBoxCoa = document.getElementById("edit-box-coa");
const nextBtnCoa = document.getElementById("next-btn-coa");
const backBtnCoa = document.getElementById("back-btn-coa");

const navBtnSolIns = document.getElementById("nav-btn-sol-ins");
const editBoxSolIns = document.getElementById("edit-box-sol-ins");
const nextBtnSolIns = document.getElementById("next-btn-sol-ins");
const backBtnSolIns = document.getElementById("back-btn-sol-ins");

const navBtnValRep = document.getElementById("nav-btn-val-rep");
const editBoxValRep = document.getElementById("edit-box-val-rep");
const nextBtnValRep = document.getElementById("next-btn-val-rep");
const backBtnValRep = document.getElementById("back-btn-val-rep");

const navBtnRatesNotice = document.getElementById("nav-btn-rates-notice");
const editBoxRatesNotice = document.getElementById("edit-box-rates-notice");
const finishBtnRatesNotice = document.getElementById("finish-btn-rates-notice");
const backBtnRatesNotice = document.getElementById("back-btn-rates-notice");

const navBtnCos = document.getElementById("nav-btn-cos");
const editBoxCos = document.getElementById("edit-box-cos");
const finishBtnCos = document.getElementById("finish-btn-cos");
const backBtnCos = document.getElementById("back-btn-cos");

const upDownArrow = document.querySelectorAll(".arrow-up");

// input variables
const matterNumber = document.getElementById("matter-number");

// general tab variables
const mainHeader = document.getElementById("main-header");
const postOrEmail = document.getElementById("post-or-email")
// LOGIC

// logic of buttons
nextBtnLender.addEventListener("click", nextBtn);

navBtnMatterEmail.addEventListener("click", navBtn);
nextBtnMatterEmail.addEventListener("click", nextBtn);
backBtnMatterEmail.addEventListener("click", backBtn);

navBtnTitleSearch.addEventListener("click", navBtn);
nextBtnTitleSearch.addEventListener("click", nextBtn);
backBtnTitleSearch.addEventListener("click", backBtn);

nextBtnCoa.addEventListener("click", nextBtn);
backBtnCoa.addEventListener("click", backBtn);

nextBtnSolIns.addEventListener("click", nextBtn);
backBtnSolIns.addEventListener("click", backBtn);

nextBtnValRep.addEventListener("click", nextBtn);
backBtnValRep.addEventListener("click", backBtn);

finishBtnRatesNotice.addEventListener("click", finishBtn);
backBtnRatesNotice.addEventListener("click", backBtn);

finishBtnCos.addEventListener("click", finishBtn);
backBtnCos.addEventListener("click", backBtn);

for (let i = 0; i < upDownArrow.length; i++) {
    upDownArrow[i].addEventListener("click", arrowUpDown);
}

// general tab logic
matterNumber.addEventListener("blur", pasteMatterNumber);
// postOrEmail.addEventListener("mousedown", postOrEmailRadio)

// FUNCTIONS

// function buttons
function navBtn(e) {
    e.target.parentElement.parentElement.parentElement.classList.add(
        "selected-nav"
    );
    for (
        let i = 0;
        i <
        e.target.parentElement.parentElement.parentElement.parentElement
            .childNodes.length;
        i++
    ) {
        console.log(
            e.target.parentElement.parentElement.parentElement.parentElement
                .children[i].classList
        );
        if (
            e.target.parentElement.parentElement.parentElement.parentElement.children[
                i
            ].classList.contains("flex-col")
        ) {
            e.target.parentElement.parentElement.parentElement.parentElement.children[
                i
            ].classList.add("hidden");
        }
        if (
            e.target.parentElement.parentElement.parentElement.parentElement.children[
                i
            ].classList.contains("selected-nav")
        ) {
            e.target.parentElement.parentElement.parentElement.parentElement.children[
                i
            ].classList.remove("hidden");
        }
    }
}

function nextBtn(e) {
    e.target.parentElement.parentElement.parentElement.classList.add("hidden");
    e.target.parentElement.parentElement.parentElement.nextElementSibling.classList.remove(
        "hidden"
    );
}

function backBtn(e) {
    e.target.parentElement.parentElement.parentElement.classList.add("hidden");
    e.target.parentElement.parentElement.parentElement.previousElementSibling.classList.remove(
        "hidden"
    );
}

function finishBtn(e) {
    e.target.parentElement.parentElement.classList.add("hidden");
    e.target.parentElement.parentElement.previousElementSibling.classList.add(
        "hidden"
    );
    e.target.parentElement.parentElement.previousElementSibling.previousElementSibling.lastElementChild.firstElementChild.classList.remove(
        "fa-angle-up"
    );
    e.target.parentElement.parentElement.previousElementSibling.previousElementSibling.lastElementChild.firstElementChild.classList.add(
        "fa-angle-down"
    );
}

function arrowUpDown(e) {
    if (e.target.classList.contains("fa-angle-up")) {
        e.target.parentElement.parentElement.nextElementSibling.classList.add(
            "hidden"
        );
        e.target.parentElement.parentElement.nextElementSibling.nextElementSibling.classList.add(
            "hidden"
        );
        e.target.classList.remove("fa-angle-up");
        e.target.classList.add("fa-angle-down");
    } else {
        e.target.parentElement.parentElement.nextElementSibling.classList.remove(
            "hidden"
        );
        e.target.parentElement.parentElement.nextElementSibling.nextElementSibling.classList.remove(
            "hidden"
        );
        e.target.classList.add("fa-angle-up");
        e.target.classList.remove("fa-angle-down");
    }
}

// functions for general tab
function pasteMatterNumber(e) {
    mainHeader.textContent = e.target.value;
}

function postOrEmailRadio(e){
    
}

console.log($0)