 # 🚀 My React notes app is ready! 

## Here's a technical look at some of the key features I developed:

**Pages and Routing**: I used React Router to create a Single Page Application (SPA) with multiple routes. The main routes include / for viewing notes, /create-note for creating new notes, and /edit-note/:id for editing existing notes.

**Note Creation**: On the create notes page, I implemented a controlled form using React Hooks. Users can input a title and details for their notes. When they click "Save," I generate a note with a unique ID (using the uuid library) and the date and time of creation.

**Note Editing**: On the note editing page, I allow users to update the title and details of an existing note. To make this, I retrieve the note with the corresponding ID from the URL and update the React state with the new data.

**Creation Date**: I implemented the useCreateDate function to generate the readable date and time of note creation. This helps users know when a note was created.

**Data Persistence**: To ensure that notes persist between sessions, I used local storage. I stored and retrieved notes as JSON objects.

**Note Search**: I added a search function that filters notes based on user-entered keywords. This function uses JavaScript to compare text strings and display relevant results.

Hope you enjoy it!

deployed project: [mynotes-app-react.netlify.app/](https://mynotes-app-react.netlify.app)
