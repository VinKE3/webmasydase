"use client";
import React, { useRef, useState } from "react";
import { FiLock } from "react-icons/fi";
import { motion } from "framer-motion";
import clsx from "clsx";
// const Example = () => {
//   return (
//     <div className="grid min-h-[200px] place-content-center bg-neutral-900 p-4">
//       <EncryptButton />
//     </div>
//   );
// };

type EncryptButtonProps = {
  textButton: string;
  classNames?: string; // `classNames` es opcional
  classNamesSpan?: string;
};

const CYCLES_PER_LETTER = 2;
const SHUFFLE_TIME = 50;
const CHARS = "!@#$%^&*():{};|,.<>/?";

const EncryptButton: React.FC<EncryptButtonProps> = ({
  textButton = "Encrypt data",
  classNames = "",
  classNamesSpan = "",
}) => {
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const [text, setText] = useState(textButton);

  const scramble = () => {
    let pos = 0;

    intervalRef.current = setInterval(() => {
      const scrambled = textButton
        .split("")
        .map((char, index) => {
          if (pos / CYCLES_PER_LETTER > index) {
            return char;
          }

          const randomCharIndex = Math.floor(Math.random() * CHARS.length);
          const randomChar = CHARS[randomCharIndex];

          return randomChar;
        })
        .join("");

      setText(scrambled);
      pos++;

      if (pos >= textButton.length * CYCLES_PER_LETTER) {
        stopScramble();
      }
    }, SHUFFLE_TIME);
  };

  const stopScramble = () => {
    clearInterval(intervalRef.current || undefined);
    setText(textButton);
  };

  return (
    <motion.button
      whileHover={{ scale: 1.025 }}
      whileTap={{ scale: 0.975 }}
      onMouseEnter={scramble}
      onMouseLeave={stopScramble}
      className={clsx(
        "group relative overflow-hidden rounded-lg border-[1px] border-neutral-500 bg-blueRadial px-4 py-2 font-mono font-medium uppercase text-white transition-colors ",
        classNames // Aplica las clases adicionales aquí
      )}
    >
      <div className="relative z-10 flex items-center gap-2">
        <FiLock />
        <span>{text}</span>
      </div>
      <motion.span
        initial={{ y: "100%" }}
        animate={{ y: "-100%" }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          duration: 1,
          ease: "linear",
        }}
        className={clsx(
          "duration-300 absolute inset-0 z-0 scale-125 bg-gradient-to-t from-sky-400/0 from-40% via-sky-400/100 to-sky-400/0 to-60% opacity-0 transition-opacity group-hover:opacity-100",
          classNamesSpan
        )}
      />
    </motion.button>
  );
};

export default EncryptButton;
