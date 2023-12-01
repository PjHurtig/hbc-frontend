# This is the manual testing document for the HBC React project

---

## Navigation and Routing

---

### Test: Navbar Functionality

---

Test details: Ensure that the navbar appears on every page and that each link routes to the correct page without a page refresh.

Expected Outcome: Clicking on navbar links should take the user to the respective pages instantly.

Outcome: Meets expected criteria. The navbar is visible on all pages and all links are valid and works without the page refreshing.

---

### Test: Sign In/Sign Up Links

Test details: Check if the sign in and sign up links are visible to logged-out users and route correctly.
Expected Outcome: Clicking these links should take the user to the sign in or sign up forms.

Outcome: Meets expected criteria. The sig in and sign up links are visible in the navbar to logged out users and links to the forms for sign up and log in respectively.

---

## Account Creation and Management

---

### Test: Account Creation

---

Test details: Attempt to create a new account with valid credentials.

Expected Outcome: A new account should be created, and the user should be routed to the sign in page.

Outcome: Meets expected criteria. Upon entering valid credentials for a new user the profile is created and the user is redirected to the sign in page.

---

### Test: Sign In

Test details: Try signing in with an existing account.
Expected Outcome: The user should be able to log in and access user-specific features.

Outcome: Meets expected criteria. The user is logged in and the navbar shows link to sign out and user profile insted of sign in and sign up. 

---

### Test: Persistent Login

Test details: Log in, close the browser, and reopen it.
Expected Outcome: The user should remain logged in.

Outcome: Meets expected criteria. The users logged in status is kept in the browsers local storage and the user is still logged in.

---

## Content Creation and Interaction

---

### Test: Create Event/Post/Gear list

Test details: Logged in users should be able to create an 
Event/Post/Gear list.

Expected Outcome: The Event/Post/Gear list should be added and visible to other users.

Outcome: Meets expected criteria. The logged in user has access to the add button in the navbar and can add events, posts and gearlists that are added to the homepage for all users to view.

---

### Test: View Event/Post/Gear list Details

Test details: Click on an Event/Post/Gear list to view its details.

Expected Outcome: Detailed view of the Event/Post/Gear list should be displayed.

Outcome: Meets expected criteria. When clicking the image on the event, post or gearlist the user is taken to the page of that specific event, post or gearlist.

---

### Test: Comment on Post

Test details: Logged in users should be able to comment on posts.

Expected Outcome: Comments should be added under the post.

Outcome: Meets expected criteria. When a user has clicked on a post, a form for creating comments is found under the post, when entering text in the form and adding, the comment is visible under the post.

---

## User Profiles

---

### Test: View Profile

Test details: Click on a users avatar to view their profile.

Expected Outcome: The users profile page with posts, events, and gear lists should be displayed.

Outcome: Meets expected criteria. when clicking a user avatar the profile page of that user is rendered and that profiles events, posts and gearlists are accessible for viewing.

---

### Test: Edit Profile

Test details: Users should be able to edit their own profiles.

Expected Outcome: Changes made should be saved and reflected on the user's profile.

Outcome: Meets expected criteria. A logged in user can edit their own profile in the profilepage and the changes are reflected in the profilepage efter saving.

---

## Creating Gear Lists with Gear Items

---

### Test: Adding Gear Items to Gear List

Test details: Add gear items to an existing gear list.

Expected Outcome: Gear items should be added to the list and visible under the gear list details.

Outcome: Meets expected criteria. When the user is on the gear list page of a gear list that they own the "add gear item" button is visible which opens a modal for adding gear items, the modal stays open until manually closed so that a user can easily add several gear items to the list.

---

## Managing Events and Calendar Integration

---

### Test: Creating Calendar Events

---

Test details: Create an event and verify its appearance on the calendar.

Expected Outcome: The event should be created successfully and appear on the relevant dates in the calendar.

Outcome: Meets expected criteria. When creating an event the calendar is updated with the event according to the date and time entered in the creation form.

---

### Test: Event Details from Calendar

Test details: Click on an event in the calendar.

Expected Outcome: Detailed view of the event should be displayed.

Outcome: Meets expected criteria. when clicking on an event in the calendar the user is taken to the event page for that event.

---

## Confirm Delete Functionality

---

### Test: Deleting a Event/Post/Gear list

Test details: Attempt to delete a Event/Post/Gear list using the confirm delete dialog.

Expected Outcome: The Event/Post/Gear list should be deleted after confirming the action.

Outcome: Meets expected criteria. When a logged in user that owns a event, post or gearlist tries to delete the item a modal  with confirm deletion appears. When confirming the item is then deleted.

---

### Test: Cancel Deletion

Test details: Open confirm delete dialog and then cancel the action.

Expected Outcome: The item should not be deleted, and the dialog should close without any action.

Outcome: Meets expected criteria. If the user clicks cancel in the confirm delete modal the item is not deleted.

---

## Infinite Scroll Implementation

---

### Test: Infinite Scrolling on Event/Post/Gear list/Comments Page

---

Test details: Scroll down on the posts page.

Expected Outcome: New posts should load automatically without needing to refresh the page.

Outcome: Meets expected criteria. if there are more than 10 items they are not loaded until the user scrolls down, then they are loaded and displayed. 

---

## Success Messages

---

### Test: Success Message on Sign up / Log in 

Test details: Create user then log and look for success messages.

Expected Outcome: A success message should appear confirming the sign up / log in.

Outcome: Meets expected criteria. When successfully creating a user using the sign up form or signing in with existing user details an alert is visible for 3 seconds telling the user that the action was successful. 

---

### Test: Success Message on Post/Event/Gear list/Gear item/Comment Creation

Test details: Create a Post/Event/Gear list/Gear item and look for a success message.

Expected Outcome: A success message should appear confirming the creation.

Outcome: Meets expected criteria. When a user creates a post, gear list, event, gear item or comment an alert is visible for 3 seconds telling the user that the action was successful.

---

### Test: Success Message on Editing

Test details: Edit a Post/Event/Gear list/Gear item and save changes.

Expected Outcome: A success message should appear confirming the changes.

Outcome: Meets expected criteria. when a user updates a post, gear list, event, gear item or comment with valid data an alert is visible for 3 seconds telling the user that the action was successful.

---

### Test: Success Message on Deletion

Test details: Delete a Post/Event/Gear list/Gear item.

Expected Outcome: A success message should appear confirming the deletion.

Outcome: Meets expected criteria. Efter confirming deletion an alert is visible for 3 seconds telling the user that the deletion was successful.