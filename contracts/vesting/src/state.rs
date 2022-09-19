use cosmwasm_schema::cw_serde;
use cosmwasm_std::{Addr, Uint128};
use cw_storage_plus::{Item, Map};

use crate::msg::Schedule;

#[cw_serde]
pub struct Position {
    /// Total amount of MARS allocated
    pub total: Uint128,
    /// Amount of MARS already withdrawn
    pub withdrawn: Uint128,
    /// The user's vesting schedule
    pub vest_schedule: Schedule,
}

pub const POSITIONS: Map<&Addr, Position> = Map::new("positions");

pub const OWNER: Item<Addr> = Item::new("owner");
pub const UNLOCK_SCHEDULE: Item<Schedule> = Item::new("unlock_schedule");
