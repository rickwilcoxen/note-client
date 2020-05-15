import React from 'react'

const NoteForm = ({ usernote, handleSubmit, handleChange }) => (
  <form onSubmit={handleSubmit}>
    <label>Title: </label>
    <input
      placeholder="Note Title"
      name="title"
      value={usernote.title || ''}
      onChange={handleChange}
    />
    <label>Contents: </label>
    <input
      placeholder="Note contents"
      name="contents"
      value={usernote.contents || ''}
      onChange={handleChange}
    />
    <label>Tag: </label>
    <input
      placeholder="Note tag"
      name="tag"
      value={usernote.tag || ''}
      onChange={handleChange}
    />
    <button type="submit">Submit</button>
  </form>
)

// const BookForm = () => {
//   return (
//     // jsx
//   )
// }

export default NoteForm
