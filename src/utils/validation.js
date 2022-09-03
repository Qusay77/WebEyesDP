const validateEmail = (email) => {
  return !!email.match(
    // eslint-disable-next-line no-useless-escape
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  );
};

const validatePassword = (password) => {
  if (Array.isArray(password)) {
    const [pass, confirm] = password;
    return pass.length > 7 && pass === confirm && !/\s/.test(pass);
  }
  return password?.length > 7 && !/\s/.test(password);
};

export { validateEmail, validatePassword };
