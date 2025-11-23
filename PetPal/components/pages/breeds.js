// Breed data from the Google Doc// Breed data from the Google Doc
const breedsData = [
    {
        id: 'labrador',
        name: 'Labrador Retriever',
        image: 'https://picsum.photos/400/300?random=1',
        size: 'large',
        coat: 'short',
        temperament: ['friendly', 'intelligent', 'gentle', 'energetic'],
        origin: 'canada',
        weight: '55-80 lbs',
        lifespan: '10-12 years',
        about: "The Labrador Retriever, often abbreviated to Labrador or Lab, is one of the most popular dog breeds in the world. Originally from Newfoundland, Canada, they were bred as fishing and hunting dogs. Today, they're cherished family companions, guide dogs, and search-and-rescue dogs thanks to their intelligence, gentle temperament, and eagerness to please.",
        care: "Labs are energetic and require daily exercise to stay happy and healthy. They love swimming, fetching, and long walks. Their short, dense double coat is relatively easy to care for but sheds seasonally. They are prone to obesity, so a balanced diet and portion control are essential.",
        idealHome: "An active family or individual who can provide plenty of exercise and companionship. They do well with children and other pets. Their social nature means they shouldn't be left alone for long periods.",
        funFact: "Labradors have webbed feet, which makes them excellent swimmers!"
    },
    {
        id: 'german-shepherd',
        name: 'German Shepherd',
        image: 'https://picsum.photos/400/300?random=2',
        size: 'large',
        coat: 'double',
        temperament: ['intelligent', 'protective', 'loyal', 'energetic'],
        origin: 'germany',
        weight: '50-90 lbs',
        lifespan: '9-13 years',
        about: "German Shepherds are renowned for their intelligence, loyalty, and working ability. Originally bred for herding sheep, they now serve in various roles including police, military, service, and family protection. They are highly trainable and form strong bonds with their families.",
        care: "They need significant mental and physical stimulation daily. Training, puzzle toys, and jobs to do are essential. Their double coat requires regular brushing, especially during shedding seasons.",
        idealHome: "An experienced owner who can provide leadership, consistent training, and plenty of activity. They thrive in homes where they have a job to do.",
        funFact: "The German Shepherd is one of the most common breeds used for police and military work worldwide."
    },
    {
        id: 'golden-retriever',
        name: 'Golden Retriever',
        image: 'https://picsum.photos/400/300?random=3',
        size: 'large',
        coat: 'double',
        temperament: ['friendly', 'intelligent', 'gentle', 'devoted'],
        origin: 'united kingdom',
        weight: '55-75 lbs',
        lifespan: '10-12 years',
        about: "Golden Retrievers are known for their beautiful golden coats and even more beautiful personalities. Bred as gun dogs to retrieve fowl, they are now one of the most popular family dogs due to their patient, kind, and trustworthy nature.",
        care: "They require regular exercise and mental challenges. Their lush coat needs brushing several times a week to prevent mats. They love having a job to do, whether it's fetching the paper or competing in dog sports.",
        idealHome: "A family that can include them in daily activities. They are excellent with children and other pets and want to be wherever their people are.",
        funFact: "Golden Retrievers have a soft mouth, genetically bred to retrieve game without damaging it."
    },
    {
        id: 'french-bulldog',
        name: 'French Bulldog',
        image: 'https://picsum.photos/400/300?random=4',
        size: 'small',
        coat: 'short',
        temperament: ['friendly', 'gentle', 'playful', 'adaptable'],
        origin: 'france',
        weight: '16-28 lbs',
        lifespan: '10-12 years',
        about: "The French Bulldog, with its bat-like ears and smushy face, is a charmer. They are a companion breed through and through, thriving on human contact. They are playful, alert, and have a comical, loving nature.",
        care: "They are a brachycephalic (flat-faced) breed, so they can overheat easily and should not be over-exercised, especially in hot weather. Their facial wrinkles need regular cleaning to prevent infection.",
        idealHome: "Great for city dwellers and those in apartments. They are relatively low-energy but are social butterflies who need company.",
        funFact: "French Bulldogs cannot swim well due to their bulky front half and short legs, so always supervise them around water."
    },
    {
        id: 'siberian-husky',
        name: 'Siberian Husky',
        image: 'https://picsum.photos/400/300?random=5',
        size: 'medium',
        coat: 'double',
        temperament: ['energetic', 'independent', 'friendly', 'mischievous'],
        origin: 'russia',
        weight: '35-60 lbs',
        lifespan: '12-14 years',
        about: "Siberian Huskies are known for their striking wolf-like appearance and incredible endurance. Bred by the Chukchi people of Siberia to pull light loads over long distances, they are energetic, independent, and sometimes stubborn.",
        care: "They have VERY high exercise needs. A simple walk is not enough; they need running, hiking, or pulling sports. Their thick double coat sheds heavily twice a year ('blowing coat'). They are escape artists and need a secure yard.",
        idealHome: "An active, experienced owner who can provide a 'job' and firm, consistent training. Not recommended for first-time owners.",
        funFact: "Huskies rarely bark, but they are known for their 'talking'—they howl and make a wide range of other vocalizations."
    },
    {
        id: 'shiba-inu',
        name: 'Shiba Inu',
        image: 'https://picsum.photos/400/300?random=6',
        size: 'medium',
        coat: 'double',
        temperament: ['independent', 'intelligent', 'alert', 'bold'],
        origin: 'japan',
        weight: '17-23 lbs',
        lifespan: '13-16 years',
        about: "The Shiba Inu is the smallest of the six original Japanese spitz breeds. They are known for their fox-like appearance, cat-like cleanliness, and strong-willed, independent personality. They are alert, confident, and often described as having a 'big dog' attitude in a small body.",
        care: "They are naturally clean and groom themselves like cats. Their double coat needs regular brushing. They require early and ongoing socialization and training due to their independent and sometimes aloof nature.",
        idealHome: "An owner who appreciates a cat-like, independent dog. They can be reserved with strangers and have a high prey drive, so careful introduction is needed with small pets.",
        funFact: "The Shiba Inu is known for the 'Shiba Scream'—a high-pitched cry they make when they are upset or overly excited."
    }
];

