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

// matter email input
const matterNumber = document.getElementById("matter-number");
const radioEmail = document.getElementById("radio-email");
const radioPost = document.getElementById("radio-post");
const author = document.getElementById("author");

// title search input

// coa input
const loanPurpose = document.getElementById("loan-purpose");
const borrowerOneName = document.getElementById("borrower-1-name");
const borrowerOneAddress = document.getElementById("borrower-1-address");
const borrowersList = document.getElementById("borrowers-ul");
const mortgageList = document.querySelectorAll(".mortgage-list");
const borrowersArray = borrowersList.children;
const addBorrower = document.getElementById("add-borrower-btn");
const addMortgage = document.querySelectorAll(".add-mortgage-btn");
const addSecurity = document.getElementById("add-security-btn");
const unregisteredProposed = document.querySelectorAll(
    ".unregistered-proposed"
);
const clearTitle = document.querySelectorAll(".clear-title");

// title search input
const states = document.querySelectorAll(".select-state");
const qldState = document.querySelectorAll(".if-qld");
const nswState = document.querySelectorAll(".if-nsw");
const vicSaTasState = document.querySelectorAll(".if-vic-sa-tas");

// cos input

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

nextBtnValRep.addEventListener("click", valRepNextBtn);
backBtnValRep.addEventListener("click", backBtn);

finishBtnRatesNotice.addEventListener("click", finishBtn);
backBtnRatesNotice.addEventListener("click", backBtn);

finishBtnCos.addEventListener("click", finishBtn);
backBtnCos.addEventListener("click", backBtn);

for (let i = 0; i < upDownArrow.length; i++) {
    upDownArrow[i].addEventListener("click", arrowUpDown);
}

addBorrower.addEventListener("click", addAnotherBorrower);

addSecurity.addEventListener("click", addSecurityBtn);

document
    .getElementById("delete-security-2")
    .addEventListener("click", function() {
        if (confirm("Remove Security?"))
            document.getElementById("security-2").classList.add("hidden");
    });

document
    .getElementById("delete-security-3")
    .addEventListener("click", function() {
        if (confirm("Remove Security?"))
            document.getElementById("security-3").classList.add("hidden");
        document.getElementById("delete-security-2").classList.remove("hidden");
    });

document
    .getElementById("delete-security-4")
    .addEventListener("click", function() {
        if (confirm("Remove Security?"))
            document.getElementById("security-4").classList.add("hidden");
        document.getElementById("delete-security-3").classList.remove("hidden");
        addSecurity.classList.remove("hidden");
    });

// general tab logic
matterNumber.addEventListener("blur", pasteMatterNumber);
radioEmail.addEventListener("change", emailRadio);
radioPost.addEventListener("change", postRadio);
author.addEventListener("blur", authorLeadAndAss);
loanPurpose.addEventListener("blur", refiOrPurchase);
document
    .getElementById("solicitor")
    .addEventListener("blur", pasteBorrowerSolicitor);
document
    .getElementById("contact-name")
    .addEventListener("blur", pasteContactName);
document
    .getElementById("contact-email")
    .addEventListener("blur", pastecontactEmail);

// security tab logic
borrowersList.addEventListener("click", removeBorrower);
for (let i = 0; i < states.length; i++) {
    states[i].addEventListener("change", selectTheState);
}
for (let i = 0; i < unregisteredProposed.length; i++) {
    unregisteredProposed[i].addEventListener(
        "change",
        toggleUnregisteredProposed
    );
    function toggleUnregisteredProposed(e) {
        if ((unregisteredProposed[i].checked = true)) {
            unregisteredProposed[i].nextElementSibling.classList.toggle(
                "hidden"
            );
        }
    }
}
for (let i = 0; i < clearTitle.length; i++) {
    clearTitle[i].addEventListener("change", toggleClearTitle);
    function toggleClearTitle(e) {
        if ((clearTitle[i].checked = true)) {
            clearTitle[i].nextElementSibling.classList.toggle("hidden");
            clearTitle[
                i
            ].nextElementSibling.nextElementSibling.classList.toggle("hidden");
        }
    }
}

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

