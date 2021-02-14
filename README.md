# PAMedia_Metaweather
This is a very basic test approach to Metaweather API automation scenario given by PAMedia

# Test Overview:
This is a Maven project.
This test framework is a very simple and quick approach to fetch the tomorrow’s weather of a particular city in meataweather.
**Please see the image “RestAssured_framework.png” to understand the framework structure mentioned below.**
There is a parameterized feature file with Scenario Outline in resource folder and a corresponding step definition file in test folder.
One utility file for different date functions is inside main folder and there is one baseUrl file under test folder.

# Execute in your local:
1.	Clone this project to the desired location of your machine
2.	Open your CLI and go to the folder of the project
3.	And use command “mvn clean install” to run the project
4.  Check index.html under target -> HTMLReports to see the test result

# Execute in Jenkins:
1.	Create a new item and select Maven project
2.	Go to configure and select Source Code Management = GIT
3.	Enter Repository URL = https://github.com/prasanta-ganguly/PAMedia_Metaweather 
4.	Branch Specifier = */master
5.	Under the build, Root POM = pom.xml
6.	Goals and options = clean install and save & apply
7.	Open the project from dashboard and click on Build Now


# Q1. Explain why you chose to use those particular tools/frameworks in the technical challenge?

Ans. Considering the time available to me I find this framework very simple to quickly test the weather of a city for the given endpoint.
And since currently I am working in a Selenium BDD project hence find it i easy to implement the scenario in BDD format than TestNG way of implementation.

# Q2. Describe the reason for the scope of your solution. Why did you test what you did, and why didn’t you test other things?

Ans. The scope of the solution is focused on location and date so that the same script can be used for multiple locations and dates. Location is handled by
parameterized the tests and a date util class is created to handle different dates.

I only tried to test tomorrow's weather of the city and to achieve that I first tried to check the city name againt its woeid number and then fetched the weather.
I did not validate many things since I am not clear with the functionality and do not know what exactly I am expeted to  validate when getting so much of data
for tomorrow's weather of a city.

# Q3. What questions would you ask your Product Owner / what information would you need to know, to be able to test the whole MetaWeather API service comprehensively?

a) What is the dynamic nature of the data?

b) What are the data that are dynamic in each node?

c) Max and min value of each numeric data and their type

d) What are the validations that are expeted to be looked at from client perspective

e) Can we get an endpoint to get tomorrow's weather by location also.
For example https://www.metaweather.com/api/location/Nottingham/2021/02/14/ and not only https://www.metaweather.com/api/location/30720/2021/02/14/
where Nottingham = 30720

f) Purpose of these data and where these will be stored and how these data will be shown to users i.e. is there any cascaded nature in the data relationship.

g) How any data dependency will be achieved in GUI?

# Q4. After completing the technical challenge, what would you do differently if you were asked to do the same challenge again?

Ans. a) I will try to explore few different types of framework.

b) Will not use DateUtil class to get dates using different functions and will try to parameterize the date using Scenario Outlook.

c) Will validate static data in body and the most important parameters that are present in nodes to be tested.
