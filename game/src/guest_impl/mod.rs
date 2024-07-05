
use game::GameBinding;

use crate::{bindings::{self, exports::ardo::orderly::core::Guest}, shuffled_list::shuffled_list};

mod game;

struct Component;

impl Guest for Component {
    type Game = GameBinding;
    
    fn shuffle(length: u32) -> Vec<u32> {
        shuffled_list(length as usize).into_iter().map(|x| x as u32).collect()
    }
    
}

bindings::export!(Component with_types_in bindings);