# rudimentary-investment-app
Using the front-end framework of your choice (React, React Native, Flutter , Vue, vanilla JS, etc), create a rudimentary investment app.

Time alotted:
Spend no more than 3 hours building the app.
Be sure to save some time to share the app however you prefer (Docker , Netlify , personal
website, github pages, etc)
Description:
Create an investment phone app or web app (whichever you’re most comfortable with) that
contains:
●    Home
●    Portfolio (data set provided)
●    Account/Settings
●    A menu/tab navigation to route the user between pages/screens
●    Bonus - fetch portfolio data from a backend


# Technology Used:
● NEXT JS
● T ailwind CSS

# Introduction:
Rudimentary Investment Application is created using NEXT JS as a frontend library which supports react JS. 
Here Tailwind CSS is used to assist UI structure with class based styling as done in Bootstrap.

Following folders are created to maintain proper folder structure:
1. Components: This folder consists of all the files that are being or will be reused all across the app.
2. Public: Public contains all the icons, images or styles(if conventional HTML styling is being used).
3. Pages: Pages folder contains all the pages that a user can route to. Keeping in mind these files don't need a specific routing file defined since NEXT JS allows file based routing. 
It also contains the main App.tsx where all the rendering of components is done and uploaded in DOM. 
Other than that, the pages that are created to make up this application are:

      ● Home Page: Home page is the main index.tsx page where our layout 
        component(created in components folder) is wrapped around the content
        as a parent component which has our top navigation bar and the content
        inside it. For the content of Home page, a component is created in the
        component folder named as common-card.tsx which is then reused in
        Home Page to create a clean code and then card-layer .tsx is also added
        for card components shown in User Interface.
      ● Portfolio Page: Portfolio page involves accordion and a dataset that is
        mapped in accordion and depiction of dynamic data being rendered in the
        accordion body is being shown.
      ● Settings Page: Settings page consists of a form which contains first
        name, last name, email, preferred name and phone. This saves the
        details of the user 
