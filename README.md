
# Scavenger Hunt 

A Alert management application which help the customers to find the service center / branches of the company in their locality.


## 🔗 Live Link

This application is live and available online [here](https://scavenger-hunt-g.netlify.app/)

  
## API Reference

#### Base Url

```http
  https://scavenger-hunt-api-g.herokuapp.com/
```
#### Get item

```http
  GET /api/v1/
```

| Reference | Method     | Purpose                       |
| :-------- | :------- | :-------------------------------- |
| `branch/login`      | `POST` | Return JSON contains list of alerts for the authorized branch |
| `customer/branches`      | `POST` | Return JSON contains list of branches in the locality (In that Pincode) |


## Screenshots
Home
![App Screenshot](https://drive.google.com/uc?export=view&id=1iA2Mxjhnq66qbhUDHUGTnAePJQQ_n0SF)
Login 
![App Screenshot](https://drive.google.com/uc?export=view&id=1iDKQj6b70nzB2Uj1c2dUeTURndF4126Q)
Search Results 
![App Screenshot](https://drive.google.com/uc?export=view&id=1iJkhtvbC47f2JSmdJ_rUVDX4aKVzue74)
Branch Representative Dashboard
![App Screenshot](https://drive.google.com/uc?export=view&id=1iLqBh_19-AoADeJ4bdD6SYNsaoMf6xGa)

## Features

- Display the details of the branches serving that pincode.
- An alert is generated for all the branches present in that pincode.
- Alert is generated for the administrator even if there is no branch serving that pincode.
- Alerts generated are persistent i.e. no branch/administrator miss any alert if a user is not logged into the system at the time the alert got generated.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
