import React, { useState } from "react";
import styles from "./auth.module.scss";
import { AiOutlineMail } from "react-icons/ai";
import Card from "../../components/card/Card";
import { Link } from "react-router-dom";
import { validateEmail } from "../../services/authServices";
import { toast } from "react-toastify";

const Forgot = () => {
  const [email, setEmail] = useState("");


  return (
    <div className={`container ${styles.auth}`}>
      <Card>
        <div className={styles.form}>
          <div className="--flex-center">
            <AiOutlineMail size={35} color="#999" />
          </div>
          <h2>Forgot Password</h2>

          <form>
            <input
              type="email"
              placeholder="Email"
              required
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <button type="submit" className="--btn --btn-primary --btn-block">
              Get Reset Email
            </button>
            

            <br/>
            <hr/>
            <br/>

            <div>
                <Link to="/">
                  <button type="submit" className="--mybtn2">
                    Home
                  </button>
                </Link>
                <Link to="/login">
                  <button type="submit" className="--mybtn">
                    Login
                  </button>
                </Link>
            </div>
          </form>
        </div>
      </Card>
    </div>
  );
};

export default Forgot;