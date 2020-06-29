DROP TABLE IF EXISTS games;

CREATE TABLE games (
    id SERIAL PRIMARY KEY,
    game VARCHAR(200) NOT NULL,
    info VARCHAR,
    picturefile VARCHAR NOT NULL
);

INSERT INTO games (game,info,picturefile) VALUES ('Sudoku', 'Sudoku is played on a grid of 9 x 9 spaces. Within the rows and columns are 9 squares. Each row, column and square needs to be filled out with the numbers 1-9, without repeating any numbers within the row, column or square. ' ,'/sudoku.PNG');
INSERT INTO games (game,info,picturefile) VALUES ('Memory', 'Who does not know memory? Find all pairs! You can decide how many pairs (16-50). Either choose pictures or numbers or colors (impossible!).','/Memory.PNG');
INSERT INTO games (game,info,picturefile) VALUES ('ConnectFour', 'The aim for both players is to make a straight line of four own pieces; the line can be vertical, horizontal or diagonal.','/ConnectFour.PNG');
INSERT INTO games (game,info,picturefile) VALUES ('Snake', 'Snake is a classic computer game in which a snake moving straight or at right angles through a playing field. The aim of the game is to pick up the randomly appearing fruits and to avoid obstacles, including the snake''s own body.','/Snake.png');