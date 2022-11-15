!!! This branch is currently not the most up to date version of this application !!!

<<<<<<< HEAD
If you would like to see/use the most recent verizon of APB please see the 'furthurwork' branch. Instructions for running the application are listed in the READ.me of that branch. 

I will update here when I have merged these branches.
=======
Welcome to APB, Asbury Park Bulletin!

APB is built using a stack:

    -Rails(backend)

    -React.js(frontend)

        *React-big-calendar
        
        *React-bootstrap
        *Action mailer

The intent behind this project was to create a centralized site for locals and tourisits alike to come and view the various happenings of the great city of Asbury Park.

Organizer accounts are permitted to create and post new events to the town calendar and users are in turn able to RSVP for those events as well as leave comments on the events info board. In addition to this, when users first sign up for APB they can opt to recieve emails for either all new posted events or only events of a specific 'type'.

For users, events displayed on the calendar are color catagorized based on 'type' as well as changing color if they have RSVP'd for the event.

Organizers are only permitted to edit events that they have created unless they have been granted 'admin' acess, in which case they have the ability to edit any event posted to the town calendar. 

Currently Organizer accounts are restricted to those seeded into the database upon creation, but soon I will implement an "Organizer Application" component to allow others the ability to request organizer access. 

If you would like to see what APB is all about please follow the steps below...

Fork and clone this reopoistory to your local machine.


Open the codes base in your preffered code editor, open a terminal window, and run the following command to download necessary rails dependencies:

    $ bundle install
    
Next we need to run the following in order to install React dependencies:

    $ npm install --prefix client
    
Now we can begin to launch the application, in the terminal run:

    $ rails s

After launching the rails server, open an additional terminal window and run the following command to launch the React portion of the application:

    $ npm start --prefix client



Hope you enjoy APB!

>>>>>>> furthurWork
