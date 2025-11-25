// -------------------------------
// BREED FROM URL
// -------------------------------
function getBreedIdFromURL() {
    const params = new URLSearchParams(window.location.search);
    return params.get("breed");
}

// -------------------------------
// BREED FROM breedsData
// -------------------------------
function getBreedData(breedId) {
    if (!breedId) return null;
    return breedsData.find(b => b.id === breedId);
}

// -------------------------------
// INSERT DATA INTO THE PAGE
// -------------------------------
function populateBreedProfile(breed) {
    if (!breed) return;

    // TITLE
    document.getElementById("breed-name").textContent = breed.name;

    // IMAGE
    document.getElementById("breed-image").src = breed.image;
    document.getElementById("breed-image").alt = breed.name;

    // KEY FACTS
    document.getElementById("fact-size").textContent = breed.size;
    document.getElementById("fact-coat").textContent = breed.coat;
    document.getElementById("fact-weight").textContent = breed.weight;
    document.getElementById("fact-lifespan").textContent = breed.lifespan;

    // MAIN SECTIONS
    document.getElementById("about-text").textContent = breed.about;
    document.getElementById("care-text").textContent = breed.care;
    document.getElementById("ideal-home-text").textContent = breed.idealHome;
    document.getElementById("funfact-text").textContent = breed.funFact;

    // EXTENDED FIELDS 
    if (breed.health) {
        document.getElementById("health-section").style.display = "block";
        document.getElementById("health-text").textContent = breed.health;
    }

    if (breed.exercise) {
        document.getElementById("exercise-section").style.display = "block";
        document.getElementById("exercise-text").textContent = breed.exercise;
    }

    if (breed.grooming) {
        document.getElementById("grooming-section").style.display = "block";
        document.getElementById("grooming-text").textContent = breed.grooming;
    }
}

// -------------------------------
// MAIN INITIALIZATION
// -------------------------------
document.addEventListener("DOMContentLoaded", function () {
    const breedId = getBreedIdFromURL();
    const breed = getBreedData(breedId);

    if (!breed) {
        document.getElementById("breed-name").textContent = "Breed Not Found";
        return;
    }

    populateBreedProfile(breed);
});
