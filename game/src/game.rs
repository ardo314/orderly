use crate::shuffled_list::shuffled_list;


const PIECE_COUNT: usize = 12;

pub struct Game {
    pieces: Vec<usize>,
    tries: u32,
    is_over: bool,
}

impl Game {
    pub fn new() -> Self {
        Game {
            pieces: shuffled_list(PIECE_COUNT),
            tries: 0,
            is_over: false,
        }
    }

    pub fn pieces(&self) -> &Vec<usize> {
        &self.pieces
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

    pub fn play(&mut self, a: usize, b: usize) {
        if self.is_over {
            return;
        }

        self.tries += 1;
        self.pieces.swap(a, b);
        self.is_over = self.correct_pieces_count() == PIECE_COUNT;
    }
}
