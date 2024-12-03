"use client";

import { useEffect, useRef } from "react";

interface CustomTextareaProps {
  value: string;
  onChange: (value: string) => void;
  disabled: boolean;
}

const CustomTextarea: React.FC<CustomTextareaProps> = ({ value, onChange, disabled }) => {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const autoResize = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  };

  useEffect(() => {
    autoResize();
  }, [value]);

  return (
    <textarea
      ref={textareaRef}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      name="question"
      id="question"
      disabled={disabled}
      placeholder="Escribe tu problema de física..."
      className="bg-background text-foreground text-base w-full min-h-[50px] resize-none overflow-hidden p-2 outline-none rounded-md"
    />
  );
};

export default CustomTextarea;
