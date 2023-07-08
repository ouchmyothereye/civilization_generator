let eras = {
    "Dark Ages": {
        "Government Structure": [
            {range: [1, 6], response: "Centralized bureaucracy (absolutist): With established discrete borders and efficient taxation, the central executive overpowers all aristocratic and commoner citizens.", scores: {executive: 1, aristocracy: 0, gentry: 0, commoner: 0}},
            {range: [7, 8], response: "Centralized bureaucracy (compromising): With established discrete borders and efficient taxation, the central executive and citizens have reached a compromise: citizens are taxed, but have governmental representatives, deciding how taxes are used.", scores: {executive: 0, aristocracy: 0, gentry: 1, commoner: 1}},
            {range: [9, 10], response: "With established discrete borders and efficient taxation, the central executive and citizens have reached a compromise: citizens are taxed, but have governmental representatives, deciding how taxes are used.", scores: {executive: 0, aristocracy: 0, gentry: 1, commoner: 1}},
            {range: [11, 30], response: "Regional bureaucracy: Government is unable to organize centrally, and is divided into regional rulership, each with the ability to ignore or override central executive decrees.", scores: {executive: 0, aristocracy: 1, gentry: 1, commoner: 0}},
            {range: [31, 100], response: "Regional autonomy: Regions essentially have their own governments, with optional loyalty to the central seat, who holds primarily symbolic/cultural power.", scores: {executive: -1, aristocracy: 1, gentry: 0, commoner: 1}}                                
            //... Fill in the other ranges and responses here
        ],
        "Entry into Government": [
            {range: [1, 4], response: "Merit-based Testing System: Government consists of professional, trained office-holders. Citizens strive for the education necessary to gain this merit.", scores: {executive: 0, aristocracy: 0, gentry: 1, commoner: 0}},
            {range: [5, 14], response: "Inherited (for sale): The government gains significant revenue by selling government offices, likely because they’re in debt. Government thus consists of gentry and aristocracy, and the offices become heritable property, and is ripe for corruption.", scores: {executive: 0, aristocracy: 1, gentry: 1, commoner: 0}},
            {range: [15, 54], response: "Inherited (not for sale:): Government consists of aristocracy looking out primarily to advance their family lineages. Ripe for corruption.", scores: {executive: 0, aristocracy: 1, gentry: 0, commoner: 0}},
            {range: [55, 60], response: "Slave Administration: Governmental officers are recruited as enslaved children, and trained in governmental skills. They are either forbidden from having families, or from passing privileges to their family, or are Eunuchs.", scores: {executive: 1, aristocracy: 0, gentry: 0, commoner: 0}},
            {range: [61, 100], response: "Top-down Assignment: Governmental officers are selected from educated nobility by the heads of those offices. Usually family members are selected. Top officials are chosen and placed by the executive based on whatever merits they choose (weakness? Strength? Family?)", scores: {executive: 1, aristocracy: 0, gentry: 0, commoner: 0}}     
            //... Fill in the other ranges and responses here
        ],
        "Rule of Law": [
            {range: [1, 5], response: "Ubiquitous: Nobody is above the law. Law applies even to the Executive.", scores: {executive: 0, aristocracy: 0, gentry: 0, commoner: 0}},
            {range: [6, 40], response: "Selectively Applied: Only the Executive is above the law.", scores: {executive: 1, aristocracy: 0, gentry: 0, commoner: 0}},
            {range: [41, 100], response: "None: Law is selectively applied, and rarely to those with power or money. If a legislative/judicial system of accountability exists, it's entirely unstable.", scores: {executive: 1, aristocracy: 1, gentry: 0, commoner: 0}}           
            //... Fill in the other ranges and responses here
        ],
        "Accountability": [
            {range: [1, 5], response: "Judicial/legislature: Powerful people are held accountable through a system of courts. The powerless may appeal to the judiciary if wronged.", scores: {executive: 0, aristocracy: 0, gentry: 1, commoner: 1}},
            {range: [6, 40], response: "Top-down: Powerful people are only accountable to those more powerful than them. The powerless can appeal to the top of the hierarchy, for whatever good that may do.", scores: {executive: 1, aristocracy: 1, gentry: 0, commoner: 0}},
            {range: [41, 100], response: "Informal Cultural: Powerful people are accountable to cultural mores, philosophies, religion, taboo. The powerless have no means of appeal besides admonishment and disapproval.", scores: {executive: 1, aristocracy: 0, gentry: 0, commoner: 0}}  
            //... Fill in the other ranges and responses here
        ],       
        "Caste System": [
            {range: [1, 80], response: "No Castes: This society does not have a caste system.", scores: {executive: 0, aristocracy: 0, gentry: 1, commoner: 0}} ,   
            {range: [81, 100], response: "Caste System: Segmentation of society into groups whose membership is determined by birth. Anywhere between 3 and 7 castes, possibly including rulers, priests, warriors, artisans, and laborers. No social mobility. Enforced by religious tradition or by law. Castes tend to be more loyal to members of their own caste than to others.", scores: {executive: 1, aristocracy: 1, gentry: 0, commoner: -1}}             
            //... Fill in the other ranges and responses here
        ],    
        "Hereditary Aristocracy": [
            {range: [1, 75], response: "Strong landed (independent) aristocracy: Hereditary Aristocracy are land-holding, with significant coercive powers of their own, including resource production, and possibly military power.", scores: {executive: 0, aristocracy: 1, gentry: 0, commoner: 0}},
            {range: [76, 98], response: "Weak (state serving) aristocracy: Hereditary Aristocracy are dependent upon the state for their power. They seek to serve the executive power. They may or may not own significant holdings, but they do not act as a coherent political group.", scores: {executive: 1, aristocracy: 0, gentry: 0, commoner: 0}},
            {range: [99, 100], response: "Essentially None: There is no or very few hereditary aristocracy. Great social mobility. The highest social class is achieved through entrepreneurship, lucrative professions, land production, and/or acquiring governmental office.", scores: {executive: 0, aristocracy: -1, gentry: 1, commoner: 1}}    
            //... Fill in the other ranges and responses here
        ],     
        "Aristocracy-Commoner Allegiance": [
            {range: [1, 5], response: "Strong: The commoners and the aristocracy (or very rich) trust and provide for one another. Benefit flows both ways.", scores: {executive: 0, aristocracy: 0, gentry: 0, commoner: 1}},
            {range: [6, 40], response: "Weak: The aristocracy (or very rich) do not care for commoners, and may prey upon them. Does the central executive stand for the people?", scores: {executive: 0, aristocracy: 0, gentry: 0, commoner: 0}},
            {range: [41, 100], response: "Enslaved Workers: The aristocracy (or very rich) do not care for commoners, and even rely upon an enslaved class of people. SERFDOM is certainly enacted.", scores: {executive: 0, aristocracy: 0, gentry: 0, commoner: -1}}  
            //... Fill in the other ranges and responses here
        ],   
        "Religion": [
            {range: [1, 20], response: "Protest Religion: The popular religion is specifically anti-government or anti-worldly, decrying the established corruption or ignorance of the status quo. It is a major destabilizing force regarding government legitimacy.", scores: {executive: -1, aristocracy: 0, gentry: 0, commoner: 1}},
            {range: [21, 50], response: "Caesaropapism: The head of the government is the head of the religion. Either a godking, divinity’s spokesperson, or top priest. Government appoints clergy. Religious legitimacy of the state is in the state’s hands. ", scores: {executive: 1, aristocracy: 0, gentry: 0, commoner: 0}},
            {range: [51, 54], response: "Aristocratic, Centralized: The popular religion is run by aristocratic elites, independent of the government. It is a centralized institution with a developed bureaucracy in its own right. The aristocracy controls the government’s legitimacy in the eyes of the people.", scores: {executive: 0, aristocracy: 1, gentry: 0, commoner: 0}},
            {range: [61, 60], response: "Independent, Centralized: The popular religion is independent of government ownership, or Aristocratic control. It appoints its own clergy. and is a centralized institution with a developed bureaucracy in its own right. This is a strong precursor to legislative/judiciary bodies, merit-based government entry, and public universities (if these do not yet already exist). The church controls the government’s legitimacy in the eyes of the people.", scores: {executive: 0, aristocracy: 0, gentry: 0, commoner: 0}},
            {range: [71, 100], response: "Independent, Decentralized: The popular religion is independent of the government’s ownership, appointing its own clergy, but is not a centralized organization. Temples and/or priests and/or religious regions are independent of each other, and do not obey any centralized decree. Tradition is their guide. The state’s legitimacy depends on adhering to the religion’s guidelines, which nobody in particular has control over.", scores: {executive: 0, aristocracy: 0, gentry: 0, commoner: 0}}       
            //... Fill in the other ranges and responses here
        ],
        "Major Land Owners": [
            {range: [1, 30], response: "Tribal: Land is owned by tribal lineages. Individuals cannot buy or sell land without approval of extended kinship groups.", scores: {executive: 0, aristocracy: 0, gentry: 0, commoner: 1}},
            {range: [31, 32], response: "Small Family: Land is owned by small family units. Heads of these families can buy and sell their land.", scores: {executive: 0, aristocracy: 0, gentry: 1, commoner: 1}},
            {range: [33, 46], response: "Crown/State: Land is owned by the Executive. Those living on state-land may owe services to the state. SERFDOM is likely if executive power is weaker than Aristocracy or crown/state owns all land.", scores: {executive: 1, aristocracy: 0, gentry: 0, commoner: 0}},
            {range: [47, 87], response: "Aristocracy: Land is owned by hereditary aristocracy (or the very rich). Those living on this land may owe services to their lords. SERFDOM is likely if executive power is weaker than aristocracy or aristocracy owns all land.", scores: {executive: 0, aristocracy: 1, gentry: 0, commoner: 0}},
            {range: [89, 100], response: "Church: Land is owned by the popular religion, either for profit, or for religious purposes. Church land may be productive, and contain centers of learning, worship, and/or hermitage.", scores: {executive: 0, aristocracy: 0, gentry: 0, commoner: 0}}   
            //... Fill in the other ranges and responses here
        ],       
        "Property Rights": [
            {range: [1, 20], response: "Strong Property Rights: Property owners can feel secure that their property will remain theirs. Encourages investment.", scores: {executive: 0, aristocracy: 0, gentry: 1, commoner: 0}},
            {range: [21, 100], response: "Weak Property Rights: The state can seize private property without notice or recourse. Discourages long-term investment.", scores: {executive: 1, aristocracy: 0, gentry: 0, commoner: 0}}
            //... Fill in the other ranges and responses here
        ],     
        "Military Type": [
            {range: [1, 5], response: "Slave Army: Soldiers are selected as children and trained to be loyal soldiers. Slave soldiers may hold a high position in society, with slave generals even becoming aristocracy. Their social positions are likely not heritable.", scores: {executive: 1, aristocracy: 0, gentry: 0, commoner: 0}},
            {range: [6, 10], response: "Centralized Draft: Military regiments are drafted by whatever power the central executive has, united under the banner of centralized leadership. Size of army is dependent on power of the Executive.", scores: {executive: 1, aristocracy: 0, gentry: 0, commoner: 0}},
            {range: [11, 35], response: "Regional Draft: Military regiments are organized region-by-region, united in a segmented fashion, with strong kin/regional loyalties.", scores: {executive: 0, aristocracy: 0, gentry: 0, commoner: 0}},
            {range: [36, 70], response: "Tribal Militias: Military regiments consist of the gathered forces of regional tribes. Very independent, and very difficult for central executive to command.", scores: {executive: 0, aristocracy: 0, gentry: 0, commoner: 1}},
            {range: [71, 75], response: "Mercenaries: Military regiments consist of expensive but effective professional armies for-hire.", scores: {executive: 0, aristocracy: 1, gentry: 1, commoner: 0}},  
            {range: [76, 100], response: "Aristocratic Mounted: If there is an aristocracy, they consider themselves warriors, knights, etc, and spend their money on expensive battle equipment, sending their few and best into glorious battle. They tend to focus more on targeting one another than on effective combat strategy.", scores: {executive: 0, aristocracy: 0, gentry: 0, commoner: 0}}               
            //... Fill in the other ranges and responses here
        ],    
        "Governmental Revenue": [
            {range: [1, 10], response: "Maximizing Taxation: The state seeks to draw as much revenue as possible from the population. Either commoners or aristocrats will be unhappy with this, depending on who has less power.", scores: {executive: 1, aristocracy: 0, gentry: 0, commoner: 0}},
            {range: [11, 25], response: "Satisficing Taxation: The state only taxes as much as it needs, increasing during wartime, and decreasing in peace.", scores: {executive: 0, aristocracy: 0, gentry: 0, commoner: 0}},
            {range: [26, 95], response: "Regional Services: The state draws its revenue from the services and resources (e.g. crops, mining) provided by its subordinate regions, rather than from monetary taxes. Typically does not lead to a rich state.", scores: {executive: 0, aristocracy: 1, gentry: 1, commoner: 0}},
            {range: [96, 100], response: "Natural Resource Trade: The state does not need to tax due to exploitation of a valuable natural resource. Because citizens have no stake in use of governmental funds, there is more corruption.", scores: {executive: 0, aristocracy: 0, gentry: 0, commoner: 0}}    
            //... Fill in the other ranges and responses here
        ], 
        "Growth & Innovation": [
            {range: [1, 50], response: "<b>Maximizing</b>: The state is maximizing economic growth. If Gentry has power less than 4, and Taxation is 'Satisficing' or based on 'regional services', growth is based on external wars or exploration conquests. If Gentry is weak and Taxation is 'Maximizing' or 'Natural Resources', the state's growth is based on taking advantage of its own people. If Gentry has power of 4 or more, growth may be based on innovation.", scores: {executive: 0, aristocracy: 0, gentry: 0, commoner: 0}},
            {range: [51, 100], response: "Satisficing: The state is satisfied with the status quo, uninterested in exploration, or innovative economic growth projects.", scores: {executive: 0, aristocracy: 0, gentry: 0, commoner: 0}}     
            //... Fill in the other ranges and responses here
        ]                                                         
        // Similar structures for "Middle Ages" and "Early Modern"
    },
    //...
};

