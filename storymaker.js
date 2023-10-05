/* Variables
-------------------------------------------------- */

// Arrays of button and display selectors
const mainButtonSelectors = ["noun1", "verb", "adjective", "noun2", "setting"];
const displaySelectors = ["choosenNoun1", "choosenVerb", "choosenAdjective", "choosenNoun2", "choosenSetting"];

// Arrays of final button selectors and the final display selector
const finalButtonSelectors = ["playback", "random"];
const finalDisplaySelector = "story";

// Object containing story elements
const storyElements = {
    nouns1: ["cat", "dog", "bird", "elephant", "dragon"],
    verbs: ["ran", "jumped", "flew", "swam", "danced"],
    adjectives: ["happy", "sad", "funny", "exciting", "mysterious"],
    nouns2: ["forest", "mountain", "beach", "castle", "city"],
    settings: ["at night", "in the morning", "under the stars", "in a magical land", "on a deserted island"]
};

// Count object to keep track of the index of selected elements
let count = {
    noun1: 0,
    verb: 0,
    adjective: 0,
    noun2: 0,
    setting: 0
};

// User story object to store the selected elements
let userStory = {
    noun1: "",
    verb: "",
    adjective: "",
    noun2: "",
    setting: ""
};

/* Functions
-------------------------------------------------- */

// Function to update the display based on the selected element type
function updateDisplay(elementType) {
    document.getElementById(displaySelectors[elementType]).textContent = userStory[mainButtonSelectors[elementType]];
}

// Functions for each button click to update the user story and display
function noun1_on_click() {
    userStory.noun1 = storyElements.nouns1[count.noun1];
    updateDisplay(0);
    count.noun1 = (count.noun1 + 1) % storyElements.nouns1.length;
}

function verb_on_click() {
    userStory.verb = storyElements.verbs[count.verb];
    updateDisplay(1);
    count.verb = (count.verb + 1) % storyElements.verbs.length;
}

function adjective_on_click() {
    userStory.adjective = storyElements.adjectives[count.adjective];
    updateDisplay(2);
    count.adjective = (count.adjective + 1) % storyElements.adjectives.length;
}

function noun2_on_click() {
    userStory.noun2 = storyElements.nouns2[count.noun2];
    updateDisplay(3);
    count.noun2 = (count.noun2 + 1) % storyElements.nouns2.length;
}

function setting_on_click() {
    userStory.setting = storyElements.settings[count.setting];
    updateDisplay(4);
    count.setting = (count.setting + 1) % storyElements.settings.length;
}

// Function to handle playback button click
function playback_on_click() {
    document.getElementById(finalDisplaySelector).textContent = generateStory();
}

// Function to handle random button click
function random_on_click() {
    // Randomly select elements and update the user story and display
    userStory.noun1 = getRandomElement(storyElements.nouns1);
    userStory.verb = getRandomElement(storyElements.verbs);
    userStory.adjective = getRandomElement(storyElements.adjectives);
    userStory.noun2 = getRandomElement(storyElements.nouns2);
    userStory.setting = getRandomElement(storyElements.settings);

    // Update the final display with the generated story
    document.getElementById(finalDisplaySelector).textContent = generateStory();
}

// Function to generate a story based on the user's selections
function generateStory() {
    return `${userStory.noun1} ${userStory.verb} ${userStory.adjective} ${userStory.noun2} ${userStory.setting}`;
}

// Function to get a random element from an array
function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

/* Event Listeners
-------------------------------------------------- */

// Add event listeners for each main button
mainButtonSelectors.forEach(function (button, index) {
    document.getElementById(button).addEventListener('click', function () {
        // Call the appropriate function based on the button clicked
        switch (index) {
            case 0:
                noun1_on_click();
                break;
            case 1:
                verb_on_click();
                break;
            case 2:
                adjective_on_click();
                break;
            case 3:
                noun2_on_click();
                break;
            case 4:
                setting_on_click();
                break;
            default:
                break;
        }
    });
});

// Add event listeners for final buttons (playback and random)
finalButtonSelectors.forEach(function (button) {
    document.getElementById(button).addEventListener('click', function () {
        // Call the appropriate function based on the button clicked
        if (button === "playback") {
            playback_on_click();
        } else if (button === "random") {
            random_on_click();
        }
    });
});
