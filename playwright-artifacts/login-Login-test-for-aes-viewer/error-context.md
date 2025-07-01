# Page snapshot

```yaml
- region
- region
- button "Close Messages": 
- region:
  - text:  Error Message User name or password invalid. To reset your admin password click
  - link "here.":
    - /url: https://developer.servicenow.com/app.do#!/instance?pa=pwd_reset
  - text: Please note this is different than the credentials used to sign in to the Developer Site.
- img "ServiceNow"
- text: ServiceNow Home Page
- heading "Log in" [level=1]
- text: User name
- textbox "User name"
- text: Password
- paragraph: "\"Password hidden"
- textbox "Password"
- button "Show Password": 
- button "Log in"
- link "Forgot Password ?":
  - /url: /$pwd_reset.do?sysparm_url=ss_default
- status
- text: "error: User name or password invalid. To reset your admin password click here. Please note this is different than the credentials used to sign in to the Developer Site..dp-invalid-login { height:25px; padding:10px; margin:5px 20px; } span.dp-invalid-login-msg { display:block; font-size:16px; top:-10px; position:relative; }"
- complementary "Timing details":
  - button "Response Time": 
```