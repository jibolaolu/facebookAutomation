$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("FaceBook.feature");
formatter.feature({
  "line": 1,
  "name": "User with valid credential can login to facebook",
  "description": "As a registered facebook user\nI want to be able to login successfully to my account\nSo that i connect with my friends",
  "id": "user-with-valid-credential-can-login-to-facebook",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 6,
  "name": "Login with valid credentials",
  "description": "",
  "id": "user-with-valid-credential-can-login-to-facebook;login-with-valid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "User navigates to facebook home page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Enter  valid \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Login is not successful",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Webpage closes",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "user-with-valid-credential-can-login-to-facebook;login-with-valid-credentials;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 13,
      "id": "user-with-valid-credential-can-login-to-facebook;login-with-valid-credentials;;1"
    },
    {
      "cells": [
        "jiboolau@gmail.com",
        "hackney1"
      ],
      "line": 14,
      "id": "user-with-valid-credential-can-login-to-facebook;login-with-valid-credentials;;2"
    },
    {
      "cells": [
        "seuntests@u.com",
        "london1"
      ],
      "line": 15,
      "id": "user-with-valid-credential-can-login-to-facebook;login-with-valid-credentials;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 6429897139,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Login with valid credentials",
  "description": "",
  "id": "user-with-valid-credential-can-login-to-facebook;login-with-valid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "User navigates to facebook home page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Enter  valid \"jiboolau@gmail.com\" and \"hackney1\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Login is not successful",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Webpage closes",
  "keyword": "Then "
});
formatter.match({
  "location": "FacebookStepDefinition.user_navigates_to_facebook_home_page()"
});
formatter.result({
  "duration": 2922561337,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "jiboolau@gmail.com",
      "offset": 14
    },
    {
      "val": "hackney1",
      "offset": 39
    }
  ],
  "location": "FacebookStepDefinition.enter_valid_and(String,String)"
});
formatter.result({
  "duration": 1476977900,
  "status": "passed"
});
formatter.match({
  "location": "FacebookStepDefinition.login_is_not_successful()"
});
formatter.result({
  "duration": 130912370,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 3389584144,
  "status": "passed"
});
formatter.before({
  "duration": 3771998926,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Login with valid credentials",
  "description": "",
  "id": "user-with-valid-credential-can-login-to-facebook;login-with-valid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "User navigates to facebook home page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Enter  valid \"seuntests@u.com\" and \"london1\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Login is not successful",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Webpage closes",
  "keyword": "Then "
});
formatter.match({
  "location": "FacebookStepDefinition.user_navigates_to_facebook_home_page()"
});
formatter.result({
  "duration": 3572461117,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "seuntests@u.com",
      "offset": 14
    },
    {
      "val": "london1",
      "offset": 36
    }
  ],
  "location": "FacebookStepDefinition.enter_valid_and(String,String)"
});
formatter.result({
  "duration": 1565814274,
  "status": "passed"
});
formatter.match({
  "location": "FacebookStepDefinition.login_is_not_successful()"
});
formatter.result({
  "duration": 238416217,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 2067389419,
  "status": "passed"
});
});