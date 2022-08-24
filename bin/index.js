#!/usr/bin/env node

require("dotenv").config();

const chalk = require("chalk");
const { loadUser } = require("../auth-utils");
const { fetchItems } = require("../fetch-utils");
const prompt = require("prompt-sync")();

async function loadPrompts() {
  console.log(chalk.bold.underline.cyan("Welcome to your To Do List"));
  // const email = prompt(chalk.blue("What is your email? "));
  // const password = prompt.hide(chalk.red("What is your password? "));

  const [cookieInfo, user] = await loadUser("julie@example.com", "123456");
  console.log(chalk.blue(`Welcome ${user.email}`));
  const option = prompt(
    chalk.cyanBright("list: list all items\n complete <n>: completes an item\n")
  );
  console.log(option);
  const data = await fetchItems(cookieInfo);
  console.log(data);
}

loadPrompts();
