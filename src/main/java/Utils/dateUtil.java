package Utils;

import java.text.Format;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

public class dateUtil {
	
	//to get today's date in yyyy/mm/dd format
	public String getCurrentQueryDate() {
		 String today;
		  Date date;
		  Format formatter;
		  Calendar calendar = Calendar.getInstance();
		  
		  calendar.add(Calendar.DATE, 1);
		  date = calendar.getTime();
		  formatter = new SimpleDateFormat("yyyy/MM/dd");
		  today = formatter.format(date);
		  System.out.println("Tomorrow : " + today);
		  return today;
	}
	
	//to get today's date in yyyy-mm-dd format
	public String getCurrentResultDate() {
		
				String today;
				  Date date;
				  Format formatter;
				  Calendar calendar = Calendar.getInstance();
				  
				  calendar.add(Calendar.DATE, 0);
				  date = calendar.getTime();
				  formatter = new SimpleDateFormat("yyyy-MM-dd");
				  today = formatter.format(date);
				  System.out.println("Today : " + today);
				  return today;
	}
	
	public String getTomorrowDate() {
		
		String tomorrow;
		Date dateOne;
		  Format formatter;

		  Calendar calendar = Calendar.getInstance();
		  
		  calendar.add(Calendar.DATE, 1);
		  dateOne = calendar.getTime();
		  formatter = new SimpleDateFormat("yyyy-MM-dd");
		  tomorrow = formatter.format(dateOne);
		  System.out.println("Tomorrow : " + tomorrow);
		  return tomorrow;
	}
	
	//to get date of fifth date from today's date in yyyy-mm-dd format
	public String get5AdvanceDate() {
		
		 String after5Days;
			Date dateOne;
			  Format formatter;

			  Calendar calendar = Calendar.getInstance();
			  
			  calendar.add(Calendar.DATE, 5);
			  dateOne = calendar.getTime();
			  formatter = new SimpleDateFormat("yyyy-MM-dd");
			  after5Days = formatter.format(dateOne);
			  System.out.println("Tomorrow : " + after5Days);
			  return after5Days;
	}

}