function valRepNextBtn(e) {
    if (loanPurpose.value.toLowerCase().indexOf("refinance") !== -1) {
        e.target.parentElement.parentElement.parentElement.classList.add(
            "hidden"
        );
        e.target.parentElement.parentElement.parentElement.nextElementSibling.classList.remove(
            "hidden"
        );
    } else if (loanPurpose.value.toLowerCase().indexOf("purchase") !== -1) {
        e.target.parentElement.parentElement.parentElement.classList.add(
            "hidden"
        );
        e.target.parentElement.parentElement.parentElement.nextElementSibling.nextElementSibling.classList.remove(
            "hidden"
        );
    }
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

function addSecurityBtn(e) {
    if (
        document.getElementById("security-2").classList.contains("hidden") &&
        document.getElementById("security-3").classList.contains("hidden") &&
        document.getElementById("security-4").classList.contains("hidden")
    ) {
        document.getElementById("security-2").classList.remove("hidden");
        document.getElementById("delete-security-2").classList.remove("hidden");
    } else if (
        document.getElementById("security-3").classList.contains("hidden") &&
        document.getElementById("security-4").classList.contains("hidden")
    ) {
        document.getElementById("security-3").classList.remove("hidden");
        document.getElementById("delete-security-2").classList.add("hidden");
        document.getElementById("delete-security-3").classList.remove("hidden");
    } else if (
        document.getElementById("security-4").classList.contains("hidden")
    ) {
        document.getElementById("security-4").classList.remove("hidden");
        e.target.classList.add("hidden");
        document.getElementById("delete-security-2").classList.add("hidden");
        document.getElementById("delete-security-3").classList.add("hidden");
        document.getElementById("delete-security-4").classList.remove("hidden");
    }
}

// functions for general tab
function pasteMatterNumber(e) {
    mainHeader.textContent = e.target.value;
}

function refiOrPurchase(e) {
    if (e.target.value.toLowerCase().indexOf("refinance") !== -1) {
        document.getElementById("purchase-box").classList.add("hidden");
    } else if (e.target.value.toLowerCase().indexOf("purchase") !== -1) {
        document.getElementById("purchase-box").classList.remove("hidden");
    }
}

function postRadio(e) {
    if ((e.target.checked = true)) emailOrPost.textContent = "1 - Post";
}

function emailRadio(e) {
    if ((e.target.checked = true)) emailOrPost.textContent = "0 - Email";
}

function pasteBorrowerSolicitor(e) {
    document.getElementById("borrower-solicitors").value = e.target.value;
}

function pasteContactName(e) {
    document.getElementById("solicitor-contact-name").value = e.target.value;
}

function pastecontactEmail(e) {
    document.getElementById("solicitor-contact-email").value = e.target.value;
}

// function for coa
function addAnotherBorrower(e) {
    // create elements
    const li = document.createElement("li");
    const label = document.createElement("label");
    const span = document.createElement("span");
    const inputName = document.createElement("input");
    const inputAddress = document.createElement("input");
    // create attributes
    const input = document.createAttribute("input");
    input.value = "text";
    const placeholderName = document.createAttribute("placeholder");
    placeholderName.value = "Name";
    const input1 = document.createAttribute("input");
    input1.value = "text";
    const placeholderAddress = document.createAttribute("placeholder");
    placeholderAddress.value = "Address";

    // logic
    label.className = "block text-sm font-semibold mt-4";
    label.appendChild(
        document.createTextNode("Borrower " + (borrowersArray.length + 1))
    );
    span.className =
        "float-right cursor-pointer text-gray-600 hover:text-gray-700 pr-1";
    span.appendChild(document.createTextNode("x"));
    inputName.className =
        "bg-gray-200 rounded w-full py-1 px-2 focus:outline-none focus:bg-white";
    inputName.setAttributeNode(input);
    inputName.setAttributeNode(placeholderName);
    inputAddress.className =
        "bg-gray-200 rounded w-full py-1 px-2 focus:outline-none focus:bg-white";
    inputAddress.setAttributeNode(input1);
    inputAddress.setAttributeNode(placeholderAddress);

    // append child
    li.appendChild(label);
    label.appendChild(span);
    li.appendChild(inputName);
    li.appendChild(inputAddress);

    borrowersList.appendChild(li);
}

function removeBorrower(e) {
    if (e.target.classList.contains("float-right")) {
        if (confirm("Remove Borrower?")) {
            const li = e.target.parentElement.parentElement;

            borrowersList.removeChild(li);
        }
    }
}

for (let i = 0; i < addMortgage.length; i++) {
    addMortgage[i].addEventListener("click", function addAnotherMortgage(e) {
        // create elements
        const li = document.createElement("li");
        const label = document.createElement("label");
        const span = document.createElement("span");
        const inputName = document.createElement("input");
        const inputAddress = document.createElement("input");
        // create attributes
        const input = document.createAttribute("input");
        input.value = "text";
        const placeholderName = document.createAttribute("placeholder");
        placeholderName.value = "Mortgage Number";
        const input1 = document.createAttribute("input");
        input1.value = "text";
        const placeholderAddress = document.createAttribute("placeholder");
        placeholderAddress.value = "Mortgagee";

        // logic
        label.className = "block text-sm font-semibold mt-4";
        label.appendChild(document.createTextNode("Mortgage"));
        span.className =
            "float-right cursor-pointer text-gray-600 hover:text-gray-700 pr-1";
        span.appendChild(document.createTextNode("x"));
        inputName.className =
            "bg-gray-200 rounded w-full py-1 px-2 focus:outline-none focus:bg-white";
        inputName.setAttributeNode(input);
        inputName.setAttributeNode(placeholderName);
        inputAddress.className =
            "bg-gray-200 rounded w-full py-1 px-2 focus:outline-none focus:bg-white";
        inputAddress.setAttributeNode(input1);
        inputAddress.setAttributeNode(placeholderAddress);

        // append child
        li.appendChild(label);
        label.appendChild(span);
        li.appendChild(inputName);
        li.appendChild(inputAddress);

        mortgageList[i].appendChild(li);
    });
}

for (let i = 0; i < mortgageList.length; i++) {
    mortgageList[i].addEventListener("click", function removeMortgage(e) {
        if (e.target.classList.contains("float-right")) {
            if (confirm("Remove Mortgage?")) {
                const li = e.target.parentElement.parentElement;

                mortgageList[i].removeChild(li);
            }
        }
    });
}

// states select option
function selectTheState(e) {
    switch (e.target.value) {
        case "default-state":
            e.target.parentElement.nextElementSibling.nextElementSibling.nextElementSibling.classList.add(
                "hidden"
            );
            e.target.parentElement.parentElement.nextElementSibling.classList.add(
                "hidden"
            );
            e.target.parentElement.parentElement.nextElementSibling.nextElementSibling.classList.add(
                "hidden"
            );
            break;
        case "qld-state":
            e.target.parentElement.nextElementSibling.nextElementSibling.nextElementSibling.classList.remove(
                "hidden"
            );
            e.target.parentElement.parentElement.nextElementSibling.classList.add(
                "hidden"
            );
            e.target.parentElement.parentElement.nextElementSibling.nextElementSibling.classList.add(
                "hidden"
            );
            break;
        case "nsw-state":
            e.target.parentElement.nextElementSibling.nextElementSibling.nextElementSibling.classList.add(
                "hidden"
            );
            e.target.parentElement.parentElement.nextElementSibling.classList.remove(
                "hidden"
            );
            e.target.parentElement.parentElement.nextElementSibling.nextElementSibling.classList.add(
                "hidden"
            );
            break;
        case "vic-state":
        case "sa-state":
        case "tas-state":
            e.target.parentElement.nextElementSibling.nextElementSibling.nextElementSibling.classList.add(
                "hidden"
            );
            e.target.parentElement.parentElement.nextElementSibling.classList.add(
                "hidden"
            );
            e.target.parentElement.parentElement.nextElementSibling.nextElementSibling.classList.remove(
                "hidden"
            );
            break;
        default:
            console.log(1);
    }
}

// paralegal's leader and assistant
function authorLeadAndAss(e) {
    switch (e.target.value) {
        case "ARD".toLowerCase():
        case "ARD".toUpperCase():
            teamLeader.value = "   ";
            adminAssistant.value = "KED";
            teamLeader.classList.remove("text-red-500");
            adminAssistant.classList.remove("text-red-500");
            break;
        case "CYS".toLowerCase():
        case "CYS".toUpperCase():
            teamLeader.value = "   ";
            adminAssistant.value = "RXB";
            teamLeader.classList.remove("text-red-500");
            adminAssistant.classList.remove("text-red-500");
            break;
        case "TMO".toLowerCase():
        case "TMO".toUpperCase():
            teamLeader.value = "   ";
            adminAssistant.value = "IXC";
            teamLeader.classList.remove("text-red-500");
            adminAssistant.classList.remove("text-red-500");
            break;
        case "MEF".toLowerCase():
        case "MEF".toUpperCase():
            teamLeader.value = "   ";
            adminAssistant.value = "KXP";
            teamLeader.classList.remove("text-red-500");
            adminAssistant.classList.remove("text-red-500");
            break;
        case "LMA".toLowerCase():
        case "LMA".toUpperCase():
            teamLeader.value = "   ";
            adminAssistant.value = "RXW";
            teamLeader.classList.remove("text-red-500");
            adminAssistant.classList.remove("text-red-500");
            break;
        case "HXP".toLowerCase():
        case "HXP".toUpperCase():
            teamLeader.value = "TMO";
            adminAssistant.value = "IXC";
            teamLeader.classList.remove("text-red-500");
            adminAssistant.classList.remove("text-red-500");
            break;
        case "KKM".toLowerCase():
        case "KKM".toUpperCase():
            teamLeader.value = "TMO";
            adminAssistant.value = "IXC";
            teamLeader.classList.remove("text-red-500");
            adminAssistant.classList.remove("text-red-500");
            break;
        case "NVP".toLowerCase():
        case "NVP".toUpperCase():
            teamLeader.value = "MEF";
            adminAssistant.value = "KXP";
            teamLeader.classList.remove("text-red-500");
            adminAssistant.classList.remove("text-red-500");
            break;
        case "SZT".toLowerCase():
        case "SZT".toUpperCase():
            teamLeader.value = "MEF";
            adminAssistant.value = "KXP";
            teamLeader.classList.remove("text-red-500");
            adminAssistant.classList.remove("text-red-500");
            break;
        case "DMP".toLowerCase():
        case "DMP".toUpperCase():
            teamLeader.value = "LMA";
            adminAssistant.value = "RXW";
            teamLeader.classList.remove("text-red-500");
            adminAssistant.classList.remove("text-red-500");
            break;
        case "SXB".toLowerCase():
        case "SXB".toUpperCase():
            teamLeader.value = "LMA";
            adminAssistant.value = "RXW";
            teamLeader.classList.remove("text-red-500");
            adminAssistant.classList.remove("text-red-500");
            break;
        case "LAM".toLowerCase():
        case "LAM".toUpperCase():
            teamLeader.value = "CYS";
            adminAssistant.value = "AYF";
            teamLeader.classList.remove("text-red-500");
            adminAssistant.classList.remove("text-red-500");
            break;
        case "NHM".toLowerCase():
        case "NHM".toUpperCase():
            teamLeader.value = "CYS";
            adminAssistant.value = "AYF";
            teamLeader.classList.remove("text-red-500");
            adminAssistant.classList.remove("text-red-500");
            break;
        case "NXA".toLowerCase():
        case "NXA".toUpperCase():
            teamLeader.value = "TMO";
            adminAssistant.value = "JXW";
            teamLeader.classList.remove("text-red-500");
            adminAssistant.classList.remove("text-red-500");
            break;
        case "RHH".toLowerCase():
        case "RHH".toUpperCase():
            teamLeader.value = "TMO";
            adminAssistant.value = "JXW";
            teamLeader.classList.remove("text-red-500");
            adminAssistant.classList.remove("text-red-500");
            break;
        case "VSA".toLowerCase():
        case "VSA".toUpperCase():
            teamLeader.value = "TMO";
            adminAssistant.value = "JXW";
            teamLeader.classList.remove("text-red-500");
            adminAssistant.classList.remove("text-red-500");
            break;
        case "RMF".toLowerCase():
        case "RMF".toUpperCase():
            teamLeader.value = "TMO";
            adminAssistant.value = "OXO";
            teamLeader.classList.remove("text-red-500");
            adminAssistant.classList.remove("text-red-500");
            break;
        case "RYE".toLowerCase():
        case "RYE".toUpperCase():
            teamLeader.value = "TMO";
            adminAssistant.value = "OXO";
            teamLeader.classList.remove("text-red-500");
            adminAssistant.classList.remove("text-red-500");
            break;
        case "BJT".toLowerCase():
        case "BJT".toUpperCase():
            teamLeader.value = "MEF";
            adminAssistant.value = "NXL";
            teamLeader.classList.remove("text-red-500");
            adminAssistant.classList.remove("text-red-500");
            break;
        case "CYM".toLowerCase():
        case "CYM".toUpperCase():
            teamLeader.value = "MEF";
            adminAssistant.value = "NXL";
            teamLeader.classList.remove("text-red-500");
            adminAssistant.classList.remove("text-red-500");
            break;
        case "KDB".toLowerCase():
        case "KDB".toUpperCase():
            teamLeader.value = "MEF";
            adminAssistant.value = "NXL";
            teamLeader.classList.remove("text-red-500");
            adminAssistant.classList.remove("text-red-500");
            break;
        case "SXF".toLowerCase():
        case "SXF".toUpperCase():
            teamLeader.value = "MEF";
            adminAssistant.value = "NXL";
            teamLeader.classList.remove("text-red-500");
            adminAssistant.classList.remove("text-red-500");
            break;
        case "BYC".toLowerCase():
        case "BYC".toUpperCase():
            teamLeader.value = "CYS";
            adminAssistant.value = "AYF";
            teamLeader.classList.remove("text-red-500");
            adminAssistant.classList.remove("text-red-500");
            break;
        case "CZL".toLowerCase():
        case "CZL".toUpperCase():
            teamLeader.value = "CYS";
            adminAssistant.value = "AYF";
            teamLeader.classList.remove("text-red-500");
            adminAssistant.classList.remove("text-red-500");
            break;
        case "JNT".toLowerCase():
        case "JNT".toUpperCase():
            teamLeader.value = "CYS";
            adminAssistant.value = "AYF";
            teamLeader.classList.remove("text-red-500");
            adminAssistant.classList.remove("text-red-500");
            break;
        case "RXA".toLowerCase():
        case "RXA".toUpperCase():
            teamLeader.value = "CYS";
            adminAssistant.value = "AYF";
            teamLeader.classList.remove("text-red-500");
            adminAssistant.classList.remove("text-red-500");
            break;
        case "SXH".toLowerCase():
        case "SXH".toUpperCase():
            teamLeader.value = "ARD";
            adminAssistant.value = "RXW";
            teamLeader.classList.remove("text-red-500");
            adminAssistant.classList.remove("text-red-500");
            break;
        case "JML".toLowerCase():
        case "JML".toUpperCase():
            teamLeader.value = "CYS";
            adminAssistant.value = "AYF";
            teamLeader.classList.remove("text-red-500");
            adminAssistant.classList.remove("text-red-500");
            break;
        default:
            teamLeader.value = "Incorrect Initials of Paralegal";
            adminAssistant.value = "Incorrect Initials of Paralegal";
            teamLeader.classList.add("text-red-500");
            adminAssistant.classList.add("text-red-500");
    }
}
