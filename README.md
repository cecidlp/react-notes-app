# 🚀 My React Notes App is Ready! 

## Technical Highlights

### 🌐 Pages and Routing
- Utilized React Router to create a Single Page Application (SPA) with multiple routes:
  - `/`: View notes.
  - `/create-note`: Create new notes.
  - `/edit-note/:id`: Edit existing notes.

### ✍️ Note Creation
- Implemented a controlled form using React Hooks for creating notes.
- Users can input a title and details, generating a note with a unique ID (using the uuid library) and creation date upon clicking "Save."

### 📝 Note Editing
- Enables users to update the title and details of an existing note on the edit note page.
- Retrieves the note with the corresponding ID from the URL and updates the React state with new data.

### 📅 Creation Date
- Implemented `useCreateDate` function to generate a readable date and time of note creation.

### 💾 Data Persistence
- Ensured notes persist between sessions using local storage.
- Stored and retrieved notes as JSON objects.

### 🔍 Note Search
- Added a search function for filtering notes based on user-entered keywords.
- Uses JavaScript to compare text strings and display relevant results.

## 🎉 Enjoy the Experience!

Deployed Project: [mynotes-app-react.netlify.app](https://mynotes-app-react.netlify.app)
