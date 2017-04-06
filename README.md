# hybridAppWithJS

Period-4 Hybrid App Development

### Explain the concept of: Hybrid Mobile App Development
Hybrid mobile apps are like any other apps you’ll find on your phone. They install on your device. You can find them in app stores. With them, you can play games, engage your friends through social media, take photos, track your health, and much more.

Like the websites on the internet, hybrid mobile apps are built with a combination of web technologies like HTML, CSS, and JavaScript. The key difference is that hybrid apps are hosted inside a native application that utilizes a mobile platform’s WebView. (You can think of the WebView as a chromeless browser window that’s typically configured to run fullscreen.) This enables them to access device capabilities such as the accelerometer, camera, contacts, and more. These are capabilities that are often restricted to access from inside mobile browsers. Furthermore, hybrid mobile apps can include native UI elements in situations where necessary, as evidenced by Basecamp’s approach towards hybrid mobile app development.

It can be very difficult to tell how a mobile application is built. Hybrid mobile applications are no different. A well-written hybrid app shouldn’t look or behave any differently than its native equivalent. More importantly, users don’t care either way. They simply want an application that works well.

![hybrid1](https://cloud.githubusercontent.com/assets/16150075/24773151/4a880236-1b14-11e7-82a5-b72112b67b37.PNG)
![hybrid2](https://cloud.githubusercontent.com/assets/16150075/24773135/3cb931d4-1b14-11e7-90d0-ef1724fa46f6.PNG)

### Explain the Pros & Cons of using Hybrid Mobile App Development compared to Native App Development
Pros for Hybrid:
* Much cheaper than Native apps which makes it good for startups.
* It can be used across platforms like IOS and android.
* It is faster to develop and make a demo of the app.

Cons for Hybrid:
* Performance isn't as good and not as fast as Native
* Can miss out on extra native api’s that are not supported by Cordova
* Doesn't utilize native features (like the camera) as good as Native applications.
* Does not support newly arrived features as quickly as Native.

### Explain about the "building blocks" involved in an Ionic Hybrid Application
Ionic apps are made of high-level building blocks called components. Components allow you to quickly construct an interface for your app. Ionic comes with a number of components, including modals, popups, and cards. Although components are primarily Angular directives with HTML and CSS, some components also include more advanced JavaScript functionality.

- AngularJS for presentation layer.
- Cordova for communication with phone hardware.
- HTML5 & Sass for styling and display of components.
- ADB to communicate with phone and enables debugging.
- Node.js to bring it all together.

### Explain and demonstrate ways to debug Hybrid Mobile Applications Running on a real device
Connect your mobile and (if not already done) install the app

Open Chrome and type: chrome://inspect/#devices

You will see something like below. Press inspect and start debugging

### Explain how and why, it is possible for a Hybrid Application to access native phone devices like location, calendar etc. 
Hybrid Apps use frameworks like Cordova and PhoneGap to access the native features of a phone. These frameworks have API's that can access the different features, which makes development of Hybrid Apps relatively easy.

### Explain, using an example you have implemented, the "fundamentals" of an Ionic application.
Ionic uses AngularJS and Cordova to create Hybrid Apps, for the styling of this app Ionic uses CSS and JavaScript like BootStrap does. When creating the HTML for a the app, Ionic specific directives is used like this.

```
  <ion-side-menu side="left">
    <ion-header-bar class="bar-dark">
      <h1 class="title">Projects</h1>
      <button class="button button-icon ion-plus" ng-click="newProject()">
      </button>
    </ion-header-bar>
    <ion-content scroll="false">
      <ion-list>
        <ion-item ng-repeat="project in projects" ng-click="selectProject(project, $index)" ng-class="{active: activeProject == project}">
          {{project.title}}
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-side-menu>
```
### Explain using an example how your Hybrid Application communicates with a backend 

### Explain, with focus on location, technologies related to locations used on:
#### Your app (client side)

#### Your backend
