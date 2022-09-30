
// bow bow finger guns this is only on smaller screens
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        //toggle nav
        nav.classList.toggle('nav-active');
        //animate links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + .3}s`;
            }
        });
        //burger animation
        burger.classList.toggle('toggle');
    });
    
}

navSlide();


// navbar scrolling stuff
const body = document.body;
        let lastScroll = 0;

        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset
            if (currentScroll <= 0) {
                body.classList.remove("scroll-up")
            }

            if (currentScroll > lastScroll && !body.classList.contains("scroll-down")) {
                body.classList.remove("scroll-up")
                body.classList.add("scroll-down")
            }

            if (currentScroll < lastScroll && body.classList.contains("scroll-down")) {
                body.classList.remove("scroll-down")
                body.classList.add("scroll-up")
            }


            lastScroll = currentScroll
        })

// document.cookie = 'cookie2=value2; SameSite=None; Secure';




//monkey svg checkbox stuff / jinx mode

const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'jinx');
    }
    else {
        document.documentElement.setAttribute('data-theme', 'default');
    }    
}

toggleSwitch.addEventListener('change', switchTheme, false);

// toggle monkey svg on / off class

function jinxMode(e) {
    if (e.target.checked) {
        body.classList.add("jinxMode")
    } else {
        body.classList.remove("jinxMode")
    }
}

toggleSwitch.addEventListener('change', jinxMode, false);