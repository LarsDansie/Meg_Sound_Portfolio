// const lightbox = document.createElement('div')
// lightbox.id = 'lightbox'
// document.body.appendChild(lightbox)

// const videos = document.querySelectorAll('iframe')
// videos.forEach(videos => {
//     videos.addEventListener('click', e => {
//         lightbox.classList.add('active')
//         const vid = document.createElement('iframe')
//         vid.src = iframe.src
//         while (lightbox.firstChild) {
//             lightbox.removeChild(lightbox.firstChild)
//         }
//         lightbox.appendChild(vid)
//     })
// })


// lightbox.addEventListener('click', e => {
//     if (e.target !== e.currentTarget) return
//     lightbox.classList.remove('active')
// })

// function changeNavbarColor(){
//     var scrollValue = window.screenY;
//     console.log(scrollValue)
// }

// window.addEventListener('scroll', changeNavbarColor)

// const body = document.body;
// let lastScroll = 0;

// window.addEventListener("scroll", () => {
// 	const currentScroll = window.pageYOffset;
// 	if (currentScroll <= 0) {
// 		body.classList.remove("scroll-up");
// 		return;
// 	}

// 	if (currentScroll > lastScroll && !body.classList.contains("scroll-down")) {
// 		body.classList.remove("scroll-up");
// 		body.classList.add("scroll-down");
// 	} else if (
// 		currentScroll < lastScroll &&
// 		body.classList.contains("scroll-down")
// 	) {
// 		body.classList.remove("scroll-down");
// 		body.classList.add("scroll-up");
// 	}
// 	lastScroll = currentScroll;
// });
