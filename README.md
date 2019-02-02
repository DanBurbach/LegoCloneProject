# LegoCloneProject

Javascript: Angular: Re-create a website using Angular. This site is mimicing the Lego website (for educational purposes only).

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.5.

#### By Daniel Burbach

## Description

A cloned version of the Lego.com website using Javascript and Angular methods.

## Support and contact details

Feel free to contact me with any suggestions or questions.

## Technologies Used

HTML, CSS, Javascript, Node.js, Atom, Angular, and webpack

## Setup/Installation Requirements

1. git clone: https://github.com/DanBurbach/LegoCloneProject.git

2. Navigate into this repo and download dependencies using manager of your choice: npm install

3. create an entry in .gitignore:

#Firebase credentials

/src/app/api-keys.ts

(to protect from api-key theft, save this independently before any further editing/saving)

4. create a firebase api key and place in the following:

src/app/api-keys.ts .  ------

export const masterFirebaseConfig = {

    apiKey: "xxxx",
    
    authDomain: "xxxx.firebaseapp.com",
    
    databaseURL: "https://xxxx.firebaseio.com",
    
    storageBucket: "xxxx.appspot.com",
    
    messagingSenderId: "xxxx"
    
  };

5. $ np serve --open to run

6. to see a working page, go to `http://localhost:4200/welcome`
(there is still log in issue blocking the main page from loading.)

## Hosted
Yes it is hosted, although currently does not actually show anything besides a blank page (due to log in problems)

It can be found here: https://legoprojectsignin.firebaseapp.com/

## Known Bugs

There are many. This should be considered a further work in progress and not considered more than what could be finished in the time allowed.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Accomplishments

- Fixed routing, but now log in blocks the user from seeing the main screen

- Incorporated Firebase log in that gathers user name and email from Google log in.

- Have a rotating carousel. Which was much of the difficulty that I came across. Still does not load onto screen properly.

## Further development

- Currently the project is running into errors with routing. Planning on fixing that.

- Incorporate better CSS and HTML (to "match" the Lego website)

- If I can, use and incorporate a video API of Lego related material.

### License

Licensed under the MIT license.

Copyright 2019, Daniel Burbach
(CREATED FOR EDUCATIONAL PURPOSES ONLY!!!)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"),
to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense,
and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
