//variable declaration for dom elements
let message;
let dynamicCurl = "https://know-your-signs.netlify.com/"
let nameContainer = document.querySelector("#name");
let imgContainer = document.querySelector("#image");
let traits = document.querySelector("#traits");
let personalities = document.querySelector("#personalities");
let tweetContainer = document.querySelector("#tweet")

//function that check the signs
const checkSign = (date, month) => {
    if (date >= 21 && month === "March" || date <= 19 && month === "April") {
        return signs.aries;
    } else if (date >= 20 && month === "April" || date <= 20 && month === "May") {
        return signs.taurus;
    } else if (date >= 21 && month === "May" || date <= 20 && month === "June") {
        return signs.gemini;
    } else if (date >= 21 && month === "June" || date <= 22 && month === "July") {
        return signs.cancer;
    } else if (date >= 23 && month === "July" || date <= 23 && month === "August") {
        return signs.leo;
    } else if (date >= 23 && month === "August" || date <= 22 && month === "September") {
        return signs.virgo;
    } else if (date >= 23 && month === "September" || date <= 22 && month === "October") {
        return signs.libra;
    } else if (date >= 23 && month === "October" || date <= 21 && month === "November") {
        return signs.scorpio;
    } else if (date >= 22 && month === "November" || date <= 21 && month === "December") {
        return signs.sagittarius;
    } else if (date >= 22 && month === "December" || date <= 19 && month === "January") {
        return signs.capricorn;
    } else if (date >= 20 && month === "January" || date <= 18 && month === "Febuary") {
        return signs.aquarius;
    } else if (date >= 19 && month === "Febuary" || date <= 20 && month === "March") {
        return signs.pisces;
    }
}

//function to setup the twitter button
const setUpTweetBtn = (dynamicMessage, dynamicCurl) => {
    let tweetButton = document.createElement("a");
    tweetButton.textContent = "tweet";
    tweetButton.setAttribute("href", "https://twitter.com/share?ref_src=twsrc%5Etfw");
    tweetButton.setAttribute("class", "twitter-share-button");
    tweetButton.setAttribute("data-size", "large")
    tweetButton.setAttribute("data-hashtags", "HolidayCountDown")
    tweetButton.setAttribute("data-text", dynamicMessage);
    tweetButton.setAttribute('data-url', dynamicCurl)
    tweetButton.setAttribute("data-show-count", "false")
    document.querySelector("#tweet").appendChild(tweetButton)
    twttr.widgets.load();
}

//function to render dom to the browser
const renderDOM = (checker) => {
    let sign = checker; //get the object value that is returned from the checkSign function for reference purposes
    message = `I'm curious...What is your Zodiac sign? Mine is ${sign.name}`; //message value for the tweet function

    //creating the name dom element that will display the name of the sign e.g Cancer
    let name = document.createElement("h2");
    name.textContent = sign.name;
    nameContainer.appendChild(name);

    //DOM element for the image
    let image = document.createElement("img");
    image.src = sign.image;
    image.setAttribute("width", "60px");
    imgContainer.appendChild(image);

    //DOM element for traits and personalities that holds all the traits and personalities in each signs
    let traitsUl = document.createElement("ul");
    let personalitiesUl = document.createElement("ul");
    sign.traits.forEach(trait => {
        let li = document.createElement("li");
        li.textContent = trait;
        traitsUl.appendChild(li);
    })

    sign.personalities.forEach(personality => {
        let li = document.createElement("li");
        li.textContent = personality;
        personalitiesUl.appendChild(li);
    })

    //DOM element for the header of traits and personalities
    let titleTraits = document.createElement("h3");
    titleTraits.textContent = "Traits";
    titleTraits.setAttribute("class", "underline");
    traits.appendChild(titleTraits);
    traits.appendChild(traitsUl);

    let titlePersonality = document.createElement("h3");
    titlePersonality.textContent = "Personalities";
    titlePersonality.setAttribute("class", "underline")
    personalities.appendChild(titlePersonality);
    personalities.appendChild(personalitiesUl);
    //twitter DOM setup
    setUpTweetBtn(message, dynamicCurl)
}

//event listener for the button where all the functions are called
document.querySelector("button").addEventListener("click", (e) => {
    e.preventDefault();
    let date = document.querySelector("#date").value
    let month = document.querySelector("#month").value
    nameContainer.innerHTML = "";
    imgContainer.innerHTML = "";
    traits.innerHTML = "";
    personalities.innerHTML = "";
    tweetContainer.innerHTML = "";
    renderDOM(checkSign(date, month));
})