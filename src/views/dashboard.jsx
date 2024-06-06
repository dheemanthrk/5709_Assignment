import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

const Dashboard = () => {
  return (
    <div className="App">
      <div className="container m-5 ">
        <nav className="navbar m-5 navbar-light bg-light d-flex flex-column">
          <form className="form-inline d-flex justify-content-around ">
            <input
              className="form-control mr-sm-2 mx-3"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <div className="dropdown mx-3">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Dropdown button
              </button>
              <div
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton"
              >
                <a className="dropdown-item" href="#">
                  Action
                </a>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </div>
            <div className="dropdown mx-3">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Dropdown button
              </button>
              <div
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton"
              >
                <a className="dropdown-item" href="#">
                  Action
                </a>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </div>

            <button
              className="btn btn-outline-success my-2 my-sm-0 mx-3"
              type="submit"
            >
              Search
            </button>
            <button
              className="btn btn-outline-danger my-2 my-sm-0 mx-3"
              type="submit"
            >
              Reset
            </button>
          </form>
        </nav>
      </div>
      <div className="container">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Bid Name</th>
              <th scope="col">Status</th>
              <th scope="col">Open Date</th>
              <th scope="col">Close Date</th>
              <th scope="col">Organization</th>
              <th scope="col">View</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Bridge</td>
              <td>Open</td>
              <td>20 May 2024</td>
              <td>12 July 2024</td>
              <td>Halifax Harbour</td>
              <td>
                <button
                  type="button"
                  class="btn btn-primary"
                  data-toggle="modal"
                  data-target="#exampleModalCenter"
                >
                  Launch demo modal
                </button>

                <div
                  class="modal fade"
                  id="exampleModalCenter"
                  tabindex="-1"
                  role="dialog"
                  aria-labelledby="exampleModalCenterTitle"
                  aria-hidden="true"
                >
                  <div
                    class="modal-dialog modal-dialog-centered"
                    role="document"
                  >
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLongTitle">
                          Modal title
                        </h5>
                        <button
                          type="button"
                          class="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div class="modal-body">...</div>
                      <div class="modal-footer">
                        <button
                          type="button"
                          class="btn btn-secondary"
                          data-dismiss="modal"
                        >
                          Close
                        </button>
                        <button type="button" class="btn btn-primary">
                          Save changes
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Building</td>
              <td>Closed</td>
              <td>10 June 2024</td>
              <td>30 August 2024</td>
              <td>Construction Co.</td>
              <td>
                <button className="btn btn-warning">View</button>
              </td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Road</td>
              <td>Open</td>
              <td>5 July 2024</td>
              <td>25 September 2024</td>
              <td>Highway Authority</td>
              <td>
                <button className="btn btn-warning">View</button>
              </td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>Bridge</td>
              <td>Open</td>
              <td>20 May 2024</td>
              <td>12 July 2024</td>
              <td>Halifax Harbour</td>
              <td>
                <button className="btn btn-warning">View</button>
              </td>
            </tr>
            <tr>
              <th scope="row">5</th>
              <td>Building</td>
              <td>Closed</td>
              <td>10 June 2024</td>
              <td>30 August 2024</td>
              <td>Construction Co.</td>
              <td>
                <button className="btn btn-warning">View</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
