package Steps;

import io.cucumber.java.en.*;

import static io.restassured.RestAssured.*;
import static org.hamcrest.Matchers.*;

import EndPoints.baseUrl;
import Utils.dateUtil;





public class nottingham_weather_test extends baseUrl{
	
	dateUtil util = new dateUtil();
	baseUrl url = new baseUrl();
	
	@Given("^client performs GET operations to search the (.*) to get (.*) number$")
	public void client_performs_GET_operations_to_search_the_Nottingham_to_get_woeid_number(String city, int woeid) {

		//baseURI = "https://www.metaweather.com";

		given().
		header("Content-Type", "application/json").
		when().
		get(url.baseURL()+querySearch+city).
		then().
		statusCode(200).
		body("title", hasItem(city)).
		body("woeid", hasItem(woeid)).
		log().all();
	}

	@When("^client performs GET operation with (.*) to get next five days weather$")
	public void client_performs_GET_operation_with_to_get_next_five_days_weather(int woeid) {
		

		given().
		header("Content-Type", "application/json").
		when().
		get(url.baseURL()+location+woeid).
		then().
		statusCode(200).
		body("consolidated_weather.applicable_date[0]", is(util.getCurrentResultDate())).
		body("consolidated_weather.applicable_date[5]", is(util.get5AdvanceDate())).
		body("woeid", is(woeid)).
		log().body();

	}

	@Then("^get tomorrow city weather of (.*)$")
	public void get_tomorrow_city_weather(int woeid) {
		
		given().
		header("Content-Type", "application/json").
		when().
		get(url.baseURL()+location+woeid+"/"+util.getCurrentQueryDate()).
		then().
		//statusCode(200).
		body("applicable_date[0]", is(util.getTomorrowDate())).
		body("applicable_date[50]", is(util.getTomorrowDate())).
		log().body();

	}

}
