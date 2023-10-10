import { useState, useEffect } from "react";
import "./main.css";
import CreatePopup from "./popups/CreatePopup.js";
import UpdatePopup from "./popups/UpdatePopup.js";
import ManagementPage from "./Management.js";
import { Link } from "react-router-dom";

//if the user has admin permission they will be met with this page
function Admin() {
  let [user, userUpdate] = useState();

  //States of news management div 1 - 5
  let [nmDiv1, nmDivUpdate1] = useState([]);
  let [nmDiv2, nmDivUpdate2] = useState([]);
  let [nmDiv3, nmDivUpdate3] = useState([]);
  let [nmDiv4, nmDivUpdate4] = useState([]);
  let [nmDiv5, nmDivUpdate5] = useState([]);

  //fetches from news management api
  useEffect(() => {
    fetch("/newsManagement/div1")
      .then((result) => result.json())
      .then((res) => {
        nmDivUpdate1(res);
        console.log(res);
      })
      .catch((error) => console.log("Unable to fetch data:", error));
  }, []);

  useEffect(() => {
    fetch("/newsManagement/div2")
      .then((result) => result.json())
      .then((res) => {
        nmDivUpdate2(res);
        console.log(res);
      })
      .catch((error) => console.log("Unable to fetch data:", error));
  }, []);

  useEffect(() => {
    fetch("/newsManagement/div3")
      .then((result) => result.json())
      .then((res) => {
        nmDivUpdate3(res);
      })
      .catch((error) => console.log("Unable to fetch data:", error));
  }, []);

  useEffect(() => {
    fetch("/newsManagement/div4")
      .then((result) => result.json())
      .then((res) => {
        nmDivUpdate4(res);
      })
      .catch((error) => console.log("Unable to fetch data:", error));
  }, []);

  useEffect(() => {
    fetch("/newsManagement/div5")
      .then((result) => result.json())
      .then((res) => {
        nmDivUpdate5(res);
      })
      .catch((error) => console.log("Unable to fetch data:", error));
  }, []);

  // //States of software reviews div 1 - 5
  let [srDiv1, srDivUpdate1] = useState();
  let [srDiv2, srDivUpdate2] = useState();
  let [srDiv3, srDivUpdate3] = useState();
  let [srDiv4, srDivUpdate4] = useState();
  let [srDiv5, srDivUpdate5] = useState();

  //fetches fom software reviews api
  useEffect(() => {
    fetch("/softwareReviews/div1")
      .then((result) => result.json())
      .then((res) => {
        srDivUpdate1(res);
      })
      .catch((error) => console.log("Unable to fetch data:", error));
  }, []);

  useEffect(() => {
    fetch("/softwareReviews/div2")
      .then((result) => result.json())
      .then((res) => {
        srDivUpdate2(res);
        console.log(res);
      })
      .catch((error) => console.log("Unable to fetch data:", error));
  }, []);

  useEffect(() => {
    fetch("/softwareReviews/div3")
      .then((result) => result.json())
      .then((res) => {
        srDivUpdate3(res);
      })
      .catch((error) => console.log("Unable to fetch data:", error));
  }, []);

  useEffect(() => {
    fetch("/softwareReviews/div4")
      .then((result) => result.json())
      .then((res) => {
        srDivUpdate4(res);
      })
      .catch((error) => console.log("Unable to fetch data:", error));
  }, []);

  useEffect(() => {
    fetch("/softwareReviews/div5")
      .then((result) => result.json())
      .then((res) => {
        srDivUpdate5(res);
      })
      .catch((error) => console.log("Unable to fetch data:", error));
  }, []);

  // //States of opinion publishing div 1 - 5
  let [opDiv1, opDivUpdate1] = useState();
  let [opDiv2, opDivUpdate2] = useState();
  let [opDiv3, opDivUpdate3] = useState();
  let [opDiv4, opDivUpdate4] = useState();
  let [opDiv5, opDivUpdate5] = useState();

  //fetches from opinion publishing api
  useEffect(() => {
    fetch("/opinionPublishing/div1")
      .then((result) => result.json())
      .then((res) => {
        opDivUpdate1(res);
      })
      .catch((error) => console.log("Unable to fetch data:", error));
  }, []);

  useEffect(() => {
    fetch("/opinionPublishing/div2")
      .then((result) => result.json())
      .then((res) => {
        opDivUpdate2(res);
        console.log(res);
      })
      .catch((error) => console.log("Unable to fetch data:", error));
  }, []);

  useEffect(() => {
    fetch("/opinionPublishing/div3")
      .then((result) => result.json())
      .then((res) => {
        opDivUpdate3(res);
      })
      .catch((error) => console.log("Unable to fetch data:", error));
  }, []);

  useEffect(() => {
    fetch("/opinionPublishing/div4")
      .then((result) => result.json())
      .then((res) => {
        opDivUpdate4(res);
      })
      .catch((error) => console.log("Unable to fetch data:", error));
  }, []);

  useEffect(() => {
    fetch("/opinionPublishing/div5")
      .then((result) => result.json())
      .then((res) => {
        opDivUpdate5(res);
      })
      .catch((error) => console.log("Unable to fetch data:", error));
  }, []);

  // //States of hardware reviews div 1 - 5
  let [hrDiv1, hrDivUpdate1] = useState();
  let [hrDiv2, hrDivUpdate2] = useState();
  let [hrDiv3, hrDivUpdate3] = useState();
  let [hrDiv4, hrDivUpdate4] = useState();
  let [hrDiv5, hrDivUpdate5] = useState();

  //fetches from hardware api
  useEffect(() => {
    fetch("/hardwareReviews/div1")
      .then((result) => result.json())
      .then((res) => {
        hrDivUpdate1(res);
      })
      .catch((error) => console.log("Unable to fetch data:", error));
  }, []);

  useEffect(() => {
    fetch("/hardwareReviews/div2")
      .then((result) => result.json())
      .then((res) => {
        hrDivUpdate2(res);
        console.log(res);
      })
      .catch((error) => console.log("Unable to fetch data:", error));
  }, []);

  useEffect(() => {
    fetch("/hardwareReviews/div3")
      .then((result) => result.json())
      .then((res) => {
        hrDivUpdate3(res);
      })
      .catch((error) => console.log("Unable to fetch data:", error));
  }, []);

  useEffect(() => {
    fetch("/hardwareReviews/div4")
      .then((result) => result.json())
      .then((res) => {
        hrDivUpdate4(res);
      })
      .catch((error) => console.log("Unable to fetch data:", error));
  }, []);

  useEffect(() => {
    fetch("/hardwareReviews/div5")
      .then((result) => result.json())
      .then((res) => {
        hrDivUpdate5(res);
      })
      .catch((error) => console.log("Unable to fetch data:", error));
  }, []);

  //login
  useEffect(() => {
    fetch("/CoolCloths/login")
      .then((result) => result.json())
      .then((res) => {
        userUpdate(res);
      })
      .catch((error) => console.log("Unable to fetch data:", error));
  }, []);

  if (user !== undefined && nmDiv1 !== undefined) {
    if (user.role.includes("admin")) {
      return (
        <>
          <UpdatePopup />
          <div id="wholePage">
            <div id="newsmanagement">
              <h3>
                <Link to="/ManagementAdminPage">Go to Credentials</Link>
              </h3>
              <h2>News Management</h2>
              <table>
                <tbody>
                  <tr>
                    <th>Username</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Ou</th>
                    <th>Division</th>
                    <th>Role</th>
                  </tr>
                  {nmDiv1.map((cred) => (
                    <tr key={cred.Name + cred.Username}>
                      <td>{cred.Username}</td>
                      <td>{cred.Name}</td>
                      <td>{cred.Email}</td>
                      <td>{cred.Password}</td>
                      <td>{cred.Ou}</td>
                      <td>{cred.Division}</td>
                      <td>{cred.Role}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <table>
                <tbody>
                  <tr>
                    <th>Username</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Ou</th>
                    <th>Division</th>
                    <th>Role</th>
                  </tr>
                  {nmDiv2.map((cred) => (
                    <tr>
                      <td>{cred.Username}</td>
                      <td>{cred.Name}</td>
                      <td>{cred.Email}</td>
                      <td>{cred.Password}</td>
                      <td>{cred.Ou}</td>
                      <td>{cred.Division}</td>
                      <td>{cred.Role}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <table>
                <tbody>
                  <tr>
                    <th>Username</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Ou</th>
                    <th>Division</th>
                    <th>Role</th>
                  </tr>
                  {nmDiv3.map((cred) => (
                    <tr>
                      <td>{cred.Username}</td>
                      <td>{cred.Name}</td>
                      <td>{cred.Email}</td>
                      <td>{cred.Password}</td>
                      <td>{cred.Ou}</td>
                      <td>{cred.Division}</td>
                      <td>{cred.Role}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <table>
                <tbody>
                  <tr>
                    <th>Username</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Ou</th>
                    <th>Division</th>
                    <th>Role</th>
                  </tr>
                  {nmDiv4.map((cred) => (
                    <tr>
                      <td>{cred.Username}</td>
                      <td>{cred.Name}</td>
                      <td>{cred.Email}</td>
                      <td>{cred.Password}</td>
                      <td>{cred.Ou}</td>
                      <td>{cred.Division}</td>
                      <td>{cred.Role}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <table>
                <tbody>
                  <tr>
                    <th>Username</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Ou</th>
                    <th>Division</th>
                    <th>Role</th>
                  </tr>
                  {nmDiv5.map((cred) => (
                    <tr>
                      <td>{cred.Username}</td>
                      <td>{cred.Name}</td>
                      <td>{cred.Email}</td>
                      <td>{cred.Password}</td>
                      <td>{cred.Ou}</td>
                      <td>{cred.Division}</td>
                      <td>{cred.Role}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div id="softwarereviews">
              <h2>Software reviews</h2>
              <table>
                <tbody>
                  <tr>
                    <th>Username</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Ou</th>
                    <th>Division</th>
                    <th>Role</th>
                  </tr>
                  {srDiv1.map((cred) => (
                    <tr key={cred.Name + cred.Username}>
                      <td>{cred.Username}</td>
                      <td>{cred.Name}</td>
                      <td>{cred.Email}</td>
                      <td>{cred.Password}</td>
                      <td>{cred.Ou}</td>
                      <td>{cred.Division}</td>
                      <td>{cred.Role}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <table>
                <tbody>
                  <tr>
                    <th>Username</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Ou</th>
                    <th>Division</th>
                    <th>Role</th>
                  </tr>
                  {srDiv2.map((cred) => (
                    <tr>
                      <td>{cred.Username}</td>
                      <td>{cred.Name}</td>
                      <td>{cred.Email}</td>
                      <td>{cred.Password}</td>
                      <td>{cred.Ou}</td>
                      <td>{cred.Division}</td>
                      <td>{cred.Role}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <table>
                <tbody>
                  <tr>
                    <th>Username</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Ou</th>
                    <th>Division</th>
                    <th>Role</th>
                  </tr>
                  {srDiv3.map((cred) => (
                    <tr>
                      <td>{cred.Username}</td>
                      <td>{cred.Name}</td>
                      <td>{cred.Email}</td>
                      <td>{cred.Password}</td>
                      <td>{cred.Ou}</td>
                      <td>{cred.Division}</td>
                      <td>{cred.Role}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <table>
                <tbody>
                  <tr>
                    <th>Username</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Ou</th>
                    <th>Division</th>
                    <th>Role</th>
                  </tr>
                  {srDiv4.map((cred) => (
                    <tr>
                      <td>{cred.Username}</td>
                      <td>{cred.Name}</td>
                      <td>{cred.Email}</td>
                      <td>{cred.Password}</td>
                      <td>{cred.Ou}</td>
                      <td>{cred.Division}</td>
                      <td>{cred.Role}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <table>
                <tbody>
                  <tr>
                    <th>Username</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Ou</th>
                    <th>Division</th>
                    <th>Role</th>
                  </tr>
                  {srDiv5.map((cred) => (
                    <tr>
                      <td>{cred.Username}</td>
                      <td>{cred.Name}</td>
                      <td>{cred.Email}</td>
                      <td>{cred.Password}</td>
                      <td>{cred.Ou}</td>
                      <td>{cred.Division}</td>
                      <td>{cred.Role}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div id="opinionpublishing">
              <h2>Opinion Publishing</h2>
              <table>
                <tbody>
                  <tr>
                    <th>Username</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Ou</th>
                    <th>Division</th>
                    <th>Role</th>
                  </tr>
                  {opDiv1.map((cred) => (
                    <tr key={cred.Name + cred.Username}>
                      <td>{cred.Username}</td>
                      <td>{cred.Name}</td>
                      <td>{cred.Email}</td>
                      <td>{cred.Password}</td>
                      <td>{cred.Ou}</td>
                      <td>{cred.Division}</td>
                      <td>{cred.Role}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <table>
                <tbody>
                  <tr>
                    <th>Username</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Ou</th>
                    <th>Division</th>
                    <th>Role</th>
                  </tr>
                  {opDiv2.map((cred) => (
                    <tr>
                      <td>{cred.Username}</td>
                      <td>{cred.Name}</td>
                      <td>{cred.Email}</td>
                      <td>{cred.Password}</td>
                      <td>{cred.Ou}</td>
                      <td>{cred.Division}</td>
                      <td>{cred.Role}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <table>
                <tbody>
                  <tr>
                    <th>Username</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Ou</th>
                    <th>Division</th>
                    <th>Role</th>
                  </tr>
                  {opDiv3.map((cred) => (
                    <tr>
                      <td>{cred.Username}</td>
                      <td>{cred.Name}</td>
                      <td>{cred.Email}</td>
                      <td>{cred.Password}</td>
                      <td>{cred.Ou}</td>
                      <td>{cred.Division}</td>
                      <td>{cred.Role}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <table>
                <tbody>
                  <tr>
                    <th>Username</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Ou</th>
                    <th>Division</th>
                    <th>Role</th>
                  </tr>
                  {opDiv4.map((cred) => (
                    <tr>
                      <td>{cred.Username}</td>
                      <td>{cred.Name}</td>
                      <td>{cred.Email}</td>
                      <td>{cred.Password}</td>
                      <td>{cred.Ou}</td>
                      <td>{cred.Division}</td>
                      <td>{cred.Role}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <table>
                <tbody>
                  <tr>
                    <th>Username</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Ou</th>
                    <th>Division</th>
                    <th>Role</th>
                  </tr>
                  {opDiv5.map((cred) => (
                    <tr>
                      <td>{cred.Username}</td>
                      <td>{cred.Name}</td>
                      <td>{cred.Email}</td>
                      <td>{cred.Password}</td>
                      <td>{cred.Ou}</td>
                      <td>{cred.Division}</td>
                      <td>{cred.Role}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div id="hardwarereviews">
              <h2>Hardware Reviews</h2>
              <table>
                <tbody>
                  <tr>
                    <th>Username</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Ou</th>
                    <th>Division</th>
                    <th>Role</th>
                  </tr>
                  {hrDiv1.map((cred) => (
                    <tr key={cred.Name + cred.Username}>
                      <td>{cred.Username}</td>
                      <td>{cred.Name}</td>
                      <td>{cred.Email}</td>
                      <td>{cred.Password}</td>
                      <td>{cred.Ou}</td>
                      <td>{cred.Division}</td>
                      <td>{cred.Role}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <table>
                <tbody>
                  <tr>
                    <th>Username</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Ou</th>
                    <th>Division</th>
                    <th>Role</th>
                  </tr>
                  {hrDiv2.map((cred) => (
                    <tr>
                      <td>{cred.Username}</td>
                      <td>{cred.Name}</td>
                      <td>{cred.Email}</td>
                      <td>{cred.Password}</td>
                      <td>{cred.Ou}</td>
                      <td>{cred.Division}</td>
                      <td>{cred.Role}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <table>
                <tbody>
                  <tr>
                    <th>Username</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Ou</th>
                    <th>Division</th>
                    <th>Role</th>
                  </tr>
                  {hrDiv3.map((cred) => (
                    <tr>
                      <td>{cred.Username}</td>
                      <td>{cred.Name}</td>
                      <td>{cred.Email}</td>
                      <td>{cred.Password}</td>
                      <td>{cred.Ou}</td>
                      <td>{cred.Division}</td>
                      <td>{cred.Role}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <table>
                <tbody>
                  <tr>
                    <th>Username</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Ou</th>
                    <th>Division</th>
                    <th>Role</th>
                  </tr>
                  {hrDiv4.map((cred) => (
                    <tr>
                      <td>{cred.Username}</td>
                      <td>{cred.Name}</td>
                      <td>{cred.Email}</td>
                      <td>{cred.Password}</td>
                      <td>{cred.Ou}</td>
                      <td>{cred.Division}</td>
                      <td>{cred.Role}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <table>
                <tbody>
                  <tr>
                    <th>Username</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Ou</th>
                    <th>Division</th>
                    <th>Role</th>
                  </tr>
                  {hrDiv5.map((cred) => (
                    <tr>
                      <td>{cred.Username}</td>
                      <td>{cred.Name}</td>
                      <td>{cred.Email}</td>
                      <td>{cred.Password}</td>
                      <td>{cred.Ou}</td>
                      <td>{cred.Division}</td>
                      <td>{cred.Role}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      );
    }
  }
}

export default Admin;
