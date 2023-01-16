import css from './Home.module.css';

export default function Home() {
  return (
    <div className={css.box}>
      <h1 className={css.title}>
        Welcome to our application where you can add your contacts and access
        them from anywhere!
      </h1>
      <p className={css.text}>Please sign in or sign up for a start.</p>
    </div>
  );
}
