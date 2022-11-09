# To Run
node_modules is required to run this! 
To run this app, cd to the `sleeptracker` folder and run `ionic lab`. This will start the app at `localhost:8200`.


# Features
- The ability to log overnight sleep
- The ability to log sleepiness during the day
- The ability to view these two categories of logged data
- Either using a native device resource or backing up logged data
- Following good principles of mobile design
- Creating a compelling app

The Stanford Scale was used for determining how sleepy a person is.

I chose to split up the date/time because it's easier to conceptualize "when" a person slept. Saying
"the night of [DATE HERE]" is more difficult to think about, especially if someone decided
to go to sleep at 3am or something.

Data is backed up locally: to UserDefaults on iOS and SharedPreferences on Android.

# Resources used
https://stackoverflow.com/questions/53084152/ionic-4-using-components-on-multiple-pages/53084344
https://ionicframework.com/docs/api/card
https://forum.ionicframework.com/t/cant-use-components/175113/6
https://stackoverflow.com/questions/52683652/custom-component-not-a-known-element

https://stackoverflow.com/questions/53185901/ionic-4-custom-components
https://medium.com/ampersand-academy/ionic-4-modal-example-da9694fa0f53
https://ionicframework.com/docs/api/datetime
https://ionicframework.com/docs/v4/api/label
https://ionicframework.com/docs/api/range

https://ionicframework.com/docs/api/list

https://stackoverflow.com/questions/41736258/how-to-display-date-time-in-hhmm-am-format-in-ionic/43251794
https://forum.ionicframework.com/t/how-to-evenly-spread-ion-button-s-across-a-page/184883/2
https://stackoverflow.com/questions/29085197/how-do-you-json-stringify-an-es6-map

https://stackoverflow.com/questions/62732257/ionic-how-to-center-items-wrapped-with-ion-item?rq=1
https://stackoverflow.com/questions/47330808/ionic-3-how-to-use-textarea-ngmodel-and-default-value 
https://stackoverflow.com/questions/40377103/how-to-convert-date-into-this-yyyy-mm-dd-format-in-angular-2
https://www.codegrepper.com/code-examples/whatever/ion+toolbar



# Things to fix
Sometimes the CSS completely breaks and button locations change (specifically the "+" button) for the iOS version.
A "broken" CSS is most obvious on the Day Sleepiness page, because the slider has a giant button on it
and the tick marks are obvious.





# Principles of good design?
- The "+" (indicates create) and the save button are in a similar location, so the user doesn't have to go hunting for "affirmative" actions
- When entering information, there is an option to cancel, if the user tapped the "+" by mistake
- If the user decides to not enter in any information, default values (the current date and time) will be used
- When opening an existing card to edit, the card will pre-populate itself with the user's previous values (this took me a very long time to implement)
- The delete and delete all buttons are placed close to each other, rather than close to any "create" or "cancel" buttons
- The delete and delete all buttons are a bright red 
- When tapping the delete or delete all buttons, a warning popup will appear and let the user not delete if they want to.
