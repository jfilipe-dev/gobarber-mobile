# GoBarber
#### A mobile application for make appointments in a barber shop.

### 📺 Preview
<img src="https://github.com/jfilipe-dev/previews/blob/master/InShot_20200707_222110757.gif?raw=true" width="280">

### 👨🏻‍💻 Stack and extensions
- React native with typescript
- Axios
- React navigation
- Styled components
- Async Storage
- Datetime picker
- Image editor
- Unform
- Date fns
- Image picker
- React native vector icons

### 💻 Features
- Log in and register
- List providers
- List available times
- Make an appointment
- Update profile information
- Change password
- Upload avatar photo

### 💾 How to install
1. Clone this repository - 
`git clone https://github.com/jfilipe-dev/gobarber-mobile.git`

2. Install the dependencies - 
`yarn`

4. Install and configure backend
<a href="https://github.com/jfilipe-dev/gobarber-backend">GoBarber backend</a>

4. Run aplication (emulator)
- android - 
`adb reverse tcp:3333 tcp:3333`
`yarn android`

- ios - 
`cd ios`
`pod install`
`cd ..`
`yarn ios`
