import { useState } from "react";

export const HelloWorld = () => {
  const [isDark, setIsDark] = useState(false);
  return (
    <div>
      <p>Test Me</p>
      <button data-testid="toggle-btn" onClick={() => setIsDark(!isDark)}>
        Toggle Mode
      </button>
      <button data-testid="add-btn">Add Button</button>
      <div>{isDark ? <p>Dark Mode</p> : <p>Light Mode</p>}</div>
    </div>
  );
};
