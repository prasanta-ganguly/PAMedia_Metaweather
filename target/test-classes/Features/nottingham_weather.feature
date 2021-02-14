Feature: Verify Nottingham weather

  #Scenario 1
  Scenario Outline: Verifying tomorrow's weather of Nottingham city
    Given client performs GET operations to search the <city> to get <woeid> number
    When client performs GET operation with <woeid> to get next five days weather
    Then get tomorrow city weather of <woeid>

    Examples: 
      | city       | woeid |
      | Nottingham | 30720 |
      | London		 | 44418 |
      | Glasgow		 | 21125 |
 
