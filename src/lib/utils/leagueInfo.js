/*   STEP 1   */
export const leagueID = "918528198680494080"; // your league ID
export const leagueName = "The Aquarium"; // your league name
export const dues = 100; // (optional) used in template constitution page
export const dynasty = true; // true for dynasty leagues, false for redraft and keeper
export const enableBlog = false; // requires VITE_CONTENTFUL_ACCESS_TOKEN and VITE_CONTENTFUL_SPACE environment variables

/*   STEP 2   */
export const homepageText = `
  <p>"The Aquarium" dynasty fantasy football league was formed in 2021. A band of misfit redditors with crippling gambling addictions with nothing better to do (shoutout to COVID-19) searched the desolate halls of r/findaleague for an ounce of enjoyment. What they found instead was...at least two ounces! </p>
  <p>The startup draft was an instant reminder of what we had all signed up for, a monetary commitment to internet strangers with questionable morals. There were ups and downs; we witnessed the rise and fall (mostly fall) of a Phillies legend, his ride or die partner who just couldn't bear the shame of remaining in the league, divorces and divorce lawyers, house fires and teams build like a house of cards, and the draft pick collecting goblin who shall not be named.</p>
  <p>The league now carries on ad infinitum. We know not where its name came from, but that it is definitely a name.</p>
  <p>Welcome to The Aquarium</p>
`;

/*   STEP 3   */
/*
3 managers as an example. Uncomment (remove the //) before each line to make it live code
If you're having trouble, reference the Training Wheels' Manager Section
https://github.com/nmelhado/league-page/blob/master/TRAINING_WHEELS.md#ii-adding-managers-and-changing-the-homepage-text
*/

// To omit an optional field, set it's value to null

