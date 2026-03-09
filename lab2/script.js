// ------------------------------
// 1. WHILE — вивід статей
// ------------------------------

const articles = [
"Mountain Escape",
"Ocean Diaries",
"City Stories"
];

let i = 0;

while (i < articles.length) {

console.log("Article:", articles[i]);

i++;

}



// ------------------------------
// 2. DOM + querySelectorAll + FOR
// ------------------------------

const cards = document.querySelectorAll(".card");

for (let i = 0; i < cards.length; i++) {

if (i % 2 === 0) {

cards[i].style.background = "#fffaf3";

} else {

cards[i].style.background = "#ffffff";

}

}



// ------------------------------
// 3. LIKE BUTTON (для всіх статей)
// ------------------------------

const likeButtons = document.querySelectorAll(".like-btn");

for (let i = 0; i < likeButtons.length; i++) {

let count = 0;

likeButtons[i].addEventListener("click", function () {

const card = likeButtons[i].closest(".card") || likeButtons[i].closest(".travel-article");

const heart = likeButtons[i].querySelector(".heart");
const counter = likeButtons[i].querySelector(".like-count");

if (likeButtons[i].classList.contains("liked")) {

likeButtons[i].classList.remove("liked");

if(card){
card.classList.remove("liked");
}

heart.textContent = "♡";

count--;
if(count < 0) count = 0;

counter.textContent = count;

} else {

likeButtons[i].classList.add("liked");

if(card){
card.classList.add("liked");
}

heart.textContent = "❤";

count++;
counter.textContent = count;

}

});

}



// ------------------------------
// 4. ПОКАЗ / ПРИХОВАННЯ КОМЕНТАРІВ
// ------------------------------

const toggleBtn = document.getElementById("toggleComments");
const commentsList = document.getElementById("commentsList");

commentsList.style.display = "none";

toggleBtn.addEventListener("click", function () {

if (commentsList.style.display === "none") {

commentsList.style.display = "block";
toggleBtn.textContent = "💬 Hide comments";

} else {

commentsList.style.display = "none";
toggleBtn.textContent = "💬 Show comments";

}

});



// ------------------------------
// 5. ДОДАВАННЯ КОМЕНТАРІВ (SOCIAL STYLE)
// ------------------------------

const form = document.getElementById("commentForm");

form.addEventListener("submit", function (e) {

e.preventDefault();

const name = document.getElementById("name").value.trim();
const comment = document.getElementById("comment").value.trim();

if (name === "" || comment === "") {

alert("Please fill all fields");

} else {

const commentDiv = document.createElement("div");

commentDiv.classList.add("comment");

commentDiv.innerHTML = `
<img class="comment-avatar" src="https://randomuser.me/api/portraits/lego/1.jpg">
<div class="comment-content">
<div class="comment-name">${name}</div>
<div class="comment-text">${comment}</div>
</div>
`;

commentsList.appendChild(commentDiv);

form.reset();

}

});



// ------------------------------
// 6. HOVER ЕФЕКТ ДЛЯ МЕНЮ
// ------------------------------

const menuLinks = document.querySelectorAll(".nav-menu a");

for (let i = 0; i < menuLinks.length; i++) {

menuLinks[i].addEventListener("mouseover", function () {

menuLinks[i].style.color = "#E9DFC8";

});

menuLinks[i].addEventListener("mouseout", function () {

menuLinks[i].style.color = "white";

});

}