# Quick AI - Groq Chrome Extension

⚡ Fast AI answers using Groq's lightning-fast models

## Features

- **Ultra-fast responses** powered by Groq's high-performance LLM infrastructure
- **Multiple AI models** including Llama, Compound (with web search), and more
- **Simple interface** - ask questions right from your browser
- **Secure** - your API key is stored locally in your browser

## Installation

### 1. Get a Groq API Key
1. Visit [Groq Console](https://console.groq.com/)
2. Sign up for a free account
3. Generate your API key

### 2. Install the Extension

#### Manual Installation (Developer Mode)
1. Download or clone this repository
2. Open Chrome and go to `chrome://extensions/`
3. Enable "Developer mode" (toggle in top right)
4. Click "Load unpacked"
5. Select the extension folder
6. Click on the extension icon in your toolbar
7. Enter your Groq API key when prompted

## Usage

1. Click the extension icon in your Chrome toolbar
2. Select your preferred AI model from the dropdown
3. Type your question in the text area
4. Click "Ask AI" or press Enter
5. Get your answer instantly!

### Available Models

- **⚡ Compound** - Web search + tools for up-to-date information
- **🦙 Llama 3.3 70B** - Versatile, high-quality responses
- **🚀 Llama 3.1 8B** - Fast responses for quick queries
- **🌙 Kimi K2** - Alternative model for varied perspectives
- **🦙 Llama 4 Maverick** - Latest Llama 4 model

## Security & Privacy

⚠️ **Important Security Notes:**

- Your API key is stored **locally** in your browser using Chrome's storage API
- The key is **never** transmitted to any server except Groq's official API
- Client-side storage is **not encrypted** - anyone with access to your computer can potentially access it
- **Never share** your API key or extension settings with others
- Consider using a dedicated API key for browser extensions

## Troubleshooting

### Invalid API Key Error
- Double-check your API key in the settings
- Ensure there are no extra spaces when copying
- Verify your key is active at [Groq Console](https://console.groq.com/)

### Extension Not Loading
- Make sure Developer mode is enabled in Chrome
- Try reloading the extension
- Check the browser console for errors (F12)

### API Rate Limits
- Free Groq accounts have rate limits
- If you hit limits, wait a few minutes and try again
- Consider upgrading your Groq plan for higher limits

## Development

### Project Structure
```
/
├── manifest.json       # Extension configuration
├── popup.html         # Main popup interface
├── popup.js           # Popup logic and API calls
├── settings.html      # Settings page
├── settings.js        # Settings logic
├── icons/             # Extension icons
└── README.md          # This file
```

### Building from Source
1. Clone the repository
2. No build process required - it's plain HTML/CSS/JS
3. Load as unpacked extension in Chrome

## Contributing

Contributions are welcome! Please feel free to submit issues or pull requests.

## License

MIT License - feel free to use and modify as needed.

## Support

For issues with:
- **The extension**: Open an issue on GitHub
- **Groq API**: Visit [Groq Support](https://groq.com/)
- **API keys**: Check [Groq Console](https://console.groq.com/)

## Changelog

### v1.0.1 (Latest)
- Added API response validation guards
- Improved error handling

### v1.0.0
- Initial release
- Multiple model support
- Settings page
- API key management