// export const managers = [
//     {
//       //   "roster": 0,  // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)
//       "name": "JBackes33",
//       "managerID": "76444495583264768",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
//       "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
//       "location": null, // (optional)
//       "bio": null,
//       "photo": null, // square ratio recommended (no larger than 500x500)
//       "fantasyStart": null, // (optional) when did the manager start playing fantasy football
//       "favoriteTeam": "dal", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
//       "mode": "Dynasty", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
//       "rival": {
//         name: "RyDoggJ2310", // Can be anything (usually your rival's name)
//         link: null, // manager array number within this array, or null to link back to all managers page
//         image: null, // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
//       },
//       "favoritePlayer": 559, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
//       "valuePosition": "Power Bottom", // (optional) Favorite position (QB, WR, RB, TE, etc.)
//       "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
//       "philosophy": "2026 baby!",
//       "tradingScale": 10, // 1 - 10
//       "preferredContact": "Sleeper", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
//     },
//   {
//       //   "roster": 1,  // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)  
//       "name": "Rvby",
//       "managerID": "30098898794894131",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
//       "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
//       "location": null, // (optional)
//       "bio": null,
//       "photo": null, // square ratio recommended (no larger than 500x500)
//       "fantasyStart": null, // (optional) when did the manager start playing fantasy football
//       "favoriteTeam": null, // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
//       "mode": null, // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
//       "rival": {
//         name: null, // Can be anything (usually your rival's name)
//         link: null, // manager array number within this array, or null to link back to all managers page
//         image: null, // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
//       },
//       "favoritePlayer": 1244, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
//       "valuePosition": "Fetal", // (optional) Favorite position (QB, WR, RB, TE, etc.)
//       "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
//       "philosophy": "Rebuild it and they will come",
//       "tradingScale": 10, // 1 - 10
//       "preferredContact": "Sleeper", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
//     },
//   {
//       //   "roster": 2,  // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)
//       "name": "GoochMane",
//       "managerID": "39709451539292569",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
//       "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
//       "location": null, // (optional)
//       "bio": null,
//       "photo": null, // square ratio recommended (no larger than 500x500)
//       "fantasyStart": null, // (optional) when did the manager start playing fantasy football
//       "favoriteTeam": null, // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
//       "mode": null, // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
//       "rival": {
//         name: "ZackC1453", // Can be anything (usually your rival's name)
//         link: 4, // manager array number within this array, or null to link back to all managers page
//         image: null, // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
//       },
//       "favoritePlayer": null, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
//       "valuePosition": "Bottoms Up", // (optional) Favorite position (QB, WR, RB, TE, etc.)
//       "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
//       "philosophy": "All the money in the world and cant buy a quarter back",
//       "tradingScale": 10, // 1 - 10
//       "preferredContact": "Sleeper", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
//     },
//   {
//       //   "roster": 3,  // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)
//       "name": "HepDoongle",
//       "managerID": "43087375498636083",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
//       "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
//       "location": null, // (optional)
//       "bio": null,
//       "photo": null, // square ratio recommended (no larger than 500x500)
//       "fantasyStart": null, // (optional) when did the manager start playing fantasy football
//       "favoriteTeam": "kc", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
//       "mode": null, // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
//       "rival": {
//         name: null, // Can be anything (usually your rival's name)
//         link: null, // manager array number within this array, or null to link back to all managers page
//         image: null, // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
//       },
//       "favoritePlayer": 268, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
//       "valuePosition": "Reclined", // (optional) Favorite position (QB, WR, RB, TE, etc.)
//       "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
//       "philosophy": "Who cares I'm watching my Patty Cakes",
//       "tradingScale": 10, // 1 - 10
//       "preferredContact": "Sleeper", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
//     },
//   {
//       //   "roster": 4,  // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)
//       "name": "eagles0101",
//       "managerID": "44197788781012172",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
//       "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
//       "location": null, // (optional)
//       "bio": null,
//       "photo": null, // square ratio recommended (no larger than 500x500)
//       "fantasyStart": null, // (optional) when did the manager start playing fantasy football
//       "favoriteTeam": "dal", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
//       "mode": null, // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
//       "rival": {
//         name: "zackc1453", // Can be anything (usually your rival's name)
//         link: 5, // manager array number within this array, or null to link back to all managers page
//         image: null, // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
//       },
//       "favoritePlayer": 461, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
//       "valuePosition": "Plaintiff", // (optional) Favorite position (QB, WR, RB, TE, etc.)
//       "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
//       "philosophy": "None of these guys have a clue, they eat my hype posts right up...",
//       "tradingScale": 1, // 1 - 10
//       "preferredContact": "Sleeper", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
//     },
//   {
//       //   "roster": 5,  // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)
//       "name": "zackc1453",
//       "managerID": "46541025889903820",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
//       "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
//       "location": null, // (optional)
//       "bio": null,
//       "photo": null, // square ratio recommended (no larger than 500x500)
//       "fantasyStart": null, // (optional) when did the manager start playing fantasy football
//       "favoriteTeam": "ne", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
//       "mode": null, // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
//       "rival": {
//         name: "eagles0101", // Can be anything (usually your rival's name)
//         link: 4, // manager array number within this array, or null to link back to all managers page
//         image: null, // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
//       },
//       "favoritePlayer": 8157, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
//       "valuePosition": "CEO", // (optional) Favorite position (QB, WR, RB, TE, etc.)
//       "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
//       "philosophy": "Dynasty rule numero uno, you can never have too many RBs",
//       "tradingScale": 10, // 1 - 10
//       "preferredContact": "Sleeper", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
//     },
//   {
//       //   "roster": 6,  // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)
//       "name": "dirtygagan",
//       "managerID": "46774867941601689",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
//       "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
//       "location": null, // (optional)
//       "bio": null,
//       "photo": null, // square ratio recommended (no larger than 500x500)
//       "fantasyStart": null, // (optional) when did the manager start playing fantasy football
//       "favoriteTeam": null, // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
//       "mode": null, // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
//       "rival": {
//         name: "dirtygagan", // Can be anything (usually your rival's name)
//         link: 6, // manager array number within this array, or null to link back to all managers page
//         image: null, // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
//       },
//       "favoritePlayer": 2135, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
//       "valuePosition": "Under the POTUS desk", // (optional) Favorite position (QB, WR, RB, TE, etc.)
//       "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
//       "philosophy": "Starting quarterbacks are wildly overrated",
//       "tradingScale": 10, // 1 - 10
//       "preferredContact": "Sleeper", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
//     },
//   {
//       //   "roster": 7,  // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)
//       "name": "goldententacle",
//       "managerID": "47225502264249139",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
//       "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
//       "location": null, // (optional)
//       "bio": null,
//       "photo": null, // square ratio recommended (no larger than 500x500)
//       "fantasyStart": null, // (optional) when did the manager start playing fantasy football
//       "favoriteTeam": null, // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
//       "mode": null, // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
//       "rival": {
//         name: null, // Can be anything (usually your rival's name)
//         link: null, // manager array number within this array, or null to link back to all managers page
//         image: null, // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
//       },
//       "favoritePlayer": null, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
//       "valuePosition": "Absent", // (optional) Favorite position (QB, WR, RB, TE, etc.)
//       "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
//       "philosophy": "Championships are built on abandonment",
//       "tradingScale": 2, // 1 - 10
//       "preferredContact": "Sleeper", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
//     },
//   {
//       //   "roster": 8,  // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)
//       "name": "mybadreligon",
//       "managerID": "49595356360893644",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
//       "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
//       "location": null, // (optional)
//       "bio": null,
//       "photo": null, // square ratio recommended (no larger than 500x500)
//       "fantasyStart": null, // (optional) when did the manager start playing fantasy football
//       "favoriteTeam": "min", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
//       "mode": null, // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
//       "rival": {
//         name: "dirtygagan", // Can be anything (usually your rival's name)
//         link: 6, // manager array number within this array, or null to link back to all managers page
//         image: null, // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
//       },
//       "favoritePlayer": 69, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
//       "valuePosition": "2nd place", // (optional) Favorite position (QB, WR, RB, TE, etc.)
//       "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
//       "philosophy": "If the Rams can do it why cant I? Fuck them picks!",
//       "tradingScale": 10, // 1 - 10
//       "preferredContact": "Sleeper", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
//     },
//   {
//       //   "roster": 9,  // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)
//       "name": "RyDoggJ2310",
//       "managerID": "81325435745694105",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
//       "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
//       "location": null, // (optional)
//       "bio": null,
//       "photo": null, // square ratio recommended (no larger than 500x500)
//       "fantasyStart": null, // (optional) when did the manager start playing fantasy football
//       "favoriteTeam": null, // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
//       "mode": null, // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
//       "rival": {
//         name: "Fucking Jojo", // Can be anything (usually your rival's name)
//         link: 10, // manager array number within this array, or null to link back to all managers page
//         image: null, // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
//       },
//       "favoritePlayer": 1907, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
//       "valuePosition": "Last", // (optional) Favorite position (QB, WR, RB, TE, etc.)
//       "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
//       "philosophy": "These guys lured me in here here and screwed me over",
//       "tradingScale": 10, // 1 - 10
//       "preferredContact": "Sleeper", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
//     },
//   {
// //       //   "roster": 10,  // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)
// //       "name": "TBD",
// //       "managerID": "TBD",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
// //       "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
// //       "location": null, // (optional)
// //       "bio": null,
// //       "photo": null, // square ratio recommended (no larger than 500x500)
// //       "fantasyStart": null, // (optional) when did the manager start playing fantasy football
// //       "favoriteTeam": null, // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
// //       "mode": null, // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
// //       "rival": {
// //         name: null, // Can be anything (usually your rival's name)
// //         link: null, // manager array number within this array, or null to link back to all managers page
// //         image: null, // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
// //       },
// //       "favoritePlayer": null, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
// //       "valuePosition": null, // (optional) Favorite position (QB, WR, RB, TE, etc.)
// //       "rookieOrVets": null, // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
// //       "philosophy": null,
// //       "tradingScale": null, // 1 - 10
// //       "preferredContact": "Sleeper", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
// //     },
//      //   "roster": 11,  // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)
// //       "name": "TBD",
// //       "managerID": "TBD",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
// //       "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
// //       "location": null, // (optional)
// //       "bio": null,
// //       "photo": null, // square ratio recommended (no larger than 500x500)
// //       "fantasyStart": null, // (optional) when did the manager start playing fantasy football
// //       "favoriteTeam": null, // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
// //       "mode": null, // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
// //       "rival": {
// //         name: null, // Can be anything (usually your rival's name)
// //         link: null, // manager array number within this array, or null to link back to all managers page
// //         image: null, // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
// //       },
// //       "favoritePlayer": null, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
// //       "valuePosition": null, // (optional) Favorite position (QB, WR, RB, TE, etc.)
// //       "rookieOrVets": null, // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
// //       "philosophy": null,
// //       "tradingScale": null, // 1 - 10
// //       "preferredContact": "Sleeper", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
// //     },
//        "roster": 10,  // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)
//       "name": "thejetj0j6",
//       "managerID": "468955518967214080",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
//       "tookOver": null, // (optional) used if a manager took over a team, delete this line or change to null otherwise
//       "location": null, // (optional)
//       "bio": null,
//       "photo": null, // square ratio recommended (no larger than 500x500)
//       "fantasyStart": null, // (optional) when did the manager start playing fantasy football
//       "favoriteTeam": null, // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
//       "mode": null, // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
//       "rival": {
//         name: null, // Can be anything (usually your rival's name)
//         link: null, // manager array number within this array, or null to link back to all managers page
//         image: null, // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
//       },
//       "favoritePlayer": null, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
//       "valuePosition": null, // (optional) Favorite position (QB, WR, RB, TE, etc.)
//       "rookieOrVets": null, // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
//       "philosophy": "Fuck these guys im out",
//       "tradingScale": null, // 1 - 10
//       "preferredContact": "Sleeper", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
//     },
  
  /*   !!  !!  IMPORTANT  !!  !! */
  /*
  Below is the most up to-date version of a manager. Please leave this commented out
  and don't delete it. This will be updated if any fields are added, removed or changed
  and will allow updates without causing merge conflicts
  */
  
    // {
    //   "roster": 3,  // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)
    //   "managerID": "12345678",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
    //   "name": "Your Name",
    //   "tookOver": 2020, // (DEPRECATED! You don't need to use this anymore) (optional) used if a manager took over a team, delete this line or change to null otherwise
    //   "location": "Brooklyn", // (optional)
    //   "bio": "Lorem ipsum...",
    //   "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
    //   "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
    //   "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    //   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    //   "rival": {
    //     name: "Rival", // Can be anything (usually your rival's name)
    //     link: 6, // manager array number within this array, or null to link back to all managers page
    //     image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    //   },
    //   "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    //   "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    //   "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    //   "philosophy": "Your fantasy team's philosophy", // (optional)
    //   "tradingScale": 10, // 1 - 10 (optional)
    //   "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    // },
    
