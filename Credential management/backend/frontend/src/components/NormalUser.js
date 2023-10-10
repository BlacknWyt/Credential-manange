import { useState, useEffect } from "react";
import "./main.css";
import CreatePopup from "./popups/CreatePopup";
import { Link } from "react-router-dom";

//users with normal permissions will be met with this page
function NormalUser() {
  let [user, userUpdate] = useState();

  //States of news management div 1 - 5
  let [nmDiv1, nmDivUpdate1] = useState([]);
  let [nmDiv2, nmDivUpdate2] = useState([]);
  let [nmDiv3, nmDivUpdate3] = useState([]);
  let [nmDiv4, nmDivUpdate4] = useState([]);
  let [nmDiv5, nmDivUpdate5] = useState([]);

  //fetchs to news management api
  useEffect(() => {
    fetch("/newsManagement/credentialsDiv1")
      .then((result) => result.json())
      .then((res) => {
        nmDivUpdate1(res);
        console.log(res);
      })
      .catch((error) => console.log("Unable to fetch data:", error));
  }, []);

  useEffect(() => {
    fetch("/newsManagement/credentialsDiv2")
      .then((result) => result.json())
      .then((res) => {
        nmDivUpdate2(res);
      })
      .catch((error) => console.log("Unable to fetch data:", error));
  }, []);

  useEffect(() => {
    fetch("/newsManagement/credentialsDiv3")
      .then((result) => result.json())
      .then((res) => {
        nmDivUpdate3(res);
      })
      .catch((error) => console.log("Unable to fetch data:", error));
  }, []);

  useEffect(() => {
    fetch("/newsManagement/credentialsDiv4")
      .then((result) => result.json())
      .then((res) => {
        nmDivUpdate4(res);
      })
      .catch((error) => console.log("Unable to fetch data:", error));
  }, []);

  useEffect(() => {
    fetch("/newsManagement/credentialsDiv5")
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

  //fetches to software  review api
  useEffect(() => {
    fetch("/softwareReviews/credentialsDiv1")
      .then((result) => result.json())
      .then((res) => {
        srDivUpdate1(res);
      })
      .catch((error) => console.log("Unable to fetch data:", error));
  }, []);

  useEffect(() => {
    fetch("/softwareReviews/credentialsDiv2")
      .then((result) => result.json())
      .then((res) => {
        srDivUpdate2(res);
      })
      .catch((error) => console.log("Unable to fetch data:", error));
  }, []);

  useEffect(() => {
    fetch("/softwareReviews/credentialsDiv3")
      .then((result) => result.json())
      .then((res) => {
        srDivUpdate3(res);
      })
      .catch((error) => console.log("Unable to fetch data:", error));
  }, []);

  useEffect(() => {
    fetch("/softwareReviews/credentialsDiv4")
      .then((result) => result.json())
      .then((res) => {
        srDivUpdate4(res);
      })
      .catch((error) => console.log("Unable to fetch data:", error));
  }, []);

  useEffect(() => {
    fetch("/softwareReviews/credentialsDiv5")
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

  //fetches to opinion publishing api
  useEffect(() => {
    fetch("/opinionPublishing/credentialsDiv1")
      .then((result) => result.json())
      .then((res) => {
        opDivUpdate1(res);
      })
      .catch((error) => console.log("Unable to fetch data:", error));
  }, []);

  useEffect(() => {
    fetch("/opinionPublishing/credentialsDiv2")
      .then((result) => result.json())
      .then((res) => {
        opDivUpdate2(res);
      })
      .catch((error) => console.log("Unable to fetch data:", error));
  }, []);

  useEffect(() => {
    fetch("/opinionPublishing/credentialsDiv3")
      .then((result) => result.json())
      .then((res) => {
        opDivUpdate3(res);
      })
      .catch((error) => console.log("Unable to fetch data:", error));
  }, []);

  useEffect(() => {
    fetch("/opinionPublishing/credentialsDiv4")
      .then((result) => result.json())
      .then((res) => {
        opDivUpdate4(res);
      })
      .catch((error) => console.log("Unable to fetch data:", error));
  }, []);

  useEffect(() => {
    fetch("/opinionPublishing/credentialsDiv5")
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

  //fetches to hardware reviews api
  useEffect(() => {
    fetch("/hardwareReviews/credentialsDiv1")
      .then((result) => result.json())
      .then((res) => {
        hrDivUpdate1(res);
      })
      .catch((error) => console.log("Unable to fetch data:", error));
  }, []);

  useEffect(() => {
    fetch("/hardwareReviews/credentialsDiv2")
      .then((result) => result.json())
      .then((res) => {
        hrDivUpdate2(res);
      })
      .catch((error) => console.log("Unable to fetch data:", error));
  }, []);

  useEffect(() => {
    fetch("/hardwareReviews/credentialsDiv3")
      .then((result) => result.json())
      .then((res) => {
        hrDivUpdate3(res);
      })
      .catch((error) => console.log("Unable to fetch data:", error));
  }, []);

  useEffect(() => {
    fetch("/hardwareReviews/credentialsDiv4")
      .then((result) => result.json())
      .then((res) => {
        hrDivUpdate4(res);
      })
      .catch((error) => console.log("Unable to fetch data:", error));
  }, []);

  useEffect(() => {
    fetch("/hardwareReviews/credentialsDiv5")
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

  //if a user is not assigned to a division or OU they will be met with this page
  if (user !== undefined && nmDiv1 !== undefined) {
    if (user.ou.length === 0 || user.div.length === 0) {
      return (
        <div id="wholePage">
          <div id="noCreds">
            <h1>
              Sorry you are currently not part of a division or OU. Please wait
              for your admin to assign you somewhere
            </h1>
            <Link to="/">Go back to Login</Link>
          </div>
        </div>
      );
    }
  }

  //the user will be met with certain pages if they are part of that division and OU
  if (user !== undefined && nmDiv1 !== undefined) {
    if (user.ou.includes("News Management") && user.div.includes("div1")) {
      return (
        <div id="wholePage">
          <CreatePopup />
          <div id="newsmanagement">
            <h2>News Management - Division 1</h2>
            <table>
              <tbody>
                <tr>
                  <th>Username</th>
                  <th>Password</th>
                  <th>Site</th>
                </tr>
                {nmDiv1.map((cred) => (
                  <tr key={cred.Name + cred.Username}>
                    <td>{cred.Username}</td>
                    <td>{cred.Password}</td>
                    <td>{cred.Site}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
    }
  }

  if (user !== undefined && nmDiv2 !== undefined) {
    if (user.ou.includes("News Management") && user.div.includes("div2")) {
      return (
        <div id="wholePage">
          <CreatePopup />
          <div id="newsmanagement">
            <h2>News Management - Division 2</h2>
            <table>
              <tbody>
                <tr>
                  <th>Username</th>
                  <th>Password</th>
                  <th>Site</th>
                </tr>
                {nmDiv2.map((cred) => (
                  <tr key={cred.Name + cred.Username}>
                    <td>{cred.Username}</td>
                    <td>{cred.Password}</td>
                    <td>{cred.Site}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
    }
  }

  if (user !== undefined && nmDiv3 !== undefined) {
    if (user.ou.includes("News Management") && user.div.includes("div3")) {
      return (
        <div id="wholePage">
          <CreatePopup />
          <div id="newsmanagement">
            <h2>News Management - Division 3</h2>
            <table>
              <tbody>
                <tr>
                  <th>Username</th>
                  <th>Password</th>
                  <th>Site</th>
                </tr>
                {nmDiv3.map((cred) => (
                  <tr key={cred.Name + cred.Username}>
                    <td>{cred.Username}</td>
                    <td>{cred.Password}</td>
                    <td>{cred.Site}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
    }
  }

  if (user !== undefined && nmDiv4 !== undefined) {
    if (user.ou.includes("News Management") && user.div.includes("div4")) {
      return (
        <div id="wholePage">
          <CreatePopup />
          <div id="newsmanagement">
            <h2>News Management - Division 4</h2>
            <table>
              <tbody>
                <tr>
                  <th>Username</th>
                  <th>Password</th>
                  <th>Site</th>
                </tr>
                {nmDiv4.map((cred) => (
                  <tr key={cred.Name + cred.Username}>
                    <td>{cred.Username}</td>
                    <td>{cred.Password}</td>
                    <td>{cred.Site}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
    }
  }

  if (user !== undefined && nmDiv5 !== undefined) {
    if (user.ou.includes("News Management") && user.div.includes("div5")) {
      return (
        <div id="wholePage">
          <CreatePopup />
          <div id="newsmanagement">
            <h2>News Management - Division 5</h2>
            <table>
              <tbody>
                <tr>
                  <th>Username</th>
                  <th>Password</th>
                  <th>Site</th>
                </tr>
                {nmDiv5.map((cred) => (
                  <tr key={cred.Name + cred.Username}>
                    <td>{cred.Username}</td>
                    <td>{cred.Password}</td>
                    <td>{cred.Site}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
    }
  }

  // software reviews section

  if (user !== undefined && srDiv1 !== undefined) {
    if (user.ou.includes("Software Reviews") && user.div.includes("div1")) {
      return (
        <div id="wholePage">
          <CreatePopup />
          <div id="softwarereviews">
            <h2>Software Reviews - Division 1</h2>
            <table>
              <tbody>
                <tr>
                  <th>Username</th>
                  <th>Password</th>
                  <th>Site</th>
                </tr>
                {srDiv1.map((cred) => (
                  <tr key={cred.Name + cred.Username}>
                    <td>{cred.Username}</td>
                    <td>{cred.Password}</td>
                    <td>{cred.Site}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
    }
  }

  if (user !== undefined && srDiv2 !== undefined) {
    if (user.ou.includes("Software Reviews") && user.div.includes("div2")) {
      return (
        <div id="wholePage">
          <CreatePopup />
          <div id="softwarereviews">
            <h2>Software Reviews - Division 2</h2>
            <table>
              <tbody>
                <tr>
                  <th>Username</th>
                  <th>Password</th>
                  <th>Site</th>
                </tr>
                {srDiv2.map((cred) => (
                  <tr key={cred.Name + cred.Username}>
                    <td>{cred.Username}</td>
                    <td>{cred.Password}</td>
                    <td>{cred.Site}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
    }
  }

  if (user !== undefined && srDiv3 !== undefined) {
    if (user.ou.includes("Software Reviews") && user.div.includes("div3")) {
      return (
        <div id="wholePage">
          <CreatePopup />
          <div id="softwarereviews">
            <h2>Software Reviews - Division 3</h2>
            <table>
              <tbody>
                <tr>
                  <th>Username</th>
                  <th>Password</th>
                  <th>Site</th>
                </tr>
                {srDiv3.map((cred) => (
                  <tr key={cred.Name + cred.Username}>
                    <td>{cred.Username}</td>
                    <td>{cred.Password}</td>
                    <td>{cred.Site}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
    }
  }

  if (user !== undefined && srDiv4 !== undefined) {
    if (user.ou.includes("Software Reviews") && user.div.includes("div4")) {
      return (
        <div id="wholePage">
          <CreatePopup />
          <div id="softwarereviews">
            <h2>Software Reviews - Division 4</h2>
            <table>
              <tbody>
                <tr>
                  <th>Username</th>
                  <th>Password</th>
                  <th>Site</th>
                </tr>
                {srDiv4.map((cred) => (
                  <tr key={cred.Name + cred.Username}>
                    <td>{cred.Username}</td>
                    <td>{cred.Password}</td>
                    <td>{cred.Site}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
    }
  }

  if (user !== undefined && srDiv5 !== undefined) {
    if (user.ou.includes("Software Reviews") && user.div.includes("div5")) {
      return (
        <div id="wholePage">
          <CreatePopup />
          <div id="softwarereviews">
            <h2>Software Reviews - Division 5</h2>
            <table>
              <tbody>
                <tr>
                  <th>Username</th>
                  <th>Password</th>
                  <th>Site</th>
                </tr>
                {srDiv5.map((cred) => (
                  <tr key={cred.Name + cred.Username}>
                    <td>{cred.Username}</td>
                    <td>{cred.Password}</td>
                    <td>{cred.Site}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
    }
  }

  //opinion publishing section

  if (user !== undefined && opDiv1 !== undefined) {
    if (user.ou.includes("Opinion Publishing") && user.div.includes("div1")) {
      return (
        <div id="wholePage">
          <CreatePopup />
          <div id="opinionpublishing">
            <h2>Opinion Publishing - Division 1</h2>
            <table>
              <tbody>
                <tr>
                  <th>Username</th>
                  <th>Password</th>
                  <th>Site</th>
                </tr>
                {opDiv1.map((cred) => (
                  <tr key={cred.Name + cred.Username}>
                    <td>{cred.Username}</td>
                    <td>{cred.Password}</td>
                    <td>{cred.Site}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
    }
  }

  if (user !== undefined && opDiv2 !== undefined) {
    if (user.ou.includes("Opinion Publishing") && user.div.includes("div2")) {
      return (
        <div id="wholePage">
          <CreatePopup />
          <div id="opinionpublishing">
            <h2>Opinion Publishing - Division 2</h2>
            <table>
              <tbody>
                <tr>
                  <th>Username</th>
                  <th>Password</th>
                  <th>Site</th>
                </tr>
                {opDiv2.map((cred) => (
                  <tr key={cred.Name + cred.Username}>
                    <td>{cred.Username}</td>
                    <td>{cred.Password}</td>
                    <td>{cred.Site}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
    }
  }

  if (user !== undefined && opDiv3 !== undefined) {
    if (user.ou.includes("Opinion Publishing") && user.div.includes("div3")) {
      return (
        <div id="wholePage">
          <CreatePopup />
          <div id="opinionpublishing">
            <h2>Opinion Publishing - Division 3</h2>
            <table>
              <tbody>
                <tr>
                  <th>Username</th>
                  <th>Password</th>
                  <th>Site</th>
                </tr>
                {opDiv3.map((cred) => (
                  <tr key={cred.Name + cred.Username}>
                    <td>{cred.Username}</td>
                    <td>{cred.Password}</td>
                    <td>{cred.Site}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
    }
  }

  if (user !== undefined && opDiv4 !== undefined) {
    if (user.ou.includes("Opinion Publishing") && user.div.includes("div4")) {
      return (
        <div id="wholePage">
          <CreatePopup />
          <div id="opinionpublishing">
            <h2>Opinion Publishing - Division 4</h2>
            <table>
              <tbody>
                <tr>
                  <th>Username</th>
                  <th>Password</th>
                  <th>Site</th>
                </tr>
                {opDiv4.map((cred) => (
                  <tr key={cred.Name + cred.Username}>
                    <td>{cred.Username}</td>
                    <td>{cred.Password}</td>
                    <td>{cred.Site}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
    }
  }

  if (user !== undefined && srDiv5 !== undefined) {
    if (user.ou.includes("Opinion Publishing") && user.div.includes("div5")) {
      return (
        <div id="wholePage">
          <CreatePopup />
          <div id="opinionpublishing">
            <h2>Opinion Publishing - Division 5</h2>
            <table>
              <tbody>
                <tr>
                  <th>Username</th>
                  <th>Password</th>
                  <th>Site</th>
                </tr>
                {opDiv5.map((cred) => (
                  <tr key={cred.Name + cred.Username}>
                    <td>{cred.Username}</td>
                    <td>{cred.Password}</td>
                    <td>{cred.Site}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
    }
  }

  //hardware reviews section

  if (user !== undefined && hrDiv1 !== undefined) {
    if (user.ou.includes("Hardware Reviews") && user.div.includes("div1")) {
      return (
        <div id="wholePage">
          <CreatePopup />
          <div id="hardwarereviews">
            <h2>Hardware Reviews - Division 1</h2>
            <table>
              <tbody>
                <tr>
                  <th>Username</th>
                  <th>Password</th>
                  <th>Site</th>
                </tr>
                {hrDiv1.map((cred) => (
                  <tr key={cred.Name + cred.Username}>
                    <td>{cred.Username}</td>
                    <td>{cred.Password}</td>
                    <td>{cred.Site}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
    }
  }

  if (user !== undefined && opDiv2 !== undefined) {
    if (user.ou.includes("Hardware Reviews") && user.div.includes("div2")) {
      return (
        <div id="wholePage">
          <CreatePopup />
          <div id="hardwarereviews">
            <h2>Hardware Reviews - Division 2</h2>
            <table>
              <tbody>
                <tr>
                  <th>Username</th>
                  <th>Password</th>
                  <th>Site</th>
                </tr>
                {hrDiv2.map((cred) => (
                  <tr key={cred.Name + cred.Username}>
                    <td>{cred.Username}</td>
                    <td>{cred.Password}</td>
                    <td>{cred.Site}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
    }
  }

  if (user !== undefined && hrDiv3 !== undefined) {
    if (user.ou.includes("Hardware Reviews") && user.div.includes("div3")) {
      return (
        <div id="wholePage">
          <CreatePopup />
          <div id="hardwarereviews">
            <h2>Hardware Reviews - Division 3</h2>
            <table>
              <tbody>
                <tr>
                  <th>Username</th>
                  <th>Password</th>
                  <th>Site</th>
                </tr>
                {hrDiv3.map((cred) => (
                  <tr key={cred.Name + cred.Username}>
                    <td>{cred.Username}</td>
                    <td>{cred.Password}</td>
                    <td>{cred.Site}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
    }
  }

  if (user !== undefined && hrDiv4 !== undefined) {
    if (user.ou.includes("Hardware Reviews") && user.div.includes("div4")) {
      return (
        <div id="wholePage">
          <CreatePopup />
          <div id="hardwarereviews">
            <h2>Hardware Reviews - Division 4</h2>
            <table>
              <tbody>
                <tr>
                  <th>Username</th>
                  <th>Password</th>
                  <th>Site</th>
                </tr>
                {hrDiv4.map((cred) => (
                  <tr key={cred.Name + cred.Username}>
                    <td>{cred.Username}</td>
                    <td>{cred.Password}</td>
                    <td>{cred.Site}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
    }
  }

  if (user !== undefined && hrDiv5 !== undefined) {
    if (user.ou.includes("Hardware Reviews") && user.div.includes("div5")) {
      return (
        <div id="wholePage">
          <CreatePopup />
          <div id="hardwarereviews">
            <h2>Hardware Reviews - Division 5</h2>
            <table>
              <tbody>
                <tr>
                  <th>Username</th>
                  <th>Password</th>
                  <th>Site</th>
                </tr>
                {hrDiv5.map((cred) => (
                  <tr key={cred.Name + cred.Username}>
                    <td>{cred.Username}</td>
                    <td>{cred.Password}</td>
                    <td>{cred.Site}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
    }
  }
}

export default NormalUser;
