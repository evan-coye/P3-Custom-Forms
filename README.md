# Custom Form Builder

With this application a user will be able to create a custom form to use in any other outside application.

The user will be asked to select from a list of available input types, as well as be able to choose how they want the different inputs to be layed out on the webpage. 

# Install Requirments 

For this application you will need to install the form.io package from the node package manager. 

Run this command on your local machine to make sure you have the dependecies you will need. 

```
npm install

```
If the generic install command does not work, you can run this more specifc install command 

```
npm install --save @formio/angular formiojs

```
# User Instructions

Upon loading the page, the user will be greated with the custom form builder. 

-Insert picture of form builder here

With the menu on the left, the user will be able to select from many different form fields and place them wherever they want in the form.

Once a form field type has been selected, the user will have options to change each field to display/validate/encrypt the input data however they would like.

-Insert picture of form options here(Maybe one of the display tab, one of the validate tab, etc.)

After the user has layed out the form how they like, they will then be able to hit the "Save Form" button at the bottom of the page.

This will then show them a working preview of their form; as well as give them the option to send the form configuration out to an API, download the configuration as a JSON file and go back to further edit the form if they want to change something.

-insert picture of the rendered form and JSON config

After the form is created and saved, the user will be able to access that form configuration in many different ways outisde of the applicaiton.

