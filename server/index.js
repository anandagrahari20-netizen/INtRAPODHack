import express from "express";
import cors from "cors";
import { readFile, writeFile } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3001;

const serverDir = path.dirname(fileURLToPath(import.meta.url));
const dataFile = path.join(serverDir, "data", "expenses.json");

app.use(cors());
app.use(express.json());

async function getExpenses() {
  let fileText = "[]";

  try {
    fileText = await readFile(dataFile, "utf8");
  } catch {
    await writeFile(dataFile, "[]", "utf8");
  }

  try {
    const expenses = JSON.parse(fileText);
    return Array.isArray(expenses) ? expenses : [];
  } catch {
    return [];
  }
}

async function saveExpenses(expenses) {
  await writeFile(dataFile, JSON.stringify(expenses, null, 2), "utf8");
}

app.get("/api/health", (_request, response) => {
  response.json({ ok: true });
});

app.get("/api/expenses", async (_request, response) => {
  const expenses = await getExpenses();
  response.json({ expenses });
});

app.post("/api/expenses", async (request, response) => {
  const expenses = await getExpenses();
  const newExpense = {
    id: Date.now().toString(),
    ...request.body,
  };

  expenses.unshift(newExpense);
  await saveExpenses(expenses);

  response.status(201).json({ expense: newExpense });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
