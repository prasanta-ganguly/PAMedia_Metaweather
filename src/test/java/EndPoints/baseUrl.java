package EndPoints;

import static io.restassured.RestAssured.*;

public class baseUrl {
	
	public final String querySearch = "/api/location/search/?query=";
	public final String location = "/api/location/";
	
	public static String baseURL() {		
		baseURI = "https://www.metaweather.com";
		//String url = baseURI;
		return baseURI;
	}

}
