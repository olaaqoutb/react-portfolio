import { useState } from "react";
import { useEffect } from "react";
import "./Header.css";

const Header = () => {
  const [showModal, setshowModal] = useState(false);
  const [theme, setTheme] = useState(
    localStorage.getItem("currentMode") ?? "dark"
  );

  useEffect(() => {
    if (theme === "light") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    }
  }, [theme]);
  return (
    <header className="flex">
      <div className="sprate" />
      <button
        onClick={() => {
          setshowModal(true);
        }}
        className="menu icon-th-menu-outline  flex"
      />

      <nav>
        <ul className="flex">
          
            <li>
              <a href="#about" id="about" >About</a>
            </li>
            <li>
              <a href="">Projects</a>
            </li>
            <li>
              <a href="">Contact Me</a>
            </li>
            <li>
              <a href="">Footer</a>
            </li>
            {/* <li>
              <a href="">Uses</a>
            </li> */}
          </ul>
      </nav>

      <button
        id="sun"
        onClick={() => {
          // setTheme(theme === "dark" ? "light" : "dark");
          localStorage.setItem(
            "currentMode",
            theme === "dark" ? "light" : "dark"
          );
          setTheme(localStorage.getItem("currentMode"));
        }}
        className="mode flex"
      >
        {theme === "dark" ? (
          <span className="icon-moon-o"></span>
        ) : (
          <span className="icon-sun"></span>
        )}
      </button>
      {showModal && (
        <div className="fixed">
          <ul className="modal">
            <li>
              <button
                onClick={() => {
                  setshowModal(false);
                }}
                className="icon-x"
              />
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Projects</a>
            </li>
            <li>
              <a href="">Contact Me</a>
            </li>
            <li>
              <a href="">Footer</a>
            </li>
            {/* <li>
              <a href="">Uses</a>
            </li> */}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
