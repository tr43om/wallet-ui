import ACTIcon from "assets/icons/crypto/ACTIcon.svg";
import BCHIcon from "assets/icons/crypto/BCHIcon.svg";
import BNTIcon from "assets/icons/crypto/BNTIcon.svg";
import BTCIcon from "assets/icons/crypto/BTCIcon.svg";
import COMPIcon from "assets/icons/crypto/COMPIcon.svg";
import EMCIcon from "assets/icons/crypto/EMCIcon.svg";
import ETHIcon from "assets/icons/crypto/ETHIcon.svg";
import FTMIcon from "assets/icons/crypto/FTMIcon.svg";
import GINIcon from "assets/icons/crypto/GINIcon.svg";
import INCIcon from "assets/icons/crypto/INCIcon.svg";
import LTCIcon from "assets/icons/crypto/LTCIcon.svg";
import MANAIcon from "assets/icons/crypto/MANAIcon.svg";
import NGCIcon from "assets/icons/crypto/NGCIcon.svg";
import REPIcon from "assets/icons/crypto/REPIcon.svg";
import SNTIcon from "assets/icons/crypto/SNTIcon.svg";
import SOLIcon from "assets/icons/crypto/SOLIcon.svg";
import TRXIcon from "assets/icons/crypto/TRXIcon.svg";
import USDTIcon from "assets/icons/crypto/USDT.svg";
import XLMIcon from "assets/icons/crypto/XLMIcon.svg";

import russianFlagIcon from "assets/icons/flags/russia.svg";

import englandFlagIconfrom from "assets/icons/flags/england.svg";

export const languages = [
  { value: "english", label: "English", iconUrl: englandFlagIconfrom },
  { value: "russian", label: "Russian", iconUrl: russianFlagIcon },
];

export const cryptos: Array<{ name: string; shortname: string; icon: string }> =
  [
    { name: "Bitcoin", shortname: "BTC", icon: BTCIcon },
    { name: "Etherium", shortname: "ETH", icon: ETHIcon },
    { name: "Tether", shortname: "USDT", icon: USDTIcon },
    { name: "Stellar", shortname: "XLM", icon: XLMIcon },
    { name: "Bitcoin Cash", shortname: "BCH", icon: BCHIcon },
    { name: "Augur", shortname: "REP", icon: REPIcon },
    { name: "Litecoin", shortname: "LTC", icon: LTCIcon },
    { name: "TRON", shortname: "TRX", icon: TRXIcon },
    { name: "Decentraland", shortname: "MANA", icon: MANAIcon },
    { name: "Achain", shortname: "ACT", icon: ACTIcon },
    { name: "Fantom", shortname: "FTM", icon: FTMIcon },
    { name: "Compound", shortname: "COMP", icon: COMPIcon },
    { name: "Status", shortname: "SNT", icon: SNTIcon },
    { name: "Bancor", shortname: "BNT", icon: BNTIcon },
    { name: "Solana", shortname: "SOL", icon: SOLIcon },
    { name: "GINCoin", shortname: "GIN", icon: GINIcon },
    { name: "NAGA", shortname: "NGC", icon: NGCIcon },
    { name: "Emercoin", shortname: "EMC", icon: EMCIcon },
    { name: "Ink", shortname: "INK", icon: INCIcon },
  ];
