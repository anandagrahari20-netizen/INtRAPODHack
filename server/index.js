import express from "express";
import cors from "cors";
import { readFile, writeFile, mkdir } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import multer from "multer";
import Tesseract from "tesseract.js";

const app = express();

const port = process.env.PORT || 3001;

const serverDir = path.dirname(fileURLToPath(import.meta.url));

const dataDir = path.join(serverDir, "data");
const dataFile = path.join(dataDir, "expenses.json");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ limit: "50mb", extended: true }));

const upload = multer({ storage: multer.memoryStorage() });


// Get expenses
async function getExpenses() {
  let fileText = "[]";

  try {
    fileText = await readFile(dataFile, "utf8");
  } catch {
    await mkdir(dataDir, { recursive: true });
    await writeFile(dataFile, "[]", "utf8");
  }

  try {
    const expenses = JSON.parse(fileText);

    return Array.isArray(expenses) ? expenses : [];
  } catch {
    return [];
  }
}


// Save expenses
async function saveExpenses(expenses) {
  await mkdir(dataDir, { recursive: true });

  await writeFile(
    dataFile,
    JSON.stringify(expenses, null, 2),
    "utf8"
  );
}


// Health check
app.get("/api/health", (_request, response) => {
  response.json({
    ok: true,
    message: "SpendWise backend is running",
  });
});


// Get all expenses
app.get("/api/expenses", async (_request, response) => {
  try {
    const expenses = await getExpenses();

    response.json({
      expenses,
    });
  } catch (error) {
    console.error(error);

    response.status(500).json({
      error: "Failed to load expenses",
    });
  }
});


// Add expense
app.post("/api/expenses", async (request, response) => {
  try {
    const expenses = await getExpenses();

    const newExpense = {
      id: Date.now().toString(),
      ...request.body,
    };

    expenses.unshift(newExpense);

    await saveExpenses(expenses);

    response.status(201).json({
      expense: newExpense,
    });
  } catch (error) {
    console.error(error);

    response.status(500).json({
      error: "Failed to save expense",
    });
  }
});


// OCR endpoint for receipt scanning
app.post("/api/ocr", upload.single("image"), async (request, response) => {
  try {
    if (!request.file) {
      return response.status(400).json({
        error: "No image provided",
      });
    }

    const imageBuffer = request.file.buffer;
    const imageBase64 = imageBuffer.toString("base64");
    const imageDataUrl = `data:${request.file.mimetype};base64,${imageBase64}`;

    const result = await Tesseract.recognize(imageDataUrl, "eng");

    const text = result.data.text;

    response.json({
      success: true,
      text: text,
      confidence: result.data.confidence,
    });
  } catch (error) {
    console.error("OCR Error:", error);

    response.status(500).json({
      error: "Failed to process receipt",
      details: error.message,
    });
  }
});


// Start server
app.listen(port, "0.0.0.0", () => {
  console.log(`SpendWise server running on port ${port}`);
});