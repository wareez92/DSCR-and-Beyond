import { useEffect } from "react";

function useHtmlLang(lang) {
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);
}

export default useHtmlLang;