use std::cell::RefCell;

use crate::{bindings::exports::ardo::orderly::core::GuestGame, game::Game};

pub struct GameBinding {
    game: RefCell<Game>,
}

impl GuestGame for GameBinding {
    
    fn new(piece_count: u32) -> Self {
        Self {
            game: RefCell::new(Game::new(piece_count)),
        
        }
    }
    
    fn pieces(&self) -> Vec<u32> {
        self.game.borrow().pieces().iter().map(|&x| x as u32).collect()
    }
    
    fn is_over(&self) -> bool {
        self.game.borrow().is_over()
    }
    
    fn tries(&self) -> u32 {
        self.game.borrow().tries()
    }
    
    fn correct_pieces_count(&self) -> u32 {
        self.game.borrow().correct_pieces_count()
    }
    
    fn play(&self, a: u32, b: u32) {
        self.game.borrow_mut().play(a, b)
    }
}