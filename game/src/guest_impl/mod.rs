
use game::GameBinding;

use crate::{bindings::{self, exports::ardo::orderly::core::Guest}, shuffled_list::{self}};

mod game;

struct Component;

impl Guest for Component {
    type Game = GameBinding;
    
    fn shuffled_list(length: u32) -> Vec<u32> {
        shuffled_list::shuffled_list(length)
    }
}

bindings::export!(Component with_types_in bindings);