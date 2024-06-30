use crate::{bindings::exports::ardo::orderly::core::GuestGame, game::Game};

impl GuestGame for Game {
    fn new() -> Self {
        Game::new()
    }
    
    fn pieces(&self) -> Vec<u32> {
        self.pieces().iter().map(|&x| x as u32).collect()
    }
}