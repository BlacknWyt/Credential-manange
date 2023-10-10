import React, { useState } from "react";
import CreateModal from "./CreateModal.js";
const buttonStyle = {
  position: "fixed",
  zIndex: 1,
  margin: "80px",
  padding: "80px",
};
//this componenet will create a new user and add the to database
function CreatePopup() {
  //states
  let [isOpen, setOpen] = useState(false);

  let [username, updateUsername] = useState("");
  let [site, updateSite] = useState("");
  let [password, updatePassword] = useState("");

  let [ou1, updateOU1] = useState("");
  let [ou2, updateOU2] = useState("");
  let [ou3, updateOU3] = useState("");
  let [ou4, updateOU4] = useState("");

  let [div1, updateDiv1] = useState("");
  let [div2, updateDiv2] = useState("");
  let [div3, updateDiv3] = useState("");
  let [div4, updateDiv4] = useState("");
  let [div5, updateDiv5] = useState("");

  //ou's
  //manages fro when ou checkboxes are clicked
  function updateOuNewsM() {
    if (div1 === "") {
      updateOU1("News Management");
    } else {
      updateOU1("");
    }
  }

  function updateOuSoftwareR() {
    if (div1 === "") {
      updateOU2("Software Reviews");
    } else {
      updateOU2("");
    }
  }

  function updateOuHardwareR() {
    if (div1 === "") {
      updateOU3("Hardware Reviews");
    } else {
      updateOU3("");
    }
  }

  function updateOuOpinionP() {
    if (div1 === "") {
      updateOU4("Opinion Publishing");
    } else {
      updateOU4("");
    }
  }

  //divisions
  //manages for when division check boxes are clicked
  function updateD1() {
    if (div1 === "") {
      updateDiv1("div1");
    } else {
      updateDiv1("");
    }
  }
  function updateD2() {
    if (div2 === "") {
      updateDiv2("div2");
    } else {
      updateDiv2("");
    }
  }
  function updateD3() {
    if (div3 === "") {
      updateDiv3("div3");
    } else {
      updateDiv3("");
    }
  }
  function updateD4() {
    if (div4 === "") {
      updateDiv4("div4");
    } else {
      updateDiv4("");
    }
  }
  function updateD5() {
    if (div5 === "") {
      updateDiv5("div4");
    } else {
      updateDiv5("");
    }
  }

  //handles submit
  const handleSubmit = (e) => {
    e.preventDefault();

    //if the var exists they will be added to the arr
    let div = [];
    //pushes the var is the arr if they exists
    if (div1) {
      div.push(div1);
    }
    if (div2) {
      div.push(div2);
    }
    if (div3) {
      div.push(div3);
    }
    if (div4) {
      div.push(div4);
    }
    if (div5) {
      div.push(div5);
    }

    //pushes the var is the arr if they exists
    let ou = [];
    if (ou1) {
      ou.push(ou1);
    }
    if (ou2) {
      ou.push(ou2);
    }
    if (ou3) {
      ou.push(ou3);
    }
    if (ou4) {
      ou.push(ou4);
    }

    //calls register function
    register(username, password, site, ou, div);
    setOpen(false);
  };

  //this function makes a request to the register api and creates new user if successful
  const register = async (username, password, site, ou, div) => {
    await fetch("/CoolCloths/credentials", {
      method: "POST",
      body: JSON.stringify({
        Username: username,
        Site: site,
        Password: password,
        Ou: ou,
        Div: div,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }).then(() => {
      alert("New credentials added!");
    });
  };
  return (
    <>
      <div style={buttonStyle}>
        <button onClick={() => setOpen(true)} style={{ fontSize: "25px" }}>
          Create
        </button>

        <CreateModal open={isOpen} onClose={() => setOpen(false)}>
          <h3>Create new Credentials</h3>
          <form onSubmit={handleSubmit}>
            <h4>Username: </h4>
            <input
              name="username"
              onChange={(e) => updateUsername(e.currentTarget.value)}
              required
            />
            <br />
            <h4>Password: </h4>
            <input
              onChange={(e) => updatePassword(e.currentTarget.value)}
              name="password"
              required
            />
            <h4>Site: </h4>
            <input
              name="Site"
              onChange={(e) => updateSite(e.currentTarget.value)}
              required
            />
            <br />
            <h4>OU</h4>
            <div style={{ display: "inline" }}>
              <div
                style={{
                  display: "inline-block",
                  paddingLeft: "10px",
                  paddingRight: "10px",
                }}
              >
                <label>News Management</label>
                <br />
                <input
                  type="checkbox"
                  name="News Management"
                  style={{ textAlign: "center" }}
                  onClick={() => updateOuNewsM()}
                  value={div1}
                />
                <br />
                <label>Software Reviews</label>
                <br />
                <input
                  type="checkbox"
                  name="Software Reviews"
                  style={{ textAlign: "center" }}
                  onClick={() => updateOuSoftwareR()}
                  value={div2}
                />
                <br />
              </div>
              <div
                style={{
                  display: "inline-block",
                  paddingLeft: "10px",
                  paddingRight: "10px",
                }}
              >
                <label>Hardware Reviews</label>
                <br />
                <input
                  type="checkbox"
                  name="Hardware Reviews"
                  style={{ textAlign: "center" }}
                  onClick={() => updateOuHardwareR()}
                  value={div3}
                />
                <br />
                <label>Opinion Publishing</label>
                <br />
                <input
                  type="checkbox"
                  name="Opinion Publishing"
                  style={{ textAlign: "center" }}
                  onClick={() => updateOuOpinionP()}
                  value={div4}
                />
              </div>
            </div>
            <br />
            <h4>Division</h4>
            <div style={{ display: "inline" }}>
              <div style={{ display: "inline-block" }}>
                <label>Div 1</label>
                <input
                  type="checkbox"
                  name="div1"
                  style={{ textAlign: "center" }}
                  onClick={() => updateD1()}
                  value={div1}
                />
              </div>
              <div style={{ display: "inline-block" }}>
                <label>Div 2</label>
                <input
                  type="checkbox"
                  name="div2"
                  style={{ textAlign: "center" }}
                  onClick={() => updateD2()}
                  value={div2}
                />
              </div>
              <div style={{ display: "inline-block" }}>
                <label>Div 3</label>
                <input
                  type="checkbox"
                  name="div3"
                  style={{ textAlign: "center" }}
                  onClick={() => updateD3()}
                  value={div3}
                />
              </div>
              <div style={{ display: "inline-block" }}>
                <label>Div 4</label>
                <input
                  type="checkbox"
                  name="div4"
                  style={{ textAlign: "center" }}
                  onClick={() => updateD4()}
                  value={div4}
                />
              </div>
              <div style={{ display: "inline-block" }}>
                <label>Div 5</label>
                <input
                  type="checkbox"
                  name="div5"
                  style={{ textAlign: "center" }}
                  onClick={() => updateD5()}
                  value={div5}
                />
              </div>
            </div>
            <br />
            <br />
            <button>Submit</button>
          </form>
        </CreateModal>
      </div>
    </>
  );
}

export default CreatePopup;
