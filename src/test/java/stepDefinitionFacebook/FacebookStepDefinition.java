package stepDefinitionFacebook;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class FacebookStepDefinition {
	WebDriver driver;
	
	@Before
	public void runBeforeScenario(){
		System.setProperty("webdriver.chrome.driver", System.getProperty("user.dir")+ "/drivers/chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
	}
	
	@After
	public void runAfterScenario(){
		driver.quit();
	}

	@Given("User navigates to facebook home page")
	public void user_navigates_to_facebook_home_page() throws Throwable {

		driver.get("https://www.facebook.com/");
	    
	}
	
	@When("^Enter  valid \"([^\"]*)\" and \"([^\"]*)\"$")
	public void enter_valid_and(String username, String password) throws Throwable {
		driver.findElement(By.xpath(".//*[@id='email']")).sendKeys(username);
	    driver.findElement(By.xpath(".//*[@id='pass']")).sendKeys(password);
	    driver.findElement(By.xpath(".//*[@id='u_0_2']")).click();
	}

	@Then("^Login is not successful$")
	public void login_is_not_successful() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		boolean errorTextIsVisible = driver.findElement(By.cssSelector("div._4rbf")).isDisplayed();
		Assert.assertTrue("error element was not displayed", errorTextIsVisible);
	    String errorText = driver.findElement(By.cssSelector("div._4rbf")).getText();
	    Assert.assertEquals(errorText, "The email address that you've entered doesn't match any account. Sign up for an account.");
	}


}