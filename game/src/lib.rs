#[allow(warnings)]
mod bindings;
mod guest_impl;

const PIECE_COUNT: usize = 10;

pub struct Game {
    pieces: [usize; PIECE_COUNT],
    tries: u32,
    is_over: bool,
}

impl Game {
    pub fn new() -> Game {
        Game {
            pieces: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            tries: 0,
            is_over: false,
        }
    }

    pub fn pieces(&self) -> [usize; PIECE_COUNT] {
        self.pieces
    }

    pub fn tries(&self) -> u32 {
        self.tries
    }

    pub fn is_over(&self) -> bool {
        self.is_over
    }

    pub fn correct_pieces_count(&self) -> usize {
        let mut count = 0;
        for i in 0..self.pieces.len() {
            if self.pieces[i] == i {
                count += 1;
            }
        }
        count
    }

    pub fn play(&mut self, from: usize, to: usize) {
        if self.is_over {
            return;
        }

        self.tries += 1;

        let temp = self.pieces[from];
        self.pieces[from] = self.pieces[to];
        self.pieces[to] = temp;

        self.is_over = self.correct_pieces_count() == PIECE_COUNT;
    }
}