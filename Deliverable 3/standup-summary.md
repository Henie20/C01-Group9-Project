| | |
|-|-|
|User|Message|
|clear_zzs|Yesterday: began developing speech-to-text on web Today: finished speech-to-text and text-to-speech portion of voice commands Plan for today: add language to web app and link to its page in the expo app|
|henie5097||
|henie5097|Yesterday: fixed styling and render errors Today: work on trying to set up a read aloud feature using text to speech|
|gelila6210|yesterday: tried eas build but ran into issues, fixed some issues with contact search, fixed styling and added translations for contacts and dialer, helped clare with getting speech-to-text working on mobile (mic and copy text both work on chrome and safari) plan for today: finalize speech-to-text & apply styles, meeting to merge final parts|
|clear_zzs|Yesterday & today: integrated text-to-speech into dev with language translations, now appears as button to new page when toggled on in settings page Today: began developing speech-to-text as web application to link to expo app Issues: linking to the web requires IP address, and microphone not working on phone|
|thelittlebigz|Yesterday / this morning, finished and uploaded the modified AndroidManifest that allows for the app to be set as a launcher and added a component that should launch apps with a button click I also created an example page for testing  Issues: I was having trouble running the dev branch on my local machine so I can't verify if there's any bugs in my code as is but will try to debug the issues within my machine or attempt to run on a separate machine figure that out|
|papichul0s|I also need to check it on an android because they have different implementations|
|henie5097|Yesterday: implemented internal fontsize changes that align with the dynamic styling|
|papichul0s|Today: did the notification page to send notifications from the app (this is so hard). Apparently, it is illegal for an app to have access to the other app’s notifications so 🫠|
|gelila6210|yesterday: implemented contact search, plan for today: help clare with speech-to-text, fix contacts styling in dev|
|henie5097|Yesterday: themes uses device's theme if there is no data in the cache/backend. Validate device translations (used on initial run) Today: integrate into dev|
|papichul0s|I'll do it|
|gelila6210|today: cleaned up contacts ui, handled case of a favourite contact being deleted from their phone, quickly created a dialer that we can add if you guys want (i’ll clean up the ui if we add it) issues: currently the favourite contacts aren’t being saved to cache or database. i can add that if you haven’t yet <@576110986822418443>|
|papichul0s|Great job Henie👏🏿👏🏿👏🏿|
|henie5097||
|henie5097|Today: implemented dynamic theme based on users in-app preference Tomorrow: work on getting device's theme as a default preference and implement a check for valid device languages for our app translation|
|gelila6210|yesterday: separated favourite contacts and all contacts into two different screens|
|henie5097|Yesterday: initialized translations based on user's login status and made the language picker keep track of last initialized language from i18n.  Today: start working on contrast US|
|gelila6210|March 17: implemented contact favouriting & merged w dev, integrated brightness feature into setting menu|
|henie5097|Today: set up translations using i18n. Implemented language picker for settings to override default language when selected . Created basic list of languages based on infographic from project intro. Tomorrow: will work on manually finding and translating existing text in app Issue: none|
|thelittlebigz|rn the bot updates the md with all the posts in this channel  today: will work on fixing the output in json problem and will start pulling all the branches to merge together will start merging saturday night / sunday|
|thelittlebigz|https://github.com/theLittleBigZ/C01-Group9-Project/blob/8dc93ef2bffe069b34a02b5fb72e5ffec9cdfb3a/Deliverable%203/standup-summary.md|
|thelittlebigz|Yep all good, run it last night it's up and running|
|papichul0s|Should be fine now|
|papichul0s|Lemme check again|
|thelittlebigz|Oh perfect might be an issue on my end|
|papichul0s|I thought I already did|
|thelittlebigz|Yesterday: finished the standup bot (some bugs need to workout but is functional), <@576110986822418443> if you don't mind letting me have admin privileges I can get that running here saturday: will start to pull all other branches to SI-1/launcher then pr to dev (after fixing any merge conflicts)|
|henie5097|Today: created preliminary login page. Tomorrow: try to implement a local colour contrast/theme picker for visual impairments|
|papichul0s|Today: Finished the user registration, and database sync in case users create an account. Will need the signup / login pages to implement.|
|yupme|Today: Work on integrating the search implementation with the previous work others have done Issue: Can't come in - person, have another meeting at this time|
|henie5097|Yesterday: started looking into how to enable translations. While doing that I was able to figure out how open up some apps like YouTube and messages. So I'm going to try to see if there is something similar to direct users to specific device settings. Today: attempt to redirect user to setting's language page Issues: so far I can only open the app's settings page. I haven't been able to find a way to access specific pages in device settings.|
|clear_zzs|Yesterday: researched speech-to-text (stt) and text-to-speech (tts) and its dependencies, today: implemented tts on app so that text input is read back to user, plan for today: research how to implement tts across apps, plan for tomorrow: continue research and begin implementation, continue research for stt|
|gelila6210|yesterday: implemented brightness feature, plan for today: work on contact favouriting, challenges: according to expo docs, we can't change the system brightness on ios devices permanently, we can only change it until their device locks and then it goes back to whatever it was before they changed it|
|henie5097|Yesterday and today: worked on the styling for the app, defined constants so we can change the colours easily. Plan for tomorrow: start working on translations US|
|gelila6210|yesterday: implemented click to call, play for today: start working on favouriting contacts|
|gelila6210|yesterday: got all contacts to show up, plan for today: implement the ability  to call the contact by clicking on it|
|yupme|So far: Worked on the fonts implementation but it is not connected eith the rest of the code, so it is stand alone and doesn't work yet|
|papichul0s||
|papichul0s|Yesterday: implemented the questionnaire and added the cache storage to store the user preferences.|
|henie5097|Yesterday: worked on settings page layout Today: add toggles to setting buttons Blockers: None|
|gelila6210|Yesterday: I figured out how to add & ask for permissions, worked on the code for getting the contacts, Today: team meeting, will continue to work on contacts component|
|papichul0s||
|papichul0s|02/26/2024: Finished integrating the database for the settings using mongoDB. Each setting is a component setting{id, state} where the value of state is stored in the database. Feel free to pull the feat/database branch and check out the viewer component, and the server.mjs to try it out. I added a small video to show the results. 02/27/24: Figure out the list of all the settings to implement and add them to the database|
|thelittlebigz|Yesterday: Started the Launcher will continue to work on it|
|henie5097|Yesterday: completed icon styling using react-icons library. Today: start implementing settings page as discussed during today's  planning meeting. Challenges: None so far|
|gelila6210|yesterday: drew out app pages, found more resources for brightness & contacts features and started trying to implement, plan for today: nothing other than team meeting, challenges: need to finalize app structure|
|thelittlebigz|02/24 (Yesterday): didn't work much on the project, was backlogged with other work goal will be to finish most of it today and then continue with the project tomorrow just to make sure there is a useable component out of my user story I'll be building in android studio first then will try to port it to react-native later on|
|papichul0s|02/23: Started creating the local database storage for the user preferences using AsyncStorage and JSON. It's going to be api calls to the database in the backend anytime the data is changed.|
|thelittlebigz|Yesterday: started building the launcher, in react using the git project in <#1199481343298514974> as a template challenges: getting the project to a working state and limited resources possible solution moving to java / android studio|
|yupme|Yesterday: Looking through resources for option to change the size of fonts, work into integrating that to our project Today: Work on creating an icon for font size, then adjustment scale with a number Challenges: None for myself, will look into how others are implementing as my part may need to be dependent on others, or others on mine|
|henie5097|Yesterday: started setting up front-end for homepage/settings. Today: work on front-end for homepage icons.  Challenges: None|
|clear_zzs|What I did yesterday: started implementing addition of selected apps and started frontend for homepage, plan for today: populate json file with sample data and continue working on frontend to display stored apps in homepage, challenges: none so far|
|gelila6210|what i did yesterday: looked into adjusting brightness and creating the contact/dialer launcher, plan for today: go through the resources I found and start implementing, challenges: none so far!|
