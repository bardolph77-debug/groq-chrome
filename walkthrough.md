# Quick AI Assistant - Verification Walkthrough

Since automated browser testing is unavailable, please follow these steps to verify the extension manually.

## 1. Test Harness Verification (Quickest)
This verifies the logic without installing the extension.

1.  Open Chrome.
2.  Press `Ctrl+O` (or `Cmd+O` on Mac) and select the file:
    `c:\code\groq\test.html`
3.  **Setup Screen**: You should see "Welcome to Quick AI!".
4.  **API Key**: Enter your Groq API Key (starts with `gsk_...`).
    *   *Note: The test harness saves this to `localStorage`, mimicking the extension storage.*
5.  **Ask a Question**:
    *   Type: "What is the current price of NVIDIA stock?"
    *   Click "Ask AI".
6.  **Verify Web Search**:
    *   The button should change to "Thinking...".
    *   The answer should appear after a few seconds.
    *   **Success**: If the answer contains real-time data (e.g., today's stock price), the `groq/compound` model and web search are working!

## 2. Extension Installation (Final Step)
This installs the actual extension into Chrome.

1.  Open Chrome and navigate to `chrome://extensions`.
2.  Enable **Developer mode** (toggle in the top right).
3.  Click **Load unpacked**.
4.  Select the folder: `c:\code\groq`.
5.  **Pin the Extension**: Click the puzzle piece icon in the toolbar and pin "Quick AI Assistant".
6.  **Test**:
    *   Click the extension icon.
    *   Enter your API Key (if asked again).
    *   Ask a question.

## Troubleshooting
*   **401 Error**: Your API key is invalid. Double-check it.
*   **Network Error**: Check your internet connection.
*   **"Thinking..." hangs**: The API might be slow. Try a simpler question first like "Hello".
