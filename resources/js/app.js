"use strict";

let isMobileMenuVisible = false;
let isProfileDropdownVisible = false;
let isOptionsMenuVisible = false;
let lastDropdownMenu;

const mobileMenu = document.querySelector("#mobile-menu");
const menuClosed = document.querySelector("#menu-closed");
const menuOpen = document.querySelector("#menu-open");
const createProjectModal = document.querySelector("#create-project-modal");
const projectImage = document.querySelector("select");
const userMenu = document.querySelector("#user-menu");

function toggleMobileMenuDropdown() {
    isMobileMenuVisible = !isMobileMenuVisible;

    if (isMobileMenuVisible === false) {
        menuClosed.classList.remove("hidden");
        menuClosed.classList.add("block");
        menuOpen.classList.remove("block");
        menuOpen.classList.add("hidden");

        mobileMenu.classList.remove("block");
        mobileMenu.classList.add("hidden");
    } else {
        menuClosed.classList.remove("block");
        menuClosed.classList.add("hidden");
        menuOpen.classList.remove("hidden");
        menuOpen.classList.add("block");

        mobileMenu.classList.remove("hidden");
        mobileMenu.classList.add("block");
    }
}

function openCreateProjectModal() {
    createProjectModal.classList.remove("hidden");
    createProjectModal.classList.add("block");
}

function closeCreateProjectModal() {
    createProjectModal.classList.remove("block");
    createProjectModal.classList.add("hidden");
}

function selectProjectImage() {
    document.querySelectorAll("[id*='project-image-button-'].ring").forEach(element => {
        element.classList.remove("ring");
        element.classList.remove("ring-sky-600");
    });

    projectImage.value = this.value;
    this.classList.add("ring");
    this.classList.add("ring-sky-600");
}

function toggleProfileDropdown() {
    isProfileDropdownVisible = !isProfileDropdownVisible;

    document.querySelectorAll(".card-options.block, #user-menu.block").forEach(element => {
        element.classList.remove("block");
        element.classList.add("hidden");
    });
    
    if (lastDropdownMenu !== userMenu) {
        isProfileDropdownVisible = true;
    }

    if (isProfileDropdownVisible === false) {
        userMenu.classList.remove("block");
        userMenu.classList.add("hidden");
    } else {
        userMenu.classList.remove("hidden");
        userMenu.classList.add("block");
    }

    lastDropdownMenu = userMenu;
}

function toggleOptionsMenu() {
    const target = document.querySelector(`#${this.id.replace("-button", "")}`);
    isOptionsMenuVisible = !isOptionsMenuVisible;

    document.querySelectorAll(".card-options.block, #user-menu.block").forEach(element => {
        element.classList.remove("block");
        element.classList.add("hidden");
    });

    if (lastDropdownMenu !== target) {
        isOptionsMenuVisible = true;
    }

    if (isOptionsMenuVisible === false) {
        target.classList.remove("block");
        target.classList.add("hidden");
    } else {
        target.classList.remove("hidden");
        target.classList.add("block");
    }

    lastDropdownMenu = target;
}

document.querySelector("#main-menu-button").addEventListener("click", toggleMobileMenuDropdown);
document.querySelector("#user-menu-button").addEventListener("click", toggleProfileDropdown);
document.querySelector("#open-create-project-modal").addEventListener("click", openCreateProjectModal);
document.querySelector("#close-create-project-modal").addEventListener("click", closeCreateProjectModal);
document.querySelectorAll("[id*='project-image-button-']").forEach(element => {
    element.addEventListener("click", selectProjectImage);
});
document.querySelectorAll("[id*='projects-options-button-'], [id*='views-options-button-']").forEach(element => {
    element.addEventListener("click", toggleOptionsMenu);
});
