## 📚 BookTracker
This is a simple Angular (This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.1) project built as a hands-on exercise to learn and demonstrate the framework's modern features.

The application allows a user to manage a book collection, classifying books into four dynamic lists:

* Wishlist

* Unread

* Reading

* Read

The primary goal is to test how the application state reacts and updates automatically using Signals.

## 🚀 Key Concepts Demonstrated
This project serves as a practical example of:

Signals: The main state (the book list) is managed in a BookService using a signal().

Computed Signals: The four lists (wishlist, reading, etc.) are generated using computed(). They update automatically whenever the main signal changes.

Standalone Components: The entire application is built without NgModules. AppComponent and BookListComponent are both standalone: true.

Standalone Imports: The BookListComponent imports CommonModule directly into its imports array to use *ngFor and *ngIf.

Signal-based Inputs: The BookListComponent uses the new input() function to receive data from AppComponent.

Simple Architecture: A "smart" service (BookService) manages state, a "smart" component (AppComponent) consumes it, and a "dumb" component (BookListComponent) just presents it.


## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
