
use game::GameBinding;

use crate::{bindings::{self, exports::ardo::orderly::core::Guest}};

mod game;

struct Component;

impl Guest for Component {
    type Game = GameBinding;
}

bindings::export!(Component with_types_in bindings);