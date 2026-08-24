<p align="center">
  <b>🎲 Lanza tu Suerte</b><br>
  <sub>Juego de dados para dos jugadores (Pig) — tirá, guardá y corré hasta los 100 puntos.</sub>
</p>

<p align="center">
  <img src="screenshot.png" alt="Lanza tu Suerte" width="560">
</p>

<p align="center">
  <a href="https://anthoniriv.github.io/lanzatusuerte/"><img src="https://img.shields.io/badge/Jugar_ahora-00C853?style=for-the-badge&logo=github" alt="Jugar ahora"></a>
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black" alt="JavaScript">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/Hosting-GitHub_Pages-222222?style=flat&logo=github" alt="GitHub Pages">
</p>

---

## Qué hace

Un juego de dados para dos jugadores (la variante «Pig»). Tirás el dado para sumar puntos a tu turno, pero si sacás un **1** perdés lo acumulado. Podés «guardar» (hold) para bancar tus puntos y pasar el turno. Gana el primero en llegar a **100**.

## Funcionalidades

- Dos jugadores (pide el nombre de cada uno al empezar).
- Puntaje **actual** (turno) y **total** por jugador.
- Turnos alternados automáticamente.
- Tira un 1 → pierde el acumulado del turno y cambia el turno.
- Detección de ganador al llegar a 100.
- Botón de **nueva partida**.
- Cero dependencias: HTML, CSS y JavaScript puro.

## Jugar

**[anthoniriv.github.io/lanzatusuerte](https://anthoniriv.github.io/lanzatusuerte/)** · [Ver código](https://github.com/anthoniriv/lanzatusuerte)

## Cómo se juega

| Acción | Resultado |
|--------|-----------|
| 🎲 **Tirar** | Suma el valor del dado a tu puntaje actual |
| ⚠️ **Sacar un 1** | Pierde el acumulado del turno y pasa el turno |
| ✋ **Guardar** | Banca tu puntaje y pasa el turno |
| 🏆 **Ganar** | Primer jugador en llegar a **100** puntos |

## Uso local

No necesita build:

```bash
npx serve .
```

## Tecnologías

| Capa | Stack |
|------|-------|
| Lógica | JavaScript (vanilla) |
| Estructura | HTML5 |
| Estilos | CSS3 |

---

<p align="center"><sub>Hecho con ❤️ por <a href="https://github.com/anthoniriv">Anthoni Rivera</a></sub></p>
