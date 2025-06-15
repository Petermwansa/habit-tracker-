# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).


## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.










## Reset
I first reset the project to start with a clean template by running 

```bash
npm run reset-project
```

## IMPLEMENTATION OF TABS FOR THE NAVIGATION

1. First create a tabs folder liek this: "(tabs)"
   then move the login and the index screens there
2. then include a layput file there 
3. add the icons using this website [1](https://icons.expo.fyi/Index)

4. We now add the datatbase and start with authentication
   the database used was appwrite with: 
```bash
npx expo install react-native-appwrite react-native-url-polyfill
```
5. then set up the appwrite configurations
6. Add the auth.tsx file and use the routeguard component to render the auth.tsx file if the isAuth is not true

7. 
   npx install react-native-paper
# habit-tracker-
