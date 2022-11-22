import { useEffect } from "react";
import { Theme } from "../store/SliceAll/themeSlice";
import { useAction, useTypedSelector } from "./StoreActionAll";

export const useTheme = (): [Theme, () => void] => {
  const { setTheme } = useAction();
  const theme = useTypedSelector((state) => state.theme);
  
  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");
  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  return [theme, toggleTheme];
};
