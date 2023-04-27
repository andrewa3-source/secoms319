import './App.css';
import App from './App';
import Read from './Read';
import Update from './Update';
import Delete from './Delete';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function Create() {
    function goToApp() {
        const root = ReactDOM.createRoot(document.getElementById("root"));
        root.render(
          <React.StrictMode>
            <App />
          </React.StrictMode>
        );
      }
      function goToCreate() {
        const root = ReactDOM.createRoot(document.getElementById("root"));
        root.render(
          <React.StrictMode>
            <Create />
          </React.StrictMode>
        );
      }
      
      function goToRead() {
        const root = ReactDOM.createRoot(document.getElementById("root"));
        root.render(
          <React.StrictMode>
            <Read />
          </React.StrictMode>
        );
      }
      
      function goToUpdate() {
        const root = ReactDOM.createRoot(document.getElementById("root"));
        root.render(
          <React.StrictMode>
            <Update />
          </React.StrictMode>
        );
      }
      
      function goToDelete() {
        const root = ReactDOM.createRoot(document.getElementById("root"));
        root.render(
          <React.StrictMode>
            <Delete />
          </React.StrictMode>
        );
      }
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
            <a class="nav-link active" onClick={() => goToApp()}>Home</a>
              <a class="nav-link" onClick={() => goToCreate()}>Create</a>
              <a class="nav-link" onClick={() => goToRead()}>Read</a>
              <a class="nav-link" onClick={() => goToUpdate()}>Update</a>
              <a class="nav-link" onClick={() => goToDelete()}>Delete</a>
            </div>
          </div>
        </div>
      </nav>
      <div>
        <h1>
            Create
        </h1>
        <form class="row g-3 form-border" id="checkout-form">
            <div class="form-group">
                  <label for="Title" class="form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="Title"
                    placeholder=""
                  />
                </div>
                <div class="form-group">
                  <label for="Price" class="form-label">
                    Price
                  </label>
                  <input
                    type="number"
                    class="form-control"
                    id="Price"
                    placeholder=""
                  />
                </div>
                <div class="form-group">
                  <label for="Description" class="form-label">
                    Description
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="Description"
                    placeholder=""
                  />
                </div>
                <div class="form-group">
                  <label for="Category" class="form-label">
                    Category
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="Category"
                    placeholder=""
                  />
                </div>
                <div class="form-group">
                  <label for="Rating" class="form-label">
                    Rating
                  </label>
                  <div id="Rating">
                    <input
                        type="number"
                        max="5"
                        min="1"
                        class="form-control"
                        id="Rate"
                        placeholder="Rate"
                    />
                    <input
                        type="number"
                        min="0"
                        class="form-control"
                        id="Count"
                        placeholder="Count"
                    />
                  </div>
                </div>
                <button class="btn btn-primary" type="submit">
                    Add Product
                </button>
        </form>
        </div>
    </div>
  );
}

export default Create;