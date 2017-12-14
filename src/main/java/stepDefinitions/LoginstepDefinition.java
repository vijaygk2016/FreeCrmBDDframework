package stepDefinitions;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.firefox.FirefoxDriver;


import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginstepDefinition {

	WebDriver driver;

	@Given("^User is already on Login Page$")
	public void user_already_on_login_page() {

		//System.setProperty("webdriver.chrome.driver","/Users/laxman_kouja/Documents/GitHub/FreeCrmBDDframework/src/main/java/Resources/chromedriver");
		//ChromeOptions options = new ChromeOptions();
		//options.addArguments("disable-infobars");
		//options.addArguments("--disable-notifications");
		//driver = new ChromeDriver(options);
		//driver = new ChromeDriver();
		//System.setProperty("webdriver.gecko.driver", "path/to/geckodriver.exe");

		//Now you can Initialize marionette driver to launch firefox
		System.setProperty("webdriver.gecko.driver","/Users/laxman_kouja/Documents/GitHub/FreeCrmBDDframework/src/main/java/Resources/geckodriver");
		driver = new FirefoxDriver();
		driver.get("https://www.freecrm.com/index.html");

	}

	@When("^title of login page is Free CRM$")
	public void title_of_login_page_is_Free_CRM() {
		String title = driver.getTitle();
		System.out.println(title);
		Assert.assertEquals(title, "#1 Free CRM for Any Business: Online Customer Relationship Software");
	}

	@Then("^user enter \"(.*)\" and \"(.*)\"$")
	public void user_enter_username_and_password(String username,String password) {
		System.out.println("username : "+ username);
		System.out.println("password : "+ password);
		
		driver.findElement(By.xpath(".//*[@id='loginForm']/div/input[1]")).sendKeys(username);
		driver.findElement(By.xpath(".//*[@id='loginForm']/div/input[2]")).sendKeys(password);
	}

	@Then("^user clicks on login button$")
	public void user_clicks_on_login_button() {
		
		// Write code here that turns the phrase above into concrete actions
		// WebElement loginBtn =
		// driver.findElement(By.xpath(".//*[@id='loginForm']/div/div/input"));

		//JavascriptExecutor js= (JavascriptExecutor)driver;
		//js.executeScript("arguments[0].click():",loginBtn);

		driver.findElement(By.xpath(".//*[@id='loginForm']/div/div/input")).click();
		System.out.println("Click on Login Button");
	}

	@Then("^user is on home page$")
	public void user_is_on_home_page() {
		// Write code here that turns the phrase above into concrete actions
		String title = driver.getTitle();
		System.out.println("Hove Page title : " + title);
		Assert.assertEquals(title, "#1 Free CRM for Any Business: Online Customer Relationship Software");

	}

}
