const sleep = (time) => {
    return new Promise((resolve) => setTimeout(resolve, time));
}

var URLs = [];
var allURLs = [];

const scrollToEnd = () => {
    return new Promise(() => {
        var x = document.body.offsetHeight + window.scrollY;
        // window.scrollTo(0, document.body.scrollHeight);
        window.scrollTo({
            left: 0,
            top: document.body.scrollHeight,
            behavior: 'smooth'
        });

        var y = document.body.scrollHeight;
        console.log(x, y)


        imgLink = [...document.querySelectorAll(".v1Nh3")];
        allURLs.push(...imgLink);
        if (x < y) {
            sleep(3000).then(scrollToEnd);
        }
    })
}



// ========================= Scrape all photos =======================


const myURLs = () => {
    return new Promise(() => {
        var mySet = new Set(allURLs)
        mySet.forEach((k) => URLs.push(k.querySelector("img").src))
    })
}

scrollToEnd().then(myURLs)