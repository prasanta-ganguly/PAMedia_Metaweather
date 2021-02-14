# PAMedia_Metaweather
This is a very basic test approach to Metaweather API automation scenario given by PAMedia
Q1. Explain why you chose to use those particular tools/frameworks in the technical challenge?

Ans. Considering the time available to me I find this framework very simple to quickly test the weather of a city for the given endpoint.
And since currently I am working in a Selenium BDD project hence find it i easy to implement the scenario in BDD format than TestNG way of implementation.

Q2. Describe the reason for the scope of your solution. Why did you test what you did, and why didn’t you test other things?

Ans. The scope of the solution is focused on location and date so that the same script can be used for multiple locations and dates. Location is handled by
parameterized the tests and a date util class is created to handle different dates.

I only tried to test tomorrow's weather of the city and to achieve that I first tried to check the city name againt its woeid number and then fetched the weather.
I did not validate many things since I am not clear with the functionality and do not know what exactly I am expeted to  validate when getting so much of data
for tomorrow's weather of a city.

Q3. What questions would you ask your Product Owner / what information would you need to know, to be able to test the whole MetaWeather API service comprehensively?

a) What is the dynamic nature of the data?
b) What are the data that are dynamic in each node?
c) Max and min value of each numeric data and their type
d) What are the validations that are expeted to be looked at from client perspective
e) Can we get an endpoint to get tomorrow's weather by location also.
For example https://www.metaweather.com/api/location/Nottingham/2021/02/14/ and not only https://www.metaweather.com/api/location/30720/2021/02/14/
where Nottingham = 30720

