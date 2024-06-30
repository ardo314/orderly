
use crate::{bindings::{self, exports::ardo::orderly::core::Guest}, game::Game};

mod game;

struct Component;

impl Guest for Component {
    type Game = Game;
}

bindings::export!(Component with_types_in bindings);