export const getAxiosHeaders = ({ user: { data } }) => ({
  "Content-Type": "application/json",
  "x-auth-token": data ? data.token : null
});
