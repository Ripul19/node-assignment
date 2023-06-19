# node-assignment

## Description

This repo contains the read and write operations on an api.
It is build on top of RDBMS to store data

## Steps for running

1. Clone the repo
2. Change the id password for your SQL database and connection details are in util/database.js file

3. **From data** folder you can import the excel files to populate the data and also some sample output data is present
4. departments.csv: This has information about the departments
5. values.csv: This has some data and it is need to populate some data for the forms
6. finalData.csv: This has the sample output and even if you don't import it, you can complete one flow and check the output

## What I Did
I was able to create a complete flow of the whole form upto saving the data in database
You can check that by running it once

But the things which i was not able to do:
1. I was not able to redirect it automatically after submitting the form, so you can check that by navigating to /savedData to check the data you just added
2. I didn't add any button to get all of the data from database. You can check that by navigating to /data so you can check that.
3. I didn't create the views for both pages, sp that data is just in the json format
4. As I odnot have knowlege and experience in Jquery and AJAX, so I had used chatgpt for that part
