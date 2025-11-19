#!/bin/bash

# CV Matcher - Test Setup Script
# Ten skrypt pomaga w szybkim setupie i testowaniu aplikacji

echo "🚀 CV Matcher - Setup & Test"
echo "================================"
echo ""

# Sprawdzenie Node.js
echo "📦 Sprawdzam Node.js..."
if command -v node &> /dev/null
then
    NODE_VERSION=$(node --version)
    echo "✅ Node.js zainstalowany: $NODE_VERSION"
    
    # Sprawdź czy wersja >= 20
    MAJOR_VERSION=$(echo $NODE_VERSION | cut -d'.' -f1 | sed 's/v//')
    if [ "$MAJOR_VERSION" -lt 20 ]; then
        echo "⚠️  UWAGA: Potrzebujesz Node.js 20 lub nowszego!"
        echo "   Pobierz z: https://nodejs.org/"
        exit 1
    fi
else
    echo "❌ Node.js nie jest zainstalowany!"
    echo "   Pobierz z: https://nodejs.org/"
    exit 1
fi

echo ""

# Sprawdzenie czy jesteśmy w odpowiednim folderze
if [ ! -f "package.json" ]; then
    echo "❌ Błąd: Nie znaleziono package.json"
    echo "   Upewnij się, że jesteś w folderze cv-matcher"
    exit 1
fi

echo "📁 Folder projektu: OK"
echo ""

# Sprawdzenie .env
echo "🔑 Sprawdzam konfigurację..."
if [ ! -f ".env" ]; then
    echo "⚠️  Brak pliku .env"
    echo "   Tworzę z .env.example..."
    cp .env.example .env
    echo "✅ Utworzono .env"
    echo ""
    echo "⚠️  WAŻNE: Edytuj plik .env i dodaj swój klucz API!"
    echo "   ANTHROPIC_API_KEY=sk-ant-api03-twój-klucz-tutaj"
    echo ""
    read -p "Naciśnij Enter gdy dodasz klucz API..."
fi

# Sprawdzenie czy klucz API jest ustawiony
if grep -q "your_api_key_here" .env; then
    echo "❌ Klucz API nie został ustawiony!"
    echo "   Otwórz plik .env i dodaj swój klucz"
    exit 1
fi

echo "✅ Plik .env: OK"
echo ""

# Instalacja zależności
if [ ! -d "node_modules" ]; then
    echo "📦 Instaluję zależności (to może potrwać kilka minut)..."
    npm install
    
    if [ $? -eq 0 ]; then
        echo "✅ Zależności zainstalowane"
    else
        echo "❌ Błąd podczas instalacji zależności"
        exit 1
    fi
else
    echo "✅ Zależności już zainstalowane"
fi

echo ""
echo "================================"
echo "✅ Setup zakończony pomyślnie!"
echo "================================"
echo ""
echo "🎉 Możesz teraz uruchomić aplikację:"
echo ""
echo "   npm run dev"
echo ""
echo "A następnie otwórz w przeglądarce:"
echo ""
echo "   http://localhost:3000"
echo ""
echo "================================"
