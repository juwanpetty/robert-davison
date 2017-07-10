# When adding/updating projects

    - index.html
        - duplicate the li element to add another project
        
        - inside the li element, there is a data-project-number
          this number corresponds to the order of the projects in the projects.json file
        
        - in the li element you can also find class="project-name"
          this is where you can name the projects that you will see on the homepage

        That's it for the homepage!


    - css/styles.css
        - on the bottom of the css page, there is a bunch of:

            .project-item:nth-child(1) > div {
                /* Image for project */
                background-image: url('../assets/images/image1.gif');
            }

            .project-item:nth-child(1) .project-name {
                /* CSS to change the color of the project item */
                background: rgba(255, 225, 122, 0.75);
            }

        - the number after nth-child corresponds to the project on the
          homepage 
        
        - match the image to the ones found in the assets/images folder and just change the last parameter after the "/"

        - change the background color to match the dominant (media) color of the project image, KEEP THE ALPHA VALUE TO 0.75

    - data/projects.json
        - this is where all the magic happens, whenever you want to add a project, just duplicate and fill in the correct parameters

        - A COMMA SHOULD BE AFTER EVERY PROJECT ARRAY EXCEPT THE LAST

        