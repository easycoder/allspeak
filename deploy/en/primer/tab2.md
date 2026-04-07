# Example task (step-by-step)

Build a TicTacToe game. Once you have set up your system (see the Start Here tab), submit these prompts one by one to your AI agent.

## Prompt 1: Build the board

Create a TicTacToe game with a 3x3 grid of cells. The board should be centred on the screen, taking up about half the width. Each cell should be square with a visible border.

## Prompt 2: Add turn-based play

There are two players: the human and the computer. The starting player is chosen randomly. When it's the human's turn, tapping an empty cell claims it (shown in green). When it's the computer's turn, it pauses briefly to "think" then claims a cell (shown in red). Claimed cells can't be tapped again.

## Prompt 3: Detect a winner

After each move, check whether any row, column or diagonal is entirely one colour. If so, announce the winner. If all cells are filled with no winner, announce a draw.

## Prompt 4: Improve the computer's strategy

The computer currently picks cells at random. Give it a basic strategy: block the human from completing a line, and prefer moves that work towards completing its own line.

## What to look for

After each prompt, review what the AI created. You should be able to read the AllSpeak code and understand what it does — that's the point. If something isn't right, tell the AI what to fix in plain language.
