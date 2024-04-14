"use server";

export const formsubmit = async (formdata) => {
  const name = await formdata.get("name");
  console.log(name);
};
