#!/usr/bin/env node

require("dotenv").config();

const chalk = require("chalk");
const prompt = require("prompt-sync")();
const fetch = require("cross-fetch");

console.log(chalk.bold.underline.cyan("Welcome to your To Do List"));
const email = prompt(chalk.blue("What is your email? "));
const password = prompt.hide(chalk.red("What is your password? "));

console.log({ email, password });
loadUser(email, password);

async function loadUser(email, password) {
  const resp = await fetch(`${process.env.API_URL}/api/v1/users/sessions`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
    credentials: "include",
  });
  const data = await resp.json();
  console.log(data);
}
