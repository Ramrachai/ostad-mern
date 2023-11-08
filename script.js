
// remove '/ostad-mern' from link path if it is localhost
const isLocalHost = (window.location.hostname === "localhost") ? true : false;
if(isLocalHost) {
    let links = document.querySelectorAll("a")
    links.forEach(link =>{
        if(link.id=="githubRepo"){
            return 
        }
        const currentHref = link.getAttribute('href')
        const modifiedHref = currentHref.replace('/ostad-mern', '')
        link.setAttribute('href', modifiedHref)
    })

} else {
    console.log("Not localhost")
}

// 
document.getElementById("footer-year").innerHTML = new Date().getFullYear()

