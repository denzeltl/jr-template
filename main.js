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
const radioEmail = document.getElementById("radio-email");
const radioPost = document.getElementById("radio-post");
const author = document.getElementById("author");

// general tab variables
const mainHeader = document.getElementById("main-header");
const emailOrPost = document.getElementById("email-or-post");
const teamLeader = document.getElementById("team-leader");
const adminAssistant = document.getElementById("admin-assistant");

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
radioEmail.addEventListener("change", emailRadio);
radioPost.addEventListener("change", postRadio);
author.addEventListener("blur", authorLeadAndAss);

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

function postRadio(e) {
    if ((e.target.checked = true)) emailOrPost.textContent = "1 - Post";
}

function emailRadio(e) {
    if ((e.target.checked = true)) emailOrPost.textContent = "0 - Email";
}

// paralegal's leader and assistant
function authorLeadAndAss(e) {
    switch (e.target.value) {
        case "ARD".toLowerCase():
        case "ARD".toUpperCase():
            teamLeader.value = "   ";
            adminAssistant.value = "KED";
            break;
        case "CYS".toLowerCase():
        case "CYS".toUpperCase():
            teamLeader.value = "   ";
            adminAssistant.value = "RXB";
            break;
        case "TMO".toLowerCase():
        case "TMO".toUpperCase():
            teamLeader.value = "   ";
            adminAssistant.value = "IXC";
            break;
        case "MEF".toLowerCase():
        case "MEF".toUpperCase():
            teamLeader.value = "   ";
            adminAssistant.value = "KXP";
            break;
        case "LMA".toLowerCase():
        case "LMA".toUpperCase():
            teamLeader.value = "   ";
            adminAssistant.value = "RXW";
            break;
        case "HXP".toLowerCase():
        case "HXP".toUpperCase():
            teamLeader.value = "TMO";
            adminAssistant.value = "IXC";
            break;
        case "KKM".toLowerCase():
        case "KKM".toUpperCase():
            teamLeader.value = "TMO";
            adminAssistant.value = "IXC";
            break;
        case "NVP".toLowerCase():
        case "NVP".toUpperCase():
            teamLeader.value = "MEF";
            adminAssistant.value = "KXP";
            break;
        case "SZT".toLowerCase():
        case "SZT".toUpperCase():
            teamLeader.value = "MEF";
            adminAssistant.value = "KXP";
            break;
        case "DMP".toLowerCase():
        case "DMP".toUpperCase():
            teamLeader.value = "LMA";
            adminAssistant.value = "RXW";
            break;
        case "SXB".toLowerCase():
        case "SXB".toUpperCase():
            teamLeader.value = "LMA";
            adminAssistant.value = "RXW";
            break;
        case "LAM".toLowerCase():
        case "LAM".toUpperCase():
            teamLeader.value = "CYS";
            adminAssistant.value = "RXB";
            break;
        case "NHM".toLowerCase():
        case "NHM".toUpperCase():
            teamLeader.value = "CYS";
            adminAssistant.value = "RXB";
            break;
        case "NXA".toLowerCase():
        case "NXA".toUpperCase():
            teamLeader.value = "TMO";
            adminAssistant.value = "JXW";
            break;
        case "RHH".toLowerCase():
        case "RHH".toUpperCase():
            teamLeader.value = "TMO";
            adminAssistant.value = "JXW";
            break;
        case "VSA".toLowerCase():
        case "VSA".toUpperCase():
            teamLeader.value = "TMO";
            adminAssistant.value = "JXW";
            break;
        case "RMF".toLowerCase():
        case "RMF".toUpperCase():
            teamLeader.value = "TMO";
            adminAssistant.value = "OXO";
            break;
        case "RYE".toLowerCase():
        case "RYE".toUpperCase():
            teamLeader.value = "TMO";
            adminAssistant.value = "OXO";
            break;
        case "BJT".toLowerCase():
        case "BJT".toUpperCase():
            teamLeader.value = "MEF";
            adminAssistant.value = "NXL";
            break;
        case "CYM".toLowerCase():
        case "CYM".toUpperCase():
            teamLeader.value = "MEF";
            adminAssistant.value = "NXL";
            break;
        case "KDB".toLowerCase():
        case "KDB".toUpperCase():
            teamLeader.value = "MEF";
            adminAssistant.value = "NXL";
            break;
        case "SXF".toLowerCase():
        case "SXF".toUpperCase():
            teamLeader.value = "MEF";
            adminAssistant.value = "NXL";
            break;
        case "BYC".toLowerCase():
        case "BYC".toUpperCase():
            teamLeader.value = "CYS";
            adminAssistant.value = "RXB";
            break;
        case "CZL".toLowerCase():
        case "CZL".toUpperCase():
            teamLeader.value = "CYS";
            adminAssistant.value = "RXB";
            break;
        case "JNT".toLowerCase():
        case "JNT".toUpperCase():
            teamLeader.value = "CYS";
            adminAssistant.value = "RXB";
            break;
        case "RXA".toLowerCase():
        case "RXA".toUpperCase():
            teamLeader.value = "CYS";
            adminAssistant.value = "RXB";
            break;
        case "SXH".toLowerCase():
        case "SXH".toUpperCase():
            teamLeader.value = "ARD";
            adminAssistant.value = "RXW";
            break;
        case "JML".toLowerCase():
        case "JML".toUpperCase():
            teamLeader.value = "CYS";
            adminAssistant.value = "SWH";
            break;
        default:
            teamLeader.value = "Incorrect Initials of Paralegal";
            adminAssistant.value = "Incorrect Initials of Paralegal";
            teamLeader.classList.add("text-red-500");
            adminAssistant.classList.add("text-red-500");
    }
}
