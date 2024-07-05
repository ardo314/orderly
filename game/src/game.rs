use crate::shuffled_list::shuffled_list;

pub struct Game {
    pieces: Vec<u32>,
    tries: u32,
}

impl Game {
    pub fn new(piece_count: u32) -> Self {
        Game {
            pieces: shuffled_list(piece_count),
            tries: 0,
        }
    }

    pub fn pieces(&self) -> &Vec<u32> {
        &self.pieces
    }

    pub fn tries(&self) -> u32 {
        self.tries
    }

    pub fn is_over(&self) -> bool {
        self.correct_pieces_count() == self.pieces.len() as u32
    }

    pub fn correct_pieces_count(&self) -> u32 {
        let mut count = 0;
        for i in 0..self.pieces.len() {
            if self.pieces[i] == i as u32 { 
                count += 1;
            }
        }
        count
    }

    pub fn play(&mut self, a: u32, b: u32) {
        // Dont allow playing if the game is over
        if self.is_over() {
            return;
        }

        // Dont allow the same piece to be swapped
        if a == b {
            return;
        }

        self.tries += 1;
        self.pieces.swap(a as usize, b as usize);
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_play() {
        let mut game = Game::new(10);

        let initial_pieces = game.pieces.clone();
        game.play(0, 1);
        let after_play_pieces = game.pieces.clone();

        assert_ne!(initial_pieces, after_play_pieces);
        assert!(game.tries() == 1);

        game.play(2, 3);
        assert!(game.tries() == 2);
    }
}