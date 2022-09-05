const validateEmail = (email) => {
  return !!email.match(
    // eslint-disable-next-line no-useless-escape
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  );
};

const validatePassword = (password) => {
  const strongPassword = new RegExp(
    '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})',
  );

  if (Array.isArray(password)) {
    const [pass, confirm] = password;
    return pass.length > 7 && pass === confirm && strongPassword.test(pass);
  }
  return password?.length > 7 && strongPassword.test(password);
};

export { validateEmail, validatePassword };
