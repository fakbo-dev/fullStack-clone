const btn = document.querySelector("#emoji");

const emojis = [
    "😆",
    "😅",
    "🤣",
    "😂",
    "😀",
    "🤑",
    "🤨",
    "🙂",
    "😊",
    "😗",
    "😛",
    "😏",
    "🤥",
    "😴",
    "🥺",
    "😧",
    "😇",
    "😳",
    "🙃",
    "🥴",
    "🧐",
    "🤨",
    "😒",
    "🤔",
    "🤭",
    "🥰",
    "🤐",
    "😄",
    "🤔",
    "🤪",
    "🎳",
    "😃",
    "😁",
    "😬",
];

btn.addEventListener("mouseover", () => {
    // const random = emojis[Math.floor(Math.random() * emojis.length)];
    const random = Math.floor(Math.random() * emojis.length);
    return btn.textContent = emojis[random];
});

console.log("Hello");

console.log(emojis.length);