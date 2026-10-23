import dw1 from './dw1'
import dw2 from './dw2'
import dw3 from './dw3'

export const GAMES = [dw1, dw2, dw3]
export const getGame = (id) => GAMES.find((g) => g.id === id)
export const allTasks = (game) => game.sections.flatMap((s) => s.tasks)
export const totalTasks = (game) => allTasks(game).length

/** gameId de una tarea a partir de su id ("dw1-agumon" -> "dw1") */
export const gameIdOfTask = (taskId) => taskId.split('-')[0]

export const SOURCES = [
  { name: "Guía de reclutamiento DW1 — Almar's Guides", url: 'https://almarsguides.com/retro/walkthroughs/ps1/games/digimonworld/fullplaythrough/recruitabledigimon/' },
  { name: 'DW1 Recruitment Guide (SpaceWalker) — GameFAQs', url: 'https://www.video-games-museum.com/en/faqs/Playstation/26215-Digimon-World.pdf' },
  { name: 'Digimon World PSX Wiki — Recruitment', url: 'https://digimon-world-psx.fandom.com/wiki/Digimon_recruitment' },
  { name: 'Recruitment Guide — PSLegends / GameTips', url: 'https://pslegends.com/digimon-world-recruitment-guide/' },
  { name: "Guía completa DW2 — Almar's Guides", url: 'https://almarsguides.com/retro/walkthroughs/PS1/Games/DigimonWorld2/FullPlaythrough/' },
  { name: 'DW2 Missions — StrategyWiki', url: 'https://strategywiki.org/wiki/Digimon_World_2/Table_of_Contents' },
  { name: 'DW2 — Digimon Wiki / Neoseeker', url: 'https://digimon.neoseeker.com/wiki/Digimon_World_2' },
  { name: 'Guía completa DW3 — StratsWiki', url: 'https://stratswiki.com/digimon-world-3/walkthrough/part-1/' },
  { name: 'DW3 Bosses — StratsWiki', url: 'https://stratswiki.com/digimon-world-3/game-mechanics/bosses/' },
  { name: 'DW3 Guide & Walkthrough (Divinesage) — GameFAQs', url: 'https://gamefaqs.gamespot.com/ps/562323-digimon-world-3/faqs/17573' },
]
