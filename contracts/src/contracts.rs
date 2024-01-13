#![allow(unused_variables)]

#[macro_use]
extern crate pbc_contract_codegen;
extern crate pbc_contract_common;
extern crate pbc_lib;

use pbc_contract_common::address::Address;
use pbc_contract_common::context::ContractContext;
use pbc_contract_common::events::EventGroup;
use pbc_contract_common::zk::ZkClosed;
use pbc_contract_common::zk::{CalculationStatus, SecretVarId, ZkInputDef, ZkState, ZkStateChange};
use pbc_zk::Sbi32;
use read_write_rpc_derive::ReadWriteRPC;
use read_write_state_derive::ReadWriteState;

#[derive(ReadWriteState, ReadWriteRPC, Debug)]
#[repr(u8)]

enum SecretVarType {
    #[discriminant(0)]
    Record {},
    // #[discriminant(1)]
}

#[state]
struct ContractState {

}

#[init(zk = true)]
fn initialize(ctx: ContractContext, zk_state: ZkState<SecretVarType>) -> ContractState {
    ContractState {
   
    }
}

#[zk_on_secret_input(shortname = 0x40)]
fn add_record (
    context: ContractContext,
    state: ContractState,
    zk_state: ZkState<SecretVarType>,
) -> (
    ContractState,
    Vec<EventGroup>,
    ZkInputDef<SecretVarType, Sbi32>,
) {

}


#[action(shortname = 0x01, zk = true)]