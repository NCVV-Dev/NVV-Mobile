// Cookies
function setCookie(cname, cvalue, exdays) {
    let d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/;SameSite=Lax"
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i += 1) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1)
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length)
        }
    }
    return ""
}

function eraseCookie(e) {
    document.cookie = e + "=; Max-Age=-99999999;";
}

// Page Loader
document.addEventListener(
    "DOMContentLoaded",
    function e() {
        let t = document.getElementById("progress"),
            n = document.images,
            o = 0,
            r = n.length;
        if (0 == r) return l();
        function i() {
            let e = (((100 / r) * (o += 1)) << 0) + "%";
            if (((t.style.width = e), o === r)) return l();
        }
        function l() {
            setTimeout(function () {
                (t.style.opacity = "none"), (t.style.opacity = 0);
            }, 1800);
        }
        for (let s = 0; s < r; s += 1) {
            let $ = new Image();
            ($.onload = i), ($.onerror = i), ($.src = n[s].src);
        }
    },
    !1
);

// Find the most downloaded config and assign icon with text to the tab
let highestNumber = 0;
document.querySelectorAll('.dwn__count').forEach(elem => {
    let downCount = parseInt(elem.innerText.trim())
    if (downCount > highestNumber)
        highestNumber = downCount
});

let icon = document.createElement("em");
const popular = document.createElement('div');
popular.textContent = 'Popular!';
popular.style = "position: absolute; font-size: 13px; text-align: center; color: var(--buttonhover); font-weight: 600;";
icon.className = "bx bxs-hot tooltip";
icon.style = "color: var(--buttonhover);";

document.querySelectorAll('.dwn__count').forEach(elem => {
  if (parseInt(elem.innerText.trim()) == highestNumber)
  {
    elem.appendChild(popular.cloneNode(true));
    elem.appendChild(icon.cloneNode(true));
  }
});

// Init every picuture for preview
function initpicture() {
    let e = document.querySelectorAll(".cfgvrow img"),
        c = document.querySelector("#preview"),
        r = { "background-size": "60%" };
    e.forEach((e) => {
        e.addEventListener("click", function () {
            (c.style.backgroundImage = "url(" + e.src + ")"), (c.style.display = "block"), Object.assign(c.style, r);
        });
    });
}

// Search Functionality
function search() {
	let input = document.getElementById('searchbar').value
	input=input.toLowerCase();
	let cfgw = document.getElementsByClassName('cfg__wrapper');
	
	for (i = 0; i < cfgw.length; i++) {
		if (!cfgw[i].innerHTML.toLowerCase().includes(input)) {
			cfgw[i].style.display="none";
		}
		else {
			cfgw[i].style.display="block";				
		}
	}
}