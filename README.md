## New Project Commands

npm install -g typescript

ng new [PROJECT NAME]

npm install bower -g
bower init (add /bower_compponents to .gitignore file)
bower install bootstrap --save

ng serve (for testing)

NEW COMPONENT

ng g component [COMPONENT NAME]

ng g class [CLASS NAME].model

ng g pipe [PIPE NAME]


Project Order

1. Create project folder
    IMPORTANT: Make sure to include all the files you want to leave off your repository in .gitignore file!
              On each new component, add necessary info to app.module and app.routing
2. Create project object model (make sure to plan ahead for possible filters or constants)
3. Create sample-[OBJECT NAME] json file
4. Activate firebase and import sample-[OBJECT NAME] json file
5. Make sure "rules" in database are set to "true" for both read and write.
6. Create landing page to represent '' path in routing (ex. WelcomeComponent)
7. Create object listing component to display database
8. Create app.routing file to hold url path's (ex. 'welcome', 'all-projects')
9. Create object-detail individual page that stem from object listing page
10. Create admin component for update and delete project functionality.
