# node-assignment

## Description

This repo contains the read and write operations on an api.
It is build on top of RDBMS to store data

## Steps for running

1. Clone the repo
2. Change the id password for your SQL database and connection details are in the util/database.js file

3. **From data** folder import the Excel files to populate the data in your database with the name **nodejs-assignment**.
4. Table names: **departments, finaldata, values**.
5. departments.csv: This has information about the departments
6. values.csv: This has some data and it is needed to populate some data for the forms
7. finalData.csv: This has the sample output and even if you don't import it, you can complete one flow and check the output
8. Run npm install to download all the node modules.
9. After all the files are downloaded run **app.js** file or download nodemon after that you can run it with npm start.

## What I Did

**As I do not have knowlege and experience in Jquery and AJAX, so I used CHATGPT for that part**

I was able to create a complete flow of the whole form upto saving the data in database
You can check that by running it once

But the things which I was not able to do:
1. I was not able to redirect it automatically after submitting the form, so you can check that by navigating to /savedData to check the data you just added
2. I didn't add any button to get all of the data from the database. You can check that by navigating to /data so you can check that.
3. I didn't create the views for both pages so that data is just in the JSON format.
