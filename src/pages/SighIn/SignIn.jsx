export default function SignIn() {
  return (
    <form>
      <label>
        Email <input type="email" name="name" />
      </label>
      <label>
        Password <input type="password" name="password" />
      </label>
      <button type="submit">Sign in</button>
    </form>
  );
}
