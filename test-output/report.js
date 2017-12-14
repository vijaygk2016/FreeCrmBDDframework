$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM Login Feature",
  "description": "",
  "id": "free-crm-login-feature",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Free CRM Login Test Scenario without Outline",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario-without-outline",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "User is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enter \"vijaygk\" and \"akshata@10\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user is on home page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginstepDefinition.user_already_on_login_page()"
});
formatter.result({
  "duration": 7926120308,
  "status": "passed"
});
formatter.match({
  "location": "LoginstepDefinition.title_of_login_page_is_Free_CRM()"
});
formatter.result({
  "duration": 8437451,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "vijaygk",
      "offset": 12
    },
    {
      "val": "akshata@10",
      "offset": 26
    }
  ],
  "location": "LoginstepDefinition.user_enter_username_and_password(String,String)"
});
formatter.result({
  "duration": 98737650,
  "status": "passed"
});
formatter.match({
  "location": "LoginstepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 25085956,
  "status": "passed"
});
formatter.match({
  "location": "LoginstepDefinition.user_is_on_home_page()"
});
formatter.result({
  "duration": 6098594,
  "status": "passed"
});
});