// Define actorScores in the global scope
let actorScores = {executive: 0, aristocracy: 0, gentry: 0, commoner: 0};

function getResponse(userChoice, attribute) {
    let randomNumber = Math.floor(Math.random() * 100) + 1;

    for (let i = 0; i < eras[userChoice][attribute].length; i++) {
        if (randomNumber >= eras[userChoice][attribute][i].range[0] && randomNumber <= eras[userChoice][attribute][i].range[1]) {
            // Update actor scores based on the chosen response
            for (let actor in eras[userChoice][attribute][i].scores) {
                actorScores[actor] += eras[userChoice][attribute][i].scores[actor];
            }
            return eras[userChoice][attribute][i].response;
        }
    }
    return "No matching response found."; // Fallback response
}

function submitForm() {
    let radios = document.getElementsByName('era');
    for (let i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
            // Get the selected era
            let userChoice = radios[i].value;

            // Reset the scores for each actor at the start of each submission
            actorScores = {executive: 0, aristocracy: 0, gentry: 0, commoner: 0};

            // Get the government structure for the chosen era
            let govStructureResponse = getResponse(userChoice, "Government Structure");

            // Get the entry into government for the chosen era
            let entryIntoGovResponse = getResponse(userChoice, "Entry into Government");

            // Get the entry into government for the chosen era
            let ruleOfLawReponse = getResponse(userChoice, "Rule of Law");

            // Get the entry into government for the chosen era
            let accountabilityResponse = getResponse(userChoice, "Accountability");

            // Get the entry into government for the chosen era
            let casteSystemResponse = getResponse(userChoice, "Caste System");

            // Get the entry into government for the chosen era
            let hereditaryAristoResponse = getResponse(userChoice, "Hereditary Aristocracy");

            // Get the entry into government for the chosen era
            let allegianceResponse = getResponse(userChoice, "Aristocracy-Commoner Allegiance");

            // Get the entry into government for the chosen era
            let religionResponse = getResponse(userChoice, "Religion");

            // Get the entry into government for the chosen era
            let landOwnersResponse = getResponse(userChoice, "Major Land Owners");

            // Get the entry into government for the chosen era
            let propertyRightsResponse = getResponse(userChoice, "Property Rights");

            // Get the entry into government for the chosen era
            let militaryTypeResponse = getResponse(userChoice, "Military Type");

            // Get the entry into government for the chosen era
            let govRevenueResponse = getResponse(userChoice, "Governmental Revenue");

            // Get the entry into government for the chosen era
            let growthInnovationResponse = getResponse(userChoice, "Growth & Innovation");
            

            // After generating all responses...
            let output = "<h4>Government Structure</h4> " + govStructureResponse + 
            "<h4>Entry into Government</h4> " + entryIntoGovResponse + 
            "<h4>Rule of Law</h4> " + ruleOfLawReponse + 
            "<h4>Accountability</h4> " + accountabilityResponse + 
            "<h4>Caste System</h4> " + casteSystemResponse +                                     
            "<h4>Hereditary Aristocracy</h4> " + hereditaryAristoResponse + 
            "<h4>Aristocracy-Commoner Allegiance</h4> " + allegianceResponse + 
            "<h4>Religion</h4> " + religionResponse + 
            "<h4>Major Land Owners</h4> " + landOwnersResponse + 
            "<h4>Property Rights</h4> " + propertyRightsResponse + 
            "<h4>Military Type</h4> " + militaryTypeResponse + 
            "<h4>Governmental Revenue</h4> " + govRevenueResponse + 
            "<h4>Growth & Innovation</h4> " + growthInnovationResponse;

            // Add the total scores to the output
            output += "<h4>Actor Scores</h4>";
            for (let actor in actorScores) {
                output += actor + ": " + actorScores[actor] + "<p/>";
            }

            // Output the results
            document.getElementById('output').innerHTML = output;

            // Stop looking for the checked radio button
            break;
        }
    }
}
