"use strict";

let isMobileMenuVisible = false;
let isProfileDropdownVisible = false;
let isOptionsMenuVisible = false;
let lastOptionsMenu;

const mobileMenu = document.querySelector("#mobile-menu").classList;
const menuClosed = document.querySelector("#menu-closed").classList;
const menuOpen = document.querySelector("#menu-open").classList;
const userMenu = document.querySelector("#user-menu").classList;

function toggleMobileMenuDropdown() {
    isMobileMenuVisible = !isMobileMenuVisible;

    if (isMobileMenuVisible === false) {
        menuClosed.remove("hidden");
        menuClosed.add("block");
        menuOpen.remove("block");
        menuOpen.add("hidden");

        mobileMenu.remove("block");
        mobileMenu.add("hidden");
    } else {
        menuClosed.remove("block");
        menuClosed.add("hidden");
        menuOpen.remove("hidden");
        menuOpen.add("block");

        mobileMenu.remove("hidden");
        mobileMenu.add("block");
    }
}

function toggleProfileDropdown() {
    isProfileDropdownVisible = !isProfileDropdownVisible;

    if (isProfileDropdownVisible === false) {
        userMenu.remove("block");
        userMenu.add("hidden");
    } else {
        userMenu.remove("hidden");
        userMenu.add("block");
    }
}

function toggleOptionsMenu(e) {
    const target = document.querySelector(`#${e.target.parentNode.id.replace("-button", "")}`).classList;
    isOptionsMenuVisible = !isOptionsMenuVisible;

    document.querySelectorAll(".card-options.block, #user-menu.block").forEach(element => {
        element.classList.remove("block");
        element.classList.add("hidden");
    });

    if (lastOptionsMenu !== target) {
        isOptionsMenuVisible = true;
    }

    if (isOptionsMenuVisible === false) {
        target.remove("block");
        target.add("hidden");
    } else {
        target.remove("hidden");
        target.add("block");
    }

    lastOptionsMenu = target;
}

document.querySelector("#main-menu-button").addEventListener("click", toggleMobileMenuDropdown);
document.querySelector("#user-menu-button").addEventListener("click", toggleProfileDropdown);
document.querySelectorAll("[id*='projects-options-button-'], [id*='views-options-button-']").forEach(element => {
    element.addEventListener("click", toggleOptionsMenu);
});
