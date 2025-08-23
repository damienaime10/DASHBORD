
# Installer les dépendances

yarn install
yarn add recharts

# Lancer le projet
yarn dev
#ou
yarn start

#Installation des dépendances

# Installer React Icons
yarn add react-icons

# Initialiser Tailwind CSS
npx tailwindcss init -p


#Configuration de Tailwind

#Dans votre fichier tailwind.config.js :

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}


#Ajouter les directives Tailwind
#Dans votre fichier CSS principal (généralement src/index.css) :

@tailwind base;
@tailwind components;
@tailwind utilities;
