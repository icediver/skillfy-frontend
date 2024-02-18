import { useEffect, useRef, useState } from "react";

export const useFocused = () => {
  const [isDisabledHotkey, setIsDisabledHotkey] = useState(false);
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    ref.current?.addEventListener("focus", () => setIsDisabledHotkey(true));
    ref.current?.addEventListener("blur", () => setIsDisabledHotkey(false));
    return () => {
      ref.current?.removeEventListener("focus", () =>
        setIsDisabledHotkey(true),
      );
      ref.current?.removeEventListener("blur", () =>
        setIsDisabledHotkey(false),
      );
    };
  }, []);

  return { ref, isDisabledHotkey };
};
