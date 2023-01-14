
"use strict";

const $ = selector => document.querySelector(selector); 

const firstName = $("#first_name");
const fnLabel   = $("#fn_label");
const lastName  = $("#last_name");
const lnLabel   = $("#ln_label")
const email     = $("#email");
const emLabel   = $("#em_label");
const message   = $("#message");
const msgLabel  = $("#msg_label");
const send      = $("#send");

// validate fields
const processEntries = evt => {
    if (firstName.value == ""){
        fnLabel.innerText = "Your first name is required";
        fnLabel.classList.add('error');
        evt.preventDefault()
    }

    if (lastName.value == ""){
        lnLabel.innerText = "Your last name is required";
        lnLabel.classList.add('error');
        evt.preventDefault()
    }

    if (email.value == ""){
        emLabel.innerText = "Your email is required";
        emLabel.classList.add('error');
        evt.preventDefault()
    }

    if (message.value == ""){
        msgLabel.innerText = "A message is required";
        msgLabel.classList.add('error');
        evt.preventDefault()
    }

    if (firstName.value !== "" && lnLabel.innerText !== "" && email.value !== "" && message.value !== "") {
        msgLabel.classList.add("validated")
        msgLabel.innerText = "submitted";
    }
}

send.addEventListener("click", processEntries);

