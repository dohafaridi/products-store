import { useState } from "react";

export const getAxiosHeaders = ({ user: { data } }) => ({
  "Content-Type": "application/json",
  "x-auth-token": data ? data.token : null
});

export const useInput = (initialValue, type, id) => {
  const [value, setValue] = useState(initialValue);
  return {
    id,
    type,
    value,
    onChange: e => setValue(e.target.value)
  };
};
