const menuClosed = document.getElementById("menu-closed").classList;
const menuOpen = document.getElementById("menu-open").classList;
const userMenu = document.getElementById("user-menu").classList;
const mobileMenu = document.getElementById("mobile-menu").classList;

let isProfileDropdownVisible = false;
let isMobileMenuVisible = false;

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
		mobileMenu.add("hidden")
	} else {
		menuClosed.remove("block");
		menuClosed.add("hidden");
		menuOpen.remove("hidden");
		menuOpen.add("block");

		mobileMenu.remove("hidden");
		mobileMenu.add("block");
	}
}

document.getElementById("user-menu-button").addEventListener("click", toggleProfileDropdown);
document.getElementById("main-menu-button").addEventListener("click", toggleMobileMenuDropdown);
