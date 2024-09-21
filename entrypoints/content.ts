export default defineContentScript({
  matches: ['*://*.zen-browser.app/*'],
  main() {
    console.log('Hello from content script in Min ToDoList Extension! Thanks for the downloading! 🚀');
  },
});
