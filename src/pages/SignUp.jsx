import { Link } from 'react-router-dom';
import styles from './SignUp.module.css';
function SignUp() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className={styles.form}>
      <div>
        <form onSubmit={handleSubmit}>
          <h1>Sign Up</h1>
          <input type="email" name="email" placeholder="EMAIL" />
          <input type="password" name="password" placeholder="PASSWORD" />
          <p>
            Already have an account? <span>Sign In</span>
          </p>
          <Link to="/play">
            <button>CONTINUE</button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
