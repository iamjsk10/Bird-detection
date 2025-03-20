// src/components/StyleTest.jsx
export default function StyleTest() {
  return (
    <div className="bg-pokemon-slate min-h-screen p-8">
      {/* Navigation Test */}
      <nav className="bg-pokemon-navy p-4 rounded-lg mb-8">
        <button className="language-switcher">EN/FR</button>
        <a href="#pokedex" className="nav-link ml-4">Pokédex</a>
      </nav>

      {/* Body Text Test */}
      <div className="body-text space-y-4 mb-8">
        <p>Normal body text with Press Start 2P font</p>
        <p className="text-pokemon-red">Colored text test</p>
      </div>

      {/* Hollow Font Test */}
      <h1 className="pokemon-hollow-text text-4xl mb-8">
        Pokémon Hollow Title
      </h1>

      {/* Component Test */}
      <div className="pokedex-entry">
        <h2 className="pokemon-hollow-text text-2xl mb-4">Pidgey</h2>
        <p className="body-text">Height: 0.3m / Weight: 1.8kg</p>
        <button className="detection-button mt-4">
          Analyze Bird
        </button>
      </div>

      {/* Responsive Test */}
      <div className="flex flex-col md:flex-row gap-4 mt-8">
        <div className="bg-pokemon-yellow p-4 w-full md:w-1/2">
          <p className="text-pokemon-navy">Mobile-first column</p>
        </div>
        <div className="bg-pokemon-red p-4 w-full md:w-1/2">
          <p className="text-pokemon-yellow">Responsive layout</p>
        </div>
      </div>
    </div>
  )
}