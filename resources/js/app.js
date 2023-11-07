const menuClosed = document.querySelector("#menu-closed").classList;
const menuOpen = document.querySelector("#menu-open").classList;
const userMenu = document.querySelector("#user-menu").classList;
const mobileMenu = document.querySelector("#mobile-menu").classList;

let isProfileDropdownVisible = false;
let isMobileMenuVisible = false;
let isOptionsMenuVisible = false;
let lastOptionsMenu;

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

function toggleOptionsMenu(e) {
	isOptionsMenuVisible = !isOptionsMenuVisible;
	const targetMenu = document.querySelector(`#${e.target.parentNode.id.replace("-button", "")}`).classList;

	document.querySelectorAll(".card-options.block").forEach(element => {
		element.classList.remove("block");
		element.classList.add("hidden");
	});

	if (lastOptionsMenu !== targetMenu) {
		isOptionsMenuVisible = true;
	}

	if (isOptionsMenuVisible === false) {
		targetMenu.remove("block");
		targetMenu.add("hidden");
	} else {
		targetMenu.remove("hidden");
		targetMenu.add("block");
	}

	lastOptionsMenu = targetMenu;
}

document.querySelector("#user-menu-button").addEventListener("click", toggleProfileDropdown);
document.querySelector("#main-menu-button").addEventListener("click", toggleMobileMenuDropdown);
document.querySelectorAll("[id*='projects-options-button-'], [id*='views-options-button-']").forEach(element => { element.addEventListener("click", toggleOptionsMenu) });
