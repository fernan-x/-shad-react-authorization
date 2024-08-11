import { useCallback } from "react";

const Button = () => {
  const onClick = useCallback(() => {
    alert("Hello World");
  }, []);

  return <button onClick={onClick}>Click me</button>;
};

export default Button;
