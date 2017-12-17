$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM Login Feature",
  "description": "",
  "id": "free-crm-login-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 3,
      "value": "#Scenario: Free CRM Login Test Scenario without Outline"
    },
    {
      "line": 5,
      "value": "#Given User is already on Login Page"
    },
    {
      "line": 6,
      "value": "#When title of login page is Free CRM"
    },
    {
      "line": 7,
      "value": "#Then user enter \"vijaygk\" and \"akshata@10\""
    },
    {
      "line": 8,
      "value": "#Then user clicks on login button"
    },
    {
      "line": 9,
      "value": "#And user is on home page"
    }
  ],
  "line": 11,
  "name": "Free CRM Login Test Scenario",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 13,
  "name": "User is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "user enter \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "user is on home page",
  "keyword": "And "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 20,
      "id": "free-crm-login-feature;free-crm-login-test-scenario;;1"
    },
    {
      "cells": [
        "vijaygk",
        "akshata@10"
      ],
      "line": 21,
      "id": "free-crm-login-feature;free-crm-login-test-scenario;;2"
    },
    {
      "cells": [
        "naveenk",
        "test@123"
      ],
      "line": 22,
      "id": "free-crm-login-feature;free-crm-login-test-scenario;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 21,
  "name": "Free CRM Login Test Scenario",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 13,
  "name": "User is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "user enter \"vijaygk\" and \"akshata@10\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "user is on home page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginstepDefinition.user_already_on_login_page()"
});
formatter.result({
  "duration": 4907745839,
  "status": "passed"
});
formatter.match({
  "location": "LoginstepDefinition.title_of_login_page_is_Free_CRM()"
});
formatter.result({
  "duration": 10689600,
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
  "duration": 65477087,
  "status": "passed"
});
formatter.match({
  "location": "LoginstepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 33723500,
  "status": "passed"
});
formatter.match({
  "location": "LoginstepDefinition.user_is_on_home_page()"
});
formatter.result({
  "duration": 4457426,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Free CRM Login Test Scenario",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 13,
  "name": "User is already on Login Page",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "title of login page is Free CRM",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "user enter \"naveenk\" and \"test@123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "user clicks on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "user is on home page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginstepDefinition.user_already_on_login_page()"
});
formatter.result({
  "duration": 4186544087,
  "status": "passed"
});
formatter.match({
  "location": "LoginstepDefinition.title_of_login_page_is_Free_CRM()"
});
formatter.result({
  "duration": 7121159,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "naveenk",
      "offset": 12
    },
    {
      "val": "test@123",
      "offset": 26
    }
  ],
  "location": "LoginstepDefinition.user_enter_username_and_password(String,String)"
});
formatter.result({
  "duration": 55218396,
  "status": "passed"
});
formatter.match({
  "location": "LoginstepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 28911103,
  "status": "passed"
});
formatter.match({
  "location": "LoginstepDefinition.user_is_on_home_page()"
});
formatter.result({
  "duration": 5433278,
  "status": "passed"
});
});