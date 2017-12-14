Feature: Free CRM Login Feature

Scenario: Free CRM Login Test Scenario without Outline

Given User is already on Login Page
When title of login page is Free CRM
Then user enter "vijaygk" and "akshata@10"
Then user clicks on login button
And user is on home page

#Scenario Outline: Free CRM Login Test Scenario

#Given User is already on Login Page
#When title of login page is Free CRM
#Then user enter "<username>" and "<password>"
#Then user clicks on login button
#And user is on home page

#Examples:
#	| username | password 	|
#	| vijaygk  | akshata@10 |
#	| naveenk  | test@123	|

