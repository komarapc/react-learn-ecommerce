import { customAlphabet } from "nanoid";

export const generateId = () => {
  const alphabet =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const id = customAlphabet(alphabet, 10);
  return id();
};
