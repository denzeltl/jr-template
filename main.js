// Variables

const editBoxLender = document.getElementById("edit-box-lender");
const nextBtnLender = document.getElementById("next-btn-lender");

const editBoxMatterEmail = document.getElementById("edit-box-matter-email");
const nextBtnMatterEmail = document.getElementById("next-btn-matter-email");
const backBtnMatterEmail = document.getElementById("back-btn-matter-email");

const editBoxTitleSearch = document.getElementById("edit-box-title-search");
const nextBtnTitleSearch = document.getElementById("next-btn-title-search");
const backBtnTitleSearch = document.getElementById("back-btn-title-search");

const editBoxCoa = document.getElementById("edit-box-coa");
const nextBtnCoa = document.getElementById("next-btn-coa");
const backBtnCoa = document.getElementById("back-btn-coa");

const editBoxSolIns = document.getElementById("edit-box-sol-ins");
const nextBtnSolIns = document.getElementById("next-btn-sol-ins");
const backBtnSolIns = document.getElementById("back-btn-sol-ins");

const editBoxValRep = document.getElementById("edit-box-val-rep");
const nextBtnValRep = document.getElementById("next-btn-val-rep");
const backBtnValRep = document.getElementById("back-btn-val-rep");

const editBoxRatesNotice = document.getElementById("edit-box-rates-notice");
const finishBtnRatesNotice = document.getElementById("finish-btn-rates-notice");
const backBtnRatesNotice = document.getElementById("back-btn-rates-notice");

const editBoxCos = document.getElementById("edit-box-cos");
const finishBtnCos = document.getElementById("finish-btn-cos");
const backBtnCos = document.getElementById("back-btn-cos");

// Logic

nextBtnLender.addEventListener("click", nextBtn);

nextBtnMatterEmail.addEventListener("click", nextBtn);
backBtnMatterEmail.addEventListener("click", backBtn);

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

// Functions

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
}
