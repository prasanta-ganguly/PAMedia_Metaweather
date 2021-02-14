$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Features/nottingham_weather.feature");
formatter.feature({
  "name": "Verify Nottingham weather",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Verifying tomorrow\u0027s weather of Nottingham city",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "client performs GET operations to search the \u003ccity\u003e to get \u003cwoeid\u003e number",
  "keyword": "Given "
});
formatter.step({
  "name": "client performs GET operation with \u003cwoeid\u003e to get next five days weather",
  "keyword": "When "
});
formatter.step({
  "name": "get tomorrow city weather of \u003cwoeid\u003e",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "city",
        "woeid"
      ]
    },
    {
      "cells": [
        "Nottingham",
        "30720"
      ]
    },
    {
      "cells": [
        "London",
        "44418"
      ]
    },
    {
      "cells": [
        "Glasgow",
        "21125"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verifying tomorrow\u0027s weather of Nottingham city",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "client performs GET operations to search the Nottingham to get 30720 number",
  "keyword": "Given "
});
formatter.match({
  "location": "Steps.nottingham_weather_test.client_performs_GET_operations_to_search_the_Nottingham_to_get_woeid_number(java.lang.String,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "client performs GET operation with 30720 to get next five days weather",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.nottingham_weather_test.client_performs_GET_operation_with_to_get_next_five_days_weather(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "get tomorrow city weather of 30720",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.nottingham_weather_test.get_tomorrow_city_weather(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verifying tomorrow\u0027s weather of Nottingham city",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "client performs GET operations to search the London to get 44418 number",
  "keyword": "Given "
});
formatter.match({
  "location": "Steps.nottingham_weather_test.client_performs_GET_operations_to_search_the_Nottingham_to_get_woeid_number(java.lang.String,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "client performs GET operation with 44418 to get next five days weather",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.nottingham_weather_test.client_performs_GET_operation_with_to_get_next_five_days_weather(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "get tomorrow city weather of 44418",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.nottingham_weather_test.get_tomorrow_city_weather(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verifying tomorrow\u0027s weather of Nottingham city",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "client performs GET operations to search the Glasgow to get 21125 number",
  "keyword": "Given "
});
formatter.match({
  "location": "Steps.nottingham_weather_test.client_performs_GET_operations_to_search_the_Nottingham_to_get_woeid_number(java.lang.String,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "client performs GET operation with 21125 to get next five days weather",
  "keyword": "When "
});
formatter.match({
  "location": "Steps.nottingham_weather_test.client_performs_GET_operation_with_to_get_next_five_days_weather(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "get tomorrow city weather of 21125",
  "keyword": "Then "
});
formatter.match({
  "location": "Steps.nottingham_weather_test.get_tomorrow_city_weather(int)"
});
formatter.result({
  "status": "passed"
});
});