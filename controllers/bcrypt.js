import bcrypt from "bcrypt";

export const hashPassword = async (value) => {
  let output;
  await bcrypt.hash(value, 10).then((hash) => {
    // console.log(hash);
    output = hash;
  });
  return output;
};
