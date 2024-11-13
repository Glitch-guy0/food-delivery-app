# Food Delevery Application

## Tech Stack

### Tasks
- Auth page
  - only **one** route (login)
  - contains signin and login on the same page
  - only changes the string from (signin / login)
  - and **separate handling functions**
- middleware for protected routes (middleware should be fast)
  - **jose**(jwt token reader)
  - layout / skeleton screen (server space) / loading screen
    - which is a public screen, but the route on client remains same
    - onnly in server side changes
    - when the data is correct then render **real** page else
    - send them to login screen
    