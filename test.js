// Mock chrome.storage.local
const mockBrowser = {
    storage: {
        local: {
            get: async (keys) => {
                const result = {};
                for (const key of keys) {
                    result[key] = localStorage.getItem(key);
                }
                return result;
            },
            set: async (items) => {
                for (const [key, value] of Object.entries(items)) {
                    localStorage.setItem(key, value);
                }
            }
        }
    }
};

class QuickAI {
    constructor() {
        this.apiKey = null;
        this.init();
    }

    async init() {
        // Load saved API key
        const result = await mockBrowser.storage.local.get(['groqApiKey']);
        this.apiKey = result.groqApiKey;

        // Set up UI
        this.setupEventListeners();

        // Show appropriate screen
        if (this.apiKey) {
            this.showMainScreen();
        } else {
            this.showSetupScreen();
        }
    }

    setupEventListeners() {
        // Setup screen
        document.getElementById('saveApiKey').addEventListener('click', () => this.saveApiKey());
        document.getElementById('apiKeyInput').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.saveApiKey();
        });

        // Main screen
        document.getElementById('askBtn').addEventListener('click', () => this.askQuestion());
        document.getElementById('questionInput').addEventListener('keypress', (e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                this.askQuestion();
            }
        });
        document.getElementById('settingsBtn').addEventListener('click', () => {
            alert('Settings not available in test harness');
        });
    }

    async saveApiKey() {
        const apiKey = document.getElementById('apiKeyInput').value.trim();

        if (!apiKey) {
            this.showError('Please enter your API key');
            return;
        }

        // Save to storage
        await mockBrowser.storage.local.set({ groqApiKey: apiKey });
        this.apiKey = apiKey;

        this.showMainScreen();
    }

    async askQuestion() {
        const question = document.getElementById('questionInput').value.trim();

        if (!question) {
            return;
        }

        const askBtn = document.getElementById('askBtn');
        const answerDiv = document.getElementById('answer');

        // Show loading state
        askBtn.disabled = true;
        askBtn.textContent = 'Thinking...';
        answerDiv.className = 'answer loading';
        answerDiv.textContent = 'Getting your answer...';
        answerDiv.classList.remove('hidden');

        try {
            const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${this.apiKey}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    model: 'groq/compound',
                    messages: [
                        {
                            role: 'system',
                            content: 'You are a helpful assistant. Keep responses concise and under 100 words when possible.'
                        },
                        {
                            role: 'user',
                            content: question
                        }
                    ],
                    max_tokens: 200,
                    temperature: 0.7
                })
            });

            if (!response.ok) {
                throw new Error(`API Error: ${response.status}`);
            }

            const data = await response.json();
            const answer = data.choices[0].message.content;

            // Show answer
            answerDiv.className = 'answer';
            answerDiv.textContent = answer;

        } catch (error) {
            console.error('Error:', error);
            answerDiv.className = 'answer error';
            answerDiv.textContent = 'Sorry, something went wrong. Please check your API key and try again.';
        } finally {
            // Reset button
            askBtn.disabled = false;
            askBtn.textContent = 'Ask AI';
        }
    }

    showMainScreen() {
        document.getElementById('setupScreen').classList.add('hidden');
        document.getElementById('mainScreen').classList.remove('hidden');
        document.getElementById('questionInput').focus();
    }

    showSetupScreen() {
        document.getElementById('mainScreen').classList.add('hidden');
        document.getElementById('setupScreen').classList.remove('hidden');
        document.getElementById('apiKeyInput').focus();
    }

    showError(message) {
        alert(message);
    }
}

// Initialize the app
new QuickAI();