// Function to display breed cards
function displayBreeds(breedsToShow) {
    const container = document.getElementById('breeds-container');
    container.innerHTML = '';

    // Always show breeds in alphabetical order by name
    const sorted = [...breedsToShow].sort((a, b) =>
        a.name.localeCompare(b.name)
    );

    sorted.forEach(breed => {
        const card = document.createElement('div');
        card.className = 'breed-card';
        card.innerHTML = `
            <img src="${breed.image}" alt="${breed.name}" class="breed-image">
            <div class="breed-info">
                <h3 class="breed-name">${breed.name}</h3>
                <div class="breed-traits">
                    <span class="trait">${breed.size}</span>
                    <span class="trait">${breed.coat} coat</span>
                    ${breed.temperament.slice(0, 2).map(temp => `<span class="trait">${temp}</span>`).join('')}
                </div>
                <button class="view-profile-btn" onclick="viewBreedProfile('${breed.id}')">View Profile</button>
            </div>
        `;
        container.appendChild(card);
    });
}

// Function to handle filtering
function filterBreeds() {
    const selectedSizes = Array.from(document.querySelectorAll('input[name="size"]:checked')).map(cb => cb.value);
    const selectedCoats = Array.from(document.querySelectorAll('input[name="coat"]:checked')).map(cb => cb.value);
    const selectedTemperaments = Array.from(document.querySelectorAll('input[name="temperament"]:checked')).map(cb => cb.value);
    const selectedOrigin = document.getElementById('origin-filter').value;

    const filteredBreeds = breedsData.filter(breed => {
        const sizeMatch = selectedSizes.length === 0 || selectedSizes.includes(breed.size);
        const coatMatch = selectedCoats.length === 0 || selectedCoats.includes(breed.coat);
        const tempMatch = selectedTemperaments.length === 0 || selectedTemperaments.some(temp => breed.temperament.includes(temp));
        const originMatch = !selectedOrigin || breed.origin === selectedOrigin;

        return sizeMatch && coatMatch && tempMatch && originMatch;
    });

    displayBreeds(filteredBreeds);
}

// Function to reset filters
function resetFilters() {
    document.querySelectorAll('input[type="checkbox"]').forEach(cb => cb.checked = false);
    document.getElementById('origin-filter').value = '';
    displayBreeds(breedsData);
}

// Function to view breed profile
function viewBreedProfile(breedId) {
    window.location.href = `breed-profile.html?breed=${breedId}`;
}

// Initialize the page
document.addEventListener('DOMContentLoaded', function () {
    // 1. Show all breeds initially
    displayBreeds(breedsData);

    // 2. Filter buttons
    document.getElementById('apply-filters').addEventListener('click', filterBreeds);
    document.getElementById('reset-filters').addEventListener('click', resetFilters);

    // Real-time filtering when checkboxes or origin change
    document.querySelectorAll('input[type="checkbox"], #origin-filter').forEach(element => {
        element.addEventListener('change', filterBreeds);
    });

    // 3. Sidebar toggle logic
    const toggleBtn = document.getElementById('filterToggle');
    const sidebar = document.querySelector('.filters-sidebar');
    const breedsContainer = document.querySelector('.breeds-container');

    if (toggleBtn && sidebar) {
        toggleBtn.addEventListener('click', function () {
            if (window.innerWidth <= 900) {
                // mobile open/close
                sidebar.classList.toggle('open');
            } else {
                // desktop collapse + expand cards area
                sidebar.classList.toggle('collapsed');
                if (breedsContainer) {
                    breedsContainer.classList.toggle('sidebar-collapsed');
                }
            }
        });
    }

    // 4. Breed name search
    const searchInput = document.getElementById('breedSearch');
    if (searchInput) {
        searchInput.addEventListener('input', function () {
            const query = searchInput.value.toLowerCase().trim();

            const filtered = breedsData.filter(breed =>
                breed.name.toLowerCase().includes(query)
            );

            displayBreeds(filtered);
        });
    }
});
