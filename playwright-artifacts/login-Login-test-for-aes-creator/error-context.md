# Page snapshot

```yaml
- region
- region
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
```