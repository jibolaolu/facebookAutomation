package runnerFacebook;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


@RunWith(Cucumber.class)
@CucumberOptions ( features = "Features",
glue="stepDefinitionFacebook",
plugin={"html:target/cucumber-html-report",
"json:target/cucumber-report.json", "pretty:target/cucumber-pretty.txt","usage:target/cucumber-usage.json",
"junit:target/cucumber-result.xml"}

)

public class AppRunner3 {
	

}
