package Runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "/Users/laxman_kouja/Documents/GitHub/FreeCrmBDDframework/src/main/java/Features/deals.feature"
		,glue = { "stepDefinitions","json:json_output/cucumber.json","junit:junit_xml/cucumber.xml"},
		format={"pretty","html:test-output"},
		strict=true,
		monochrome=true,
		dryRun=false
		)

public class TestRunner_deals {

}
