document.addEventListener('DOMContentLoaded', () => {
    const breedSearchInput = document.getElementById('breedSearch');
    const suggestionsContainer = document.getElementById('suggestions');

    // Fetch the dog breed data (assumes this data is available in your JSON file)
    const breedData = [
        {
            "name": "Affenpinscher",
            "url": "dog breeds/Affenpinscher.html"
        },
        {
            "name": "Afghan Hound",
            "url": "dog breeds/AfghanHound.html"
        },
        {
            "name": "Airedale Terrier",
            "url": "dog breeds/AiredaleTerrier.html"
        },
        {
            "name": "Akita",
            "url": "dog breeds/Akita.html"
        },
        {
            "name": "Alaskan Klee Kai",
            "url": "dog breeds/AlaskanKleeKai.html"
        },
        {
            "name": "Alaskan Malamute",
            "url": "dog breeds/AlaskanMalamute.html"
        },
        {
            "name": "American Bulldog",
            "url": "dog breeds/AmericanBulldog.html"
        },
        {
            "name": "American English Coonhound",
            "url": "dog breeds/AmericanEnglishCoonhound.html"
        },
        {
            "name": "American Eskimo Dog",
            "url": "dog breeds/AmericanEskimoDog.html"
        },
        {
            "name": "American Foxhound",
            "url": "dog breeds/AmericanFoxHound.html"
        },
        {
            "name": "American Hairless Terrier",
            "url": "dog breeds/AmericanHairlessTerrier.html"
        },
        {
            "name": "American Leopard Hound",
            "url": "dog breeds/AmericanLeopardHound.html"
        },
        {
            "name": "American Staffordshire Terrier",
            "url": "dog breeds/AmericanStaffordshireTerrier.html"
        },
        {
            "name": "American Water Spaniel",
            "url": "dog breeds/AmericanWaterSpaniel.html"
        },
        {
            "name": "Anatolian Shepherd Dog",
            "url": "dog breeds/AnatolianShepherdDog.html"
        },
        {
            "name": "Appenzeller Sennenhund",
            "url": "dog breeds/AppenzellerSennenhund.html"
        },
        {
            "name": "Australian Cattle Dog",
            "url": "dog breeds/AustralianCattleDog.html"
        },
        {
            "name": "Australian Kelpie",
            "url": "dog breeds/AustralianKelpie.html"
        },
        {
            "name": "Australian Shepherd",
            "url": "dog breeds/AustralianShepherd.html"
        },
        {
            "name": "Australian Stumpy Tail Cattle Dog",
            "url": "dog breeds/AustralianStumpyTailCattleDog.html"
        },
        {
            "name": "Australian Terrier",
            "url": "dog breeds/AustralianTerrier.html"
        },
        {
            "name": "Azawakh",
            "url": "dog breeds/Azawakh.html"
        },
        {
            "name": "Barbado da Terceira",
            "url": "dog breeds/BarbadoDaTerceira.html"
        },
        {
            "name": "Beagle",
            "url": "dog breeds/Beagle.html"
        },
        {
            "name": "Bernese Mountain Dog",
            "url": "dog breeds/BerneseMountainDog.html"
        },
        {
            "name": "Bergamasco Sheepdog",
            "url": "dog breeds/BergamascoSheepDog.html"
        },
        {
            "name": "Biewer Terrier",
            "url": "dog breeds/BiewerTerrier.html"
        },
        {
            "name": "Bolognese",
            "url": "dog breeds/Bolognese.html"
        },
        {
            "name": "Boerboel",
            "url": "dog breeds/Boerboel.html"
        },
        {
            "name": "Chihuahua",
            "url": "dog breeds/Chihuahua.html"
        },
        {
            "name": "Cavalier King Charles Spaniel",
            "url": "dog breeds/CavalierKingCharlesSpaniel.html"
        },
        {
            "name": "Doberman Pinscher",
            "url": "dog breeds/DobermanPinscher.html"
        },
        {
            "name": "English Cocker Spaniel",
            "url": "dog breeds/EnglishCockerSpaniel.html"
        },
        {
            "name": "English Springer Spaniel",
            "url": "dog breeds/EnglishSpringerSpaniel.html"
        },
        {
            "name": "French Bulldog",
            "url": "dog breeds/FrenchBullDog.html"
        },
        {
            "name": "Flat-Coated Retriever",
            "url": "dog breeds/FlatCoatedRetriever.html"
        },
        {
            "name": "Golden Retriever",
            "url": "dog breeds/GoldenRetriever.html"
        },
        {
            "name": "Irish Red and White Setter",
            "url": "dog breeds/IrishRedAndWhiteSetter.html"
        },
        {
            "name": "Indie (Indian Pariah Dog)",
            "url": "dog breeds/Indie.html"
        },
        {
            "name": "Kai Ken",
            "url": "dog breeds/KaiKen.html"
        },
        {
            "name": "Keeshond",
            "url": "dog breeds/Keeshond.html"
        },
        {
            "name": "Newfoundland",
            "url": "dog breeds/Newfoundland.html"
        },
        {
            "name": "Pembroke Welsh Corgi",
            "url": "dog breeds/PembrokeWelshCorgi.html"
        },
        {
            "name": "Romanian Mioritic Shepherd",
            "url": "dog breeds/RomanianMioriticShepherd.html"
        },
        {
            "name": "Russian Tsvetnaya Bolonka",
            "url": "dog breeds/RussianTsvetnayaBolonka.html"
        },
        {
            "name": "Russian Toy",
            "url": "dog breeds/RussianToy.html"
        },
        {
            "name": "Rottweiler",
            "url": "dog breeds/Rotteiler.html"
        },
        {
            "name": "Shetland Sheepdog",
            "url": "dog breeds/ShetlandSheepdog.html"
        },
        {
            "name": "Working Kelpie",
            "url": "dog breeds/WorkingKelpie.html"
        },
        {
            "name": "Yorkshire Terrier",
            "url": "dog breeds/YorkshireTerrier.html"
        }
    ];

    // Function to filter and display breed suggestions
    function showSuggestions() {
        const query = breedSearchInput.value.toLowerCase();
        if (query === '') {
            suggestionsContainer.style.display = 'none'; // Hide suggestions if query is empty
            return;
        }

        // Filter the breedData based on the query
        const filteredBreeds = breedData.filter(breed =>
            breed.name.toLowerCase().includes(query)
        ).slice(0, 3); // Show only the first 3 results

        // Clear any existing suggestions
        suggestionsContainer.innerHTML = '';

        // If there are matching breeds, show them
        if (filteredBreeds.length > 0) {
            suggestionsContainer.style.display = 'block'; // Show suggestions container

            filteredBreeds.forEach(breed => {
                const suggestionItem = document.createElement('div');
                suggestionItem.classList.add('suggestion-item');
                suggestionItem.textContent = breed.name;

                // Add click event to navigate to breed's page when clicked
                suggestionItem.addEventListener('click', () => {
                    window.location.href = breed.url; // Redirect to breed page
                });

                suggestionsContainer.appendChild(suggestionItem);
            });
        } else {
            suggestionsContainer.style.display = 'none'; // Hide if no results
        }
    }

    // Show suggestions when user clicks on the search bar
    breedSearchInput.addEventListener('focus', () => {
        showSuggestions();
    });

    // Show suggestions as user types
    breedSearchInput.addEventListener('input', () => {
        showSuggestions();
    });

    // Hide suggestions if user clicks outside the search input or suggestions box
    document.addEventListener('click', (event) => {
        if (!breedSearchInput.contains(event.target) && !suggestionsContainer.contains(event.target)) {
            suggestionsContainer.style.display = 'none';
        }
    });
});
