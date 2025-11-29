// Breed data
const breedsData = [

    // A-BREEDS (A → Z)
    {
        id: 'affenpinscher',
        name: 'Affenpinscher',
        image: 'https://i0.wp.com/affenpinscherclub.co.uk/wp-content/uploads/2021/01/cropped-3D_GiGi-scaled-1.jpg?fit=512%2C512&ssl=1',
        size: 'small',
        coat: 'rough',
        temperament: ['confident', 'curious', 'amusing', 'stubborn'],
        origin: 'germany',
        weight: '7–10 lb (3–4.5 kg)',
        lifespan: '12–15 years',
        about: "A tiny, confident toy breed known for its monkey-like expression and big-dog attitude in a small body. Affenpinschers are alert, amusing, and sometimes stubborn, making them entertaining companions.",
        care: "Feed a high-quality small-breed food and watch their weight. Their rough, wiry coat needs brushing several times a week plus occasional trimming or hand-stripping, and facial hair should be cleaned regularly. They need moderate daily activity: short walks, play, and puzzle toys.",
        idealHome: "Best for adults or families with older, respectful children. Ideal for someone who wants a small dog with a bold personality and who can commit to regular grooming.",
        funFact: "The name 'Affenpinscher' comes from German and means 'monkey terrier' because of their facial expression.",
        profileLink: 'dog breeds/Affenpinscher.html'
    },

    {
        id: 'afghan-hound',
        name: 'Afghan Hound',
        image: 'https://eleveurs.ca/storage/user_ZoPza5yzkG/3145/L%C3%A9vrier-Afghan-L%27%C3%A9l%C3%A9gance.jpg',
        size: 'large',
        coat: 'long',
        temperament: ['independent', 'elegant', 'sensitive', 'aloof'],
        origin: 'afghanistan',
        weight: '50–60 lb (23–27 kg)',
        lifespan: '12–15 years',
        about: "An elegant sighthound with a long, flowing coat and dignified presence. Afghan Hounds are intelligent and sensitive, often aloof with strangers but affectionate with their families.",
        care: "Their long silky coat requires daily brushing and regular baths to prevent mats and tangles. They need moderate exercise with space to run safely, plus gentle, patient training because they are sensitive and not always eager to please.",
        idealHome: "Best for experienced owners who appreciate their independent nature, can handle intensive coat care, and provide secure areas for running.",
        funFact: "Afghan Hounds are one of the oldest known dog breeds and were originally used to hunt in the mountains and deserts of Afghanistan.",
        profileLink: 'dog breeds/AfghanHound.html'
    },

    {
        id: 'airedale-terrier',
        name: 'Airedale Terrier',
        image: 'https://eu-central-1.graphassets.com/AnwjgMYRvQfWK3bRPjoq3z/resize=height:404,width:718/output=format:webp/8PGsAL36TPyvcr92kdK9',
        size: 'large',
        coat: 'rough',
        temperament: ['confident', 'outgoing', 'intelligent', 'playful'],
        origin: 'united kingdom',
        weight: '40–65 lb (18–29 kg)',
        lifespan: '11–14 years',
        about: "Known as the 'King of Terriers', the Airedale is the largest terrier breed. They are confident, outgoing, highly intelligent, and versatile working and family dogs.",
        care: "They have a dense, wiry coat that needs regular brushing and periodic hand-stripping or clipping. High energy and smart, they require plenty of daily exercise and mental work such as training, games, and jobs.",
        idealHome: "Great for active families who want an energetic, playful dog and are willing to provide ongoing training and stimulation.",
        funFact: "Airedales have served as police dogs, war dogs, and hunting companions, showing how versatile they are.",
        profileLink: 'dog breeds/Airedale.html'
    },

    {
        id: 'akita',
        name: 'Akita',
        image: 'https://www.vidavetcare.com/wp-content/uploads/sites/234/2022/04/akita-dog-breed-info.jpeg',
        size: 'large',
        coat: 'double',
        temperament: ['dignified', 'loyal', 'courageous', 'independent'],
        origin: 'japan',
        weight: '70–130 lb (32–59 kg)',
        lifespan: '10–13 years',
        about: "A powerful, dignified spitz-type breed from Japan, Akitas are loyal, protective, and reserved with strangers but deeply devoted to their families.",
        care: "Their thick double coat sheds heavily, especially seasonally, and needs regular brushing. They require moderate daily exercise, firm but respectful training, and very early socialization to manage their strong guarding and prey instincts.",
        idealHome: "Best for experienced owners without multiple small children or many unfamiliar visitors, who can provide structure, leadership, and consistent training.",
        funFact: "In Japan, Akitas are symbols of good health, happiness, and long life, and small Akita statues are often given as gifts.",
        profileLink: 'dog breeds/Akita.html'
    },

    {
        id: 'alaskan-klee-kai',
        name: 'Alaskan Klee Kai',
        image: 'https://www.dailypaws.com/thmb/nP0gxEuNnl2bKyTEYpRs5CxfyFY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/alaskan-klee-kai-brick-wall-1301601151-2000-0ea483eb888640be88a8b4ffead6a01d.jpg',
        size: 'small',
        coat: 'double',
        temperament: ['intelligent', 'alert', 'energetic', 'reserved'],
        origin: 'united states',
        weight: '5–22 lb (2–10 kg)',
        lifespan: '13–16 years',
        about: "A smaller, companion version of northern sled dogs, the Alaskan Klee Kai is alert, intelligent, and energetic, with a fox-like face and often a shy or reserved attitude toward strangers.",
        care: "They have a thick double coat that sheds moderately and heavily during seasonal sheds; regular brushing is important. They need daily walks, play, and mental challenges like training and puzzle toys to prevent boredom.",
        idealHome: "Best for active people or families with older children, who understand sensitive, high-energy, vocal dogs and can manage their shyness and strong mind.",
        funFact: "The breed name 'Klee Kai' comes from an Inuit term meaning 'small dog'.",
        profileLink: 'dog breeds/AlaskanKleeKai.html'
    },

    {
        id: 'alaskan-malamute',
        name: 'Alaskan Malamute',
        image: 'https://pet-health-content-media.chewy.com/wp-content/uploads/2024/09/11180751/202105iStock-1257427111-scaled-1.jpg',
        size: 'large',
        coat: 'double',
        temperament: ['friendly', 'independent', 'strong-willed', 'affectionate'],
        origin: 'united states',
        weight: '75–85 lb (34–39 kg), sometimes more',
        lifespan: '10–14 years',
        about: "A powerful Arctic sled dog, the Alaskan Malamute is friendly, affectionate, and pack-oriented but also strong-willed and independent.",
        care: "They have a very thick double coat that sheds heavily, especially during coat blows, and needs frequent brushing. They require 1–2 hours of daily exercise such as long walks, hiking, or pulling activities, plus mental stimulation. In hot weather, exercise must be carefully managed.",
        idealHome: "Ideal for active families in cooler climates who can handle a large, strong dog with high exercise needs and lots of shedding.",
        funFact: "Malamutes were originally bred by the native Mahlemiut people of Alaska to haul heavy loads over long distances.",
        profileLink: 'dog breeds/AlaskanMalamute.html'
    },

    {
        id: 'american-bulldog',
        name: 'American Bulldog',
        image: 'https://www.carecredit.com/sites/cc/image/american_bulldog_hero.jpg',
        size: 'large',
        coat: 'short',
        temperament: ['confident', 'loyal', 'protective', 'athletic'],
        origin: 'united states',
        weight: '60–120 lb (27–54 kg)',
        lifespan: '10–12 years',
        about: "An athletic, powerful farm and guardian dog, the American Bulldog is confident, loyal, and affectionate with family while naturally protective.",
        care: "They have a short, low-maintenance coat that needs weekly brushing and occasional baths. They require 45–90 minutes of daily exercise, consistent training from an early age, and thorough socialization with people and other dogs.",
        idealHome: "Best for experienced owners or active families who can provide structure, training, and plenty of exercise, and supervise interactions with small children.",
        funFact: "American Bulldogs were historically used as farm utility dogs, helping with tasks like catching cattle and protecting property.",
        profileLink: 'dog breeds/AmericanBulldog.html'
    },

    {
        id: 'american-english-coonhound',
        name: 'American English Coonhound',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6HEXI0vLgUY9_O2OfnvyMxTrp45BjmQ2eFA&s',
        size: 'large',
        coat: 'short',
        temperament: ['energetic', 'friendly', 'sociable', 'vocal'],
        origin: 'united states',
        weight: '40–65 lb (18–29 kg)',
        lifespan: '11–12 years',
        about: "A fast, loud, and determined scent hound bred for hunting raccoons, this breed is friendly, affectionate with family, and very energetic.",
        care: "They have a short, easy-care coat but need regular ear cleaning. They require 1–2 hours of daily, vigorous exercise and mental work such as tracking, long walks, and games, or they can become bored and noisy.",
        idealHome: "Best for very active homes that enjoy outdoor life and don’t mind a dog that bays and howls, with secure fencing and training.",
        funFact: "Their strong scent drive means they love to follow their nose and may ignore recall if off-leash in an open, unfenced area.",
        profileLink: 'dog breeds/AmericanEnglishCoonhound.html'
    },

    {
        id: 'american-eskimo-dog',
        name: 'American Eskimo Dog',
        image: 'https://articles.hepper.com/wp-content/uploads/2022/11/American-Eskimo-dog_Cameron-Archibald_Shutterstock.jpg',
        size: 'medium',
        coat: 'double',
        temperament: ['intelligent', 'alert', 'social', 'playful'],
        origin: 'united states',
        weight: '6–35 lb (2.7–16 kg, depending on size variety)',
        lifespan: '12–15 years',
        about: "A fluffy white spitz-type dog, the American Eskimo is smart, social, playful, and often vocal. They love being with their people and excel at learning tricks.",
        care: "They have a dense double coat that sheds and needs brushing several times a week (daily during shedding seasons). They require 30–60 minutes of daily exercise plus mental stimulation such as training, agility, and games.",
        idealHome: "Perfect for families who want an active, people-oriented, trainable dog and don’t mind some shedding and barking.",
        funFact: "American Eskimo Dogs were once popular circus performers thanks to their intelligence and eagerness to learn tricks.",
        profileLink: 'dog breeds/AmericanEskimoDog.html'
    },

    {
        id: 'american-foxhound',
        name: 'American Foxhound',
        image: 'https://i.cdn.newsbytesapp.com/images/l10420250117113106.png',
        size: 'large',
        coat: 'short',
        temperament: ['gentle', 'friendly', 'independent', 'energetic'],
        origin: 'united states',
        weight: '60–70 lb (27–32 kg)',
        lifespan: '11–13 years',
        about: "A lean, athletic scent hound developed for fox hunting, the American Foxhound is gentle, social, and very energetic with a strong prey and scent drive.",
        care: "They have a short, low-maintenance coat but need regular ear care. They require at least 1–2 hours of daily exercise, including long walks, runs, and scent games, and mental stimulation to prevent boredom and destructive or vocal behavior.",
        idealHome: "Best for active families in rural or suburban areas who can handle a loud, energetic dog and provide secure outdoor space.",
        funFact: "American Foxhounds are closely tied to early American history and were favored by George Washington.",
        profileLink: 'dog breeds/AmericanFoxHound.html'
    },

    {
        id: 'american-hairless-terrier',
        name: 'American Hairless Terrier',
        image: 'https://consumer-cms.petfinder.com/sites/default/files/images/content/American%20Hairless%20Terrier%204.jpg',
        size: 'small',
        coat: 'hairless',
        temperament: ['playful', 'alert', 'curious', 'affectionate'],
        origin: 'united states',
        weight: '12–16 lb (5.5–7.5 kg)',
        lifespan: '14–16 years',
        about: "A small, lively terrier that often comes hairless, making it a unique choice for people who prefer very low shedding. They are playful, bright, and affectionate family dogs.",
        care: "Hairless dogs need special skin care: gentle bathing, sun protection, and warmth in cold weather. They need daily walks and play, mental games, and early socialization and obedience training.",
        idealHome: "Great for families who want a small, active dog, can be gentle with a smaller breed, and are willing to manage skin and temperature care.",
        funFact: "The American Hairless Terrier developed from a single hairless Rat Terrier puppy born in Louisiana in the 1970s.",
        profileLink: 'dog breeds/AmericanHairlessTerrier.html'
    },

    {
        id: 'american-leopard-hound',
        name: 'American Leopard Hound',
        image: 'https://thumbs.dreamstime.com/b/portrait-leopard-hound-dog-green-246296696.jpg',
        size: 'large',
        coat: 'short',
        temperament: ['energetic', 'intelligent', 'independent', 'affectionate'],
        origin: 'united states',
        weight: '35–75 lb (16–34 kg)',
        lifespan: '12–15 years',
        about: "A rugged, spotted hunting and treeing dog, the American Leopard Hound is energetic, intelligent, independent, and devoted to its family.",
        care: "They have a short coat and moderate shedding, needing weekly brushing. High energy means daily vigorous exercise such as running, hiking, and scent work, plus mental challenges. Early socialization is important.",
        idealHome: "Best for very active owners with secure space and an interest in outdoor activities or dog sports.",
        funFact: "Their striking merle or leopard-patterned coats and strong hunting abilities make them stand out among American hounds.",
        profileLink: 'dog breeds/AmericanLeopardHound.html'
    },

    {
        id: 'american-staffordshire-terrier',
        name: 'American Staffordshire Terrier',
        image: 'https://www.zooplus.co.uk/magazine/wp-content/uploads/2025/04/AdobeStock_219130672.webp',
        size: 'medium',
        coat: 'short',
        temperament: ['confident', 'loyal', 'affectionate', 'courageous'],
        origin: 'united states',
        weight: '40–70 lb (18–32 kg)',
        lifespan: '12–16 years',
        about: "A muscular, powerful breed that is also people-oriented, affectionate, and eager to please. With proper training and socialization, they are loyal family companions.",
        care: "They have a short, smooth coat that needs minimal grooming. They require 1–2 hours of daily exercise, mental stimulation, consistent positive training, and thorough socialization with people and other dogs.",
        idealHome: "Best for confident owners who are committed to training, socializing, and providing plenty of exercise and attention.",
        funFact: "Despite their tough appearance, many AmStaffs are big softies with their families and love cuddling.",
        profileLink: 'dog breeds/AmericanStaffordshire.html'
    },

    {
        id: 'american-water-spaniel',
        name: 'American Water Spaniel',
        image: 'https://www.purina.com/sites/default/files/styles/social_share/public/2025-09/american_water_spaniel_1.jpg?h=82f92a78&itok=wrtguDq-',
        size: 'medium',
        coat: 'curly',
        temperament: ['friendly', 'energetic', 'intelligent', 'affectionate'],
        origin: 'united states',
        weight: '25–45 lb (11–20 kg)',
        lifespan: '10–12 years',
        about: "A versatile hunting and retrieving dog, especially fond of water work. American Water Spaniels are friendly, energetic, and closely bonded to their families.",
        care: "They have a dense, water-resistant, curly or wavy coat that needs regular brushing and occasional trimming. They enjoy swimming, retrieving, hikes, and need at least an hour of daily exercise plus mental stimulation.",
        idealHome: "Great for active families who enjoy outdoor activities, especially near water, and want a medium-sized, devoted companion.",
        funFact: "The American Water Spaniel is one of the few breeds developed specifically in the United States for hunting from small boats.",
        profileLink: 'dog breeds/AmericanWaterSpaniel.html'
    },

    {
        id: 'anatolian-shepherd-dog',
        name: 'Anatolian Shepherd Dog',
        image: 'https://consumer-cms.petfinder.com/sites/default/files/images/content/Anatolian%20Shepherd%20Dog%204.jpg',
        size: 'giant',
        coat: 'double',
        temperament: ['independent', 'protective', 'loyal', 'calm'],
        origin: 'turkey',
        weight: '90–150+ lb (41–68+ kg)',
        lifespan: '11–13 years',
        about: "A large livestock guardian breed, the Anatolian Shepherd is independent, calm, and highly protective of its flock and family.",
        care: "They have a short to medium double coat that sheds seasonally and needs regular brushing. They require moderate daily exercise, early and ongoing socialization, and consistent training to manage their strong guarding instincts.",
        idealHome: "Best for rural homes or properties needing a guardian, with experienced owners who respect their independence and size.",
        funFact: "Anatolian Shepherds have been used to protect livestock from predators like wolves and even cheetahs.",
        profileLink: 'dog breeds/AnatolianShepherdDog.html'
    },

    {
        id: 'appenzeller-sennenhund',
        name: 'Appenzeller Sennenhund',
        image: 'https://cdn-fastly.petguide.com/media/2022/02/16/8205092/appenzeller-sennenhunde.jpg?size=720x845&nocrop=1',
        size: 'medium',
        coat: 'double',
        temperament: ['energetic', 'intelligent', 'alert', 'loyal'],
        origin: 'switzerland',
        weight: '48–55 lb (22–25 kg)',
        lifespan: '12–14 years',
        about: "One of the four Swiss mountain dog breeds, the Appenzeller is energetic, confident, vocal, and an excellent farm and family dog.",
        care: "They have a short to medium double coat that needs weekly brushing and more during shedding season. They need 1–2 hours of daily vigorous exercise and mental tasks like herding games, obedience, or agility.",
        idealHome: "Ideal for active homes that can provide lots of exercise, training, and a job to do.",
        funFact: "Appenzellers were traditionally used for herding cattle and pulling carts in the Swiss Alps.",
        profileLink: 'dog breeds/AppenzellerSennenhund.html'
    },

    {
        id: 'australian-cattle-dog',
        name: 'Australian Cattle Dog',
        image: 'https://image.petmd.com/files/styles/863x625/public/2022-10/Australian_Cattle_Dog.jpeg',
        size: 'medium',
        coat: 'double',
        temperament: ['energetic', 'loyal', 'intelligent', 'alert'],
        origin: 'australia',
        weight: '35–50 lb (16–23 kg)',
        lifespan: '12–16 years',
        about: "A tough, tireless herding dog developed to move cattle over long distances, the Australian Cattle Dog is extremely energetic, intelligent, and loyal.",
        care: "They have a short, dense double coat that sheds, especially seasonally, and needs brushing. They require 1.5–2+ hours of daily vigorous exercise and mental work such as obedience, agility, or herding games.",
        idealHome: "Best for very active, experienced owners who want a work-driven dog and can handle strong herding instincts, including nipping.",
        funFact: "They are sometimes called 'Blue Heelers' or 'Red Heelers' depending on their coat color.",
        profileLink: 'dog breeds/AustralianCattledog.html'
    },

    {
        id: 'australian-kelpie',
        name: 'Australian Kelpie',
        image: 'https://images.ctfassets.net/440y9b545yd9/3pRA8hd6Wf1MbZQQRUAC8M/441f590202d2f2f8f9433d3f28a0ea2a/Australian_kelpie850.jpg',
        size: 'medium',
        coat: 'short',
        temperament: ['energetic', 'intelligent', 'loyal', 'hardworking'],
        origin: 'australia',
        weight: '25–45 lb (11–20 kg)',
        lifespan: '12–15 years',
        about: "A highly driven herding dog, the Australian Kelpie is energetic, intelligent, and bred to work sheep all day in tough conditions.",
        care: "They have a short double coat needing minimal grooming but shed seasonally. They require 1.5–2+ hours of intense daily exercise and mental challenges such as herding work, agility, or advanced training.",
        idealHome: "Best for working homes or very active owners who want a high-drive performance dog and can keep them busy.",
        funFact: "Kelpies can work huge flocks of sheep almost single-handedly, often running along the backs of the flock.",
        profileLink: 'dog breeds/AustralianKelpie.html'
    },

    {
        id: 'australian-shepherd',
        name: 'Australian Shepherd',
        image: 'https://www.akc.org/wp-content/uploads/2017/11/Australian-Shepherd.1.jpg',
        size: 'medium',
        coat: 'double',
        temperament: ['intelligent', 'energetic', 'loyal', 'affectionate'],
        origin: 'united states',
        weight: '40–65 lb (18–29 kg)',
        lifespan: '12–15 years',
        about: "Despite the name, the Australian Shepherd was developed in the United States. They are highly intelligent, energetic, and eager to work, with strong herding instincts.",
        care: "They have a medium-length double coat that sheds year-round and more heavily seasonally, requiring regular brushing. They need 1.5–2+ hours of daily exercise plus mental work like obedience, trick training, or dog sports.",
        idealHome: "Ideal for very active families or individuals who can involve them in daily activities and structured training.",
        funFact: "Aussies are popular in dog sports like agility, frisbee, and obedience because of their speed and trainability.",
        profileLink: 'dog breeds/AustralianShepherd.html'
    },

    {
        id: 'australian-stumpy-tail-cattle-dog',
        name: 'Australian Stumpy Tail Cattle Dog',
        image: 'https://www.dogpackapp.com/blog/wp-content/uploads/2024/10/australian-stumpy-tail-cattle-dog-lawn.webp',
        size: 'medium',
        coat: 'short',
        temperament: ['energetic', 'loyal', 'alert', 'strong-willed'],
        origin: 'australia',
        weight: '35–50 lb (16–23 kg)',
        lifespan: '12–15 years',
        about: "Closely related to the Australian Cattle Dog, this breed is distinguished by its naturally short tail. They are intense, hardworking herders with high energy and intelligence.",
        care: "They have a short coat requiring minimal grooming but shed seasonally. Extremely high energy, they need 1.5–2+ hours of daily vigorous exercise and mental work.",
        idealHome: "Best for working or sport homes that can provide a job, firm training, and lots of activity.",
        funFact: "The 'stumpy tail' is natural, not docked, in many dogs of this breed.",
        profileLink: 'dog breeds/AustralianStumpyTailCattledog.html'
    },

    {
        id: 'australian-terrier',
        name: 'Australian Terrier',
        image: 'https://cdn.britannica.com/29/128429-050-7D0D0231/Norwich-terrier.jpg',
        size: 'small',
        coat: 'rough',
        temperament: ['alert', 'spirited', 'affectionate', 'brave'],
        origin: 'australia',
        weight: '14–16 lb (6–7 kg)',
        lifespan: '12–15 years',
        about: "A small but tough terrier, the Australian Terrier is alert, brave, and affectionate, originally bred for vermin control and companionship.",
        care: "They have a wiry, dense coat that needs brushing several times a week and occasional hand-stripping or trimming. Exercise needs are moderate: daily walks, play, and mental stimulation.",
        idealHome: "Great for families or individuals who want a small, spirited dog and are gentle with smaller breeds.",
        funFact: "The Australian Terrier was one of the first Australian breeds to be officially recognized.",
        profileLink: 'dog breeds/AustralianTerrier.html'
    },

    {
        id: 'azawakh',
        name: 'Azawakh',
        image: 'https://www.akc.org/wp-content/uploads/2017/11/Azawakh_178091272.jpg',
        size: 'large',
        coat: 'short',
        temperament: ['independent', 'loyal', 'reserved', 'graceful'],
        origin: 'west africa',
        weight: '33–55 lb (15–25 kg)',
        lifespan: '12–15 years',
        about: "A tall, slender sighthound from the Sahel region of West Africa, the Azawakh is independent, loyal, and deeply bonded to its family but aloof with strangers.",
        care: "They have a very short, fine coat needing minimal grooming but are sensitive to cold and rough surfaces. They need at least an hour of daily exercise including opportunities to sprint in a secure area, plus careful socialization and gentle training.",
        idealHome: "Best for experienced owners who understand sighthounds, can manage their sensitivity and independence, and provide warmth in cold climates.",
        funFact: "Azawakhs are sometimes called '45-mph couch potatoes' — fast outdoors but calm indoors once exercised.",
        profileLink: 'dog breeds/Azawakh.html'
    },

    {
        id: 'barbado-da-terceira',
        name: 'Barbado da Terceira',
        image: 'https://www.dogpackapp.com/blog/wp-content/uploads/2024/09/barbado-da-terceira-in-nature.webp',
        size: 'large',
        coat: 'long',
        temperament: ['courageous', 'docile', 'intelligent', 'vigilant'],
        origin: 'portugal',
        weight: '46–66 lb (21–30 kg)',
        lifespan: '11–13 years',
        about: "A rare herding breed from Terceira Island in the Azores, the Barbado da Terceira is a hardworking, intelligent dog that forms strong bonds with its family and is naturally watchful.",
        care: "They have a long, corded or heavily textured coat that is high-maintenance and needs regular, careful grooming to prevent matting, including separating cords and thorough drying after getting wet. They require daily exercise, mental stimulation, and training.",
        idealHome: "Best for active families who want a herding breed and are prepared for intensive coat care and regular exercise.",
        funFact: "Their unique coat and working ability have made them prized farm and herding dogs in their island homeland.",
        profileLink: 'dog breeds/BarbadoDaTerceira.html'
    },
    {
        id: 'beagle',
        name: 'Beagle',
        image: 'https://content.lyka.com.au/f/1016262/1104x676/e36872ce32/beagle.png/m/640x427/smart/filters:format(webp)',
        size: 'medium',
        coat: 'short',
        temperament: ['friendly', 'curious', 'merry', 'determined'],
        origin: 'england',
        weight: '20–30 lb (9–14 kg)',
        lifespan: '10–15 years',
        about: "The Beagle is a friendly, curious scent hound with a famously strong sense of smell and a lively, joyful personality. Known for their expressive faces and vocal nature, they are excellent family dogs.",
        care: "They require portion-controlled feeding to avoid weight gain, weekly coat brushing, regular ear cleaning, patience during training, and lots of sniff-based mental exercise such as tracking games and walks.",
        idealHome: "Perfect for families, especially with kids, who want a gentle, playful dog and are prepared for their barking, stubborn moments, and need for daily activity.",
        funFact: "A Beagle’s nose has around 220 million scent receptors, making them one of the best sniffers in the dog world!",
        profileLink: 'dog breeds/Beagle.html'
    },

    {
        id: 'bernese-mountain-dog',
        name: 'Bernese Mountain Dog',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST_b6tdGqfc_Go_bVWNNg86_Efa5TPwQ8JMw&s',
        size: 'giant',
        coat: 'double',
        temperament: ['gentle', 'affectionate', 'calm', 'loyal'],
        origin: 'switzerland',
        weight: '70–115 lb (32–52 kg)',
        lifespan: '7–10 years',
        about: "The Bernese Mountain Dog is a gentle, loving giant known for its calm nature, devotion, and beautiful tri-colored coat. They are patient, stable family dogs and excellent with children.",
        care: "Their thick double coat needs brushing 2–3 times weekly (daily during seasonal shedding). Feed a high-quality large-breed diet, exercise moderately, avoid heat exposure, and maintain joint and heart checkups.",
        idealHome: "Ideal for families who want a gentle, affectionate companion, live in a cooler climate, and can keep up with regular grooming and a relaxed exercise routine.",
        funFact: "Bernese Mountain Dogs were originally used to pull carts of dairy and farm goods across Swiss farms.",
        profileLink: 'dog breeds/BerneseMountaindog.html'
    },

    {
        id: 'bergamasco-sheepdog',
        name: 'Bergamasco Sheepdog',
        image: 'https://www.dogpackapp.com/blog/wp-content/uploads/2024/10/bergamasco-sheepdog-field.webp',
        size: 'large',
        coat: 'long',
        temperament: ['patient', 'intelligent', 'observant', 'loyal'],
        origin: 'italy',
        weight: '57–84 lb (26–38 kg)',
        lifespan: '13–15 years',
        about: "The Bergamasco is a calm, intelligent herding dog famous for its unique coat of natural 'flocks' (cords). They are loyal, patient, and gentle, thriving as devoted family companions.",
        care: "Their coat requires special care: cords must be separated, kept clean, and thoroughly dried. They need moderate daily exercise, early socialization, and steady, positive training.",
        idealHome: "Best for families who appreciate a calm but alert guardian, can manage coat maintenance, and want a loyal, steady companion.",
        funFact: "Despite their heavy-looking coat, Bergamascos shed very little once the flocks are fully formed.",
        profileLink: 'dog breeds/BergamascoSheepdog.html'
    },
    {
        id: 'biewer-terrier',
        name: 'Biewer Terrier',
        image: 'https://dogacademy.org/blog/wp-content/uploads/2023/10/biewer-terrier-running-with-golf-ball.jpg',
        size: 'small',
        coat: 'long',
        temperament: ['playful', 'affectionate', 'inquisitive', 'gentle'],
        origin: 'germany',
        weight: '4–8 lb (2–4 kg)',
        lifespan: '16+ years',
        about: "A cheerful, loving toy breed with a beautiful long, silky coat. Biewer Terriers are playful, alert, and less yappy than many terriers, making them delightful companions.",
        care: "Their long coat requires daily brushing and regular baths to stay tangle-free. They need gentle exercise, socialization, positive training, and careful handling due to their tiny size.",
        idealHome: "Perfect for adults or families with older, gentle children who want a small, affectionate companion and can maintain regular grooming.",
        funFact: "The breed began from a single rare puppy born in a Yorkshire Terrier litter in Germany.",
        profileLink: 'dog breeds/BiewerTerrier.html'
    },

    {
        id: 'bolognese',
        name: 'Bolognese',
        image: 'https://www.dogster.com/wp-content/uploads/2019/11/bolognese-outdoor.jpg',
        size: 'small',
        coat: 'long',
        temperament: ['loyal', 'calm', 'devoted', 'gentle'],
        origin: 'italy',
        weight: '5.5–9 lb (2.5–4 kg)',
        lifespan: '12–14 years',
        about: "The Bolognese is a sweet, calm, devoted companion dog with a fluffy cotton-like coat. They bond deeply with their owners and thrive on affection and closeness.",
        care: "Their long, soft coat requires daily brushing and professional grooming. They need gentle exercise, social interaction, and early training to prevent separation anxiety.",
        idealHome: "Great for quiet households, retirees, or families with older children who want a loving lapdog and can provide companionship throughout the day.",
        funFact: "The Bolognese was a favorite lapdog of European nobility and often gifted among royalty.",
        profileLink: 'dog breeds/Bolognese.html'
    },
    {
        id: 'boerboel',
        name: 'Boerboel',
        image: 'https://jordandogtraining.com.au/wp-content/uploads/2025/06/Boerbull-800x534.webp',
        size: 'giant',
        coat: 'short',
        temperament: ['confident', 'dominant', 'loyal', 'fearless'],
        origin: 'south africa',
        weight: '110–200 lb (50–91 kg)',
        lifespan: '9–11 years',
        about: "A powerful South African mastiff bred as a farm guardian. Boerboels are stable, intelligent, and extremely loyal to their families.",
        care: "Low coat maintenance but requires firm, consistent training and heavy early socialization. Daily moderate activity is essential.",
        idealHome: "Experienced owners only. Best for large properties and families who understand guardian breeds and can provide structure.",
        funFact: "The name 'Boerboel' means 'farmer's dog' in Afrikaans, reflecting its working origins.",
        profileLink: 'dog breeds/Boerboel.html'
    },
    {
        id: 'chihuahua',
        name: 'Chihuahua',
        image: 'https://cdn05.zipify.com/tkRa741txC_y6bLjIhwYg7VSc18=/fit-in/3840x0/902277ac20b349afb8089d51d130b76b/5.jpeg',
        size: 'small',
        coat: 'short',
        temperament: ['alert', 'charming', 'bold', 'devoted'],
        origin: 'mexico',
        weight: '2–6 lb (1–2.7 kg)',
        lifespan: '12–14 years',
        about: "The smallest dog breed in the world, full of personality and loyalty. Chihuahuas bond closely with their people and can be bold despite their size.",
        care: "Smooth coats require minimal brushing; long coats need brushing 2–3 times weekly. Very sensitive to cold. Needs gentle training and extensive socialization.",
        idealHome: "Best for adults or families with older gentle children. Perfect for apartment living and owners seeking a small, affectionate companion.",
        funFact: "Chihuahuas were sacred to the ancient Toltec and Aztec civilizations.",
        profileLink: 'dog breeds/Chihuahua.html'
    },
    {
        id: 'cavalier-king-charles-spaniel',
        name: 'Cavalier King Charles Spaniel',
        image: 'https://www.dailypaws.com/thmb/1M_3_30QiwVnj6MwFSUWe1utQ84=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/tan-white-cavalier-king-charles-reoutch-685086913-92a7f2e6c89d4c52be6a732d89c1251c.jpg',
        size: 'small',
        coat: 'long',
        temperament: ['gentle', 'affectionate', 'friendly', 'sensitive'],
        origin: 'united kingdom',
        weight: '13–18 lb (6–8 kg)',
        lifespan: '12–15 years',
        about: "A sweet, elegant toy spaniel known for its loving nature and constantly wagging tail. Cavaliers are affectionate, social, and adaptable to many lifestyles.",
        care: "Brush every other day, especially the ears and feathering. Clean ears weekly. Provide daily walks and interactive play. Monitor weight and heart health closely.",
        idealHome: "Perfect for families, seniors, and anyone seeking a gentle, cuddly companion who loves being with people.",
        funFact: "Cavaliers were named after King Charles II, who adored toy spaniels and reportedly took them everywhere—even to Parliament!",
        profileLink: 'dog breeds/CavalierKingCharlesSpaniel.html'
    },

    {
        id: 'doberman-pinscher',
        name: 'Doberman Pinscher',
        image: 'https://www.carecredit.com/sites/cc/image/hero_doberman_pinscher.jpg',
        size: 'large',
        coat: 'short',
        temperament: ['loyal', 'fearless', 'alert', 'intelligent'],
        origin: 'germany',
        weight: '60–100 lb (27–45 kg)',
        lifespan: '10–12 years',
        about: "A powerful, loyal, and highly intelligent working breed known for its protective instincts and devotion to family.",
        care: "Low grooming needs, but they require 1–2 hours of daily vigorous exercise and mental work. Early socialization and consistent positive training are essential.",
        idealHome: "Best for experienced, active owners who can provide structure, leadership, and plenty of physical and mental activity.",
        funFact: "The breed was created by a German tax collector, Louis Dobermann, who wanted the perfect personal protection dog.",
        profileLink: 'dog breeds/DobermanPinscher.html'
    },
    {
        id: 'english-cocker-spaniel',
        name: 'English Cocker Spaniel',
        image: 'https://www.petpost.com.au/_next/image?url=https%3A%2F%2Fstrapi-petpost-prod-media-library.s3.ap-southeast-2.amazonaws.com%2Fcocker_spaniel_8319336d23.jpg&w=3840&q=75',
        size: 'medium',
        coat: 'long',
        temperament: ['friendly', 'energetic', 'affectionate', 'intelligent'],
        origin: 'united kingdom',
        weight: '26–34 lb (12–16 kg)',
        lifespan: '12–14 years',
        about: "A merry, affectionate spaniel known for its wagging tail, gentle personality, and sporting drive. They are lively family companions with strong hunting instincts.",
        care: "Brush 2–3 times weekly and clean ears regularly. Provide 1 hour of exercise daily including play and training. Grooming every 6–8 weeks helps maintain their coat.",
        idealHome: "Perfect for active families seeking a gentle, playful dog who enjoys both cuddles and outdoor adventures.",
        funFact: "The breed name comes from hunting woodcock—one of their original field roles.",
        profileLink: 'dog breeds/EnglishCockerSpaniel.html'
    },
    {
        id: 'english-springer-spaniel',
        name: 'English Springer Spaniel',
        image: 'https://www.zooplus.co.uk/magazine/wp-content/uploads/2025/03/English-Springer-Spaniel-Glucklich-1024x682-1.webp',
        size: 'medium',
        coat: 'long',
        temperament: ['friendly', 'energetic', 'eager-to-please', 'intelligent'],
        origin: 'united kingdom',
        weight: '40–50 lb (18–23 kg)',
        lifespan: '12–14 years',
        about: "A high-energy sporting dog known for enthusiasm, intelligence, and a loving nature. Springers excel in hunting, agility, and active family life.",
        care: "Brush 2–3 times weekly and clean ears often. Needs 1–2 hours of vigorous exercise including running, swimming, and retrieving.",
        idealHome: "Best for sporty families who want an energetic partner for outdoor adventures.",
        funFact: "Springers get their name from ‘springing’ game—flushing birds into the air during hunts.",
        profileLink: 'dog breeds/EnglishSpringerSpaniel.html'

    },


    {
        id: 'french-bulldog',
        name: 'French Bulldog',
        image: 'https://www.ellevetsciences.com/wp-content/uploads/2022/04/EV_BLOG_FrenchBullDogs_Header-1024x717.jpg',
        size: 'small',
        coat: 'short',
        temperament: ['affectionate', 'playful', 'alert', 'easygoing'],
        origin: 'france',
        weight: 'Under 28 lb (13 kg)',
        lifespan: '10–12 years',
        about: "A charming, affectionate small companion known for its bat-like ears, calm nature, and love for attention. French Bulldogs thrive on human companionship and adapt well to city living.",
        care: "Requires weekly brushing and daily cleaning of facial folds. Needs controlled exercise and careful monitoring in hot weather due to breathing issues. Feed a balanced diet to avoid weight gain.",
        idealHome: "Perfect for families, seniors, or apartment dwellers wanting a low-exercise, affectionate companion. Best for homes that can provide a cool environment and gentle exercise.",
        funFact: "Despite the name, French Bulldogs actually originated from small English Bulldogs brought to France by lace workers.",
        profileLink: 'dog breeds/FrenchBulldog.html'

    },
    {
        id: 'flat-coated-retriever',
        name: 'Flat-Coated Retriever',
        image: 'https://image.petmd.com/files/styles/863x625/public/2023-09/flat-coated-retriever.jpg;',
        size: 'large',
        coat: 'long',
        temperament: ['cheerful', 'outgoing', 'energetic', 'sensitive'],
        origin: 'united kingdom',
        weight: '55–80 lb (25–36 kg)',
        lifespan: '8–10 years',
        about: "A joyful, optimistic retriever known for its forever-young personality and strong desire to please. Friendly, playful, and affectionate, they make devoted family companions.",
        care: "Brush 2–3 times weekly, more during shedding. Provide 1–2 hours of exercise daily, including running, swimming, and retrieving. Continue mental training because they stay puppy-like for years.",
        idealHome: "Best for active families who enjoy outdoor adventures and want a highly social, enthusiastic dog.",
        funFact: "Often called the 'Peter Pan' of dog breeds because they stay youthful and playful well into adulthood.",
        profileLink: 'dog breeds/FlatCoatedRetriever.html'

    },



    {
        id: 'golden-retriever',
        name: 'Golden Retriever',
        image: 'https://images.squarespace-cdn.com/content/v1/55ede48ee4b0f67fc8251118/1612268124443-5Z5DPY42GV65GKJ9O4ZN/Golden+retriever+at+beach',
        size: 'large',
        coat: 'double',
        temperament: ['friendly', 'intelligent', 'devoted', 'gentle'],
        origin: 'scotland',
        weight: '55–75 lb (25–34 kg)',
        lifespan: '10–12 years',
        about: "Golden Retrievers are friendly, intelligent, and one of the most beloved family dogs. They are gentle, trainable, and known for their stable temperament and eagerness to please.",
        care: "They shed heavily and need brushing several times weekly. Provide daily exercise, training, mental stimulation, a balanced diet, and regular vet checks for joints and allergies.",
        idealHome: "Perfect for active families who want a gentle, playful, loyal companion and can meet their physical and mental exercise needs.",
        funFact: "Golden Retrievers are excellent swimmers thanks to their water-repellent coats and strong tails used like a rudder.",
        profileLink: 'dog breeds/GoldenRetriever.html'

    },
    {
        id: 'irish-red-and-white-setter',
        name: 'Irish Red and White Setter',
        image: 'https://irishredandwhitesetterclub.com/wp-content/uploads/2023/09/HealthBonfield23.jpg',
        size: 'large',
        coat: 'long',
        temperament: ['energetic', 'loyal', 'intelligent', 'gentle'],
        origin: 'ireland',
        weight: '40–70 lb (18–32 kg)',
        lifespan: '11–15 years',
        about: "A high-energy hunting and family dog known for its intelligence, affectionate nature, and strong work ethic. They are athletic, gentle, and bond deeply with family.",
        care: "Brush 2–3 times weekly, especially the feathering. Provide 1–2 hours of vigorous daily exercise including running and field activities. Early training and socialization are essential.",
        idealHome: "Best for active families or outdoorsy owners who can offer lots of exercise and mental challenges.",
        funFact: "This breed is older than the all-red Irish Setter and played a major role in developing it.",
        profileLink: 'dog breeds/IrishRedAndWhiteSetter.html'

    },


    {
        id: 'indie',
        name: 'Indie (Indian Pariah Dog)',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Dog_00154.JPG/1200px-Dog_00154.JPG',
        size: 'medium',
        coat: 'short',
        temperament: ['alert', 'intelligent', 'independent', 'loyal'],
        origin: 'india',
        weight: '33–55 lb (15–25 kg)',
        lifespan: '13–16 years',
        about: "A natural landrace breed, the Indie is highly intelligent, alert, and incredibly adaptable. They are loyal to their family but often reserved with strangers.",
        care: "Very low grooming needs due to their short coat. They need daily exercise, early socialization, and positive training to manage their strong prey drive and independent nature.",
        idealHome: "Best for homes that understand their sensitive, intelligent nature and can provide exercise, training, and a calm environment.",
        funFact: "The Indie is one of the world's oldest naturally evolved dog breeds, perfectly adapted to the Indian climate.",
        profileLink: 'dog breeds/Indie.html'

    },
    {
        id: 'kai-ken',
        name: 'Kai Ken',
        image: 'https://usserviceanimals.org/blog/wp-content/uploads/2019/07/kai-ken.jpg',
        size: 'medium',
        coat: 'double',
        temperament: ['brave', 'agile', 'loyal', 'alert'],
        origin: 'japan',
        weight: '25–40 lb (11–18 kg)',
        lifespan: '12–15 years',
        about: "A rare Japanese breed from the Kai mountains, known for its tiger-like brindle coat, strong hunting instincts, and loyal, reserved nature.",
        care: "Weekly brushing, daily exercise, mental challenges, and careful socialization. Their double coat sheds heavily seasonally and needs thorough grooming.",
        idealHome: "Active and experienced owners who understand independent, prey-driven breeds. Best with older, respectful children and secure fencing.",
        funFact: "Kai Kens are excellent climbers and swimmers, historically used to hunt deer and boar.",
        profileLink: 'dog breeds/KaiKen.html'

    },
    {
        id: 'keeshond',
        name: 'Keeshond',
        image: 'https://pethelpful.com/.image/w_3840,q_auto:good,c_limit/MjAxOTYxMzM1ODIxNjQxNjUx/keeshond-guide.jpg?arena_f_auto',
        size: 'medium',
        coat: 'double',
        temperament: ['friendly', 'outgoing', 'lively', 'alert'],
        origin: 'netherlands',
        weight: '35–45 lb (16–20 kg)',
        lifespan: '12–15 years',
        about: "A cheerful, fluffy companion dog known as the 'smiling Dutchman'. Keeshonden are friendly, expressive, and deeply people-oriented.",
        care: "Requires thorough brushing 2–3 times weekly, daily during heavy shedding. Needs moderate exercise and positive, gentle training.",
        idealHome: "Excellent for families with kids, first-time owners, and anyone who wants a social, affectionate indoor companion.",
        funFact: "Their distinctive facial markings resemble eyeglasses, giving them a naturally expressive look.",
        profileLink: 'dog breeds/Keeshond.html'

    },
    {
        id: 'newfoundland',
        name: 'Newfoundland',
        image: 'https://image.petmd.com/files/inline-images/newfoundland-4.jpg?VersionId=ZbmWMuLJHQqeATPy00__uyg1qCdrRUHL',
        size: 'giant',
        coat: 'double',
        temperament: ['gentle', 'patient', 'sweet-tempered', 'loyal'],
        origin: 'canada',
        weight: '100–150 lb (45–68 kg)',
        lifespan: '9–10 years',
        about: "A gentle giant known for its calm, sweet nature and natural instinct for water rescue. Newfoundlands are loving, steady, and famously patient with children.",
        care: "High-maintenance coat requiring several brushings per week, daily grooming during shedding season, and careful temperature management due to heat sensitivity. Requires early socialization and gentle, consistent training.",
        idealHome: "Families wanting a gentle, affectionate giant breed. Best for cooler climates and homes with plenty of space and access to water.",
        funFact: "Newfoundlands have webbed feet and incredible swimming ability; they are historically famous for saving lives at sea.",
        profileLink: 'dog breeds/Newfoundland.html'

    },
    {
        id: 'pembroke-welsh-corgi',
        name: 'Pembroke Welsh Corgi',
        image: 'https://cdn.britannica.com/80/232780-050-404D6708/Pembroke-welsh-corgi-dog.jpg',
        size: 'small',
        coat: 'double',
        temperament: ['intelligent', 'alert', 'affectionate', 'bold'],
        origin: 'wales',
        weight: '24–30 lb (11–14 kg)',
        lifespan: '12–13 years',
        about: "A smart, affectionate, and energetic herding breed known for its short legs, long body, and bright expression. They are loyal and outgoing companions.",
        care: "Their double coat sheds heavily year-round and needs regular brushing. They need daily exercise and mental stimulation to prevent boredom and manage herding instincts.",
        idealHome: "Great for families who want a small but active dog and can manage barking and herding behaviors.",
        funFact: "According to Welsh legend, Corgis were the preferred mounts of fairy warriors.",
        profileLink: 'dog breeds/PembrokeWelshCogri.html'

    },
    {
        id: 'romanian-mioritic-shepherd',
        name: 'Romanian Mioritic Shepherd',
        image: 'https://www.akc.org/wp-content/uploads/2018/07/Romanian-Mioritic-Shepherd-Dog-laying-outdoors.jpg',
        size: 'giant',
        coat: 'long',
        temperament: ['calm', 'courageous', 'protective', 'loyal'],
        origin: 'romania',
        weight: '90–130 lb (40–60 kg)',
        lifespan: '12–14 years',
        about: "A powerful livestock guardian with a calm, devoted, and protective nature. Known for deep loyalty to family and natural suspicion of strangers.",
        care: "Long, thick coat requiring brushing 2–3 times per week (daily during shedding). Needs confident, patient training and early socialization. Sensitive to heat.",
        idealHome: "Large rural properties or homes needing a guardian. Best for experienced owners who understand independent guardian breeds.",
        funFact: "This breed’s thick, shaggy coat helps protect it from harsh mountain weather and predators.",
        profileLink: 'dog breeds/RomanianMioriticShepherd.html'

    },
    {
        id: 'russian-tsvetnaya-bolonka',
        name: 'Russian Tsvetnaya Bolonka',
        image: 'https://www.rtbca.com/wp-content/uploads/2022/02/zz-side.jpeg',
        size: 'small',
        coat: 'long',
        temperament: ['playful', 'affectionate', 'alert', 'intelligent'],
        origin: 'russia',
        weight: '4–11 lb (2–5 kg)',
        lifespan: '12–16 years',
        about: "A cheerful, loving toy breed with a soft, non-shedding coat. They are devoted companions, lively, and adaptable to apartment living.",
        care: "High-maintenance coat needing daily brushing and professional grooming every 4–6 weeks. Sensitive and thrives on gentle training and regular socialization.",
        idealHome: "Best for adults or families with older, gentle children. Perfect for apartments and owners wanting a small, affectionate companion.",
        funFact: "The breed was developed during the Soviet era as a companion dog for families living in small urban apartments.",
        profileLink: 'dog breeds/RussianTsvetnayaBolonka.html'

    },
    {
        id: 'russian-toy',
        name: 'Russian Toy',
        image: 'https://dogsvictoria.org.au/media/img/BrowseAllBreed/Russian%20Toy%20(Russkiy%20Toy)%20(Smooth%20Haired)%2001_adobe_express.jpeg',
        size: 'small',
        coat: 'short',
        temperament: ['active', 'playful', 'devoted', 'alert'],
        origin: 'russia',
        weight: 'up to 6.5 lb (3 kg)',
        lifespan: '12–14 years',
        about: "A tiny, lively, and affectionate toy breed with a big personality. Russian Toys are cheerful, sensitive, and extremely devoted to their owners.",
        care: "Smooth coats need light brushing; long coats need 2–3 grooming sessions weekly. Very sensitive to cold and requires gentle handling and early socialization.",
        idealHome: "Adults or families with older, careful children. Ideal for apartments and people wanting a tiny but energetic companion.",
        funFact: "Though tiny, the Russian Toy originated from larger terrier lines and retains their bold, fearless attitude.",
        profileLink: 'dog breeds/RussianToy.html'

    },
    {
        id: 'rottweiler',
        name: 'Rottweiler',
        image: 'https://cdn.britannica.com/69/234469-050-B883797B/Rottweiler-dog.jpg',
        size: 'large',
        coat: 'short',
        temperament: ['loyal', 'confident', 'protective', 'courageous'],
        origin: 'germany',
        weight: '80–135 lb (36–61 kg)',
        lifespan: '9–10 years',
        about: "A powerful working breed known for loyalty, intelligence, and strong protective instincts. Calm, confident, and deeply devoted to family.",
        care: "Short coat requiring weekly brushing. Needs early training, extensive socialization, and plenty of physical and mental exercise.",
        idealHome: "Experienced owners who can provide structure, leadership, and daily activity. Great for people wanting a loyal guardian.",
        funFact: "Originally used to drive cattle and guard money for Roman soldiers, earning the nickname 'butcher’s dog'.",
        profileLink: 'dog breeds/Rottweiler.html'

    },
    {
        id: 'shetland-sheepdog',
        name: 'Shetland Sheepdog',
        image: 'https://www.sheltieblessings.com/wp-content/uploads/2024/02/PXL_20230814_2333317282.jpg',
        size: 'medium',
        coat: 'long',
        temperament: ['intelligent', 'lively', 'gentle', 'loyal'],
        origin: 'scotland',
        weight: '15–25 lb (7–11 kg)',
        lifespan: '12–14 years',
        about: "A smart, gentle herding breed known for its affectionate nature, agility, and strong bond with family. Highly trainable and eager to please.",
        care: "Long double coat requiring brushing 2–3 times a week, daily during shedding season. Needs mental stimulation, training, and regular exercise.",
        idealHome: "Active families who want a loyal, intelligent companion. Great for kids, training, and dog sports.",
        funFact: "Shelties are famous for excelling in obedience and agility competitions due to their sharp intelligence.",
        profileLink: 'dog breeds/ShetlandSheepdog.html'

    },
    {
        id: 'working-kelpie',
        name: 'Working Kelpie',
        image: 'https://image.petmd.com/files/styles/863x625/public/2023-08/australian-kelpie.jpg',
        size: 'medium',
        coat: 'short',
        temperament: ['intelligent', 'energetic', 'driven', 'alert'],
        origin: 'australia',
        weight: '25–45 lb (11–20 kg)',
        lifespan: '10–14 years',
        about: "An intensely hardworking Australian herding dog known for remarkable stamina, intelligence, and speed. They are bred for work, not as casual pets.",
        care: "Needs 2+ hours of intense daily activity. Minimal grooming required, but mental work is essential. Best suited for farms, working homes, or agility-focused owners.",
        idealHome: "Ideal only for highly active or working households that can provide a real job, not a typical pet home.",
        funFact: "Working Kelpies can control thousands of sheep in open fields and are famous for running across their backs.",
        profileLink: 'dog breeds/WorkingKelpie.html'

    },
    {
        id: 'yorkshire-terrier',
        name: 'Yorkshire Terrier',
        image: 'https://www.yorkshire.com/wp-content/uploads/2022/10/yorkshire-terrier-on-grass.jpg',
        size: 'small',
        coat: 'long',
        temperament: ['brave', 'affectionate', 'lively', 'alert'],
        origin: 'united kingdom',
        weight: 'Up to 7 lb (3.2 kg)',
        lifespan: '11–15 years',
        about: "A tiny but bold terrier with a big personality. Yorkies are affectionate, energetic, and loyal, known for their silky, human-like coat.",
        care: "Daily brushing for long coats; weekly if clipped short. Provide short walks, indoor play, and gentle training. Monitor dental health closely.",
        idealHome: "Great for adults or families with older children who can handle a small, delicate dog.",
        funFact: "Yorkies were originally bred to hunt rats in textile mills—small but fierce workers!",
        profileLink: 'dog breeds/YorkshireTerrier.html'

    },




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
    const breed = breedsData.find(b => b.id === breedId);
    if (!breed || !breed.profileLink) {
        console.error('No profileLink found for breed:', breedId);
        return;
    }
    window.location.href = breed.profileLink;
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
